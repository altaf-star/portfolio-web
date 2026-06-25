import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiPlus } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Portfolio() {
  const [open, setOpen] = useState(false)

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <span className="eyebrow mb-5">Featured Work</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[color:var(--ink)] leading-[1.1] mt-4">
            Projects we&rsquo;re proud of.
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="card overflow-hidden grid lg:grid-cols-2"
        >
          {/* Visual — real project screenshot in a browser frame */}
          <div className="relative bg-[color:var(--surface-2)] p-7 sm:p-10 flex items-center justify-center min-h-[300px] border-b lg:border-b-0 lg:border-r border-[color:var(--line)]">
            <a
              href="https://mahischool.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md rounded-2xl bg-white shadow-[0_30px_60px_-28px_rgba(18,42,44,0.4)] border border-[color:var(--line)] overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[color:var(--line)] bg-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--ink)]/12" />
                <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--ink)]/12" />
                <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--ink)]/12" />
                <span className="ml-3 h-4 flex-1 rounded-full bg-[color:var(--ink)]/[0.05] flex items-center px-3 text-[9px] text-[color:var(--ink-muted)]">mahischool.org</span>
              </div>
              <img
                src="/work-mahischool.jpg"
                alt="Mahi School platform — live project screenshot"
                className="w-full h-auto block"
                loading="lazy"
              />
            </a>
          </div>

          {/* Copy */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <p className="eyebrow mb-4">Featured Build</p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[color:var(--ink)] leading-tight mb-4">
              Mahi School Platform
            </h3>
            <p className="text-[15px] sm:text-lg text-[color:var(--ink-soft)] leading-relaxed mb-8">
              Enrollment, reporting, and role-based access — unified into one calm, fast interface.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Button href="https://mahischool.org" target="_blank" rel="noopener noreferrer" variant="primary">
                Open live project <FiExternalLink size={15} />
              </Button>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--emerald)] hover:gap-3 transition-all px-3 py-2"
                aria-expanded={open}
              >
                {open ? 'Hide details' : 'Project details'}
                <FiPlus className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-[color:var(--line)]">
                    <div>
                      <h4 className="text-sm font-semibold text-[color:var(--ink)] mb-2.5">Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {['React', 'Express', 'MongoDB', 'Tailwind'].map((t) => (
                          <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[color:var(--surface-2)] text-[color:var(--ink-soft)] border border-[color:var(--line)]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[color:var(--ink)] mb-2.5">Outcome</h4>
                      <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">
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
