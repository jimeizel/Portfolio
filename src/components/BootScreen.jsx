import { useEffect, useRef, useState } from 'react'

const LINES = [
  '> initializing eizel@portfolio...',
  '> loading components         [OK]',
  '> connecting to services     [OK]',
  '> all systems operational.    ✓',
]

export default function BootScreen() {
  const [count, setCount] = useState(0)
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)
  const timers = useRef([])

  useEffect(() => {
    LINES.forEach((_, i) => {
      const t = setTimeout(() => setCount(c => Math.max(c, i + 1)), i * 320 + 80)
      timers.current.push(t)
    })
    const t1 = setTimeout(() => setFading(true), LINES.length * 320 + 480)
    const t2 = setTimeout(() => setGone(true), LINES.length * 320 + 980)
    timers.current.push(t1, t2)
    return () => timers.current.forEach(clearTimeout)
  }, [])

  if (gone) return null
  return (
    <div className={`boot${fading ? ' boot-fade' : ''}`} aria-hidden="true">
      <div className="boot-inner">
        {LINES.slice(0, count).map((l, i) => (
          <p key={i} className="boot-line boot-in">{l}</p>
        ))}
        {count < LINES.length && <span className="boot-cursor" />}
      </div>
    </div>
  )
}
