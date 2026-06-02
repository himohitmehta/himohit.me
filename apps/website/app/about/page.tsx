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
					I&apos;m Mohit — a software engineer who loves building
					products.
				</h1>
				<div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-dim">
					<p>
						I started out making games with Unity, where I learned how
						many small parts come together to make one thing work.
						That same curiosity led me to building for the web.
					</p>
					<p>
						Since then I&apos;ve built websites for clients as a
						freelancer, helped build full products at the startup
						Hivepath, and today I work as an engineer at Dattam Labs
						while building{" "}
						<a
							href="https://saroh.in"
							target="_blank"
							rel="noopener noreferrer"
							className="text-amber-bright underline-offset-4 hover:underline"
						>
							Saroh
						</a>
						, an open platform for creators, in my own time.
					</p>
					<p>
						What I enjoy most is making good tools — the kind that
						make the next thing easier to build, both for me and for
						the people who use them.
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
