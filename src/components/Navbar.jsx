import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/site'
import Button from './ui/Button'
import Logo3D from './ui/Logo3D'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/70 dark:bg-[#070218]/75 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 group shrink-0"
          aria-label="AA Dev Studio — Home"
        >
          <Logo3D className="h-11 sm:h-12 md:h-14 w-auto drop-shadow-[0_2px_12px_rgba(99,102,241,0.45)]" />
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="#contact" variant="glow" size="sm">
              Book Intro Call
            </Button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#070218]/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-white/5"
          >
            <div className="px-5 sm:px-8 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-200/60 dark:border-white/5">
                <Button href="#contact" variant="glow" size="sm" className="w-full" onClick={() => setOpen(false)}>
                  Book Intro Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
