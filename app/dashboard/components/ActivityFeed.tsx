"use client";

import { motion } from "framer-motion";

export default function ActivityFeed() {
  const activities = [
    "Joined HackQuest Bootcamp",
    "Bookmarked ‘Intro to Monad’ event",
    "Updated profile info",
  ];

  return (
    <motion.div
      className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {activities.map((act, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full" />
            {act}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
