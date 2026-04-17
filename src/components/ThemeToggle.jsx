import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FiSun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FiMoon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
