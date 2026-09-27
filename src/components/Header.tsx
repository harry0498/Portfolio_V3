import { getData } from "@/data/data";

export default function Header() {
  const data = getData();
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span aria-hidden="true">~/</span> Harry Jenkins
        </p>
        <h1>
          {data.jobTitle}
          <span className="cursor" aria-hidden="true">
            _
          </span>
        </h1>
        <p className="hero-focus">{data.focus}</p>
        <p className="hero-description">
          I work across Linux systems, deployment workflows, and web
          applications. A developer’s perspective, with a focus on the platform
          underneath.
        </p>
        <div className="actions">
          <a className="button button-primary" href="#projects">
            Explore my work
          </a>
          <a className="button button-secondary" href={`mailto:${data.email}`}>
            Get in touch
          </a>
        </div>
      </div>
      <aside className="terminal" aria-label="Profile at a glance">
        <div className="terminal-bar">
          <span className="terminal-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>harry@portfolio: ~</span>
        </div>
        <div className="terminal-body">
          <p className="terminal-command">
            <span aria-hidden="true">$ </span>whoami
          </p>
          <p className="terminal-name">{data.name}</p>
          <p className="terminal-output">DevOps engineer. Full-stack roots.</p>
          <p className="terminal-command">
            <span aria-hidden="true">$ </span>cat profile.conf
          </p>
          <dl className="profile-facts">
            <div>
              <dt>focus</dt>
              <dd>platform + full-stack</dd>
            </div>
            <div>
              <dt>environment</dt>
              <dd>Linux</dd>
            </div>
            <div>
              <dt>engineering</dt>
              <dd>since {data.careerStart.slice(0, 4)}</dd>
            </div>
            <div>
              <dt>linux_user</dt>
              <dd>since {data.linuxStart.slice(0, 4)}</dd>
            </div>
          </dl>
          <p className="terminal-prompt" aria-hidden="true">
            $ <span>▌</span>
          </p>
        </div>
      </aside>
    </header>
  );
}
