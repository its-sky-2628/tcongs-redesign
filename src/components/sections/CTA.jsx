import { motion } from 'framer-motion'
import { Mail, Calendar } from 'lucide-react'
import Button from '../ui/Button'

const particles = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 15,
  delay: Math.random() * -20,
}))

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#02040a] py-24 sm:py-32 overflow-hidden border-t border-white/[0.03]">
      
      <div aria-hidden className="absolute inset-0 bg-[#02040a] pointer-events-none z-0" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-[#050811]/40 backdrop-blur-2xl px-6 py-16 sm:px-16 sm:py-24 text-center shadow-[0_35px_70px_rgba(0,0,0,0.7)]"
        >
          
          {/* Conic Aurora Engine */}
          <div className="absolute inset-0 -z-20 overflow-hidden opacity-40 select-none pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] origin-center bg-[conic-gradient(from_0deg,rgba(245,158,11,0.12),rgba(239,68,68,0.06),rgba(99,102,241,0.15),rgba(6,182,212,0.12),rgba(245,158,11,0.12))]"
            />
          </div>

          {/* Floating Particles System */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-30">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                animate={{
                  y: ['0%', '-30%', '0%'],
                  x: ['0%', '15%', '0%'],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                className="rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 blur-[0.5px] shadow-[0_0_8px_#22d3ee]"
              />
            ))}
          </div>

          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          <div aria-hidden className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.07] blur-[120px] pointer-events-none animate-pulse" />
          <div aria-hidden className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-amber-500/[0.05] blur-[120px] pointer-events-none animate-pulse" />

          {/* Content Layout */}
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold px-3 py-1 bg-amber-500/10 border border-amber-500/20 w-fit rounded-full mx-auto block mb-4 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            LET'S BUILD SOMETHING
          </span>
          
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] font-black leading-[1.08] text-white max-w-3xl mx-auto tracking-tight">
            Build. Scale. Grow your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(34,211,238,0.2)]">
              digital business.
            </span>
          </h2>
          
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Share your goals and we&apos;ll come back with a clear
            proposal, pricing and timeline within one business day.
          </p>

          {/* Action Trigger Buttons Container */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto relative z-20">
            
            <Button 
              as="a" 
              href="https://calendly.com/tcongsinfotech/30min"
              variant="primary"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] active:scale-[0.98]"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule Meeting</span>
            </Button>

            <Button 
              as="a" 
              href="mailto:info@tcongsinfotech.com" 
              variant="secondary" 
              icon={false}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 font-semibold text-sm border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] transition-all duration-300 active:scale-[0.98]"
            >
              <Mail className="h-4 w-4 text-slate-400 group-hover:text-white" />
              <span className="text-slate-300 group-hover:text-white">info@tcongsinfotech.com</span>
            </Button>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}