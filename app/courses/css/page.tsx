"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cssSheet } from "./data/cssSheet";
import CourseSection from "./components/CourseSection";
import XPTracker from "./components/XPTracker";
import FilterBar from "./components/FilterBar";

export default function CSSCoursePage() {
  const [sections, setSections] = useState(cssSheet);
  const [filter, setFilter] = useState("All");
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("css-progress");
    if (saved) setSections(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("css-progress", JSON.stringify(sections));
    const totalXP = sections.flatMap((s) => s.topics).filter((t) => t.done).reduce((acc, t) => acc + t.xp, 0);
    setXP(totalXP);
  }, [sections]);

  const toggle = (sid: number, tid: number) => {
    const updated = sections.map((s) =>
      s.id === sid
        ? {
            ...s,
            topics: s.topics.map((t) => (t.id === tid ? { ...t, done: !t.done } : t)),
          }
        : s
    );
    setSections(updated);
  };

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-extrabold mt-12 mb-6 text-cyan-300"
      >
       
      </motion.h1>
      <p className="text-center text-cyan-400 mb-12 italic">
        “If HTML is the bones, CSS is the magic that gives it life.”
      </p>

      <XPTracker totalXP={xp} />

      <FilterBar
        currentFilter={filter}
        setFilter={setFilter}
        totalTopics={sections.flatMap((s) => s.topics).length}
        completedTopics={sections.flatMap((s) => s.topics).filter((t) => t.done).length}
      />

      {sections.map((sec) => (
        <CourseSection
          key={sec.id}
          id={sec.id}
          title={sec.title}
          topics={sec.topics}
          color={sec.color}
          onToggle={(id: number) => toggle(sec.id, id)}
        />
      ))}
    </div>
  );
}
