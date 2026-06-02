"use client";

import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

/* Fade-and-rise reveal that triggers when scrolled into view. */
export function Reveal({
	children,
	className,
	delay = 0,
	y = 28,
	once = true,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	y?: number;
	once?: boolean;
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once, margin: "-12% 0px -12% 0px" }}
			transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}

/* Word-by-word reveal for large editorial statements. */
export function StaggerLines({
	lines,
	className,
	lineClassName,
}: {
	lines: React.ReactNode[];
	className?: string;
	lineClassName?: string;
}) {
	const container: Variants = {
		hidden: {},
		show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
	};
	const item: Variants = {
		hidden: { opacity: 0, y: "0.6em" },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
		},
	};
	return (
		<motion.div
			className={className}
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-10%" }}
		>
			{lines.map((line, i) => (
				<span key={i} className="block overflow-hidden">
					<motion.span
						variants={item}
						className={cn("block", lineClassName)}
					>
						{line}
					</motion.span>
				</span>
			))}
		</motion.div>
	);
}

/* Chapter marker — the cinematic "Chapter 0X" label. */
export function ChapterMarker({
	index,
	title,
	className,
}: {
	index: string;
	title: string;
	className?: string;
}) {
	return (
		<Reveal className={cn("flex items-center gap-4", className)}>
			<span className="font-display text-sm tracking-tight text-amber-bright">
				{index}
			</span>
			<span className="h-px w-10 bg-line-strong" />
			<span className="eyebrow">{title}</span>
		</Reveal>
	);
}

/* A thin progress bar tied to a section's own scroll progress. */
export function SectionProgress() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: 0.4,
	});
	return (
		<div ref={ref} className="pointer-events-none absolute inset-0">
			<motion.div
				style={{ scaleX }}
				className="sticky top-0 h-px w-full origin-left bg-gradient-to-r from-amber-deep via-amber to-amber-bright"
			/>
		</div>
	);
}
