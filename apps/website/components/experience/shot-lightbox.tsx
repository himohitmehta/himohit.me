"use client";

/*
  Shot lightbox — opens a product screenshot at full size.
  Desktop: a centred dialog. Mobile: a sheet that rises from the bottom.
  Both are the same Radix dialog; only the placement and motion differ.
*/

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useCallback, useEffect } from "react";

export type Shot = { src: string; alt: string };

export function ShotLightbox({
	shots,
	index,
	onIndexChange,
	onClose,
}: {
	shots: Shot[];
	index: number | null;
	onIndexChange: (i: number) => void;
	onClose: () => void;
}) {
	const open = index !== null;
	const current = open ? shots[index] : null;
	const many = shots.length > 1;

	const step = useCallback(
		(delta: number) => {
			if (index === null) return;
			onIndexChange((index + delta + shots.length) % shots.length);
		},
		[index, shots.length, onIndexChange],
	);

	// Radix handles Escape; arrows are ours.
	useEffect(() => {
		if (!open || !many) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") step(1);
			if (e.key === "ArrowLeft") step(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, many, step]);

	return (
		<Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
			<Dialog.Portal>
				{/* Above scene-nav, which sits at z-[60]–z-[70]. */}
				<Dialog.Overlay className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
				<Dialog.Content
					aria-describedby={undefined}
					className={[
						"fixed z-[95] flex flex-col focus:outline-none",
						// Mobile: bottom sheet.
						"inset-x-0 bottom-0 max-h-[88svh] rounded-t-2xl border-t border-line bg-bg p-4 pb-6",
						"data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
						// Desktop: centred dialog.
						"md:inset-0 md:m-auto md:h-fit md:max-h-[92vh] md:w-[min(92vw,1400px)] md:rounded-2xl md:border md:p-5",
						"md:data-[state=closed]:slide-out-to-bottom-0 md:data-[state=open]:slide-in-from-bottom-0",
						"md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95",
					].join(" ")}
				>
					{/* Grab handle — mobile sheet affordance only. */}
					<div
						aria-hidden
						className="mx-auto mb-3 h-1 w-10 shrink-0 rounded-full bg-line-strong md:hidden"
					/>

					<div className="mb-3 flex items-start justify-between gap-4">
						<div className="min-w-0">
							<Dialog.Title className="truncate text-sm text-ink">
								Saroh
								{many && (
									<span className="ml-2 text-ink-faint">
										{(index ?? 0) + 1} / {shots.length}
									</span>
								)}
							</Dialog.Title>
							<p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-dim md:line-clamp-1">
								{current?.alt}
							</p>
						</div>
						<Dialog.Close
							className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-amber hover:text-ink"
							aria-label="Close"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path
									d="M3 3l8 8M11 3l-8 8"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</Dialog.Close>
					</div>

					<div className="relative min-h-0 flex-1 overflow-auto rounded-xl border border-line bg-bg-raised">
						{current && (
							<Image
								key={current.src}
								src={current.src}
								alt={current.alt}
								width={2000}
								height={1250}
								sizes="(max-width: 768px) 100vw, 92vw"
								className="h-auto w-full"
								priority
							/>
						)}
					</div>

					{many && (
						<div className="mt-4 flex shrink-0 items-center justify-center gap-3">
							<button
								type="button"
								onClick={() => step(-1)}
								aria-label="Previous screenshot"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-amber hover:text-ink"
							>
								<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
									<path
										d="M9 2L4 7l5 5"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<div className="flex gap-1.5">
								{shots.map((s, i) => (
									<button
										key={s.src}
										type="button"
										onClick={() => onIndexChange(i)}
										aria-label={`Show screenshot ${i + 1}`}
										aria-current={i === index}
										className={`h-1.5 rounded-full transition-all ${
											i === index
												? "w-6 bg-amber-bright"
												: "w-1.5 bg-line-strong hover:bg-ink-faint"
										}`}
									/>
								))}
							</div>
							<button
								type="button"
								onClick={() => step(1)}
								aria-label="Next screenshot"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-amber hover:text-ink"
							>
								<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
									<path
										d="M5 2l5 5-5 5"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					)}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
