import Link from "next/link";

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
export default function Timeline() {
	return (
		<div className="space-y-5 pt-20 md:space-y-10 pb-12">
			<div className="mx-auto max-w-md text-center sm:max-w-xl">
				<h2 className="font-display text-4xl dark:text-white/80 font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
					What I have{" "}
					<span
						// className="bg-gradient-to-br from-green-600 to-green-300 bg-clip-text pr-2 italic text-transparent"
						className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 italic pr-2 bg-clip-text text-transparent"
					>
						Built
					</span>
				</h2>
				<p className="mt-5 text-gray-600 sm:text-lg">
					Check out The projects I have built while working on
					hivepath
				</p>
			</div>
			<ul className="mx-5 max-w-2xl md:mx-auto md:translate-x-28">
				{data
					.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
					.slice(0, 6)
					.map((post) => (
						<li key={post.title}>
							<TimelineEntry post={post} />
						</li>
					))}
			</ul>
		</div>
	);
}

const TimelineEntry = ({
	post,
}: {
	post: {
		title: string;
		link: string;
		description: string;
		publishedAt: string;
	};
}) => (
	<a
		href={post.link}
		className="group hidden grid-cols-9 items-center md:grid"
	>
		<div className="col-span-2">
			<p className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700 group-hover:dark:text-white">
				{post.title}
			</p>
		</div>
		<div className="col-span-7 flex items-center">
			<div className="relative ml-4">
				<div className="h-16 border-l border-gray-400 pr-8" />
				<div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700 group-hover:dark:bg-white" />
			</div>
			<h3 className="text-2xl font-medium tracking-tight text-gray-700 transition-colors group-hover:text-black group-hover:dark:text-white">
				{post.description}
			</h3>
		</div>
	</a>
);
