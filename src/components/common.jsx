import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'

function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="scroll-progress" style={{ width: `${pct}%` }} aria-hidden="true" />
}

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
      <ScrollProgress />
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
