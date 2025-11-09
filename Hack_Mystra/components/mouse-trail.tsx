"use client"

import { useEffect, useRef } from "react"

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const trail = useRef<Array<{ x: number; y: number; age: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      trail.current.push({ x: e.clientX, y: e.clientY, age: 0 })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trail.current = trail.current.filter((point) => {
        point.age += 1
        const opacity = Math.max(0, 1 - point.age / 30)

        ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.3})`
        ctx.beginPath()
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2)
        ctx.fill()

        return point.age < 30
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("mousemove", handleMouseMove)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />
}
