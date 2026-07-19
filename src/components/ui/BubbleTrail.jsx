import { useEffect, useRef } from 'react'

export default function BubbleTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let particles = []
    
    // Resize layer safely
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // Particle Configuration Class
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        // Bubble size logic
        this.size = Math.random() * 8 + 4 
        // Horizontal and vertical drift speeds
        this.speedX = (Math.random() - 0.5) * 1.5
        this.speedY = (Math.random() - 0.5) * 1.5 - 0.6 // Halki upar ki taraf float velocity
        
        // Randomly select between luxury Gold, Vivid Amber and Neon Orange
        const colors = [
          'rgba(245, 158, 11, ', // Amber
          'rgba(249, 115, 22, ', // Orange
          'rgba(244, 63, 94, ',  // Rose Gold tint
        ]
        this.baseColor = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = 1.0 // Fully opaque at start
        this.decay = Math.random() * 0.015 + 0.01 // Fade animation speed
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.alpha -= this.decay // Smoothly fading
        if (this.size > 0.2) this.size -= 0.05 // Bubble shrinks as it dies
      }

      draw() {
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `${this.baseColor}${this.alpha})`
        
        // Dynamic Glowing Blur context inside bubbles
        ctx.shadowBlur = 15
        ctx.shadowColor = 'rgba(249, 115, 22, 0.4)'
        
        ctx.fill()
        ctx.restore()
      }
    }

    // Capture position moves to generate bubbles
    const handleMouseMove = (e) => {
      // Create 2-3 bubbles per frame move for optimal trail density without overloading CPU
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY))
      }
    }

    // Animation Loop
    let animationFrameId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        
        // Remove dead bubbles from stack array
        if (particles[i].alpha <= 0 || particles[i].size <= 0) {
          particles.splice(i, 1)
          i--
        }
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    // Cleanup resources
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40 h-full w-full"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}