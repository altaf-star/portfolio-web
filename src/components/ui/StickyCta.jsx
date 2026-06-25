import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 group"
          aria-label="Start your project"
        >
          <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,var(--emerald),var(--mint))] blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--emerald)_0%,var(--emerald-bright)_100%)] text-white font-semibold px-5 py-3 text-sm shadow-[0_14px_40px_-8px_rgba(var(--emerald-glow),0.7)] border border-white/25">
            Start Your Project
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">
              <FiArrowRight size={12} />
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
