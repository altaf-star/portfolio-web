import { motion } from 'framer-motion'
import { FiArrowRight, FiPlayCircle, FiStar } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-32 pb-24 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Flowing light streak (logo signature curve) */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        className="absolute -top-20 left-0 right-0 h-[340px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(34,211,238,0.18), transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
        className="absolute -bottom-20 left-0 right-0 h-[340px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(168,85,247,0.22), transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating orbs (kept far enough from text) */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-7"
          >
            <span className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={11} className="fill-current" />
              ))}
            </span>
            <span>Trusted by 50+ businesses worldwide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
          >
            We build modern websites that{' '}
            <span className="gradient-text">grow your business</span>.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            From sleek landing pages to scalable web applications — we design and
            engineer digital experiences that turn visitors into customers.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <Button href="#work" variant="gradient" size="lg">
              View Work
              <FiArrowRight />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              <FiPlayCircle />
              Contact Us
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 w-full max-w-2xl"
          >
            {[
              { value: '50+', label: 'Projects Shipped' },
              { value: '20+', label: 'Happy Clients' },
              { value: '5★', label: 'Avg. Rating' },
              { value: '24/7', label: 'Support' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
