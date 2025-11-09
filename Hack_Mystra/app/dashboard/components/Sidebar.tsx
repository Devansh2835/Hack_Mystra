"use client";

import { motion } from "framer-motion";
import { Home, User, Bookmark, LogOut } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Home", icon: <Home size={18} />, href: "/dashboard" },
    { name: "Profile", icon: <User size={18} />, href: "/dashboard/profile" },
    { name: "Bookmarks", icon: <Bookmark size={18} />, href: "/dashboard/bookmarks" },
];

export default function Sidebar() {
    return (
        <motion.aside
            className="w-64 bg-white/10 backdrop-blur-lg border-r border-white/10 p-4 flex flex-col"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-xl font-semibold mb-8 text-purple-300 tracking-wide">Mystra Dashboard</h2>
            <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 text-sm text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all"
                    >
                        {item.icon} {item.name}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10">
                <button className="flex items-center gap-3 text-sm text-gray-300 hover:text-red-400 transition-all">
                    <LogOut size={18} /> Logout
                </button>
            </div>
        </motion.aside>
    );
}
