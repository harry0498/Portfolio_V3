import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import Navbar from '@/components/Navbar';
import Providers from './providers';
import { getData, getExperienceYears } from '@/data/data';

const fontMono = JetBrains_Mono({
	subsets: ['latin'],
});

const data = getData();
const experienceYears = getExperienceYears(data.careerStart);

export const metadata: Metadata = {
	title: data.name,
	description: `Hello, I am a ${data.jobTitle} with ${experienceYears} years of experience`,
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
