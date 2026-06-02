"use client";

import { motion } from "framer-motion";
import { StaggerLines, Reveal } from "./primitives";
import { founder } from "@/lib/data/journey";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function ChapterContact() {
	return (
		<section
			id="contact"
			className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
		>
			{/* rising amber dawn — the closing shot */}
			<div className="pointer-events-none absolute inset-x-0 bottom-[-30%] h-[80%] bg-[radial-gradient(ellipse_at_bottom,hsl(var(--amber)/0.22),transparent_65%)]" />
			<motion.div
				aria-hidden
				className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/10"
				animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>

			<div className="shell relative z-10 text-center">
				<Reveal>
					<p className="eyebrow mb-8">Chapter 05 — The Invitation</p>
				</Reveal>

				<StaggerLines
					className="display mx-auto max-w-5xl text-balance text-[clamp(2.4rem,8vw,6.5rem)] text-ink"
					lines={[
						<>Let&apos;s build something</>,
						<span key="m" className="amber-grad">
							meaningful.
						</span>,
					]}
				/>

				<Reveal delay={0.2}>
					<p className="mx-auto mt-10 max-w-xl text-pretty text-lg leading-relaxed text-ink-dim">
						If you&apos;re building a system, a product, or a world
						worth building — I want to hear about it. The best things
						start with a conversation.
					</p>
				</Reveal>

				<Reveal delay={0.3}>
					<a
						href={`mailto:${founder.email}`}
						className="group mt-12 inline-flex items-center gap-4"
					>
						<span className="display text-[clamp(1.4rem,4vw,2.4rem)] text-ink transition-colors group-hover:text-amber-bright">
							{founder.email}
						</span>
						<span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-bg">
							<svg
								width="16"
								height="16"
								viewBox="0 0 14 14"
								fill="none"
							>
								<path
									d="M2 7h10M12 7l-4-4M12 7l-4 4"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</a>
				</Reveal>

				<Reveal delay={0.4}>
					<div className="mt-14 flex items-center justify-center gap-4">
						<a
							href={founder.links.linkedin}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-dim transition-all hover:border-amber hover:text-amber-bright"
						>
							<SiLinkedin className="h-4 w-4" />
						</a>
						<a
							href={founder.links.github}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-dim transition-all hover:border-amber hover:text-amber-bright"
						>
							<SiGithub className="h-4 w-4" />
						</a>
						<a
							href={founder.links.blog}
							target="_blank"
							rel="noreferrer"
							className="flex h-12 items-center justify-center rounded-full border border-line px-5 text-sm text-ink-dim transition-all hover:border-amber hover:text-amber-bright"
						>
							Read the blog
						</a>
					</div>
				</Reveal>
			</div>

			{/* footer line */}
			<div className="shell relative z-10 mt-24 w-full">
				<div className="hairline mb-6" />
				<div className="flex flex-col items-center justify-between gap-3 pb-10 text-xs text-ink-faint sm:flex-row">
					<span>
						© {new Date().getFullYear()} {founder.name} · Built in
						the open
					</span>
					<span>
						Designed &amp; engineered from scratch — Next.js ·
						TypeScript · Framer Motion
					</span>
				</div>
			</div>
		</section>
	);
}
