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
	"Mohit Mehta is a software engineer who builds fast, polished web products and turns designs into great frontends. Currently building at Dattam Labs and on Saroh, an open platform for creators. Open to interesting problems and collaborations.";

export const metadata: Metadata = {
	title,
	description,
	keywords: [
		"Mohit Mehta",
		"founder",
		"software engineer",
		"frontend developer",
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
