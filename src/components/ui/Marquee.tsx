const items = [
  'Documentary Editing',
  'GeoLayers Map Animation',
  '2D Motion Graphics',
  'Sound Design',
  'Cinematic Pacing',
  'YouTube Retention',
  'Explainer Video',
  'Color Grading',
]

export default function MarqueeSection() {
  const doubled = [...items, ...items] // duplicate for seamless loop

  return (
    <div style={{ borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e', padding: '1.5rem 0', overflow: 'hidden' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-serif"
            style={{
              fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--muted)',
              display: 'inline-flex', alignItems: 'center', gap: '1rem', whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  )
}
