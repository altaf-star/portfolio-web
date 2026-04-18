import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-[0_10px_40px_-10px_rgba(15,23,42,0.5)] dark:hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]',
  gradient:
    'bg-gradient-to-r from-blue-600 via-brand-600 to-violet-600 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.7)]',
  glow:
    'bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 text-slate-900 font-semibold shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_40px_-8px_rgba(56,189,248,0.7),0_0_80px_-10px_rgba(34,211,238,0.55)] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_15px_50px_-8px_rgba(56,189,248,0.85),0_0_100px_-10px_rgba(34,211,238,0.7)]',
  outline:
    'border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 hover:border-slate-400 dark:hover:border-white/30',
  ghost:
    'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`

  const Component = href ? motion.a : motion.button
  const linkProps = href ? { href } : {}

  return (
    <Component
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={base}
      {...linkProps}
      {...props}
    >
      {children}
    </Component>
  )
}
