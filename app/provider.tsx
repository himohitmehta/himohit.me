import Script from "next/script";
import React from "react";

export default function AppProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
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
			{children}
		</div>
	);
}
