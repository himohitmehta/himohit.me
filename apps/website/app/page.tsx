import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Timeline from "@/components/home/timeline";
import Tools from "@/components/shared/tools";

export default function Home() {
	return (
		<main className="px-4">
			{/* <ThemeToggle /> */}
			{/* <TracingBeam> */}
			<Hero />
			<Tools />
			<Timeline />
			{/* <Projects filter="official" /> */}
			{/* </TracingBeam> */}
		</main>
	);
}
