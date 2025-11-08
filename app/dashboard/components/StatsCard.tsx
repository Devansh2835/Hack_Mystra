"use client";

import { motion } from "framer-motion";

export default function StatsCard({ title, value }: { title: string; value: string }) {
    return (
        <motion.div
            className="p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-sm text-gray-300">{title}</h3>
            <p className="text-2xl font-semibold mt-1">{value}</p>
        </motion.div>
    );
}
