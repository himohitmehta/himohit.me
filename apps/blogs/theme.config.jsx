export default {
	footer: false,
	head: ({ title, meta }) => (
		<>
			{meta.description && (
				<meta name="description" content={meta.description} />
			)}
			{meta.tag && <meta name="keywords" content={meta.tag} />}
			{meta.author && <meta name="author" content={meta.author} />}
			<link
				rel="alternate"
				type="application/rss+xml"
				title="Mohit Mehta"
				href="/feed.xml"
			/>
		</>
	),
	readMore: "Read More →",
	postFooter: null,
	// darkMode: false,
};
