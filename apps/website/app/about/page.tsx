import { TracingBeamDemo } from "@/components/shared/tracing-beam-demo";
import React from "react";

export default function AboutMePage() {
	return (
		<div className="mx-auto max-w-xl mt-16">
			I&apos;m Mohit and I&apos;m a software engineer at Hivepath.
			Building some really good projects with React, NextJS, TailwindCSS
			and Material UI. Recently, I have started building my own
			open-source projects. Currently I&apos;m working on saroh.io.
			<div>
				<TracingBeamDemo />
			</div>
		</div>
	);
}
