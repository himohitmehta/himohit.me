/*
  site.ts — the framing copy shared by every page.

  Qualities plus Saroh, and nothing else: no client work is named here.
  The qualities themselves live in `craft` in journey.ts; this file holds
  only the lines that wrap them — the headline, the one-line scope, the
  Saroh summary and the availability line.
*/

export const variantIntro = {
	eyebrow: "Senior software engineer",
	/* The through-line, used as the headline wherever a variant wants one. */
	headline: ["I work on the screens where things", "actually go wrong."],
	/* One sentence of scope. Deliberately short — the qualities carry the rest. */
	scope: "Six years of React, Next.js and TypeScript.",
};

export const saroh = {
	label: "Building now",
	name: "Saroh",
	href: "https://saroh.in",
	repo: "https://github.com/saroh-labs/saroh.in",
	/* One entry per paragraph. Source-available, not open source, and
	   still in progress — say both plainly wherever it appears. */
	body: [
		"A personal engineering project, built in my own time. Today it covers parts of a small-business system: website, products, posts, orders and team management.",
		"I own the product and engineering direction end to end. Still under development, and the source is available.",
	],
};

export const availability = "Open to work — remote, or hybrid.";
