import { Reveal } from './common.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow hr-eyebrow">About</span>
        </Reveal>
        <div className="about-grid" style={{ marginTop: '18px' }}>
          <Reveal>
            <div>
              <p className="about-lead">Hi, I'm Eizel.</p>
              <p className="about-body">
                For the last few years I've kept a busy online-school platform alive — the servers,
                the deploys, the dashboards — while also building the apps and APIs that run on top
                of it. I like work where I own the whole
                thing: not just writing a feature, but making sure it ships, stays up, and can be
                fixed fast when it doesn't. Most of what I do happens quietly in the background, so
                the people using the product never have to think about any of it.
              </p>
              <p className="about-client">
                <b>For you, that means</b> one accountable person from first commit to production —
                and far fewer things falling through the cracks between "built" and "running."
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="story">
              <span className="tag">// a recent one</span>
              <p>
                A site I look after suddenly stopped picking up new code — every deploy reported
                "success," but nothing actually changed. After a fair bit of digging, I found the
                traffic was still pinned to an old server revision, so all the new ones sat there
                serving nobody.
              </p>
              <p>
                I repointed it, confirmed it was actually live, and wrote the fix down so the next
                person wouldn't lose an evening to the same thing.
                That's the kind of problem I quietly enjoy: the unglamorous one that keeps everything
                else honest.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
