// Constants for the experience page

import type { JobHistoryItem, Project } from './types';

export const languages = [
	'TypeScript',
	'JavaScript',
	'Node',
	'Java',
	'C#',
	'Python',
	'C',
	'SQL',
	'NoSQL',
	'HTML',
	'CSS'
];

export const frameworks = [
	'React',
	'Svelte',
	'ASP.NET',
	'NextJS',
	'Jest',
	'Redux',
	'Express',
	'Cypress'
];

export const tools = [
	'Git',
	'AWS',
	'Azure',
	'Docker',
	'Jira',
	'Jenkins',
	'BitBucket',
	'GitHub',
	'Agile',
	'CI/CD',
	'Splunk'
];

export const jobHistory: JobHistoryItem[] = [
	{
		title: 'Software Engineer',
		timespan: 'Cornerstone OnDemand | March 2023 - Present',
		bulletPoints: [
			"Independently implemented an API interface between Check-Ins (a Cornerstone product) and Cornerstone's internal MS Teams notification service to push daily updates to Check-Ins users. I managed communications with external teams to align requirements and integrate with their services.",
			'Developed new features for Check-Ins as part of an agile team. Notably, a notification service, and a read-only mode for Check-Ins meetings. I was involved in all stages of development, from refining requirements, making architecture decisions, development, and testing.',
			'Resolved client and internal defects. I leveraged my proficiency of the React frontend and C# backend to diagnose issues and deploy fixes in a timely manner, as well as write effective tests to prevent regressions.'
		]
	},
	{
		title: 'Associate Software Engineer',
		timespan: 'Cornerstone OnDemand | March 2022 - March 2023',
		bulletPoints: [
			'Independently integrated a new Rich Text Editor into Check-Ins, carefully ensuring all existing functionally was maintained. This became a key selling point in retaining a client concerned about the security of the previous text editor.',
			'Gained extensive experience working with React and ASP.NET within an agile team on large production codebases with CI/CD pipelines. I gained a strong understanding of best practices and processes of software development over multiple releases, and was able to develop new features and resolve defects independently'
		]
	},
	{
		title: 'Software Engineering Intern',
		timespan: 'Cornerstone OnDemand | November 2021 - February 2023',
		bulletPoints: [
			'Worked in the UI kit team building company wide developer tooling and component library with Typescript and React.',
			'Built a new component from scratch for the shared component library in React. Communicated with stakeholders and gave demos of development progress. Created comprehensive tests with Jest and React testing library.',
			'Won a company wide hackathon against 60+ teams for out project "Building accessibility testing into the deployment pipeline”.'
		]
	}
];

// Constants for the projects page

export const projects: Project[] = [
	{
		title: 'CHAT APP',
		tags: ['Svelte', 'NestJs', 'WebSockets', 'REST API', 'AWS', 'CI/CD'],
		githubLink: 'https://github.com/shaundnz/chat-group-client',
		demoLink: 'https://chat-app.shaundnz.com',
		description: [
			'A full stack chat application similar to Discord or Slack, communicate with anyone in real time!',
			'Comes with a fully functional CI/CD pipeline, that runs tests and deploys the application to AWS on any push to main. The frontend is a static site hosted on S3 and served through CloudFront, and the backend runs on an ECS cluster behind a load balancer.',
			'Visit the README to see more information about the application architecture.'
		]
	},
	{
		title: 'GITIFY',
		tags: ['Svelte', 'Lambda', 'API Gateway', 'DynamoDB', 'Serverless', 'AWS'],
		githubLink: 'https://github.com/shaundnz/gitify-client',
		demoLink: 'https://gitify.shaundnz.com/',
		description: [
			'Track how Spotify playlists change over time with version control!',
			'Serverless Lambdas take a snapshot of tracked playlists once a day and stores this information in a DynamoDB table. An easy to use interface allows you to see the how playlists look at different points in time.'
		]
	},

	{
		title: 'CAT WIKI',
		tags: ['TypeScript', 'React', 'Next.js'],
		githubLink: 'https://github.com/shaundnz/cat-wiki',
		demoLink: 'https://cat-wiki-shaundnz.netlify.app/',
		description: [
			'One stop shop for all information related to our feline friends! Search for different breeds or browse them all!',
			"Created using NextJS's static site generation features for extremely fast load times. The website was built using a mobile first approach and is fully responsive with the help of the features provided by ChakraUI."
		]
	}
];
