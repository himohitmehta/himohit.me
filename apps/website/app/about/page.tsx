import React from "react";
import Link from "next/link";

export default function AboutMePage() {
	return (
		<main className="chapter">
			<div className="shell max-w-3xl">
				<Link
					href="/"
					className="eyebrow mb-10 inline-flex items-center gap-2 transition-colors hover:text-amber-bright"
				>
					<span>←</span> Back to the story
				</Link>
				<p className="eyebrow mb-5">About</p>
				<h1 className="display text-balance text-[clamp(2rem,6vw,4rem)] text-ink">
					I&apos;m Mohit — I build the systems products live in.
				</h1>
				<div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-dim">
					<p>
						I started in game development with Unity and C#, learning
						that a believable world is just a system of small rules
						working together. That instinct carried into the web.
					</p>
					<p>
						Since then I&apos;ve built client sites as a freelancer,
						shipped platforms at Hivepath — from AI-agent operating
						systems to multi-channel commerce — and today I engineer
						at Dattam Labs while building{" "}
						<a
							href="https://saroh.in"
							target="_blank"
							rel="noopener noreferrer"
							className="text-amber-bright underline-offset-4 hover:underline"
						>
							Saroh
						</a>
						, an open-source platform for creators, in the open.
					</p>
					<p>
						My focus is leverage: tools, platforms and systems that
						make the next thing easier to build — for me, and for
						everyone after me.
					</p>
				</div>
				<a
					href="mailto:mohit@himohit.me"
					className="mt-12 inline-flex items-center gap-3 text-ink transition-colors hover:text-amber-bright"
				>
					mohit@himohit.me
					<span>→</span>
				</a>
			</div>
		</main>
	);
}
