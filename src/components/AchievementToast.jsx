import { useEffect, useRef, useState } from 'react'

export default function AchievementToast() {
  const [show, setShow] = useState(false)
  const fired = useRef(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true
        setShow(true)
        setTimeout(() => setShow(false), 4500)
      }
    }, { threshold: 0.5 })
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`achievement${show ? ' achievement-show' : ''}`} role="status" aria-live="polite">
      <span className="ach-icon">🏆</span>
      <div>
        <div className="ach-title">Achievement unlocked</div>
        <div className="ach-sub">Full read — you made it to the bottom</div>
      </div>
    </div>
  )
}
