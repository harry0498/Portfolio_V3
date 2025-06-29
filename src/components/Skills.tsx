import { getSkills } from '@/data/data';
import Skill from './Skill';

export default async function Skills() {
	const skills = getSkills();

	return (
		<div>
			<h2 className="text-primary my-6">Skills/</h2>
			<div className="flex flex-wrap flex-row grow gap-8 items-start justify-start">
				{skills.map((skill) => (
					<div
						key={skill.category}
						className="w-fit flex-auto basis-full sm:basis-1/3 md:basis-auto"
					>
						<h3 className="text-accent text-nowrap my-4">{skill.category}</h3>
						{skill.skills.map((s: string) => (
							<Skill key={s} skill={s} />
						))}
					</div>
				))}
			</div>
		</div>
	);
}
