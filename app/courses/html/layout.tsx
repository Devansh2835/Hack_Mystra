"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StarryBackground from "@/components/star-background";
import MouseTrail from "@/components/mouse-trail";
interface Topic {
  id: number;
  name: string;
  xp: number;
  completed: boolean;
}

interface Lesson {
  id: number;
  title: string;
  badgeShown: boolean;
  topics: Topic[];
}

export default function HTMLCoursePage() {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: 1,
      title: "Lesson 1: HTML Basics",
      badgeShown: false,
      topics: [
        { id: 1, name: "Introduction to HTML", xp: 10, completed: false },
        { id: 2, name: "HTML Document Structure", xp: 10, completed: false },
        { id: 3, name: "Head and Body Tags", xp: 10, completed: false },
        { id: 4, name: "Comments in HTML", xp: 10, completed: false },
        { id: 5, name: "Creating Your First HTML Page", xp: 10, completed: false },
      ],
    },
    {
      id: 2,
      title: "Lesson 2: Elements & Attributes",
      badgeShown: false,
      topics: [
        { id: 6, name: "HTML Elements and Tags", xp: 10, completed: false },
        { id: 7, name: "Attributes and Values", xp: 10, completed: false },
        { id: 8, name: "Headings and Paragraphs", xp: 10, completed: false },
        { id: 9, name: "Text Formatting Tags", xp: 10, completed: false },
        { id: 10, name: "Lists (ul, ol, li)", xp: 10, completed: false },
      ],
    },
    {
      id: 3,
      title: "Lesson 3: Media & Links",
      badgeShown: false,
      topics: [
        { id: 11, name: "Links and Anchor Tags", xp: 10, completed: false },
        { id: 12, name: "Images in HTML", xp: 10, completed: false },
        { id: 13, name: "Audio and Video Elements", xp: 10, completed: false },
        { id: 14, name: "Embedding YouTube Videos", xp: 10, completed: false },
        { id: 15, name: "Favicons and Metadata", xp: 10, completed: false },
      ],
    },
    {
      id: 4,
      title: "Lesson 4: Tables & Forms",
      badgeShown: false,
      topics: [
        { id: 16, name: "Tables, Rows and Columns", xp: 10, completed: false },
        { id: 17, name: "Form Elements (input, textarea)", xp: 10, completed: false },
        { id: 18, name: "Checkboxes and Radio Buttons", xp: 10, completed: false },
        { id: 19, name: "Select, Option and Label", xp: 10, completed: false },
        { id: 20, name: "Form Validation Basics", xp: 10, completed: false },
      ],
    },
    {
      id: 5,
      title: "Lesson 5: Semantic & Advanced HTML",
      badgeShown: false,
      topics: [
        { id: 21, name: "Semantic Elements (header, nav, main)", xp: 10, completed: false },
        { id: 22, name: "Section, Article, Aside, Footer", xp: 10, completed: false },
        { id: 23, name: "iframes and Embedding Content", xp: 10, completed: false },
        { id: 24, name: "HTML5 APIs Overview", xp: 10, completed: false },
        { id: 25, name: "Best Practices and Accessibility", xp: 10, completed: false },
      ],
    },
  ]);

  const [xp, setXP] = useState(0);
  const [currentBadge, setCurrentBadge] = useState<number | "final" | null>(null);
  const [finalBadgeUnlocked, setFinalBadgeUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("html-lessons");
    const savedFinal = localStorage.getItem("html-final-badge");
    if (saved) setLessons(JSON.parse(saved));
    if (savedFinal === "true") setFinalBadgeUnlocked(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("html-lessons", JSON.stringify(lessons));
    const totalXP = lessons.flatMap(l => l.topics).reduce((a, t) => (t.completed ? a + t.xp : a), 0);
    setXP(totalXP);
  }, [lessons]);

  const toggleTopic = (lessonId: number, topicId: number) => {
    const updated = lessons.map(lesson => {
      if (lesson.id === lessonId) {
        const updatedTopics = lesson.topics.map(topic =>
          topic.id === topicId ? { ...topic, completed: !topic.completed } : topic
        );

        const allCompleted = updatedTopics.every(t => t.completed);
        return { ...lesson, topics: updatedTopics, badgeShown: allCompleted };
      }
      return lesson;
    });

    setLessons(updated);

    const justCompleted = updated.find(l => l.id === lessonId && l.badgeShown);
    if (justCompleted) {
      setCurrentBadge(lessonId);

      const allLessonsCompleted = updated.every(l =>
        l.topics.every(t => t.completed)
      );
      if (allLessonsCompleted) {
        setCurrentBadge("final");
        setFinalBadgeUnlocked(true);
        localStorage.setItem("html-final-badge", "true");
      }
    }
  };

  // Badge page (lesson or final)
  if (currentBadge !== null) {
    const currentLesson =
      currentBadge === "final" ? null : lessons.find(l => l.id === currentBadge);

    return (
      <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-[#050010] text-white overflow-hidden">
        <StarryBackground />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {currentBadge === "final" ? (
            <>
              <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                🧙‍♀️ HTML Mastery Unlocked!
              </h1>
              <p className="text-lg text-purple-300 mb-8">
                You’ve completed every spell and earned the <b>Witch of the Web</b> badge!
              </p>
            </>
          ) : (
            <>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                🌟 {currentLesson?.title} Completed!
              </h1>
              <p className="text-lg text-purple-300 mb-8">
                You’ve earned a new badge and {(currentLesson?.topics.length ?? 0) * 10} XP!
              </p>
            </>
          )}
          <motion.button
            onClick={() => setCurrentBadge(null)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Continue Learning
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Main course page full screen scrollable
  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-b from-[#080014] via-[#120028] to-[#03000a] overflow-y-auto text-white font-sans flex flex-col">
      <StarryBackground />
      <MouseTrail />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-6xl font-extrabold mt-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        🪐 The Chamber of HTML Secrets
      </motion.h1>

      <p className="text-center text-purple-300 mt-3 mb-10 text-lg">
        Explore the galaxy of HTML — earn XP and master the structure of the web.
      </p>

      <div className="flex-grow max-w-6xl w-full mx-auto px-8 pb-24 space-y-16">
        <div className="text-center text-purple-400 font-bold text-2xl">
          🌌 Total XP: {xp}
        </div>

        {lessons.map(lesson => (
          <div key={lesson.id}>
            <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
              {lesson.title}
            </h2>
            <div className="grid gap-4">
              {lesson.topics.map(topic => (
                <label
                  key={topic.id}
                  className={`flex items-center gap-4 p-5 rounded-lg bg-white/5 border border-purple-900/30 cursor-pointer hover:bg-white/10 transition-all ${
                    topic.completed ? "border-purple-400" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={topic.completed}
                    onChange={() => toggleTopic(lesson.id, topic.id)}
                    className="w-5 h-5 accent-purple-500 cursor-pointer"
                  />
                  <span
                    className={`text-base ${
                      topic.completed ? "text-purple-300 line-through" : "text-white"
                    }`}
                  >
                    {topic.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {finalBadgeUnlocked && (
        <div className="fixed bottom-8 right-8 bg-purple-800/50 backdrop-blur-xl px-5 py-3 rounded-xl text-white flex items-center gap-3 border border-purple-500/50 shadow-xl">
          <span className="text-3xl">🧙‍♀️</span>
          <span className="font-semibold text-lg">Witch of the Web</span>
        </div>
      )}
    </div>
  );
}
