"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChapterMarker, Reveal } from "./primitives";
import { horizons } from "@/lib/data/journey";

function Horizon({
	horizon,
	index,
}: {
	horizon: (typeof horizons)[number];
	index: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 90%", "start 30%"],
	});
	const x = useTransform(scrollYProgress, [0, 1], [60, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const scale = 1 + index * 0.06;

	return (
		<div
			ref={ref}
			className="grid grid-cols-1 items-baseline gap-4 border-t border-line py-12 md:grid-cols-[16rem_1fr] md:gap-10 md:py-16"
		>
			<motion.div style={{ opacity }}>
				<span
					className="amber-grad display block leading-none"
					style={{
						fontSize: `clamp(2.5rem, ${4 + index * 1.5}vw, ${
							4 + index * 2
						}rem)`,
					}}
				>
					{horizon.span}
				</span>
			</motion.div>
			<motion.div style={{ x, opacity }} className="max-w-2xl">
				<h3
					className="display text-balance text-ink"
					style={{ fontSize: `clamp(1.6rem, ${3.4 * scale}vw, ${2.4 * scale}rem)` }}
				>
					{horizon.title}
				</h3>
				<p className="mt-4 text-pretty text-lg leading-relaxed text-ink-dim">
					{horizon.body}
				</p>
			</motion.div>
		</div>
	);
}

export default function ChapterVision() {
	return (
		<section id="vision" className="chapter relative overflow-hidden">
			{/* deep glow that grows toward the horizon */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--amber)/0.12),transparent_70%)]" />
			<div className="shell relative">
				<ChapterMarker
					index="05"
					title="Future Vision"
					className="mb-16"
				/>
				<Reveal className="mb-6 max-w-4xl">
					<h2 className="display text-balance text-[clamp(2rem,5vw,4rem)] text-ink">
						I&apos;m not just chasing the next job.{" "}
						<span className="amber-grad">
							I&apos;m building toward something bigger.
						</span>
					</h2>
				</Reveal>
				<Reveal delay={0.1} className="mb-12 max-w-2xl">
					<p className="text-lg leading-relaxed text-ink-dim">
						Where I&apos;d like to be in one, five and ten years —
						each step building on the one before.
					</p>
				</Reveal>

				<div>
					{horizons.map((h, i) => (
						<Horizon key={h.span} horizon={h} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
