import { Project } from "@/lib/types";
import { Button } from "../ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";

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
			<HoverCardContent className="w-80">
				<div className=" space-x-4">
					<h1 className="text-lg">{data.title}</h1>
					<p className="text-sm"> {data.description}</p>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
