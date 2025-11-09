// app/courses/css/layout.tsx
"use client";

import React from "react";
import StarryBackground from "@/components/star-background";
import MouseTrail from "@/components/mouse-trail";

export default function CSSCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-purple-100">
      {/* Background layer (particles + trail) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarryBackground />
        <MouseTrail />

        {/* Witchy nebula overlay */}
        <div
          className="absolute inset-0 opacity-90 blur-3xl mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 25% 30%, #320062 0%, transparent 70%), radial-gradient(circle at 75% 70%, #560099 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Foreground content */}
      <main className="relative z-20 px-4 md:px-10 py-12 cosmic-layer">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
