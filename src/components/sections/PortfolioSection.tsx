'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// ─── REPLACE with your actual project data ───
const projects = [
  {
    id: 1,
    title: 'The India–China Border: A Century of Tension',
    category: 'Geopolitics · Documentary',
    tags: ['Map Animation', 'Documentary Edit', 'Sound Design', 'Color Grade'],
    description: 'A cinematic deep-dive into the most contested border in Asia — from 1914 McMahon Line to modern standoffs. 2.3M views.',
    color: 'linear-gradient(135deg, #1a1208 0%, #2d1f0a 40%, #0a1a14 100%)',
    span: true, // full width
    // youtubeId: 'YOUR_ID_HERE', // Uncomment and add for live preview
  },
  {
    id: 2,
    title: 'Why Countries Collapse',
    category: 'History · Explainer',
    tags: ['Motion Graphics', 'Retention Edit', 'Sound Design'],
    description: 'The economics, politics, and human stories behind civilizational collapse.',
    color: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2d 40%, #1a1208 100%)',
    span: false,
  },
  {
    id: 3,
    title: 'History of the Indian Rupee',
    category: 'Economy · Finance',
    tags: ['Data Visualization', 'Documentary', 'Maps'],
    description: 'How a currency reflects the story of a nation — from colonial rupees to digital payments.',
    color: 'linear-gradient(135deg, #0a1a0a 0%, #1a2d0a 40%, #0a1a1a 100%)',
    span: false,
  },
  {
    id: 4,
    title: 'How Oil Controls the World',
    category: 'Geopolitics · Business',
    tags: ['GeoLayers', 'Cinematic Edit', 'Motion Graphics'],
    description: 'A visual explainer on the geopolitics of petroleum and why it shapes every major global conflict.',
    color: 'linear-gradient(135deg, #1a0a0a 0%, #2d1a0a 40%, #0a0a1a 100%)',
    span: false,
  },
  {
    id: 5,
    title: 'Ancient Trade Routes, Explained',
    category: 'History · Trade',
    tags: ['Map Animation', 'Storytelling', 'Sound Design'],
    description: 'How silk, spice, and ideas shaped the ancient world through animated GeoLayers sequences.',
    color: 'linear-gradient(135deg, #0a1a1a 0%, #0a0a2d 40%, #1a0a1a 100%)',
    span: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="project-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#141414',
        aspectRatio: project.span ? '21/9' : '16/9',
        gridColumn: project.span ? 'span 2' : 'span 1',
        cursor: 'pointer',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      {/* Thumbnail background */}
      <div
        className="project-thumb"
        style={{
          position: 'absolute', inset: 0,
          background: project.color,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Map lines decoration for span card */}
      {project.span && (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} viewBox="0 0 800 350">
          <path d="M100,175 Q200,130 320,155 Q440,180 540,130 Q640,100 740,145" stroke="#c8a96e" strokeWidth="1" fill="none"/>
          <path d="M80,240 Q180,210 300,225 Q420,240 520,200 Q620,170 720,210" stroke="#c8a96e" strokeWidth="0.5" fill="none" opacity="0.5"/>
          <circle cx="320" cy="155" r="5" fill="#c8a96e"/>
          <circle cx="540" cy="130" r="7" fill="#c8a96e" opacity="0.7"/>
          <circle cx="670" cy="110" r="3" fill="#c8a96e"/>
          <line x1="320" y1="155" x2="540" y2="130" stroke="#c8a96e" strokeWidth="0.5" strokeDasharray="6,4" opacity="0.6"/>
          <line x1="540" y1="130" x2="670" y2="110" stroke="#c8a96e" strokeWidth="0.5" strokeDasharray="6,4" opacity="0.4"/>
        </svg>
      )}

      {/* Overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '2rem',
        }}
      >
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          {project.category}
        </span>
        <h3
          className="font-serif"
          style={{ fontSize: project.span ? '2.2rem' : '1.4rem', fontWeight: 300, marginBottom: '0.6rem', lineHeight: 1.1 }}
        >
          {project.title}
        </h3>
        {project.span && (
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
            {project.description}
          </p>
        )}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.56rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                padding: '0.3rem 0.7rem', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section style={{ padding: '0 0 8rem 0' }} id="work">
      <div style={{ padding: '0 4rem', marginBottom: '4rem' }}>
        <div
          style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
        >
          — <span style={{ color: 'var(--muted)' }}>04</span> Selected Work
        </div>
        <motion.h2
          ref={ref}
          className="font-serif"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Projects that made<br />
          viewers{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>stay</em>
        </motion.h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          padding: '0 4rem',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div style={{ padding: '3rem 4rem 0', textAlign: 'center' }}>
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            textDecoration: 'none',
            borderBottom: '1px solid #1e1e1e',
            paddingBottom: '0.2rem',
            transition: 'color 0.3s, border-color 0.3s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = 'var(--accent)'
            el.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = 'var(--muted)'
            el.style.borderColor = '#1e1e1e'
          }}
        >
          Want to see more? Let's talk →
        </a>
      </div>
    </section>
  )
}
