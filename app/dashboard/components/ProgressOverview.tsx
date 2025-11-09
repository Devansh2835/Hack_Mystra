"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Zap } from "lucide-react";

export default function ProgressOverview() {
  const courses = [
    {
      title: "JavaScript Fundamentals",
      progress: 7,
      icon: Code,
      color: "from-yellow-500 to-orange-500",
      status: "In Progress"
    },
    {
      title: "React Development",
      progress: 0,
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      status: "Active"
    },
    {
      title: "Web3 Basics",
      progress: 0,
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      status: "Started"
    }
  ];

  return (
    <motion.div
      className="p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="text-xl font-bold text-white mb-6">Learning Progress</h2>
      
      <div className="space-y-6">
        {courses.map((course, index) => {
          const IconComponent = course.icon;
          return (
            <motion.div
              key={index}
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${course.color}`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{course.title}</h3>
                    <Badge variant="secondary" className="text-xs bg-purple-900/50 text-purple-200 border-purple-700/50 mt-1">
                      {course.status}
                    </Badge>
                  </div>
                </div>
                <span className="text-sm font-medium text-purple-200">{course.progress}%</span>
              </div>
              
              <div className="space-y-2">
                <Progress 
                  value={course.progress} 
                  className="h-2 bg-purple-900/30"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-medium transition-all duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Continue Learning
      </motion.button>
    </motion.div>
  );
}