import Link from "next/link";
import { craft } from "@/lib/data/journey";
import { availability, saroh, variantIntro } from "@/lib/data/variants";
import VariantSwitcher from "../switcher";

export default function NocturnePage() {
	return (
		<main className="min-h-screen bg-[#0C0A09] text-[#F1ECE4]">
			<VariantSwitcher current="nocturne" />

			<div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
				<div className="flex items-baseline justify-between gap-6">
					<span className="font-display text-[15px]">Mohit Mehta</span>
					<span className="text-[11px] uppercase tracking-[0.28em] text-[#746C63]">
						{variantIntro.eyebrow}
					</span>
				</div>

				<div className="mt-20 lg:mt-28">
					<h1 className="display max-w-4xl text-balance text-[clamp(2.2rem,6.5vw,5rem)]">
						{variantIntro.headline[0]}{" "}
						<span className="text-[#F7A93B]">
							{variantIntro.headline[1]}
						</span>
					</h1>
					<p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-[#ACA49A]">
						{variantIntro.scope} The work I like is unglamorous —
						checkout flows, billing screens, dashboards holding more
						data than fits on a screen.
					</p>
				</div>

				<div className="mt-20 grid gap-x-12 gap-y-10 border-t border-[#2F2A23] pt-12 sm:grid-cols-2">
					{craft.map((item) => (
						<div key={item.id} className="flex flex-col gap-2">
							<h2 className="font-display text-[17px] text-[#F1ECE4]">
								{item.title}
							</h2>
							<p className="text-pretty text-[15px] leading-relaxed text-[#ACA49A]">
								{item.body}
							</p>
						</div>
					))}
				</div>

				<div className="mt-20 flex flex-col gap-8 border-t border-[#2F2A23] pt-12 sm:flex-row sm:items-end sm:justify-between">
					<div className="flex max-w-xl flex-col gap-2">
						<span className="eyebrow text-[#F7A93B]">{saroh.label}</span>
						<p className="text-[15px] leading-relaxed text-[#ACA49A]">
							<a
								href={saroh.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#F1ECE4] transition-colors hover:text-[#FCC455]"
							>
								{saroh.name}
							</a>{" "}
							— {saroh.line}
						</p>
					</div>
					<div className="flex flex-col gap-2 sm:items-end">
						<span className="text-sm text-[#847B71]">
							{availability}
						</span>
						<Link
							href="mailto:mohit@himohit.me"
							className="text-[15px] text-[#F1ECE4] transition-colors hover:text-[#FCC455]"
						>
							mohit@himohit.me
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
