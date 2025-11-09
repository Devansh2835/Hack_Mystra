// components/StoryPanel.tsx
'use client';

export default function StoryPanel() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-purple-800/80 to-fuchsia-900/70 p-8 border border-purple-500/30 shadow-lg mb-8">
      <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow flex gap-2 items-center">
        🪄 Hogwarts School of Codecraft & Spellscript
      </h1>
      <p className="text-purple-200 text-lg max-w-3xl">
        Welcome to the magical world of SpellScript (JavaScript)! Progress through enchanted Scrolls packed with wizarding Quests, earn XP, and become a true web wizard—all in a Halloween-inspired, immersive environment.
      </p>
    </div>
  );
}
