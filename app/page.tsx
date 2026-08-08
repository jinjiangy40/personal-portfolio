"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "首页" },
  { id: "experience", label: "经历" },
  { id: "projects", label: "项目" },
  { id: "practice", label: "实践" },
  { id: "contact", label: "联系" },
] as const;

const experiences = [
  {
    period: "2026.06 — 2026.08",
    org: "湖南中南智能装备",
    role: "中央研究院实习生",
    points: [
      "参与国家项目「基于工艺知识图谱的离线编程软件」",
      "完成工艺 / 材料数据清洗、结构化与知识库维护",
      "协助验证大模型检索与工艺推荐效果",
    ],
  },
  {
    period: "2025.06 — 2025.08",
    org: "上海金仕达",
    role: "FICC 产品部 · 软件开发实习生",
    points: [
      "围绕金融 AI 智能体开展竞品调研",
      "对比自研平台与 Coze、豆包、MiniMax",
      "完成 Coze 智能体搭建，并参与功能复测、Bug 追踪与数据更新",
    ],
  },
  {
    period: "2024.06 — 2024.08",
    org: "长沙顺通云科技",
    role: "实习工程师",
    points: [
      "参与湖南省妇幼官网重构",
      "负责功能复测、问题记录与进度跟进",
      "协助保障项目上线",
    ],
  },
  {
    period: "2023.09 — 至今",
    org: "教育服务与校园市场",
    role: "校园大使 / 社群运营",
    highlight: true,
    points: [
      "累计对接 10+ 家教育 / 培训机构",
      "累计签约金额 10 万元+",
      "多个 200+ 人校园兼职社群",
      "参与珠海、澳门高校市场拓展",
    ],
  },
];

const quickSignals = [
  { value: "3", note: "段实习" },
  { value: "10万+", note: "累计签约" },
  { value: "10+", note: "家机构" },
  { value: "200+", note: "人社群" },
];

const practiceItems = [
  {
    title: "活动运营",
    points: [
      "协助统筹 ZOWIE GEAR CS2 高校赛澳门赛区赛事执行",
      "协助参与王者荣耀高校联赛澳门赛区",
      "独立负责金铲铲之战校内赛全流程，参赛 120+ 人",
    ],
  },
  {
    title: "策划与商务",
    points: [
      "参与赞助拓展",
      "撰写联展、联赛、万圣节等多份校园活动策划案",
      "参与方案、活动与现场协调执行",
    ],
  },
  {
    title: "公开表达",
    points: [
      "担任校园歌手大赛总决赛主持",
      "1×100 俱乐部多次完成 50–60 人主题分享",
      "持续练习公开表达与临场沟通",
    ],
  },
  {
    title: "校外成长",
    points: [
      "1×100 俱乐部优秀学员 / 优秀教练员",
      "入选哈尔滨工业大学第二届计算城市科学营",
      "参与跨学科 AI 应用课题学习与交流",
    ],
  },
];

const showcaseProjects = [
  {
    slug: "slidefix",
    title: "SlideFix",
    subtitle: "PPT 交稿助手",
    hook: "针对 PPT 动画、备注批量清理易漏易误改的问题，设计「生成变更计划 → 预览 → 确认处理」的产品流程。",
    cover: "/projects/slidefix/ui-home.png",
    tags: "产品设计 / AI 辅助开发 / 微信小程序",
    href: "/projects/slidefix/",
    external: false,
  },
  {
    slug: "selectpc",
    title: "SelectPC",
    subtitle: "硬件智能对比与决策工具",
    hook: "整理 CPU、GPU、RAM、主板等 200+ 款硬件产品数据与核心对比维度，设计需求输入、参数比较与推荐逻辑。",
    cover: "/projects/selectpc/app-home.png",
    tags: "需求设计 / 数据整理 / Streamlit",
    href: "/projects/selectpc/",
    external: false,
  },
  {
    slug: "voice-wings",
    title: "Voice Wings",
    subtitle: "离线声控可穿戴翅膀",
    hook: "负责元器件选型、电路焊接、机械结构、电源调试和整机联调，实现离线语音控制翅膀动作与 RGB 灯效联动。",
    cover: "/projects/voice-wings/image1.jpeg",
    tags: "ESP32 / LD3320 / 舵机 / WS2812B",
    href: "/projects/voice-wings/",
    external: false,
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    subtitle: "个人求职作品集网站",
    hook: "围绕求职定位重新梳理信息架构与视觉表达，借助 ChatGPT、Cursor、Codex 完成响应式开发、多轮迭代与 Cloudflare Pages 部署。",
    cover: "",
    tags: "信息架构 / 视觉表达 / Cloudflare Pages",
    href: "https://github.com/jinjiangy40/personal-portfolio",
    external: true,
    current: true,
  },
];

