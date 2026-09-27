import Image, { type StaticImageData } from "next/image";
import type { TProject } from "@/data/data";
import clockworkImage from "../../public/clockwork.png";
import pkgmonImage from "../../public/pkgmon.png";

const projectImages: Record<string, StaticImageData> = {
  "clockwork.png": clockworkImage,
  "pkgmon.png": pkgmonImage,
};

export default function Project({ project }: { project: TProject }) {
  return (
    <article
      className="project"
      id={project.slug}
      aria-labelledby={`${project.slug}-heading`}
    >
      <div className="project-visual">
        <div className="project-file" aria-hidden="true">
          <span>~/projects/{project.slug}</span>
        </div>
        <a
          href={project.url || project.git}
          className="project-image-link"
          aria-label={`Explore ${project.title}`}
        >
          <Image
            src={projectImages[project.img]}
            alt={project.imageAlt}
            sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 760px) 560px, (max-width: 1200px) 50vw, 560px"
            className="project-image"
          />
        </a>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3 id={`${project.slug}-heading`}>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="tags" aria-label={`${project.title} technologies`}>
          {project.technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.url && (
            <a
              href={project.url}
              aria-label={`Visit website: ${project.title}`}
            >
              Visit website
            </a>
          )}
          {project.git && (
            <a
              href={project.git}
              aria-label={`View ${project.title} source code`}
            >
              Source code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
