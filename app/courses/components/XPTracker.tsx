// app/courses/components/XPTracker.tsx
"use client";

export default function XPTracker({ totalXP }: { totalXP: number }) {
  const level = Math.floor(totalXP / 1000);
  const nextLevelXP = 1000 * (level + 1);
  const progress = ((totalXP % 1000) / 1000) * 100;

  return (
    <div className="p-4 bg-purple-950/40 border border-purple-500/30 rounded-2xl text-center text-white mb-8">
      <h3 className="text-lg font-bold mb-2">🎮 XP Progress</h3>
      <div className="relative w-full bg-purple-950/60 h-3 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-purple-300">
        Level {level} • {totalXP}/{nextLevelXP} XP
      </p>
    </div>
  );
}
