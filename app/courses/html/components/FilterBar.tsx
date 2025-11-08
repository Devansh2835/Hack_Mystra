"use client";

export default function FilterBar({
  currentFilter,
  setFilter,
  totalTopics,
  completedTopics
}: {
  currentFilter: string;
  setFilter: (filter: string) => void;
  totalTopics: number;
  completedTopics: number;
}) {
  const filters = ["All", "Completed", "Pending"];

  return (
    <div className="flex flex-wrap justify-between items-center mb-8 bg-[#12001a]/70 p-4 rounded-lg border border-purple-700/40 backdrop-blur-sm">
      <div className="flex gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              currentFilter === f
                ? "bg-gradient-to-r from-fuchsia-600 to-amber-400 text-white shadow-md"
                : "bg-[#220030] text-purple-300 hover:bg-[#300040]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="text-sm text-purple-300">
        {completedTopics}/{totalTopics} lessons completed 🧙‍♀️
      </div>
    </div>
  );
}
