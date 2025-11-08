"use client";

import React from "react";
import { motion } from "framer-motion";
import StatsCard from "./components/StatsCard";
import UserProfileCard from "./components/UserProfileCard";
import ActivityFeed from "./components/ActivityFeed";

export default function DashboardPage() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            <div className="col-span-2 space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                    <StatsCard title="Events Joined" value="12" />
                    <StatsCard title="Bookmarks" value="8" />
                    <StatsCard title="XP Points" value="320" />
                </div>

                <ActivityFeed />
            </div>

            <div>
                <UserProfileCard />
            </div>
        </div>
    );
}
