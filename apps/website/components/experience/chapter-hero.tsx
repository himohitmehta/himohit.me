"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import EcosystemField from "./ecosystem-field";
import { founder } from "@/lib/data/journey";

export default function ChapterHero() {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
	const fieldScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

	const word = {
		hidden: { opacity: 0, y: "0.7em" },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
		},
	};

	return (
		<section
			ref={ref}
			id="top"
			className="relative flex min-h-[100svh] items-center overflow-hidden vignette"
		>
			{/* Interactive ecosystem */}
			<motion.div
				style={{ scale: fieldScale }}
				className="absolute inset-0 opacity-70"
			>
				<EcosystemField />
			</motion.div>

			{/* amber horizon glow */}
			<div className="pointer-events-none absolute inset-x-0 top-[-20%] h-[60%] bg-[radial-gradient(ellipse_at_center,hsl(var(--amber)/0.16),transparent_70%)]" />

			<motion.div
				style={{ y, opacity }}
				className="shell relative z-10 w-full pt-16"
			>
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="eyebrow mb-6"
				>
					{founder.name} — {founder.roles.join(" · ")}
				</motion.p>

				<motion.h1
					variants={{ show: { transition: { staggerChildren: 0.14 } } }}
					initial="hidden"
					animate="show"
					className="display max-w-5xl text-balance text-[clamp(2.3rem,7vw,5.75rem)] text-ink"
				>
					<span className="block overflow-hidden">
						<motion.span variants={word} className="block">
							I don&apos;t just build
						</motion.span>
					</span>
					<span className="block overflow-hidden">
						<motion.span variants={word} className="block amber-grad">
							products.
						</motion.span>
					</span>
					<span className="block overflow-hidden">
						<motion.span
							variants={word}
							className="block text-ink-dim"
						>
							I build the systems
						</motion.span>
					</span>
					<span className="block overflow-hidden">
						<motion.span variants={word} className="block">
							they live in.
						</motion.span>
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.9 }}
					className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ink-dim"
				>
					I&apos;m a software engineer who turns designs into fast,
					polished web products people enjoy using. Most recently I
					was an engineer at{" "}
					<span className="text-ink">
						{founder.previous.company}
					</span>
					. These days I&apos;m building{" "}
					<a
						href="https://saroh.in"
						target="_blank"
						rel="noopener noreferrer"
						className="text-amber-bright underline-offset-4 hover:underline"
					>
						Saroh
					</a>
					.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.1 }}
					className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-faint"
				>
					<a
						href="#story"
						className="group flex items-center gap-3 text-ink transition-colors hover:text-amber-bright"
					>
						<span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-amber">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								className="translate-y-px"
							>
								<path
									d="M7 1v12M7 13l5-5M7 13L2 8"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
						Begin the story
					</a>
					<span className="hidden h-4 w-px bg-line-strong sm:block" />
					<span>A short scroll through my work and how I think</span>
				</motion.div>
			</motion.div>
		</section>
	);
}
