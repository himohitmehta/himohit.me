import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CalendarIcon, LocateIcon, MapPin } from "lucide-react";
import Projects from "@/components/home/projects";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import technologiesData from "@/lib/data/technologies";
import RenderTechIcon from "../render-tech-icon";

export function TimelineDemo() {
	const data = [
		{
			title: "Dattam Labs",
			content: (
				<div>
					<h1 className="text-2xl font-medium mb-4">
						Software Engineer
					</h1>
					<div className="flex justify-between mb-2">
						<span className="text-sm  font-medium flex items-center gap-2">
							<MapPin className="size-4" />
							Remote{" "}
						</span>
						<span className="text-xs text-muted-foreground flex items-center gap-2">
							<CalendarIcon className="size-4" />
							Feb 2025 - Present
						</span>
					</div>
					<div>
					Working as a software engineer.</div>
				</div>
			),
		},
		{
			title: "Hivepath",
			content: (
				<div>
					<h1 className="text-2xl font-medium mb-4">
						Software Engineer
					</h1>
					<div className="flex justify-between mb-2">
						<span className="text-sm  font-medium flex items-center gap-2">
							<MapPin className="size-4" />
							Remote{" "}
						</span>
						<span className="text-xs text-muted-foreground flex items-center gap-2">
							<CalendarIcon className="size-4" />
							July 2021 - September 2024
						</span>
					</div>
					<div>
						Worked as a software engineer at Hivepath and built the
						following apps:
					</div>
					<Projects filter={"hivepath"} hideTitle />
				</div>
			),
		},
		{
			title: "Savimo Apps",
			content: (
				<div>
					<h1 className="text-2xl font-medium mb-4">
						Freelance Web Developer
					</h1>
					<div className="flex justify-between mb-2">
						<span className="text-sm  font-medium flex items-center gap-2">
							<MapPin className="size-4" />
							Remote{" "}
						</span>
						<span className="text-xs text-muted-foreground flex items-center gap-2">
							<CalendarIcon className="size-4" />
							January 2020 - July 2021
						</span>
					</div>
					<div>
						Worked as a freelance web developer to build client
						websites.
					</div>
					<RenderTechIcon data={toolsForFreelance} />
				</div>
			),
		},
	];
	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
}

const toolsForFreelance = [
	"html",
	"css",
	"javascript",
	"react",
	"gatsby",
	"mui",
	"nodejs",
	"express",
	"mongodb",
	"firebase",
	"netlify",
	"git",
	"github",
	"trello",
	"redux-saga",
	"redux",
	"vscode",
];

const iconsAndColorsForFreelance = technologiesData.filter((item) =>
	toolsForFreelance.includes(item.id),
);

console.log({ iconsAndColorsForFreelance });
