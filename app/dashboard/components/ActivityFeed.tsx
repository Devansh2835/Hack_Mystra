"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Bookmark, User, Zap, Trophy, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ActivityFeed() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activities = [
    { 
      text: "Completed React Fundamentals Course", 
      icon: Trophy, 
      time: "2h ago", 
      type: "achievement", 
      color: "from-yellow-500 to-orange-500",
      points: "+50 XP"
    },
    { 
      text: "Joined Mystra Web3 Bootcamp", 
      icon: Rocket, 
      time: "5h ago", 
      type: "mission", 
      color: "from-purple-500 to-pink-500",
      points: "+25 XP"
    },
    { 
      text: "Bookmarked 'Advanced JavaScript' lesson", 
      icon: Bookmark, 
      time: "1d ago", 
      type: "saved", 
      color: "from-blue-500 to-cyan-500"
    },
    { 
      text: "Updated profile information", 
      icon: User, 
      time: "2d ago", 
      type: "profile", 
      color: "from-green-500 to-emerald-500"
    },
    { 
      text: "Started CSS Mastery Challenge", 
      icon: Zap, 
      time: "3d ago", 
      type: "challenge", 
      color: "from-indigo-500 to-purple-500",
      points: "+15 XP"
    },
  ];

  return (
    <motion.div
      className="p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
        <Badge variant="outline" className="border-purple-700/50 text-purple-200">
          <Clock className="w-3 h-3 mr-1" />
          Live
        </Badge>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const IconComponent = activity.icon;
          return (
            <motion.div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${activity.color} shadow-lg`}>
                <IconComponent className="w-4 h-4 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white group-hover:text-purple-100 transition-colors">
                  {activity.text}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-purple-300/70">{activity.time}</span>
                  {activity.points && (
                    <Badge variant="secondary" className="text-xs bg-purple-900/50 text-purple-200 border-purple-700/50">
                      {activity.points}
                    </Badge>
                  )}
                </div>
              </div>

              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  x: hoveredIndex === index ? 0 : 10
                }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        className="w-full mt-4 py-2 text-sm text-purple-300 hover:text-purple-200 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View All Activity →
      </motion.button>
    </motion.div>
  );
}