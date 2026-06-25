import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiMail, FiMessageCircle } from 'react-icons/fi'
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
    'w-full bg-[color:var(--surface-2)] border border-[color:var(--line)] rounded-xl px-4 py-3.5 text-[15px] text-[color:var(--ink)] placeholder-[color:var(--ink-muted)] outline-none transition-all duration-300 focus:border-[color:var(--mint)] focus:ring-4 focus:ring-[color:var(--mint)]/15 focus:bg-white'

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[color:var(--surface-2)]">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative card px-8 py-10 sm:px-10 sm:py-12 flex flex-col justify-center"
          >
            <span className="eyebrow mb-5">Start Your Build</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--ink)] leading-[1.1] mb-4">
              Let&rsquo;s build it.
            </h2>
            <p className="text-[15px] text-[color:var(--ink-soft)] leading-relaxed mb-10 max-w-md">
              Tell us about your project and we&rsquo;ll reply within a few hours — usually with first ideas attached.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-[color:var(--ink)] hover:text-[color:var(--emerald)] transition-colors group"
              >
                <span className="icon-tile w-10 h-10"><FiMail size={18} /></span>
                <span className="text-sm sm:text-base font-semibold break-all">{brand.email}</span>
              </a>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[color:var(--ink)] hover:text-[color:var(--emerald)] transition-colors group"
              >
                <span className="icon-tile w-10 h-10"><FiMessageCircle size={18} /></span>
                <span className="text-sm sm:text-base font-semibold">{brand.whatsapp}</span>
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
            className="card px-7 py-9 sm:px-9 sm:py-10 space-y-5"
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
              <label className="block text-sm font-semibold text-[color:var(--ink)] mb-2">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--ink)] mb-2">Work Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--ink)] mb-2">Project Brief</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us what you want to build, expected timeline, and key goals." className={`${inputClass} resize-none`} />
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <FiAlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <Button type="submit" variant="primary" size="lg" disabled={status === 'sending'} className="w-full">
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
