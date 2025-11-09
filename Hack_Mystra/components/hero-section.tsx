"use client"

import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface HeroSectionProps {
  onAuthClick?: () => void;
}

export default function HeroSection({ onAuthClick }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const router = useRouter()
  const [isSignedIn, setIsSignedIn] = useState(false)

  // parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsSignedIn(!!token)
  }, [])

  const handleGetStarted = () => {
    if (isSignedIn) router.push("/courses")
    else router.push("/signin")
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={
            mounted
              ? {
                  x: mousePosition.x * 0.05,
                  y: mousePosition.y * 0.05,
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            x: { type: "spring", stiffness: 100, damping: 30 },
            y: { type: "spring", stiffness: 100, damping: 30 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={
            mounted
              ? {
                  x: -mousePosition.x * 0.03,
                  y: -mousePosition.y * 0.03,
                  scale: [1.2, 1, 1.2],
                }
              : {}
          }
          transition={{
            x: { type: "spring", stiffness: 100, damping: 30 },
            y: { type: "spring", stiffness: 100, damping: 30 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 },
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Characters */}
        <div className="mb-12 flex justify-center items-end gap-4 sm:gap-8 h-64 sm:h-80">
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{
              y: -15,
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, -20, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="w-24 sm:w-32 h-32 sm:h-40 rounded-xl bg-linear-to-br from-purple-500/30 to-purple-700/30 border border-purple-400/50 flex items-center justify-center shadow-2xl backdrop-blur-sm relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl sm:text-6xl relative z-10">🧙‍♀️</div>
            </motion.div>
            <p className="text-purple-300 text-xs sm:text-sm mt-3 font-bold tracking-wide">
              The Witch
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{
              y: -15,
              scale: 1.05,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
          >
            <motion.div
              className="w-24 sm:w-32 h-32 sm:h-40 rounded-xl bg-linear-to-br from-purple-600/30 to-pink-600/30 border border-pink-400/50 flex items-center justify-center shadow-2xl backdrop-blur-sm relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 0 40px rgba(236, 72, 153, 0.6)",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl sm:text-6xl relative z-10">🧟</div>
            </motion.div>
            <p className="text-pink-300 text-xs sm:text-sm mt-3 font-bold tracking-wide">
              Cyber Zombie
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{
              y: -15,
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, -20, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="w-24 sm:w-32 h-32 sm:h-40 rounded-xl bg-linear-to-br from-purple-500/30 to-purple-700/30 border border-purple-400/50 flex items-center justify-center shadow-2xl backdrop-blur-sm relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl sm:text-6xl relative z-10">🧙‍♂️</div>
            </motion.div>
            <p className="text-purple-300 text-xs sm:text-sm mt-3 font-bold tracking-wide">
              Cyber Wizard
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{
              y: -15,
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, -18, 0],
              transition: {
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
          >
            <motion.div
              className="w-24 sm:w-32 h-32 sm:h-40 rounded-xl bg-linear-to-br from-purple-500/30 to-purple-700/30 border border-purple-400/50 flex items-center justify-center shadow-2xl backdrop-blur-sm relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl sm:text-6xl relative z-10">⚔️</div>
            </motion.div>
            <p className="text-purple-300 text-xs sm:text-sm mt-3 font-bold tracking-wide">
              Tech Knight
            </p>
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div variants={itemVariants} className="mb-10">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 text-balance leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "linear-gradient(90deg, #d8b4fe, #a78bfa, #22d3ee, #a78bfa, #d8b4fe)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))",
              letterSpacing: "-0.02em",
            }}
          >
            Unlock the Future of Magical Learning
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed"
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Experience a world where spells meet AI, and learning becomes legendary.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={handleGetStarted}
            className="px-10 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(236, 72, 153))",
              color: "white",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 40px rgba(168, 85, 247, 0.8), 0 20px 40px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {onAuthClick && (
            <motion.button
              onClick={onAuthClick}
              className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-purple-400 text-purple-300 hover:bg-purple-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
