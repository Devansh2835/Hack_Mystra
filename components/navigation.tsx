"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface NavigationProps {
  scrollY: number
  onAuthClick: () => void
}

export default function Navigation({ scrollY, onAuthClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    setIsScrolled(scrollY > 50)

    // Update active item on scroll
    const sections = ["home", "features", "about"]
    const scrollPos = window.scrollY + 100 // offset for navbar height
    for (const section of sections) {
      const el = document.getElementById(section)
      if (el && scrollPos >= el.offsetTop) {
        setActiveItem(section.charAt(0).toUpperCase() + section.slice(1))
      }
    }
  }, [scrollY])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About Us", href: "#about" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const target = document.getElementById(targetId)
    if (target) {
      const navHeight = 80 // adjust for navbar height
      const targetPosition = target.offsetTop - navHeight
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-b from-purple-950/90 via-purple-900/80 to-purple-950/70 backdrop-blur-xl border-b border-purple-400/30 shadow-2xl"
          : "bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-transparent backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-white font-bold text-2xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Mystra
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-gray-300 hover:text-white transition-colors relative ${
                activeItem === item.name ? "text-white font-semibold" : ""
              }`}
            >
              {item.name}
              {activeItem === item.name && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 rounded" />
              )}
            </a>
          ))}

          <button
            onClick={onAuthClick}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition"
          >
            Dashboard
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
