import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import AppProvider from "./provider";
import SiteHeader from "@/components/site-header";

const display = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
});

const mono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
});

const sans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const title = "Mohit Mehta — Senior Software Engineer";
const description =
	"Mohit Mehta is a senior software engineer. Six years of React, Next.js and TypeScript — checkout flows, billing screens and dashboards, the screens where things actually go wrong. Currently building Saroh.";

export const metadata: Metadata = {
	title: {
		default: title,
		template: "%s · Mohit Mehta",
	},
	description,
	applicationName: "Mohit Mehta",
	keywords: [
		"Mohit Mehta",
		"senior software engineer",
		"frontend engineer",
		"software engineer",
		"React developer",
		"Next.js developer",
		"TypeScript",
		"design systems",
		"component architecture",
		"web accessibility",
		"Saroh",
		"software engineer portfolio",
		"hire senior software engineer",
	],
	authors: [{ name: "Mohit Mehta", url: "https://himohit.me" }],
	creator: "Mohit Mehta",
	publisher: "Mohit Mehta",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title,
		description,
		url: "https://himohit.me",
		siteName: "Mohit Mehta",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		creator: "@himohitmehta",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
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
				className={`${display.variable} ${sans.variable} ${mono.variable} font-mono antialiased`}
			>
				<AppProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						forcedTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						<SiteHeader />
						{children}
					</ThemeProvider>
				</AppProvider>
			</body>
		</html>
	);
}
