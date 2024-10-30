import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Tools from "@/components/shared/tools";

export default function Home() {
	return (
		<main className="px-4">
			{/* <ThemeToggle /> */}
			{/* <TracingBeam> */}
			<Hero />
			<Tools />
			{/* <TimelineDemo /> */}
			{/* <Timeline /> */}
			<Projects title="Built by me" filter="official" />

			{/* <Projects filter="official" /> */}
			{/* </TracingBeam> */}
		</main>
	);
}
