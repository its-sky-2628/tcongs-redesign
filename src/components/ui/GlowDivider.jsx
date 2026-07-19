import { motion } from 'framer-motion'

export default function GlowDivider() {
  return (
    <div className="relative w-full h-[1px] bg-white/[0.02] z-10 overflow-visible">
      
      {/* Horizontal Gradient Streak */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      
      {/* 🎯 Central Neon Hotspot (Where the vertical line intersects) */}
      <motion.div
        initial={{ opacity: 0.3, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Outer radial aura */}
        <div className="h-6 w-32 rounded-full bg-cyan-500/10 blur-md -translate-y-1/2" />
        {/* Core hot point */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[2px] w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee]" />
      </motion.div>

    </div>
  )
}