import { useState } from 'react'
import { motion } from 'framer-motion'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/servicesData'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section id="services" className="relative bg-[#02040a] py-20 sm:py-24 border-t border-white/[0.04]">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Digital solutions & development services"
          description="Scalable solutions for modern businesses — from first line of code to full-scale growth."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const isActive = activeCard === i

            return (
              <div key={service.id} className="relative group">
                
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -inset-px rounded-2xl transition-all duration-500 blur-2xl opacity-0
                    ${isActive 
                      ? "opacity-100 bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-600/30" 
                      : "group-hover:opacity-100 bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent"
                    }`}
                />

                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  onClick={() => setActiveCard(i)}
                  className={`relative h-full rounded-2xl p-7 cursor-pointer select-none transition-all duration-500 border z-10
                    ${isActive
                      ? "border-amber-500 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.25)]"
                      : "border-white/[0.06] bg-[#050811]/60 backdrop-blur-md hover:border-amber-400/60 hover:bg-slate-900/50 hover:backdrop-blur-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.12)]"
                    }`}
                >
                  <div 
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100
                      ${isActive ? "via-amber-400/40 opacity-100" : ""}`} 
                  />

                  <span className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 block
                    ${isActive ? "text-amber-400 font-bold" : "text-cyan-400/80 group-hover:text-amber-400/90"}`}
                  >
                    {service.tag}
                  </span>

                  <div className="mt-5 flex items-center justify-between">
                    <motion.div 
                      animate={isActive ? { rotate: 12, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      whileHover={!isActive ? { rotate: 12, scale: 1.1 } : undefined}
                      transition={{ type: "spring", stiffness: 300, damping: 13 }}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 border
                        ${isActive 
                          ? "bg-amber-500/20 border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)]" 
                          : "bg-[#0b1224] border-white/[0.06] text-cyan-400 group-hover:border-amber-400/40 group-hover:text-amber-400 group-hover:bg-[#02040a]"
                        }`}
                    >
                      <Icon name={service.icon} className="h-5 w-5" />
                    </motion.div>

                    <div className="overflow-hidden p-0.5">
                      <Icon 
                        name="arrow-up-right" 
                        className={`h-3.5 w-3.5 transition-all duration-300 transform 
                          ${isActive 
                            ? "text-amber-400 opacity-100 translate-x-0" 
                            : "text-slate-600 opacity-30 group-hover:opacity-80 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          }`} 
                      />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  <ul className={`mt-5 space-y-2 border-t pt-4 transition-colors duration-300
                    ${isActive ? "border-amber-500/20" : "border-white/[0.06] group-hover:border-white/[0.1]"}`}
                  >
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">
                        <span className={`h-1 w-1 rounded-full transition-colors duration-300
                          ${isActive ? "bg-amber-400" : "bg-cyan-400 group-hover:bg-amber-400"}`} 
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}