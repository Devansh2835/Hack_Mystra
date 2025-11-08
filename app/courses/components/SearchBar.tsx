// app/courses/components/SearchBar.tsx
"use client";

export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (val: string) => void;
}) {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search topics..."
        className="w-full p-3 rounded-xl bg-purple-950/40 border border-purple-700/30 text-purple-200 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}
