"use client"

import { useEffect, useRef } from "react"
import { useMousePosition } from "@/hooks/use-mouse"
import { useTheme } from "next-themes"

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.6
        this.speedY = Math.random() * 0.6

        // Colors based on theme
        const darkColors = [
          "rgba(230, 57, 70, 0.3)", // red
          "rgba(69, 123, 157, 0.3)", // blue
          "rgba(241, 196, 15, 0.3)", // yellow
          "rgba(241, 250, 238, 0.2)", // white
        ]

        const lightColors = [
          "rgba(230, 57, 70, 0.5)", // red
          "rgba(69, 123, 157, 0.5)", // blue
          "rgba(241, 196, 15, 0.5)", // yellow
          "rgba(26, 26, 46, 0.5)", // dark blue/black
        ]

        const colors = theme === "dark" ? darkColors : lightColors
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height

        // Mouse interaction
        // const dx = mousePosition.x - this.x
        // const dy = mousePosition.y - this.y
        // const distance = Math.sqrt(dx * dx + dy * dy)

        // if (distance < 100) {
        //   const angle = Math.atan2(dy, dx)
        //   this.x -= Math.cos(angle) * 1
        //   this.y -= Math.sin(angle) * 1
        // }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            const opacity = theme === "dark" ? 0.1 : 0.05
            ctx.strokeStyle = `rgba(${theme === "dark" ? "255, 255, 255" : "0, 0, 0"}, ${opacity * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [ theme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
