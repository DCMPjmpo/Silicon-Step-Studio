// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "SeeAI 创新社区",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "推动南宁 AI 技术交流与创新创业生态",
		siteurl: "https://siliconstep.studio/",
		tags: ["社区", "AI"],
	},
	{
		id: 2,
		title: "扶遥匯 OPC",
		imgurl:
			"https://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "东方智云 OPC 创业社区",
		siteurl: "https://siliconstep.studio/",
		tags: ["社区", "创业"],
	},
	{
		id: 3,
		title: "五象新区",
		imgurl: "https://avatars.githubusercontent.com/u/14985020?v=4&s=640",
		desc: "面向东盟的现代化新区",
		siteurl: "https://siliconstep.studio/",
		tags: ["政府", "园区"],
	},
	{
		id: 4,
		title: "SparkX 创造营",
		imgurl: "https://avatars.githubusercontent.com/u/67109815?v=4&s=640",
		desc: "青少年 AI 创新与创客教育",
		siteurl: "https://siliconstep.studio/",
		tags: ["教育", "AI"],
	},
	{
		id: 5,
		title: "创客夜",
		imgurl: "https://avatars.githubusercontent.com/u/6154722?v=4&s=640",
		desc: "南宁本地技术爱好者聚会",
		siteurl: "https://siliconstep.studio/",
		tags: ["社区", "技术"],
	},
	{
		id: 6,
		title: "CSCA 南洋出海局",
		imgurl: "https://avatars.githubusercontent.com/u/6412038?v=4&s=640",
		desc: "中国品牌出海东南亚一站式服务",
		siteurl: "https://siliconstep.studio/",
		tags: ["出海", "东南亚"],
	},
	{
		id: 7,
		title: "广西 AI 产业联盟",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "待补充",
		siteurl: "https://siliconstep.studio/",
		tags: ["产业", "AI"],
	},
	{
		id: 8,
		title: "南宁广播电视台",
		imgurl: "https://avatars.githubusercontent.com/u/7565578?v=4&s=640",
		desc: "媒体报道合作",
		siteurl: "https://siliconstep.studio/",
		tags: ["媒体"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
