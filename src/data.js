// All page content lives here, separate from the components that render it.

export const profile = {
  name: 'Eizel Jimenez',
  email: 'eizel.jimenez27@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eizel-jimenez-40ba4621b/',
  github: 'https://github.com/jimeizel',
  resume: '/resume.pdf',
}

export const status = [
  { k: 'availability', v: 'freelance & remote', ok: true, meter: 90 },
  { k: 'platform_uptime', v: '99.9%' },
  { k: 'services_in_prod', v: '18 monitored' },
  { k: 'environments', v: 'staging·sandbox·prod' },
  { k: 'response_time', v: '< 24h' },
]

export const buildItems = [
  { t: 'Web apps', d: 'Single-page apps and dashboards in React and Vue/Quasar, with Django, Python, or PHP backends behind them.' },
  { t: 'Mobile apps', d: 'Cross-platform with Flutter — one codebase, iOS and Android, with biometric login (Face ID / Touch ID), secure JWT sessions, and QR code generation.' },
  { t: 'APIs & integrations', d: 'REST services on FastAPI and Django, Supabase (PostgreSQL) for data, payment flows with Stripe Connect, and third-party integrations built to handle real edge cases.' },
]

export const runItems = [
  { t: 'Deploy', d: "Docker and Google Cloud Run. Reproducible builds and releases that don't surprise you." },
  { t: 'Observe', d: 'Prometheus, Grafana, and Loki — so problems show up on a dashboard before they show up in your inbox.' },
  { t: 'Secure & maintain', d: 'Linux servers, Nginx, SSL, firewall and SSH hardening, OS and patch management.' },
]

export const work = [
  {
    meta: ['Mobile', 'Full-Stack', 'Cloud Run'],
    title: 'Full-stack web & mobile platform',
    techs: ['Flutter', 'React', 'FastAPI', 'Supabase / PostgreSQL', 'Firebase', 'Google Cloud Run', 'Stripe', 'Codemagic CI/CD'],
    body: 'Built a Flutter iOS/Android app and a React.js web portal on top of a Python/FastAPI backend — JWT auth, bcrypt, AES-128-CBC field-level encryption for PII, and role-based access control. Integrated Stripe Connect for payments and payouts, Firebase for real-time features, and Supabase (PostgreSQL) as the primary database. Deployed to Google Cloud Run, automated mobile builds with Codemagic CI/CD, and tracked down a production issue where traffic was pinned to a stale revision so new deploys never went live.',
  },
  {
    meta: ['Web', 'Containers'],
    title: 'Online education platform',
    techs: ['Vue / Quasar', 'Django', 'Wagtail', 'PHP', 'Docker', 'Nginx', 'MySQL'],
    body: 'A multi-service platform for an online English school: a Quasar single-page app, Django and Wagtail backends, and a PHP service — all containerized with Docker behind a shared Nginx reverse proxy with MySQL, running across staging, sandbox, and production environments. Ongoing work includes fixing bugs, implementing new features, and keeping everything stable under active daily use.',
  },
  {
    meta: ['Monitoring', 'Reliability'],
    title: 'Production observability stack',
    techs: ['Prometheus', 'Grafana', 'Loki', 'Docker', 'Linux / Ubuntu'],
    body: 'End-to-end visibility for a fleet of services: Prometheus metrics, Grafana dashboards, and Loki logs, with endpoint (blackbox) and database exporters. Outages get caught early, deploys are verifiable, and "is it down?" has an answer that isn\'t a guess.',
  },
  {
    meta: ['Platform', 'Security'],
    title: 'Server hardening & access control',
    techs: ['Linux / Ubuntu', 'Nginx', 'Fail2ban', 'Bash', 'Apache'],
    body: 'Ubuntu server administration for a live stack: firewall rules and per-IP SSH access for a distributed team, SSL/Nginx configuration, and patch and kernel-update management planned around uptime — so maintenance doesn\'t become an outage.',
  },
]

export const toolkit = [
  { label: 'Languages', items: ['Python', 'JavaScript / TypeScript', 'PHP', 'Dart'] },
  { label: 'Frameworks', items: ['Django', 'FastAPI', 'React', 'Vue / Quasar', 'Flutter', 'Wagtail'] },
  { label: 'Infrastructure', items: ['Docker', 'Google Cloud Run', 'Nginx', 'Apache', 'Linux / Ubuntu', 'Fail2ban'] },
  { label: 'Data', items: ['MySQL', 'Supabase / PostgreSQL'] },
  { label: 'Observability', items: ['Prometheus', 'Grafana', 'Loki'] },
  { label: 'Integrations', items: ['Stripe', 'Firebase', 'Twilio', 'SMTP', 'REST APIs', 'Webhooks'] },
  { label: 'Tooling', items: ['Git / GitHub', 'Codemagic CI/CD', 'Bash'] },
]

export const radar = [
  { axis: 'DevOps',    value: 92 },
  { axis: 'Backend',   value: 82 },
  { axis: 'Frontend',  value: 78 },
  { axis: 'Mobile',    value: 80 },
  { axis: 'Security',  value: 75 },
]

export const principles = [
  { h: 'Own the whole lifecycle', p: 'Code, deploy, monitor, fix. You get one person who sees the project from commit to production, not a relay race of hand-offs.' },
  { h: 'Leave it observable', p: 'I instrument what I build. When something does go wrong later, there are logs, metrics, and dashboards to find it fast — not silence.' },
  { h: 'No surprise outages', p: 'Maintenance, updates, and releases are planned around uptime. Changes are reversible, and I check that traffic actually lands where it should.' },
]
