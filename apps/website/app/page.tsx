import Link from "next/link";
import { craft, founder } from "@/lib/data/journey";
import { availability, saroh, variantIntro } from "@/lib/data/variants";

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: founder.name,
	url: "https://himohit.me",
	email: `mailto:${founder.email}`,
	jobTitle: "Senior Software Engineer",
	worksFor: {
		"@type": "Organization",
		name: founder.now.focus,
	},
	knowsAbout: [
		"React",
		"Next.js",
		"TypeScript",
		"Design Systems",
		"Component Architecture",
		"Web Accessibility",
	],
	sameAs: [founder.links.linkedin, founder.links.github, founder.links.blog],
};

/* Short tabular keys standing in for a dated column — the table lists
   qualities, not jobs, so the left column names the concern. */
const keys: Record<string, string> = {
	architecture: "systems",
	state: "state",
	migration: "change",
	accessibility: "access",
};

export default function Home() {
	return (
		<main className="page pb-20 pt-16 lg:pt-20">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>

			<div className="max-w-3xl">
				<h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.32] tracking-[-0.02em] text-ink">
					{variantIntro.headline[0]}{" "}
					<span className="bg-amber px-2 text-[hsl(var(--fg))]">
						actually go wrong
					</span>
					.
				</h1>
				<p className="mt-7 max-w-xl text-[13px] leading-[1.85] text-ink-dim">
					{variantIntro.scope} The work I like is unglamorous —
					checkout flows, billing screens, dashboards holding more
					data than fits on a screen.
				</p>
			</div>

			<div className="mt-14 flex flex-col text-[13px]">
				<div className="grid grid-cols-[5.5rem_1fr] gap-5 border-t border-line-strong py-3 text-ink-faint sm:grid-cols-[6.5rem_1fr]">
					<span>what</span>
					<span>how</span>
				</div>

				{craft.map((item) => (
					<div
						key={item.id}
						className="grid grid-cols-[5.5rem_1fr] gap-5 border-t border-line py-4 sm:grid-cols-[6.5rem_1fr]"
					>
						<span className="text-ink-faint">{keys[item.id]}</span>
						<span className="flex flex-col gap-1.5">
							<span className="font-medium text-ink">
								{item.title}
							</span>
							<span className="leading-[1.75] text-ink-dim">
								{item.body}
							</span>
						</span>
					</div>
				))}

				<div className="grid grid-cols-[5.5rem_1fr] gap-5 border-y border-line-strong py-4 sm:grid-cols-[6.5rem_1fr]">
					<span className="text-ink-faint">now</span>
					<span className="flex flex-col gap-1.5">
						<a
							href={saroh.href}
							target="_blank"
							rel="noopener noreferrer"
							className="tap w-fit font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
						>
							{saroh.name}
						</a>
						<span className="leading-[1.75] text-ink-dim">
							{saroh.line}
						</span>
					</span>
				</div>
			</div>

			<div className="mt-12 flex flex-col gap-4 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
				<span>{availability}</span>
				<div className="flex flex-wrap gap-6">
					<a
						href={founder.links.github}
						target="_blank"
						rel="noopener noreferrer"
						className="tap underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						github
					</a>
					<a
						href={founder.links.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="tap underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						linkedin
					</a>
					<Link
						href="mailto:mohit@himohit.me"
						className="tap underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						mohit@himohit.me
					</Link>
				</div>
			</div>
		</main>
	);
}
