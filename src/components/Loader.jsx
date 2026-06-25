import { motion, AnimatePresence } from 'framer-motion'
import Logo from './ui/Logo'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--canvas)] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo variant="full" className="h-32 sm:h-40 w-auto" />
            </motion.div>
            <div className="h-1 w-40 rounded-full bg-[color:var(--line)] overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full origin-left rounded-full bg-[linear-gradient(90deg,var(--emerald),var(--mint))]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
