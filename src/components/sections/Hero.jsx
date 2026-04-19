import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'

const HeroOrb3D = lazy(() => import('../ui/HeroOrb3D'))

export default function Hero() {
  return (
    <section
      id="home"
      style={{ paddingTop: '4.8rem', paddingBottom: '2.4rem' }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0410] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 10% 10%, rgba(20,164,179,0.16), transparent 60%), radial-gradient(ellipse 70% 50% at 90% 90%, rgba(199,36,101,0.22), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          {/* Left — 3D preview panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
          >
            <Suspense fallback={null}>
              <HeroOrb3D className="opacity-95" />
            </Suspense>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--teal-soft)] animate-pulse" />
              <span className="text-[10px] tracking-widest uppercase text-slate-200 font-medium">Live Preview</span>
            </div>
          </motion.div>

          {/* Right — tight pitch */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[color:var(--teal-soft)] font-semibold mb-5">
              AA Dev Studio
            </p>
            <h1 className="font-display text-[2rem] sm:text-5xl md:text-6xl leading-[1.05] font-bold text-white mb-6">
              Websites that feel <span className="gradient-text">iconic</span>.
            </h1>
            <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed max-w-xl mb-9">
              Design, engineering, and motion — delivered by one tight team.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="glow" size="lg">
                Start Your Project <FiArrowRight />
              </Button>
              <Button href="#work" variant="outline" size="lg">
                <FiPlayCircle /> See Our Work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ marginTop: '6rem' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { v: '50+', l: 'Projects shipped' },
            { v: '247%', l: 'Avg. conversion lift' },
            { v: '2-4 weeks', l: 'Typical launch timeline' },
            { v: '24/7', l: 'Support for critical products' },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-7 sm:px-7 sm:py-8 hover:border-[color:var(--signature)]/40 hover:bg-white/[0.04] transition-colors"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--signature-soft)] mb-1">
                {s.v}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 leading-tight">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
