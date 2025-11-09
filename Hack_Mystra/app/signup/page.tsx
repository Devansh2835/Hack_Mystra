"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AuthModal from '@/components/auth-form';
import dynamic from 'next/dynamic';

// Dynamic import disables SSR for this component to avoid hydration mismatch errors
const StarryBackground = dynamic(() => import("@/components/star-background"), { ssr: false });

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <StarryBackground />
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Floating Magical Characters */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left - Witch */}
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-400/30 flex items-center justify-center shadow-2xl backdrop-blur-sm"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-5xl">🧙‍♀️</span>
        </motion.div>

        {/* Top Right - Cyber Wizard */}
        <motion.div
          className="absolute top-32 right-24 w-28 h-28 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 border-2 border-cyan-400/40 flex items-center justify-center shadow-2xl backdrop-blur-sm"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(34, 211, 238, 0.3)",
              "0 0 40px rgba(34, 211, 238, 0.6)",
              "0 0 20px rgba(34, 211, 238, 0.3)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <motion.span 
            className="text-5xl"
            animate={{
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🧠
          </motion.span>
        </motion.div>

        {/* Bottom Left - Zombie */}
        <motion.div
          className="absolute bottom-32 left-32 w-24 h-24 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-pink-400/30 flex items-center justify-center shadow-2xl backdrop-blur-sm"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <span className="text-5xl">🧟</span>
        </motion.div>

        {/* Bottom Right - Tech Knight */}
        <motion.div
          className="absolute bottom-40 right-32 w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-400/30 flex items-center justify-center shadow-2xl backdrop-blur-sm"
          animate={{
            y: [0, -35, 0],
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <span className="text-5xl">⚔️</span>
        </motion.div>

        {/* Center Top - Magic Book */}
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-20 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 border border-purple-300/30 flex items-center justify-center shadow-xl backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <span className="text-4xl">📚</span>
        </motion.div>

        {/* Random floating sparkles - only render after mount */}
        {mounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              background: `rgba(${Math.random() > 0.5 ? '192, 132, 252' : '236, 72, 153'}, ${Math.random() * 0.6 + 0.4})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(168, 85, 247, 0.8)`
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Auth Modal - Shifted 10% to the right */}
      <main style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem 15%' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl"
          style={{ marginLeft: '10%' }}
        >
          <AuthModal showPassword={showPassword} setShowPassword={setShowPassword} />
        </motion.div>
      </main>
    </div>
  );
}