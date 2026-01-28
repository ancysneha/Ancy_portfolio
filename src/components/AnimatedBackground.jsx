import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create noise texture
    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 20
      }

      return imageData
    }

    // Create floating particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(236, 72, 153, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw noise overlay
      const noise = createNoise()
      ctx.putImageData(noise, 0, 0)

      // Draw and update particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(236, 72, 153, 0.35) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(34, 211, 238, 0.35) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.25) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(34, 211, 238, 0.25) 0px, transparent 50%),
              radial-gradient(at 50% 50%, rgba(139, 92, 246, 0.2) 0px, transparent 50%)
            `,
            backgroundSize: '200% 200%',
            animation: 'gradient 15s ease infinite',
          }}
        />
      </div>

      {/* Animated Canvas Noise */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
        style={{ mixBlendMode: 'overlay' }}
      />

      {/* Glassmorphism Layers */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 150, -150, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950/80" />
    </div>
  )
}

export default AnimatedBackground

