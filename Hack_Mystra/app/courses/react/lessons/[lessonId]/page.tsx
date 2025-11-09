"use client";

import { useParams } from "next/navigation";
import { reactSheet } from "../../data/reactSheet";
import TopicContent from "../../components/TopicContent";

export default function LessonPage() {
  const { lessonId } = useParams();

  // Flatten all topics to search easily
  const allTopics = reactSheet.flatMap((s) => s.topics);
  const topic = allTopics.find((t) => t.slug === lessonId);

  if (!topic) {
    return (
      <div className="p-10 text-red-400">
        <h2>Lesson not found 🧙‍♀️</h2>
      </div>
    );
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-6">{topic.title}</h1>
      <TopicContent content={topic.content} slug={topic.slug} />
    </div>
  );
}
