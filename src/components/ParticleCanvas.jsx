import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    const mouse = { x: -999, y: -999 }
    const MAX_SPD = 0.45

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const N = canvas.width < 600 ? 28 : 55
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * MAX_SPD,
      vy: (Math.random() - 0.5) * MAX_SPD,
    }))

    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const section = canvas.parentElement
    section.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        const dx = mouse.x - p.x, dy = mouse.y - p.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 160) { p.vx += dx * 0.00012; p.vy += dy * 0.00012 }
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > MAX_SPD * 2.5) { p.vx *= (MAX_SPD * 2.5) / spd; p.vy *= (MAX_SPD * 2.5) / spd }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(70,200,164,.65)'; ctx.fill()
      })
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(70,200,164,${(1 - d / 130) * 0.22})`
            ctx.lineWidth = 1; ctx.stroke()
          }
        }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      section?.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return <canvas ref={ref} className="particle-canvas" aria-hidden="true" />
}
