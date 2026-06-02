import type { MetadataRoute } from "next";

const BASE = "https://himohit.me";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		{ path: "", priority: 1, changeFrequency: "monthly" as const },
		{ path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
		{ path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
		{ path: "/videos", priority: 0.5, changeFrequency: "yearly" as const },
	];

	return routes.map((r) => ({
		url: `${BASE}${r.path}`,
		lastModified: new Date(),
		changeFrequency: r.changeFrequency,
		priority: r.priority,
	}));
}
