import Link from "next/link";
import type { Metadata } from "next";
import { workGroups } from "@/lib/data/work";
import { availability } from "@/lib/data/variants";

export const metadata: Metadata = {
	title: "Work",
	description:
		"What Mohit Mehta has worked on: Saroh, plus what he shipped at Dattam Labs and Hivepath. React, Next.js and TypeScript.",
	alternates: { canonical: "/projects" },
	openGraph: {
		title: "Work · Mohit Mehta",
		description:
			"Saroh, plus what Mohit Mehta shipped at Dattam Labs and Hivepath.",
		url: "https://himohit.me/projects",
		type: "website",
		/* A child openGraph block replaces the parent's outright, so the
		   site card has to be restated or this page shares with no image. */
		images: ["/opengraph-image"],
	},
};

export default function ProjectsPage() {
	return (
		<main className="page pb-20 pt-16 lg:pt-20">
			<div className="max-w-3xl">
				<h1 className="text-[clamp(1.4rem,3.4vw,2.1rem)] font-bold leading-[1.34] tracking-[-0.02em] text-ink">
					Saroh is what I build now; the rest is what I shipped for
					the{" "}
					<span className="bg-amber px-2 text-[hsl(var(--fg))]">
						companies I worked at
					</span>
					.
				</h1>
			</div>

			<div className="mt-14 flex flex-col text-[13px]">
				<div className="row border-t-line-strong text-ink-faint">
					<span>where</span>
					<span>what</span>
				</div>

				{workGroups.map((group) => (
					<div key={group.id} className="row">
						<span className="text-ink-faint">{group.label}</span>
						<span className="flex flex-col gap-1.5">
							{group.name && (
								<span className="font-medium text-ink">
									{group.name}
								</span>
							)}
							{group.body.map((para, i) => (
								<span
									key={i}
									className="leading-[1.75] text-ink-dim"
								>
									{para}
								</span>
							))}
							{group.links && (
								<span className="mt-2 flex flex-wrap gap-6">
									{group.links.map((l) => (
										<a
											key={l.href}
											href={l.href}
											target="_blank"
											rel="noopener noreferrer"
											className="tap text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
										>
											{l.label}
										</a>
									))}
								</span>
							)}
						</span>
					</div>
				))}
				<div className="border-t border-line-strong" />
			</div>

			<div className="mt-12 flex flex-col gap-4 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
				<span>{availability}</span>
				<Link
					href="/about"
					className="tap underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
				>
					the longer version →
				</Link>
			</div>
		</main>
	);
}
