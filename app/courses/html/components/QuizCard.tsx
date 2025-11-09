"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function QuizCard({ topic }: { topic: any }) {
  return (
    <Link href={`/courses/html/lessons/${topic.id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-[#1a0020]/80 border border-purple-800/50 p-4 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-fuchsia-600/30 transition-all"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-amber-300">{topic.name}</h3>
          <span className="text-sm text-purple-300">{topic.xp} XP</span>
        </div>
        <p className="text-sm text-purple-200 opacity-80 mt-2">{topic.description}</p>
      </motion.div>
    </Link>
  );
}
