"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import StarryBackground from "@/components/star-background";
import MouseTrail from "@/components/mouse-trail";

const courses = [
  {
    id: 1,
    title: "HTML Foundations",
    desc: "Learn the fundamental spells of web creation — the structure of every site.",
    icon: "📜",
    color: "from-[#b57aff] to-[#00f5ff]",
    path: "/courses/html",
  },
  {
    id: 2,
    title: "CSS Enchantments",
    desc: "Bring color, layout, and motion to your ideas — weave design magic.",
    icon: "🧶",
    color: "from-[#9b5de5] to-[#00bbf9]",
    path: "/courses/css",
  },
  {
    id: 3,
    title: "JavaScript Charms",
    desc: "Animate, respond, and breathe life into your web pages using logic and spells.",
    icon: "✨",
    color: "from-[#a855f7] to-[#06b6d4]",
    path: "/courses/javascript",
  },
  {
    id: 4,
    title: "React Potions",
    desc: "Brew interactive components and magical UIs with React.",
    icon: "⚛️",
    color: "from-[#8b5cf6] to-[#ec4899]",
    path: "/courses/react",
  },
];

const roadmapSections = [
  { title: "🎯 Foundations", items: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Responsive Design"] },
  { title: "🧠 Frontend Mastery", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "UI Design"] },
  { title: "⚙️ Backend & Databases", items: ["Node.js", "MongoDB", "Express", "Authentication", "Hosting"] },
  { title: "🌌 Advanced & Web3", items: ["TypeScript", "Solidity", "Ethers.js", "Blockchain Basics"] },
];

export default function CoursesHubPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0016] text-white font-sans">
      <StarryBackground />
      <MouseTrail />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0018] via-[#1a0b2e] to-[#0b0018] opacity-90" />

      {mounted &&
        [...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl opacity-60 select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            {["🎃", "👻", "🕸️", "🕷️", "💀"][Math.floor(Math.random() * 5)]}
          </motion.span>
        ))}

      {/* === Layout === */}
      <div className="relative z-20 flex flex-col lg:flex-row max-w-7xl mx-auto pt-20 pb-16 px-6 gap-8">
        {/* === Left Sidebar: Roadmap === */}
        <aside className="lg:w-1/3 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md p-6 shadow-[0_0_25px_rgba(155,0,255,0.1)]">
          <h2 className="text-2xl font-bold mb-4 magic-text pulse-glow">🧭 Learning Roadmap</h2>
          <div className="space-y-6">
            {roadmapSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="border-l-4 border-purple-500 pl-4"
              >
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{section.title}</h3>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-purple-100/80 flex items-center gap-2 hover:text-cyan-300 transition">
                      <span className="w-2 h-2 bg-purple-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-purple-700/30 to-indigo-800/30 border border-white/10 animate-pulse-slow">
            <p className="text-sm text-purple-200 leading-relaxed">
              🦇 “Each spell mastered adds to your power. From HTML incantations to React potions, 
              your journey through the dark arts of webcraft begins here...”
            </p>
          </div>
        </aside>

        {/* === Right: Courses List === */}
        <main className="flex-1 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold magic-text text-center mb-10 pulse-glow"
          >
            Mystra
          </motion.h1>

          {courses.map((course, i) => (
            <Link key={course.id} href={course.path}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl p-6 shadow-md transition-all hover:shadow-[0_0_25px_rgba(155,0,255,0.25)] cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="relative z-10 flex items-center gap-5">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl sm:text-5xl"
                  >
                    {course.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-1">{course.title}</h2>
                    <p className="text-sm text-purple-100/80 max-w-md">{course.desc}</p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="z-10 inline-block mt-2 sm:mt-0 px-4 py-2 rounded-full bg-gradient-to-r from-[#9b5de5] to-[#00f5ff] text-white text-sm font-semibold shadow-[0_0_10px_rgba(155,0,255,0.2)]"
                >
                  Start →
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </main>
      </div>

      {/* === Footer === */}
      <footer className="text-center text-purple-400 py-6 border-t border-purple-800/40 text-sm relative z-20">
        © {new Date().getFullYear()} Mystra Academy — Spells, Scrolls & Syntax 🎃
      </footer>
    </div>
  );
}
