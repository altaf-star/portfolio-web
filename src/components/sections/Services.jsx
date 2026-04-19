import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Container from '../ui/Container'
import ServiceModal from '../ui/ServiceModal'
import TiltCard from '../ui/TiltCard'
import { services } from '../../data/services'

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section
      id="services"
      style={{ paddingTop: '2.4rem', paddingBottom: '2.4rem' }}
      className="relative"
    >
      <Container>
        <div style={{ marginBottom: '0.5rem' }} className="max-w-3xl">
          <p className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[color:var(--teal-soft)] font-semibold mb-4">
            Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            How we help.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <TiltCard className="h-full rounded-xl">
                  <button
                    type="button"
                    onClick={() => setActive(service)}
                    className="group relative text-left w-full h-full bg-white/[0.02] border border-white/10 rounded-xl px-8 py-9 sm:px-8 sm:py-10 hover:bg-white/[0.04] hover:border-[color:var(--signature)]/30 transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--teal)]/40"
                  >
                    <div className="relative mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,var(--teal)_0%,var(--signature)_100%)] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-[0_10px_30px_-10px_rgba(var(--signature-glow),0.5)]">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300/75 leading-relaxed mb-6">
                      {service.tagline || service.desc}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--signature-soft)] group-hover:text-white group-hover:gap-2 transition-all">
                      Learn more <FiArrowUpRight />
                    </div>
                  </button>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </Container>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  )
}
