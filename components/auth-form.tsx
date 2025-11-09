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
  const router = useRouter();
  
  const { isLoaded: signInLoaded, signIn, setActive: setSignInActive } = useSignIn();
  const { isLoaded: signUpLoaded, signUp, setActive: setSignUpActive } = useSignUp();
  const { isSignedIn, signOut } = useAuth();

  // Handle existing sessions
  useEffect(() => {
    if (isSignedIn) {
      setError('You are already signed in. Please sign out first or continue to dashboard.');
    }
  }, [isSignedIn]);

  const handleVerification = async () => {
    setError(null);
    setLoading(true);

    try {
      if (!signUpLoaded || !signUp) {
        setError("Authentication service is loading. Please wait...");
        setLoading(false);
        return;
      }

      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === "complete") {
        await setSignUpActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message ?? "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    if (isLogin) {
      // Handle Sign In
      if (!signInLoaded || !signIn) {
        setError("Authentication service is loading. Please wait...");
        setLoading(false);
        return;
      }

      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setSignInActive({ session: result.createdSessionId });
        
        // ✅ ADD THIS: Sync user to MongoDB after sign-in
        try {
          const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const data = await response.json();
          console.log('✅ User synced to MongoDB:', data);
        } catch (error) {
          console.error('❌ Failed to sync user to MongoDB:', error);
        }
        
        router.push("/dashboard");
      }
    } else {
      // Handle Sign Up
      if (!signUpLoaded || !signUp) {
        setError("Authentication service is loading. Please wait...");
        setLoading(false);
        return;
      }

      const result = await signUp.create({
        emailAddress: email,
        password,
      });

      // Check if email verification is required
      if (result.status === "missing_requirements") {
        // Email verification required - show code input
        await signUp.prepareEmailAddressVerification();
        setVerificationPending(true);
        setError("Verification code sent to your email. Please enter it below.");
        setLoading(false);
        return;
      }

      if (result.status === "complete") {
        await setSignUpActive({ session: result.createdSessionId });
        
        // ✅ ADD THIS: Sync user to MongoDB after sign-up
        try {
          const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const data = await response.json();
          console.log('✅ User synced to MongoDB:', data);
        } catch (error) {
          console.error('❌ Failed to sync user to MongoDB:', error);
        }
        
        router.push("/dashboard");
      }
    }
  } catch (err: any) {
    console.error("Auth error:", err);
    setError(err.errors?.[0]?.message ?? `Failed to ${isLogin ? "sign in" : "sign up"}`);
  } finally {
    setLoading(false);
  }
};

  // Show signed-in state if user is already authenticated
  if (isSignedIn) {
    return (
      <div className="w-full max-w-md">
        <div className="relative backdrop-blur-2xl bg-purple-950/30 border border-purple-400/40 rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <h2 className="text-xl text-purple-200 mb-4">Already Signed In</h2>
            <p className="text-purple-300 mb-6">You are already logged into your account.</p>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/dashboard')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => signOut()}
                className="w-full py-3 rounded-xl border border-red-500/50 text-red-300 hover:bg-red-500/20 transition-all duration-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!signInLoaded || !signUpLoaded) {
    return (
      <div className="w-full max-w-md">
        <div className="relative backdrop-blur-2xl bg-purple-950/30 border border-purple-400/40 rounded-3xl p-8 shadow-2xl">
          <p className="text-center text-purple-200">Loading authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
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
              {isLogin ? "Welcome back to the cyber realm" : "Begin your mystical journey"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-purple-950/50 border border-purple-400/30 rounded-xl text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                required
                disabled={loading || verificationPending}
              />
            </div>

            {!verificationPending && (
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-24 bg-purple-950/50 border border-purple-400/30 rounded-xl text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                  required
                  disabled={loading}
                  minLength={8}
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
            )}

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* VERIFICATION CODE INPUT */}
            {verificationPending && (
              <div className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Enter verification code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full px-4 py-3 bg-purple-950/50 border border-purple-400/30 rounded-xl text-purple-100 placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                    required
                    disabled={loading}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleVerification}
                  disabled={loading || !verificationCode}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Verifying..." : "Verify Code"}
                </button>
              </div>
            )}

            {!verificationPending && (
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-950 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
              </button>
            )}
          </form>

          {/* OAuth Buttons - Hide during verification */}
          {!verificationPending && (
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
                type="button"
                onClick={() => signIn?.authenticateWithRedirect({
                  strategy: "oauth_google",
                  redirectUrl: "/sso-callback",
                  redirectUrlComplete: "/dashboard"
                })}
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

              {/* <button
                type="button"
                onClick={() => signIn?.authenticateWithRedirect({
                  strategy: "oauth_github",
                  redirectUrl: "/sso-callback",
                  redirectUrlComplete: "/dashboard"
                })}
                disabled={loading}
                className="w-full py-3 rounded-xl border border-purple-400/50 bg-purple-950/30 text-purple-200 hover:bg-purple-600/50 hover:border-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Continue with GitHub
              </button> */}
            </div>
          )}

          {/* Switch between login/signup - Hide during verification */}
          {!verificationPending && (
            <div className="mt-6 text-center">
              <p className="text-purple-200/70 text-sm">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError(null);
                  }}
                  disabled={loading}
                  className="text-purple-300 hover:text-purple-200 font-semibold transition-colors underline decoration-purple-400/50 hover:decoration-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Switch login/signup"
                >
                  {isLogin ? "Create one" : "Login"}
                </button>
              </p>
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