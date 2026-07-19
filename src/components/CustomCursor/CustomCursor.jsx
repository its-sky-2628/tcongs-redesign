import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Direct mouse position
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth fluid spring physics for outer ring
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, [role="button"]')) {
        setIsHovered(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, [role="button"]')) {
        setIsHovered(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* 1. COMPACT GLOWING CYAN CENTER DOT (Chota Dot) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38bdf8] hidden md:block shadow-[0_0_8px_#38bdf8]"
        style={{ x: mouseX, y: mouseY }}
      />

      {/* 2. COMPACT OUTER CYAN RING (Choti Sleek Ring) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0284c7]/70 bg-transparent hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          width: isHovered ? 32 : 20,
          height: isHovered ? 32 : 20,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.9)' : 'rgba(2, 132, 199, 0.6)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
    </>
  )
}