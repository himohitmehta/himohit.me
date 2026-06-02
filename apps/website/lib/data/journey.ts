/*
  journey.ts — the narrative spine of himohit.me.
  All copy here is grounded in Mohit's real history:
  Unity/game-dev → freelance (Savimo) → startup (Hivepath) → Dattam Labs,
  with Saroh as the personal open-source flagship.
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
		year: "2025 → now",
		kicker: "What I'm building today",
		title: "Today I build products people rely on.",
		body: "By day I'm a software engineer at Dattam Labs, building software used by real customers. In my own time I work on Saroh — my own platform for creators, where I do every part myself to keep learning and to own something end to end. It's open source, so others can learn from it too.",
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
		tag: "Personal project · a home base for creators",
		year: "2023 → now",
		image: "/images/saroh.png",
		link: "https://saroh.in",
		challenge:
			"Most creators juggle five different tools just to sell, write and show their work. Everything lives in a different place, and none of it really belongs to them.",
		vision:
			"One place a creator can call home — store, portfolio and blog together in a single tool they fully own. Built openly, for everyone to use.",
		system:
			"I build all of it myself — the design, the frontend and the backend — with Next.js, Prisma and MySQL. It's where I try new ideas and learn by doing every part, in my own time.",
		impact:
			"Saroh is the one I fully own: my decisions, my mistakes, mine to fix. I work on it whenever I get the time, in the open and as open source, so others can learn from it too.",
		stack: ["nextjs", "react", "typescript", "tailwindcss", "prisma", "mysql"],
	},
	{
		id: "lattis",
		name: "Lattis.ai",
		tag: "A platform to run AI agents",
		year: "2023 – 2024",
		image: "/images/lattis.png",
		link: "https://lattis.ai",
		challenge:
			"Teams wanted to use AI agents, but had no real way to run and keep an eye on them. It was all loose scripts and dashboards pieced together by hand.",
		vision:
			"One platform to create, run and watch AI agents — all from a single, clear screen, the way your computer manages the apps you open.",
		system:
			"I built the part people actually use: live dashboards that show what each agent is doing, on a setup with Next.js built to handle many teams at once.",
		impact:
			"Turned a messy pile of scripts into a real product — one place a team could understand what was happening and build on it.",
		stack: ["nextjs", "react", "typescript", "tailwindcss", "redux-saga", "turbo"],
	},
	{
		id: "bluecom",
		name: "Bluecom",
		tag: "Sell on every channel from one place",
		year: "2023",
		image: "/images/bluecom.png",
		link: "https://bluecom.ai",
		challenge:
			"Online sellers run their business across many places at once — and their stock, orders and listings keep falling out of sync across all of them.",
		vision:
			"One place to manage it all, so everything a seller has on every channel stays correct and up to date.",
		system:
			"I built the screens sellers use every day to manage products, orders and channels — keeping a lot of fast-moving data accurate and easy to work with.",
		impact:
			"Gave sellers a single place to run their whole business, instead of a browser full of tabs and spreadsheets.",
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
		title: "Saroh, my platform for creators",
		body: "A personal project I build in my own time — one tool where creators can run their store, portfolio and blog together. I work on every part myself, from design to backend, using Claude and other AI tools to learn as I go. It's open source, so others can learn from it too.",
	},
	{
		state: "shipping",
		title: "Engineering at Dattam Labs",
		body: "My day job — building and shipping software with a team, used by real customers at real scale.",
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
		title: "Get Saroh into real creators' hands.",
		body: "Take it from a work in progress to something people use every day — and keep learning how to build well with AI.",
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
