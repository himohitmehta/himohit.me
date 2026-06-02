/*
  journey.ts — the narrative spine of himohit.me.
  All copy here is grounded in Mohit's real history:
  Unity/game-dev → freelance (Savimo) → startup (Hivepath) → Dattam Labs,
  with Saroh as the personal open-source flagship.
*/

export const founder = {
	name: "Mohit Mehta",
	roles: ["Builder", "Systems Designer", "Product Thinker", "Engineer"],
	location: "Remote",
	email: "mohit@himohit.me",
	links: {
		linkedin: "https://www.linkedin.com/in/himohitmehta",
		github: "https://github.com/himohitmehta",
		blog: "https://blogs.himohit.me",
	},
	now: {
		company: "Dattam Labs",
		title: "Software Engineer",
		since: "Feb 2025",
	},
};

/* ── Chapter 1 — hero ecosystem node labels ───────────────────── */
export const ecosystem = [
	"Saroh",
	"Dattam Labs",
	"Lattis.ai",
	"Bluecom",
	"Open Source",
	"Systems",
	"Next.js",
	"TypeScript",
	"Design",
	"Products",
];

/* ── Chapter 2 — The Story ────────────────────────────────────── */
export type StoryBeat = {
	year: string;
	kicker: string;
	title: string;
	body: string;
	cta?: { label: string; href: string };
	projects?: { name: string; note: string; href: string }[];
};

export const story: StoryBeat[] = [
	{
		year: "2020",
		kicker: "The beginning",
		title: "I started by building worlds — literally.",
		body: "Before the web, there was Unity. I spent nights composing scenes, lighting, cameras and timelines — learning that a believable world is really a system of small rules working together. That instinct never left me.",
		cta: { label: "Watch the early Unity work", href: "/videos" },
	},
	{
		year: "2020 – 2021",
		kicker: "Learning the craft",
		title: "Freelance taught me to ship for real people.",
		body: "At Savimo I built client sites end to end — React, Gatsby, Node, Firebase. Real deadlines, real users, real consequences. I learned that taste is worthless until it survives contact with production.",
	},
	{
		year: "2021 – 2024",
		kicker: "Scaling up",
		title: "Then I learned to build platforms, not pages.",
		body: "Across three years of startup work at Hivepath I helped ship real platforms end to end. I stopped thinking in screens and started thinking in architectures — systems other people build on top of.",
		projects: [
			{
				name: "Lattis.ai",
				note: "Platform OS for AI agents",
				href: "https://lattis.ai",
			},
			{
				name: "Bluecom",
				note: "Multi-channel commerce engine",
				href: "https://bluecom.ai",
			},
			{
				name: "Hivepath",
				note: "Professional networking platform",
				href: "https://hivepath.io",
			},
			{
				name: "Calpad",
				note: "Scheduling platform",
				href: "https://calpad.vercel.app",
			},
			{
				name: "Zello",
				note: "Widget-sharing platform",
				href: "https://zello.live",
			},
		],
	},
	{
		year: "2025 → now",
		kicker: "What I'm building today",
		title: "Now I build the systems products grow inside.",
		body: "By day I engineer at Dattam Labs, shipping production software against real scale. By night I build Saroh in the open — my own platform for creators. One idea drives both: leverage. Tools and systems that make the next thing easier to build, for me and everyone after me.",
	},
];

/* ── Chapter 3 — Selected Work (case studies) ─────────────────── */
export type CaseStudy = {
	id: string;
	name: string;
	tag: string;
	year: string;
	image: string;
	link: string;
	challenge: string;
	vision: string;
	system: string;
	impact: string;
	stack: string[];
};

