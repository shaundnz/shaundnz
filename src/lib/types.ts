export interface JobHistoryItem {
	title: string;
	timespan: string;
	bulletPoints: string[];
}

export interface Project {
	title: string;
	tags: string[];
	githubLink: string;
	demoLink: string;
	description: string[];
	imageUrl: string;
}
