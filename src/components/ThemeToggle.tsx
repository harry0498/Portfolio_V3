'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return;
	}

	return (
		<div
			id="theme-selector"
			onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
		>
			{resolvedTheme === 'dark' ? (
				<FontAwesomeIcon icon={faMoon} className="text-primary" />
			) : (
				<FontAwesomeIcon icon={faSun} className="text-primary" />
			)}
		</div>
	);
}
