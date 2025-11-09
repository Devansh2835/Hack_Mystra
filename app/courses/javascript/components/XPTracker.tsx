// components/XPTracker.tsx
'use client';

import type { Scroll } from "../data/javascriptSheet";

interface XPTrackerProps {
  scrolls: Scroll[];
}

export default function XPTracker({ scrolls }: XPTrackerProps) {
  const totalXP = scrolls.reduce((sum, scroll) => sum + scroll.totalXP, 0);
  const totalQuests = scrolls.reduce((sum, scroll) => sum + scroll.quests.length, 0);

  return (
    <div className="flex gap-8 mb-8">
      <div className="bg-purple-900/60 rounded-lg px-6 py-4 font-bold text-purple-200">
        Total XP Earnable: <span className="text-pink-200">{totalXP}</span>
      </div>
      <div className="bg-purple-900/60 rounded-lg px-6 py-4 font-bold text-purple-200">
        Quests: <span className="text-pink-100">{totalQuests}</span>
      </div>
      <div className="bg-purple-900/60 rounded-lg px-6 py-4 font-bold text-green-200">
        Scrolls: <span className="text-green-100">{scrolls.length}</span>
      </div>
    </div>
  );
}
