import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import technologiesData from "@/lib/data/technologies";

export default function Tools() {
	const items = technologiesData.map((item) => {
		const { id, name, type, color, icon } = item;
		return {
			quote: name,
			name: id,
			title: color as string,
		};
	});
	return (
		<div className="max-w-7xl mx-auto">
			<InfiniteMovingCards items={items} speed="slow" />

			<InfiniteMovingCards items={items} speed="slow" direction="right" />
		</div>
	);
}
