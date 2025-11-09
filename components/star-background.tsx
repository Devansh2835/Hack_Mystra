"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function StarryBackground() {
  const [isClient, setIsClient] = useState(false);

  // Generate stars only ONCE and memoize them
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => ({
      id: i,
      width: Math.random() * 2 + 0.5,
      height: Math.random() * 2 + 0.5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      shadowSize: Math.random() * 8 + 2,
      shadowSpread: Math.random() * 4 + 1,
    }));
  }, []); // Empty dependency array = only runs once

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-[#12001f] via-[#07000e] to-[#030008] z-0 pointer-events-none" />
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-b from-[#12001f] via-[#07000e] to-[#030008] z-0 pointer-events-none"
      style={{ 
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        willChange: 'auto'
      }}
    >
      {/* Static glowing stars - now with stable positions */}
      <div className="absolute inset-0 w-full h-full">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-70 blur-[1px]"
            style={{
              width: `${star.width}px`,
              height: `${star.height}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              boxShadow: `0 0 ${star.shadowSize}px ${star.shadowSpread}px rgba(180,120,255,0.7)`,
              transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
            }}
          />
        ))}
      </div>

      {/* Subtle glowing clouds */}
      <div className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] bg-purple-800 rounded-full opacity-15 blur-[200px]" 
          style={{ top: '25%', left: '33%', transform: 'translate3d(0, 0, 0)' }}
        />
        <div 
          className="absolute w-[700px] h-[700px] bg-indigo-900 rounded-full opacity-10 blur-[250px]" 
          style={{ top: '50%', left: '25%', transform: 'translate3d(0, 0, 0)' }}
        />
        <div 
          className="absolute w-[800px] h-[800px] bg-fuchsia-900 rounded-full opacity-10 blur-[300px]" 
          style={{ top: '33%', left: '66%', transform: 'translate3d(0, 0, 0)' }}
        />
      </div>
    </div>
  );
}