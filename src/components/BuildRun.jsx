import { Reveal } from './common.jsx'
import { buildItems, runItems } from '../data.js'

function Column({ kind, tag, heading, items }) {
  return (
    <Reveal>
      <div className={`col ${kind}`}>
        <span className="tag">{tag}</span>
        <h3>{heading}</h3>
        {items.map((it) => (
          <div className="item" key={it.t}>
            <strong>{it.t}</strong>
            <span>{it.d}</span>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export default function BuildRun() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">Build &amp; run</span>
            <h2>Two halves of one job.</h2>
            <p>
              Most projects need someone to write the code and someone to keep the servers alive. I
              do both — which means fewer hand-offs, fewer things lost in the gap, and one person
              accountable when something breaks.
            </p>
          </div>
        </Reveal>
        <div className="br">
          <Column kind="build" tag="/ build" heading="Ship the product" items={buildItems} />
          <Column kind="run" tag="/ run" heading="Keep it online" items={runItems} />
        </div>
      </div>
    </section>
  )
}
