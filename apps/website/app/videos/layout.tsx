import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Unity Game Videos",
	description:
		"A few short scenes Mohit Mehta built while learning game development with Unity in 2020–21 — where it all began before the web.",
	alternates: { canonical: "/videos" },
	openGraph: {
		title: "Unity Game Videos · Mohit Mehta",
		description:
			"Short scenes built while learning game development with Unity — the start of Mohit Mehta's journey into building software.",
		url: "https://himohit.me/videos",
		type: "website",
	},
};

export default function VideosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
