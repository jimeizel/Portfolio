import { useEffect, useState } from 'react'
import { Reveal } from './common.jsx'
import { status } from '../data.js'

function useCountUp(target, delay = 400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let alive = true
    let frame
    const t = setTimeout(() => {
      const start = performance.now()
      const duration = 1100
      const tick = (now) => {
        if (!alive) return
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(eased * target))
        if (p < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, delay)
    return () => { alive = false; clearTimeout(t); cancelAnimationFrame(frame) }
  }, [target])
  return val
}

function useTypewriter(text, delay = 600, speed = 38) {
  const [out, setOut] = useState('')
  useEffect(() => {
    setOut('')
    let i = 0
    let id
    const t = setTimeout(() => {
      id = setInterval(() => {
        i++
        setOut(text.slice(0, i))
        if (i >= text.length) clearInterval(id)
      }, speed)
    }, delay)
    return () => { clearTimeout(t); clearInterval(id) }
  }, [text])
  return out
}

function LiveUptime() {
  const [days, setDays] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let alive = true
    let frame
    const target = Math.floor((Date.now() - new Date('2021-11-01')) / 86400000)
    const t = setTimeout(() => {
      const start = performance.now()
      const duration = 1400
      const tick = (now) => {
        if (!alive) return
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDays(Math.round(eased * target))
        if (p < 1) frame = requestAnimationFrame(tick)
        else if (alive) setDone(true)
      }
      frame = requestAnimationFrame(tick)
    }, 500)
    return () => { alive = false; clearTimeout(t); cancelAnimationFrame(frame) }
  }, [])

  useEffect(() => {
    if (!done) return
    const id = setInterval(() => {
      setDays(Math.floor((Date.now() - new Date('2021-11-01')) / 86400000))
    }, 60000)
    return () => clearInterval(id)
  }, [done])

  return <>{days}d</>
}

function StatusValue({ s }) {
  const count = useCountUp(18, 500)
  if (s.k === 'uptime_days') return <span className="v"><LiveUptime /></span>
  if (s.k === 'services_in_prod') return <span className="v">{count} monitored</span>
  return (
    <span className="v">
      {s.ok && <span className="ok">open</span>}
      {s.ok ? ' · ' : ''}
      {s.v}
    </span>
  )
}

function StatusPanel() {
  return (
    <Reveal>
      <aside className="panel" aria-label="Current availability">
        <div className="panel-head">
          <span className="lbl">System status</span>
          <span className="live">
            <span className="pdot" aria-hidden="true" /> operational
          </span>
        </div>
        <svg className="spark" viewBox="0 0 280 34" preserveAspectRatio="none" aria-hidden="true">
          <polyline points="0,24 24,22 40,25 56,12 72,26 96,23 112,24 128,6 144,27 160,22 184,23 200,16 224,24 240,21 264,23 280,20" />
        </svg>
        <div className="rows">
          {status.map((s) => (
            <div className="row" key={s.k}>
              <span className="k">{s.k}</span>
              <StatusValue s={s} />
            </div>
          ))}
        </div>
      </aside>
    </Reveal>
  )
}

const EYEBROW = 'Software engineer · Mobile · DevOps · based in the Philippines'

export default function Hero() {
  const typed = useTypewriter(EYEBROW, 400, 36)

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            {typed}
            <span className="cursor" aria-hidden="true" />
          </span>
          <h1>
            I <span className="b">build</span> web &amp; mobile products — then{' '}
            <span className="r">keep them running</span>.
          </h1>
          <p className="lede">
            Full-stack and infrastructure engineer. From the first commit to the deploy and the
            dashboards — I handle the whole lifecycle, so the thing I build for you stays online.
          </p>
          <div className="actions">
            <a href="#contact" className="btn btn-primary">Start a project →</a>
            <a href="#work" className="btn btn-ghost">See selected work</a>
          </div>
        </div>
        <StatusPanel />
      </div>
    </section>
  )
}
