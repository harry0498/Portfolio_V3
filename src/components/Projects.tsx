import { getProjects } from '@/data/data';
import Project from './Project';

export default function Projects() {
	const projects = getProjects();

	return (
		<div>
			<h2 className="text-primary my-6">Projects/</h2>
			<div className="flex flex-wrap flex-row grow gap-8 items-start justify-start">
				{projects.map((project) => (
					<Project key={project.title} project={project} />
				))}
			</div>
		</div>
	);
}
