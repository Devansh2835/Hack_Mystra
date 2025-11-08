"use client";

export default function TopicContent({ topic }: { topic: any }) {
  return (
    <div className="bg-[#120016]/70 p-6 rounded-2xl border border-purple-800/40 text-white mt-8">
      <h2 className="text-2xl font-bold mb-3 text-amber-300">{topic.name}</h2>
      <p className="text-purple-200 mb-4">{topic.description}</p>
      <pre className="bg-[#1b0020] text-amber-200 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{topic.code}</code>
      </pre>
    </div>
  );
}
