"use client"

import React from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import StarryBackground from "@/components/star-background"
import { useRouter } from "next/navigation"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = React.useState(0)
  const router = useRouter()

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#11022b] to-[#1a003f] text-white pt-20">
      <StarryBackground />
      <Navigation
        scrollY={scrollY}
        onAuthClick={() => router.push("/dashboard")} // let router handle navigation
      />
      <motion.main
        className="container mx-auto px-6 py-8 overflow-y-auto relative z-10 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.main>
    </div>
  )
}
