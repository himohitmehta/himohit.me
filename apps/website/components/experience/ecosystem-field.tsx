"use client";

import { useEffect, useRef } from "react";

/*
  EcosystemField — a living constellation behind the hero.
  Nodes drift, connect when near, and lean toward the cursor.
  This is the "interactive visual system that reflects the founder's
  ecosystem" — a world of connected ideas rather than a profile photo.
*/

type Node = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	r: number;
	hub: boolean;
};

export default function EcosystemField() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		let width = 0;
		let height = 0;
		let dpr = Math.min(window.devicePixelRatio || 1, 2);
		const nodes: Node[] = [];
		const mouse = { x: -9999, y: -9999, active: false };
		let raf = 0;

		const NODE_COUNT = () =>
			Math.max(34, Math.min(80, Math.floor((width * height) / 22000)));
		const LINK_DIST = () => Math.min(180, width * 0.16);

		function seed() {
			nodes.length = 0;
			const count = NODE_COUNT();
			for (let i = 0; i < count; i++) {
				nodes.push({
					x: Math.random() * width,
					y: Math.random() * height,
					vx: (Math.random() - 0.5) * 0.18,
					vy: (Math.random() - 0.5) * 0.18,
					r: Math.random() * 1.6 + 0.6,
					hub: Math.random() < 0.12,
				});
			}
		}

		function resize() {
			const rect = canvas!.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas!.width = Math.floor(width * dpr);
			canvas!.height = Math.floor(height * dpr);
			ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
			seed();
		}

		function draw() {
			ctx!.clearRect(0, 0, width, height);
			const linkDist = LINK_DIST();

			for (const n of nodes) {
				n.x += n.vx;
				n.y += n.vy;

				// gentle pull toward cursor
				if (mouse.active) {
					const dx = mouse.x - n.x;
					const dy = mouse.y - n.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < 240 * 240) {
						const f = (1 - Math.sqrt(d2) / 240) * 0.04;
						n.vx += dx * f * 0.02;
						n.vy += dy * f * 0.02;
					}
				}

				// damping + soft speed cap
				n.vx *= 0.99;
				n.vy *= 0.99;
				const sp = Math.hypot(n.vx, n.vy);
				if (sp > 0.6) {
					n.vx = (n.vx / sp) * 0.6;
					n.vy = (n.vy / sp) * 0.6;
				}

				// wrap
				if (n.x < -20) n.x = width + 20;
				if (n.x > width + 20) n.x = -20;
				if (n.y < -20) n.y = height + 20;
				if (n.y > height + 20) n.y = -20;
			}

			// links
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const a = nodes[i];
					const b = nodes[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const dist = Math.hypot(dx, dy);
					if (dist < linkDist) {
						const o = (1 - dist / linkDist) * 0.5;
						ctx!.strokeStyle = `hsla(36, 60%, 70%, ${o * 0.5})`;
						ctx!.lineWidth = 0.6;
						ctx!.beginPath();
						ctx!.moveTo(a.x, a.y);
						ctx!.lineTo(b.x, b.y);
						ctx!.stroke();
					}
				}
			}

			// nodes
			for (const n of nodes) {
				const radius = n.hub ? n.r + 1.4 : n.r;
				ctx!.beginPath();
				ctx!.arc(n.x, n.y, radius, 0, Math.PI * 2);
				if (n.hub) {
					ctx!.fillStyle = "hsla(40, 96%, 66%, 0.9)";
					ctx!.shadowColor = "hsla(38, 95%, 60%, 0.8)";
					ctx!.shadowBlur = 12;
				} else {
					ctx!.fillStyle = "hsla(36, 25%, 86%, 0.55)";
					ctx!.shadowBlur = 0;
				}
				ctx!.fill();
				ctx!.shadowBlur = 0;
			}

			raf = requestAnimationFrame(draw);
		}

		function onMove(e: PointerEvent) {
			const rect = canvas!.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
			mouse.active = true;
		}
		function onLeave() {
			mouse.active = false;
			mouse.x = -9999;
			mouse.y = -9999;
		}

		resize();
		window.addEventListener("resize", resize);
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerout", onLeave);

		if (reduce) {
			draw();
			cancelAnimationFrame(raf);
		} else {
			raf = requestAnimationFrame(draw);
		}

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerout", onLeave);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden
			className="absolute inset-0 h-full w-full"
		/>
	);
}
