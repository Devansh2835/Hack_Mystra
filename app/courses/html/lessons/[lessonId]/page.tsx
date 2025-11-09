"use client";

import { useParams } from "next/navigation";

export default function HTMLLessonPage() {
  const { lessonId } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-8">
      <h1 className="text-4xl font-extrabold mb-4">🧾 HTML Lesson: {lessonId}</h1>
      <p className="max-w-xl text-lg text-gray-300">
        Here you’ll find detailed magical scrolls about HTML concepts, code examples,
        and interactive quests to master structural web sorcery.
      </p>
    </div>
  );
}
