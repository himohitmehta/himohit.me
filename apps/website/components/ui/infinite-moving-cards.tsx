"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		title: string;
		icon?: IconType;
		color?: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards",
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse",
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s",
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s",
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s",
				);
			}
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item, idx) => {
					const Icon = item.icon as IconType;
					return (
						<li
							className="w-auto max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-2 "
							style={{
								background:
									"linear-gradient(180deg, var(--slate-800), var(--slate-900)",
							}}
							key={item.title}
						>
							<div className="text-center flex flex-col items-center gap-2">
								<div
									aria-hidden="true"
									className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
								></div>
								<Icon
									style={{ color: item.color }}
									className="h-10 w-10 "
								/>
								<span className=" relative z-20 text-sm pb-4 text-gray-100 font-normal">
									{item.title}
								</span>
								{/* <div className="relative z-20 mt-6 flex flex-row items-center">
									<span className="flex flex-col gap-1">
										{/* <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
											{item.name}
										</span> 
										<span className=" text-sm leading-[1.6] text-gray-400 font-normal">
											{item.title}
										</span>
									</span>
								</div> */}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
