import Link from "next/link";
import { craft } from "@/lib/data/journey";
import { availability, saroh, variantIntro } from "@/lib/data/variants";
import VariantSwitcher from "../switcher";

/* Short tabular keys standing in for the old year column — the table shape
   survives, but it lists qualities rather than jobs. */
const keys: Record<string, string> = {
	architecture: "systems",
	state: "state",
	migration: "change",
	accessibility: "access",
};

export default function IndexPage() {
	return (
		<main className="min-h-screen bg-[#EFECE5] font-mono text-[#12100E] [font-family:var(--font-mono),ui-monospace,monospace]">
			<VariantSwitcher current="index" light />

			<div className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
				<div className="flex flex-col gap-1 text-xs tracking-[0.04em] text-[#6A635A] sm:flex-row sm:justify-between">
					<span>mohit mehta</span>
					<span>senior software engineer · remote</span>
				</div>

				<div className="mt-16 max-w-3xl lg:mt-20">
					<h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.32] tracking-[-0.02em]">
						{variantIntro.headline[0]}{" "}
						<span className="bg-amber px-2 text-[#12100E]">
							actually go wrong
						</span>
						.
					</h1>
					<p className="mt-7 max-w-xl text-[13px] leading-[1.85] text-[#46403A]">
						{variantIntro.scope} The work I like is unglamorous —
						checkout flows, billing screens, dashboards holding more
						data than fits on a screen.
					</p>
				</div>

				<div className="mt-14 flex flex-col text-[13px]">
					<div className="grid grid-cols-[5.5rem_1fr] gap-5 border-t border-[#C9C2B6] py-3 text-[#8A8177] sm:grid-cols-[6.5rem_1fr]">
						<span>what</span>
						<span>how</span>
					</div>
					{craft.map((item) => (
						<div
							key={item.id}
							className="grid grid-cols-[5.5rem_1fr] gap-5 border-t border-[#DAD4C9] py-4 sm:grid-cols-[6.5rem_1fr]"
						>
							<span className="text-[#8A8177]">
								{keys[item.id]}
							</span>
							<span className="flex flex-col gap-1.5">
								<span className="font-medium">
									{item.title}
								</span>
								<span className="leading-[1.75] text-[#46403A]">
									{item.body}
								</span>
							</span>
						</div>
					))}
					<div className="grid grid-cols-[5.5rem_1fr] gap-5 border-y border-[#C9C2B6] py-4 sm:grid-cols-[6.5rem_1fr]">
						<span className="text-[#8A8177]">now</span>
						<span className="flex flex-col gap-1.5">
							<a
								href={saroh.href}
								target="_blank"
								rel="noopener noreferrer"
								className="w-fit font-medium underline decoration-[#C9C2B6] underline-offset-4 transition-colors hover:text-[#C0691A]"
							>
								{saroh.name}
							</a>
							<span className="leading-[1.75] text-[#46403A]">
								{saroh.line}
							</span>
						</span>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-4 text-xs text-[#6A635A] sm:flex-row sm:items-center sm:justify-between">
					<span>{availability}</span>
					<div className="flex flex-wrap gap-6">
						<a
							href={saroh.repo}
							target="_blank"
							rel="noopener noreferrer"
							className="underline decoration-[#C9C2B6] underline-offset-4 transition-colors hover:text-[#C0691A]"
						>
							github
						</a>
						<Link
							href="mailto:mohit@himohit.me"
							className="underline decoration-[#C9C2B6] underline-offset-4 transition-colors hover:text-[#C0691A]"
						>
							mohit@himohit.me
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
