import { getData } from '@/data/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
	const data = getData();

	return (
		<nav className="p-4 sticky top-0 bg-background flex">
			<h3 className="text-secondary grow">
				<mark>{data.name.split(' ').join('@').toLowerCase()}</mark> ~/Portfolio $
			</h3>
			<ThemeToggle />
		</nav>
	);
}
