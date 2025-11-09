// components/PracticePanel.tsx
'use client';

import React from 'react';
import type { Quest } from '../data/javascriptSheet';

interface PracticePanelProps {
  quests: Quest[];
}

export default function PracticePanel({ quests }: PracticePanelProps) {
  return (
    <div className="space-y-8">
      {quests.map((quest) => (
        <div key={quest.id} className="rounded-xl border border-purple-500/30 bg-purple-900/30 p-6 shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-bold text-purple-100 flex items-center gap-2 mb-1">
            <span>{quest.title}</span>
            <span className="bg-purple-800/60 px-2 py-0.5 text-xs rounded">
              {quest.difficulty}
            </span>
          </h3>
          <div className="text-purple-300 mb-4">{quest.codingChallenge.instructions}</div>
          <div className="mb-3">
            <pre className="bg-purple-950/60 text-purple-100 p-4 rounded-md overflow-x-auto text-sm mb-2">
{quest.codingChallenge.starterCode.trim()}
            </pre>
            <details>
              <summary className="text-purple-400 cursor-pointer select-none">Show Solution</summary>
              <pre className="bg-purple-950/40 text-green-100 p-4 rounded-md overflow-x-auto text-sm mt-2">
{quest.codingChallenge.solution.trim()}
              </pre>
            </details>
          </div>
          <div className="mt-2">
            <span className="font-semibold text-purple-400">Test Cases:</span>
            <ul className="text-purple-200 ml-4 list-disc">
              {quest.codingChallenge.testCases.map((tc, i) => (
                <li key={i}>
                  <span className="font-mono">{tc.input}</span> → <span className="font-mono text-green-300">{tc.expectedOutput}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
