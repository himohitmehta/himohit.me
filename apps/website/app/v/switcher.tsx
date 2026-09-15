import Link from "next/link";
import { variants } from "@/lib/data/variants";

/*
  A small fixed bar for comparing the variants side by side.
  Drafting aid only — it does not ship with whichever one wins.
*/
export default function VariantSwitcher({
	current,
	light = false,
}: {
	current: string;
	light?: boolean;
}) {
	return (
		<div
			className={`sticky top-0 z-50 flex flex-wrap items-center gap-x-1 gap-y-1 border-b px-4 py-2 text-[11px] backdrop-blur-md ${
				light
					? "border-black/10 bg-white/70 text-[#6A635A]"
					: "border-white/10 bg-black/50 text-ink-muted"
			}`}
		>
			<span className="mr-2 uppercase tracking-[0.18em] opacity-70">
				Variant
			</span>
			{variants.map((v) => {
				const isCurrent = v.slug === current;
				return (
					<Link
						key={v.slug}
						href={`/v/${v.slug}`}
						title={v.note}
						className={`rounded-full px-3 py-1 transition-colors ${
							isCurrent
								? light
									? "bg-[#12100E] text-white"
									: "bg-ink text-bg"
								: "hover:bg-black/10 dark:hover:bg-white/10"
						}`}
					>
						{v.name}
					</Link>
				);
			})}
			<Link
				href="/"
				className="ml-auto rounded-full px-3 py-1 opacity-70 transition-opacity hover:opacity-100"
			>
				Live site →
			</Link>
		</div>
	);
}
