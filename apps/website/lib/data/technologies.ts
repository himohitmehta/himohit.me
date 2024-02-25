import {
	SiAdobexd,
	SiDigitalocean,
	SiExpress,
	SiFigma,
	SiFirebase,
	SiFlask,
	SiGit,
	SiGithub,
	SiGitlab,
	SiJira,
	SiMongodb,
	SiMui,
	SiMysql,
	SiNetlify,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiReact,
	SiRedux,
	SiSlack,
	SiTailwindcss,
	SiTrello,
	SiVercel,
} from "react-icons/si";
import { TechStack } from "../types";

// I want to write the data for the technologies I have worked on
// I will give you the list of technologies I have worked on with their type
// you have to automatically generate the list of technologies I have worked on
//frontend: React, NextJS, Tailwind CSS, Material UI, Redux,
// backend: NodeJS, Express, Python, Flask, Firebase
// Database: MongoDB, MySQL, Firebase Firestore,
// Deployments: Vercel, Netlify, Firebase Hosting, AWS, Digital Ocean
// Other: Git, Github, Gitlab, Jira, Trello, Slack, Figma, Adobe XD,

const technologiesData: TechStack[] = [
	{
		name: "React",
		type: "frontend",
		id: "react",
		icon: SiReact,
	},
	{
		name: "NextJS",
		type: "frontend",
		id: "nextjs",
		icon: SiNextdotjs,
	},
	{
		name: "Tailwind CSS",
		type: "frontend",
		id: "tailwindcss",
		icon: SiTailwindcss,
	},
	{
		name: "Material UI",
		type: "frontend",
		id: "materialui",
		icon: SiMui,
	},
	{
		name: "Redux",
		type: "frontend",
		id: "redux",
		icon: SiRedux,
	},
	{
		name: "NodeJS",
		type: "backend",
		id: "nodejs",
		icon: SiNodedotjs,
	},
	{
		name: "Express",
		type: "backend",
		id: "express",
		icon: SiExpress,
	},
	{
		name: "Python",
		type: "backend",
		id: "python",
		icon: SiPython,
	},
	{
		name: "Flask",
		type: "backend",
		id: "flask",
		icon: SiFlask,
	},
	{
		name: "Firebase",
		type: "backend",
		id: "firebase",
		icon: SiFirebase,
	},
	{
		name: "MongoDB",
		type: "database",
		id: "mongodb",
		icon: SiMongodb,
	},
	{
		name: "MySQL",
		type: "database",
		id: "mysql",
		icon: SiMysql,
	},
	{
		name: "Vercel",
		type: "hosting",
		id: "vercel",
		icon: SiVercel,
	},
	{
		name: "Netlify",
		type: "hosting",
		id: "netlify",
		icon: SiNetlify,
	},

	{
		name: "Digital Ocean",
		type: "hosting",
		id: "digital-ocean",
		icon: SiDigitalocean,
	},
	{
		name: "Git",
		type: "other",
		id: "git",
		icon: SiGit,
	},
	{
		name: "Github",
		type: "other",
		id: "github",
		icon: SiGithub,
	},
	{
		name: "Gitlab",
		type: "other",
		id: "gitlab",
		icon: SiGitlab,
	},
	{
		name: "Jira",
		type: "other",
		id: "jira",
		icon: SiJira,
	},
	{
		name: "Trello",
		type: "other",
		id: "trello",
		icon: SiTrello,
	},
	{
		name: "Slack",
		type: "other",
		id: "slack",
		icon: SiSlack,
	},
	{
		name: "Figma",
		type: "other",
		id: "figma",
		icon: SiFigma,
	},
];

export default technologiesData;
