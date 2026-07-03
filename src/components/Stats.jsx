import { useEffect, useState } from 'react'

function Counter({ to, suffix = '', prefix = '', delay = 0 }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let alive = true, frame
    const t = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        if (!alive) return
        const p = Math.min((now - start) / 1500, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(eased * to))
        if (p < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, delay)
    return () => { alive = false; clearTimeout(t); cancelAnimationFrame(frame) }
  }, [to])
  return <>{prefix}{val}{suffix}</>
}

const STATS = [
  { label: 'Years experience',   prefix: '',   to: 4,  suffix: '+',   delay: 0   },
  { label: 'Services monitored', prefix: '',   to: 18, suffix: '',    delay: 180 },
  { label: 'Platform uptime',    prefix: '',   to: 99, suffix: '.9%', delay: 360 },
  { label: 'Response time',      prefix: '< ', to: 24, suffix: 'h',   delay: 540 },
]

export default function Stats() {
  return (
    <div className="stats-bar">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">
                <Counter {...s} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
