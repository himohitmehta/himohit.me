"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TextTypingEffect from "./typing-text/typing-text-effect";

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
			className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0"
		>
			<motion.span
				variants={containerItem}
				// href={`/${link}`}
				className="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
			>
				<p className="text-sm font-semibold text-gray-700">
					Hi, I&apos;m Mohit
				</p>
			</motion.span>

			<motion.h1
				variants={containerItem}
				data-testid="hero-text"
				className="mt-5 font-display dark:text-white/80 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]"
			>
				Software Engineer
				<br />
				<span className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 bg-clip-text text-transparent">
					at Hivepath
				</span>
			</motion.h1>
			<motion.h2
				variants={containerItem}
				className="mt-5 dark:text-gray-400 text-gray-600 sm:text-xl"
			>
				Building web applications with React, Next.JS, Material UI,
				Tailwind CSS, Redux, Vercel, and PlanetScale. I'm building
				{/* Building web applications with React, Next.JS, Material UI,
				Tailwind CSS, Redux, Vercel, and PlanetScale. I&apos;m building{" "} */}
				<a
					className="text-blue-700 font-semibold hover:underline underline-offset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-violet-800 bg-clip-text text-transparent"
					href="https://lattis.ai"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					lattis.ai
				</a>{" "}
				at hivepath and working on
				<a
					className="text-blue-700 font-semibold hover:underline underline-offset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-violet-800 bg-clip-text text-transparent"
					href="https://saroh.io"
					target="_blank"
					rel="noreferrer"
				>
					saroh.io
				</a>{" "}
				in weekends.{" "}
			</motion.h2>

			<motion.div
				variants={containerItem}
				className="mx-auto mt-10 flex max-w-fit space-x-4"
			>
				<a
					href={`https://www.linkedin.com/in/himohit`}
					className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
					target="_blank"
					rel="noreferrer"
				>
					Linkedin
				</a>
				<a
					className="flex items-center justify-center space-x-2 rounded-full border dark:text-black border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
					href="https://github.com/himohitmehta"
					target="_blank"
					rel="noreferrer"
				>
					<p className="text-sm"> GitHub</p>
				</a>
			</motion.div>
		</motion.div>
	);
};

export default Hero;
