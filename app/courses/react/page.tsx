"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { reactSheet } from "./data/reactSheet";
import CourseSection from "./components/CourseSection";
import XPTracker from "./components/XPTracker";
import FilterBar from "./components/FilterBar";
import StarryBackground from "./components/StarryBackground";
import MouseTrail from "./components/MouseTrail";

export default function ReactCoursePage() {
  const [sections, setSections] = useState(reactSheet);
  const [filter, setFilter] = useState("All");
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("react-progress");
    if (saved) setSections(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("react-progress", JSON.stringify(sections));
    setXP(sections.flatMap(s => s.topics).reduce((a, t) => a + t.xp, 0));
  }, [sections]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#030014] via-[#0f172a] to-[#030014] text-white font-sans">
      {/* Background Effects */}
      <StarryBackground />
      <MouseTrail />

      {/* Content Container */}
      <div className="relative z-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pt-20 pb-10 text-center"
        >
          {/* Magical Circle Decoration */}
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-2 border-purple-500/30"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-purple-400/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold relative z-10"
            style={{
              background: "linear-gradient(90deg, #38bdf8, #818cf8, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))",
            }}
            animate={{
              filter: [
                "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))",
                "drop-shadow(0 0 40px rgba(168, 85, 247, 0.8))",
                "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ⚛️ Hogwarts School of React Sorcery
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-indigo-300 mt-4 text-lg md:text-xl max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Master React magic through Grimoires, Trials, and enchanted challenges.
          </motion.p>

          {/* Decorative stars */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${30 + i * 20}%`,
                top: `${40 + i * 10}px`,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* XP Tracker with entrance animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <XPTracker totalXP={xp} />
          </motion.div>

          {/* Filter Bar with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <FilterBar
              currentFilter={filter}
              setFilter={setFilter}
              totalTopics={sections.flatMap(s => s.topics).length}
              completedTopics={0}
            />
          </motion.div>

          {/* Course Sections with staggered animation */}
          <motion.div
            className="space-y-8 pb-20 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <CourseSection
                  title={section.title}
                  topics={section.topics}
                  color={section.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none z-10" />
    </div>
  );
}