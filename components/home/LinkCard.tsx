import {
	ExternalLink,
	GithubIcon,
	Globe,
	Globe2,
	Globe2Icon,
	GlobeIcon,
	Link2Icon,
	LinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LinkCard({
	title,
	url,
	description,
	builtWith,
}: {
	title: string;
	url: string;
	description: string;
	builtWith: string;
}) {
	return (
		<div className="flex max-w-md  items-center justify-between rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/10 p-3 shadow-lg transition-[border-color] hover:border-black dark:hover:border-white active:cursor-grabbing">
			<div className="flex items-start space-x-3">
				{/* <Link2Icon
					// src={`${imageSrc}`}
					// alt={"image"}
					className="pointer-events-none h-10 w-10 rounded-full"
					width={20}
					height={20}
				/> */}
				<div>
					<div className="grid grid-cols-1">
						<span
							className="text-xl font-semibold text-blue-800 dark:text-white"
							// href={link}
							// target="_blank"
							// rel="noreferrer"
						>
							{title}
						</span>
						<span
							className="text-md my-4 font-medium text-black/50 dark:text-white/70"
							// href={link}
							// target="_blank"
							// rel="noreferrer"
						>
							{description}
						</span>
						<span
							className="text-sm mb-2 dark:text-white/50"
							// href={link}
							// target="_blank"
							// rel="noreferrer"
						>
							{builtWith}
						</span>
					</div>
					<div className="flex items-center justify-start">
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="line-clamp-1 max-w-full text-sm text-gray-500 underline-offset-2 transition-all dark:hover:text-gray-300 hover:text-gray-800 hover:underline "
						>
							{url}{" "}
						</a>
						<ExternalLink
							// src={`${imageSrc}`}
							// alt={"image"}
							className="pointer-events-none ml-2 h-[16px] w-[16px] rounded-full"
							// width={20}
							// height={20}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
