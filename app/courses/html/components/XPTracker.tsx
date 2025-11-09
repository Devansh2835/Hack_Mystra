"use client";

import { motion } from "framer-motion";

export default function XPTracker({ totalXP }: { totalXP: number }) {
  const maxXP = 1000;
  const progress = Math.min((totalXP / maxXP) * 100, 100);

  return (
    <div className="w-full bg-[#1b0020] rounded-xl p-4 mb-8 shadow-lg border border-purple-900/30">
      <p className="text-sm text-purple-300 mb-2">✨ Wizard Progress</p>
      <div className="w-full h-3 bg-[#2b0030] rounded-full overflow-hidden">
        <motion.div
          className="h-3 bg-gradient-to-r from-fuchsia-500 to-amber-400"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
      <p className="mt-2 text-right text-sm text-purple-400">
        {Math.round(progress)}% XP gained ({totalXP} XP)
      </p>
    </div>
  );
}
