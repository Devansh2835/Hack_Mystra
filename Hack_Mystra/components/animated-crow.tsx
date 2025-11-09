import { useEffect, useState } from 'react';

interface AnimatedCrowProps {
  isWatching: boolean;
}

export default function AnimatedCrow({ isWatching }: AnimatedCrowProps) {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (!isWatching) return;

    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, [isWatching]);

  return (
    <div className="relative w-10 h-10 transition-all duration-500">
      {isWatching && (
        <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl animate-pulse" />
      )}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`w-10 h-10 relative z-10 transition-all duration-500 ${
          isWatching
            ? 'drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]'
            : 'rotate-90 opacity-60'
        }`}
      >
        <path
          d="M12 5c-3 0-5.5 2-6.5 4.5-.5 1.5-.5 3 0 4.5 1 2.5 3.5 4.5 6.5 4.5s5.5-2 6.5-4.5c.5-1.5.5-3 0-4.5C17.5 7 15 5 12 5z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          className={`transition-colors duration-300 ${
            isWatching ? 'text-purple-700' : 'text-purple-800'
          }`}
        />
        <path
          d="M12 4L10 2l-2 1 1 2 3-1zM12 4l2-2 2 1-1 2-3-1z"
          fill="currentColor"
          className={`transition-colors duration-300 ${
            isWatching ? 'text-purple-800' : 'text-purple-900'
          }`}
        />
        <path
          d="M7 10c0-1 .5-2 1.5-2.5l1-.5c.5-.2 1-.2 1.5 0s1 .5 1.5.5 1-.3 1.5-.5 1-.2 1.5 0l1 .5c1 .5 1.5 1.5 1.5 2.5"
          stroke="currentColor"
          strokeWidth="0.8"
          className={`transition-colors duration-300 ${
            isWatching ? 'text-purple-600' : 'text-purple-700'
          }`}
        />
        <circle
          cx="9.5"
          cy="11"
          r="2"
          fill={isWatching && !blink ? '#8B5CF6' : 'currentColor'}
          className={`transition-all duration-150 ${
            isWatching && !blink
              ? 'drop-shadow-[0_0_6px_rgba(139,92,246,1)]'
              : 'text-purple-950'
          }`}
        />
        <circle
          cx="14.5"
          cy="11"
          r="2"
          fill={isWatching && !blink ? '#8B5CF6' : 'currentColor'}
          className={`transition-all duration-150 ${
            isWatching && !blink
              ? 'drop-shadow-[0_0_6px_rgba(139,92,246,1)]'
              : 'text-purple-950'
          }`}
        />
        {isWatching && !blink && (
          <>
            <circle cx="9.5" cy="10.5" r="0.7" fill="white" opacity="0.9" />
            <circle cx="14.5" cy="10.5" r="0.7" fill="white" opacity="0.9" />
            <circle cx="10" cy="11.3" r="0.4" fill="white" opacity="0.6" />
            <circle cx="15" cy="11.3" r="0.4" fill="white" opacity="0.6" />
          </>
        )}
        <path
          d="M10 13.5c.5.5 1.5 1 2 1s1.5-.5 2-1"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className={`transition-colors duration-300 ${
            isWatching ? 'text-purple-600' : 'text-purple-700'
          }`}
        />
        <path
          d="M6 12c-.5.5-1 1-1.5 1M18 12c.5.5 1 1 1.5 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={`transition-colors duration-300 ${
            isWatching ? 'text-purple-800' : 'text-purple-900'
          }`}
        />
        <path
          d="M5.5 12.5c-.3.3-.6.6-.8.8M18.5 12.5c.3.3.6.6.8.8"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
          className={`transition-colors duration-300 ${
            isWatching ? 'text-purple-700' : 'text-purple-800'
          }`}
        />
      </svg>
    </div>
  );
}
