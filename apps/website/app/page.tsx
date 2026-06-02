import ChapterHero from "@/components/experience/chapter-hero";
import ChapterStory from "@/components/experience/chapter-story";
import ChapterWork from "@/components/experience/chapter-work";
import ChapterThinking from "@/components/experience/chapter-thinking";
import ChapterNow from "@/components/experience/chapter-now";
// import ChapterVision from "@/components/experience/chapter-vision";
import ChapterContact from "@/components/experience/chapter-contact";

export default function Home() {
	return (
		<main className="relative">
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
