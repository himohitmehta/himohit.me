/*
  work.ts — the /work page: professional work grouped by where it happened,
  rather than a flat list of products. Text only, no images, no status badges.
*/

export type WorkGroup = {
	id: string;
	/* Left-hand label: the employer, or "Current work" for Saroh. */
	label: string;
	/* Product name, when the entry is a product rather than a job. */
	name?: string;
	/* One entry per paragraph. */
	body: string[];
	links?: { label: string; href: string }[];
};

export const workGroups: WorkGroup[] = [
	{
		id: "saroh",
		label: "Current work",
		name: "Saroh",
		body: [
			"My personal project. Website, commerce, appointments and CRM in one system, where a business switches on only the modules it needs. I do all of it: design, API, deploys. The code is public.",
		],
		links: [
			{ label: "saroh.in", href: "https://saroh.in" },
			{
				label: "Read the code",
				href: "https://github.com/saroh-labs/saroh.in",
			},
		],
	},
	{
		id: "dattam-labs",
		label: "Dattam Labs",
		body: [
			"Lead frontend across a product studio's client work: climate data platforms, an internal knowledge system, two SaaS products, and cross-platform video on a React Native app.",
			"I built chat interfaces over live data and led a frontend rearchitecture. The subscriptions and entitlements engine spanned the backend and the front end, so I owned the billing rules as much as the screens.",
		],
	},
	{
		id: "hivepath",
		label: "Hivepath",
		body: [
			"Lead frontend engineer across the company's own products for three years. I owned the front end of a multi-channel e-commerce platform: onboarding, inventory, purchase orders, billing.",
			"I led the rebuild that moved six applications from Create React App onto the Next.js App Router while the product stayed up. I built a chat assistant platform end to end, including the Python backend that indexes a customer's documents.",
		],
	},
];
