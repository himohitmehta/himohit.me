import Link from "next/link";
import type { Metadata } from "next";
import { founder } from "@/lib/data/journey";
import { availability, saroh } from "@/lib/data/variants";

export const metadata: Metadata = {
	title: "About",
	description:
		"Mohit Mehta is a senior software engineer. Games built in Unity, then client sites, then platform work at Hivepath and Dattam Labs — and Saroh, built in his own time.",
	alternates: { canonical: "/about" },
	openGraph: {
		title: "About · Mohit Mehta",
		description:
			"Games built in Unity, then client sites, then platform work at Hivepath and Dattam Labs — how Mohit Mehta got to building Saroh.",
		url: "https://himohit.me/about",
		type: "profile",
		/* A child openGraph block replaces the parent's outright, so the
		   site card has to be restated or this page shares with no image. */
		images: ["/opengraph-image"],
	},
};

/* The one place the fuller history lives — the landing page stays on
   qualities, this page carries the dates and the employers. */
const history = [
	{
		when: "2023→",
		what: "Saroh",
		body: "One system to run a business, built in my own time. Website, commerce, appointments and CRM, where you switch on only the modules you need. I do all of it: design, API, deploys. The code is public.",
	},
	{
		when: "2025–26",
		what: "Dattam Labs",
		body: "Frontend across a product studio's client work — data platforms, an internal knowledge system, two SaaS products. I owned subscriptions and entitlements across the backend and the front end, so the billing rules were as much mine as the screens.",
	},
	{
		when: "2021–24",
		what: "Hivepath",
		body: "Three years as lead frontend on the company's own products. I owned the front end of a multi-channel commerce platform: onboarding, inventory, purchase orders, billing.",
	},
	{
		when: "2020–21",
		what: "Freelance",
		body: "Client sites end to end with React, Gatsby, Node and Firebase. Small projects, but I owned all of them, including the phone call when something broke on a Sunday.",
	},
	{
		/* The column holds employers, so this row is named for the work
		   rather than the engine — "Unity" alone read as a job there. */
		when: "2020",
		what: "Making games",
		body: "I built games in Unity before I built for the web. Nights spent on scenes, lighting and animation, learning how a lot of small parts add up to something that feels real. I still think about building that way.",
	},
];

export default function AboutPage() {
	return (
		<main className="page pb-20 pt-16 lg:pt-20">
			<div className="max-w-3xl">
				<h1 className="text-[clamp(1.4rem,3.4vw,2.1rem)] font-bold leading-[1.34] tracking-[-0.02em] text-ink">
					I build the unglamorous half of a product — which is also
					the half that decides whether anyone{" "}
					<span className="bg-amber px-2 text-[hsl(var(--fg))]">
						trusts it
					</span>
					.
				</h1>
				<p className="mt-7 text-[13px] leading-[1.85] text-ink-dim">
					Six years of React, Next.js and TypeScript. What follows is
					the long version; the{" "}
					<Link
						href="/"
						className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						front page
					</Link>{" "}
					is the short one.
				</p>
			</div>

			<div className="mt-14 flex flex-col text-[13px]">
				<div className="row border-t-line-strong text-ink-faint">
					<span>when</span>
					<span>what</span>
				</div>
				{history.map((h) => (
					<div key={h.what} className="row">
						<span className="text-ink-faint">{h.when}</span>
						<span className="flex flex-col gap-1.5">
							<span className="font-medium text-ink">
								{h.what}
							</span>
							<span className="leading-[1.75] text-ink-dim">
								{h.body}
							</span>
						</span>
					</div>
				))}
				<div className="border-t border-line-strong" />
			</div>

			<div className="mt-12 flex flex-col gap-4 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
				<span>{availability}</span>
				<div className="flex flex-wrap gap-6">
					<a
						href={saroh.repo}
						target="_blank"
						rel="noopener noreferrer"
						className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						github
					</a>
					<a
						href={founder.links.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						linkedin
					</a>
					<Link
						href="mailto:mohit@himohit.me"
						className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						mohit@himohit.me
					</Link>
				</div>
			</div>
		</main>
	);
}
