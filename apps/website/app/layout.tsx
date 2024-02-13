import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mohit Mehta - software engineer at Hivepath. Building Bluecom.ai. ",
	description: `I am software engineer at Hivepath. Building Bluecom.ai a multi-channel e-commerce platform with Next.JS, React, Typescript, Material UI, WooCommerce, Shopify, BigCommerce and Stripe. `,
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
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</AppProvider>
			</body>
		</html>
	);
}
