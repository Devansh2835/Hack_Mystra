// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

<<<<<<< HEAD
export const metadata = {
  title: "Your App",
  description: "Built with Clerk + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-[#030b18] text-white antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
=======
import React from "react";
import { motion } from "framer-motion";
import StarryBackground from "@/components/star-background";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#11022b] to-[#1a003f] text-white pt-20">
            <StarryBackground />
            <motion.main
                className="container mx-auto px-6 py-8 overflow-y-auto relative z-10 max-w-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.main>
        </div>
    );
}
>>>>>>> origin/master
