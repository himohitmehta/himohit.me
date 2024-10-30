const WithNextra = require("nextra")({
	theme: "nextra-theme-blog",
	themeConfig: "./theme.config.jsx",
});

module.exports = WithNextra();

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
