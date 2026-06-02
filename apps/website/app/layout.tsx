import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import AppProvider from "./provider";
import SceneNav from "@/components/experience/scene-nav";

const display = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
});

const sans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const title = "Mohit Mehta — Builder of systems, products & worlds";
const description =
	"Mohit Mehta is a software engineer and systems designer building products that outlive their features — from AI-agent platforms and commerce engines to Saroh, an open-source platform for creators. Currently engineering at Dattam Labs.";

export const metadata: Metadata = {
	title,
	description,
	keywords: [
		"Mohit Mehta",
		"founder",
		"software engineer",
		"systems designer",
		"product builder",
		"Saroh",
		"Dattam Labs",
		"Next.js",
		"TypeScript",
	],
	authors: [{ name: "Mohit Mehta", url: "https://himohit.me" }],
	openGraph: {
		title,
		description,
		url: "https://himohit.me",
		siteName: "himohit.me",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
	metadataBase: new URL("https://himohit.me"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${display.variable} ${sans.variable} font-sans antialiased grain`}
			>
				<AppProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						forcedTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<SceneNav />
						{children}
					</ThemeProvider>
				</AppProvider>
			</body>
		</html>
	);
}
