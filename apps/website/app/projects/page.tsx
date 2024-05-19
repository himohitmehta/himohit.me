import React from "react";
import Projects from "@/components/home/projects";

export default function ProjectsPage() {
	return (
		<div className="pt-24">
			{" "}
			<Projects title="Deployed on Production" filter="official" />
			<Projects title="Personal Projects" filter="personal" />
		</div>
	);
}
