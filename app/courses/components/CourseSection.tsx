// app/courses/components/CourseSection.tsx
"use client";

import { motion } from "framer-motion";
import TopicRow from "./TopicRow";
import ProgressBar from "./ProgressBar";

interface Topic {
  id: number;
  title: string;
  xp: number;
  done: boolean;
}

interface CourseSectionProps {
  title: string;
  topics: Topic[];
  color: string;
  onToggle: (id: number) => void;
}

export default function CourseSection({ title, topics, color, onToggle }: CourseSectionProps) {
  const completed = topics.filter((t) => t.done).length;
  const total = topics.length;
  const progress = Math.round((completed / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/30 backdrop-blur-xl shadow-lg mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <span className="text-purple-300 text-sm">
          {completed}/{total} Topics • {progress}%
        </span>
      </div>

      <ProgressBar progress={progress} color={color} />

      <div className="mt-4 space-y-2">
        {topics.map((topic) => (
          <TopicRow key={topic.id} topic={topic} onToggle={onToggle} />
        ))}
      </div>
    </motion.div>
  );
}
