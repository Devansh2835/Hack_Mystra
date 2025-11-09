// app/courses/components/FilterBar.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FilterBarProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
  totalTopics: number;
  completedTopics: number;
}

const filters = ["All", "Basics", "Intermediate", "Advanced", "Completed", "Incomplete"];

export default function FilterBar({
  currentFilter,
  setFilter,
  totalTopics,
  completedTopics,
}: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const completionRate = Math.round((completedTopics / totalTopics) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:flex-row md:items-center md:justify-between bg-purple-950/40 border border-purple-500/30 rounded-2xl px-4 py-3 backdrop-blur-lg shadow-lg mb-6"
    >
      {/* Left side: Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
              currentFilter === filter
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 shadow-lg shadow-purple-500/30"
                : "text-purple-300 border-purple-500/30 hover:bg-purple-800/40 hover:text-white"
            } transition-all`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Right side: Stats */}
      <div className="mt-3 md:mt-0 flex items-center gap-3 text-purple-300 text-sm">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-3 py-1.5 bg-purple-900/40 rounded-xl border border-purple-500/30"
        >
          <span>📚 {completedTopics}/{totalTopics} Completed</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-3 py-1.5 bg-purple-900/40 rounded-xl border border-purple-500/30"
        >
          <span>⚡ {completionRate}% Progress</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
