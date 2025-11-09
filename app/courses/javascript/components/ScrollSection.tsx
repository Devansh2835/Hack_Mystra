// components/QuestScrollSection.tsx
'use client';

import React from 'react';
import type { Quest } from '../data/javascriptSheet';
import QuestCard from './QuestCard';

interface QuestScrollSectionProps {
  quests: Quest[];
}

export default function QuestScrollSection({ quests }: QuestScrollSectionProps) {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex gap-6">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
