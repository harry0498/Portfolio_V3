export default function About() {
  const today = new Date();
  const expStart = new Date(2020, 8, 20);
  const expYears = today.getFullYear() - expStart.getFullYear();
  const linuxStart = new Date(2017, 1, 1);
  const linuxYears = today.getFullYear() - linuxStart.getFullYear();

  return (
    <main>
      <h2 className="text-primary my-6">About_Me/</h2>
      <p>
        My name is <mark>Harry Jenkins</mark>. I am a <mark>Full Stack Developer</mark>{" "}
        with <mark>{expYears} years of experience</mark>. I discovered my passion for
        programming at the age of 14 when I started programming with Lua. Since then, I
        have constantly been improving my skills and learning new technologies. My strong
        interest in <mark>security</mark> and my value of <mark>privacy</mark> led me to
        study <mark>BSc Computer and Cyber Security</mark>, graduating with a{" "}
        <mark>first class with honours</mark>.
      </p>

      <p>
        I have extensive experience working in <mark>Linux-based environments</mark>, and
        it has been my operating system of choice for <mark>over {linuxYears} years</mark>
        . I use <mark>Linux</mark> daily, both professionally and personally, and I am
        highly proficient in its ecosystem.
      </p>

      <p>
        In my free time, I enjoy watching YouTube videos and movies, and 3D printing
        various projects, which allows me to combine creativity with technology. I am also
        studying <mark>Bahasa Indonesia</mark> and have a basic understanding of it.
      </p>
    </main>
  );
}
