import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

export default function Accordion({ items, className = '' }) {
  const [open, setOpen] = useState(null)

  return (
    <div className={`divide-y divide-white/10 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q || item.title} className="py-4">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-white">
                {item.q || item.title}
              </span>
              <span
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/15 text-white transition-transform duration-300 ${
                  isOpen ? 'rotate-45 bg-[color:var(--signature)]/20 border-[color:var(--signature)]/40' : ''
                }`}
              >
                <FiPlus />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-sm sm:text-[15px] text-slate-300/85 leading-relaxed pt-4 pr-12">
                    {item.a || item.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
