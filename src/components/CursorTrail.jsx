import { useEffect } from 'react'

export default function CursorTrail() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let last = 0
    const onMove = (e) => {
      const now = Date.now()
      if (now - last < 40) return
      last = now
      const dot = document.createElement('div')
      dot.className = 'cursor-dot'
      dot.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`
      document.body.appendChild(dot)
      setTimeout(() => dot.remove(), 700)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return null
}
