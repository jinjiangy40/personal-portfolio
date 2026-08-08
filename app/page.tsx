"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "./projects/data";

const navItems = [
  { id: "home", label: "首页" },
  { id: "experience", label: "经历" },
  { id: "projects", label: "项目" },
  { id: "events", label: "赛事" },
  { id: "contact", label: "联系" },
] as const;

const experiences = [
  {
    period: "2026.06 — 2026.08",
    org: "湖南中南智能装备",
    role: "中央研究院实习生",
    points: [
      "参与国家项目「基于工艺知识图谱的离线编程软件」",
      "完成工艺 / 材料数据清洗与结构化、知识库维护",
      "协助验证大模型检索与工艺推荐效果",
    ],
  },
  {
    period: "2025.06 — 2025.08",
    org: "上海金仕达 · FICC 产品部",
    role: "软件开发实习生",
    points: [
      "围绕金融 AI 智能体开展竞品调研",
      "对比自研平台与 Coze、豆包、MiniMax 等产品",
      "完成 Coze 智能体搭建，并参与功能复测、Bug 追踪及数据更新",
    ],
  },
  {
    period: "2024.06 — 2024.08",
    org: "长沙顺通云科技",
    role: "实习工程师",
    points: [
      "参与湖南省妇幼官网重构",
      "负责功能复测、问题记录与进度跟进，协助保障项目上线",
    ],
  },
  {
    period: "2023.09 — 至今",
    org: "教育服务与校园市场",
    role: "校园大使 / 社群运营",
    highlight: true,
    points: [
      "累计对接 10+ 家教育 / 培训机构（启德、新东方、高顿、环球雅思等）",
      "累计签约金额 10 万元+；参与珠海、澳门高校市场拓展",
      "独立运营多个 200+ 人校园兼职社群，探索兼职、赞助、租房推荐等场景",
    ],
  },
];

const quickSignals = [
  { label: "01 / INTERNSHIPS", value: "3", note: "段实习经历" },
  { label: "02 / SIGNED", value: "10万+", note: "累计签约金额" },
  { label: "03 / PARTNERS", value: "10+", note: "家教育 / 培训机构" },
  { label: "04 / COMMUNITY", value: "200+", note: "人校园兼职社群" },
];

const eventItems = [
  {
    title: "大型电竞赛事",
    role: "学生会秘书部部长 · 网交社行政部部长",
    points: [
      "协助统筹 ZOWIE GEAR CS2 高校赛、王者荣耀高校联赛澳门赛区赛事执行",
      "独立负责金铲铲之战校内赛全流程，参赛 120+ 人",
    ],
  },
  {
    title: "活动策划与商务",
    role: "赞助拓展 · 方案撰写 · 协调执行",
    points: [
      "参与赞助拓展，撰写联展、联赛、万圣节等多份校园活动策划案",
      "在方案撰写、活动策划与现场协调中练习落地执行",
    ],
  },
  {
    title: "公开表达",
    role: "主持 · 主题分享",
    points: [
      "担任校园歌手大赛总决赛主持",
      "1×100 俱乐部多次完成 50–60 人主题分享",
    ],
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const total = navItems.length;

  useEffect(() => {
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
  }, []);

  const go = (index: number) => {
    const next = Math.max(0, Math.min(total - 1, index));
    const el = document.getElementById(navItems[next].id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="deck scroll-deck">
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

      <div className="scroll-sections">
        <section id="home" className="scroll-section home-section">
          <div className="slide deck-hero home-hero">
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
              <a className="button primary" href="#projects">
                查看代表项目 →
              </a>
            </div>
            <figure className="hero-portrait">
              <img src="/yuan-jinjiang-portrait.jpg" alt="袁锦江黑白个人写真" />
              <figcaption>
                <span>PORTRAIT</span>
                <b>YJJ</b>
                <small>AI · PRODUCT · GROWTH</small>
              </figcaption>
              <div className="portrait-scan" aria-hidden="true" />
            </figure>
          </div>

          <div className="slide deck-profile home-signals">
            <div className="slide-label">01 / QUICK SIGNALS</div>
            <div className="deck-title title-md">
              <h2>
                关键数字
                <br />
                先看证据，再看故事
              </h2>
              <p>经历亮点 · AI 智能体 / 知识库实践 · 累计签约 10 万元+ · 多个 200+ 人社群运营</p>
            </div>
            <div className="identity-board">
              <figure className="dossier-photo">
                <img src="/yuan-jinjiang-pixel.png" alt="袁锦江像素肖像" />
                <figcaption>PIXEL PORTRAIT / YJJ · 2026</figcaption>
              </figure>
              <div className="identity-tiles signal-tiles">
                {quickSignals.map((tile) => (
                  <article key={tile.label} className="id-tile signal-tile">
                    <div>
                      <span>{tile.label}</span>
                      <strong>{tile.value}</strong>
                      <small>{tile.note}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-section slide deck-timeline experience-section">
          <div className="slide-label">02 / EXPERIENCE</div>
          <div className="deck-title title-md">
            <h2>
              实习与商业实践
              <br />
              在真实业务里推进
            </h2>
            <p>三段实习 + 教育服务与校园市场；结果导向，不扩写虚假方法论。</p>
          </div>
          <div className="deck-records">
            {experiences.map((item, i) => (
              <article key={item.org} className={item.highlight ? "is-highlight" : undefined}>
                <b>0{i + 1}</b>
                <div className="record-main">
                  <header>
                    <time>{item.period}</time>
                    <h3>{item.org}</h3>
                    <strong className="record-role">{item.role}</strong>
                  </header>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-section slide deck-work projects-section">
          <div className="slide-label">03 / SELECTED PROJECTS</div>
          <div className="deck-title title-lg">
            <h2>
              三个代表项目
              <br />
              从问题到可运行结果
            </h2>
            <p>首页只看问题与真实素材；点进去看判断、过程与证据。</p>
          </div>
          <div className="deck-projects project-board">
            {projects.map((project, i) => (
              <Link
                href={`/projects/${project.slug}/`}
                className={`deck-project ${project.slug} ${i === 0 ? "is-featured" : ""}`}
                key={project.slug}
              >
                <div className="project-cover has-photo">
                  <img src={project.cover} alt="" />
                  <span className="project-cover-mark">CASE 0{i + 1}</span>
                  <strong className="project-cover-title">{project.title}</strong>
                  <em className="project-cover-en">{project.code}</em>
                </div>
                <article>
                  <h3>{project.title}</h3>
                  <strong>{project.subtitle}</strong>
                  <p>{project.hook}</p>
                  <em>查看项目详情 ↗</em>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section id="events" className="scroll-section slide deck-campus events-section">
          <div className="slide-label">04 / EVENTS & LEADERSHIP</div>
          <div className="deck-title title-md">
            <h2>
              赛事、活动与表达
              <br />
              三个重点模块
            </h2>
          </div>
          <div className="event-grid">
            {eventItems.map((item, i) => (
              <article key={item.title} className="event-card">
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <strong>{item.role}</strong>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="events-aside">
            校外背书 · 1×100 优秀学员 / 优秀教练员 · 哈尔滨工业大学第二届计算城市科学营
          </p>
        </section>

        <section id="contact" className="scroll-section slide deck-contact contact-section">
          <p className="eyebrow">05 / NEXT SIGNAL</p>
          <h2>
            关注 AI 在真实业务中的应用
            <br />
            期待参与产品运营、市场增长与商业化实践
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
