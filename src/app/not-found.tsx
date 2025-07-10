import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex flex-col text-center w-[90%] place-self-center my-16">
			<h1>
				<mark>404 - Page Not Found</mark>
			</h1>
			<p>The page you are looking for could not be found.</p>
			<p>
				<Link href="/">Click Here</Link> to return.
			</p>
		</main>
	);
}
