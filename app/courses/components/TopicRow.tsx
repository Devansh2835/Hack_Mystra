// app/courses/components/TopicRow.tsx
"use client";

interface Topic {
  id: number;
  title: string;
  xp: number;
  done: boolean;
}

interface TopicRowProps {
  topic: Topic;
  onToggle: (id: number) => void; // Make sure this exists
}

export default function TopicRow({ topic, onToggle }: TopicRowProps) {
  return (
    <div
      className={`flex items-center p-3 rounded-lg border transition-all duration-200 ${
        topic.done 
          ? 'bg-green-500/10 border-green-500/30' 
          : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
      }`}
    >
      <button
        onClick={() => onToggle(topic.id)} // Make sure this calls onToggle
        className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
          topic.done 
            ? 'bg-green-500 border-green-500' 
            : 'border-gray-500 hover:border-gray-400'
        }`}
      >
        {topic.done && (
          <span className="text-white text-sm">✓</span>
        )}
      </button>
      <span className={`flex-1 ${topic.done ? 'text-gray-300 line-through' : 'text-white'}`}>
        {topic.title}
      </span>
      <span className="text-sm text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
        +{topic.xp} XP
      </span>
    </div>
  );
}