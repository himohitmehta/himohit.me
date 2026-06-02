"use client";

import React from "react";
import LinkCard from "./link-card";
import { motion, type Variants } from "framer-motion";
import projectsData from "@/lib/data/projects";
import { Project, ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { delayChildren: 0.1, staggerChildren: 0.08 },
	},
};

const containerItem: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function statuses(p: Project): string[] {
	if (!p.status) return [];
	return Array.isArray(p.status) ? p.status : [p.status];
}

/* Priority: live/flagship work first, then most recent, then the rest. */
function rank(p: Project): number {
	const s = statuses(p);
	if (p.id === "saroh") return 0;
	if (s.includes("in-progress") || s.includes("active")) return 1;
	const ended = (p.to_date ?? "").toLowerCase();
	if (ended === "present" || ended === "now") return 1;
	return 2;
}

function recency(p: Project): number {
	const d = `${p.to_date ?? p.from_date ?? ""}`.toLowerCase();
	if (d === "present" || d === "now") return Infinity;
	const m = d.match(/(\d{4})/);
	return m ? parseInt(m[1], 10) : 0;
}

export default function Projects({
	filter,
	title,
	hideTitle = false,
	gridClassName,
	feature = false,
}: {
	filter?: ProjectType;
	title?: string;
	hideTitle?: boolean;
	gridClassName?: string;
	feature?: boolean;
}) {
	const filtered: Project[] = filter
		? projectsData.filter(
				(item) =>
					item.type === filter ||
					(Array.isArray(item.type) &&
						item.type.includes(filter as ProjectType)),
			)
		: projectsData;

	const data = [...filtered].sort(
		(a, b) => rank(a) - rank(b) || recency(b) - recency(a),
	);

	const [hero, ...rest] = data;
	const showFeature = feature && hero;

	return (
		<div className="mx-auto max-w-6xl py-8">
			{!hideTitle && (
				<h1 className="display py-8 text-center text-3xl text-ink md:text-5xl">
					{title || "My Projects"}
				</h1>
			)}

			{showFeature && (
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-10%" }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className={cn("mb-5", gridClassName)}
				>
					<LinkCard project={hero} featured />
				</motion.div>
			)}

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-10%" }}
				className={cn(
					"mx-auto grid max-w-md grid-cols-1 gap-5 md:max-w-5xl md:grid-cols-2 lg:grid-cols-3",
					!showFeature && gridClassName,
				)}
			>
				{(showFeature ? rest : data).map((item: Project) => (
					<motion.div
						variants={containerItem}
						key={`${item.id}-${item.title}`}
					>
						<LinkCard project={item} />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
