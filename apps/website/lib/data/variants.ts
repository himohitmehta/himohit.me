/*
  variants.ts — shared content for the /v landing-page variants.

  Qualities plus Saroh, and nothing else: no client work is named here.
  The qualities themselves come from `craft` in journey.ts, so the variants
  and the live site never drift apart. Only the framing lines live here.
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
	line: "One system to run a business. I do all of it: design, API, deploys. The code is public.",
};

export const availability = "Open to work — remote, or hybrid.";

export const variants = [
	{ slug: "index", name: "Index", note: "Monospace, tabular, austere." },
	{ slug: "nocturne", name: "Nocturne", note: "Your dark palette, one screen." },
	{ slug: "three", name: "Three", note: "Three statements, nothing else." },
	{ slug: "cards", name: "Cards", note: "Qualities as cards." },
];
