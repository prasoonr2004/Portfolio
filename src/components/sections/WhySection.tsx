'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const reasons = [
  {
    num: 'i',
    title: 'Emotional Pacing Architecture',
    desc: 'Every scene is timed to create tension, release, and momentum. Your viewers won\'t notice the editing — only the feeling it creates.',
  },
  {
    num: 'ii',
    title: 'Retention by Design',
    desc: 'Pattern interrupts, open loops, and visual anchors strategically placed to keep viewers engaged through even the densest information.',
  },
  {
    num: 'iii',
    title: 'Cinematic Visual Language',
    desc: 'Maps, motion graphics, and typography that transform raw information into a premium visual experience worthy of a Netflix documentary.',
  },
  {
    num: 'iv',
    title: 'Sound as Storytelling',
    desc: 'Layered audio — atmospheric beds, precise SFX, curated music — that makes your content feel tactile and emotionally immersive.',
  },
  {
    num: 'v',
    title: 'Documentary Discipline',
    desc: 'Deadlines met. Revisions handled with precision. A creative process that feels collaborative, not complicated. Your vision, elevated.',
  },
]

export default function WhySection() {
  const { ref: leftRef, inView: leftIn } = useInView({ threshold: 0.2, triggerOnce: true })
  const { ref: rightRef, inView: rightIn } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      style={{ padding: '8rem 4rem', background: 'var(--deep)' }}
      id="why"
    >
      <div
        style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
      >
        — <span style={{ color: 'var(--muted)' }}>05</span> Why Work With Me
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Left */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -30 }}
          animate={leftIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem' }}
          >
            Editing that makes<br />
            viewers{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>obsessed,</em><br />
            not just informed.
          </h2>
          <p style={{ fontSize: '0.82rem', lineHeight: 2, color: 'var(--muted)', maxWidth: '400px' }}>
            I don't just cut footage. I engineer how your audience feels at every second — pacing, tension, release, wonder. The goal isn't a good video. It's a video they can't stop watching.
          </p>

          {/* Highlight stat */}
          <div style={{ marginTop: '3rem', padding: '2rem', border: '1px solid #1e1e1e', maxWidth: '300px' }}>
            <span className="font-serif" style={{ fontSize: '3.5rem', fontWeight: 300, color: 'var(--accent)', display: 'block', lineHeight: 1 }}>
              40%
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.1em', marginTop: '0.5rem', display: 'block' }}>
              Average retention increase reported by clients after the first edited episode
            </span>
          </div>
        </motion.div>

        {/* Right — reasons list */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 30 }}
          animate={rightIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {reasons.map((item, i) => (
            <motion.div
              key={item.num}
              style={{
                padding: '1.8rem 0',
                borderBottom: '1px solid #1e1e1e',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                transition: 'padding-left 0.3s ease',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={rightIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.paddingLeft = '0.5rem')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.paddingLeft = '0')}
            >
              <span className="font-serif" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontStyle: 'italic', minWidth: '1.5rem', marginTop: '0.1rem' }}>
                {item.num}
              </span>
              <div>
                <div style={{ fontSize: '0.85rem', letterSpacing: '0.04em', marginBottom: '0.4rem', fontWeight: 600 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.75rem', lineHeight: 1.8, color: 'var(--muted)' }}>
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
