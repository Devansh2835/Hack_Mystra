"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cssSheet } from "../data/cssSheet";
import StarryBackground from "../components/StarryBackground";
import MouseTrail from "../components/MouseTrail";
import XPTracker from "../components/XPTracker";
import { useState } from "react";

export default function LessonsIndex() {
  const [xp, setXp] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b0018] via-[#1a0b2e] to-[#0b0018] text-white">
      {/* Magical Background */}
      <StarryBackground />
      <MouseTrail />

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-20 pb-10"
      >
        <h1
          className="text-6xl md:text-7xl font-extrabold mb-4 tracking-wide"
          style={{
            background: "linear-gradient(90deg, #00e0ff, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(168,85,247,0.5))",
          }}
        >
          🧵 CSS Spell Lessons
        </h1>
        <p className="text-purple-300 text-lg">
          Unlock the secrets of design, color, and layout enchantments ✨
        </p>
      </motion.div>

      {/* XP Tracker */}
      <div className="max-w-3xl mx-auto px-6">
        <XPTracker totalXP={xp} />
      </div>

      {/* Lessons List */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
        {cssSheet.map((lesson: { id: string | number; title: string; subtitle?: string }, index: number) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="relative group bg-gradient-to-br from-purple-700/30 to-indigo-800/30 backdrop-blur-xl rounded-3xl p-6 border border-purple-700/40 shadow-md shadow-purple-900/40 cursor-pointer overflow-hidden"
          >
            {/* Glow Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
              animate={{
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />

            {/* Lesson Info */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 text-cyan-300">
                {lesson.title}
              </h2>
              <p className="text-sm text-purple-200/80 mb-4 line-clamp-3">
                {lesson.subtitle || "Master this CSS charm."}
              </p>

              <Link
                href={`/courses/css/lessons/${lesson.id}`}
                className="inline-block mt-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium tracking-wide text-purple-100 hover:bg-white/20 transition"
              >
                Begin Lesson 🪄
              </Link>
            </div>

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-purple-400 py-6 border-t border-purple-800/40 text-sm">
        © {new Date().getFullYear()} Hogwarts School of Web Enchantment 💫
      </footer>
    </div>
  );
}
