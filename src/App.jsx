import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Process from './components/sections/Process'
import Portfolio from './components/sections/Portfolio'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import AuthModal from './components/ui/AuthModal'

// A. Tumhara Favorite Floating Mesh Background Component
import AmbientGlow from './components/ui/AmbientGlow'

// B. Premium Dynamic Fluid Mouse Tracker Component
import CustomCursor from './components/CustomCursor/CustomCursor'

// ⚡ CONTINUOUS EXPERIENCE PIPELINE IMPORTS (Jo Nayi Files Banayi Hain)
import ContinuousScrollCanvas from './components/ui/ContinuousScrollCanvas'
import GlowDivider from './components/ui/GlowDivider'
import SectionReveal from './components/ui/SectionReveal'

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const openAuth = () => setIsAuthOpen(true)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-slate-100 selection:bg-amber-500/30 antialiased">
      
      {/* ⚡ CONTINUOUS ENGINE: Scroll-linked laser line aur global aura inject kiya */}
      <ContinuousScrollCanvas />

      {/* 1. Tumhara selected background framework line mesh setup yahan hai */}
      <AmbientGlow />

      {/* 2. Top-layer Dynamic Mouse Tracker (Bina background chhede sirf pointer trace karega) */}
      <CustomCursor />
      
      {/* 3. Main Content Interface Structure Layer */}
      <div className="relative z-10">
        <Navbar onStartProject={openAuth} />
        
        <main className="relative z-10 w-full">
          
          {/* 1. HERO SECTION (Starting anchor, seedhe render hoga) */}
          <Hero onStartProject={openAuth} />

          {/* Seamless Transition */}
          <GlowDivider />

          {/* 2. SERVICES SECTION */}
          <SectionReveal delay={0.1}>
            <Services />
          </SectionReveal>

          {/* Seamless Transition */}
          <GlowDivider />

          {/* 3. ABOUT SECTION */}
          <div id="about">
            <SectionReveal delay={0.1}>
              <About />
            </SectionReveal>
          </div>

          {/* Seamless Transition */}
          <GlowDivider />

          {/* 4. WHY CHOOSE US SECTION */}
          <SectionReveal delay={0.1}>
            <WhyChooseUs />
          </SectionReveal>

          {/* Seamless Transition */}
          <GlowDivider />

          {/* 5. PROCESS SECTION */}
          <div id="process">
            <SectionReveal delay={0.1}>
              <Process />
            </SectionReveal>
          </div>

          {/* Seamless Transition */}
          <GlowDivider />

          {/* 6. PORTFOLIO SECTION */}
          <SectionReveal delay={0.1}>
            <Portfolio />
          </SectionReveal>

          {/* Seamless Transition */}
          <GlowDivider />

          {/* 7. TESTIMONIALS SECTION */}
          <SectionReveal delay={0.1}>
            <Testimonials />
          </SectionReveal>

          {/* Seamless Transition */}
          <GlowDivider />

          {/* 8. CTA SECTION */}
          <SectionReveal delay={0.15}>
            <CTA onStartProject={openAuth} />
          </SectionReveal>
          
        </main>
        
        {/* Footers have an initial top shadow divider blend built-in */}
        <Footer onStartProject={openAuth} />
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  )
}