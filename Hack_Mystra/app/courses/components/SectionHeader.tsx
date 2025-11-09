// app/courses/components/SectionHeader.tsx
"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text"
    >
      {title}
    </motion.h1>
  );
}
