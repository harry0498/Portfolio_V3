import ThemeToggle from './ThemeToggle';

export default function Navbar() {
	return (
		<nav className="p-4 sticky top-0 bg-background flex">
			<h3 className="text-secondary grow">
				<mark>harry@jenkins</mark> ~/Portfolio $
			</h3>
			<ThemeToggle />
		</nav>
	);
}
