import { motion, AnimatePresence } from 'framer-motion'
import BrandMark from './ui/BrandMark'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0410]"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-[color:var(--signature)]/15 border-t-[color:var(--signature)]"
              />
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-2 border-[color:var(--teal)]/15 border-b-[color:var(--teal)]"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-14 h-14 flex items-center justify-center"
              >
                <BrandMark className="w-full h-full drop-shadow-[0_2px_10px_rgba(199,36,101,0.45)]" />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-sm tracking-[0.3em] uppercase text-slate-400"
            >
              AA Dev Studio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
