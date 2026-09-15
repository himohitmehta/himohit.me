import Link from "next/link";
import { craft } from "@/lib/data/journey";
import { availability, saroh, variantIntro } from "@/lib/data/variants";
import VariantSwitcher from "../switcher";

export default function CardsPage() {
	return (
		<main className="min-h-screen bg-[#EAE6DE] text-[#12100E]">
			<VariantSwitcher current="cards" light />

			<div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
				<div className="flex items-baseline justify-between gap-6">
					<span className="font-display text-[15px] font-medium">
						Mohit Mehta
					</span>
					<span className="text-[11px] uppercase tracking-[0.2em] text-[#8A8177]">
						{variantIntro.eyebrow}
					</span>
				</div>

				<h1 className="display mt-14 max-w-4xl text-balance text-[clamp(1.9rem,5vw,3.4rem)] lg:mt-16">
					{variantIntro.headline[0]}{" "}
					<span className="text-[#C0691A]">
						{variantIntro.headline[1]}
					</span>
				</h1>
				<p className="mt-5 max-w-xl text-base leading-relaxed text-[#4A443D]">
					{variantIntro.scope}
				</p>

				<div className="mt-12 grid gap-4 sm:grid-cols-2">
					{craft.map((item) => (
						<div
							key={item.id}
							className="flex flex-col gap-2 rounded-[3px] border border-[#D8D2C6] bg-[#FAF8F4] p-6"
						>
							<h2 className="font-display text-[17px] font-medium">
								{item.title}
							</h2>
							<p className="text-pretty text-[14px] leading-[1.58] text-[#4A443D]">
								{item.body}
							</p>
						</div>
					))}
				</div>

				<div className="mt-4 flex flex-col gap-5 rounded-[3px] bg-[#12100E] p-6 text-ink sm:flex-row sm:items-center sm:justify-between">
					<div className="flex flex-col gap-1.5">
						<span className="text-[11px] uppercase tracking-[0.2em] text-amber">
							{saroh.label}
						</span>
						<p className="text-[15px] leading-relaxed text-ink-dim">
							<a
								href={saroh.href}
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium text-ink transition-colors hover:text-amber-bright"
							>
								{saroh.name}
							</a>{" "}
							— {saroh.line}
						</p>
					</div>
					<a
						href={saroh.repo}
						target="_blank"
						rel="noopener noreferrer"
						className="whitespace-nowrap text-sm text-amber transition-colors hover:text-amber-bright"
					>
						Read the code →
					</a>
				</div>

				<div className="mt-10 flex flex-col gap-3 border-t border-[#D8D2C6] pt-6 text-sm text-[#4A443D] sm:flex-row sm:items-center sm:justify-between">
					<span>{availability}</span>
					<Link
						href="mailto:mohit@himohit.me"
						className="font-medium text-[#12100E] transition-colors hover:text-[#C0691A]"
					>
						mohit@himohit.me
					</Link>
				</div>
			</div>
		</main>
	);
}
