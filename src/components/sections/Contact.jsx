import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { brand } from '../../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', botcheck: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.botcheck) return
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '', botcheck: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error — please check your connection and try again.')
    }
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/10'

  return (
    <section id="contact" className="relative py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl border border-white/10 bg-white/[0.02] px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
            />
            <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-slate-400 font-medium mb-4">
              Start Your Build
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              Ready for a website that feels world-class?
            </h2>
            <p className="text-[15px] text-slate-400 leading-relaxed mb-8 max-w-md">
              Share your goals, timeline, and budget range. We usually reply within a few
              hours and map the best path forward.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${brand.email}`}
                className="block text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
              >
                {brand.email}
              </a>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors"
              >
                WhatsApp: {brand.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="relative rounded-xl border border-white/10 bg-white/[0.02] px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 space-y-5"
          >
            <input
              type="text"
              name="botcheck"
              value={form.botcheck}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Work Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="jane@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Project Brief</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us what you want to build, expected timeline, and key goals."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-2 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <FiAlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <Button type="submit" variant="glow" size="lg" disabled={status === 'sending'} className="w-full">
              {status === 'sending' && (<><FiLoader className="animate-spin" /> Sending...</>)}
              {status === 'sent' && (<><FiCheckCircle /> Project Brief Sent!</>)}
              {(status === 'idle' || status === 'error') && (<>Send Project Brief <FiSend size={14} /></>)}
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}
