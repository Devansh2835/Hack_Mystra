"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopicContent from "./TopicContent";

interface Topic {
  id: number;
  slug: string;
  title: string;
  xp: number;
  content: string;
}

interface SectionProps {
  title: string;
  topics: Topic[];
  color: string;
}

export default function CourseSection({ title, topics, color }: SectionProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const toggleTopic = (slug: string) => {
    setOpenSlug(openSlug === slug ? null : slug);
  };

  return (
    <div className="bg-[#0b1226]/60 backdrop-blur-md border border-indigo-700/40 rounded-2xl p-6 shadow-lg shadow-indigo-900/40 transition-all">
      <h2
        className="text-2xl font-bold mb-4 tracking-wide"
        style={{ color }}
      >
        {title}
      </h2>

      <div className="space-y-3">
        {topics.map((topic, idx) => (
          <motion.div
            key={`${title}-${topic.slug || idx}`}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0f172a] rounded-xl p-4 border border-indigo-800 hover:shadow-lg hover:shadow-indigo-900/30 transition cursor-pointer"
            onClick={() => toggleTopic(topic.slug)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-indigo-200">
                  {topic.title}
                </h3>
                <div className="text-sm text-indigo-400">XP {topic.xp}</div>
              </div>
              <div className="text-indigo-300">
                {openSlug === topic.slug ? "▲" : "▼"}
              </div>
            </div>

            <AnimatePresence>
              {openSlug === topic.slug && (
                <motion.div
                  key="topic-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <TopicContent content={topic.content} slug={topic.slug} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
