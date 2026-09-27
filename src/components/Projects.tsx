import { getProjects } from "@/data/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <div>
          <h2 id="projects-heading">
            Projects<span aria-hidden="true">/</span>
          </h2>
        </div>
        <p>Tools I’ve built for practical problems.</p>
      </div>
      <div className="project-list">
        {getProjects().map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
