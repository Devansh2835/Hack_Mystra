"use client";

import React from "react";
import StarryBackground from "@/components/star-background";
import MouseTrail from "@/components/mouse-trail";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-purple-100">
      {/* === Cosmic Animated Background Layer === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* These are safely placed under content */}
        <StarryBackground />
        <MouseTrail />

        {/* Static Gradient Overlay (behind content) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0018] via-[#1a0536] to-[#0f041f] opacity-80" />
      </div>

      {/* === Foreground Layer (visible content) === */}
      <main
        className="relative z-20 px-4 md:px-10 py-12 cosmic-layer animate-fadeIn"
        style={{
          background: "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
