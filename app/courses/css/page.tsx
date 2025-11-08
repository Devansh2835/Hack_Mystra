"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cssSheet } from "../data/cssSheet"
import XPTracker from "../components/XPTracker"
import FilterBar from "../components/FilterBar"
import CourseSection from "../components/CourseSection"

import MouseTrail from "@/components/mouse-trail"
import StarryBackground from "@/components/star-background"

export default function CSSCoursePage() {
  const [sections, setSections] = useState(cssSheet)
  const [filter, setFilter] = useState("All")
  const [xp, setXP] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem("css-progress")
    if (saved) setSections(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("css-progress", JSON.stringify(sections))
    setXP(sections.flatMap(s => s.topics).filter(t => t.done).reduce((a, t) => a + t.xp, 0))
  }, [sections])

  const toggle = (sid: number, tid: number) => {
    const updated = sections.map(s => s.id === sid ? {
      ...s,
      topics: s.topics.map(t => t.id === tid ? { ...t, done: !t.done } : t)
    } : s)
    setSections(updated)
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#020617] via-[#111827] to-[#020617] overflow-hidden">
      <StarryBackground />
      <MouseTrail />
      <motion.h1
        className="text-center text-6xl font-extrabold mt-16 mb-4"
        style={{
          background: "linear-gradient(90deg, #3b82f6, #06b6d4, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.6))"
        }}
      >
        🎨 CSS Mastery Path
      </motion.h1>
      <p className="text-center text-blue-300 mb-10">Style your imagination ✨</p>

      <div className="max-w-5xl mx-auto px-6">
        <XPTracker totalXP={xp} />
        <FilterBar
          currentFilter={filter}
          setFilter={setFilter}
          totalTopics={sections.flatMap(s => s.topics).length}
          completedTopics={sections.flatMap(s => s.topics).filter(t => t.done).length}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        {sections.map((sec) => (
          <CourseSection
            key={sec.id}
            title={sec.title}
            topics={sec.topics}
            color={sec.color}
            onToggle={(id) => toggle(sec.id, id)}
          />
        ))}
      </div>
    </div>
  )
}
