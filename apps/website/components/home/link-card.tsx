import { Project } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTechIcon from "../shared/render-tech-icon";

export default function LinkCard({ project }: { project: Project }) {
	const { title, description, builtWith, image, link } = project;
	const icons = builtWith;
	return (
		<div className="mx-auto flex w-full items-center justify-center">
			<div className=" w-full rounded-md hover:bg-gradient-to-r from-blue-300 via-blue-500 to-orange-700 p-1">
				<div className=" h-full w-full  ">
					<div className=" max-w-md  items-center justify-between rounded-md  bg-white dark:bg-black shadow-lg transition-[border-color]  active:cursor-grabbing overflow-hidden">
						{image && (
							<Image
								src={`/images/${image}`}
								alt={title}
								height="400"
								width="400"
								className="object-contain w-full h-[220px] "
							/>
						)}{" "}
						<div className="flex flex-grow items-start space-x-3 p-3 w-full bg-gray-800">
							<div className="flex flex-col flex-grow">
								<div>
									<div className="flex gap-4 items-center justify-between">
										<h3
										// className="text-xl font-semibold text-blue-800 dark:text-white"
										>
											<span className="text-xl font-semibold bg-gradient-to-r from-blue-300 via-blue-500 to-violet-700 bg-clip-text text-transparent">
												{title}
											</span>
										</h3>
										<div className="text-xs text-muted-foreground">
											{project.from_date} -{" "}
											{project.to_date}
										</div>
									</div>

									<p className="text-md my-2 font-medium text-black/50 dark:text-white/70">
										{description}
									</p>
									{/* <p className="text-sm mb-2 dark:text-white/50">
										Tech: {builtWith}
									</p> */}
									{icons && (
										<RenderTechIcon
											data={icons}
											hideIconTitle
										/>
									)}
								</div>
								<div className="flex items-center justify-start max-w-full">
									<Link
										href={link!}
										target="_blank"
										rel="noopener noreferrer"
										className="line-clamp-1 max-w-full text-sm text-gray-500 underline-offset-2 transition-all dark:hover:text-gray-300 hover:text-gray-800 hover:underline "
									>
										{link}{" "}
									</Link>
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
