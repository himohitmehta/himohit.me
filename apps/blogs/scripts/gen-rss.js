/*
  Builds public/feed.xml from the .mdx posts in pages/.
  Deliberately dependency-free — it parses the small slice of YAML the
  posts actually use and writes the XML by hand, so the blog keeps its
  current dependency list.
  Runs as part of `pnpm build` (see package.json).
*/

const { promises: fs } = require("fs");
const path = require("path");

const SITE_URL = "https://blogs.himohit.me";
const PAGES_DIR = path.join(__dirname, "..", "pages");
const OUT_DIR = path.join(__dirname, "..", "public");

/* Minimal front-matter reader: `key: value` pairs between --- fences. */
function readFrontmatter(raw) {
	const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
	if (!match) return null;

	const data = {};
	for (const line of match[1].split(/\r?\n/)) {
		const at = line.indexOf(":");
		if (at === -1) continue;
		const key = line.slice(0, at).trim();
		let value = line.slice(at + 1).trim();
		// strip matching surrounding quotes, if the author used them
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		if (key) data[key] = value;
	}
	return data;
}

function escapeXml(value = "") {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

async function generate() {
	const entries = await fs.readdir(PAGES_DIR);
	const posts = [];

	for (const name of entries) {
		if (!/\.mdx?$/.test(name)) continue;
		if (name.startsWith("index.")) continue;
		if (name.startsWith("_")) continue;

		const raw = await fs.readFile(path.join(PAGES_DIR, name), "utf8");
		const data = readFrontmatter(raw);

		if (!data || !data.title || !data.date) {
			console.warn(`[feed] skipping ${name} — needs title and date`);
			continue;
		}

		posts.push({
			title: data.title,
			url: `${SITE_URL}/${name.replace(/\.mdx?$/, "")}`,
			date: new Date(data.date),
			description: data.description || "",
			author: data.author || "Mohit Mehta",
			// `tag` is optional; when present it's a comma-separated list
			categories: data.tag
				? data.tag
						.split(",")
						.map((t) => t.trim())
						.filter(Boolean)
				: [],
		});
	}

	posts.sort((a, b) => b.date - a.date);

	const items = posts
		.map(
			(post) => `		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${escapeXml(post.url)}</link>
			<guid isPermaLink="true">${escapeXml(post.url)}</guid>
			<pubDate>${post.date.toUTCString()}</pubDate>
			<description>${escapeXml(post.description)}</description>
			<dc:creator>${escapeXml(post.author)}</dc:creator>${post.categories
				.map((c) => `\n			<category>${escapeXml(c)}</category>`)
				.join("")}
		</item>`,
		)
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Mohit Mehta</title>
		<link>${SITE_URL}</link>
		<description>Notes on frontend engineering — React, Next.js and TypeScript.</description>
		<language>en</language>
		<lastBuildDate>${(posts[0] ? posts[0].date : new Date()).toUTCString()}</lastBuildDate>
		<atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
	</channel>
</rss>
`;

	await fs.mkdir(OUT_DIR, { recursive: true });
	await fs.writeFile(path.join(OUT_DIR, "feed.xml"), xml);
	console.log(`[feed] wrote ${posts.length} post(s) to public/feed.xml`);
}

generate().catch((error) => {
	console.error("[feed] failed:", error);
	process.exit(1);
});
