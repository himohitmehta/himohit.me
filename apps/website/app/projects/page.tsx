import React from "react";
import Projects from "@/components/home/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"A full list of what Mohit Mehta has built — from Saroh and AI-agent platforms to commerce engines, open-source tools and early experiments. Built with React, Next.js and TypeScript.",
	alternates: { canonical: "/projects" },
	openGraph: {
		title: "Projects · Mohit Mehta",
		description:
			"Everything Mohit Mehta has built, in one place — platforms, open-source tools and experiments.",
		url: "https://himohit.me/projects",
		type: "website",
	},
};

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
				<p className="eyebrow mb-5">All projects</p>
				<h1 className="display max-w-4xl text-balance text-[clamp(2rem,6vw,4.5rem)] text-ink">
					Everything I&apos;ve built,{" "}
					<span className="amber-grad">in one place.</span>
				</h1>
				<p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
					My current work comes first, then the products, open-source
					tools and early experiments that got me here. Some older ones
					are no longer online — those are marked.
				</p>
			</div>
			<Projects hideTitle feature gridClassName="mt-16" />
		</main>
	);
}
