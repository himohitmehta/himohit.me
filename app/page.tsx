import { ThemeToggle } from "@/components/ThemeToggle";
import Hero from "@/components/home/hero";
import Timeline from "@/components/home/timeline";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<ThemeToggle />
			<Hero />
			<Timeline />
		</main>
	);
}
