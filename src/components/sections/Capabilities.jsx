import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiLayout, FiTrendingUp, FiGrid } from 'react-icons/fi'
import Container from '../ui/Container'

const capabilities = [
  {
    n: '01',
    icon: FiLayout,
    title: 'Cinematic Landing Pages',
    promise: 'Scroll-stopping first impressions.',
    detail:
      'We choreograph the scroll, direct attention with motion, and build every section to sell. Your first fold earns the rest of the visit.',
  },
  {
    n: '02',
    icon: FiTrendingUp,
    title: 'Conversion Websites',
    promise: 'Pipeline-grade marketing sites.',
    detail:
      'SEO-aware architecture, clean copy hierarchy, and UX wired for action. Built to rank, load fast, and convert qualified leads.',
  },
  {
    n: '03',
    icon: FiGrid,
    title: 'Web App Interfaces',
    promise: 'Dashboards users actually trust.',
    detail:
      'High-trust SaaS flows with polished UI, real-time data, and a scalable component system your team can extend long-term.',
  },
]

export default function Capabilities() {
  const [open, setOpen] = useState(null)

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <span className="eyebrow mb-5">Capabilities</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[color:var(--ink)] leading-[1.1] mt-4">
            What we build.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((c, i) => {
            const isOpen = open === i
            const Icon = c.icon
            return (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card card-hover h-full px-7 py-8 sm:px-8 sm:py-9 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="icon-tile w-12 h-12"><Icon size={22} /></div>
                  <span className="font-display text-sm font-bold text-[color:var(--ink)]/15">{c.n}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[color:var(--ink)] mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6">
                  {c.promise}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--emerald)] hover:gap-3 transition-all"
                  aria-expanded={isOpen}
                >
                  {isOpen ? 'Hide details' : 'Learn more'}
                  <FiPlus className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed pt-1">
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
