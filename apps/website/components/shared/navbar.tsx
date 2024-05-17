"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   );
// }

export function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn(
				"fixed top-10 inset-x-0 max-w-sm mx-auto z-50 ",
				className,
			)}
		>
			<Menu setActive={setActive}>
				<MenuItem item="Home" href="/"></MenuItem>
				{/* <MenuItem item="About Me" href="/about"></MenuItem> */}
				<MenuItem item="Web Projects" href="/projects"></MenuItem>
				<MenuItem item="Built with unity" href="/videos"></MenuItem>
				{/* <ThemeToggle /> */}
			</Menu>
		</div>
	);
}
