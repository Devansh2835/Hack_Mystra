"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, BookOpen, MessageCircle, Calendar, Target } from "lucide-react";
import { ChatModal } from "@/components/chat-modal";
import { GoalsModal } from "./GoalsModal";
import { StudyPlanModal } from "./StudyPlanModal";

export default function QuickActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);
  const [studyPlanOpen, setStudyPlanOpen] = useState(false);

  const actions = [
    {
      title: "New Course",
      icon: Plus,
      color: "from-green-500 to-emerald-500",
      description: "Start learning",
      onClick: () => window.open('/courses', '_blank')
    },
    {
      title: "Study Plan",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      description: "Plan your week",
      onClick: () => setStudyPlanOpen(true)
    },
    {
      title: "AI Tutor",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-500",
      description: "Get help",
      onClick: () => setChatOpen(true)
    },
    {
      title: "Goals",
      icon: Target,
      color: "from-orange-500 to-red-500",
      description: "Set targets",
      onClick: () => setGoalsOpen(true)
    }
  ];

  return (
    <>
      <motion.div
        className="p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.button
                key={index}
                onClick={action.onClick}
                className="group p-4 rounded-xl bg-purple-900/20 hover:bg-purple-900/30 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-200 text-left"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${action.color} mb-3`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-medium text-white text-sm group-hover:text-purple-100 transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs text-purple-300/70 mt-1">
                  {action.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-purple-300" />
            <div>
              <h3 className="font-medium text-white text-sm">Daily Challenge</h3>
              <p className="text-xs text-purple-300/70">Complete 3 lessons today</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="flex-1 bg-purple-900/30 rounded-full h-2 mr-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '66%' }}></div>
            </div>
            <span className="text-xs text-purple-200 font-medium">2/3</span>
          </div>
        </motion.div>
      </motion.div>

      <ChatModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      <GoalsModal isOpen={goalsOpen} onClose={() => setGoalsOpen(false)} />
      <StudyPlanModal isOpen={studyPlanOpen} onClose={() => setStudyPlanOpen(false)} />
    </>
  );
}