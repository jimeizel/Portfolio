import { useState } from 'react'
import { Reveal } from './common.jsx'
import { profile } from '../data.js'

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button className="copy-email" onClick={copy} title="Copy email address">
      {email}
      <span className="copy-icon">{copied ? '✓' : '⧉'}</span>
      {copied && <span className="copy-confirm">Copied!</span>}
    </button>
  )
}

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
              <a href={profile.resume} download="Eizel-Jimenez-CV.pdf" className="btn btn-ghost">Download CV ↓</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CopyEmail email={profile.email} />
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
