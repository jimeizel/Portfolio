import { Reveal } from './common.jsx'
import { principles } from '../data.js'

export default function Approach() {
  return (
    <section id="approach">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">How I work</span>
            <h2>What you can count on.</h2>
          </div>
        </Reveal>
        <div className="princ">
          {principles.map((pr) => (
            <Reveal key={pr.h}>
              <div className="p">
                <h3>{pr.h}</h3>
                <p>{pr.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
