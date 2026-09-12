# 硅步工作室 · Silicon Step Studio

> AI 技术赋能 · 产品化 · 创造与探索
>
> AI Productization · Build · Explore · Ship

[![Astro](https://img.shields.io/badge/Astro-7.1.3-orange)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

**NANNING · CHINA**

---

## 关于我们

硅步工作室是一家以 AI 技术为核心的产品化赋能平台，总部位于中国南宁。

我们把技术能力、行业知识与运营经验，封装为可复制、可售卖、可自动化的产品，专注于 AI SaaS、企业 AI、出海、教育和社区生态建设。

> 这不是一个普通公司官网。
> 这是一个真实在做 AI 产品、参加比赛、做出海、做教育、运营技术社区的年轻工作室的数字档案。

## 业务板块

| 板块 | 说明 |
|------|------|
| **AI / SaaS** | 捷程智造、文枢 AI、CSCA 南洋出海局、磐元龙虾 |
| **Hardware** | FAST Hardware、PilarCore |
| **Education** | SparkX 创造营、AI 编程加速营、AI 毕设辅导 |
| **Enterprise / B2G** | 宇晨三维录入系统、边境智慧视觉、企业补贴协助 |
| **Global** | 数字车库、Chemetall 多智能体推荐系统、AI 视频处理自动化 |

## 荣誉与里程碑

- 🏆 **AdventureX 2026 全球金奖** — 60+ 国家与地区参赛舞台
- 🥈 **AI HACKATHON 环球黑客松银奖** — 48 小时产品原型
- ⭐ **智极松 AI Skillathon 优秀奖**
- 🥇 **全国大学生物联网设计竞赛全国总决赛一等奖**
- 📰 18+ 媒体与平台报道
- 🌏 60+ 国家与地区赛事舞台

## 技术栈

- **框架**: [Astro 7](https://astro.build) — 静态站点生成
- **UI 组件**: [Svelte 5](https://svelte.dev)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com)
- **语言**: TypeScript
- **内容**: Markdown / MDX
- **搜索**: Pagefind
- **动画**: Swup 页面过渡
- **主题**: 明/暗色模式 + 自定义主题色

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
# → http://localhost:4321

# 生产构建
pnpm build

# 预览生产构建
pnpm preview
```

## 项目结构

```
Mizuki-master/
├── src/
│   ├── config/          # 站点配置（导航、侧栏、Profile 等）
│   ├── content/
│   │   ├── posts/       # Journal 文章（按分类子目录）
│   │   └── spec/        # About / Friends 等页面内容
│   ├── data/            # 结构化数据（项目、时间线、社区等）
│   ├── components/      # Astro & Svelte 组件
│   ├── pages/           # 页面路由
│   ├── layouts/         # 布局模板
│   └── styles/          # 全局样式
├── public/
│   └── images/          # 图片资源（studio / projects / events / ...）
└── astro.config.mjs     # Astro 配置
```

## 内容管理

### 新增 Journal 文章

```bash
pnpm new-post -- category/filename
```

文章放在 `src/content/posts/` 下，支持 `.md` 和 `.mdx`。

### 新增项目

编辑 `src/data/projects.ts`，每个项目支持：

```typescript
{
  title: "项目名称",
  englishName: "Project Name",
  oneLiner: "一句话定位",
  description: "项目介绍",
  category: "ai-saas" | "hardware" | "education" | "enterprise" | "global",
  techStack: ["Astro", "TypeScript", ...],
  status: "已上线" | "开发中" | "规划中",
  visitUrl: "https://...",     // 可选：产品访问地址
  sourceCode: "https://...",   // 可选：GitHub 地址
  caseStudyUrl: "https://...", // 可选：案例研究
  featured: true,              // 是否首页精选
}
```

### 更新时间线

编辑 `src/data/timeline.ts`，添加工作室里程碑。

### 更新社区伙伴

编辑 `src/data/friends.ts`。

## 部署

项目可部署到任意静态托管平台：

- **Vercel** — 仓库已包含 `vercel.json` 配置
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

部署前请确认 `src/config/siteConfig.ts` 中的 `siteURL` 已更新为正式域名。

## 关于本项目

本网站基于 [Mizuki](https://github.com/LyraVoid/Mizuki) 主题改造，保留原主题的设计语言和交互体验，内容体系已全面重构为硅步工作室展示站。

## 联系方式

- GitHub: [@DCMPjmpo](https://github.com/DCMPjmpo)
- 坐标：中国 · 南宁
- 定位：AI Productization · Build · Explore · Ship

---

**硅步工作室** — 不积跬步，无以至千里。
