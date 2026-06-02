import React from "react";
import Projects from "@/components/home/projects";
import Link from "next/link";

export default function ProjectsPage() {
	return (
		<main className="chapter">
			<div className="shell">
				<Link
					href="/"
					className="eyebrow mb-10 inline-flex items-center gap-2 transition-colors hover:text-amber-bright"
				>
					<span>←</span> Back to the story
				</Link>
				<p className="eyebrow mb-5">The full archive</p>
				<h1 className="display max-w-4xl text-balance text-[clamp(2rem,6vw,4.5rem)] text-ink">
					Everything I&apos;ve built —{" "}
					<span className="amber-grad">games to platforms.</span>
				</h1>
				<p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
					What I&apos;m building now leads — followed by platform work,
					open-source tools and the early experiments that got me here.
					The complete record, in one place.
				</p>
			</div>
			<Projects hideTitle feature gridClassName="mt-16" />
		</main>
	);
}
