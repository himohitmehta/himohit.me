"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChapterMarker, Reveal } from "./primitives";
import { caseStudies, type CaseStudy } from "@/lib/data/journey";
import technologiesData from "@/lib/data/technologies";
import { ShotLightbox, type Shot } from "./shot-lightbox";

const STAGES: { key: keyof CaseStudy; label: string }[] = [
	{ key: "challenge", label: "The problem" },
	{ key: "vision", label: "The idea" },
	{ key: "system", label: "What I built" },
	{ key: "impact", label: "The result" },
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

	// The main visual is shot 0; the gallery follows it.
	const shots: Shot[] = [
		{ src: study.image, alt: `${study.name} — ${study.tag}` },
		...(study.gallery ?? []),
	];
	const [openShot, setOpenShot] = useState<number | null>(null);

	return (
		<div
			ref={ref}
			className="relative grid grid-cols-1 gap-10 border-t border-line py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28"
		>
			{/* Visual side (sticky on large screens) */}
			<div className="lg:sticky lg:top-28 lg:h-fit">
				<Reveal>
					<div className="mb-6 flex items-baseline justify-between">
						{caseStudies.length > 1 && (
							<span className="font-display text-6xl text-line-strong">
								{String(index + 1).padStart(2, "0")}
							</span>
						)}
						<span className="eyebrow">{study.year}</span>
					</div>
					<button
						type="button"
						onClick={() => setOpenShot(0)}
						aria-label={`Open a larger view of ${study.name}`}
						className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-bg-raised text-left transition-colors hover:border-line-strong"
					>
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
								className="aspect-[16/10] w-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
							/>
						</motion.div>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
					</button>

					{study.gallery && study.gallery.length > 0 && (
						<div className="mt-3 grid grid-cols-3 gap-3">
							{study.gallery.map((shot, gi) => (
								<button
									key={shot.src}
									type="button"
									onClick={() => setOpenShot(gi + 1)}
									aria-label={`Open a larger view: ${shot.alt}`}
									className="group/shot relative block cursor-zoom-in overflow-hidden rounded-lg border border-line bg-bg-raised transition-colors hover:border-amber"
								>
									<Image
										src={shot.src}
										alt={shot.alt}
										width={1000}
										height={625}
										className="aspect-[16/10] w-full object-cover object-top opacity-70 transition duration-500 group-hover/shot:scale-[1.05] group-hover/shot:opacity-100"
									/>
								</button>
							))}
						</div>
					)}
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
					<div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
						<a
							href={study.link}
							target="_blank"
							rel="noreferrer"
							className="group inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-amber-bright"
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
						{study.repo && (
							<a
								href={study.repo}
								target="_blank"
								rel="noreferrer"
								className="group inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-amber-bright"
							>
								<svg
									width="15"
									height="15"
									viewBox="0 0 16 16"
									fill="currentColor"
									aria-hidden
								>
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
								</svg>
								Read the code
							</a>
						)}
					</div>
				</Reveal>
			</div>

			<ShotLightbox
				shots={shots}
				index={openShot}
				onIndexChange={setOpenShot}
				onClose={() => setOpenShot(null)}
			/>
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
						The one I keep coming back to —{" "}
						<span className="amber-grad">and the story behind it.</span>
					</h2>
				</Reveal>
				<Reveal delay={0.1} className="max-w-2xl">
					<p className="text-lg leading-relaxed text-ink-dim">
						Here&apos;s the simple story: the problem it solved, the
						idea behind it, what I built, and the difference it made.
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
							See everything I&apos;ve built — the full list of
							projects
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
