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
          className="fixed inset-0 z-[90] flex items-start sm:items-center justify-center p-0 sm:p-6 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-0 sm:my-8 bg-white dark:bg-[#0a0a18] border border-slate-200/80 dark:border-white/5 sm:rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 dark:bg-white/10 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-white/20 border border-slate-200/60 dark:border-white/10 transition-colors"
            >
              <FiX size={18} />
            </button>

            {/* Hero */}
            <div className="relative px-7 sm:px-10 pt-12 pb-8 bg-gradient-to-br from-brand-500/10 via-transparent to-accent/10 dark:from-brand-500/15 dark:to-accent/15 border-b border-slate-200/60 dark:border-white/5">
              <div className="absolute inset-0 opacity-40 dark:opacity-30 bg-grid pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center text-white shadow-lg shadow-brand-500/30 mb-5">
                  <service.icon size={24} />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  {service.tagline}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="px-7 sm:px-10 py-10 space-y-12">
              {/* Overview */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-[17px]">
                {service.overview}
              </p>

              {/* What's included */}
              <section>
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                  What's Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.included.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="group flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-colors"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-300 group-hover:scale-110 transition-transform">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                  Our Process
                </h3>
                <ol className="space-y-4">
                  {service.process.map((p, i) => (
                    <li key={p.step} className="flex gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-accent text-white text-sm font-semibold flex items-center justify-center shadow-md shadow-brand-500/20">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-0.5">
                          {p.step}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {p.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Quick wins */}
              <section>
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                  Highlights
                </h3>
                <ul className="grid sm:grid-cols-3 gap-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5"
                    >
                      <FiCheck className="text-brand-500 shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Stack */}
              <section>
                <h3 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                  Tools & Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200/60 dark:border-white/5">
                <Button href="#contact" variant="gradient" onClick={onClose}>
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
