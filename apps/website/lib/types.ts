import { IconType } from "react-icons";

type Project = {
	id: string;
	title: string;
	description?: string;
	image?: string;
	builtWith: string[];
	icons?: string[];
	githubLink?: string;
	publishedAt?: string;
	link?: string;
	links?: string[];
	status?: ProjectStatus | ProjectStatus[];
	type?: ProjectType | ProjectType[];
	from_date?: string;
	to_date?: string;
};
type ProjectType =
	| "official"
	| "personal"
	| "tutorial"
	| "open-source"
	| "work"
	| "hivepath";

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

export type { Project, TechStack, ProjectStatus, ProjectType, TechStackType };
