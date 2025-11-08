"use client";

import { motion } from "framer-motion";

export default function XPTracker({ totalXP }: { totalXP: number }) {
  const maxXP = 1000; // You can adjust or compute dynamically
  const progress = Math.min(totalXP / maxXP, 1) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-10 bg-[#0a0a1f]/70 border border-cyan-800 rounded-2xl p-5 shadow-lg shadow-cyan-900/40"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-cyan-300 font-bold text-lg tracking-wide">
          ✨ Enchanter XP
        </h3>
        <span className="text-cyan-400 font-medium">
          {totalXP} / {maxXP} XP
        </span>
      </div>

      <div className="relative h-4 w-full bg-[#071026] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"
        />
      </div>

      {/* Magical Glow Animation */}
      <motion.div
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #22d3ee33, #818cf833, #a855f733)",
          backgroundSize: "200% 100%",
        }}
      />
    </motion.div>
  );
}
