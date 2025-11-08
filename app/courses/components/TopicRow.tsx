// app/courses/components/TopicRow.tsx
"use client";

import { motion } from "framer-motion";

interface Topic {
  id: number;
  title: string;
  xp: number;
  done: boolean;
}

interface TopicRowProps {
  topic: Topic;
  onToggle: (id: number) => void;
}

export default function TopicRow({ topic, onToggle }: TopicRowProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`flex items-center justify-between p-3 rounded-xl border ${
        topic.done
          ? "bg-green-900/30 border-green-500/30"
          : "bg-purple-900/30 border-purple-500/20"
      } transition-all duration-200 cursor-pointer`}
      onClick={() => onToggle(topic.id)}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={topic.done}
          onChange={() => onToggle(topic.id)}
          className="w-5 h-5 accent-purple-400 cursor-pointer"
        />
        <span
          className={`${
            topic.done ? "line-through text-purple-400" : "text-white"
          } font-medium`}
        >
          {topic.title}
        </span>
      </div>
      <div className="text-sm text-purple-300">{topic.xp} XP</div>
    </motion.div>
  );
}
