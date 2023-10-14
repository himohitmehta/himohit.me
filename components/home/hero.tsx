import Link from "next/link";

const Hero = ({}) => {
	return (
		<div className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
			<span
				// href={`/${link}`}
				className="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
			>
				<p className="text-sm font-semibold text-gray-700">Hi, I&apos;m Mohit</p>
			</span>

			<h1
				data-testid="hero-text"
				className="mt-5 font-display dark:text-white text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]"
			>
				Software Engineer
				<br />
				<span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
					at Hivepath
				</span>
			</h1>
			<h2 className="mt-5 text-gray-600 sm:text-xl">
				Building web applications with React, Next.JS, Material UI,
				Tailwind CSS, Redux, Vercel, and PlanetScale. I&apos;m also
				building{" "}
				<a className="text-blue-700" href="https://saroh.io" target="_blank" rel="noreferrer">
					saroh.io
				</a>{" "}
			</h2>

			<div className="mx-auto mt-10 flex max-w-fit space-x-4">
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
			</div>
		</div>
	);
};

export default Hero;
