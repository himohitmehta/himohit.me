"use client";
import React from "react";
import ReactPlayer from "react-player";
export default function VideoPlayer({ url }: { url: string }) {
	const [isPlaying, setIsPlaying] = React.useState(false);

	return (
		<div
			onMouseEnter={() => setIsPlaying(true)}
			onMouseLeave={() => setIsPlaying(false)}
			className="wrapper"
		>
			<ReactPlayer
				className={"react-player rounded-md"}
				// width={400}
				// height={240}
				url={url}
				playing={isPlaying}
				volume={0}
				controls={isPlaying}
			/>
			{/* <ExamplePlayer url={url} /> */}
		</div>
	);
}
