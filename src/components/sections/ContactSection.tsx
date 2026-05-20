'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// ─── SETUP WEB3FORMS (FREE) ───
// 1. Go to https://web3forms.com
// 2. Enter your email → get a free access key
// 3. Replace YOUR_WEB3FORMS_ACCESS_KEY below
const WEB3FORMS_KEY = 'c79a3ff1-8e64-4137-9c3b-88f1389d557b'

// ─── REPLACE with your actual social links ───
const socials = [
  { label: 'Instagram', href: 'https://instagram.com/prasoon.here' },
  { label: 'YouTube', href: 'https://youtube.com/@prasoonhereyt' },
  { label: 'Discord', href: 'https://discord.gg/iamprasoon54' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/prasoon-rahangdale-a9b680297' },
]

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...form,
          subject: `New project inquiry from ${form.name}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', project: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: '1px solid #1e1e1e',
    padding: '1rem 0', fontSize: '0.85rem',
    color: 'var(--white)', outline: 'none',
    transition: 'border-color 0.3s',
    fontFamily: 'Syne, sans-serif',
  }

  return (
    <>
      {/* CTA Banner */}
      <section
        style={{ padding: '10rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        id="contact"
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
            — <span style={{ color: 'var(--muted)' }}>08</span> Let's Work
          </div>

          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '2rem' }}
          >
            Your ideas deserve<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>cinematic</em> storytelling.
          </h2>

          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '4rem', letterSpacing: '0.05em' }}>
            Currently accepting new documentary and explainer projects.
          </p>

          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <a
              href="#contact-form"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '0.9rem 2.2rem', background: 'var(--accent)', color: 'var(--black)',
                fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--white)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
            >
              Send a Message
            </a>
            {/* Optional Calendly */}
            <a
              href="https://calendly.com/prasoonheremedia" // ← Replace with your Calendly link
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '0.9rem 2.2rem', border: '1px solid #1e1e1e', color: 'var(--muted)',
                textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--white)'
                el.style.color = 'var(--white)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#1e1e1e'
                el.style.color = 'var(--muted)'
              }}
            >
              Book Discovery Call
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.3s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" style={{ padding: '0 4rem 8rem', maxWidth: '700px' }}>
        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '5rem' }}>
          <h3 className="font-serif" style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '3rem' }}>
            Start the conversation
          </h3>

          {status === 'sent' ? (
            <div style={{ padding: '3rem', border: '1px solid var(--accent)', textAlign: 'center' }}>
              <p className="font-serif" style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--accent)', marginBottom: '0.5rem' }}>Message received.</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>I'll get back to you within 24–48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderBottomColor = '#1e1e1e')}
                  />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderBottomColor = '#1e1e1e')}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>Project Type</label>
                <select
                  required
                  value={form.project}
                  onChange={e => setForm(f => ({ ...f, project: e.target.value }))}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderBottomColor = '#1e1e1e')}
                >
                  <option value="" style={{ background: '#0f0f0f' }}>Select a service</option>
                  <option value="Documentary Editing" style={{ background: '#0f0f0f' }}>Documentary Editing</option>
                  <option value="GeoLayers Map Animation" style={{ background: '#0f0f0f' }}>GeoLayers Map Animation</option>
                  <option value="Motion Graphics" style={{ background: '#0f0f0f' }}>Motion Graphics</option>
                  <option value="Explainer Video" style={{ background: '#0f0f0f' }}>Explainer Video</option>
                  <option value="YouTube Retention Editing" style={{ background: '#0f0f0f' }}>YouTube Retention Editing</option>
                  <option value="Full Package" style={{ background: '#0f0f0f' }}>Full Package (All Services)</option>
                </select>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <label style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>Tell me about your project</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Channel size, type of content, turnaround needs, budget range..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderBottomColor = '#1e1e1e')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                  padding: '1rem 2.5rem', background: status === 'sending' ? 'var(--muted)' : 'var(--accent)',
                  color: 'var(--black)', fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s', fontFamily: 'Syne, sans-serif',
                }}
                onMouseEnter={e => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.background = 'var(--white)' }}
                onMouseLeave={e => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.background = 'var(--accent)' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'error' && (
                <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#e05c5c' }}>
                  Something went wrong. Email me directly at hello@yourdomain.com
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  )
}
