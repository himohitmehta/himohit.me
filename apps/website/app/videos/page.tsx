"use client";
import VideoPlayer from "@/components/shared/video-player";
import madeWithUnityVideos from "@/lib/data/made-with-unity-videos";
import React, { Suspense, useEffect, useState } from "react";

export default function VideosPage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className="px-4">
			<Suspense fallback={"Loading"}>
				{isClient ? (
					<div className="mt-32 lg:mt-20">
						<div className="my-8 mx-auto max-w-7xl text-center">
							<h1 className="text-3xl font-medium">
								Some cool things I built with Unity 🚀
							</h1>
							<p>
								These projects I built while I was learning Game
								development with C# and Unity in 2020-21.
							</p>
						</div>
						{madeWithUnityVideos.map((item) => {
							const { id, title, videos } = item;
							return (
								<div
									key={id}
									className="my-8 mx-auto max-w-7xl"
								>
									<h1 className="text-xl font-bold  mb-4">
										{title}
									</h1>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
										{videos.map((video, index) => (
											<div
												key={index}
												className="rounded-md border overflow-hidden"
											>
												<VideoPlayer url={video} />
											</div>
										))}
									</div>
								</div>
							);
						})}
					</div>
				) : (
					""
				)}
			</Suspense>
		</div>
	);
}
