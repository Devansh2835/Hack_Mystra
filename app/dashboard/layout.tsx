"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#0a0118] via-[#11022b] to-[#1a003f] text-white">
            <Sidebar />
            <motion.main
                className="flex-1 p-6 overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.main>
        </div>
    );
}
