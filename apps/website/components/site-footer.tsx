import Link from "next/link";
import { founder } from "@/lib/data/journey";
import { availability } from "@/lib/data/site";

/*
  One footer for every page, so the availability line is stated once in a
  consistent place rather than repeated as page content.
*/
export default function SiteFooter() {
	return (
		<footer className="page flex flex-col gap-4 border-t border-line pb-16 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
			<span>{availability}</span>
			<div className="flex flex-wrap gap-6">
				<a
					href={founder.links.github}
					target="_blank"
					rel="noopener noreferrer"
					className="tap underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
				>
					github
				</a>
				<a
					href={founder.links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="tap underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
				>
					linkedin
				</a>
				<Link
					href={`mailto:${founder.email}`}
					className="tap underline decoration-line-strong underline-offset-4 transition-colors hover:text-amber-deep"
				>
					{founder.email}
				</Link>
			</div>
		</footer>
	);
}
