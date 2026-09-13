// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	englishName?: string;
	oneLiner?: string;
	description: string;
	image: string;
	category: "ai-saas" | "hardware" | "education" | "enterprise" | "global";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
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

export const projectsData: Project[] = [
	// AI / SaaS 类
	{
		id: "jiecheng",
		title: "捷程智造",
		englishName: "Jiecheng Smart Manufacturing",
		oneLiner: "智能制造全流程 AI 赋能平台",
		description:
			"捷程智造是面向制造业的 AI 赋能平台，通过计算机视觉、大模型和自动化技术，提升生产效率和质量管控水平。",
		image: "/images/projects/jiecheng.jpg",
		category: "ai-saas",
		techStack: ["Vue.js", "Python", "TensorFlow", "FastAPI"],
		status: "completed",
		startDate: "2024-06-01",
		featured: true,
		tags: ["AI", "SaaS", "智能制造", "计算机视觉"],
		showImage: true,
	},
	{
		id: "wenshu-ai",
		title: "文枢 AI",
		englishName: "Wenshu AI",
		oneLiner: "政务公文 AI 写作与知识管理系统",
		description:
			"文枢 AI 基于 800 万+ 高质量公文语料训练，为政府和企事业单位提供智能公文写作、知识检索和文档自动化解决方案。",
		image: "/images/projects/wenshu-ai.jpg",
		category: "ai-saas",
		techStack: ["React", "Node.js", "LangChain", "PostgreSQL"],
		status: "completed",
		startDate: "2024-03-01",
		featured: true,
		tags: ["AI", "SaaS", "政务", "大模型"],
		showImage: true,
	},
	{
		id: "csca",
		title: "CSCA 南洋出海局",
		englishName: "CSCA Southeast Asia Hub",
		oneLiner: "中国品牌出海东南亚一站式服务平台",
		description:
			"CSCA 南洋出海局致力于帮助中国品牌和产品进入东南亚市场，提供市场调研、本地化运营、跨境电商和 AI 赋能等全链路服务。",
		image: "/images/projects/csca.jpg",
		category: "ai-saas",
		techStack: ["Next.js", "TypeScript", "Supabase"],
		status: "in-progress",
		startDate: "2025-01-01",
		featured: true,
		tags: ["出海", "SaaS", "东南亚", "跨境"],
		showImage: true,
		visitUrl: "https://www.pilarcore.online/",
		sourceCode: "https://github.com/DCMPjmpo/CSCA-agent",
	},
	{
		id: "panyuan-lobster",
		title: "磐元龙虾",
		englishName: "Panyuan Lobster",
		oneLiner: "AI 驱动的小龙虾智慧养殖系统",
		description:
			"磐元龙虾通过物联网传感器、计算机视觉和 AI 算法，实现小龙虾养殖的智能化监测、精准投喂和疾病预警，助力水产养殖数字化转型。",
		image: "/images/projects/panyuan-lobster.jpg",
		category: "ai-saas",
		techStack: ["Python", "Edge AI", "MQTT", "React Native"],
		status: "in-progress",
		startDate: "2025-03-01",
		featured: true,
		tags: ["AI", "农业科技", "物联网", "计算机视觉"],
		showImage: false,
	},
	// Hardware 类
	{
		id: "fast-hardware",
		title: "FAST Hardware",
		englishName: "FAST Hardware",
		oneLiner: "高性能边缘计算硬件平台",
		description:
			"FAST Hardware 专注于边缘 AI 计算硬件研发，为智能制造、智慧安防等场景提供低延迟、高算力的边缘计算解决方案。",
		image: "/images/projects/fast-hardware.jpg",
		category: "hardware",
		techStack: ["C++", "CUDA", "Embedded Linux", "PCB Design"],
		status: "completed",
		startDate: "2024-09-01",
		featured: true,
		tags: ["硬件", "边缘计算", "AI 芯片"],
		showImage: true,
	},
	{
		id: "pilarcore",
		title: "PilarCore",
		englishName: "PilarCore",
		oneLiner: "面向工业场景的核心控制模组",
		description:
			"PilarCore 是专为工业自动化场景设计的核心控制模组，集成高性能处理器和丰富接口，支持多种工业协议，为智能制造提供可靠的底层算力支撑。",
		image: "/images/projects/pilarcore.jpg",
		category: "hardware",
		techStack: ["C", "RTOS", "ARM", "FPGA"],
		status: "in-progress",
		startDate: "2025-06-01",
		tags: ["硬件", "工业控制", "嵌入式"],
		showImage: true,
	},
	// Education 类
	{
		id: "sparkx",
		title: "SparkX 创造营",
		englishName: "SparkX Innovation Camp",
		oneLiner: "青少年 AI 创新与创客教育品牌",
		description:
			"云启少年 SparkX 创造营专注于青少年 AI 教育，通过项目式学习和创客实践，培养学生的计算思维、创新能力和工程素养。",
		image: "/images/projects/sparkx.jpg",
		category: "education",
		techStack: ["Python", "Scratch", "Arduino", "Robotics"],
		status: "completed",
		startDate: "2024-03-01",
		featured: true,
		tags: ["教育", "AI", "青少年", "创客"],
		showImage: true,
	},
	{
		id: "ai-bootcamp",
		title: "AI 编程加速营",
		englishName: "AI Programming Bootcamp",
		oneLiner: "面向大学生的 AI 开发实战训练营",
		description:
			"AI 编程加速营通过密集的实战训练，帮助大学生快速掌握 AI 开发技能，从基础编程到模型部署，全面提升工程能力。",
		image: "/images/projects/ai-bootcamp.jpg",
		category: "education",
		techStack: ["Python", "PyTorch", "FastAPI", "Docker"],
		status: "completed",
		startDate: "2024-07-01",
		endDate: "2024-08-31",
		tags: ["教育", "AI", "编程", "训练营"],
		showImage: false,
	},
	{
		id: "graduation-project",
		title: "AI 毕设辅导",
		englishName: "AI Graduation Project Mentorship",
		oneLiner: "AI 方向毕业设计一对一辅导服务",
		description:
			"为计算机、电子信息等专业的大学生提供 AI 方向毕业设计辅导，涵盖选题、算法实现、论文写作和答辩准备。",
		image: "/images/projects/graduation-project.jpg",
		category: "education",
		techStack: ["Python", "TensorFlow", "LaTeX"],
		status: "completed",
		startDate: "2023-09-01",
		tags: ["教育", "AI", "毕业设计"],
		showImage: false,
	},
	// Enterprise / B2G 类
	{
		id: "yuchen-3d",
		title: "宇晨三维录入系统",
		englishName: "Yuchen 3D Scanning System",
		oneLiner: "工业级三维扫描与数据录入解决方案",
		description:
			"宇晨三维录入系统为企业提供高精度三维扫描服务，支持物体数字化、尺寸测量和质量检测，广泛应用于制造业和文博领域。",
		image: "/images/projects/yuchen-3d.jpg",
		category: "enterprise",
		techStack: ["C++", "OpenGL", "Point Cloud Processing"],
		status: "completed",
		startDate: "2024-05-01",
		tags: ["企业服务", "三维扫描", "B2G"],
		showImage: false,
	},
	{
		id: "border-vision",
		title: "边境智慧视觉",
		englishName: "Border Intelligent Vision",
		oneLiner: "边境安防智能视觉监控系统",
		description:
			"边境智慧视觉系统利用 AI 计算机视觉技术，实现边境线的智能监控、异常行为检测和自动预警，提升边境安全防控能力。",
		image: "/images/projects/border-vision.jpg",
		category: "enterprise",
		techStack: ["Python", "YOLO", "DeepStream", "Edge AI"],
		status: "completed",
		startDate: "2024-08-01",
		tags: ["B2G", "安防", "计算机视觉", "边缘计算"],
		showImage: true,
	},
	{
		id: "subsidy-assist",
		title: "企业补贴协助",
		englishName: "Enterprise Subsidy Assistance",
		oneLiner: "AI 驱动的企业政策补贴申报助手",
		description:
			"企业补贴协助服务通过 AI 技术自动匹配企业可申报的政策补贴项目，提供智能申报辅导，帮助企业高效获取政策支持。",
		image: "/images/projects/subsidy-assist.jpg",
		category: "enterprise",
		techStack: ["NLP", "Knowledge Graph", "React", "Node.js"],
		status: "completed",
		startDate: "2025-02-01",
		tags: ["企业服务", "政策", "AI"],
		showImage: false,
	},
	// Global 类
	{
		id: "digital-garage",
		title: "数字车库",
		englishName: "Digital Garage",
		oneLiner: "面向全球市场的 AI 产品孵化器",
		description:
			"数字车库是硅步工作室的全球产品孵化平台，快速验证和推出面向国际市场的 AI 产品，探索全球化机会。",
		image: "/images/projects/digital-garage.jpg",
		category: "global",
		techStack: ["Next.js", "Supabase", "Stripe"],
		status: "in-progress",
		startDate: "2025-04-01",
		tags: ["出海", "孵化器", "AI", "全球化"],
		showImage: false,
	},
	{
		id: "chemetall-recommender",
		title: "Chemetall 多智能体推荐系统",
		englishName: "Chemetall Multi-Agent Recommender",
		oneLiner: "化工行业多智能体产品推荐系统",
		description:
			"为国际化工企业 Chemetall 打造的多智能体推荐系统，通过 AI Agent 协作理解客户需求，精准推荐化工产品解决方案。",
		image: "/images/projects/chemetall.jpg",
		category: "global",
		techStack: ["Python", "LangGraph", "Vector DB", "FastAPI"],
		status: "completed",
		startDate: "2025-01-01",
		endDate: "2025-06-01",
		tags: ["出海", "多智能体", "推荐系统", "B2B"],
		showImage: false,
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
