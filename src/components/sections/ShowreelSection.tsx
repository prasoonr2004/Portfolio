'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ShowreelSection() {
  const [playing, setPlaying] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  // ─── IMPORTANT: Replace this with your actual YouTube video ID ───
  // Embed an unlisted YouTube video for privacy + free hosting
  // Format: https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1
  const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ' // ← Replace this

  return (
    <section className="section" id="showreel" style={{ padding: '6rem 4rem' }}>
      <div
        className="section-tag"
        style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
      >
        — <span style={{ color: 'var(--muted)' }}>02</span> Showreel
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: '16/9', background: '#0f0f0f', border: '1px solid #1e1e1e', cursor: 'pointer' }}
          onClick={() => setPlaying(true)}
        >
          {/* Background decoration */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #1a1208 0%, #0f0f0f 40%, #0a1a14 100%)',
            }}
          />
          {/* Subtle grid */}
          <div
            style={{
              position: 'absolute', inset: 0, opacity: 0.08,
              backgroundImage: 'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {!playing ? (
            /* Play overlay */
            <div
              style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', zIndex: 3,
                background: 'linear-gradient(to bottom, rgba(8,8,8,0.2), rgba(8,8,8,0.6))',
              }}
            >
              <div
                className="play-btn"
                style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  border: '1px solid rgba(200,169,110,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem', transition: 'all 0.4s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(1.1)'
                  el.style.background = 'rgba(200,169,110,0.1)'
                  el.style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(1)'
                  el.style.background = 'transparent'
                  el.style.borderColor = 'rgba(200,169,110,0.5)'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)" style={{ marginLeft: '4px' }}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                Play Showreel — 2024
              </span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--muted)', marginTop: '0.5rem', opacity: 0.6 }}>
                Map Animation · Motion Graphics · Sound Design
              </span>
            </div>
          ) : (
            /* YouTube embed */
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', zIndex: 4 }}
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Showreel details */}
        <div className="flex flex-wrap justify-between items-center mt-4 gap-4" style={{ opacity: 0.6 }}>
          <div className="flex gap-6">
            {['Documentary Editing', 'GeoLayers Maps', '2D Motion Graphics', 'Sound Design'].map(tag => (
              <span key={tag} style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>{tag}</span>
            ))}
          </div>
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>2024 Reel</span>
        </div>
      </motion.div>
    </section>
  )
}
