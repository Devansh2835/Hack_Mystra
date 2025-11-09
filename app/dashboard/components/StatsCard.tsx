"use client";

import { motion } from "framer-motion";

interface StatsCardProps {
    title: string;
    value: string;
    icon?: string;
    trend?: string;
}

export default function StatsCard({ title, value, icon, trend }: StatsCardProps) {
    return (
        <motion.div
            className="group p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 hover-glow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
        >
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-purple-200/80">{title}</h3>
                {icon && <span className="text-xl">{icon}</span>}
            </div>
            <div className="space-y-1">
                <p className="text-2xl font-bold text-white">{value}</p>
                {trend && (
                    <p className="text-xs text-purple-300/70 font-medium">{trend}</p>
                )}
            </div>
        </motion.div>
    );
}
