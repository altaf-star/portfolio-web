import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ServiceModal from '../ui/ServiceModal'
import { services } from '../../data/services'

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Services built to scale your business"
          subtitle="A complete digital partner — from first sketch to long-term support."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.button
                type="button"
                onClick={() => setActive(service)}
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative text-left bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent/10 dark:from-brand-500/20 dark:to-accent/20 flex items-center justify-center text-brand-600 dark:text-brand-300 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {service.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-300 opacity-70 group-hover:opacity-100 group-hover:gap-2 transition-all">
                  Learn more <FiArrowUpRight />
                </div>
              </motion.button>
            )
          })}
        </div>
      </Container>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  )
}
