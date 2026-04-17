import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#070218]"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-brand-500/15 border-t-brand-500"
              />
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-2 border-accent/15 border-b-accent"
              />
              <motion.img
                src="/logo.png"
                alt="AA Dev Studio"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-10 h-10 object-contain drop-shadow-[0_2px_10px_rgba(99,102,241,0.45)]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400"
            >
              AA Dev Studio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
