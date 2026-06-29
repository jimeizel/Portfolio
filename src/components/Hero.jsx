import { Reveal } from './common.jsx'
import { status } from '../data.js'

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
              <span className="v">
                {s.ok && <span className="ok">open</span>}
                {s.ok ? ' · ' : ''}
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </Reveal>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Software engineer · Mobile · DevOps · based in the Philippines</span>
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
