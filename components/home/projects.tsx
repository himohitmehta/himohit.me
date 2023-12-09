"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import LinkCard from "./LinkCard";
import { motion } from "framer-motion";
const data = [
	{
		title: "Lattis.ai",
		publishedAt: "2021-09-01",
		link: "https://lattis.ai",
		description: "Platform OS for AI Agents.",
		builtWith: "NextJS, Tailwind CSS, Shadcn UI, and Vercel",
	},
	{
		title: "Bluecom",
		publishedAt: "2021-09-01",
		link: "https://bluecom.ai",
		description: "Multi channel ecommerce platform",
		builtWith: "NextJS, Material UI and Vercel",
	},
	{
		title: "Saroh",
		publishedAt: "2021-09-01",
		link: "https://saroh.io",
		description: "Storefront , Portfolio and Blogging platform",
		builtWith: "NextJS, Tailwind CSS, PlanetScale, Vercel and Stripe",
	},
	{
		title: "Books Wagon Clone",
		publishedAt: "2021-09-01",
		link: "https://books-wagon-clone.vercel.app",
		description: "Books Selling platform",
		builtWith: "NextJS, Material UI",
	},
	{
		title: "Calendar App",
		publishedAt: "2021-09-01",
		link: "https://calendar-app.mohitmehta.dev",
		description: "Fullstack Calendar application. ",
		builtWith: "NextJS, Material UI, react-big-calendar, MongoDB",
	},
	{
		title: "Tip Tap Editor",
		publishedAt: "2021-09-01",
		link: "https://	tip-tap-editor.vercel.app",
		description: "A small Editor Wysiwyg editor built with TipTap Editor. ",
		builtWith: "React, TipTap Editor",
	},
	{
		title: "Calpad",
		publishedAt: "2021-09-01",
		link: "https://calpad.vercel.app",
		description: "Scheduling platform ",
		builtWith: "NextJS, Material UI, ",
	},
	{
		title: "Zello",
		publishedAt: "2021-09-01",
		link: "https://zello.live",
		description: "Widget Share platform ",
		builtWith: "Kotlin, Android, Firebase, Room Database",
	},
	{
		title: "Hivepath",
		publishedAt: "2021-09-01",
		link: "https://hivepath.io",
		description: "Professional Networking platform ",
		builtWith: "React, Material UI, ",
	},

	{
		title: "calendar App Tutorial",
		link: "https://calendar-app.mohitmehta.dev/",
		description:
			"Calendar App Tutorial built with NextJS, redux and MongoDB",
		builtWith: "NextJS, Redux, MongoDB",
		githubLink: "https://github.com/himohitmehta/calendar-app-tutorial",
	},
	{
		title: `NFT marketplace Demo`,
		link: `https://nft-marketplace-demo-khaki.vercel.app/`,
		description: `
		  NFT Marketplace demo project showing
		  multiple NFT collections. Built with NextJS,
		  Sanity, Thirdweb, and deployed on vercel`,
		builtWith: `NextJS, Sanity, Thirdweb, Vercel`,
	},
	{
		title: `Etherscan Dashboard`,
		link: `https://etherscan-dashboard.vercel.app/`,
		description: `Dashboard application built for viewing the transaction data of a contract in etherscan`,
		builtWith: `NextJS, Tailwind CSS, Etherscan API, Vercel`,
	},
	{
		title: `Blockchain NFT Demo`,
		link: `https://blockchain-nft-demo.vercel.app/`,
		description:
			"Blockchain NFT Demo built with NextJS, Tailwind CSS, Airtable and Thirdweb. Deployed on Vercel.",
		builtWith: `NextJS, Tailwind CSS, Airtable, Thirdweb, Vercel`,
	},
	{
		title: "NuxtJS Dashboard App",
		link: "https://nuxtjs-dashboard-app.vercel.app/",
		description:
			"A Static dashboard UI built with NuxtJS, Tailwind CSS and Apex Charts. Deployed on Vercel.",
		builtWith: `NuxtJS, Tailwind CSS, Apex Charts, Vercel`,
	},
	{
		title: "Data App UI Components",
		link: "https://www.npmjs.com/package/data-app-ui-components",
		description:
			"UI components library built with react and material ui. Published on NPM.",
		builtWith: `React, Material UI, NPM`,
	},
	{
		title: "Old Portfolio",
		link: "https://v2.mohitmehta.dev",
		description: "My Old Portfolio before creating the current one.",
		builtWith: "NextJS, Material UI",
	},

	{
		title: "Old Portfolio",
		link: "https://v1.mohitmehta.dev",
		builtWith: "GatsbyJS , Material UI , Firebase",
		description: "My Portfolio as a beginner.",
	},
];

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
	hidden: { opacity: 0, y: 20 },
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
				{data.map((item) => (
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
