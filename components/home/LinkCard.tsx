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
		<div className="mx-auto flex w-full items-center justify-center">
			<div className=" w-full rounded-md hover:bg-gradient-to-r from-blue-300 via-blue-500 to-orange-700 p-1">
				<div className=" h-full w-full ">
					<div className="flex max-w-md  items-center justify-between rounded-md hover:bg-gray-100 hover:dark:bg-gray-800 bg-white dark:bg-black p-3 shadow-lg transition-[border-color]  active:cursor-grabbing overflow-hidden">
						<div className="flex items-start space-x-3">
							{/* <Link2Icon
					// src={`${imageSrc}`}
					// alt={"image"}
					className="pointer-events-none h-10 w-10 rounded-full"
					width={20}
					height={20}
				/> */}
							<div>
								<div>
									<h3
									// className="text-xl font-semibold text-blue-800 dark:text-white"
									>
										<span className="text-xl font-semibold bg-gradient-to-r from-blue-300 via-blue-500 to-violet-700 bg-clip-text text-transparent">
											{title}
										</span>
									</h3>
									<p className="text-md my-4 font-medium text-black/50 dark:text-white/70">
										{description}
									</p>
									<p className="text-sm mb-2 dark:text-white/50">
										{builtWith}
									</p>
								</div>
								<div className="flex items-center justify-start max-w-full">
									<a
										href={url}
										target="_blank"
										rel="noopener noreferrer"
										className="line-clamp-1 max-w-full text-sm text-gray-500 underline-offset-2 transition-all dark:hover:text-gray-300 hover:text-gray-800 hover:underline "
									>
										{url}{" "}
									</a>
									<ExternalLink className="pointer-events-none ml-2 h-[16px] w-[16px] rounded-full" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
