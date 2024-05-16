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
		<div>
			<Suspense fallback={"Loading"}>
				{isClient ? (
					<div className="mt-20">
						{madeWithUnityVideos.map((item) => {
							const { id, title, videos } = item;
							return (
								<div key={id}>
									<h1 className="text-3xl font-bold text-center mb-8">
										{title}
									</h1>
									<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
										{videos.map((video, index) => (
											<div
												key={index}
												className="rounded-md border"
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
