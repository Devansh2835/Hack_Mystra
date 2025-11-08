"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: "🧩",
    title: "AI-Powered Magic Learning",
    description: "Personalized learning paths powered by advanced AI that adapts to your magical abilities.",
    gradient: "from-purple-500/30 to-purple-700/30",
    glowColor: "purple"
  },
  {
    icon: "⚔️",
    title: "Gamified Quests & Spells",
    description: "Complete epic quests and master powerful spells through interactive challenges.",
    gradient: "from-pink-500/30 to-rose-600/30",
    glowColor: "pink"
  },
  {
    icon: "💎",
    title: "Earn XP and Level Up",
    description: "Gain experience points and unlock new skills as you progress through the magical realm.",
    gradient: "from-cyan-500/30 to-blue-600/30",
    glowColor: "cyan"
  },
  {
    icon: "🌙",
    title: "Magical Guilds",
    description: "Collaborate with other mages in guilds and compete in legendary tournaments.",
    gradient: "from-purple-500/30 to-pink-600/30",
    glowColor: "purple"
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -40, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-balance"
            style={{
              background: "linear-gradient(135deg, #d8b4fe, #a78bfa, #22d3ee)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))",
              letterSpacing: "-0.02em"
            }}
          >
            Magical Features
          </motion.h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Discover the enchanted tools that make learning legendary
          </p>
        </motion.div>

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 4 on large screens */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative h-full p-6 bg-linear-to-br from-purple-900/40 to-purple-950/40 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group overflow-hidden backdrop-blur-sm">
                {/* Animated gradient overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600/0 via-purple-600/0 to-cyan-600/0 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 border border-purple-400/50 shadow-lg shadow-purple-500/20 group-hover:shadow-${feature.glowColor}-500/40 transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 10,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.span 
                      className="text-3xl"
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {feature.icon}
                    </motion.span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-purple-200 mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-purple-400/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Add a "View All Features" button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <motion.button
            className="px-8 py-3 rounded-xl border-2 border-purple-400/50 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
              borderColor: "rgba(168, 85, 247, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          > */}
           
            {/* <motion.div
              className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-cyan-500/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  )
}
