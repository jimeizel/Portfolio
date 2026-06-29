import { Reveal } from './common.jsx'
import { work } from '../data.js'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">Selected work</span>
            <h2>Things I've built and kept running.</h2>
          </div>
        </Reveal>
        <div className="work">
          {work.map((job) => (
            <Reveal key={job.title}>
              <article className="job">
                <div className="meta">
                  {job.meta.map((m, i) => (
                    <span key={m}>
                      {m}
                      {i < job.meta.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </div>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
