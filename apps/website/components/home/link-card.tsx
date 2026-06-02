import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import technologiesData from "@/lib/data/technologies";
import { cn } from "@/lib/utils";

const RETIRED = ["not-working", "archived", "deprecated", "not-maintained"];

function statusList(project: Project): string[] {
	if (!project.status) return [];
	return Array.isArray(project.status) ? project.status : [project.status];
}

function prettyStatus(s: string): string {
	if (s === "not-maintained" || s === "not-working") return "No longer maintained";
	if (s === "archived") return "Archived";
	if (s === "deprecated") return "Deprecated";
	if (s === "in-progress") return "In progress";
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function LinkCard({
	project,
	featured = false,
}: {
	project: Project;
	featured?: boolean;
}) {
	const { title, description, builtWith, image, link } = project;
	const techs = technologiesData.filter((t) => builtWith?.includes(t.id));
	const statuses = statusList(project);
	const isLive = statuses.includes("in-progress") || statuses.includes("active");
	const isRetired = statuses.some((s) => RETIRED.includes(s));
	const retiredStatus = statuses.find((s) => RETIRED.includes(s));
	const clickable = !isRetired && !!link;

	const cardClass = cn(
		"group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-bg-raised transition-colors duration-300",
		clickable && "hover:border-amber/50",
		featured && "border-amber/40 ring-1 ring-amber/10",
		isRetired && "opacity-70",
	);

	const inner = (
		<>
			{image && (
				<div className={cn("relative overflow-hidden", featured && "md:aspect-[16/9]")}>
					<Image
						src={`/images/${image}`}
						alt={title}
						height={featured ? 720 : 440}
						width={featured ? 1280 : 640}
						className={cn(
							"w-full object-cover object-top transition-all duration-500",
							clickable &&
								"opacity-85 group-hover:scale-[1.04] group-hover:opacity-100",
							isRetired && "opacity-50 grayscale",
							featured ? "h-[260px] md:h-full" : "h-[200px]",
						)}
					/>
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-raised via-bg-raised/20 to-transparent" />
					{isLive && (
						<span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-amber/30 bg-bg/70 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-amber-bright backdrop-blur">
							<span className="relative flex h-1.5 w-1.5">
								<span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-amber-bright opacity-60" />
								<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-bright" />
							</span>
							In progress
						</span>
					)}
					{isRetired && retiredStatus && (
						<span className="absolute left-4 top-4 rounded-full border border-line-strong bg-bg/80 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-ink-faint backdrop-blur">
							{prettyStatus(retiredStatus)}
						</span>
					)}
				</div>
			)}

			<div className={cn("flex flex-grow flex-col p-5", featured && "md:p-7")}>
				<div className="flex items-start gap-4">
					<h3
						className={cn(
							"font-display text-ink transition-colors",
							clickable && "group-hover:text-amber-bright",
							featured ? "text-2xl md:text-3xl" : "text-xl",
						)}
					>
						{title}
					</h3>
					{/* Date intentionally hidden — kept in data for reference.
					<span className="shrink-0 text-xs text-ink-faint">
						{project.from_date}
						{project.to_date ? ` – ${project.to_date}` : ""}
					</span>
					*/}
				</div>

				<p
					className={cn(
						"mt-2 text-pretty leading-relaxed text-ink-dim",
						featured ? "text-base" : "text-sm",
					)}
				>
					{description}
				</p>

				<div className="mt-4 flex flex-wrap items-center gap-3">
					{techs.slice(0, featured ? 8 : 6).map((t) => (
						<span key={t.id} className="flex items-center" title={t.name}>
							{t.icon && (
								<t.icon
									className="h-4 w-4 opacity-70"
									style={{ color: t.color }}
								/>
							)}
						</span>
					))}
				</div>

				<div className="mt-auto flex items-center justify-between pt-5">
					{statuses.length > 0 && (
						<span className="eyebrow text-[0.62rem]">
							{prettyStatus(statuses[0])}
						</span>
					)}
					{clickable ? (
						<span className="ml-auto flex items-center gap-1.5 text-xs text-ink-faint transition-colors group-hover:text-amber-bright">
							Visit
							<svg
								width="12"
								height="12"
								viewBox="0 0 14 14"
								fill="none"
								className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							>
								<path
									d="M3 11L11 3M11 3H4.5M11 3v6.5"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					) : (
						<span className="ml-auto text-xs text-ink-faint">
							No longer available
						</span>
					)}
				</div>
			</div>
		</>
	);

	if (clickable) {
		return (
			<Link
				href={link!}
				target="_blank"
				rel="noopener noreferrer"
				className={cardClass}
			>
				{inner}
			</Link>
		);
	}

	return (
		<div className={cardClass} aria-disabled="true">
			{inner}
		</div>
	);
}
