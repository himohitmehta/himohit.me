import Script from "next/script";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-YJRR9W5LC2"
			></Script>
			<Script id="google-analytics">
				{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-YJRR9W5LC2');
`}
			</Script>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
