import { ThemeToggle } from "@/components/ThemeToggle";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Timeline from "@/components/home/timeline";
import { Navbar } from "@/components/shared/navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
	return (
		<main className="px-4">
			{/* <ThemeToggle /> */}
			<Navbar className="top-2" />
			{/* <TracingBeam> */}
			<Hero />
			<Timeline />
			<Projects />
			{/* </TracingBeam> */}
		</main>
	);
}