const MOBILE_QUERY = "(max-width: 900px)";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wheelLock = useRef(false);
  const total = navItems.length;

  const go = (index: number) => {
    const next = Math.max(0, Math.min(total - 1, index));
    if (isMobile) {
      document.getElementById(navItems[next].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrent(next);
      return;
    }
    setCurrent(next);
  };

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target?.id) return;
        const index = navItems.findIndex((item) => item.id === visible.target.id);
        if (index >= 0) setCurrent(index);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.55] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        setCurrent((v) => Math.min(total - 1, v + 1));
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        setCurrent((v) => Math.max(0, v - 1));
      }
      if (event.key === "Home") setCurrent(0);
      if (event.key === "End") setCurrent(total - 1);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 18) return;
      event.preventDefault();
      if (wheelLock.current) return;
      wheelLock.current = true;
      setCurrent((v) => {
        if (event.deltaY > 0) return Math.min(total - 1, v + 1);
        return Math.max(0, v - 1);
      });
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 700);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [isMobile, total]);

  return (
    <main className={isMobile ? "deck scroll-deck" : "deck magazine-deck"}>
      <header className="deck-header">
        <button onClick={() => go(0)} className="wordmark" type="button">
          YJJ
        </button>
        <nav className="deck-nav" aria-label="章节导航">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={i === current ? "active" : ""}
              onClick={() => go(i)}
              aria-current={i === current ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a href="mailto:jinjiangy40@gmail.com" className="status">
          <i /> OPEN TO INTERNSHIPS
        </a>
      </header>

      <div className={isMobile ? "scroll-sections" : "slides"} aria-live="polite">
        <section
          id="home"
          className={`slide deck-hero ${!isMobile && current === 0 ? "is-active" : ""} ${isMobile ? "home-hero" : ""}`}
          aria-hidden={!isMobile && current !== 0}
        >
          <div className="grid" aria-hidden="true" />
          <div className="deck-copy">
            <p className="eyebrow">AI · PRODUCT · GROWTH · 可实习 2026.09 — 2027.06</p>
            <h1>
              <small>袁锦江</small>
              把 AI、产品与市场执行，
              <br />
              变成真实结果
            </h1>
            <p>
              澳门科技大学人工智能本科生（2027 届）。关注 AI 在真实业务中的应用，持续实践从需求发现、产品原型到用户运营与商业转化。
            </p>
            <div className="hero-contact">
              <a href="tel:17765960611">17765960611</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:jinjiangy40@gmail.com">jinjiangy40@gmail.com</a>
              <span aria-hidden="true">·</span>
              <a href="/yuan-jinjiang-resume.pdf" download>
                下载脱敏简历
              </a>
            </div>
            <button className="button primary" type="button" onClick={() => go(2)}>
              查看代表项目 →
            </button>
          </div>
          <figure className="hero-portrait">
            <img src="/yuan-jinjiang-portrait.jpg" alt="袁锦江画像" />
            <figcaption>
              <span>PORTRAIT</span>
              <b>YJJ</b>
              <small>AI · PRODUCT · GROWTH</small>
            </figcaption>
            <div className="portrait-scan soft-scan" aria-hidden="true" />
          </figure>
        </section>

        <section
          id="experience"
          className={`slide experience-panel ${!isMobile && current === 1 ? "is-active" : ""}`}
          aria-hidden={!isMobile && current !== 1}
        >
          <div className="slide-label">02 / EXPERIENCE</div>
          <div className="deck-title title-md">
            <h2>实习与商业实践</h2>
            <p>在真实业务中推进：三段实习 + 校园市场结果。</p>
          </div>
          <div className="signal-strip" aria-label="关键数字">
            {quickSignals.map((item) => (
              <div key={item.note}>
                <strong>{item.value}</strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>
          <div className="experience-grid">
            {experiences.map((item, i) => (
              <article key={item.org} className={item.highlight ? "is-highlight" : undefined}>
                <header>
                  <b>0{i + 1}</b>
                  <time>{item.period}</time>
                </header>
                <h3>{item.org}</h3>
                <strong>{item.role}</strong>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className={`slide projects-panel ${!isMobile && current === 2 ? "is-active" : ""}`}
          aria-hidden={!isMobile && current !== 2}
        >
          <div className="slide-label">03 / SELECTED PROJECTS</div>
          <div className="deck-title title-lg">
            <h2>代表项目</h2>
            <p>四个项目：产品、数据、硬件与本站本身。</p>
          </div>
          <div className="project-grid-2x2">
            {showcaseProjects.map((project, i) => {
              const body = (
                <>
                  <div className={`project-cover has-photo ${project.cover ? "" : "brand-cover"}`}>
                    {project.cover ? <img src={project.cover} alt="" /> : null}
                    <span className="project-cover-mark">CASE 0{i + 1}</span>
                    <strong className="project-cover-title">{project.title}</strong>
                    <em className="project-cover-en">{project.current ? "LIVE" : project.slug.toUpperCase()}</em>
                  </div>
                  <article>
                    <h3>{project.title}</h3>
                    <strong>{project.subtitle}</strong>
                    <p>{project.hook}</p>
                    <small>{project.tags}</small>
                    <em>{project.current ? "当前正在浏览 · 查看源码 ↗" : "查看项目详情 ↗"}</em>
                  </article>
                </>
              );

              if (project.external) {
                return (
                  <a
                    key={project.slug}
                    href={project.href}
                    className={`deck-project ${project.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {body}
                  </a>
                );
              }

              return (
                <Link key={project.slug} href={project.href} className={`deck-project ${project.slug}`}>
                  {body}
                </Link>
              );
            })}
          </div>
        </section>

        <section
          id="practice"
          className={`slide practice-panel ${!isMobile && current === 3 ? "is-active" : ""}`}
          aria-hidden={!isMobile && current !== 3}
        >
          <div className="slide-label">04 / PRACTICE & LEADERSHIP</div>
          <div className="deck-title title-md">
            <h2>组织实践与表达</h2>
            <p>活动运营、策划商务、公开表达与校外成长。</p>
          </div>
          <div className="practice-grid">
            {practiceItems.map((item, i) => (
              <article key={item.title}>
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={`slide contact-panel ${!isMobile && current === 4 ? "is-active" : ""}`}
          aria-hidden={!isMobile && current !== 4}
        >
          <p className="eyebrow">05 / CONTACT</p>
          <h2>
            期待参与 AI 产品运营、
            <br />
            市场增长与商业化实践。
          </h2>
          <p>求职方向 · AI 产品运营 / 市场增长 / 商务拓展（BD）｜可实习 2026.09 — 2027.06</p>
          <div className="deck-contact-links">
            <a href="tel:17765960611">电话 · 17765960611</a>
            <a href="mailto:jinjiangy40@gmail.com">邮箱 · jinjiangy40@gmail.com</a>
            <a href="https://github.com/jinjiangy40" target="_blank" rel="noreferrer">
              GitHub · jinjiangy40
            </a>
            <a href="/yuan-jinjiang-resume.pdf" download>
              下载脱敏简历 ↓
            </a>
          </div>
        </section>
      </div>

      <nav className="deck-controls compact-controls" aria-label="章节切换">
        <button onClick={() => go(current - 1)} disabled={current === 0} aria-label="上一节" type="button">
          ←
        </button>
        <span className="deck-controls-label">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {navItems[current].label}
        </span>
        <button onClick={() => go(current + 1)} disabled={current === total - 1} aria-label="下一节" type="button">
          →
        </button>
      </nav>
    </main>
  );
}
