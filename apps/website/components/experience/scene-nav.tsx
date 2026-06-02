"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const CHAPTERS = [
	{ id: "top", label: "Opening" },
	{ id: "story", label: "The Story" },
	{ id: "work", label: "Selected Work" },
	{ id: "thinking", label: "Thinking" },
	{ id: "now", label: "Current Focus" },
	// { id: "vision", label: "Future Vision" }, // hidden for now
	{ id: "contact", label: "Contact" },
];

export default function SceneNav() {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: 0.4,
	});
	const [active, setActive] = useState("top");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!isHome) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) setActive(e.target.id);
				});
			},
			{ rootMargin: "-45% 0px -50% 0px", threshold: 0 },
		);
		CHAPTERS.forEach((c) => {
			const el = document.getElementById(c.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [isHome]);

	return (
		<>
			{/* top scroll progress */}
			<motion.div
				style={{ scaleX }}
				className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-gradient-to-r from-amber-deep via-amber to-amber-bright"
			/>

			{/* top bar */}
			<header
				className={`fixed inset-x-0 top-0 z-[65] transition-all duration-500 ${
					scrolled
						? "border-b border-line bg-bg/70 backdrop-blur-xl"
						: "border-b border-transparent"
				}`}
			>
				<nav className="shell flex h-16 items-center justify-between">
					<Link
						href={isHome ? "#top" : "/"}
						className="group flex items-center gap-2.5"
					>
						<span className="flex h-7 w-7 items-center justify-center rounded-md border border-line-strong font-display text-sm text-ink transition-colors group-hover:border-amber group-hover:text-amber-bright">
							M
						</span>
						<span className="font-display text-sm tracking-tight text-ink">
							Mohit Mehta
						</span>
					</Link>

					<div className="flex items-center gap-6 text-sm">
						<Link
							href="/projects"
							className="hidden text-ink-dim transition-colors hover:text-ink sm:block"
						>
							Archive
						</Link>
						<a
							href="https://blogs.himohit.me"
							className="hidden text-ink-dim transition-colors hover:text-ink sm:block"
						>
							Writing
						</a>
						<Link
							href={isHome ? "#contact" : "/#contact"}
							className="flex h-9 items-center rounded-full border border-line-strong px-4 text-ink transition-all hover:border-amber hover:text-amber-bright"
						>
							Let&apos;s talk
						</Link>
					</div>
				</nav>
			</header>

			{/* right-side chapter rail (home + desktop only) */}
			{isHome && (
				<div className="fixed right-6 top-1/2 z-[60] hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
					{CHAPTERS.map((c) => {
						const isActive = active === c.id;
						return (
							<a
								key={c.id}
								href={`#${c.id}`}
								className="group flex items-center gap-3"
							>
								<span
									className={`text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300 ${
										isActive
											? "text-amber-bright opacity-100"
											: "text-ink-faint opacity-0 group-hover:opacity-100"
									}`}
								>
									{c.label}
								</span>
								<span
									className={`h-px transition-all duration-300 ${
										isActive
											? "w-8 bg-amber-bright"
											: "w-4 bg-line-strong group-hover:w-6 group-hover:bg-ink-dim"
									}`}
								/>
							</a>
						);
					})}
				</div>
			)}
		</>
	);
}
