'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

const stats = [
  { num: '48+', label: 'Projects Delivered' },
  { num: '12M+', label: 'Views Generated' },
  { num: '6yr', label: 'Experience' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: '0 2rem 0 4rem' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,169,110,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(107,143,113,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Left vertical line */}
      <div
        className="absolute top-0 bottom-0 hidden md:block"
        style={{ left: '3.5rem', width: '1px', background: 'linear-gradient(to bottom, transparent, #1e1e1e 20%, #1e1e1e 80%, transparent)' }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl">
        {/* Tag */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <span style={{ width: '2rem', height: '1px', background: 'var(--accent)' }} />
          Documentary Video Editor
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-serif"
          style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          I turn complex{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>ideas</em>{' '}
          into
          <br />
          <span style={{ color: 'var(--muted)' }}>cinematic stories.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          style={{ fontSize: '0.85rem', letterSpacing: '0.05em', color: 'var(--muted)', maxWidth: '480px', margin: '2rem 0 3.5rem', lineHeight: 1.9 }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          Documentary-style editing that commands attention — map animations, motion graphics, and immersive sound design built for creators who refuse to be skipped.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
        >
          <a
            href="#showreel"
            className="inline-flex items-center gap-3"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0.9rem 2.2rem',
              background: 'var(--accent)',
              color: 'var(--black)',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--white)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Watch Showreel
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0.9rem 2.2rem',
              border: '1px solid #1e1e1e',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'all 0.3s',
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
            Let's Work Together
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-3"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0.9rem 2.2rem',
              border: '1px solid #1e1e1e',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'all 0.3s',
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
            View Work
          </a>
        </motion.div>
      </div>

      {/* Stats — desktop only */}
      <motion.div
        className="absolute hidden lg:flex flex-col gap-8"
        style={{ right: '4rem', top: '50%', transform: 'translateY(-50%)' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      >
        {stats.map(stat => (
          <div key={stat.label} className="text-right">
            <span className="font-serif block" style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: 1 }}>
              {stat.num}
            </span>
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute hidden md:flex flex-col items-center gap-3"
        style={{ bottom: '3rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)' }}
      >
        <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
