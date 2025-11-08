"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const socialIcons = [
    { icon: "𝕏", label: "Twitter" },
    { icon: "📘", label: "Facebook" },
    { icon: "📷", label: "Instagram" },
    { icon: "💼", label: "LinkedIn" },
  ]

  return (
    <footer className="relative border-t border-purple-500/20 bg-linear-to-b from-transparent to-purple-950/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-white font-bold text-lg">Mystra</span>
            </div>
            <p className="text-gray-400 text-sm">Where magic meets technology in the future of learning.</p>
          </motion.div>

          {/* Links */}
          {[
            { title: "Product", links: ["Features", "Pricing", "Security", "Roadmap"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Resources", links: ["Docs", "API", "Community", "Support"] },
          ].map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2025 Mystra. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((social) => (
              <motion.a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/60 transition-all"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
