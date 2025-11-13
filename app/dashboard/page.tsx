// DashboardPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs"; // import Clerk hook
import Navigation from "@/components/navigation";
import StatsCard from "./components/StatsCard";
import UserProfileCard from "./components/UserProfileCard";
import ActivityFeed from "./components/ActivityFeed";
import QuickActions from "./components/QuickActions";
import ProgressOverview from "./components/ProgressOverview";

export default function DashboardPage() {
    const [scrollY, setScrollY] = useState(0);
    const { user, isSignedIn } = useUser(); // get current user

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#11022b] to-[#1a003f] text-white pt-20">
            {/* Navigation */}
            <Navigation scrollY={scrollY} onAuthClick={() => window.location.href = "/dashboard"} />

            <motion.main
                className="container mx-auto px-6 py-8 overflow-y-auto relative z-10 max-w-7xl space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Welcome Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold magic-text mb-2">
                        Welcome back, {isSignedIn ? user?.firstName || "Adventurer" : "Guest"}
                    </h1>
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
            </motion.main>
        </div>
    );
}
