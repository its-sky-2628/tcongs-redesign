import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

export default function ContinuousScrollCanvas() {
  const { scrollYProgress } = useScroll()
  
  // ⚡ Smooth damping for the tracking line (prevents mechanical jitter)
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  })

  // 🖱️ High-performance mouse coordinate tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half the glow element size (350px / 2 = 175) to center it
      mouseX.set(e.clientX - 175)
      mouseY.set(e.clientY - 175)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 🌌 DYNAMIC SHARED BACKGROUND LIGHTING (Persistent Auroras) */}
      <div className="absolute top-0 left-1/4 h-[700px] w-[700px] rounded-full bg-violet-600/[0.03] blur-[150px]" />
      <div className="absolute top-[40%] right-1/4 h-[800px] w-[800px] rounded-full bg-cyan-500/[0.025] blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 h-[700px] w-[700px] rounded-full bg-amber-500/[0.02] blur-[140px]" />

      {/* 🖱️ INTERACTIVE MOUSE GLOW AURA (Deep Atmospheric Follower) */}
      <motion.div
        className="hidden md:block absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-cyan-500/[0.02] to-indigo-500/[0.02] blur-[80px]"
        style={{ x: mouseX, y: mouseY }}
      />

      {/* 📏 SCROLL-LINKED LASER TRACE LINE */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/[0.03]">
        <motion.div
          className="w-full h-full origin-top bg-gradient-to-b from-cyan-500 via-indigo-500 to-amber-400 opacity-60 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          style={{ scaleY }}
        />
      </div>

    </div>
  )
}