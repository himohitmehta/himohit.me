import technologiesData from "@/lib/data/technologies";
import React from "react";

export default function RenderTechIcon({
	data,
	hideIconTitle = false,
}: {
	data: string[];
	hideIconTitle?: boolean;
}) {
	const techIcons = technologiesData.filter((item) => data.includes(item.id));
	return (
		<div className="my-4">
			<span className="text-lg text-muted-foreground font-medium">
				Tools Used:
			</span>{" "}
			<div className="flex  flex-wrap gap-4 my-4">
				{techIcons.map((item) => (
					<div className="flex items-center gap-2 " key={item.id}>
						{item.icon && (
							<item.icon
								className="size-4"
								style={{ color: item.color }}
							/>
						)}{" "}
						{!hideIconTitle && (
							<span className="">{item.name}</span>
						)}{" "}
					</div>
				))}
			</div>
		</div>
	);
}
