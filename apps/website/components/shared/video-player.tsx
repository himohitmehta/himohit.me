"use client";
import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
	url,
	title,
}: {
	url: string;
	title?: string;
}) {
	return (
		<div className="relative aspect-video w-full overflow-hidden bg-bg">
			<ReactPlayer
				className="absolute inset-0"
				url={url}
				width="100%"
				height="100%"
				controls
				light
				config={{
					youtube: {
						playerVars: { modestbranding: 1, rel: 0 },
					},
				}}
			/>
			{title ? <span className="sr-only">{title}</span> : null}
		</div>
	);
}
