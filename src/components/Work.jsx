import { useRef } from 'react'
import { Reveal } from './common.jsx'
import { work } from '../data.js'

function TiltCard({ job, dimmed }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transition = 'box-shadow .1s ease, border-top-color .22s ease, opacity .3s ease'
    el.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-6px) scale(1.01)`
    el.style.boxShadow = `${-x * 24}px ${y * 12}px 48px -14px rgba(20,32,28,.25), 0 32px 64px -20px rgba(20,32,28,.18)`
    el.style.borderTopColor = 'var(--signal-bright)'
  }

  const onLeave = () => {
    const el = ref.current
    el.style.transition = 'transform .45s ease, box-shadow .45s ease, border-top-color .22s ease, opacity .3s ease'
    el.style.transform = ''
    el.style.boxShadow = ''
    el.style.borderTopColor = ''
  }

  return (
    <article
      ref={ref}
      className={`job-card${dimmed ? ' job-dimmed' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="job-tags">
        {job.meta.map((m) => <span key={m} className="job-tag">{m}</span>)}
      </div>
      <h3>{job.title}</h3>
      <p>{job.body}</p>
    </article>
  )
}

export default function Work({ activeFilter }) {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">Selected work</span>
            <h2>Things I've built and kept running.</h2>
          </div>
        </Reveal>
        <div className="work-grid">
          {work.map((job) => {
            const dimmed = activeFilter
              ? !job.techs?.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(t.toLowerCase()))
              : false
            return (
              <Reveal key={job.title}>
                <TiltCard job={job} dimmed={dimmed} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
