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
        <div className="work-grid">
          {work.map((job) => (
            <Reveal key={job.title}>
              <article className="job-card">
                <div className="job-tags">
                  {job.meta.map((m) => (
                    <span key={m} className="job-tag">{m}</span>
                  ))}
                </div>
                <h3>{job.title}</h3>
                <p>{job.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
