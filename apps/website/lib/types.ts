import { IconType } from "react-icons";

type Project = {
	id: string;
	title: string;
	description?: string;
	image?: string;
	builtWith: string | string[];
	icons?: string[];
	githubLink?: string;
	publishedAt?: string;
	link?: string;
	links?: string[];
	status?: ProjectStatus | ProjectStatus[];
	type?: ProjectType | ProjectType[];
};
type ProjectType =
	| "official"
	| "personal"
	| "tutorial"
	| "open-source"
	| "work";

type ProjectStatus =
	| "planned"
	| "maintained"
	| "deprecated"
	| "archived"
	| "active"
	| "in-progress"
	| "not-working"
	| "completed"
	| "not-maintained";

type TechStack = {
	name: string;
	id: string;
	icon?: IconType;
	type: TechStackType | TechStackType[];
	color?: string;
};
type TechStackType = "frontend" | "backend" | "database" | "hosting" | "other";

export type { Project, TechStack };
