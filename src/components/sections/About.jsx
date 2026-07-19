import { motion } from 'framer-motion'
import { Globe2, Building2, Award } from 'lucide-react'

const facts = [
  { icon: Building2, label: 'Headquartered in Mumbai', value: 'Serving clients worldwide' },
  { icon: Globe2, label: 'Global reach', value: 'USA · Canada · Dubai & beyond' },
  { icon: Award, label: 'Track record', value: '8+ years of digital delivery' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#02040a] py-24 sm:py-32 border-t border-white/[0.03]">
      
      {/* 🌌 Cyber Dynamic Ambient Aura Engine */}
      <div aria-hidden className="pointer-events-none absolute -z-10 top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.03] blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -z-10 right-10 top-10 h-[400px] w-[400px] rounded-full bg-amber-500/[0.02] blur-[120px]" />

      <div className="container px-4 mx-auto max-w-7xl relative">
        
        {/* ⚡ THE VISUAL CONNECTOR BRIDGE */}
        <div className="hidden lg:block absolute left-[45%] top-1/3 right-[45%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-0 pointer-events-none" />
        <div className="hidden lg:block absolute left-[48%] top-1/3 w-[1px] h-32 bg-gradient-to-b from-cyan-500/20 to-transparent z-0 pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center relative z-10">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-bold block mb-3 bg-cyan-500/10 w-fit px-2.5 py-1 rounded-md border border-cyan-500/20">
              WHO WE ARE
            </span>
            
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] font-black leading-[1.1] text-white tracking-tight">
              Empowering global brands with{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">8+ years</span> of digital expertise
            </h2>
            
            <p className="mt-6 text-base text-slate-400 leading-relaxed max-w-xl">
              Tcongs Infotech turns complex challenges into seamless digital growth — combining
              custom web development, e-commerce marketplace optimization and Generative Engine
              Optimization (GEO) under one team you can actually reach.
            </p>
            
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xl opacity-80">
              We don&apos;t just ship projects — we focus on complete business outcomes, staying
              involved from strategy through launch and long after.
            </p>

            {/* Facts Subgrid */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4 relative">
              {facts.map((fact) => {
                const FactIcon = fact.icon
                return (
                  <div key={fact.label} className="group relative rounded-xl border border-white/[0.05] bg-[#050811]/60 p-4 transition-all duration-300 hover:border-amber-500/40 hover:bg-[#0b111e]/80 shadow-md">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.02] border border-white/[0.06] text-amber-500 transition-colors duration-300 group-hover:bg-amber-500/10">
                      <FactIcon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <p className="mt-3 text-xs font-bold text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors duration-300">{fact.value}</p>
                    <p className="mt-1 text-[10px] text-slate-500 font-medium">{fact.label}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Stats Box Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl border border-white/[0.06] bg-[#050811]/40 p-6 shadow-2xl backdrop-blur-xl group hover:border-white/[0.09] transition-all duration-500">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '220+', label: 'Projects delivered', borderStyle: 'hover:border-amber-500/30' },
                  { value: '15+', label: 'Countries served', borderStyle: 'hover:border-orange-500/30' },
                  { value: '98%', label: 'Client satisfaction', borderStyle: 'hover:border-rose-500/30' },
                  { value: '24/7', label: 'Support & monitoring', borderStyle: 'hover:border-cyan-500/30' },
                ].map((stat) => (
                  <motion.div 
                    key={stat.label} 
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`rounded-xl bg-[#080d1a]/50 border border-white/[0.04] p-5 transition-all duration-300 hover:bg-[#0b111e]/90 ${stat.borderStyle} hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]`}
                  >
                    <p className="font-display text-3xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-slate-400 tracking-wide leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[30px] bg-gradient-to-tr from-amber-500/5 via-transparent to-violet-500/5 blur-2xl opacity-80" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}