import { ImageResponse } from "next/og";

/*
  Social card for himohit.me — rendered at build time by next/og.
  Next.js picks this file up automatically and writes the OpenGraph and
  Twitter image tags, so there's nothing to wire up in layout.tsx.

  Colours are the site's own tokens resolved to hex, because satori can't
  read CSS custom properties. The card mirrors the page: paper ground,
  mono type, amber as a highlight block rather than coloured text.
*/

export const alt =
	"Mohit Mehta — I work on the screens where things actually go wrong.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#efece5";
const INK = "#0f0d0c";
const INK_DIM = "#3b3630";
const INK_FAINT = "#6b645b";
const LINE = "#cfc8ba";
const AMBER = "#f7a93b";

/*
  satori needs a real font file; it cannot use next/font. Google serves
  TrueType instead of woff2 to a user agent that predates woff2, which is
  the only reliable way to get a .ttf out of it. If the fetch fails the
  card still renders in the default sans — a plainer card beats a failed
  build, so this never throws.
*/
async function loadMono(weight: 400 | 700) {
	try {
		const css = await fetch(
			`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}`,
			{ headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1)" } },
		).then((r) => r.text());

		const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
		if (!url) return null;

		return await fetch(url).then((r) => r.arrayBuffer());
	} catch {
		return null;
	}
}

export default async function OpengraphImage() {
	const [regular, bold] = await Promise.all([loadMono(400), loadMono(700)]);

	const fonts = [
		regular && {
			name: "JetBrains Mono",
			data: regular,
			weight: 400 as const,
			style: "normal" as const,
		},
		bold && {
			name: "JetBrains Mono",
			data: bold,
			weight: 700 as const,
			style: "normal" as const,
		},
	].filter(Boolean) as {
		name: string;
		data: ArrayBuffer;
		weight: 400 | 700;
		style: "normal";
	}[];

	const font = fonts.length ? "JetBrains Mono" : undefined;

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundColor: PAPER,
					padding: "64px 72px",
					fontFamily: font,
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						fontSize: 22,
						color: INK_FAINT,
					}}
				>
					<div style={{ display: "flex" }}>mohit</div>
					<div style={{ display: "flex" }}>
						senior software engineer · remote
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							color: INK,
							fontSize: 62,
							fontWeight: 700,
							lineHeight: 1.3,
							letterSpacing: "-0.02em",
						}}
					>
						<div style={{ display: "flex" }}>
							I work on the screens where things
						</div>
						<div
							style={{
								display: "flex",
								backgroundColor: AMBER,
								padding: "2px 14px",
								marginTop: 12,
							}}
						>
							actually go wrong
						</div>
						<div style={{ display: "flex", marginTop: 12 }}>.</div>
					</div>

					<div
						style={{
							display: "flex",
							marginTop: 34,
							color: INK_DIM,
							fontSize: 26,
							lineHeight: 1.6,
							maxWidth: 860,
						}}
					>
						Six years of React, Next.js and TypeScript. Checkout
						flows, billing screens, dashboards holding more data
						than fits on a screen.
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							display: "flex",
							height: 1,
							width: "100%",
							backgroundColor: LINE,
							marginBottom: 22,
						}}
					/>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							fontSize: 22,
							color: INK_FAINT,
						}}
					>
						<div style={{ display: "flex" }}>
							building saroh — source available
						</div>
						<div style={{ display: "flex", color: INK }}>
							himohit.me
						</div>
					</div>
				</div>
			</div>
		),
		{ ...size, fonts: fonts.length ? fonts : undefined },
	);
}
