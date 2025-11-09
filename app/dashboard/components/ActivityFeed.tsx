"use client";
import React, { useState, useMemo } from 'react';
import { Rocket, Bookmark, User, Zap, Radio, ChevronRight } from 'lucide-react';

export default function ActivityFeed() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activities = [
    { text: "Joined Mystra Bootcamp", icon: Rocket, time: "2h ago", type: "mission", color: "from-orange-500 to-red-500" },
    { text: "Bookmarked 'Intro to Aptos' event", icon: Bookmark, time: "5h ago", type: "saved", color: "from-purple-500 to-pink-500" },
    { text: "Updated profile info", icon: User, time: "1d ago", type: "profile", color: "from-blue-500 to-cyan-500" },
    { text: "Completed Web3 Challenge", icon: Zap, time: "2d ago", type: "achievement", color: "from-yellow-500 to-orange-500" },
  ];

  // 👇 useMemo ensures random values stay stable
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      })),
    []
  );

  return (
    <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border-2 border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden group">
      {/* Animated background stars */}
      <div className="absolute inset-0 opacity-30">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Rest of your component unchanged */}
      {/* ... */}
    </div>
  );
}
