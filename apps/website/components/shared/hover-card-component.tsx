import { Project } from "@/lib/types";
import { Button } from "../ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import technologiesData from "@/lib/data/technologies";
import { IconType } from "react-icons";

export default function ProjectHoverCard({
	name,
	data,
}: {
	name: string;
	data: Project;
}) {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<button className="text-blue-700 font-semibold hover:underline underline-offset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-violet-800 bg-clip-text text-transparent">
					{name}
				</button>
			</HoverCardTrigger>
			<HoverCardContent className="w-120 backdrop-blur-0 border-none">
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
			</HoverCardContent>
		</HoverCard>
	);
}
