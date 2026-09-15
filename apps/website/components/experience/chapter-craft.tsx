"use client";

import { ChapterMarker, Reveal } from "./primitives";
import { craft, craftIntro } from "@/lib/data/journey";

export default function ChapterCraft() {
	return (
		<section id="craft" className="chapter relative">
			<div className="shell">
				<ChapterMarker index="02" title="The Craft" className="mb-16" />

				<Reveal className="mb-8 max-w-4xl">
					<h2 className="display text-balance text-[clamp(2rem,5vw,4rem)] text-ink">
						What I&apos;m{" "}
						<span className="amber-grad">deep in.</span>
					</h2>
				</Reveal>

				<Reveal delay={0.1} className="mb-14 max-w-2xl space-y-5">
					{craftIntro.map((para, i) => (
						<p
							key={i}
							className="text-pretty text-lg leading-relaxed text-ink-dim"
						>
							{para}
						</p>
					))}
				</Reveal>

				<div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
					{craft.map((item, i) => (
						<Reveal
							key={item.id}
							delay={i * 0.08}
							className="bg-bg p-8 transition-colors hover:bg-bg-elev md:p-10"
						>
							<span className="font-display text-sm text-amber-bright">
								{String(i + 1).padStart(2, "0")}
							</span>
							<h3 className="display mt-4 text-2xl text-ink">
								{item.title}
							</h3>
							<p className="mt-4 text-pretty leading-relaxed text-ink-dim">
								{item.body}
							</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
