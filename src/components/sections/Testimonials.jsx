import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonialsData'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // 🔄 AUTO SLIDER ENGINE WITH SMOOTH REFRESH LOOP
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const active = testimonials[index]

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 border-t border-white/[0.03]">
      
      {/* 🌌 High-Fidelity Deep Ambient Nebula Glows */}
      <div aria-hidden className="pointer-events-none absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-violet-500/[0.025] blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -z-10 bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-cyan-500/[0.015] blur-[120px]" />

      <div className="container-px mx-auto max-w-7xl relative z-10">
        <SectionHeading
          align="center"
          eyebrow="Client Voices"
          title="Trusted by founders and product teams"
          description="Don't take our word for it — hear from the visionaries and technical leaders we've collaborated with."
          className="mx-auto"
        />

        {/* ⚡ GLASS CARD ANCHOR VIEWPORT SHELL */}
        <div className="mt-16 mx-auto max-w-3xl relative px-4">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/[0.06] bg-[#050811]/40 backdrop-blur-xl p-8 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10"
            >
              {/* Subtle Top Inner Edge Highlight Beam */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              
              {/* Premium Quote Floating Pod */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-white/[0.08] text-cyan-400 shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
                <Quote className="h-5 w-5 fill-cyan-400/10" />
              </div>

              {/* ⭐ 1. FIVE STAR TRUST ARCHETYPE */}
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
                ))}
              </div>

              {/* Main Core Review Content Quote */}
              <p className="text-center text-lg sm:text-xl leading-relaxed text-slate-200 font-medium tracking-tight">
                &ldquo;{active.quote}&rdquo;
              </p>

              {/* Divider Line */}
              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

              {/* User Identity & Company Branding Wrapper */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* ⚡ 2. CLIENT AVATAR MODULE */}
                <div className="flex items-center gap-4 text-left">
                  {active.avatar ? (
                    <img 
                      src={active.avatar} 
                      alt={active.name} 
                      className="h-12 w-12 rounded-full border border-white/20 object-cover bg-slate-800 shadow-md"
                    />
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-sm font-bold text-slate-950 shadow-md">
                      {active.initials || active.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">{active.name}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{active.role}</p>
                  </div>
                </div>

                {/* ⚡ 3. DYNAMIC COMPANY LOGO BOX */}
                <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05] select-none min-w-[110px]">
                  {active.logoUrl ? (
                    <img src={active.logoUrl} alt="Company Logo" className="h-5 max-w-[120px] object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
                  ) : (
                    <span className="font-mono text-xs font-black tracking-wider text-slate-500 uppercase">
                      {active.company || active.logoText || "ENTERPRISE"}
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* ⚡ 4. PREMIUM NAVIGATION TIMELINE TRACK CONTROLS */}
          <div className="mt-10 flex items-center justify-center gap-4">
            
            {/* Prev Trigger */}
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/60 border border-white/[0.06] text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 shadow-inner"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            {/* Auto Slider Dotted Status Tracker Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index 
                      ? 'w-7 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.4)]' 
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            {/* Next Trigger */}
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/60 border border-white/[0.06] text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 shadow-inner"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}