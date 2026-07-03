import { useEffect, useRef, useState } from 'react'
import { Reveal } from './common.jsx'
import { radar } from '../data.js'

const CX = 160, CY = 160, MAX_R = 115

function pt(i, n, r) {
  const a = (i * 2 * Math.PI) / n - Math.PI / 2
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) }
}

function gridPoly(n, r) {
  return Array.from({ length: n }, (_, i) => {
    const p = pt(i, n, r)
    return `${p.x},${p.y}`
  }).join(' ')
}

export default function RadarChart() {
  const [prog, setProg] = useState(0)
  const ref = useRef(null)
  const N = radar.length

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / 1300, 1)
        setProg(1 - Math.pow(1 - p, 3))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [])

  const dataPts = radar.map((d, i) => {
    const p = pt(i, N, MAX_R * (d.value / 100) * prog)
    return `${p.x},${p.y}`
  }).join(' ')

  return (
    <section id="skills" ref={ref}>
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">Skill profile</span>
            <h2>Where I'm strongest.</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="radar-wrap">
            <svg viewBox="0 0 320 320" className="radar-svg" aria-label="Skill radar chart">
              {[1, 2, 3, 4].map(l => (
                <polygon key={l} points={gridPoly(N, MAX_R * l / 4)} fill="none" stroke="var(--line)" strokeWidth="1" />
              ))}
              {radar.map((d, i) => {
                const end = pt(i, N, MAX_R)
                const lbl = pt(i, N, MAX_R + 28)
                return (
                  <g key={d.axis}>
                    <line x1={CX} y1={CY} x2={end.x} y2={end.y} stroke="var(--line)" strokeWidth="1" />
                    <text x={lbl.x} y={lbl.y} textAnchor="middle" dominantBaseline="middle" className="radar-lbl">
                      {d.axis}
                    </text>
                  </g>
                )
              })}
              <polygon points={dataPts} fill="rgba(70,200,164,.13)" stroke="var(--signal-bright)" strokeWidth="2" />
              {radar.map((d, i) => {
                const p = pt(i, N, MAX_R * (d.value / 100) * prog)
                return <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="var(--signal-bright)" />
              })}
            </svg>
            <div className="radar-bars">
              {radar.map(d => (
                <div className="radar-row" key={d.axis}>
                  <span className="radar-name">{d.axis}</span>
                  <div className="radar-bar-wrap">
                    <div className="radar-bar" style={{ width: `${d.value * prog}%` }} />
                  </div>
                  <span className="radar-pct">{Math.round(d.value * prog)}%</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
