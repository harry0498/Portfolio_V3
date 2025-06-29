import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
	return (
		<main className="flex flex-col text-center md:text-left w-[90%] md:w-[80%] xl:w-[70%] place-self-center space-y-16 my-16">
			<Header />
			<Skills />
			<Projects />
			<About />
			<Footer />
		</main>
	);
}
