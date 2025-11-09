"use client";
export default function FilterBar({ currentFilter, setFilter, totalTopics, completedTopics }: any) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-3">
        {["All", "Incomplete", "Complete"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg ${
              currentFilter === f ? "bg-indigo-600" : "bg-slate-800"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="text-sm text-indigo-400">
        {completedTopics}/{totalTopics} Completed
      </div>
    </div>
  );
}
