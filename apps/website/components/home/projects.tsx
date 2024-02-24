"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import LinkCard from "./LinkCard";
import { motion } from "framer-motion";
import projectsData from "@/lib/data/projects";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.3,
		},
	},
};

const containerItem = {
	hidden: { opacity: 0, y: 0 },
	show: {
		opacity: 1,
		y: 0,
	},
};

export default function Projects() {
	return (
		<div className="max-w-6xl mx-auto py-8">
			<h1 className="md:text-6xl text-2xl text-center font-bold py-8  ">
				<span className="bg-gradient-to-r from-blue-300  via-blue-500 to-violet-700 italic pr-2 bg-clip-text text-transparent">
					My Projects
				</span>
			</h1>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				className="md:max-w-4xl max-w-md grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto"
			>
				{projectsData.map((item) => (
					<motion.div variants={containerItem} key={item.title}>
						<LinkCard
							title={item.title}
							url={item.link}
							description={item.description}
							builtWith={item.builtWith}
						/>
					</motion.div>
					// <ProjectCard key={item.title} data={item} />
				))}
			</motion.div>
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
