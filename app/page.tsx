"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CourseCompletionSection from "@/components/course-completion-section"
import Footer from "@/components/footer"
import StarryBackground from "@/components/star-background"
import MouseTrail from "@/components/mouse-trail"
import AuthModal from "@/components/auth-form"
import { useRouter } from "next/navigation"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle URL hash navigation if coming from another page
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const targetId = hash.replace("#", "")
      const target = document.getElementById(targetId)
      if (target) {
        const navHeight = 80
        const targetPosition = target.offsetTop - navHeight
        window.scrollTo({ top: targetPosition, behavior: "smooth" })
      }
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950"
      style={{ overflow: "visible" }}
    >
      {/* Background layers */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <StarryBackground />
        <MouseTrail />
      </div>

      {/* Auth Modal Overlay */}
      {showAuthModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowAuthModal(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AuthModal showPassword={showPassword} setShowPassword={setShowPassword} />
          </div>
        </div>
      )}

      <div style={{ position: "relative", zIndex: 10 }}>
        <Navigation scrollY={scrollY} onAuthClick={() => setShowAuthModal(true)} />

        <section id="home">
          <HeroSection onAuthClick={() => setShowAuthModal(true)} />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

       
        <section id="about">
          <CourseCompletionSection />
        </section>

        <Footer />
      </div>
    </div>
  )
}
