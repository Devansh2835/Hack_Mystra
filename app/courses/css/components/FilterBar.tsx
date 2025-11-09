"use client";

import { motion } from "framer-motion";

interface FilterBarProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
  totalTopics: number;
  completedTopics: number;
}

export default function FilterBar({
  currentFilter,
  setFilter,
  totalTopics,
  completedTopics,
}: FilterBarProps) {
  const filters = ["All", "Completed", "In Progress"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-between items-center mb-10 bg-[#0e0525]/80 backdrop-blur-md border border-cyan-800 rounded-2xl p-4 shadow-md shadow-cyan-900/40"
    >
      {/* === Filters Section === */}
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <motion.button
            key={f}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              currentFilter === f
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-700/30"
                : "bg-cyan-950/40 border border-cyan-800 text-cyan-300 hover:bg-cyan-900/60"
            }`}
          >
            {f}
          </motion.button>
        ))}
      </div>

      {/* === Progress Display === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-cyan-300 font-medium"
      >
        🧮 Progress:{" "}
        <span className="text-cyan-400">
          {completedTopics}/{totalTopics}
        </span>{" "}
        Enchantments mastered
      </motion.div>
    </motion.div>
  );
}
