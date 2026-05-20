'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#why' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex justify-between items-center"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.95)' : 'linear-gradient(to bottom, rgba(8,8,8,0.8), transparent)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e1e1e' : 'none',
        transition: 'all 0.4s ease',
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <Link href="/" className="font-serif text-2xl italic" style={{ color: 'var(--white)', textDecoration: 'none' }}>
        Frame<span style={{ color: 'var(--accent)' }}>.</span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2"
        style={{
          fontSize: '0.68rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '0.6rem 1.6rem',
          border: '1px solid var(--accent)',
          color: 'var(--accent)',
          textDecoration: 'none',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--accent)'
          el.style.color = 'var(--black)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'transparent'
          el.style.color = 'var(--accent)'
        }}
      >
        Book a Call
      </a>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ width: '24px', height: '1px', background: 'var(--white)', display: 'block', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
        <span style={{ width: '24px', height: '1px', background: 'var(--white)', display: 'block', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
        <span style={{ width: '24px', height: '1px', background: 'var(--white)', display: 'block', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 md:hidden"
          style={{ background: 'rgba(8,8,8,0.98)', borderBottom: '1px solid #1e1e1e', padding: '2rem' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                padding: '0.8rem 0',
                borderBottom: '1px solid #1e1e1e',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              textDecoration: 'none',
              padding: '1rem 0',
            }}
          >
            Book a Call →
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
