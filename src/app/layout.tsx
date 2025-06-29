import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import Navbar from '@/components/Navbar';
import Providers from './providers';

const fontMono = JetBrains_Mono({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Harry Jenkins',
	description: 'Hello, I am a Full Stack Developer with 4 years of experience',
	icons: {
		icon: '/favicon.svg',
	},
};

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
