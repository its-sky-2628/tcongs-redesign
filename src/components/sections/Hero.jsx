import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Activity, Users, Zap, BarChart3, Globe, Award, Heart, Cpu, RefreshCw } from 'lucide-react'
import { heroStats } from '../../data/statsData'

const headlineLines = [
  { text: 'Smart Digital', gradient: 'brand' },
  { text: 'Solutions for', gradient: 'matte' },
  { text: 'Modern Businesses', gradient: 'cyber' }
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function CountUpNumber({ value, duration = 2 }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const end = parseInt(value, 10)
    if (start === end) return
    const totalMiliseconds = duration * 1000
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      }
    }, incrementTime)
    return () => clearInterval(timer)
  }, [value, duration])
  return <>{count}</>
}

const getStatIcon = (label) => {
  const lower = label.toLowerCase();
  if (lower.includes('expert') || lower.includes('year')) return <Award className="h-4 w-4 text-cyan-400 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 ease-out" />;
  if (lower.includes('project') || lower.includes('deliver')) return <BarChart3 className="h-4 w-4 text-emerald-400 group-hover:-translate-y-1 group-hover:scale-125 transition-all duration-300 ease-out" />;
  if (lower.includes('countr') || lower.includes('serv')) return <Globe className="h-4 w-4 text-blue-400 group-hover:rotate-90 group-hover:scale-125 transition-all duration-500 ease-out" />;
  return <Heart className="h-4 w-4 text-orange-400 group-hover:scale-135 transition-all duration-300 ease-out" />;
}

