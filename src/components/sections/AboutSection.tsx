'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  'Adobe Premiere Pro', 'After Effects', 'GeoLayers 3',
  'DaVinci Resolve', 'Adobe Photoshop', 'Adobe Illustrator',
  'Documentary Editing',
  'Sound Design', 'Motion Graphics', 'Retention Editing',
]

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section style={{ padding: '8rem 4rem', background: 'var(--deep)' }} id="about">
      <div
        style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
      >
        — <span style={{ color: 'var(--muted)' }}>07</span> About
      </div>

      <div
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '6rem', alignItems: 'center' }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Visual */}
        <motion.div
          style={{ position: 'relative', aspectRatio: '3/4', background: '#141414', overflow: 'hidden' }}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #1a1208 0%, #0a0f0a 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid #1e1e1e' }} />
          <div style={{ position: 'absolute', inset: '1.5rem', border: '1px solid rgba(200,169,110,0.15)' }} />

          {/* Decorative film frame marks */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
            <div
              key={i}
              style={{
                position: 'absolute', left: '0.5rem', top: `${8 + i * 12}%`,
                width: '0.4rem', height: '0.8rem',
                background: 'rgba(200,169,110,0.2)',
              }}
            />
          ))}

          <div
            style={{
              position: 'absolute', inset: 0, display: 'flex',
              flexDirection: 'column', justifyContent: 'flex-end',
              padding: '3rem', zIndex: 2,
            }}
          >
            <div className="font-serif" style={{ fontSize: '4rem', fontWeight: 300, fontStyle: 'italic', color: 'rgba(200,169,110,0.12)', lineHeight: 1, marginBottom: '1rem' }}>
              Story
            </div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Documentary Editor
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem' }}
          >
            I edit stories that{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>demand</em>{' '}
            to be watched.
          </h2>

          <p style={{ fontSize: '0.82rem', lineHeight: 2.1, color: 'var(--muted)', marginBottom: '1rem' }}>
            I'm a documentary-focused video editor specializing in cinematic visual storytelling for YouTube creators, explainer channels, and content studios. My editing philosophy is simple: every frame should earn the next.
          </p>
          <p style={{ fontSize: '0.82rem', lineHeight: 2.1, color: 'var(--muted)', marginBottom: '1rem' }}>
            With a deep focus on geopolitics, history, business, and science content, I combine precise pacing, GeoLayers map animation, custom 2D motion graphics, and immersive sound design to transform complex ideas into compulsive viewing experiences.
          </p>
          <p style={{ fontSize: '0.82rem', lineHeight: 2.1, color: 'var(--muted)' }}>
            Inspired by the visual language of Johnny Harris, Wendover Productions, and premium documentary filmmaking — I bring that cinematic standard to your channel, at a fraction of the production cost.
          </p>

          {/* Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2.5rem' }}>
            {skills.map(skill => (
              <span
                key={skill}
                style={{
                  fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '0.4rem 0.9rem', border: '1px solid #1e1e1e',
                  color: 'var(--muted)', transition: 'all 0.3s', cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--accent)'
                  el.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#1e1e1e'
                  el.style.color = 'var(--muted)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
