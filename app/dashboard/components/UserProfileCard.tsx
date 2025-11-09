"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UserProfileCard() {
    return (
        <motion.div
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Image
                src="public/avatar.png"
                alt="User Avatar"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-3 border border-white/20"
            />
            <h2 className="text-lg font-semibold">Dipti</h2>
            <p className="text-sm text-gray-400">Web3 Explorer</p>
            <div className="mt-4 space-x-3">
                <button className="px-3 py-1.5 bg-purple-600/80 rounded-lg text-sm hover:bg-purple-700 transition">
                    Edit
                </button>
                <button className="px-3 py-1.5 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition">
                    View
                </button>
            </div>
        </motion.div>
    );
}
