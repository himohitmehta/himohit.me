"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import technologiesData from "@/lib/data/technologies";

export default function Tools() {
	const items = technologiesData.map((item) => {
		const { id, name, type, color, icon } = item;
		return {
			title: name,
			icon,
			color,
		};
	});
	return (
		<div className="max-w-7xl mx-auto py-20">
			<h1 className="md:text-6xl text-2xl text-center font-bold py-8  ">
				<span className="bg-gradient-to-r from-blue-300  via-blue-500 to-violet-700 italic pr-2 bg-clip-text text-transparent">
					Tools{" "}
				</span>{" "}
				I use
			</h1>

			<InfiniteMovingCards items={items} speed="slow" />

			<InfiniteMovingCards items={items} speed="slow" direction="right" />
		</div>
	);
}
