'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// ─── REPLACE with real testimonials as you collect them ───
const testimonials = [
  {
    text: 'The edit completely transformed our channel. The pacing, the map animations, the sound design — our audience retention jumped by 40% on the very first episode we collaborated on.',
    name: 'Arjun K.',
    handle: '@GeopoliticsDaily',
    subs: '800K subscribers',
    initials: 'AK',
  },
  {
    text: 'I\'ve worked with many editors. None understood the Johnny Harris-style visual storytelling the way this editor does. My explainer videos now feel like Netflix documentaries.',
    name: 'Sarah M.',
    handle: '@EconomicsExplained',
    subs: '1.2M subscribers',
    initials: 'SM',
  },
  {
    text: 'The GeoLayers animations alone were worth every rupee. Our history channel grew from 50K to 300K subscribers within 4 months of working together — the editing quality changed everything.',
    name: 'Rahul V.',
    handle: '@HistoryUnfolded',
    subs: '340K subscribers',
    initials: 'RV',
  },
  {
    text: 'Cinematic, fast, and actually understands storytelling. Sent me the rough cut and I had almost nothing to change. The sound design in particular was on another level.',
    name: 'Maya T.',
    handle: '@ScienceUnlocked',
    subs: '560K subscribers',
    initials: 'MT',
  },
  {
    text: 'Our faceless automation channel went from 2% CTR to 6.8% after switching to this editing style. The thumbnail-to-retention pipeline is completely transformed.',
    name: 'James R.',
    handle: '@FactualMinds',
    subs: '220K subscribers',
    initials: 'JR',
  },
  {
    text: 'We run a business explainer channel and needed an editor who understood pacing AND information design. Found exactly that — complex content made genuinely watchable.',
    name: 'Priya S.',
    handle: '@BusinessBrief',
    subs: '410K subscribers',
    initials: 'PS',
  },
]

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section style={{ padding: '8rem 4rem' }} id="testimonials">
      <div
        style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
      >
        — <span style={{ color: 'var(--muted)' }}>06</span> Testimonials
      </div>

      <motion.h2
        ref={ref}
        className="font-serif"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '4rem' }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Words from{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>creators</em>
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.handle}
            style={{
              background: 'var(--deep)',
              padding: '2.5rem',
              border: '1px solid #1e1e1e',
              position: 'relative',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i }}
          >
            {/* Quote mark */}
            <span
              className="font-serif"
              style={{
                fontSize: '6rem', color: 'var(--accent)', opacity: 0.12,
                position: 'absolute', top: '-0.5rem', left: '1.5rem', lineHeight: 1,
              }}
            >
              "
            </span>
            <p
              className="font-serif"
              style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--white)', marginBottom: '1.5rem', fontStyle: 'italic', position: 'relative' }}
            >
              {t.text}
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <div
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', fontWeight: 700, color: 'var(--black)', flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--muted)' }}>{t.handle} · {t.subs}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
