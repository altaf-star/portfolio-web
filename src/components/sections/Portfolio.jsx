import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiPlus } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Portfolio() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="work"
      style={{ paddingTop: '2.4rem', paddingBottom: '2.4rem' }}
      className="relative"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '0.5rem' }}
          className="max-w-3xl"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[color:var(--teal-soft)] font-semibold mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Projects we&rsquo;re proud of.
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[color:var(--teal)]/10 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-40 w-[380px] h-[380px] rounded-full bg-[color:var(--signature)]/12 blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-slate-400 font-medium mb-4">
              Featured Build
            </p>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-5 max-w-3xl">
              Mahi School Platform
            </h3>
            <p className="text-[15px] sm:text-lg text-slate-300/85 leading-relaxed max-w-2xl mb-8">
              Enrollment, reporting, and role-based access — in one calm interface.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button
                href="https://mahischool.org"
                target="_blank"
                rel="noopener noreferrer"
                variant="glow"
                size="lg"
              >
                Open Live Project <FiExternalLink size={16} />
              </Button>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--signature-soft)] hover:text-white transition-colors px-3 py-2"
                aria-expanded={open}
              >
                {open ? 'Hide details' : 'Project details'}
                <FiPlus className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 gap-6 pt-2 max-w-3xl">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {['React', 'Express', 'MongoDB', 'Tailwind'].map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Outcome</h4>
                      <p className="text-sm text-slate-300/80 leading-relaxed">
                        Unified three disconnected tools into one platform. Cut admin time in half.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.article>
      </Container>
    </section>
  )
}
