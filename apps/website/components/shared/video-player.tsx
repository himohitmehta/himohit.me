"use client";
import React from "react";
import ReactPlayer from "react-player";
export default function VideoPlayer({ url }: { url: string }) {
	const [isPlaying, setIsPlaying] = React.useState(false);

	return (
		<div
			onMouseEnter={() => setIsPlaying(true)}
			onMouseLeave={() => setIsPlaying(false)}
			className="p-4"
		>
			{/* <ExamplePlayer url={url} /> */}
			<ReactPlayer
				className={"h-96 w-full"}
				width={400}
				height={240}
				url={url}
				playing={isPlaying}
				volume={0}
				// controls={true}
			/>
		</div>
	);
}
