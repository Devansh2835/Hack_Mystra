"use client";
import ReactMarkdown from "react-markdown";

export default function TopicContent({ content, slug }: any) {
  return (
    <div className="prose prose-invert max-w-none prose-pre:bg-[#1e293b] prose-code:text-amber-300">
      <ReactMarkdown>{content}</ReactMarkdown>

      <div className="mt-6 flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">
          Start Trial 🪄
        </button>
        <a
          href={`/react/lessons/${slug}`}
          className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-800"
        >
          Open Lesson Page →
        </a>
      </div>
    </div>
  );
}
