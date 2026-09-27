import { getData } from "@/data/data";

export default function About() {
  const data = getData();
  return (
    <section
      id="about"
      className="section about"
      aria-labelledby="about-heading"
    >
      <div>
        <h2 id="about-heading">
          About_Me<span aria-hidden="true">/</span>
        </h2>
      </div>
      <div className="about-copy">
        <p>
          I’m {data.name}, a {data.jobTitle} with a platform and full-stack
          focus. I started programming in Lua at 14 and have worked in software
          engineering since {data.careerStart.slice(0, 4)}.
        </p>
        <p>
          Linux has been my daily driver since {data.linuxStart.slice(0, 4)},
          both personally and professionally. An interest in security and
          privacy led me to a BSc in Computer and Cyber Security, graduating
          with first-class honours.
        </p>
        <p>
          Away from the terminal, I’m usually watching YouTube or a film,
          working on a 3D printing project, or learning Bahasa Indonesia.
        </p>
        <a className="text-link" href={data.github}>
          Find me on GitHub
        </a>
      </div>
    </section>
  );
}
