import { getData, getExperienceYears } from '@/data/data';

export default function Header() {
	const { careerStart, ...data } = getData();

	const expYears = getExperienceYears(careerStart);

	return (
		<header>
			<h1>
				<mark>Hello</mark>,<br />I am a <mark>{data.jobTitle}</mark>
				<br />
				with <mark>{expYears} years of experience</mark>
			</h1>
		</header>
	);
}
