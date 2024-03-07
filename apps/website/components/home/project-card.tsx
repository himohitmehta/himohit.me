import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { Project } from "@/lib/types";
import technologiesData from "@/lib/data/technologies";
import { IconType } from "react-icons";

export default function ProjectCard({ data }: { data: Project }) {
	return (
		<div>
			<BackgroundGradient className="rounded-[22px] max-w-sm  bg-white dark:bg-zinc-900">
				{data.image && (
					<Image
						src={`/images/${data.image}`}
						alt={data.title}
						height="400"
						width="400"
						className="object-contain rounded-t-[22px] "
					/>
				)}{" "}
				<div className="px-4">
					<h1 className="text-base sm:text-xl text-left text-black mt-4 mb-2 dark:text-neutral-200">
						{data.title}
					</h1>
					<p className="text-sm text-neutral-600 text-left dark:text-neutral-400">
						{data.description}
					</p>
					<div className="flex gap-2 py-4">
						{data.icons?.map((item) => {
							const Icon = technologiesData.find(
								(i) => i.id === item,
							)?.icon as IconType;
							const color = technologiesData.find(
								(i) => i.id === item,
							)?.color as string;
							return (
								<Icon
									key={item}
									className="w-6 h-6"
									style={{
										color: color,
									}}
								/>
							);
						})}
					</div>
				</div>
			</BackgroundGradient>
		</div>
	);
}
