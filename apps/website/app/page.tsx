import { ThemeToggle } from "@/components/ThemeToggle";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Timeline from "@/components/home/timeline";


export default function Home() {
	return (
		<main className="px-4">
			<ThemeToggle />
			<Hero />
			<Timeline />
			<Projects />
		</main>
	);
}
