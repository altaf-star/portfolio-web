import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'

const HeroOrb3D = lazy(() => import('../ui/HeroOrb3D'))

const scenes = [
  {
    id: 1,
    label: 'Scene 01',
    title: 'Presence that stops the scroll.',
    desc: 'Your first fold should feel intentional and premium. We design instant clarity with cinematic focus so users understand your value in seconds.',
  },
  {
    id: 2,
    label: 'Scene 02',
    title: 'Motion that feels inevitable.',
    desc: 'Animations earn their place. Every transition guides the eye, reinforces hierarchy, and makes the product feel alive without getting in the way.',
  },
  {
    id: 3,
    label: 'Scene 03',
    title: 'Proof and performance in one frame.',
    desc: 'Beautiful interfaces only matter when they perform. We pair premium design with fast rendering, SEO structure, and conversion intent.',
  },
  {
    id: 4,
    label: 'Scene 04',
    title: 'A clear path from wow to action.',
    desc: 'At peak attention, we deliver one decisive CTA. Visitors know what to do next and how quickly your team can move.',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % scenes.length), 5200)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden"
    >
      {/* Background — deep black with cosmic corners */}
      <div className="absolute inset-0 bg-[#050016] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 10% 10%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(ellipse 70% 50% at 90% 90%, rgba(168,85,247,0.22), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
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
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] tracking-widest uppercase text-slate-200 font-medium">Live Preview</span>
            </div>
          </motion.div>

          {/* Right — scene carousel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 min-h-[280px] sm:min-h-[320px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scenes[active].id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-slate-400 font-medium mb-3">
                    {scenes[active].label}
                  </p>
                  <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] font-bold text-white mb-4">
                    {scenes[active].title}
                  </h1>
                  <p className="text-[15px] sm:text-base text-slate-300/90 leading-relaxed max-w-xl">
                    {scenes[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex items-center gap-2 mt-7">
                {scenes.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    aria-label={`Go to ${s.label}`}
                    className="group relative h-2.5"
                  >
                    <span
                      className={`block h-2.5 rounded-full transition-all duration-500 ${
                        i === active
                          ? 'w-7 bg-gradient-to-r from-cyan-300 to-sky-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]'
                          : 'w-2.5 bg-white/20 group-hover:bg-white/40'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <Button href="#contact" variant="glow" size="lg">
                Start Your Project <FiArrowRight />
              </Button>
              <Button href="#work" variant="outline" size="lg" className="text-white border-white/15 hover:bg-white/5 hover:border-white/30">
                <FiPlayCircle /> See Our Work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5"
        >
          {[
            { v: '50+', l: 'Projects shipped' },
            { v: '247%', l: 'Avg. conversion lift' },
            { v: '2-4 weeks', l: 'Typical launch timeline' },
            { v: '24/7', l: 'Support for critical products' },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-6 sm:px-7 sm:py-7 hover:border-cyan-300/30 hover:bg-white/[0.04] transition-colors"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
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
