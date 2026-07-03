import { Reveal } from './common.jsx'
import { toolkit } from '../data.js'

export default function Toolkit({ activeFilter, onFilter }) {
  return (
    <section id="toolkit">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">Toolkit</span>
            <h2>What I work with.</h2>
            {activeFilter && (
              <p className="filter-hint">
                Showing projects using <strong>{activeFilter}</strong> —{' '}
                <button className="filter-clear" onClick={() => onFilter(null)}>clear filter</button>
              </p>
            )}
          </div>
        </Reveal>
        <Reveal>
          <div className="kit">
            {toolkit.map((group) => (
              <div className="kitrow" key={group.label}>
                <span className="label">{group.label}</span>
                <div className="chips">
                  {group.items.map((item) => (
                    <button
                      key={item}
                      className={`chip${activeFilter === item ? ' chip-active' : ''}`}
                      onClick={() => onFilter(activeFilter === item ? null : item)}
                      title={`Filter projects by ${item}`}
                    >
                      {item}
                    </button>
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
