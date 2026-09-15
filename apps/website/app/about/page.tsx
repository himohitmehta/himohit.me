import Link from "next/link";
import type { Metadata } from "next";
import { founder } from "@/lib/data/journey";
import { availability, saroh } from "@/lib/data/variants";

export const metadata: Metadata = {
	title: "About",
	description:
		"How Mohit Mehta got from games built in Unity to commerce and billing systems, and to Saroh — one system to run a business, built in his own time.",
	alternates: { canonical: "/about" },
	openGraph: {
		title: "About · Mohit Mehta",
		description:
			"From games built in Unity to commerce and billing systems, and to Saroh — how Mohit Mehta got here.",
		url: "https://himohit.me/about",
		type: "profile",
		/* A child openGraph block replaces the parent's outright, so the
		   site card has to be restated or this page shares with no image. */
		images: ["/opengraph-image"],
	},
};

/*
  Dates only. What I actually shipped at Dattam Labs and Hivepath is on
  /projects — repeating it here just made a visitor read the same three
  employers twice. The early years stay because they are not on that
  page, and Saroh stays because it is the one thing worth meeting twice.
*/
const dates = [
	{
		when: "2023→",
		what: "Saroh",
		note: "One system to run a business, in my own time.",
	},
	{
		when: "2025–26",
		what: "Dattam Labs",
		note: "Client work, at a studio that builds for other people.",
	},
	{
		when: "2021–24",
		what: "Hivepath",
		note: "Three years, mostly on one commerce platform.",
	},
	{
		when: "2020–21",
		what: "Freelance",
		note: "Client sites end to end, on my own.",
	},
	{
		when: "2020",
		what: "Making games",
		note: "Unity, before I built for the web.",
	},
];

export default function AboutPage() {
	return (
		<main className="page pb-20 pt-16 lg:pt-20">
			<div className="max-w-3xl">
				<h1 className="text-[clamp(1.4rem,3.4vw,2.1rem)] font-bold leading-[1.34] tracking-[-0.02em] text-ink">
					I started in a game engine and ended up in{" "}
					<span className="bg-amber px-2 text-[hsl(var(--fg))]">
						billing systems
					</span>
					.
				</h1>
			</div>

			<div className="mt-9 flex max-w-2xl flex-col gap-5 text-[13px] leading-[1.85] text-ink-dim">
				<p>
					Game engines are an odd way into web development, and a
					useful one. You learn early that a thing only feels real
					when a lot of small parts agree with each other, and that
					most of the work sits in the parts nobody is meant to
					notice.
				</p>
				<p>
					Since then it has mostly been products where being wrong is
					expensive — commerce, billing, internal tools people sit in
					all day. I like that kind of work. When a checkout charges
					someone twice or a dashboard shows a number that is a day
					old, nobody has to be persuaded that it matters.
				</p>
				<p>
					Some of that has been mobile. I shipped native Android in
					Kotlin early on, then spent longer in React Native, on an
					app where the same screens had to serve three kinds of user
					and keep working on phones that were not new.
				</p>
				<p>
					I build{" "}
					<a
						href={saroh.href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
					>
						Saroh
					</a>{" "}
					in my own time — website, commerce, appointments and CRM in
					one system. It is the only thing I have built where every
					decision is mine, design through to deploys, which is also
					the only reliable way to find out which of your habits were
					any good. The code is public.
				</p>
			</div>

			<div className="mt-14 flex flex-col text-[13px]">
				<div className="row border-t-line-strong text-ink-faint">
					<span>when</span>
					<span>where</span>
				</div>
				{dates.map((d) => (
					<div key={d.what} className="row">
						<span className="text-ink-faint">{d.when}</span>
						<span className="flex flex-col gap-1 sm:flex-row sm:gap-4">
							<span className="font-medium text-ink sm:w-40 sm:shrink-0">
								{d.what}
							</span>
							<span className="leading-[1.75] text-ink-dim">
								{d.note}
							</span>
						</span>
					</div>
				))}
				<div className="border-t border-line-strong" />
			</div>

			<p className="mt-6 text-xs text-ink-muted">
				What I actually shipped at each is on the{" "}
				<Link
					href="/projects"
					className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
				>
					work page
				</Link>
				.
			</p>

			<div className="mt-12 flex flex-col gap-4 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
				<span>{availability}</span>
				<div className="flex flex-wrap gap-6">
					<a
						href={founder.links.github}
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
