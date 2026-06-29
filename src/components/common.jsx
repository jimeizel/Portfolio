import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'

// Wraps children and fades them in when they scroll into view.
// Falls back to visible immediately if IntersectionObserver is unavailable,
// and CSS disables the motion under prefers-reduced-motion.
export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}

export function Nav() {
  return (
    <header className="top">
      <div className="wrap">
        <a href="#top" className="brand">
          {profile.name}
          <span className="dot">.</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#toolkit">toolkit</a>
          <a href="#contact" className="cta">Start a project</a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>{profile.name} — Software Engineer &amp; DevOps</span>

      </div>
    </footer>
  )
}
