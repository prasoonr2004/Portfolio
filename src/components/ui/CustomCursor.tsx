'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring) {
        ring.style.left = `${ringX}px`
        ring.style.top = `${ringY}px`
      }
      requestAnimationFrame(animate)
    }

    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, .project-card, .service-card, [data-cursor-hover]')
      targets.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()
    // Delay to let DOM render
    setTimeout(addHoverListeners, 500)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ position: 'fixed', zIndex: 10000 }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring hidden md:block ${isHovering ? 'hover' : ''}`}
        style={{ position: 'fixed', zIndex: 9998 }}
      />
    </>
  )
}
