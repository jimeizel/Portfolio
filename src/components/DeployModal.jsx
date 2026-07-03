import { useState } from 'react'

const STAGES = [
  { id: 'build',  label: 'build',  text: 'Compiling source & assets...',     ms: 900  },
  { id: 'test',   label: 'test',   text: 'Running test suite (23 tests)...',  ms: 1100 },
  { id: 'push',   label: 'push',   text: 'Pushing image to registry...',      ms: 700  },
  { id: 'deploy', label: 'deploy', text: 'Deploying to Google Cloud Run...',  ms: 1300 },
  { id: 'live',   label: 'live',   text: 'Traffic shifted. All green. ✓',     ms: 0    },
]

export default function DeployModal() {
  const [open, setOpen] = useState(false)
  const [stage, setStage] = useState(-1)
  const [running, setRunning] = useState(false)

  const run = () => {
    if (running) return
    setOpen(true); setRunning(true); setStage(0)
    let i = 0
    const next = () => {
      i++
      if (i < STAGES.length) { setStage(i); setTimeout(next, STAGES[i].ms) }
      else setRunning(false)
    }
    setTimeout(next, STAGES[0].ms)
  }

  const close = () => { setOpen(false); setStage(-1); setRunning(false) }

  return (
    <>
      <button className="deploy-fab" onClick={run} title="Trigger a deploy" aria-label="Deploy easter egg">
        ⚡
      </button>
      {open && (
        <div className="deploy-overlay" onClick={close}>
          <div className="deploy-modal" onClick={e => e.stopPropagation()}>
            <div className="deploy-top">
              <span className="deploy-cmd">$ git push origin main</span>
              <button className="deploy-x" onClick={close}>✕</button>
            </div>
            <div className="deploy-pipeline">
              {STAGES.map((s, i) => {
                const st = i < stage ? 'done' : i === stage ? 'active' : 'pending'
                return (
                  <div key={s.id} className={`dp-stage dp-${st}`}>
                    <span className="dp-icon">{i < stage ? '✓' : i === stage ? '●' : '○'}</span>
                    <span className="dp-label">{s.label}</span>
                    {i <= stage && <span className="dp-text">{s.text}</span>}
                  </div>
                )
              })}
            </div>
            {stage === STAGES.length - 1 && (
              <div className="deploy-done">
                ✓ Deployed successfully in ~4s
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
