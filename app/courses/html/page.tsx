"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { htmlSheet } from "../data/htmlSheet"
import XPTracker from "../components/XPTracker"
import FilterBar from "../components/FilterBar"
import CourseSection from "../components/CourseSection"
import StarryBackground from "@/components/star-background"
import MouseTrail from "@/components/mouse-trail"

export default function HTMLCoursePage() {
  const [sections, setSections] = useState(htmlSheet)
  const [filter, setFilter] = useState("All")
  const [xp, setXP] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem("html-progress")
    if (saved) setSections(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("html-progress", JSON.stringify(sections))
    setXP(sections.flatMap(s => s.topics).filter(t => t.done).reduce((a, t) => a + t.xp, 0))
  }, [sections])

  const toggle = (sid: number, tid: number) => {
    const updated = sections.map(s => s.id === sid ? {
      ...s,
      topics: s.topics.map(t => t.id === tid ? { ...t, done: !t.done } : t)
    } : s)
    setSections(updated)
  }

  const filtered =
    filter === "All"
      ? sections
      : filter === "Completed"
      ? sections.map(s => ({ ...s, topics: s.topics.filter(t => t.done) }))
      : filter === "Incomplete"
      ? sections.map(s => ({ ...s, topics: s.topics.filter(t => !t.done) }))
      : sections

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#0b0018] via-[#1a0b2e] to-[#0b0018] overflow-hidden">
      <StarryBackground />
      <MouseTrail />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-6xl font-extrabold mt-16 mb-4"
        style={{
          background: "linear-gradient(90deg, #f59e0b, #fbbf24, #f472b6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 20px rgba(255, 183, 77, 0.6))"
        }}
      >
        🧱 HTML Mastery Path
      </motion.h1>
      <p className="text-center text-purple-300 mb-10">Build the foundation of the web 🧠</p>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <XPTracker totalXP={xp} />
        <FilterBar
          currentFilter={filter}
          setFilter={setFilter}
          totalTopics={sections.flatMap(s => s.topics).length}
          completedTopics={sections.flatMap(s => s.topics).filter(t => t.done).length}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        {filtered.map((sec) => (
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
