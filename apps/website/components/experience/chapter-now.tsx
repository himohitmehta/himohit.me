"use client";

import { ChapterMarker, Reveal } from "./primitives";
import { currentFocus } from "@/lib/data/journey";

const stateMeta: Record<
	(typeof currentFocus)[number]["state"],
	{ label: string; dot: string }
> = {
	shipping: { label: "Shipping", dot: "bg-emerald-400" },
	building: { label: "Building", dot: "bg-amber-bright" },
	exploring: { label: "Exploring", dot: "bg-sky-400" },
};

export default function ChapterNow() {
	return (
		<section id="now" className="chapter relative bg-bg-raised/30">
			<div className="shell">
				<ChapterMarker
					index="04"
					title="Current Focus"
					className="mb-16"
				/>
				<Reveal className="mb-16 max-w-4xl">
					<h2 className="display text-balance text-[clamp(2rem,5vw,4rem)] text-ink">
						What I&apos;m building{" "}
						<span className="amber-grad">right now.</span>
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
					{currentFocus.map((item, i) => {
						const meta = stateMeta[item.state];
						return (
							<Reveal
								key={item.title}
								delay={i * 0.08}
								className="bg-bg p-8 transition-colors hover:bg-bg-elev md:p-10"
							>
								<div className="mb-8 flex items-center gap-2.5">
									<span className="relative flex h-2.5 w-2.5">
										<span
											className={`absolute inline-flex h-full w-full animate-pulse-ring rounded-full ${meta.dot} opacity-60`}
										/>
										<span
											className={`relative inline-flex h-2.5 w-2.5 rounded-full ${meta.dot}`}
										/>
									</span>
									<span className="eyebrow">{meta.label}</span>
								</div>
								<h3 className="display text-2xl text-ink">
									{item.title}
								</h3>
								<p className="mt-4 text-pretty leading-relaxed text-ink-dim">
									{item.body}
								</p>
							</Reveal>
						);
					})}
				</div>

				<Reveal delay={0.1}>
					<div className="mt-10 flex items-center gap-3 text-sm text-ink-faint">
						<span className="h-px w-8 bg-line-strong" />
						This list changes as my work does.
					</div>
				</Reveal>
			</div>
		</section>
	);
}
