import ChapterHero from "@/components/experience/chapter-hero";
import ChapterStory from "@/components/experience/chapter-story";
import ChapterWork from "@/components/experience/chapter-work";
import ChapterThinking from "@/components/experience/chapter-thinking";
import ChapterNow from "@/components/experience/chapter-now";
// import ChapterVision from "@/components/experience/chapter-vision";
import ChapterContact from "@/components/experience/chapter-contact";
import { founder } from "@/lib/data/journey";

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: founder.name,
	url: "https://himohit.me",
	jobTitle: "Software Engineer",
	worksFor: {
		"@type": "Organization",
		name: founder.now.focus,
		url: "https://saroh.in",
	},
	alumniOf: {
		"@type": "Organization",
		name: founder.previous.company,
	},
	knowsAbout: [
		"Software Engineering",
		"Frontend Development",
		"React",
		"Next.js",
		"TypeScript",
		"Full-stack Development",
	],
	sameAs: [founder.links.linkedin, founder.links.github, founder.links.blog],
};

export default function Home() {
	return (
		<main className="relative">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<ChapterHero />
			<ChapterStory />
			<ChapterWork />
			<ChapterThinking />
			<ChapterNow />
			{/* Future Vision — hidden for now; bring back when building something of my own. */}
			{/* <ChapterVision /> */}
			<ChapterContact />
		</main>
	);
}
