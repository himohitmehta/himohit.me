"use client";
import VideoPlayer from "@/components/shared/video-player";
import madeWithUnityVideos from "@/lib/data/made-with-unity-videos";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

export default function VideosPage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<main className="chapter">
			<div className="shell">
				<Link
					href="/"
					className="eyebrow mb-10 inline-flex items-center gap-2 transition-colors hover:text-amber-bright"
				>
					<span>←</span> Back to the story
				</Link>
				<div className="max-w-3xl">
					<p className="eyebrow mb-5">Where it began</p>
					<h1 className="display text-balance text-[clamp(2rem,6vw,4rem)] text-ink">
						Before the web,{" "}
						<span className="amber-grad">
							I built worlds in Unity.
						</span>
					</h1>
					<p className="mt-6 text-lg leading-relaxed text-ink-dim">
						A couple of cinematic scenes I built while learning game
						development with C# and Unity in 2020–21 — composing
						lighting, cameras and timelines. The first place I learned
						to think in systems.
					</p>
				</div>

				<Suspense fallback={null}>
					{isClient && (
						<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
							{madeWithUnityVideos.map((item) => (
								<figure
									key={item.id}
									className="group flex flex-col"
								>
									<div className="overflow-hidden rounded-xl border border-line bg-bg-raised transition-colors duration-300 group-hover:border-amber/40">
										<VideoPlayer
											url={item.url}
											title={item.title}
										/>
									</div>
									<figcaption className="mt-4 font-display text-base text-ink">
										{item.title}
									</figcaption>
								</figure>
							))}
						</div>
					)}
				</Suspense>
			</div>
		</main>
	);
}
