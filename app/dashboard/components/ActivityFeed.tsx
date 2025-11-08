import React, { useState } from 'react';
import { Rocket, Bookmark, User, Zap, Radio, ChevronRight } from 'lucide-react';

export default function ActivityFeed() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activities = [
    { 
      text: "Joined HackQuest Bootcamp",
      icon: Rocket,
      time: "2h ago",
      type: "mission",
      color: "from-orange-500 to-red-500"
    },
    { 
      text: "Bookmarked 'Intro to Monad' event",
      icon: Bookmark,
      time: "5h ago",
      type: "saved",
      color: "from-purple-500 to-pink-500"
    },
    { 
      text: "Updated profile info",
      icon: User,
      time: "1d ago",
      type: "profile",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      text: "Completed Web3 Challenge",
      icon: Zap,
      time: "2d ago",
      type: "achievement",
      color: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border-2 border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden group">
      {/* Animated background stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orb effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-purple-500 animate-pulse" />
            <h3 className="text-xl font-black uppercase tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transmission Log
            </h3>
          </div>
          <button className="text-xs text-purple-500 hover:text-purple-400 flex items-center gap-1 font-bold uppercase tracking-wide group/btn">
            view all
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Activity List */}
        <div className="space-y-3">
          {activities.map((activity, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group/item"
            >
              {/* Hover glow effect */}
              {hoveredIndex === i && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg blur-sm transition-all duration-300"></div>
              )}

              <div className="relative flex items-start gap-4 p-3 rounded-lg bg-black/40 border border-purple-900/30 hover:border-purple-500/50 hover:bg-black/60 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Animated line on hover */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${activity.color} transition-all duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}
                ></div>

                {/* Icon with glow */}
                <div className={`relative flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredIndex === i ? 'scale-110 shadow-purple-500/50' : ''}`}>
                  <activity.icon className="w-5 h-5 text-white" />
                  
                  {/* Pulsing ring */}
                  {hoveredIndex === i && (
                    <div className="absolute inset-0 rounded-lg border-2 border-white/30 animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-bold text-orange-100 group-hover/item:text-white transition-colors">
                      {activity.text}
                    </p>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-gradient-to-r ${activity.color} bg-clip-text text-transparent border-current shrink-0`}>
                      {activity.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-purple-500/70 font-medium uppercase tracking-wide">
                      {activity.time}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className={`w-1 h-1 rounded-full bg-purple-500/50 transition-all duration-300 ${hoveredIndex === i ? 'animate-bounce' : ''}`}
                          style={{ animationDelay: `${j * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow indicator */}
                <ChevronRight className={`w-4 h-4 text-purple-500/50 transition-all duration-300 ${hoveredIndex === i ? 'translate-x-1 text-purple-400' : ''}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="mt-5 pt-4 border-t border-purple-900/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            <span className="text-xs text-purple-400/70 font-bold uppercase tracking-wider">
              System Active
            </span>
          </div>
          <span className="text-xs text-purple-500/50 font-mono">
            {activities.length} recent signals
          </span>
        </div>
      </div>
    </div>
  );
}