import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

export default function Accordion({ items, className = '' }) {
  const [open, setOpen] = useState(null)

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.q || item.title}
            className={`card px-5 py-4 sm:px-6 sm:py-5 transition-colors ${isOpen ? 'border-[color:var(--mint)]/45' : ''}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-[color:var(--ink)]">
                {item.q || item.title}
              </span>
              <span
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isOpen
                    ? 'rotate-45 text-white border-transparent bg-[linear-gradient(135deg,var(--emerald),var(--mint))]'
                    : 'text-[color:var(--emerald)] border-[color:var(--line-strong)]'
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
                  <p className="text-sm sm:text-[15px] text-[color:var(--ink-soft)] leading-relaxed pt-4 pr-10">
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
