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
    <div className="relative min-h-screen bg-gradient-to-b from-[#030014] via-[#0f172a] to-[#030014] overflow-hidden text-white font-sans">
      <StarryBackground />
      <MouseTrail />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-extrabold mt-14"
        style={{
          background: "linear-gradient(90deg, #38bdf8, #818cf8, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ⚛️ Hogwarts School of React Sorcery
      </motion.h1>

      <p className="text-center text-indigo-300 mt-3 mb-10 text-lg">
        Master React magic through Grimoires, Trials, and enchanted challenges.
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
