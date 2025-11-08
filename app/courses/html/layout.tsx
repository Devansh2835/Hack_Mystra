"use client";

import React from "react";
import StarryBackground from "@/components/star-background";
import MouseTrail from "@/components/mouse-trail";

export default function HTMLLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-blue-100">
      {/* === Enchanted Cosmic Background === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarryBackground />
        <MouseTrail />

        {/* Deep Purple-Blue Ombré Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(90, 0, 140, 0.6), transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(20, 80, 200, 0.5), transparent 60%),
              linear-gradient(to bottom, #0a001f, #1b005c, #100030)
            `,
            backdropFilter: "blur(25px)",
          }}
        />
      </div>

      {/* === Main Content Area (Full Magical Sheet) === */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div
          className="w-full max-w-7xl bg-gradient-to-br 
          from-[#1f0035]/70 via-[#220045]/60 to-[#060014]/80 
          border border-indigo-800/30 
          shadow-[0_0_100px_rgba(109,40,217,0.35)]
          rounded-3xl p-10 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_0_120px_rgba(168,85,247,0.5)]"
        >
          {children}
        </div>
      </main>

      {/* === Optional Soft Glow === */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
    </div>
  );
}
