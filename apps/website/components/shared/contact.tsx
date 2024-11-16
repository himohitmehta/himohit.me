import Link from "next/link";
import React from "react";

export default function Contact() {
	return (
		<div className="mx-auto max-w-xl py-32 text-center px-4">
			<h1 className="text-4xl font-bold  pb-12">
				Get in touch with me
			</h1>
			<div className="text-xl font-medium text-muted-foreground">
				{" "}
				Reach out to me at{" "}
				<a
					href="mailto:mohit@himohit.me"
					className="text-blue-500 hover:underline"
				>
					{" "}
					mohit@himohit.me
				</a>{" "}
				or on{" "}
				<Link
					href="https://linkedin.com/in/himohitmehta"
					className="text-blue-500 hover:underline"
					target="_blank"
				>
					Linkedin
				</Link>
				!
			</div>
		</div>
	);
}
