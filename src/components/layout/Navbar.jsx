import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../data/navData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeLink, setActiveLink] = useState(""); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const target = document.querySelector(link.href);
        if (target) {
          const top = target.offsetTop;
          const height = target.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(link.href);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
      <div className="px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`mx-auto mt-4 max-w-[1440px] rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "glass-strong border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-slate-950/70"
              : "bg-transparent border border-transparent"
          }`}
        >
          <nav className="flex items-center justify-between px-6 sm:px-8 py-4 min-h-[90px]">
            
            {/* BRAND IDENTITY */}
            <div className="flex-[1.5] flex justify-start pl-1">
              <motion.a
                href="#home"
                onClick={() => setActiveLink("#home")}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative flex items-center gap-2 group cursor-pointer select-none overflow-visible"
              >
                <div className="absolute -inset-5 bg-gradient-to-r from-cyan-500/10 via-blue-600/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative h-[74px] w-[74px] flex items-center justify-center flex-shrink-0 overflow-visible">
                  <img 
                    src="src/assets/images/logo98.png" 
                    alt="TCONGS Logo" 
                    className="h-full w-auto object-contain filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
                  />
                </div>

                <div className="flex flex-col text-left justify-center pl-1.5">
                  <span className="text-[30px] font-black tracking-[0.04em] text-blue-500 leading-none transition-colors duration-300 group-hover:text-cyan-400 font-sans">
                    TCONGS
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.41em] text-[#f97316] font-black mt-2 leading-none">
                    INFOTECH
                  </span>
                </div>
              </motion.a>
            </div>

            {/* CENTER MENU LINKS: Micro glow softened for extreme elegance */}
            <div className="hidden items-center gap-1 lg:flex justify-center flex-[2]">
              {navLinks.map((item, index) => {
                const isActive = activeLink === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveLink(item.href)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative rounded-xl px-4 py-2.5 text-[16px] font-bold tracking-wide transition-colors duration-300 group whitespace-nowrap outline-none select-none
                      ${isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Hover Layer */}
                    {hoveredIndex === index && (
                      <motion.span
                        layoutId="navHoverBg"
                        className="absolute inset-0 z-0 rounded-xl bg-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] border border-white/[0.03]"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}

                    {/* Active Soft Micro Glow Layer (Soften from 0.04 -> 0.02 and reduced shadow) */}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveGlow"
                        className="absolute inset-0 z-0 rounded-xl bg-cyan-500/[0.02] border border-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.08)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Underline Indicator */}
                    <span 
                      className={`absolute bottom-1 left-4 right-4 h-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-500 origin-left transition-transform duration-300 
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} 
                    />
                  </a>
                );
              })}
            </div>

            {/* RIGHT ACTION BUTTON */}
            <div className="hidden lg:flex items-center justify-end flex-[1.5] pr-1">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_0.85s_ease-in-out]" />
                <span className="relative z-10">Let's Talk</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </motion.a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 text-white lg:hidden z-50 relative transition-colors duration-300 hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-white/10 lg:hidden bg-slate-950/95 backdrop-blur-2xl rounded-b-2xl"
              >
                <div className="flex flex-col gap-2 px-8 py-6">
                  {navLinks.map((item) => {
                    const isActive = activeLink === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveLink(item.href);
                        }}
                        className={`rounded-xl px-5 py-4 text-[16px] font-bold tracking-wide transition-all duration-300 hover:bg-white/5
                          ${isActive ? "text-cyan-400 bg-cyan-500/[0.02]" : "text-slate-300 hover:text-white"}`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                  
                  <div className="mt-2 border-t border-white/5 pt-4">
                    <a 
                      href="#contact" 
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveLink("#contact");
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-4 text-[15px] font-bold text-white shadow-lg shadow-orange-500/20 hover:from-amber-400 hover:to-orange-500 transition-all duration-300"
                    >
                      <span>Let's Talk</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;