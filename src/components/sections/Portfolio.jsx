import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/projectsData'

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-[#02040a] py-20 sm:py-24 border-t border-white/[0.03]">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Products we've helped build and scale"
            description="A snapshot of recent engagements across e-commerce, SaaS, mobile and brand identity."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050811]/40 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:shadow-2xl"
            >
              <div className={`relative h-52 sm:h-64 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-lg">
                    <span className="font-display text-2xl font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/80">
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">{project.metric}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}