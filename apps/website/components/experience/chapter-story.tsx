"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ChapterMarker, Reveal } from "./primitives";
import { story } from "@/lib/data/journey";

function Beat({
	beat,
	index,
}: {
	beat: (typeof story)[number];
	index: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 80%", "start 35%"],
	});
	const dim = useTransform(scrollYProgress, [0, 1], [0.35, 1]);

	return (
		<div
			ref={ref}
			className="grid grid-cols-1 gap-6 border-t border-line py-14 md:grid-cols-[10rem_1fr] md:gap-12 md:py-20"
		>
			<div className="flex items-start gap-4">
				<span className="font-display text-sm text-amber-bright">
					{String(index + 1).padStart(2, "0")}
				</span>
				<span className="font-display text-lg text-ink-dim">
					{beat.year}
				</span>
			</div>

			<motion.div style={{ opacity: dim }} className="max-w-3xl">
				<Reveal>
					<p className="eyebrow mb-5">{beat.kicker}</p>
					<h3 className="display text-balance text-[clamp(1.8rem,4.2vw,3.4rem)] text-ink">
						{beat.title}
					</h3>
					<p className="mt-6 text-pretty text-lg leading-relaxed text-ink-dim">
						{beat.body}
					</p>
					{beat.projects && (
						<ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
							{beat.projects.map((p, pi) => {
									const oddLast =
										beat.projects!.length % 2 === 1 &&
										pi === beat.projects!.length - 1;
									return (
								<li
										key={p.name}
										className={oddLast ? "sm:col-span-2" : ""}
									>
									<a
										href={p.href}
										target="_blank"
										rel="noopener noreferrer"
										className="group/proj flex items-center justify-between gap-4 bg-bg px-5 py-4 transition-colors hover:bg-bg-elev"
									>
										<span>
											<span className="font-display text-base text-ink transition-colors group-hover/proj:text-amber-bright">
												{p.name}
											</span>
											<span className="mt-0.5 block text-sm text-ink-faint">
												{p.note}
											</span>
										</span>
										<svg
											width="13"
											height="13"
											viewBox="0 0 14 14"
											fill="none"
											className="shrink-0 text-ink-faint transition-all group-hover/proj:text-amber-bright group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5"
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
								</li>
							);
							})}
						</ul>
					)}
					{beat.cta && (
						<Link
							href={beat.cta.href}
							className="group mt-7 inline-flex items-center gap-2.5 text-sm text-ink transition-colors hover:text-amber-bright"
						>
							{beat.cta.label}
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								className="transition-transform group-hover:translate-x-1"
							>
								<path
									d="M2 7h10M12 7l-4-4M12 7l-4 4"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
					)}
				</Reveal>
			</motion.div>
		</div>
	);
}

export default function ChapterStory() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 60%", "end 40%"],
	});
	const lineH = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 30,
		mass: 0.4,
	});

	return (
		<section id="story" className="chapter relative">
			<div className="shell">
				<ChapterMarker
					index="01"
					title="The Story"
					className="mb-16"
				/>

				<Reveal className="mb-10 max-w-3xl">
					<h2 className="display text-balance text-[clamp(2rem,5vw,4rem)] text-ink">
						Every system I build starts with the same question:{" "}
						<span className="amber-grad">
							what could this become?
						</span>
					</h2>
				</Reveal>

				<div ref={ref} className="relative">
					{/* progress spine */}
					<div className="absolute left-0 top-0 hidden h-full w-px bg-line md:block">
						<motion.div
							style={{ scaleY: lineH }}
							className="h-full w-px origin-top bg-gradient-to-b from-amber-bright via-amber to-amber-deep"
						/>
					</div>

					<div className="md:pl-12">
						{story.map((beat, i) => (
							<Beat key={beat.year} beat={beat} index={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
