import Link from "next/link";
import { availability, saroh, variantIntro } from "@/lib/data/variants";
import VariantSwitcher from "../switcher";

/* Three statements, nothing else. Uses the craft points as prose, not a list. */
const statements = [
	{
		lead: "I work on the screens where things ",
		accent: "actually go wrong",
		tail: " — checkout flows, billing screens, dashboards holding more data than fits.",
	},
	{
		lead: "I ship big changes ",
		accent: "in pieces small enough",
		tail: " for someone else to review, without taking the product down.",
	},
	{
		lead: "Now building Saroh. ",
		accent: "The code is public,",
		tail: " so you can check any of this.",
	},
];

export default function ThreePage() {
	return (
		<main className="flex min-h-screen flex-col bg-[#0C0A09] text-[#F1ECE4]">
			<VariantSwitcher current="three" />

			<div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
				<div className="flex items-baseline justify-between gap-6">
					<span className="font-display text-[15px]">Mohit Mehta</span>
					<span className="text-[11px] uppercase tracking-[0.28em] text-[#746C63]">
						{variantIntro.eyebrow}
					</span>
				</div>

				<div className="flex flex-1 flex-col justify-center py-16">
					{statements.map((s, i) => (
						<p
							key={i}
							className={`display max-w-5xl text-pretty py-8 text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.24] sm:py-10 ${
								i < statements.length - 1
									? "border-b border-[#2F2A23]"
									: ""
							} ${i === 0 ? "text-[#F1ECE4]" : "text-[#ACA49A]"}`}
						>
							{s.lead}
							<span
								className={
									i === 0 ? "text-[#F7A93B]" : "text-[#F1ECE4]"
								}
							>
								{s.accent}
							</span>
							{s.tail}
						</p>
					))}
				</div>

				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<span className="text-sm text-[#847B71]">
						{availability}
					</span>
					<div className="flex items-center gap-7 text-[15px]">
						<a
							href={saroh.repo}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#F7A93B] transition-colors hover:text-[#FCC455]"
						>
							Read the code
						</a>
						<Link
							href="mailto:mohit@himohit.me"
							className="text-[#F1ECE4] transition-colors hover:text-[#FCC455]"
						>
							mohit@himohit.me
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
