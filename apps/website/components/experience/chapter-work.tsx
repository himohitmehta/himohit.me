"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChapterMarker, Reveal } from "./primitives";
import { caseStudies, type CaseStudy } from "@/lib/data/journey";
import technologiesData from "@/lib/data/technologies";

const STAGES: { key: keyof CaseStudy; label: string }[] = [
	{ key: "challenge", label: "Challenge" },
	{ key: "vision", label: "Vision" },
	{ key: "system", label: "System built" },
	{ key: "impact", label: "Impact" },
];

function techName(id: string) {
	return technologiesData.find((t) => t.id === id)?.name ?? id;
}

function CaseRoom({ study, index }: { study: CaseStudy; index: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

	return (
		<div
			ref={ref}
			className="relative grid grid-cols-1 gap-10 border-t border-line py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28"
		>
			{/* Visual side (sticky on large screens) */}
			<div className="lg:sticky lg:top-28 lg:h-fit">
				<Reveal>
					<div className="mb-6 flex items-baseline justify-between">
						<span className="font-display text-6xl text-line-strong">
							{String(index + 1).padStart(2, "0")}
						</span>
						<span className="eyebrow">{study.year}</span>
					</div>
					<div className="group relative overflow-hidden rounded-2xl border border-line bg-bg-raised">
						<motion.div
							style={{ opacity: glow }}
							className="pointer-events-none absolute -inset-px z-10 bg-[radial-gradient(120%_80%_at_50%_0%,hsl(var(--amber)/0.25),transparent_60%)]"
						/>
						<motion.div style={{ y: imgY }} className="relative">
							<Image
								src={study.image}
								alt={study.name}
								width={1200}
								height={800}
								className="aspect-[3/2] w-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
							/>
						</motion.div>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
					</div>
				</Reveal>
			</div>

			{/* Narrative side */}
			<div>
				<Reveal>
					<p className="eyebrow mb-3 text-amber-bright">{study.tag}</p>
					<h3 className="display text-[clamp(2.2rem,5vw,3.8rem)] text-ink">
						{study.name}
					</h3>
				</Reveal>

				<div className="mt-10 space-y-px">
					{STAGES.map((stage, si) => (
						<Reveal key={stage.key} delay={si * 0.05}>
							<div className="group relative border-l border-line py-5 pl-6 transition-colors hover:border-amber">
								<span className="absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full bg-line-strong transition-colors group-hover:bg-amber-bright" />
								<p className="eyebrow mb-2">{stage.label}</p>
								<p className="text-pretty leading-relaxed text-ink-dim">
									{study[stage.key] as string}
								</p>
							</div>
						</Reveal>
					))}
				</div>

				<Reveal delay={0.1}>
					<div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
						{study.stack.map((id) => (
							<span
								key={id}
								className="text-xs text-ink-faint"
							>
								{techName(id)}
							</span>
						))}
					</div>
					<a
						href={study.link}
						target="_blank"
						rel="noreferrer"
						className="group mt-8 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-amber-bright"
					>
						Visit {study.name}
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
						>
							<path
								d="M3 11L11 3M11 3H4.5M11 3v6.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</Reveal>
			</div>
		</div>
	);
}

export default function ChapterWork() {
	return (
		<section id="work" className="chapter relative bg-bg-raised/30">
			<div className="shell">
				<ChapterMarker
					index="02"
					title="Selected Work"
					className="mb-16"
				/>
				<Reveal className="mb-4 max-w-4xl">
					<h2 className="display text-balance text-[clamp(2rem,5vw,4rem)] text-ink">
						Not projects. <span className="amber-grad">Systems</span>{" "}
						— each one a problem turned into a platform.
					</h2>
				</Reveal>
				<Reveal delay={0.1} className="max-w-2xl">
					<p className="text-lg leading-relaxed text-ink-dim">
						Every build follows the same arc: a real challenge, a
						sharp vision, a system designed to scale, and the impact
						it left behind.
					</p>
				</Reveal>

				<div className="mt-10">
					{caseStudies.map((study, i) => (
						<CaseRoom key={study.id} study={study} index={i} />
					))}
				</div>

				<Reveal className="mt-16 border-t border-line pt-10">
					<a
						href="/projects"
						className="group inline-flex items-center gap-3 text-ink-dim transition-colors hover:text-ink"
					>
						<span className="text-sm">
							See the full archive — every project, from games to
							platforms
						</span>
						<span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-amber">
							<svg
								width="13"
								height="13"
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
			</div>
		</section>
	);
}
