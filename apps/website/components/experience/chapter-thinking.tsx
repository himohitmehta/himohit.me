"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChapterMarker, Reveal } from "./primitives";
import { lenses } from "@/lib/data/journey";

export default function ChapterThinking() {
	const [active, setActive] = useState(0);
	const current = lenses[active];

	return (
		<section id="thinking" className="chapter relative">
			<div className="shell">
				<ChapterMarker
					index="03"
					title="Thinking Process"
					className="mb-16"
				/>
				<Reveal className="mb-14 max-w-4xl">
					<h2 className="display text-balance text-[clamp(2rem,5vw,4rem)] text-ink">
						A few ideas I come back to{" "}
						<span className="amber-grad">
							in everything I build.
						</span>
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
					{/* Lens selector */}
					<div className="flex flex-col">
						{lenses.map((lens, i) => {
							const isActive = i === active;
							return (
								<button
									key={lens.id}
									onMouseEnter={() => setActive(i)}
									onFocus={() => setActive(i)}
									onClick={() => setActive(i)}
									className="group relative border-t border-line py-5 text-left last:border-b"
								>
									<div className="flex items-center justify-between">
										<span
											className={`display text-[clamp(1.6rem,3.4vw,2.6rem)] transition-colors duration-300 ${
												isActive
													? "text-ink"
													: "text-ink-faint group-hover:text-ink-dim"
											}`}
										>
											{lens.label}
										</span>
										<span
											className={`text-xs tabular-nums transition-colors ${
												isActive
													? "text-amber-bright"
													: "text-line-strong"
											}`}
										>
											0{i + 1}
										</span>
									</div>
									{isActive && (
										<motion.span
											layoutId="lens-underline"
											className="absolute -bottom-px left-0 h-px w-full bg-gradient-to-r from-amber-bright to-transparent"
										/>
									)}
								</button>
							);
						})}
					</div>

					{/* Statement panel */}
					<div className="relative min-h-[18rem] lg:pl-10">
						<div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-line lg:block" />
						<AnimatePresence mode="wait">
							<motion.div
								key={current.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -16 }}
								transition={{
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="lg:sticky lg:top-32"
							>
								<span className="font-display text-7xl text-line-strong">
									0{active + 1}
								</span>
								<h3 className="display mt-4 text-balance text-[clamp(1.8rem,4vw,3rem)] text-ink">
									{current.title}
								</h3>
								<p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-dim">
									{current.body}
								</p>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
