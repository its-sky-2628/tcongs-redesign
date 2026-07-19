import { motion } from 'framer-motion'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import { whyChooseUs } from '../../data/statsData'

export default function WhyChooseUs() {
  return (
    <section className="section-y relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="Why Tcongs"
          title="A team built to be your long-term partner"
          description="Not just another vendor — a team invested in the outcome, from first sketch to sustained growth."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl card p-6 text-center flex flex-col items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 text-cyan-400">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
