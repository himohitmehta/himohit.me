import Link from "next/link";
import { variants } from "@/lib/data/variants";

export default function VariantsIndex() {
	return (
		<main className="min-h-screen bg-bg text-ink">
			<div className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-10">
				<p className="eyebrow mb-5">Drafts</p>
				<h1 className="display text-[clamp(1.8rem,5vw,3rem)]">
					Landing page variants
				</h1>
				<p className="mt-5 max-w-xl leading-relaxed text-ink-dim">
					Four takes on the same content — the craft qualities plus
					Saroh. Nothing here is live.
				</p>

				<div className="mt-12 flex flex-col">
					{variants.map((v) => (
						<Link
							key={v.slug}
							href={`/v/${v.slug}`}
							className="group flex items-baseline justify-between gap-6 border-t border-line py-5 transition-colors hover:border-line-strong"
						>
							<span className="font-display text-lg transition-colors group-hover:text-amber-bright">
								{v.name}
							</span>
							<span className="text-right text-sm text-ink-muted">
								{v.note}
							</span>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
