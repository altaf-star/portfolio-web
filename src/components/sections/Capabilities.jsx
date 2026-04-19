import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import Container from '../ui/Container'

const capabilities = [
  {
    n: '01',
    title: 'Cinematic Landing Pages',
    promise: 'Scroll-stopping first impressions.',
    detail:
      'We choreograph the scroll, direct attention with motion, and build every section to sell. Your first fold earns the rest of the visit.',
  },
  {
    n: '02',
    title: 'Conversion Websites',
    promise: 'Pipeline-grade marketing sites.',
    detail:
      'SEO-aware architecture, clean copy hierarchy, and UX wired for action. Built to rank, load fast, and convert qualified leads.',
  },
  {
    n: '03',
    title: 'Web App Interfaces',
    promise: 'Dashboards users actually trust.',
    detail:
      'High-trust SaaS flows with polished UI, real-time data, and a scalable component system your team can extend long-term.',
  },
]

export default function Capabilities() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="experience"
      style={{ paddingTop: '2.4rem', paddingBottom: '2.4rem' }}
      className="relative"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[color:var(--teal-soft)] font-semibold mb-4">
            Capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            What we build.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((c, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="h-full rounded-xl border border-white/10 bg-white/[0.02] hover:border-[color:var(--signature)]/25 hover:bg-white/[0.035] px-8 py-9 sm:px-10 sm:py-11 transition-colors"
              >
                <p className="text-xs tracking-widest text-[color:var(--teal-soft)] font-mono mb-5">
                  {c.n}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-300/80 leading-relaxed mb-6">
                  {c.promise}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--signature-soft)] hover:text-white transition-colors"
                  aria-expanded={isOpen}
                >
                  {isOpen ? 'Hide details' : 'Learn more'}
                  <FiPlus
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-slate-300/80 leading-relaxed pt-1">
                        {c.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
