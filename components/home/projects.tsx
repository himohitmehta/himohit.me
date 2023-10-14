"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

const data = [
	{
		title: "Bluecom",
		publishedAt: "2021-09-01",
		link: "https://bluecom.ai",
		description: "Multi channel ecommerce platform",
	},
	{
		title: "Calpad",
		publishedAt: "2021-09-01",
		link: "https://calpad.vercel.app",
		description: "Scheduling platform ",
	},
	{
		title: "Zello",
		publishedAt: "2021-09-01",
		link: "https://zello.live",
		description: "Widget Share platform ",
	},
	{
		title: "Hivepath",
		publishedAt: "2021-09-01",
		link: "https://hivepath.io",
		description: "Professional Networking platform ",
	},
];

export default function Projects() {
	return (
		<div className="max-w-6xl mx-auto py-8">
			<h1 className="text-6xl text-center font-semibold py-8">
				Projects
			</h1>
			<div className="grid grid-cols-4 gap-4">
				{data.map((item) => (
					<ProjectCard key={item.title} data={item} />
				))}
			</div>
		</div>
	);
}

const ProjectCard = ({
	data,
}: {
	data: {
		title: string;
		description: string;
		link: string;
		publishedAt: string;
	};
}) => {
	return (
		<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
			<div className="rounded-lg border border-gray-300 bg-white/20  dark:bg-white/10 p-4 backdrop-blur-lg backdrop-filter">
				<a href={data.link}>
					<h3 className="text-3xl font-semibold">{data.title}</h3>
					<p>{data.description}</p>
				</a>
			</div>
		</Tilt>
	);
};
