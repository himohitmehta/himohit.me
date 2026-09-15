"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
	{ href: "/projects", label: "work" },
	{ href: "/about", label: "about" },
	{ href: "https://blogs.himohit.me", label: "writing", external: true },
	{ href: "mailto:mohit@himohit.me", label: "mohit@himohit.me" },
];

/*
  Deliberately not a bar: no background, no border, no blur, no fixed
  positioning. It sits in the page flow and scrolls away, which is the
  point of this style — nothing floats over the type.
*/
export default function SiteHeader() {
	const pathname = usePathname();
	/* The landing-page drafts under /v carry their own headers. */
	if (pathname?.startsWith("/v")) return null;

	return (
		<header className="page flex flex-col gap-1 pt-10 text-xs tracking-[0.04em] text-ink-faint sm:flex-row sm:items-baseline sm:justify-between sm:pt-14">
			<Link
				href="/"
				className="text-ink transition-colors hover:text-amber-deep"
			>
				mohit mehta
			</Link>
			<nav className="flex flex-wrap gap-5">
				{LINKS.map((l) => (
					<Link
						key={l.href}
						href={l.href}
						{...(l.external
							? { target: "_blank", rel: "noopener noreferrer" }
							: {})}
						className={`underline-offset-4 transition-colors hover:text-amber-deep hover:underline ${
							pathname === l.href ? "text-ink" : ""
						}`}
					>
						{l.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
