/*
  journey.ts — the narrative spine of himohit.me.
  All copy here is grounded in Mohit's real history:
  Unity/game-dev → freelance (Savimo) → startup (Hivepath) → Dattam Labs,
  with Saroh as the personal flagship.
*/

export const founder = {
	name: "Mohit Mehta",
	roles: ["Senior Software Engineer", "React", "Next.js", "TypeScript"],
	location: "Remote",
	email: "mohit@himohit.me",
	links: {
		linkedin: "https://www.linkedin.com/in/himohitmehta",
		github: "https://github.com/himohitmehta",
		blog: "https://blogs.himohit.me",
	},
	now: {
		focus: "Saroh",
		title: "Senior Software Engineer",
		since: "2023",
	},
	previous: {
		company: "Dattam Labs",
		title: "Software Engineer",
		period: "Feb 2025 – Aug 2026",
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
	"Frontend",
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
		title: "Games came before websites.",
		body: "Before the web I made games in Unity. Nights spent on scenes, lighting and animation, learning how a lot of small parts add up to something that feels real. I still think about building that way.",
	},
	{
		year: "2020 – 2021",
		kicker: "Learning the craft",
		title: "Freelancing, where the deadlines were real.",
		body: "At Savimo I built client sites end to end with React, Gatsby, Node and Firebase. Small projects, but I owned all of them, including the phone call when something broke on a Sunday.",
	},
	{
		year: "2021 – 2024",
		kicker: "Scaling up",
		title: "Three years at Hivepath.",
		body: "Lead frontend on the company's own products. I owned a large part of the front end of a multi-channel commerce platform: products, inventory, warehouses, vendors, purchase orders, onboarding and billing. That is also where I migrated an existing frontend from Create React App to Next.js and Turborepo, and built the chatbot frontend and the flow customers used to embed it.",
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
		year: "2025 – 2026",
		kicker: "Building at scale",
		title: "Then a product studio.",
		body: "Senior Software Engineer at Dattam Labs across AI, climate-data, SaaS and mobile products. I led frontend on CRAVIS, owned a climate-data dashboard's frontend, built an MCP integration for an internal knowledge system, and worked on subscription gating and order and payment flows in a SaaS product.",
	},
];

/* ── Chapter 3 — What I'm deep in (the specialism) ────────────── */
export type CraftItem = {
	id: string;
	title: string;
	body: string;
};

export const craftIntro: string[] = [
	"The work I like is unglamorous. Checkout flows. Billing screens. Dashboards holding more data than fits on a screen, and editors that someone non-technical has to use without being frightened of them.",
	"I'm comfortable on the other side of the API too: API and integration work in NestJS, and the CI and deploys behind several products. When a frontend problem turns out to be a backend problem, I can keep going.",
];

export const craft: CraftItem[] = [
	{
		id: "architecture",
		title: "Component architecture and shared systems.",
		body: "I've worked on reusable UI and application structures used across different parts of a product. You find out pretty quickly whether an abstraction is actually useful once other code depends on it.",
	},
	{
		id: "state",
		title: "Knowing where state belongs.",
		body: "Server data, shareable view state and local state are three different problems. Most of the mess I've cleaned up came from code that treated them as one.",
	},
	{
		id: "migration",
		title: "Changing the architecture without rebuilding the product.",
		body: "I've migrated an existing frontend from Create React App to Next.js and Turborepo, reorganising it around shared code without treating the product as a ground-up rewrite.",
	},
	{
		id: "performance",
		title: "Making the product feel lighter, not just score better.",
		body: "Bundle size, lazy loading, page weight, rendering and state all affect what the user feels. I prefer fixing the underlying problem over chasing a number in a report.",
	},
];