export default function Hero({ onStartProject }) {
  const [badgeGlow, setBadgeGlow] = useState(false)
  const [isServicesClicked, setIsServicesClicked] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const gridX = useTransform(mouseX, [-400, 400], [-12, 12])
  const gridY = useTransform(mouseY, [-400, 400], [-12, 12])
  const glowX = useTransform(mouseX, [-400, 400], [-30, 30])
  const glowY = useTransform(mouseY, [-400, 400], [-30, 30])
  const dashboardX = useTransform(mouseX, [-400, 400], [-6, 6])
  const dashboardY = useTransform(mouseY, [-400, 400], [-6, 6])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2
      const y = e.clientY - window.innerHeight / 2
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const handleBadgeClick = () => {
    setBadgeGlow(true)
    setTimeout(() => setBadgeGlow(false), 800)
  }

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsServicesClicked(true)
    
    const target = document.querySelector('#services');
    if(target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }

    setTimeout(() => {
      setIsServicesClicked(false)
    }, 1500)
  }

  const premiumParticles = [
    { top: '12%', left: '8%', size: '3px', duration: 8, delay: 0 },
    { top: '22%', left: '45%', size: '2px', duration: 11, delay: 1.5 },
    { top: '55%', left: '18%', size: '4px', duration: 9, delay: 0.5 },
    { top: '78%', left: '28%', size: '2px', duration: 14, delay: 2.2 },
    { top: '19%', left: '88%', size: '3px', duration: 7, delay: 1.1 },
    { top: '48%', left: '72%', size: '2px', duration: 12, delay: 0.3 },
  ]

  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  return (
    <section id="home" className="relative overflow-hidden bg-[#02040a] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center min-h-[auto] lg:min-h-[95vh] z-10">
      
      {/* BACKGROUND GRAPHICS LAYER */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <motion.div style={{ x: gridX, y: gridY }} className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.85] transition-transform duration-300 ease-out" />
        <motion.div style={{ x: glowX, y: glowY }} className="absolute -left-32 top-12 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent blur-[130px] transform-gpu" />
        <motion.div style={{ x: useTransform(glowX, (v) => -v), y: useTransform(glowY, (v) => -v) }} className="absolute -right-20 top-0 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-cyan-500/15 via-indigo-600/5 to-transparent blur-[130px] transform-gpu" />
        
        {premiumParticles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-cyan-400/40 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ y: [0, -28, 0], x: [0, idx % 2 === 0 ? 15 : -15, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto max-w-[1380px] grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-center w-full z-20 relative">
        
        {/* Left Typography Block */}
        <div className="max-w-3xl flex flex-col justify-center text-center lg:text-left w-full">
          
          {/* Status Capsule */}
          <div className="flex w-full justify-center lg:justify-start mb-6">
            <button
              onClick={handleBadgeClick}
              className={`relative inline-flex items-center gap-3.5 rounded-full border px-4 py-1.5 backdrop-blur-xl shadow-xl transition-all duration-300 select-none cursor-pointer outline-none active:scale-95
                ${badgeGlow 
                  ? 'border-cyan-500/40 bg-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.25)] scale-[1.02]' 
                  : 'border-white/[0.05] bg-slate-950/80 hover:border-white/10 hover:bg-slate-900'
                }`}
            >
              <div className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium tracking-wide text-slate-400">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-emerald-400 font-bold">● Status Active</span>
                <span className="h-3 w-px bg-white/10" />
                <span className="text-slate-300 font-medium">120+ Brands Trusted Globally</span>
              </div>
            </button>
          </div>

          {/* Heading Strings Grid */}
          <motion.h1 variants={container} initial="hidden" animate="show" className="text-4xl sm:text-5xl lg:text-[4.2rem] font-extrabold font-display tracking-[-0.035em] leading-[1.04] w-full">
            {headlineLines.map((line, i) => (
              <motion.span key={i} variants={lineVariants} className="block mt-0.5 whitespace-normal lg:whitespace-nowrap">
                {line.gradient === 'brand' && <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent font-black">{line.text}</span>}
                {line.gradient === 'matte' && <span className="text-slate-100 font-black">{line.text}</span>}
                {line.gradient === 'cyber' && <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent font-black">{line.text}</span>}
              </motion.span>
            ))}
          </motion.h1>

          {/* Fixed Width Hero Description */}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="mt-5 max-w-[460px] text-sm sm:text-base leading-relaxed text-slate-400/90 mx-auto lg:mx-0">
            We help brands grow with web, app and marketing solutions across the globe — strategy, design and engineering under one accountable team.
          </motion.p>

          {/* Call To Actions */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onStartProject}
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-sm font-bold text-white z-10 select-none cursor-pointer shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative tracking-wide font-bold">Start Your Project</span>
              <ArrowRight className="h-4 w-4 relative transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            {/* ⚡ NEW UPGRADED GRADIENT BUTTON: Match hierarchy with distinct cyber contrast */}
            <motion.a
              href="#services" 
              onClick={handleServicesClick} 
              initial="initial"
              whileHover="hover" 
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white z-10 select-none cursor-pointer shadow-[0_4px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-0.5 min-w-[180px]"
            >
              <span className="relative tracking-wide font-bold">View Services</span>
              <ArrowUpRight className="h-4 w-4 relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>

          {/* Premium Stats Cards Block */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.75 }} className="mt-14 max-w-2xl mx-auto lg:mx-0 w-full">
            <div className="mb-6 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {heroStats.map((stat) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative p-4 rounded-xl border border-slate-800/50 bg-[#050911]/60 backdrop-blur-sm group transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/40 hover:shadow-[0_4px_30px_rgba(6,182,212,0.15)] overflow-hidden cursor-default"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-2 mb-2">
                    {getStatIcon(stat.label)}
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight transition-transform duration-300 origin-left group-hover:scale-[1.03] group-hover:text-cyan-400">
                    <CountUpNumber value={stat.value} />
                    <span className="text-orange-500 font-bold ml-0.5 transition-colors duration-300 group-hover:text-amber-400">{stat.suffix}</span>
                  </p>
                  <p className="mt-1 text-[9px] font-bold text-slate-500 tracking-wider uppercase group-hover:text-slate-300 transition-colors duration-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DYNAMIC DASHBOARD BLOCK */}
        <motion.div 
          style={{ x: dashboardX, y: dashboardY }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto w-full max-w-[550px] lg:max-w-none z-10 lg:-ml-4 xl:-ml-6 transition-transform duration-300 ease-out"
        >
          <div className="absolute inset-0 -z-10 bg-cyan-500/5 blur-[50px] rounded-[24px]" />
          
          <div className="relative rounded-[24px] p-6 shadow-2xl bg-[#090d16] border border-slate-800/60 backdrop-blur-xl">
            
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-slate-800/50 pb-4 mb-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
              </div>
              
              {/* Micro Metrics Panel */}
              <div className="hidden sm:flex items-center gap-4 px-3 py-1 bg-slate-950/60 border border-slate-800/60 rounded-lg text-[9px] font-mono text-slate-400 select-none">
                <div className="flex items-center gap-1.5">
                  <Cpu className="h-2.5 w-2.5 text-cyan-400 animate-pulse" />
                  <span>CPU: <span className="text-white font-bold">24%</span></span>
                </div>
                <span className="h-2 w-[1px] bg-slate-800" />
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="h-2.5 w-2.5 text-purple-400 animate-spin [animation-duration:8s]" />
                  <span>LOAD: <span className="text-white font-bold">0.42</span></span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
                <span className="font-mono text-[9px] tracking-widest text-emerald-400 uppercase font-bold">
                  SECURE NODE ACTIVE
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[16px] p-5 border border-slate-800 bg-[#06090f] relative overflow-hidden">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Net Business Volume</p>
                    <p className="text-3xl font-extrabold text-white mt-1 tracking-tight">+38.4%</p>
                    <p className="text-[10px] text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                      from last year <ArrowUpRight className="h-2.5 w-2.5" />
                    </p>
                  </div>
                  <div className="text-[9px] font-mono font-bold px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-slate-400 tracking-wider">
                    GLASS PANEL v2
                  </div>
                </div>

                {/* GRAPH INTERFACE */}
                <div className="h-36 w-full mt-6 relative overflow-hidden select-none">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 520 140" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="35%" stopColor="#a855f7" />
                        <stop offset="70%" stopColor="#db2777" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                      <linearGradient id="chartAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#db2777" stopOpacity="0.15" />
                        <stop offset="50%" stopColor="#a855f7" stopOpacity="0.04" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <motion.path
                      d="M 10,105 
                         C 60,104 90,80 130,68 
                         C 180,54 210,95 260,90 
                         C 320,84 360,35 420,40 
                         C 455,43 475,62 495,85 
                         L 495,140 L 10,140 Z"
                      fill="url(#chartAreaGrad)"
                    />

                    <motion.path
                      d="M 10,105 
                         C 60,104 90,80 130,68 
                         C 180,54 210,95 260,90 
                         C 320,84 360,35 420,40 
                         C 455,43 475,62 495,85"
                      fill="none"
                      stroke="url(#chartLineGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      pathLength="1"
                      initial={{ strokeDashoffset: 1, strokeDasharray: 1 }}
                      animate={{ strokeDashoffset: [1, 0, -1] }}
                      transition={{ 
                        duration: 4,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    />
                  </svg>

                  <motion.div 
                    className="absolute h-3.5 w-3.5 rounded-full bg-orange-500 ring-4 ring-orange-500/20 shadow-[0_0_15px_#ea580c] z-10"
                    style={{ left: '92%' }}
                    animate={{ 
                      y: [60, 42, 75, 50, 60],
                      scale: [1, 1.25, 1]
                    }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity
                    }}
                  />
                </div>

                <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-900">
                  {months.map((m) => (
                    <span key={m} className="font-mono text-[9px] text-slate-600 font-bold">{m}</span>
                  ))}
                </div>
              </div>

              {/* Bottom Row Info Panel Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[16px] p-4 bg-[#06090f] border border-slate-800 text-left">
                  <div className="p-1.5 rounded-lg bg-blue-500/5 border border-blue-500/10 w-fit mb-2">
                    <Users className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-xl font-bold text-white tracking-tight">48.2K</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Active Partners</p>
                  <p className="text-[9px] text-emerald-400 font-medium mt-2 flex items-center gap-0.5">
                    +12.5% <span className="text-slate-600 font-normal">this month</span>
                  </p>
                </div>

                <div className="rounded-[16px] p-4 bg-[#06090f] border border-slate-800 text-left flex justify-between items-center">
                  <div>
                    <div className="p-1.5 rounded-lg bg-orange-500/5 border border-orange-500/10 w-fit mb-2">
                      <Zap className="h-4 w-4 text-orange-400" />
                    </div>
                    <p className="text-xl font-bold text-white tracking-tight">99.99%</p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">System Uptime</p>
                  </div>
                  <div className="relative h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-800" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-blue-500" strokeDasharray="100, 100" strokeWidth="2.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute font-mono text-[7px] font-bold text-white">100%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-mono tracking-widest text-slate-600 uppercase font-black">
              <span>⚡ 3D MATRIX ENABLED</span>
            </div>
          </div>

          {/* Floated Pill */}
          <div className="absolute -left-6 top-16 flex items-center gap-2.5 rounded-xl border border-slate-800/80 bg-[#090d16]/90 px-3.5 py-2.5 shadow-2xl text-left z-20 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            <Activity className="h-3.5 w-3.5 text-orange-400 animate-pulse" />
            <div>
              <p className="text-xs font-bold text-white leading-none">Automation Active</p>
              <p className="text-[9px] text-slate-500 mt-0.5 font-medium">Node optimized</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}