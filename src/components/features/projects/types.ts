export interface Project {
	id: string;
	title: string;
	englishName?: string;
	oneLiner?: string;
	description: string;
	image?: string;
	category: "ai-saas" | "hardware" | "education" | "enterprise" | "global";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	demoUrl?: string;
	sourceUrl?: string;
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	caseStudyUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export interface ProjectCardProps {
	project: Project;
	size?: "small" | "medium" | "large";
	showImage?: boolean;
	maxTechStack?: number;
}
