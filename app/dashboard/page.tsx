"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, Trophy, Flame, BookOpen, Star } from "lucide-react";
import StarryBackground from "@/components/star-background";
import MouseTrail from "@/components/mouse-trail";

export default function DashboardPage() {
  const [xp, setXp] = useState(320);
  const [level, setLevel] = useState("Apprentice Witch");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const activities = [
    { id: 1, text: "Completed React Potion Lab 🧪", time: "2h ago" },
    { id: 2, text: "Earned ‘CSS Spellbinding’ Badge ✨", time: "1d ago" },
    { id: 3, text: "Joined Hacktober Coven Challenge 🎃", time: "3d ago" },
    { id: 4, text: "Contributed to Open Source Cauldron 🪄", time: "1w ago" },
  ];

  return (
    <div className="relative min-h-screen bg-[#070013] text-white font-sans overflow-hidden">
      <StarryBackground />
      <MouseTrail />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0018] via-[#1a0b2e] to-[#0b0018] opacity-90" />

      {/* Floating Halloween Emojis */}
      {mounted &&
        [...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl opacity-60 select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {["🕸️", "💀", "🕷️", "🎃", "👻"][Math.floor(Math.random() * 5)]}
          </motion.span>
        ))}

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
        {/* === Left Column === */}
        <div className="col-span-2 space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold magic-text">Welcome back, Dipti 👋</h1>
            <p className="text-purple-300 mt-2 text-lg">
              Continue your spellcraft learning journey. Every quest adds XP to your legend.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <StatCard icon={<BookOpen />} title="Quests Completed" value="42" glow="#9b5de5" />
            <StatCard icon={<Flame />} title="Current Streak" value="7 Days 🔥" glow="#ff00e1" />
            <StatCard icon={<Trophy />} title="Total XP" value={`${xp}`} glow="#00f5ff" />
          </div>

          {/* XP Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 bg-white/[0.06] border border-white/10 rounded-xl p-6"
          >
            <h2 className="text-lg font-semibold mb-3 text-purple-200">XP Progress</h2>
            <div className="w-full bg-white/[0.1] rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-4 bg-gradient-to-r from-[#9b5de5] via-[#ff00e1] to-[#00f5ff] rounded-full shadow-[0_0_15px_rgba(155,93,229,0.6)]"
                initial={{ width: 0 }}
                animate={{ width: `${(xp / 1000) * 100}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm mt-2 text-purple-300">
              Level: <span className="text-purple-100 font-semibold">{level}</span>
            </p>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/[0.06] border border-white/10 rounded-xl p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-purple-200">🧾 Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <p className="text-sm text-purple-100">{act.text}</p>
                  <span className="text-xs text-purple-300">{act.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === Right Column === */}
        <aside className="space-y-8">
          <ProfileCard />
          <BadgePanel />
          <StreakFlame />
        </aside>
      </main>

      {/* Footer */}
      <footer className="text-center text-purple-400 py-6 border-t border-purple-800/40 text-sm relative z-10">
        © {new Date().getFullYear()} Mystra Dashboard — Track your spells & XP 🧙‍♀️
      </footer>
    </div>
  );
}

// === Stat Card Component ===
function StatCard({ icon, title, value, glow }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-white/[0.05] border border-white/10 rounded-xl p-4 shadow-lg text-center cursor-pointer transition"
    >
      <div className="text-3xl mx-auto mb-2">{icon}</div>
      <h3 className="text-sm text-purple-200">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <div
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition"
        style={{
          boxShadow: `0 0 25px ${glow}`,
        }}
      />
    </motion.div>
  );
}

// === Profile Card ===
function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/[0.06] border border-white/10 rounded-xl p-6 text-center shadow-md"
    >
      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(155,0,255,0.5)]">
        🧙‍♀️
      </div>
      <h2 className="mt-3 text-xl font-bold">Dipti Pathak</h2>
      <p className="text-sm text-purple-300">Frontend Witch | Web3 Explorer</p>

      <div className="mt-4 text-sm text-purple-200 space-y-1">
        <p>Level: <span className="text-white font-semibold">Apprentice Witch</span></p>
        <p>XP: <span className="text-cyan-300 font-semibold">320</span></p>
      </div>
    </motion.div>
  );
}

// === Badges Panel ===
function BadgePanel() {
  const badges = ["🧠", "💻", "⚡", "🎃", "🌙"];
  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-purple-200">🏅 Achievements</h3>
      <div className="flex justify-center gap-4 text-2xl">
        {badges.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="cursor-pointer"
          >
            {b}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// === Streak Flame ===
function StreakFlame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#2b0054] to-[#0b0020] border border-white/10 rounded-xl p-6 text-center shadow-md"
    >
      <Flame className="mx-auto text-orange-400 w-8 h-8 animate-pulse" />
      <h3 className="text-xl font-bold mt-3 text-orange-300">🔥 7-Day Streak!</h3>
      <p className="text-sm text-purple-200 mt-1">
        Your magic burns bright. Keep learning daily to sustain your flame.
      </p>
    </motion.div>
  );
}
