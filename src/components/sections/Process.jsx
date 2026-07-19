import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import { processSteps } from '../../data/processData'

export default function Process() {
  // Timeline container ke liye ref taaki accurate scroll percentage calculate ho sake
  const containerRef = useRef(null)
  
  // Element ke layout boundaries ke basis pr scroll capture krna
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] // Jab timeline ka top screen ke center me aaye tab start ho, bottom center me aaye tab end ho
  })

  // Scroll Progress (0 to 1) ko High-Performance Height String ("0%" to "100%") me map krna
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="process" className="relative bg-[#030712] py-20 sm:py-24 border-t border-white/[0.03] overflow-hidden">
      
      {/* 🌌 Ambient Layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-violet-500/[0.015] blur-[140px]" />
      </div>

      <div className="container-px mx-auto max-w-7xl relative z-10">
        <SectionHeading
          eyebrow="Our Process, Your Growth"
          title="From idea to scalable digital solution"
          description="A proven six-stage path that turns strategy into a launched, growing product — with no guesswork in between."
        />

        {/* Timeline main viewport bridge bounding wrapper */}
        <div ref={containerRef} className="mt-16 relative">
          
          {/* ⚡ BACKGROUND TRACK (Faint Line Base) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/[0.04]" />

          {/* ⚡ LIVE ACTIVE DRAW/SHRINK TIMELINE (Asli Scroll Logic) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="hidden lg:block absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-400 origin-top shadow-[0_0_10px_rgba(6,182,212,0.5)] z-20"
          >
            {/* Draw Line ke sabse bottom tip par chalne wala active mechanical pointer glow pod */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-cyan-400 blur-[2px] shadow-[0_0_8px_#22d3ee]" />
          </motion.div>

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0
              
              return (
                <div key={step.id} className="lg:grid lg:grid-cols-2 lg:gap-0 relative group">
                  
                  {/* Card Content Layout */}
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`${isEven ? 'lg:col-start-1 lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'} pb-8 lg:pb-16`}
                  >
                    {/* Obsidian Premium Box Frame */}
                    <div className={`relative rounded-2xl border border-white/[0.05] bg-[#050811]/60 backdrop-blur-xl p-7 transition-all duration-500 hover:border-cyan-500/40 hover:bg-[#0b111e]/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${isEven ? 'lg:ml-auto' : ''} max-w-md`}>
                      
                      {/* Big Oversized Step ID Stroke */}
                      <span className={`absolute top-4 font-display font-black text-5xl sm:text-6xl text-transparent tracking-tighter select-none pointer-events-none opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:text-cyan-400 [webkit-text-stroke:1px_rgba(255,255,255,0.4)] group-hover:[webkit-text-stroke:0px_transparent]
                        ${isEven ? 'left-6' : 'right-6'}`}
                      >
                        {step.id}
                      </span>

                      {/* Header Shell Elements */}
                      <div className={`flex items-center gap-4 relative z-10 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.04] border border-white/[0.08] text-cyan-400 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                          <Icon name={step.icon} className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6" />
                        </div>
                        <div className={`flex flex-col ${isEven ? 'lg:items-end' : ''}`}>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                            PHASE 0{step.id}
                          </span>
                        </div>
                      </div>
                      
                      {/* Text Layout */}
                      <h3 className="mt-5 text-xl font-bold text-white tracking-tight relative z-10 transition-colors duration-300 group-hover:text-cyan-300">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-400/90 mt-1 relative z-10 tracking-wide">
                        {step.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400 relative z-10 transition-colors duration-300 group-hover:text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* ⚡ CARD CONNECTOR PIN BEAM */}
                  <div 
                    aria-hidden
                    className={`hidden lg:block absolute top-[28px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-8 transition-all duration-500 opacity-0 group-hover:opacity-100
                      ${isEven ? 'right-1/2' : 'left-1/2'}`}
                  />

                  {/* INTERACTIVE TIMELINE NODE PIN */}
                  <div 
                    aria-hidden
                    className="hidden lg:flex absolute left-1/2 top-[22px] -translate-x-1/2 h-3 w-3 rounded-full bg-slate-950 border border-white/20 transition-all duration-500 z-30
                      group-hover:bg-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]"
                  />
                  
                  {/* Internal aura pulse glow layer behind the node */}
                  <div 
                    aria-hidden
                    className="hidden lg:flex absolute left-1/2 top-[22px] -translate-x-1/2 h-3 w-3 rounded-full bg-cyan-500/30 blur-sm scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100 z-10"
                  />
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}