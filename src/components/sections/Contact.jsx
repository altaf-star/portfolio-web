import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiMessageCircle, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { brand } from '../../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', botcheck: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.botcheck) return // honeypot

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: form.botcheck,
        }),
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
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error — please check your connection and try again.')
    }
  }

  const inputClass =
    'w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all duration-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:focus:ring-brand-500/20'

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Let&rsquo;s Talk"
          title="Have a project in mind?"
          subtitle="Send us a message — we usually reply within a few hours."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <a
              href={`mailto:${brand.email}`}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5 hover:border-brand-500/40 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FiMail size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1">
                  Email
                </div>
                <div className="font-medium text-slate-900 dark:text-white text-sm break-all">
                  {brand.email}
                </div>
              </div>
            </a>

            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5 hover:border-emerald-500/40 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FiMessageCircle size={18} />
              </div>
              <div>
                <div className="text-xs font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1">
                  WhatsApp
                </div>
                <div className="font-medium text-slate-900 dark:text-white text-sm">
                  {brand.whatsapp}
                </div>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent/10 border border-brand-500/20">
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                <span className="font-semibold">Available worldwide.</span>{' '}
                We work with clients across time zones — North America, Europe,
                and Asia.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5 shadow-sm space-y-4"
          >
            {/* Honeypot — hidden from humans, bots fill it */}
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
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Your Name
                </label>
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
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Your Email
                </label>
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
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us a bit about your project, timeline, and budget..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-3">
                <FiAlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We&rsquo;ll never share your details with anyone.
              </p>
              <Button type="submit" variant="gradient" disabled={status === 'sending'}>
                {status === 'sending' && (
                  <>
                    <FiLoader className="animate-spin" /> Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <FiCheckCircle /> Sent!
                  </>
                )}
                {(status === 'idle' || status === 'error') && (
                  <>
                    Send Message <FiSend size={14} />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}
