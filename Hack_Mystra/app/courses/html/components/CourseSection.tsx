"use client";

import { motion } from "framer-motion";
import QuizCard from "./QuizCard";

export default function CourseSection({
  title,
  topics,
  color,
}: {
  title: string;
  topics: any[];
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-2xl bg-gradient-to-br ${color} shadow-xl border border-purple-700/40`}
    >
      <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
        {title}
      </h2>

      <div className="space-y-4">
        {topics.map((topic) => (
          <QuizCard key={topic.id} topic={topic} />
        ))}
      </div>
    </motion.div>
  );
}
