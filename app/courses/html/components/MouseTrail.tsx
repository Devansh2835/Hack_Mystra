"use client";

import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    const trail: HTMLDivElement[] = [];

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("div");
      particle.className =
        "pointer-events-none fixed w-2 h-2 bg-fuchsia-400/80 rounded-full blur-sm";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.transition = "opacity 0.6s linear";
      document.body.appendChild(particle);
      trail.push(particle);
      setTimeout(() => {
        particle.style.opacity = "0";
        setTimeout(() => particle.remove(), 600);
      }, 100);
    };

    const handleMouseMove = (e: MouseEvent) => createParticle(e.pageX, e.pageY);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
