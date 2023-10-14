import { ThemeToggle } from "@/components/ThemeToggle";
import Hero from "@/components/home/hero";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<ThemeToggle />
			<Hero title={`Hi I am a developer`} />
		</main>
	);
}
