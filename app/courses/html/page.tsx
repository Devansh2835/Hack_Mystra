"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const htmlSheet = [
  {
    id: 1,
    title: "HTML Basics",
    color: "violet",
    topics: [
      { id: 1, name: "HTML Structure", xp: 10, completed: false },
      { id: 2, name: "Elements & Tags", xp: 10, completed: false },
    ],
  },
  {
    id: 2,
    title: "Text & Formatting",
    color: "purple",
    topics: [
      { id: 3, name: "Headings", xp: 10, completed: false },
      { id: 4, name: "Paragraphs", xp: 10, completed: false },
    ],
  },
];

export default function HTMLCoursePage() {
  const [sections, setSections] = useState(htmlSheet);
  const [filter, setFilter] = useState("All");
  const [xp, setXP] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("html-progress");
    if (saved) setSections(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("html-progress", JSON.stringify(sections));
    setXP(
      sections
        .flatMap((s) => s.topics)
        .filter((t) => t.completed)
        .reduce((a, t) => a + t.xp, 0)
    );
  }, [sections]);

  const toggleTopic = (sectionId: number, topicId: number) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              topics: section.topics.map((topic) =>
                topic.id === topicId
                  ? { ...topic, completed: !topic.completed }
                  : topic
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b0015] via-[#120027] to-[#000010] text-white font-sans overflow-y-auto">
      {/* Stars Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {mounted &&
          [...Array(40)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-wide"
            style={{
              background:
                "linear-gradient(90deg, #a78bfa, #7dd3fc, #c084fc, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Chamber of HTML Secrets
          </motion.h1>

          <motion.p
            className="text-indigo-300 mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Learn the cosmic foundation of the web — build your universe with HTML.
          </motion.p>

          <div className="mt-6 text-xl font-semibold text-indigo-200">
            ✦ {xp} XP Earned ✦
          </div>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 bg-slate-900/30 border border-indigo-500/30 rounded-xl p-4 backdrop-blur-xl justify-center mb-10">
          {["All", "Basics", "Advanced", "Completed"].map((item) => (
            <motion.button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === item
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-slate-800/50 text-indigo-300 hover:bg-slate-700/60"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="relative bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent border border-indigo-500/30 rounded-2xl p-6 backdrop-blur-xl"
            >
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/30">
                    📘
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-indigo-100">
                    {section.title}
                  </h2>
                </div>
                <motion.div
                  className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.topics.map((topic) => (
                  <motion.div
                    key={topic.id}
                    className={`relative border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all ${
                      topic.completed
                        ? "bg-gradient-to-r from-indigo-800/40 to-purple-800/40 border-purple-400/50"
                        : "bg-slate-900/40 border-indigo-500/20 hover:bg-slate-800/50 hover:border-indigo-400/40"
                    }`}
                    onClick={() => toggleTopic(section.id, topic.id)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${
                          topic.completed
                            ? "border-purple-400 bg-purple-500/40"
                            : "border-indigo-400"
                        }`}
                      >
                        {topic.completed && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-sm"
                          >
                            ✅
                          </motion.span>
                        )}
                      </div>
                      <span
                        className={`font-medium ${
                          topic.completed
                            ? "text-white"
                            : "text-indigo-200 hover:text-white"
                        }`}
                      >
                        {topic.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                      +{topic.xp} XP
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0015] to-transparent pointer-events-none z-10" />
    </div>
  );
}
