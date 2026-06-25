import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Container from '../ui/Container'
import ServiceModal from '../ui/ServiceModal'
import { services } from '../../data/services'

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[color:var(--surface-2)]">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <span className="eyebrow mb-5">Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[color:var(--ink)] leading-[1.1] mt-4">
            How we help.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setActive(service)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="card group text-left h-full px-7 py-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--mint)]/60 hover:border-[color:var(--mint)]/45 hover:shadow-[0_24px_60px_-28px_rgba(24,111,103,0.45)]"
              >
                <div className="icon-tile w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-[color:var(--ink)] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6">
                  {service.tagline || service.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[color:var(--emerald)] group-hover:gap-2.5 transition-all">
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
