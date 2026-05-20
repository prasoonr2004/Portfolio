'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    num: '01',
    title: 'Documentary Editing',
    desc: 'Johnny Harris-inspired pacing. Every cut earns its place. Information-heavy content made impossible to stop watching through emotional rhythm and visual storytelling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="1"/>
        <path d="M10 9l5 3-5 3V9z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'GeoLayers Map Animation',
    desc: 'Cinematic animated maps that transform geopolitics, history, and business narratives into stunning visual sequences. Custom routes, borders, and callouts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: '2D Motion Graphics',
    desc: 'Custom motion design that elevates storytelling — animated charts, kinetic typography, data visualization, lower thirds, and full info-graphic sequences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Cinematic Sound Design',
    desc: 'Immersive audio layering — music curation, custom SFX, atmospheric beds, and professional mixing that makes viewers feel every moment of your story.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Explainer Video Packaging',
    desc: 'End-to-end visual packaging — custom intro animations, lower thirds, thumbnails, chapter cards, end screens. Your channel identity, made cinematic.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'YouTube Retention Editing',
    desc: 'Data-informed editing decisions — pattern interrupts, open loops, strategic pacing changes, and visual anchors engineered to maximize watch time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
]

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="services" style={{ padding: '2rem 0 8rem' }}>
      <div style={{ padding: '0 4rem', marginBottom: '4rem' }}>
        <div
          className="section-tag"
          style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
        >
          — <span style={{ color: 'var(--muted)' }}>03</span> Services
        </div>
        <motion.h2
          className="font-serif"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, lineHeight: 1.1, maxWidth: '600px' }}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          What I craft for{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>your audience</em>
        </motion.h2>
      </div>

      {/* Grid with borders */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#1e1e1e',
        }}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            className="service-card"
            style={{
              background: 'var(--black)',
              padding: '3rem 2.5rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.3s',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--deep)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--black)')}
          >
            <div style={{ width: '32px', height: '32px', marginBottom: '2rem', color: 'var(--accent)', opacity: 0.7 }}>
              {service.icon}
            </div>
            <span className="font-serif" style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.8rem', display: 'block', fontStyle: 'italic' }}>
              {service.num}
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 300, marginBottom: '1rem' }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '0.76rem', lineHeight: 1.9, color: 'var(--muted)' }}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
