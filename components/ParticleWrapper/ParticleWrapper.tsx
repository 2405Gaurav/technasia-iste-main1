'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  life?: number
}

interface ParticleWrapperProps {
  children: ReactNode
}

export function ParticleWrapper({ children }: ParticleWrapperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles: Particle[] = []
  const sparkles: Particle[] = []

  let animationFrameId: number
  let scrollY = 0

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const container = canvas.parentElement
    if (!container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const createParticles = () => {
      particles.length = 0
      const count = Math.floor(canvas.width * 0.08)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.7, // increased speed
          speedY: (Math.random() - 0.5) * 0.7, // increased speed
          opacity: Math.random() * 0.5 + 0.5,
        })
      }
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 130) { // increased connection distance
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,255,180,${(1 - distance / 130) * 0.4})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        ctx.shadowBlur = 10 + scrollY * 0.01
        ctx.shadowColor = 'rgba(0,255,180,0.5)'

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,180,${p.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0
      }

      drawLines()

      // Sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i]
        s.x += s.speedX
        s.y += s.speedY
        s.opacity -= 0.02
        s.life! -= 1

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 120, ${s.opacity})`
        ctx.fill()

        if (s.opacity <= 0 || s.life! <= 0) {
          sparkles.splice(i, 1)
        }
      }
    }

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Sparkle burst
      for (let i = 0; i < 20; i++) {
        sparkles.push({
          x,
          y,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3,
          opacity: 1,
          life: 40,
        })
      }
    }

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', handleClick)

    createParticles()
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"
        style={{ zIndex: 2 }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
