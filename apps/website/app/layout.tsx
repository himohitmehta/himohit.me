import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "./provider";
import { Navbar } from "@/components/shared/navbar";
import Contact from "@/components/shared/contact";

const inter = Inter({ subsets: ["latin"] });

const title =
	"Mohit Mehta - Senior Software Engineer at Dattam Labs. Building saroh.io ";
const description = `I am Senior Software Engineer at Dattam Labs. Building some really good projects with React, NextJS, TailwindCSS and Material UI. Recently, I have started building my own open-source projects. Currently I'm working on saroh.io. `;
export const metadata: Metadata = {
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
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
			<body className={inter.className}>
				<AppProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						forcedTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<Navbar className="top-2" />

						{children}
						<Contact />
					</ThemeProvider>
				</AppProvider>
			</body>
		</html>
	);
}
