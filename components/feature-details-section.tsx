"use client"

import { motion } from "framer-motion"

const featureDetails = [
  {
    id: "ai-learning",
    icon: "🧩",
    title: "AI-Powered Magic Learning",
    fullDescription: "Our advanced AI system creates a completely personalized learning experience that adapts to your unique magical abilities and learning style. The more you practice, the smarter it becomes at understanding your strengths and areas for growth.",
    features: [
      "Adaptive difficulty based on your performance",
      "Personalized spell recommendations",
      "Real-time feedback and hints",
      "Progress tracking across all subjects"
    ],
    gradient: "from-purple-500/20 to-purple-700/20"
  },
  {
    id: "quests-spells",
    icon: "⚔️",
    title: "Gamified Quests & Spells",
    fullDescription: "Transform your learning journey into an epic adventure! Complete thrilling quests, master powerful spells, and unlock achievements as you progress through our immersive magical curriculum.",
    features: [
      "Story-driven learning missions",
      "Spell mastery challenges",
      "Boss battles to test your knowledge",
      "Unlock legendary achievements"
    ],
    gradient: "from-pink-500/20 to-rose-600/20"
  },
  {
    id: "xp-levelup",
    icon: "💎",
    title: "Earn XP and Level Up",
    fullDescription: "Every spell learned, quest completed, and challenge conquered earns you experience points. Level up your magical abilities and unlock new powers as you climb the ranks from apprentice to archmage.",
    features: [
      "XP for completing lessons and quests",
      "Unlock new spells and abilities",
      "Prestige ranks and titles",
      "Exclusive rewards for top performers"
    ],
    gradient: "from-cyan-500/20 to-blue-600/20"
  },
  {
    id: "guilds",
    icon: "🌙",
    title: "Magical Guilds",
    fullDescription: "Join forces with fellow mages in powerful guilds! Collaborate on group quests, share knowledge, compete in tournaments, and climb the guild leaderboards together.",
    features: [
      "Create or join magical guilds",
      "Collaborative learning challenges",
      "Guild vs Guild tournaments",
      "Shared resources and spell libraries"
    ],
    gradient: "from-purple-500/20 to-pink-600/20"
  },
]

export default function FeatureDetailsSection() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {featureDetails.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className="relative max-w-6xl mx-auto mb-32 last:mb-0"
        >
          <motion.div
            className={`relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br ${feature.gradient} border border-purple-500/30 backdrop-blur-sm overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Icon and title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient.replace('/20', '/40')} flex items-center justify-center text-4xl border border-purple-400/50 shadow-lg shadow-purple-500/30`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  {feature.title}
                </h3>
              </div>

              {/* Full description */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {feature.fullDescription}
              </p>

              {/* Features list */}
              <div className="grid sm:grid-cols-2 gap-4">
                {feature.features.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-purple-900/30 border border-purple-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  )
}