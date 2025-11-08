"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import StarryBackground from "@/components/star-background"
import MouseTrail from "@/components/mouse-trail"

const courses = [
  {
    id: 1,
    title: "HTML",
    desc: "Master the foundation of the web 🌐",
    icon: "🧱",
    color: "from-orange-500 to-yellow-500",
    path: "/courses/html",
  },
  {
    id: 2,
    title: "CSS",
    desc: "Style your imagination with colors & layouts 🎨",
    icon: "🕸️",
    color: "from-blue-500 to-cyan-500",
    path: "/courses/css",
  },
  {
    id: 3,
    title: "Tailwind",
    desc: "Speed up styling with utility-first design ⚡",
    icon: "🦇",
    color: "from-purple-500 to-pink-500",
    path: "/courses/tailwind",
  },
  {
    id: 4,
    title: "JavaScript",
    desc: "Make your sites come alive 💫",
    icon: "👻",
    color: "from-yellow-400 to-orange-500",
    path: "/courses/javascript",
  },
  {
    id: 5,
    title: "React",
    desc: "Craft dynamic UI spells with React ⚛️",
    icon: "🧙‍♀️",
    color: "from-indigo-500 to-purple-600",
    path: "/courses/react",
  },
  {
    id: 6,
    title: "Java",
    desc: "Master the logic and structure of programming ☕",
    icon: "🧠",
    color: "from-red-500 to-orange-600",
    path: "/courses/java",
  },
]

export default function CoursesHubPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0b0018] via-[#1a0b2e] to-[#0b0018] text-white">
      <StarryBackground />
      <MouseTrail />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center pt-24 mb-16"
      >
        <h1
          className="text-6xl md:text-7xl font-extrabold mb-3 tracking-wide"
          style={{
            background: "linear-gradient(90deg, #a855f7, #ec4899, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 25px rgba(168, 85, 247, 0.6))",
          }}
        >
          🎃 Mystra Courses
        </h1>
        <p className="text-purple-300 text-lg md:text-xl">
          Begin your journey into the magical realms of Web Development 🪄
        </p>
      </motion.div>

      {/* Floating Ghosts and Stars (Ambient Animation) */}
      {mounted &&
        [...Array(10)].map((_, i) => (
          <motion.div
            key={`ghost-${i}`}
            className="absolute text-2xl md:text-3xl opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            👻
          </motion.div>
        ))}

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {courses.map((course, index) => (
          <Link key={course.id} href={course.path}>
            <motion.div
              className={`relative group rounded-3xl p-8 cursor-pointer bg-gradient-to-br ${course.color} shadow-lg shadow-purple-800/30 overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.08, y: -10 }}
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-purple-700/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="text-6xl">{course.icon}</div>
                <h2 className="text-3xl font-bold tracking-tight">{course.title}</h2>
                <p className="text-sm text-white/80 max-w-xs">{course.desc}</p>
                <motion.div
                  className="mt-4 px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide text-purple-100 hover:bg-white/20 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  Start Learning ✨
                </motion.div>
              </div>

              {/* Decorative Floating Sparkles */}
              {mounted &&
                [...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-purple-400 py-8 border-t border-purple-800/50 text-sm">
        © {new Date().getFullYear()} Mystra Academy 🪄 — Crafted with Code & Magic 💜
      </footer>
    </div>
  )
}
