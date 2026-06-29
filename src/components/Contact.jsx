import { Reveal } from './common.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div className="contact">
            <span className="eyebrow">Contact</span>
            <h2>Let's build something that stays up.</h2>
            <p>
              Have a product to build, a stack to stabilize, or servers that need a steadier pair of
              hands? Tell me what you're working on.
            </p>
            <div className="actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">Email me →</a>
              <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="avail">
              <span className="pdot" aria-hidden="true" /> Available for freelance &amp; remote projects
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
