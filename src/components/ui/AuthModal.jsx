import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Lock, Mail, User, Building, ArrowRight, ArrowLeft } from 'lucide-react'

export default function AuthModal({ isOpen, onClose }) {
  // State to toggle between Registration and Login (Default is Registration/False)
  const [isLogin, setIsLogin] = useState(false)

  // Reset screen view when modal closes entirely
  const handleClose = () => {
    onClose()
    setTimeout(() => setIsLogin(false), 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          
          {/* 🌌 Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* 💳 Dynamic Interface Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/80 p-8 shadow-[0_0_50px_rgba(245,158,11,0.22)] backdrop-blur-xl z-50 transition-all duration-300"
          >
            {/* Ambient Gold Glow backdrop */}
            <div className="absolute -right-10 -top-10 -z-10 h-32 w-32 rounded-full bg-amber-500/15 blur-2xl" />

            {/* Top Close Control */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* 🔄 AnimatePresence for internal interface transitions */}
            <AnimatePresence mode="wait">
              {!isLogin ? (
                
                /* ==========================================
                   📝 REGISTRATION SCREEN FOR NEW CUSTOMERS
                   ========================================== */
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Create Your Account</h3>
                    <p className="mt-1.5 text-sm text-slate-400">Register as a new customer to launch your project.</p>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input type="text" required placeholder="John Doe" className="w-full rounded-xl border border-white/[0.08] bg-slate-950/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-amber-500/50 focus:bg-slate-950/80" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company Name <span className="text-slate-500 font-normal">(Optional)</span></label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input type="text" placeholder="Your Company LLC" className="w-full rounded-xl border border-white/[0.08] bg-slate-950/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-amber-500/50 focus:bg-slate-950/80" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input type="email" required placeholder="name@company.com" className="w-full rounded-xl border border-white/[0.08] bg-slate-950/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-amber-500/50 focus:bg-slate-950/80" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Create Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input type="password" required placeholder="••••••••" className="w-full rounded-xl border border-white/[0.08] bg-slate-950/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-amber-500/50 focus:bg-slate-950/80" />
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-slate-400 cursor-pointer mt-2 select-none">
                      <input type="checkbox" required className="mt-0.5 rounded accent-amber-500" />
                      <span>I agree to the <a href="#" className="text-amber-400 hover:underline">Terms</a> and <a href="#" className="text-amber-400 hover:underline">Privacy Policy</a>.</span>
                    </label>

                    <button type="submit" className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 py-3 font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition-transform active:scale-[0.98]">
                      Create Account <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </form>

                  {/* 👉 Switches layout view to Login interface */}
                  <p className="mt-6 text-center text-xs text-slate-400">
                    Already have a customer account?{' '}
                    <button onClick={() => setIsLogin(true)} className="font-semibold text-amber-400 hover:underline focus:outline-none ml-1">
                      Sign In
                    </button>
                  </p>
                </motion.div>

              ) : (

                /* ==========================================
                   🔐 LOGIN SCREEN FOR EXISTING CUSTOMERS
                   ========================================== */
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h3>
                    <p className="mt-1.5 text-sm text-slate-400">Sign in to manage your pipeline dashboard.</p>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input type="email" required placeholder="name@company.com" className="w-full rounded-xl border border-white/[0.08] bg-slate-950/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-amber-500/50 focus:bg-slate-950/80" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Password</label>
                        <a href="#" className="text-xs text-amber-400/90 hover:underline">Forgot?</a>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input type="password" required placeholder="••••••••" className="w-full rounded-xl border border-white/[0.08] bg-slate-950/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-amber-500/50 focus:bg-slate-950/80" />
                      </div>
                    </div>

                    <div className="flex items-center text-xs mt-2">
                      <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
                        <input type="checkbox" className="rounded accent-amber-500" /> Remember this session
                      </label>
                    </div>

                    <button type="submit" className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 py-3 font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition-transform active:scale-[0.98]">
                      Sign In Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </form>

                  {/* 👉 Back tracker button to go to registration form */}
                  <div className="mt-8 flex justify-center">
                    <button 
                      onClick={() => setIsLogin(false)} 
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors focus:outline-none"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> New user? Create an account
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}