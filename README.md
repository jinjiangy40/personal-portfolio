# 袁锦江 · AI 产品作品集

创建时间：2026-08-01  
更新时间：2026-08-03

个人作品集网站。已从 ChatGPT Sites（vinext / 私密站点）迁移为标准 Next.js 静态导出，可公开访问、本地修改与任意静态托管部署。

## 在线地址

https://yuan-jinjiang-portfolio-cn.pages.dev/

## 技术栈

- Next.js 15（`output: "export"` 静态导出）
- React 19
- TypeScript
- Tailwind CSS 4
- Cloudflare Pages 托管

## 本地运行

需要 Node.js `>=20`。

```bash
npm install
npm run dev
```

浏览器打开：`http://localhost:3000`

## 构建与部署

```bash
npm run build
npx wrangler pages deploy "out" --project-name="yuan-jinjiang-portfolio-cn" --branch="main" --commit-dirty=true
```

静态文件输出到 `out/`。请始终部署到现有 Pages 项目 `yuan-jinjiang-portfolio-cn`，不要新建项目。

不要使用：`npx wrangler deploy`（会发布到 workers.dev）。

## 主要目录

- `app/`：页面、文案、交互与样式
- `app/projects/`：项目案例数据与详情页
- `public/`：照片、脱敏简历、分享封面与案例素材

## 说明

仓库中仍保留部分旧 vinext 模板文件（如 `worker/`、`vite.config.ts`、`build/`），本地开发与构建不会使用它们。
