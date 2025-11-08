"use client";
export default function XPTracker({ totalXP }: any) {
  const level = Math.floor(totalXP / 100);
  return (
    <div className="bg-[#111827] p-4 rounded-xl mb-8 flex justify-between items-center border border-indigo-600">
      <div>
        <div className="text-indigo-400 text-sm">Total XP</div>
        <div className="text-2xl font-bold">{totalXP}</div>
      </div>
      <div className="text-indigo-300 text-sm">Level {level}</div>
    </div>
  );
}
