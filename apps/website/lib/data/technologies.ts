import {
	SiMui,
	SiNextdotjs,
	SiReact,
	SiRedux,
	SiTailwindcss,
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
	},
	{
		name: "Express",
		type: "backend",
		id: "express",
	},
	{
		name: "Python",
		type: "backend",
		id: "python",
	},
	{
		name: "Flask",
		type: "backend",
		id: "flask",
	},
	{
		name: "Firebase",
		type: "backend",
		id: "firebase",
	},
	{
		name: "MongoDB",
		type: "database",
		id: "mongodb",
	},
	{
		name: "MySQL",
		type: "database",
		id: "mysql",
	},
	{
		name: "Firebase Firestore",
		type: "database",
		id: "firestore",
	},
	{
		name: "Vercel",
		type: "hosting",
		id: "vercel",
	},
	{
		name: "Netlify",
		type: "hosting",
		id: "netlify",
	},
	{
		name: "Firebase Hosting",
		type: "hosting",
		id: "firebase-hosting",
	},
	{
		name: "AWS",
		type: "hosting",
		id: "aws",
	},
	{
		name: "Digital Ocean",
		type: "hosting",
		id: "digital-ocean",
	},
	{
		name: "Git",
		type: "other",
		id: "git",
	},
	{
		name: "Github",
		type: "other",
		id: "github",
	},
	{
		name: "Gitlab",
		type: "other",
		id: "gitlab",
	},
	{
		name: "Jira",
		type: "other",
		id: "jira",
	},
	{
		name: "Trello",
		type: "other",
		id: "trello",
	},
	{
		name: "Slack",
		type: "other",
		id: "slack",
	},
	{
		name: "Figma",
		type: "other",
		id: "figma",
	},
	{
		name: "Adobe XD",
		type: "other",
		id: "adobe-xd",
	},
];

export default technologiesData;
