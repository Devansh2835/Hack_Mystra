"use client"

import { motion, useInView } from "framer-motion"
import Lottie from "lottie-react"
import { useEffect, useState, useRef } from "react"
import courseAnimation from "@/public/animations/Trophy.json"

const messages = [
  "Congratulations!",
  "You've mastered this course!",
  "Next chapter awaits 🚀",
]

export default function CourseCompletionSection() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      {/* Radial glow effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left side - Trophy Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0.5, opacity: 0, rotate: -10 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/30 to-cyan-400/30 blur-3xl rounded-full animate-pulse" />
          <div className="relative z-10 w-[300px] sm:w-[400px]">
            <Lottie animationData={courseAnimation} loop={true} />
          </div>
        </motion.div>

        {/* Right side - Text with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center lg:text-left"
        >
          {/* Animated Heading with Ombré */}
          <motion.h2
            key={currentMessage}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 120
            }}
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.6))',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            {messages[currentMessage]}
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              color: '#f1f5f9',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              lineHeight: '1.8',
              maxWidth: '34rem',
              margin: '0 auto',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}
            className="lg:mx-0"
          >
            You've successfully completed your magical Mystra course!  
            Unlock new challenges, badges, and your special certificate.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-block"
          >
            <button 
              className="px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgb(147, 51, 234), rgb(236, 72, 153), rgb(6, 182, 212))',
                color: 'white',
                boxShadow: '0 15px 35px -5px rgba(147, 51, 234, 0.5), 0 0 20px rgba(236, 72, 153, 0.3)'
              }}
            >
              <span className="relative z-10">🎓 View Certificate</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Floating sparkles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 2 + 'px',
                height: Math.random() * 3 + 2 + 'px',
                background: `rgba(${Math.random() > 0.5 ? '192, 132, 252' : '236, 72, 153'}, ${Math.random() * 0.5 + 0.5})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(147, 51, 234, 0.6)`
              }}
              animate={{
                y: [0, -60, -120],
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Floating orbs for ambiance */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </section>
  )
}
