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
          className="fixed inset-0 z-[90] flex items-start sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-0 sm:my-8 bg-[#0a0410] border border-white/10 sm:rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md text-slate-200 hover:bg-white/20 border border-white/10 transition-colors"
            >
              <FiX size={18} />
            </button>

            {/* Hero */}
            <div className="relative px-7 sm:px-10 pt-12 pb-8 border-b border-white/5">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 60% 60% at 12% 10%, rgba(20,164,179,0.18), transparent 60%), radial-gradient(ellipse 60% 60% at 88% 90%, rgba(199,36,101,0.22), transparent 60%)',
                }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-[linear-gradient(135deg,var(--teal)_0%,var(--signature)_100%)] flex items-center justify-center text-white shadow-[0_10px_30px_-10px_rgba(var(--signature-glow),0.5)] mb-5">
                  <service.icon size={24} />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                  {service.tagline}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="px-7 sm:px-10 py-10 space-y-12">
              {/* Overview */}
              <p className="text-slate-300 leading-relaxed text-base sm:text-[17px]">
                {service.overview}
              </p>

              {/* What's included */}
              <section>
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--teal-soft)] mb-5">
                  What's Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.included.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="group flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[color:var(--signature)]/30 transition-colors"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[color:var(--teal-soft)] group-hover:scale-110 transition-transform">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Process */}
              <section>
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--teal-soft)] mb-5">
                  Our Process
                </h3>
                <ol className="space-y-4">
                  {service.process.map((p, i) => (
                    <li key={p.step} className="flex gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-[linear-gradient(135deg,var(--teal)_0%,var(--signature)_100%)] text-white text-sm font-semibold flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(var(--signature-glow),0.4)]">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-white text-sm mb-0.5">
                          {p.step}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {p.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Quick wins */}
              <section>
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--teal-soft)] mb-5">
                  Highlights
                </h3>
                <ul className="grid sm:grid-cols-3 gap-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-300 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <FiCheck className="text-[color:var(--teal)] shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Stack */}
              <section>
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--teal-soft)] mb-5">
                  Tools & Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                <Button href="#contact" variant="glow" onClick={onClose}>
                  Start a project
                  <FiArrowUpRight />
                </Button>
                <Button onClick={onClose} variant="ghost">
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
