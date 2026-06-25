import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiArrowUpRight, FiCheck } from 'react-icons/fi'
import Button from './Button'

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [service, onClose])

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-start sm:items-center justify-center p-0 sm:p-6 bg-[color:var(--ink)]/40 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-0 sm:my-8 bg-[color:var(--surface)] border border-[color:var(--line)] sm:rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md text-[color:var(--ink)] hover:bg-white border border-[color:var(--line)] transition-colors"
            >
              <FiX size={18} />
            </button>

            {/* Hero */}
            <div className="relative px-7 sm:px-10 pt-12 pb-8 border-b border-[color:var(--line)] overflow-hidden">
              <div className="blob w-72 h-72 bg-[color:var(--mint)]/40 -top-24 -right-16" />
              <div className="relative">
                <div className="icon-tile w-14 h-14 mb-5">
                  <service.icon size={24} />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[color:var(--ink)] tracking-tight mb-3">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-[color:var(--ink-soft)] max-w-2xl">
                  {service.tagline}
                </p>
              </div>
            </div>

            <div className="px-7 sm:px-10 py-10 space-y-12">
              <p className="text-[color:var(--ink-soft)] leading-relaxed text-base sm:text-[17px]">
                {service.overview}
              </p>

              <section>
                <h3 className="eyebrow mb-5">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.included.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="group flex gap-4 p-5 rounded-2xl bg-[color:var(--surface-2)] border border-[color:var(--line)] hover:border-[color:var(--mint)]/45 transition-colors"
                      >
                        <div className="shrink-0 icon-tile w-10 h-10 group-hover:scale-110 transition-transform">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[color:var(--ink)] text-sm mb-1">{item.title}</h4>
                          <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              <section>
                <h3 className="eyebrow mb-5">Our Process</h3>
                <ol className="space-y-4">
                  {service.process.map((p, i) => (
                    <li key={p.step} className="flex gap-4">
                      <div className="shrink-0 icon-tile w-9 h-9 text-sm font-bold">{i + 1}</div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-[color:var(--ink)] text-sm mb-0.5">{p.step}</h4>
                        <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">{p.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h3 className="eyebrow mb-5">Highlights</h3>
                <ul className="grid sm:grid-cols-3 gap-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-[color:var(--ink-soft)] px-4 py-2.5 rounded-xl bg-[color:var(--surface-2)] border border-[color:var(--line)]"
                    >
                      <FiCheck className="text-[color:var(--emerald)] shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="eyebrow mb-5">Tools &amp; Tech</h3>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[color:var(--surface-2)] text-[color:var(--ink-soft)] border border-[color:var(--line)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[color:var(--line)]">
                <Button href="#contact" variant="primary" onClick={onClose}>
                  Start a project <FiArrowUpRight />
                </Button>
                <Button onClick={onClose} variant="ghost">Close</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
