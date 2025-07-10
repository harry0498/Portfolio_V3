import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import Navbar from '@/components/Navbar';
import Providers from './providers';
import { getData } from '@/data/data';

const fontMono = JetBrains_Mono({
	subsets: ['latin'],
});

export function generateMetadata() {
	const data = getData();

	return {
		title: data.name,
		description: `Hello, I am a ${data.jobTitle}. Passionate about web development, Linux, and security.`,
		icons: {
			icon: '/favicon.svg',
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${fontMono.className} antialiased`} suppressHydrationWarning>
			<body>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
