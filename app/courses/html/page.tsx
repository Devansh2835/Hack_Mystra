"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { htmlSheet } from "./data/htmlSheet";
import CourseSection from "./components/CourseSection";
import XPTracker from "./components/XPTracker";
import FilterBar from "./components/FilterBar";
import StarryBackground from "./components/StarryBackground";
import MouseTrail from "./components/MouseTrail";

export default function HTMLCoursePage() {
  const [sections, setSections] = useState(htmlSheet);
  const [filter, setFilter] = useState("All");
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("html-progress");
    if (saved) setSections(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("html-progress", JSON.stringify(sections));
    setXP(sections.flatMap(s => s.topics).reduce((a, t) => a + t.xp, 0));
  }, [sections]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1a0018] via-[#2a0030] to-[#0a0010] overflow-hidden text-white font-sans">
      <StarryBackground />
      <MouseTrail />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-extrabold mt-14"
        style={{
          background: "linear-gradient(90deg, #ff8c00, #ffa500, #ffb347)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        🧙‍♂️ The Chamber of HTML Secrets
      </motion.h1>

      <p className="text-center text-orange-300 mt-3 mb-10 text-lg">
        Learn the foundational spells of the web — structure your magic with HTML.
      </p>

      <div className="max-w-5xl mx-auto px-6">
        <XPTracker totalXP={xp} />
        <FilterBar
          currentFilter={filter}
          setFilter={setFilter}
          totalTopics={sections.flatMap(s => s.topics).length}
          completedTopics={0}
        />

        <div className="space-y-10 pb-20">
          {sections.map((section) => (
            <CourseSection
              key={section.id}
              title={section.title}
              topics={section.topics}
              color={section.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