export const caseStudies: CaseStudy[] = [
	{
		id: "saroh",
		name: "Saroh",
		tag: "Building now · an operating system for creators",
		year: "2023 → now",
		image: "/images/saroh.png",
		link: "https://saroh.in",
		challenge:
			"Every creator duct-tapes five tools together just to sell, write and show their work. The presence is fragmented, the data is rented, and nothing compounds.",
		vision:
			"One platform where a creator's entire presence lives — storefront, portfolio and blog as a single, owned system. Built in the open, on my own terms.",
		system:
			"A full-stack platform I architect end to end: Next.js, Prisma and MySQL, NextAuth, in a Turborepo — designed so every surface reinforces the others instead of fragmenting.",
		impact:
			"My flagship and the clearest proof of how I build — architect, designer and first user at once, shipping in public.",
		stack: ["nextjs", "react", "typescript", "tailwindcss", "prisma", "mysql"],
	},
	{
		id: "lattis",
		name: "Lattis.ai",
		tag: "Platform OS for AI agents",
		year: "2023 – 2024",
		image: "/images/lattis.png",
		link: "https://lattis.ai",
		challenge:
			"Teams wanted to deploy AI agents, but there was no operating layer to run, observe and control them. Everything was glue code and dashboards stitched by hand.",
		vision:
			"An operating system where agents are first-class citizens — created, orchestrated and monitored from one surface, the way an OS manages processes.",
		system:
			"I built the platform's front end: multi-tenant dashboards, real-time agent state, and orchestration UI — on a Next.js + Redux-Saga + Turborepo architecture built to scale.",
		impact:
			"Turned a pile of scripts into a product surface — a coherent control plane teams could actually reason about and ship on.",
		stack: ["nextjs", "react", "typescript", "tailwindcss", "redux-saga", "turbo"],
	},
	{
		id: "bluecom",
		name: "Bluecom",
		tag: "Multi-channel commerce engine",
		year: "2023",
		image: "/images/bluecom.png",
		link: "https://bluecom.ai",
		challenge:
			"Sellers ran their business across many channels with no single control plane — inventory, orders and listings drifting out of sync everywhere.",
		vision:
			"One commerce brain. A single source of truth that speaks to every channel a seller touches.",
		system:
			"I built core front-end systems for catalog, orders and channel sync — React, Next.js and Redux-Saga handling real, messy, high-volume commerce state.",
		impact:
			"Gave multi-channel sellers one surface to run from, instead of a browser full of tabs and spreadsheets.",
		stack: ["nextjs", "react", "typescript", "redux-saga", "turbo"],
	},
];

/* ── Chapter 4 — Thinking Process (lenses / principles) ───────── */
export type Lens = {
	id: string;
	label: string;
	title: string;
	body: string;
};

export const lenses: Lens[] = [
	{
		id: "systems",
		label: "Systems",
		title: "Build systems, not features.",
		body: "A feature solves today. A system keeps solving. I design for the second, third and tenth thing you'll ask for — not just the first.",
	},
	{
		id: "design",
		label: "Design",
		title: "Design is how it works.",
		body: "The interface is the argument. If a product is hard to explain, it's usually badly designed — not badly marketed.",
	},
	{
		id: "products",
		label: "Products",
		title: "A product is a point of view.",
		body: "Every product is an opinion about how the world should work. The strong ones commit to that opinion instead of averaging it away.",
	},
	{
		id: "technology",
		label: "Technology",
		title: "Technology is leverage.",
		body: "The point of good tooling isn't speed — it's compounding. The right abstraction makes every future build cheaper.",
	},
	{
		id: "business",
		label: "Business",
		title: "Distribution is a feature.",
		body: "How a thing reaches people is part of the design, not an afterthought bolted on once it's 'done'.",
	},
	{
		id: "creativity",
		label: "Creativity",
		title: "Ship to learn.",
		body: "Taste develops in public. I'd rather build in the open, be wrong fast, and let real use sharpen the idea.",
	},
];

/* ── Chapter 5 — Current Focus (living roadmap) ───────────────── */
export type FocusItem = {
	state: "shipping" | "building" | "exploring";
	title: string;
	body: string;
};

export const currentFocus: FocusItem[] = [
	{
		state: "building",
		title: "Saroh — my creator platform",
		body: "My main focus: turning storefront, portfolio and blog into one owned system creators actually run on. Built full-stack, in the open, shipping in public.",
	},
	{
		state: "shipping",
		title: "Engineering at Dattam Labs",
		body: "My current role — shipping production software with a team and proving my systems thinking against real-world scale every day.",
	},
	{
		state: "exploring",
		title: "AI-native product surfaces",
		body: "Carrying everything I learned building agent platforms into how humans and AI should actually share an interface.",
	},
];

/* ── Chapter 6 — Future Vision ────────────────────────────────── */
export type Horizon = {
	span: string;
	title: string;
	body: string;
};

export const horizons: Horizon[] = [
	{
		span: "1 year",
		title: "Put Saroh in the hands of real creators.",
		body: "Take the open-source flagship from in-progress to in-use — and go deep on AI-native product surfaces.",
	},
	{
		span: "5 years",
		title: "Build a small studio that ships opinionated products.",
		body: "A tight team making platform-grade tools — things with a clear point of view that other builders choose to stand on.",
	},
	{
		span: "10 years",
		title: "Build systems that compound.",
		body: "Infrastructure and companies that outlive any single product — the kind of foundations other people get to build their own worlds on.",
	},
];
