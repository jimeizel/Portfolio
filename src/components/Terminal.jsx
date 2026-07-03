import { useEffect, useRef, useState } from 'react'
import { toolkit, work, profile } from '../data.js'
import { Reveal } from './common.jsx'

const PROMPT = 'visitor@eizel:~$'

function getDays() {
  return Math.floor((Date.now() - new Date('2021-11-01')) / 86400000)
}

function processCommand(raw) {
  const cmd = raw.trim().toLowerCase()
  if (!cmd) return []

  if (cmd === 'help') {
    return [
      { t: 'out', v: 'Available commands:' },
      { t: 'list', v: '  whoami    — about Eizel' },
      { t: 'list', v: '  skills    — full tech stack' },
      { t: 'list', v: '  work      — selected projects' },
      { t: 'list', v: '  contact   — get in touch' },
      { t: 'list', v: '  uptime    — time in the field' },
      { t: 'list', v: '  clear     — clear terminal' },
    ]
  }

  if (cmd === 'whoami') {
    return [
      { t: 'key', v: 'Eizel Jimenez — Full-stack, Mobile & DevOps Engineer' },
      { t: 'out', v: 'Cebu, Philippines · Available for remote & freelance work' },
      { t: 'out', v: '4+ years building and running production systems at Brighture Inc.' },
      { t: 'out', v: 'From first commit to deploy — I handle the whole lifecycle.' },
    ]
  }

  if (cmd === 'skills') {
    return toolkit.flatMap(row => [
      { t: 'key', v: row.label },
      { t: 'out', v: '  ' + row.items.join('  ·  ') },
    ])
  }

  if (cmd === 'work') {
    return work.map((w, i) => ({
      t: 'workline',
      v: `[${i + 1}]  ${w.title}`,
      sub: w.meta.join(' · '),
    }))
  }

  if (cmd === 'contact') {
    return [
      { t: 'key', v: 'email     ' + profile.email },
      { t: 'key', v: 'linkedin  ' + profile.linkedin },
      { t: 'ok',  v: '→ Response time < 24h. Open to freelance & remote work.' },
    ]
  }

  if (cmd === 'uptime') {
    return [
      { t: 'ok',  v: `${getDays()} days of continuous operation since Nov 2021.` },
      { t: 'out', v: 'Systems still running. No unplanned downtime.' },
    ]
  }

  if (cmd === 'clear') {
    return [{ t: 'clear' }]
  }

  if (cmd.includes('hire')) {
    return [
      { t: 'ok',  v: '✓ Request queued. Starting project onboarding sequence...' },
      { t: 'out', v: "Just kidding — but let's actually talk:" },
      { t: 'key', v: '  ' + profile.email },
    ]
  }

  return [
    { t: 'err', v: `zsh: command not found: ${raw.trim()}` },
    { t: 'out', v: "Type 'help' for available commands." },
  ]
}

const WELCOME = [
  { t: 'key', v: '→ eizel@portfolio interactive shell' },
  { t: 'out', v: "Type 'help' to get started." },
]

export default function Terminal() {
  const [lines, setLines] = useState(WELCOME)
  const [input, setInput] = useState('')
  const [hist, setHist] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  function submit(raw) {
    const trimmed = raw.trim()
    const result = processCommand(trimmed)
    if (result.length === 1 && result[0].t === 'clear') {
      setLines(WELCOME)
    } else {
      setLines(l => [...l, { t: 'cmd', v: trimmed }, ...result])
    }
    if (trimmed) setHist(h => [trimmed, ...h.slice(0, 49)])
    setHistIdx(-1)
    setInput('')
  }

  function handleKey(e) {
    if (e.key === 'Enter') {
      submit(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, hist.length - 1)
      setHistIdx(next)
      setInput(hist[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) { setHistIdx(-1); setInput(''); return }
      setHistIdx(next)
      setInput(hist[next] ?? '')
    }
  }

  return (
    <section id="terminal" className="terminal-section">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow hr-eyebrow">Interactive</span>
            <h2>Explore the stack.</h2>
            <p className="sec-sub">Type a command to dig into my skills, work, or get in touch.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="term" onClick={() => inputRef.current?.focus()}>
            <div className="term-bar">
              <span className="tdot r" />
              <span className="tdot y" />
              <span className="tdot g" />
              <span className="term-title">eizel@portfolio — zsh</span>
            </div>
            <div className="term-body">
              {lines.map((line, i) => (
                <div className="term-line" key={i}>
                  {line.t === 'cmd' && <span className="tprompt">{PROMPT}&nbsp;</span>}
                  <span className={`t${line.t}`}>{line.v}</span>
                  {line.sub && <span className="tsub">&nbsp;·&nbsp;{line.sub}</span>}
                </div>
              ))}
              <div className="term-input-row">
                <span className="tprompt">{PROMPT}&nbsp;</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
              <div ref={bottomRef} />
            </div>
            <div className="term-hint">
              try:
              {['help', 'skills', 'work', 'contact'].map(c => (
                <button key={c} onClick={() => { submit(c); inputRef.current?.focus() }}>{c}</button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
