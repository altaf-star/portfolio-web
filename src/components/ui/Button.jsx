import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-white text-[#0a0410] hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]',
  glow:
    'text-white font-semibold bg-[linear-gradient(135deg,var(--teal)_0%,var(--signature)_100%)] shadow-[0_0_0_1px_rgba(var(--signature-glow),0.35),0_10px_40px_-8px_rgba(var(--signature-glow),0.55),0_0_80px_-10px_rgba(var(--teal-glow),0.45)] hover:shadow-[0_0_0_1px_rgba(var(--signature-glow),0.5),0_15px_50px_-8px_rgba(var(--signature-glow),0.7),0_0_100px_-10px_rgba(var(--teal-glow),0.6)]',
  teal:
    'text-white font-semibold bg-[color:var(--teal)] hover:bg-[color:var(--teal-deep)] shadow-[0_10px_30px_-10px_rgba(var(--teal-glow),0.6)]',
  outline:
    'border border-white/15 text-white hover:bg-white/5 hover:border-white/30',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/5',
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
