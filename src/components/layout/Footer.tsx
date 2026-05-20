'use client'
export default function Footer() {
  return (
    <footer style={{ padding: '3rem 4rem', borderTop: '1px solid #1e1e1e', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '2rem' }}>
      <div className="font-serif" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
        Frame<span style={{ color: 'var(--accent)' }}>.</span>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Work', 'Services', 'About', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.3s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--white)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
          >
            {link}
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--muted)', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()} · All rights reserved
        </div>
      </div>
    </footer>
  )
}
