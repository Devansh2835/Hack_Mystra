"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import TopicContent from "../../components/TopicContent";
import XPTracker from "../../components/XPTracker";
import StarryBackground from "../../components/StarryBackground";
import MouseTrail from "../../components/MouseTrail";
import {cssSheet} from "../../data/cssSheet";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LessonPage() {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState<any>(null);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    if (lessonId && cssSheet) {
      const foundLesson = cssSheet.find((l) => String(l.id) === lessonId);
      setLesson(foundLesson || null);
    }
  }, [lessonId]);

  const handleCompleteLesson = () => {
    setXp((prev) => prev + 150); // add 150 XP for each completed lesson
  };

  if (!lesson) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center text-purple-200 bg-gradient-to-b from-[#0b0018] to-[#1a0b2e]">
        <StarryBackground />
        <MouseTrail />
        <h1 className="text-4xl font-bold mb-4">📜 Lesson Not Found</h1>
        <Link
          href="/courses/css"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          Return to the CSS Grimoire
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#0b0018] via-[#1a0b2e] to-[#0b0018]">
      <StarryBackground />
      <MouseTrail />

      {/* Lesson Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-20 pb-10"
      >
        <h1
          className="text-5xl font-extrabold mb-3 tracking-wider"
          style={{
            background: "linear-gradient(90deg, #00e0ff, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {lesson.title}
        </h1>
        <p className="text-purple-300 text-lg italic">
          {lesson.subtitle || "Learn the art of CSS enchantments 🪄"}
        </p>
      </motion.div>

      {/* Lesson Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <TopicContent
          content={lesson.content}
        />

        {/* Complete Button */}
        <div className="flex justify-center my-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCompleteLesson}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold tracking-wide shadow-md shadow-cyan-700/30 hover:shadow-lg hover:shadow-cyan-500/40 transition"
          >
            ✅ Mark as Complete
          </motion.button>
        </div>

        {/* XP Tracker */}
        <XPTracker totalXP={xp} />

        {/* Back Navigation */}
        <div className="text-center mt-10">
          <Link
            href="/courses/css"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to CSS Grimoire
          </Link>
        </div>
      </div>
    </div>
  );
}
