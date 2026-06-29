import { Reveal } from './common.jsx'
import { toolkit } from '../data.js'

export default function Toolkit() {
  return (
    <section id="toolkit">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">Toolkit</span>
            <h2>What I work with.</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="kit">
            {toolkit.map((group) => (
              <div className="kitrow" key={group.label}>
                <span className="label">{group.label}</span>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
