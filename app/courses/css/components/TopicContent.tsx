"use client";
import ReactMarkdown from "react-markdown";

export default function TopicContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none leading-relaxed">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
