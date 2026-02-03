import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import type { TProject } from "@/data/data";

export default function Project({ project }: { project: TProject }) {
  return (
    <div>
      <Image
        src={`/${project.img}`}
        alt={project.title}
        width={2000}
        height={2000}
        className="mb-8 rounded-2xl"
      />

      <div>
        <mark>{project.title}</mark> - {project.description}
      </div>

      <div className="flex flex-wrap flex-row gap-x-8 mt-8">
        {project.url && (
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-primary"
              style={{ width: "24px", height: "24px" }}
            />
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Website
            </Link>
          </div>
        )}
        {project.git && (
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-primary"
              style={{ width: "24px", height: "24px" }}
            />
            <Link href={project.git} target="_blank" rel="noopener noreferrer">
              View Code
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
