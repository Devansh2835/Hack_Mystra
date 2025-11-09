// DashboardPage.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import StatsCard from "./components/StatsCard";
import UserProfileCard from "./components/UserProfileCard";
import ActivityFeed from "./components/ActivityFeed";
import QuickActions from "./components/QuickActions";
import ProgressOverview from "./components/ProgressOverview";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }} // safe transition
                className="mb-8"
            >
                <h1 className="text-3xl font-bold magic-text mb-2">Welcome back, Dipti</h1>
                <p className="text-purple-200/80">Continue your Web3 journey and track your progress</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard title="Courses Completed" value="0" icon="📚" trend="" />
                <StatsCard title="XP Points" value="243" icon="⚡" trend="+85 today" />
                <StatsCard title="Streak" value="1 day" icon="🔥" trend="Keep it up!" />
                <StatsCard title="Achievements" value="4" icon="🏆" trend="2 new" />
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                    <ProgressOverview />
                    <ActivityFeed />
                </div>

                <div className="space-y-6">
                    <UserProfileCard />
                    <QuickActions />
                </div>
            </div>
        </div>
    );
}
