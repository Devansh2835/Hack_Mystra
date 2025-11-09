// app/courses/components/ProgressBar.tsx
"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  color: string;
}

export default function ProgressBar({ progress, color }: ProgressBarProps) {
  return (
    <div className="h-3 w-full bg-purple-950/60 rounded-full overflow-hidden border border-purple-700/40">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`h-full bg-gradient-to-r ${color}`}
      />
    </div>
  );
}
