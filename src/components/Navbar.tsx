import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="site-nav">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a
          href="/"
          className="wordmark"
          aria-label="harry@portfolio:~$, Harry Jenkins home"
          translate="no"
        >
          harry<span>@</span>portfolio<span>:~$</span>
        </a>
        <div className="nav-links">
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
