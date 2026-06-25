import { motion } from 'framer-motion'

const variants = {
  // emerald → mint gradient primary call-to-action
  primary:
    'text-white bg-[linear-gradient(120deg,var(--emerald),var(--emerald-bright))] hover:brightness-[1.06] shadow-[0_16px_40px_-12px_rgba(var(--emerald-glow),0.65)] hover:shadow-[0_20px_50px_-12px_rgba(var(--emerald-glow),0.8)]',
  glow:
    'text-white bg-[linear-gradient(120deg,var(--emerald),var(--emerald-bright))] hover:brightness-[1.06] shadow-[0_16px_40px_-12px_rgba(var(--emerald-glow),0.65)] hover:shadow-[0_20px_50px_-12px_rgba(var(--emerald-glow),0.8)]',
  // glassy white secondary
  white:
    'text-[color:var(--ink)] bg-white hover:bg-white shadow-[0_10px_30px_-12px_rgba(18,42,44,0.25)] hover:shadow-[0_16px_40px_-12px_rgba(18,42,44,0.3)] border border-[color:var(--line)]',
  ink:
    'text-white bg-[color:var(--ink)] hover:bg-[color:var(--emerald-deep)] shadow-[0_10px_30px_-14px_rgba(20,42,44,0.6)]',
  outline:
    'border border-[color:var(--line-strong)] text-[color:var(--ink)] hover:border-[color:var(--emerald)] hover:text-[color:var(--emerald)] bg-white/50',
  ghost:
    'text-[color:var(--ink-soft)] hover:text-[color:var(--emerald)] hover:bg-[color:var(--emerald)]/8',
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
