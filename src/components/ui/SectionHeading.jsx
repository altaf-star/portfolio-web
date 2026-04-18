import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-10 sm:mb-14 max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase text-brand-700 dark:text-brand-300 bg-brand-500/10 border border-brand-500/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.15]">
        {title}
      </h2>
      <div
        className={`w-12 h-[3px] rounded-full bg-gradient-to-r from-brand-500 to-accent mb-5 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-[15px] sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
