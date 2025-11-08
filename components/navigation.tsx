"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface NavigationProps {
  scrollY: number;
  onAuthClick: () => void;
}

export default function Navigation({ scrollY, onAuthClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = ["Home", "About Us", "Features"];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-b from-purple-950/90 via-purple-900/80 to-purple-950/70 backdrop-blur-xl border-b border-purple-400/30 shadow-2xl shadow-purple-500/20"
          : "bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-transparent backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Magical glow line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Logo with enhanced animations */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 flex items-center justify-center shadow-2xl shadow-purple-500/60 overflow-hidden group">
            {/* Rotating glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-transparent to-purple-300/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Pulsing inner glow */}
            <motion.div
              className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Sparkle burst on hover */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI) / 4) * 20,
                    y: Math.sin((i * Math.PI) / 4) * 20,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>

            {/* Enhanced star icon */}
            <motion.svg
              className="w-8 h-8 text-white relative z-10 drop-shadow-2xl"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              <motion.circle
                cx="12"
                cy="12"
                r="2"
                className="text-purple-100"
                animate={{
                  r: [2, 3, 2],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </motion.svg>
          </div>

          <div className="flex flex-col -space-y-1">
            <motion.span
              className="text-white text-3xl sm:text-4xl leading-none tracking-wide"
              style={{
                fontFamily: "HalloWitchZ",
                position: "relative",
                top: "12px",
                filter: "drop-shadow(0 4px 12px rgba(168,85,247,0.6))",
              }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(168,85,247,0.8)",
                  "0 0 40px rgba(168,85,247,0.4)",
                  "0 0 20px rgba(168,85,247,0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Mystra
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced Menu Items */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="relative text-gray-300 hover:text-white transition-colors group"
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem("")}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="relative z-10 font-medium tracking-wide">
                {item}
              </span>

              {/* Magical underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 shadow-lg shadow-purple-500/50"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />

              {/* Glow effect on hover */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 blur-xl -z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating sparkle on hover */}
              {activeItem === item && (
                <motion.div
                  className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-300 rounded-full"
                  animate={{
                    y: [-5, -10, -5],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.a>
          ))}

          {/* Login Link */}
          <motion.a
            href="/signin"
            className="relative text-gray-300 hover:text-white transition-colors group"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative z-10 font-medium tracking-wide">
              Login
            </span>
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 shadow-lg shadow-purple-500/50"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>

        {/* Enhanced Dashboard Button */}
        <motion.button
          onClick={onAuthClick}
          className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold overflow-hidden group shadow-xl shadow-purple-500/40"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168,85,247,0.5)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            animate={{
              x: ["-200%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 bg-purple-400/30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <span className="relative z-10 tracking-wide flex items-center gap-2">
            Dashboard
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </span>
        </motion.button>
      </div>
    </motion.nav>
  );
}