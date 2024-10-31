"use client";

import { motion } from "framer-motion";
import { MovingBorderButton } from "../ui/moving-border";
import ProjectHoverCard from "../shared/hover-card-component";
import projectsData from "@/lib/data/projects";
import { Project } from "@/lib/types";

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

const Hero = ({}) => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="mx-auto mb-10 mt-16 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0"
		>
			<MovingBorderButton className="text-sm font-semibold text-white">
				Hi, I&apos;m Mohit
			</MovingBorderButton>

			<motion.h1
				variants={containerItem}
				data-testid="hero-text"
				className="mt-5 font-display dark:text-white/80 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]"
			>
				Software Engineer
				<br />
				{/* <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 bg-clip-text text-transparent">
					at Hivepath
				</span> */}
			</motion.h1>
			<motion.h2
				variants={containerItem}
				className="mt-5 dark:text-gray-400 text-gray-600 sm:text-xl"
			>
				Building web applications with React, Next.JS, Material UI,
				Tailwind CSS, Redux, Vercel, React Query, Typescript, Shadcn UI,
				Prisma, tRPC and MySQL.
				{/* I&apos;m building */}
				{/* Building web applications with React, Next.JS, Material UI,
				Tailwind CSS, Redux, Vercel, and PlanetScale. I&apos;m building{" "} */}
				{/* <a
					className="text-blue-700 font-semibold hover:underline underline-offset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-violet-800 bg-clip-text text-transparent"
					href="https://memox.pro"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					memox.pro
				</a>{" "}
				and{" "}
				<ProjectHoverCard
					name={"saroh.io"}
					data={
						projectsData.find(
							(item) => item.id === "saroh",
						) as Project
					}
				/> */}
				{/* <a
					className="text-blue-700 font-semibold hover:underline underline-offset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-violet-800 bg-clip-text text-transparent"
					href="https://saroh.io"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					saroh.io
				</a> */}
			</motion.h2>

			<motion.div
				variants={containerItem}
				className="mx-auto mt-10 flex max-w-fit space-x-4"
			>
				<a
					href={`https://www.linkedin.com/in/himohitmehta`}
					target="_blank"
					rel="noreferrer"
					className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
						Linkedin
					</span>
				</a>
				<a
					href="https://github.com/himohitmehta"
					target="_blank"
					rel="noreferrer"
					className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					Github
				</a>
			</motion.div>
		</motion.div>
	);
};

export default Hero;
