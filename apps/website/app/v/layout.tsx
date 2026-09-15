import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Landing variants",
	/* Working drafts — keep them out of search while we decide. */
	robots: { index: false, follow: false },
};

export default function VariantsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className={mono.variable}>{children}</div>;
}
