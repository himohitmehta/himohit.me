/*
  work.ts — the /projects page: professional work grouped by where it
  happened, rather than a flat list of products. Text only, no images.

  Accuracy rules that bit once already and should not be re-broken:
    · Saroh is source-available and under development. Never "open source",
      never a finished system, never "appointments and CRM". Claim only what ships:
      website, products, posts, orders, team management.
    · Lattis was frontend work. The Python backend, the RAG pipeline and
      the vector store were not mine — do not imply otherwise.
    · The Hivepath migration was architecture modernisation on an existing
      product: Create React App to Next.js and Turborepo. Not a rebuild,
      no App Router claim, no application count.
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
			"My personal engineering project. It started as a place to try out technologies, architecture and product ideas outside work.",
			"Today it covers parts of a small-business system — website, products, posts, orders and team management — built across several applications and shared packages.",
			"I own the product and engineering direction end to end. Still under development, and the source is available.",
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
			"Senior Software Engineer across AI, climate-data, SaaS and mobile products.",
			"On CRAVIS I led frontend development across Chat and Atlas, including streamed AI responses that could arrive as text, tables, maps or other visualisations and had to render conditionally. I also worked on chat state, rendering and visualisation performance, lazy loading and bundle size.",
			"Elsewhere I built an MCP integration for an internal knowledge system and the supporting backend work it needed, owned the frontend of a climate-data dashboard as its only frontend developer, refactored a SaaS frontend into reusable components and worked on its subscription gating, admin order editing and part-payment flows, and contributed to a role-based React Native application. I also reviewed and guided the junior developers on the team.",
		],
	},
	{
		id: "hivepath",
		label: "Hivepath",
		body: [
			"Lead Frontend Engineer across commerce and AI products.",
			"I owned a large part of Bluecom's frontend — products, inventory, warehouses, vendors, purchase orders, onboarding, billing, and the Shopify and WooCommerce integrations — while mentoring five frontend interns through onboarding, task allocation, implementation guidance and code review, and staying hands-on with the core frontend myself.",
			"I also handled the migration of an existing product from Create React App to Next.js and Turborepo, reorganising it around shared, reusable code rather than rewriting it. On Lattis my work was primarily frontend: the architecture, the chatbot experience, the API and CRUD integration around it, and the flow customers used to embed their own chatbot into their sites.",
		],
	},
];
