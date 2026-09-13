import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp",
	name: "硅步工作室",
	bio: "AI 技术赋能 · 产品化 · 创造与探索",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 60, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/DCMPjmpo",
		},
		{
			name: "小红书",
			icon: "simple-icons:xiaohongshu",
			url: "",
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			url: "",
		},
	],
};
