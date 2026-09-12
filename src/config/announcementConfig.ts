import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "欢迎来到硅步工作室", // 公告标题，填空使用i18n字符串Key.announcement
	content: "我们以 AI 技术为核心，专注于产品化赋能。探索我们的项目与动态。", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "了解更多", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};
