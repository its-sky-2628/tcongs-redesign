import { useEffect, useState } from 'react'

export default function AmbientGlow() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* 1. TECH GRID PATTERN (Screenshot 1 waala clean grid) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* 2. SUBTLE AMBIENT GLOW SPOTS (Hero & background depth ke liye) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-amber-500/5 blur-[120px]" />
      <div className="absolute top-[40%] left-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="absolute top-[60%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
    </div>
  )
}