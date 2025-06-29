export default function Header() {
  const today = new Date();
  const expStart = new Date(2020, 8, 20);
  const expYears = today.getFullYear() - expStart.getFullYear();

  return (
    <header>
      <h1>
        <mark>Hello</mark>,<br />I am a <mark>Full Stack Developer</mark>
        <br />
        with <mark>{expYears} years of experience</mark>
      </h1>
    </header>
  );
}
