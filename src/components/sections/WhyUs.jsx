import { motion } from 'framer-motion'
import { FiZap, FiSmartphone, FiTrendingUp, FiDollarSign } from 'react-icons/fi'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import TiltCard from '../ui/TiltCard'

const reasons = [
  {
    icon: FiZap,
    title: 'Fast Delivery',
    desc: 'Most projects ship in 2–4 weeks. Clear milestones, weekly demos, no surprises.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    desc: 'Pixel-perfect on every screen — phone, tablet, desktop, and beyond.',
    color: 'from-sky-400 to-cyan-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Scalable Solutions',
    desc: 'Built on modern stacks that grow with your traffic and team — no rebuilds.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: FiDollarSign,
    title: 'Affordable Pricing',
    desc: 'Premium quality without the agency markup. Transparent fixed quotes.',
    color: 'from-violet-400 to-purple-500',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for businesses that mean business"
          subtitle="We combine the speed of a freelancer with the polish of a top-tier agency."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <TiltCard max={6} scale={1.03} className="h-full rounded-3xl">
                  <div className="group relative h-full bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 rounded-3xl p-6 sm:p-7 lg:p-8 overflow-hidden">
                    <div
                      className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                    />

                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-2" style={{ transform: 'translateZ(20px)' }}>
                      {r.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
