# 袁锦江 · AI 产品作品集

创建时间：2026-08-01  
更新时间：2026-08-02

个人作品集网站。已从 ChatGPT Sites（vinext / 私密站点）迁移为标准 Next.js 静态导出，可公开访问、本地修改与任意静态托管部署。

## 技术栈

- Next.js 15（`output: "export"` 静态导出）
- React 19
- TypeScript
- Tailwind CSS 4

## 本地运行

需要 Node.js `>=20`。

```bash
npm install
npm run dev
```

浏览器打开：`http://localhost:3000`

## 构建与预览

```bash
npm run build
```

静态文件输出到 `out/`。可用任意静态服务器预览：

```bash
npx serve out
```

## 主要目录

- `app/`：页面、文案、交互与样式
- `app/projects/`：项目案例数据与详情页
- `public/`：照片、脱敏简历、分享封面

## 部署说明

当前构建产物为纯静态站点（`out/`），可部署到：

- Cloudflare Pages（大陆访问相对友好，推荐）
- Vercel
- GitHub Pages / Netlify 等任意静态托管

不再依赖 ChatGPT Sites 登录与私密访问控制。

## 说明

仓库中仍保留部分旧 vinext 模板文件（如 `worker/`、`vite.config.ts`、`build/`），本地开发与构建不会使用它们；后续可清理。
