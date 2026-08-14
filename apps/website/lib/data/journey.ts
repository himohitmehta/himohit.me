/*
  journey.ts — the narrative spine of himohit.me.
  All copy here is grounded in Mohit's real history:
  Unity/game-dev → freelance (Savimo) → startup (Hivepath) → Dattam Labs,
  with Saroh as the personal flagship.
*/

export const founder = {
	name: "Mohit Mehta",
	roles: ["Software Engineer", "Frontend Developer", "Product Builder"],
	location: "Remote",
	email: "mohit@himohit.me",
	links: {
		linkedin: "https://www.linkedin.com/in/himohitmehta",
		github: "https://github.com/himohitmehta",
		blog: "https://blogs.himohit.me",
	},
	now: {
		focus: "Saroh",
		title: "Software Engineer",
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
		title: "I started by building worlds — literally.",
		body: "Before the web, I made games in Unity. I spent my nights working on scenes, lighting, cameras and animation — and learned how lots of small parts come together to make one thing feel real. That way of thinking has stayed with me ever since.",
		cta: { label: "Watch the early Unity work", href: "/videos" },
	},
	{
		year: "2020 – 2021",
		kicker: "Learning the craft",
		title: "Freelancing taught me to build for real people.",
		body: "At Savimo I built websites for clients from start to finish, using React, Gatsby, Node and Firebase. Real deadlines and real users taught me what matters most: shipping work that actually holds up once people depend on it.",
	},
	{
		year: "2021 – 2024",
		kicker: "Scaling up",
		title: "Then I moved from building pages to building platforms.",
		body: "I spent three years at the startup Hivepath, helping ship full products from the ground up. I learned to think beyond single screens and build the systems behind them — the kind other people build on top of.",
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
		title: "I built products people rely on.",
		body: "At Dattam Labs I worked as a software engineer, building software used by real customers. A year and a half of shipping with a team, on systems that had to keep working once people depended on them every day.",
	},
];

/* ── Chapter 3 — Selected Work (case studies) ─────────────────── */
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
		tag: "Personal project · one system to run a business",
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
			"A small business ends up running on five or six tools that don't talk to each other — a website in one place, bookings in another, payments somewhere else, and customer records scattered across all of them.",
		vision:
			"Run your whole business from one place. Website, commerce, appointments and CRM in one system, where you switch on only the modules you need — and switch one off without losing anything behind it.",
		system:
			"I build all of it myself — the design, the frontend and the backend — with Next.js, Prisma and Postgres, across a monorepo of ten apps and eight shared packages. Eight modules that depend on each other cleanly: website, commerce, appointments, CRM, payments, communications, automations and insights. Home ranks your work by what needs attention, then what's overdue, then what's still to set up, instead of a dashboard of equal tiles.",
		impact:
			"Free to start, and source-available under the Elastic License 2.0, so anyone can read the code. Businesses are being onboarded from a waitlist in small batches, so each one gets set up properly.",
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
	body: string;
};

export const currentFocus: FocusItem[] = [
	{
		state: "building",
		title: "Saroh, one system to run a business",
		body: "A personal project I build in my own time — website, commerce, appointments and CRM in one system, where you turn on only the modules you need. I work on every part myself, from design to backend, using Claude and other AI tools to learn as I go. It's source-available, so anyone can read the code.",
	},
	{
		state: "exploring",
		title: "What comes after Dattam Labs",
		body: "I spent Feb 2025 to Aug 2026 as an engineer at Dattam Labs, shipping software with a team at real scale. That chapter is closed, and I'm working out which problem is worth the next one.",
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
