"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import AnimatedCrow from "./animated-crow";
import { useSignIn, useSignUp, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface AuthModalProps {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export default function AuthModal({ showPassword, setShowPassword }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [verificationPending, setVerificationPending] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const router = useRouter();
  
  const { isLoaded: signInLoaded, signIn, setActive: setSignInActive } = useSignIn();
  const { isLoaded: signUpLoaded, signUp, setActive: setSignUpActive } = useSignUp();
  const { isSignedIn } = useAuth();

  // Handle existing sessions - automatically redirect
  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  const syncUserToMongoDB = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to sync user');
      }
      
      const data = await response.json();
      console.log('✅ User synced to MongoDB:', data);
      return data;
    } catch (error) {
      console.error('❌ Failed to sync user to MongoDB:', error);
      return null;
    }
  };

  const resendVerificationCode = async () => {
    if (!signUp) return;
    
    setResendLoading(true);
    setError(null);
    
    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setError("✅ New verification code sent! Check your email.");
      setTimeout(() => setError(null), 3000);
    } catch (err: any) {
      console.error("Resend error:", err);
      setError(err.errors?.[0]?.message || "Failed to resend code");
    } finally {
      setResendLoading(false);
    }
  };

  const handleVerification = async () => {
    if (!verificationCode.trim()) {
      setError("Please enter the verification code");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      if (!signUpLoaded || !signUp) {
        setError("Authentication service is loading. Please wait...");
        return;
      }

      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode.trim(),
      });

      if (result.status === "complete") {
        await setSignUpActive({ session: result.createdSessionId });
        await syncUserToMongoDB();
        
        setTimeout(() => {
          router.push("/dashboard");
        }, 100);
      } else {
        setError("Verification incomplete. Please check the code and try again.");
      }
    } catch (err: any) {
      console.error("Verification error:", err);
      setError(err.errors?.[0]?.message || "Invalid code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        // Handle Sign In
        if (!signInLoaded || !signIn) {
          setError("Authentication service is loading. Please wait...");
          return;
        }

        const result = await signIn.create({
          identifier: email.trim(),
          password,
        });

        if (result.status === "complete") {
          await setSignInActive({ session: result.createdSessionId });
          await syncUserToMongoDB();
          
          setTimeout(() => {
            router.push("/dashboard");
          }, 100);
        } else {
          setError("Sign in incomplete. Please try again.");
        }
      } else {
        // Handle Sign Up
        if (!signUpLoaded || !signUp) {
          setError("Authentication service is loading. Please wait...");
          return;
        }

        // First, create the signup
        const result = await signUp.create({
          emailAddress: email.trim(),
          password,
        });

        console.log("Signup result:", result);

        // Always prepare email verification after signup
        if (result.status === "missing_requirements") {
          try {
            // Prepare email verification
            const prepareResult = await signUp.prepareEmailAddressVerification({ 
              strategy: "email_code" 
            });
            
            console.log("Prepare email verification result:", prepareResult);
            
            setVerificationPending(true);
            setError(null);
            setLoading(false);
            return;
          } catch (prepareErr: any) {
            console.error("Failed to prepare verification:", prepareErr);
            setError("Failed to send verification email. Please try again.");
            setLoading(false);
            return;
          }
        }

        // If signup is complete without verification (shouldn't happen normally)
        if (result.status === "complete") {
          await setSignUpActive({ session: result.createdSessionId });
          await syncUserToMongoDB();
          
          setTimeout(() => {
            router.push("/dashboard");
          }, 100);
        }
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      const errorMessage = err.errors?.[0]?.longMessage || err.errors?.[0]?.message || `Failed to ${isLogin ? "sign in" : "sign up"}`;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignIn = async (strategy: "oauth_google" | "oauth_github") => {
    if (!signIn) return;
    
    setLoading(true);
    setError(null);
    
    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard"
      });
    } catch (err: any) {
      console.error("OAuth error:", err);
      setError(err.errors?.[0]?.message || "Failed to sign in with OAuth");
      setLoading(false);
    }
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
    setError(null);
    setVerificationPending(false);
    setVerificationCode("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      if (verificationPending) {
        handleVerification();
      } else if (email && password) {
        handleSubmit();
      }
    }
  };

  // Show loading state while Clerk is initializing
  if (!signInLoaded || !signUpLoaded) {
    return (
      <div className="w-full max-w-md">
        <div className="relative backdrop-blur-2xl bg-purple-950/30 border border-purple-400/40 rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
            <p className="text-purple-200">Loading authentication...</p>
          </div>
        </div>
      </div>
    );
  }

  // Don't show the form if user is already signed in (will redirect)
  if (isSignedIn) {
    return (
      <div className="w-full max-w-md">
        <div className="relative backdrop-blur-2xl bg-purple-950/30 border border-purple-400/40 rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
            <p className="text-purple-200">Redirecting to dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {/* Hidden CAPTCHA container for Clerk */}
      <div id="clerk-captcha" style={{ display: 'none' }}></div>
      
      <div className="relative backdrop-blur-2xl bg-purple-950/30 border border-purple-400/40 rounded-3xl p-8 shadow-2xl transition-all duration-500">
        {/* Strong glowing border layer */}
        <div className="absolute inset-0 rounded-3xl border border-purple-500/60 shadow-[0_0_40px_10px_rgba(168,85,247,0.6),0_0_80px_20px_rgba(147,51,234,0.4)] animate-[pulseGlow_3s_ease-in-out_infinite]" />
        {/* Subtle gradient shimmer layer */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/15 via-transparent to-blue-500/15" />
        {/* Inner faint reflection */}
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(168,85,247,0.3)]" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1
              className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 mb-2"
              style={{ fontFamily: "HalloWitchZ", position: "relative", top: 12 }}
            >
              Mystra
            </h1>
            <p className="text-purple-200/70 text-sm">
              {verificationPending 
                ? "📧 Check your email for the verification code" 
                : isLogin 
                  ? "Welcome back to the cyber realm" 
                  : "Begin your mystical journey"}
            </p>
          </div>

          <div className="space-y-5" onKeyPress={handleKeyPress}>
            {!verificationPending && (
              <>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-purple-950/50 border border-purple-400/30 rounded-xl text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                    disabled={loading}
                    autoComplete="email"
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-24 bg-purple-950/50 border border-purple-400/30 rounded-xl text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                    disabled={loading}
                    minLength={8}
                    autoComplete={isLogin ? "current-password" : "new-password"}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <AnimatedCrow isWatching={showPassword} />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-purple-300 hover:text-purple-200 transition-colors p-1"
                      aria-label="Toggle password visibility"
                      disabled={loading}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* VERIFICATION CODE INPUT */}
            {verificationPending && (
              <div className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="000000"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-4 py-3 bg-purple-950/50 border border-purple-400/30 rounded-xl text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 text-center text-2xl tracking-[0.5em] font-mono"
                    disabled={loading}
                    maxLength={6}
                    autoComplete="one-time-code"
                    inputMode="numeric"
                    autoFocus
                  />
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-purple-300/70 text-xs">
                      Sent to: <span className="text-purple-200">{email}</span>
                    </p>
                    <button
                      type="button"
                      onClick={resendVerificationCode}
                      disabled={resendLoading || loading}
                      className="text-purple-300 hover:text-purple-200 text-xs underline transition-colors disabled:opacity-50"
                    >
                      {resendLoading ? "Sending..." : "Resend code"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className={`border rounded-lg p-3 ${
                error.startsWith('✅') 
                  ? 'bg-green-500/20 border-green-500/50' 
                  : 'bg-red-500/20 border-red-500/50'
              }`}>
                <p className={`text-sm ${error.startsWith('✅') ? 'text-green-300' : 'text-red-300'}`}>
                  {error}
                </p>
              </div>
            )}

            <button
              onClick={verificationPending ? handleVerification : handleSubmit}
              disabled={loading || (verificationPending && verificationCode.length !== 6) || (!verificationPending && (!email || !password))}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-950 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading 
                ? "Processing..." 
                : verificationPending 
                  ? "Verify Code" 
                  : isLogin 
                    ? "Login" 
                    : "Sign Up"}
            </button>
          </div>

          {/* OAuth Buttons - Hide during verification */}
          {!verificationPending && (
            <>
              <div className="mt-6 space-y-3">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-purple-400/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-purple-950/30 text-purple-300/70">Or continue with</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOAuthSignIn("oauth_google")}
                  disabled={loading}
                  className="w-full py-3 rounded-xl border border-purple-400/50 bg-purple-950/30 text-purple-200 hover:bg-purple-600/50 hover:border-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>

              {/* Switch between login/signup */}
              <div className="mt-6 text-center">
                <p className="text-purple-200/70 text-sm">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={handleModeSwitch}
                    disabled={loading}
                    className="text-purple-300 hover:text-purple-200 font-semibold transition-colors underline decoration-purple-400/50 hover:decoration-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLogin ? "Create one" : "Login"}
                  </button>
                </p>
              </div>
            </>
          )}

          {/* Back button during verification */}
          {verificationPending && (
            <div className="mt-6 text-center">
              <button
                onClick={handleModeSwitch}
                disabled={loading}
                className="text-purple-300 hover:text-purple-200 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Back to sign up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pulsing glow animation */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 40px 10px rgba(168, 85, 247, 0.6),
              0 0 80px 20px rgba(147, 51, 234, 0.4);
            border-color: rgba(168, 85, 247, 0.7);
          }
          50% {
            box-shadow: 0 0 60px 20px rgba(168, 85, 247, 0.9),
              0 0 90px 30px rgba(147, 51, 234, 0.7);
            border-color: rgba(186, 115, 255, 0.9);
          }
        }
      `}</style>
    </div>
  );
}