"use client";

import React from "react";
import dynamic from "next/dynamic";

// ✅ Use dynamic imports to prevent double-render flickers
const StarryBackground = dynamic(() => import("@/components/star-background"), {
  ssr: false,
});
const MouseTrail = dynamic(() => import("@/components/mouse-trail"), {
  ssr: false,
});

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen font-sans text-purple-100 overflow-hidden">
      {/* === Background Layer === */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Animated background components */}
        <StarryBackground />
        <MouseTrail />

        {/* Gradient overlay for consistent tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0018] via-[#1a0536] to-[#0f041f] opacity-90 mix-blend-normal" />

        {/* Soft radial glow to make content pop */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-purple-800/20 blur-[150px] rounded-full" />
      </div>

      {/* === Main Content Layer === */}
      <main className="relative z-10 px-4 sm:px-8 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
