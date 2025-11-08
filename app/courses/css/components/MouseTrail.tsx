"use client";

import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trailRef.current) return;

    const trailContainer = trailRef.current;
    const particles: HTMLDivElement[] = [];
    const maxParticles = 15;

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("div");
      particle.className = "mouse-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
      trailContainer.appendChild(particle);
      particles.push(particle);

      // Remove after fade-out
      setTimeout(() => {
        particle.style.opacity = "0";
        setTimeout(() => {
          particle.remove();
        }, 300);
      }, 200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
      if (particles.length > maxParticles) {
        const old = particles.shift();
        old?.remove();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={trailRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]"
    >
      {/* Magic particle elements will render dynamically */}
      <style jsx>{`
        .mouse-particle {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 0.8;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease, transform 0.3s ease;
          filter: blur(2px) drop-shadow(0 0 6px rgba(255, 255, 255, 0.6));
          animation: floatParticle 0.6s ease forwards;
        }

        @keyframes floatParticle {
          from {
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            transform: translate(-50%, -80%) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
