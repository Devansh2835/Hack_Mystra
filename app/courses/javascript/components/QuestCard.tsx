// components/QuestCard.tsx
'use client';

import React from 'react';
import type { Quest } from '../data/javascriptSheet';

interface QuestCardProps {
  quest: Quest;
}

export default function QuestCard({ quest }: QuestCardProps) {
  return (
    <div className="min-w-[320px] max-w-xs bg-gradient-to-br from-purple-800/70 to-indigo-900/70 border border-purple-500/40 rounded-2xl shadow-lg mx-1 p-5 flex flex-col gap-2 hover:scale-[1.045] transition-transform cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-white">{quest.title}</span>
        <span className={`px-2 py-0.5 rounded-full text-xs 
          ${quest.difficulty === 'First-Year' ? 'bg-green-700/20 text-green-300'
              : quest.difficulty === 'Second-Year' ? 'bg-yellow-700/20 text-yellow-300'
              : 'bg-pink-700/20 text-pink-300'}`}>
          {quest.difficulty}
        </span>
      </div>
      <div className="text-purple-300 text-sm line-clamp-2 mb-3">{quest.story.split('\n')[0]}</div>
      <div className="flex items-center mt-auto text-xs gap-1">
        <span className="text-purple-400">XP:</span>
        <span className="font-bold text-pink-300">{quest.xpReward}</span>
      </div>
    </div>
  );
}
