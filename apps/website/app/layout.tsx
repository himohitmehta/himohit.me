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

const title = "Mohit Mehta — Software Engineer & Product Builder";
const description =
	"Mohit Mehta is a software engineer who builds fast, polished web products and turns designs into great frontends. Previously an engineer at Dattam Labs, now building Saroh, one system for running a whole business. Open to interesting problems and collaborations.";

export const metadata: Metadata = {
	title: {
		default: title,
		template: "%s · Mohit Mehta",
	},
	description,
	applicationName: "Mohit Mehta",
	keywords: [
		"Mohit Mehta",
		"software engineer",
		"frontend developer",
		"full-stack developer",
		"React developer",
		"Next.js developer",
		"product builder",
		"Saroh",
		"Dattam Labs",
		"TypeScript",
		"web developer portfolio",
		"hire software engineer",
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
