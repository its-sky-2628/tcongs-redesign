import { motion } from 'framer-motion'
import { Sparkles, Linkedin, MapPin, Mail, ArrowUpRight, Github, Twitter } from 'lucide-react'
import { navLinks } from '../../data/navData'
import { services } from '../../data/servicesData'

export default function Footer({ onStartProject }) {
  const year = new Date().getFullYear()

  // Extra social icons mix for a premium look
  const extraSocials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'Github' }
  ]

  return (
    <footer className="relative overflow-hidden bg-[#05060f] bg-noise pt-20 pb-10 z-10">
      
      {/* ================= BACKGROUND COSMIC ELEMENTS ================= */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.45]" />
        <div className="absolute left-[50%] -top-32 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#005ca9]/15 via-[#e61f5b]/8 to-transparent blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-[#f3a445]/12 via-transparent to-transparent blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto max-w-[1380px]">
        
        {/* ================= TOP PREMIUM CTA BLOCK ================= */}
        <div className="border border-white/[0.05] rounded-[24px] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-2xl bg-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-[-0.02em]">
              Ready to <span className="bg-gradient-to-r from-[#e61f5b] to-[#f3a445] bg-clip-text text-transparent font-black">Ship Your Project</span> Faster?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400/95">
              Strategy, design and engineering under one accountable team. Let's discuss how we can turn your digital vision into a performant reality.
            </p>
          </div>
          <motion.button
            onClick={onStartProject || (() => window.location.href = 'mailto:info@tcongsinfotech.com')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#e61f5b] to-[#f3a445] px-8 py-4 text-sm font-bold text-white transition-all z-10 flex-shrink-0 select-none cursor-pointer outline-none shadow-[0_4px_20px_rgba(230,31,91,0.2)] hover:shadow-[0_0_35px_rgba(243,164,69,0.4),0_0_15px_rgba(230,31,91,0.2)] duration-300"
          >
            <span className="absolute inset-0 w-full h-full block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shine_0.85s_ease-in-out]" />
            <Mail className="h-4 w-4 relative" />
            <span className="relative tracking-wide font-bold">Request a Consultation</span>
            <ArrowUpRight className="h-4 w-4 relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        {/* ================= MAIN NAVIGATION INTERFACE ================= */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] mb-16">
          
          {/* A. Brand Animated Logo & About */}
          <div className="text-left">
            <a href="#home" className="flex items-center gap-2.5 select-none group">
              {/* BRAND ANIMATED LOGO TRACER */}
              <div className="relative h-9 w-9 flex-shrink-0">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <motion.path
                    d="M10,10 L90,10 L90,90 L10,90 L10,10"
                    fill="none"
                    stroke="url(#footerLogoGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: [400, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    pathLength="100"
                    strokeDasharray="25 75"
                  />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#005ca9" />
                      <stop offset="50%" stopColor="#e61f5b" />
                      <stop offset="100%" stopColor="#f3a445" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-[3px] rounded-[6px] bg-[#05060f] flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <span className="font-display text-xl font-extrabold text-white tracking-[-0.03em]">
                Tcongs <span className="font-light text-slate-500">Infotech</span>
              </span>
            </a>
            
            <p className="mt-5 text-sm leading-relaxed text-slate-400/90 max-w-sm">
              Empowering global brands with 8+ years of expertise in custom web development,
              e-commerce marketplace optimization and Generative Engine Optimization (GEO).
            </p>

            {/* Premium Social Media Icons Grid */}
            <div className="mt-6 flex items-center gap-3">
              <motion.a
                href="https://in.linkedin.com/company/tcongs-infotech"
                target="_blank"
                rel="noreferrer"
                aria-label="Tcongs on LinkedIn"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/20 hover:bg-[#0c1226]"
              >
                <Linkedin className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-cyan-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              {extraSocials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/20 hover:bg-[#0c1226]"
                >
                  <social.icon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* B. Company Links */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Company</h4>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400/95 transition-all duration-200 hover:text-cyan-400 hover:translate-x-1 inline-flex items-center gap-1 group active:scale-95">
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-cyan-400 opacity-0 transition-all transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* C. Services Links */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Services</h4>
            <ul className="mt-6 space-y-3.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-slate-400/95 transition-all duration-200 hover:text-cyan-400 hover:translate-x-1 inline-flex items-center gap-1 group active:scale-95">
                    <span>{service.title}</span>
                    <ArrowUpRight className="h-3 w-3 text-cyan-400 opacity-0 transition-all transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* D. Contact / Touch Block */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Get in touch</h4>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="mailto:info@tcongsinfotech.com" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group">
                  <Mail className="h-4 w-4 text-cyan-400/85" />
                  <span className="border-b border-white/10 group-hover:border-cyan-400/40 transition-colors pb-0.5">info@tcongsinfotech.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400/90 leading-relaxed">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] mt-0.5 shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-[#f3a445]" />
                </div>
                <span>Mumbai, India — <br /><span className="text-xs font-medium text-slate-500 uppercase tracking-wider">serving clients worldwide</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= NEON GRADIENT LINE DIVIDER ================= */}
        <div className="relative h-px w-full overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute -left-[50%] h-[2px] w-[50%] bg-gradient-to-r from-transparent via-[#e61f5b] to-transparent blur-[1px]"
          />
        </div>

        {/* ================= BOTTOM BAR LOGIC ================= */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-slate-500 font-medium select-none">
          <p>© {year} Tcongs Infotech. All rights reserved.</p>
          
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Designed &amp; built for growth
          </div>
        </div>
      </div>
    </footer>
  )
}