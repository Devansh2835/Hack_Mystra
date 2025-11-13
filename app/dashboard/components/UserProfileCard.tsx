"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function UserProfileCard() {
    const { user, isSignedIn } = useUser();

    return (
        <motion.div
            className="p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                    <Image
                        src={"/avatar.png"}
                        alt="User Avatar"
                        width={80}
                        height={80}
                        className="rounded-full border-2 border-purple-500/50 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-card"></div>
                </div>

                <h2 className="text-xl font-bold text-white mb-1">
                    {isSignedIn ? user?.firstName || "Adventurer" : "Guest"}
                </h2>
                <p className="text-sm text-purple-200/70 mb-3">
                    {isSignedIn ? "Web3 Explorer" : "Visitor"}
                </p>
                <Badge
                    variant="secondary"
                    className="bg-purple-900/50 text-purple-200 border-purple-700/50"
                >
                    Level 1 Witch
                </Badge>
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                    <span className="text-purple-100/2">Progress</span>
                    <span className="text-white font-medium">2%</span>
                </div>
                <div className="w-full bg-purple-900/30 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: "68%" }}
                    ></div>
                </div>
            </div>

            <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <User className="w-4 h-4 mr-1" />
                    Profile
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-700/50 hover:bg-purple-900/30"
                >
                    <Settings className="w-4 h-4" />
                </Button>
            </div>
        </motion.div>
    );
}