/* ── Chapter 4 — Selected Work (case studies) ─────────────────── */
export type CaseStudy = {
	id: string;
	name: string;
	tag: string;
	year: string;
	image: string;
	/* Extra product shots, rendered as a strip under the main visual. */
	gallery?: { src: string; alt: string }[];
	link: string;
	/* Public source repo, when there is one. */
	repo?: string;
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
		tag: "Personal project · small-business commerce, in progress",
		year: "2023 → now",
		image: "/images/saroh/home.png",
		gallery: [
			{
				src: "/images/saroh/modules.png",
				alt: "Saroh's Modules screen, showing which capabilities are switched on and which still need setup",
			},
			{
				src: "/images/saroh/leads.png",
				alt: "The CRM leads list, with each opportunity's value and how long it has waited",
			},
			{
				src: "/images/saroh/bookings.png",
				alt: "The appointments schedule, showing upcoming bookings in the timezone each was booked in",
			},
		],
		link: "https://saroh.in",
		repo: "https://github.com/saroh-labs/saroh.in",
		challenge:
			"A small business ends up on five or six tools that don't talk to each other. Website in one place, bookings in another, payments somewhere else, and customer records spread across all of them.",
		vision:
			"Somewhere to try out architecture, technologies and product decisions without somebody else setting the constraints. Today it covers parts of a small-business commerce system.",
		system:
			"I build all of it: design, frontend, backend. Next.js, Prisma and Postgres across a monorepo of ten apps and eight shared packages. Eight modules with clean dependencies between them: website, commerce, appointments, CRM, payments, communications, automations and insights. The home screen ranks your work by what needs attention, then what's overdue, then what's left to set up, rather than showing a wall of equal tiles.",
		impact:
			"Free to start, source-available under Elastic License 2.0. Businesses come off the waitlist in small batches so each one gets set up properly.",
		stack: [
			"nextjs",
			"react",
			"typescript",
			"tailwindcss",
			"prisma",
			"postgresql",
		],
	},
];

/* ── Thinking Process — cut from the page; kept in case it comes back ─ */
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
		title: "Build for the long run.",
		body: "A quick fix solves today's problem. A good system keeps solving it. I build with the next ten things you'll need in mind, not just the first one.",
	},
	{
		id: "craft",
		label: "Craft",
		title: "The details decide how it feels.",
		body: "A product is only as good as it feels to use. I sweat the small things in the build — smooth interactions, fast load times, nothing janky — because that's what people actually notice.",
	},
	{
		id: "products",
		label: "Products",
		title: "A great product takes a stand.",
		body: "Every product is a choice about how things should work. The best ones commit to a clear point of view instead of trying to please everyone.",
	},
	{
		id: "technology",
		label: "Technology",
		title: "Good tools pay off over time.",
		body: "The point of good tools isn't just going faster today. It's that the right foundation makes everything you build after it easier.",
	},
	{
		id: "business",
		label: "Business",
		title: "Getting it to people matters too.",
		body: "How a product reaches people is part of building it — not something you figure out only after it's finished.",
	},
	{
		id: "creativity",
		label: "Creativity",
		title: "Ship early, then improve.",
		body: "You learn the most once real people use your work. I'd rather put something out early, see what's wrong, and make it better from there.",
	},
];

/* ── Chapter 5 — Current Focus (living roadmap) ───────────────── */
export type FocusItem = {
	state: "shipping" | "building" | "exploring";
	title: string;
	/* One entry per paragraph. */
	body: string[];
	link?: { label: string; href: string };
};

export const currentFocus: FocusItem[] = [
	{
		state: "building",
		title: "Saroh, a personal engineering project",
		body: [
			"A personal project, built in my own time. Today it covers parts of a small-business system: website, products, posts, orders and team management. I own the product and engineering direction end to end.",
			"Two decisions I'd defend. The first: only the API touches the database. Every frontend is a thin client, so there's one place to change how data gets written. It didn't start that way. Database access had spread across five apps over two years, and pulling it back out took seven steps.",
			"The second: checkout is idempotent, so a dropped connection and a retry can't charge someone twice. Stock is held while someone checks out, then committed or released. Two people can't buy the last one.",
		],
		link: {
			label: "Read the code",
			href: "https://github.com/saroh-labs/saroh.in",
		},
	},
	{
		state: "exploring",
		title: "Open to what comes next",
		body: [
			"I was at Dattam Labs from February 2025 to August 2026, shipping with a team at real scale. That's finished now.",
			"I'm looking for senior or staff frontend work on products where the system is the hard part. Remote, or hybrid.",
			"If you want to know whether I'd be useful, read Saroh's code.",
		],
	},
];

/* ── Future Vision — hidden from the page ─────────────────────── */
export type Horizon = {
	span: string;
	title: string;
	body: string;
};

export const horizons: Horizon[] = [
	{
		span: "1 year",
		title: "Get Saroh into real businesses' hands.",
		body: "Take it from a waitlist to something businesses run on every day — and keep learning how to build well with AI.",
	},
	{
		span: "5 years",
		title: "Start a small studio that builds great products.",
		body: "A small team making tools with a clear point of view — the kind other builders are happy to rely on.",
	},
	{
		span: "10 years",
		title: "Build things that last.",
		body: "Tools and a company that outlive any single product — the kind of foundation other people can build their own work on.",
	},
];
