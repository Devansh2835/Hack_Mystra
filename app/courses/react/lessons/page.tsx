"use client";

import Link from "next/link";

export default function LessonsIndex() {
  // ✅ Each lesson id matches the [lessonId] slug in reactSheet.ts
  const lessons = [
    { id: "first-component", title: "Trial 1 – The First Component" },
    { id: "jsx-transfiguration", title: "Trial 2 – JSX Magic" },
    { id: "props-potions", title: "Trial 3 – Props and Potions" },
  ];

  return (
    <section className="p-10 text-white min-h-screen bg-gradient-to-b from-[#0b0018] via-[#13033a] to-[#0b0018]">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-300">
        📘 React Sorcery Lessons
      </h1>
      <ul className="space-y-6">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="border border-indigo-700/40 bg-[#0f172a]/60 hover:bg-[#1b2347]/80 rounded-xl transition-all"
          >
            <Link
              href={`/courses/react/lessons/${lesson.id}`}
              className="block px-6 py-4 text-lg font-medium text-indigo-400 hover:text-indigo-200"
            >
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
