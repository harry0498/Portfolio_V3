import data from '@/data/data.json';

export function getData() {
	return data;
}

export function getSkills(): TSkill[] {
	return Object.entries(data.skills).map(([category, skills]) => ({
		category,
		skills: skills as string[],
	}));
}

export function getProjects(): TProject[] {
	return data.projects;
}

export function getExperienceYears(date: string): number {
	const start = new Date(date);
	const today = new Date();

	return today.getFullYear() - start.getFullYear();
}

export type TProject = (typeof data.projects)[number];
export type TSkill = {
	category: string;
	skills: string[];
};
