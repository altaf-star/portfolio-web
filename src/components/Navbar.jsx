import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/site'
import Button from './ui/Button'
import Logo from './ui/Logo'

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
        scrolled ? 'py-2.5 glass shadow-[0_8px_30px_-18px_rgba(23,42,48,0.25)]' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group shrink-0" aria-label="AA Dev Studio — Home">
          <Logo variant="mark" className="h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-[17px] sm:text-lg font-extrabold tracking-tight text-[color:var(--ink)] leading-none">
            AA Dev <span className="text-[color:var(--emerald)]">Studio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[color:var(--ink-soft)] hover:text-[color:var(--emerald)] transition-colors rounded-lg"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="#contact" variant="primary" size="sm">
              Book Intro Call
            </Button>
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
            className="md:hidden relative z-[60] w-11 h-11 rounded-full flex items-center justify-center text-[color:var(--ink)] hover:bg-[color:var(--ink)]/5 active:bg-[color:var(--ink)]/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out glass border-t border-[color:var(--line)] ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 sm:px-8 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setTimeout(() => setOpen(false), 250)}
              className="py-3 text-[15px] font-medium text-[color:var(--ink)] hover:text-[color:var(--emerald)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-[color:var(--line)]">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => setTimeout(() => setOpen(false), 250)}
            >
              Book Intro Call
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
