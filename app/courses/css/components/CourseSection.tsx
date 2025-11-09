"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CourseSection({ id, title, topics, color, onToggle }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`my-10 p-6 rounded-2xl bg-gradient-to-br ${color} shadow-lg`}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="space-y-3">
        {topics.map((topic: any) => (
          <Link key={topic.id} href={`/courses/css/lessons/${topic.slug}`}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`p-4 rounded-xl bg-black/20 flex justify-between items-center cursor-pointer ${
                topic.done ? "border-green-400 border" : "border-transparent"
              }`}
            >
              <span>{topic.title}</span>
              <span className="text-yellow-300">{topic.xp} XP</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
