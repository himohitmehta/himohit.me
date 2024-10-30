const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

async function Generate() {
	const feed = new RSS({
		title: "Mohit Mehta'",
		site_url: "https://blogs.himohit.me",
		feed_url: "https://blogs.himohit.me/feed.xml",
	});

	const posts = await fs.readdir(path.join(__dirname, "..", "pages"));
	const allPosts = [];
	await Promise.all(
		posts.map(async (name) => {
			if (name.startsWith("index.")) return;

			const content = await fs.readFile(
				path.join(__dirname, "..", "pages", name),
			);
			const frontmatter = matter(content);

			allPosts.push({
				title: frontmatter.data.title,
				url: "/" + name.replace(/\.mdx?/, ""),
				date: frontmatter.data.date,
				description: frontmatter.data.description,
				categories: frontmatter.data.tag.split(", "),
				author: frontmatter.data.author,
			});
		}),
	);

	allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
	allPosts.forEach((post) => {
		feed.item(post);
	});
	await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

Generate();
