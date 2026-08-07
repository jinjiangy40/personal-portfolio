"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "./projects/data";

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
];

const businessPoints = [
  "累计对接 10+ 家教育 / 培训机构（启德、新东方、高顿、环球雅思等），开展校园推广与用户转化",
  "累计签约金额 10 万元+，并参与珠海、澳门高校市场拓展",
  "独立运营多个 200+ 人校园兼职社群，连接商家与学生需求",
  "探索兼职、赞助、租房推荐等社群变现场景",
];

const slideNames = ["开场", "数字", "实习", "商业", "项目", "赛事", "校外", "联系"];

const eventItems = [
  {
    title: "大型电竞赛事",
    role: "创新工程学生会秘书部部长 · 网络文化交流社行政部部长",
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

const beyondItems = [
  {
    org: "1×100 俱乐部",
    role: "优秀学员 / 优秀教练员",
    period: "",
    points: ["多次完成 50–60 人主题分享"],
  },
  {
    org: "哈尔滨工业大学第二届计算城市科学营",
    role: "入选学员",
    period: "",
    points: ["参与跨学科 AI 应用课题学习"],
  },
];

const quickSignals = [
  {
    label: "01 / INTERNSHIPS",
    value: "3",
    note: "段实习经历",
    image: "/tile-age.png",
    tone: "age",
  },
  {
    label: "02 / SIGNED",
    value: "10万+",
    note: "累计签约金额",
    image: "/tile-entj-official.svg",
    tone: "mbti",
  },
  {
    label: "03 / PARTNERS",
    value: "10+",
    note: "家教育 / 培训机构",
    image: "/tile-changsha.png",
    tone: "from",
  },
  {
    label: "04 / COMMUNITY",
    value: "200+",
    note: "人校园兼职社群",
    image: "/tile-hengqin.png",
    tone: "now",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const touchX = useRef<number | null>(null);
  const total = slideNames.length;
  const go = (index: number) => setCurrent(Math.max(0, Math.min(total - 1, index)));
  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(event.key)) {
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
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const advanceOnCanvas = (event: React.MouseEvent<HTMLElement>) => {
    if (
      (event.target as HTMLElement).closest(
        "a,button,nav,header,.campus-clubs,.beyond-list,.deck-records,.business-panel",
      )
    )
      return;
    if (event.clientX < window.innerWidth * 0.28) prev();
    else next();
  };

  return (
    <main
      className="deck"
      onClick={advanceOnCanvas}
      onTouchStart={(e) => {
        touchX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) (dx < 0 ? next() : prev());
        touchX.current = null;
      }}
    >
      <header className="deck-header">
        <button onClick={() => go(0)} className="wordmark">
          YJJ
        </button>
        <nav className="deck-nav" aria-label="章节导航">
          {slideNames.map((name, i) => (
            <button
              key={name}
              type="button"
              className={i === current ? "active" : ""}
              onClick={() => go(i)}
              aria-current={i === current ? "page" : undefined}
            >
              {name}
            </button>
          ))}
        </nav>
        <a href="mailto:jinjiangy40@gmail.com" className="status">
          <i /> OPEN TO INTERN
        </a>
      </header>

      <div className="slides" aria-live="polite">
        <section className={`slide deck-hero ${current === 0 ? "is-active" : ""}`} aria-hidden={current !== 0}>
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
            <button className="button primary" onClick={next}>
              继续了解 →
            </button>
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
        </section>

        <section className={`slide deck-profile ${current === 1 ? "is-active" : ""}`} aria-hidden={current !== 1}>
          <div className="slide-label">01 / QUICK SIGNALS</div>
          <div className="deck-title">
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
            <div className="identity-tiles">
              {quickSignals.map((tile) => (
                <article key={tile.label} className={`id-tile tone-${tile.tone}`}>
                  <img src={tile.image} alt="" aria-hidden="true" />
                  <div>
                    <span>{tile.label}</span>
                    <strong>{tile.value}</strong>
                    <small>{tile.note}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`slide deck-timeline ${current === 2 ? "is-active" : ""}`} aria-hidden={current !== 2}>
          <div className="slide-label">02 / EXPERIENCE</div>
          <div className="deck-title">
            <h2>
              三段实习
              <br />
              在真实业务里推进
            </h2>
          </div>
          <div className="deck-records">
            {experiences.map((item, i) => (
              <article key={item.org}>
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

        <section className={`slide deck-campus ${current === 3 ? "is-active" : ""}`} aria-hidden={current !== 3}>
          <div className="slide-label">03 / BUSINESS & OPERATIONS</div>
          <div className="deck-title">
            <h2>
              商业与运营实践
              <br />
              结果导向的校园市场
            </h2>
          </div>
          <div className="business-panel">
            <article className="campus-club business-hero">
              <span>01</span>
              <header>
                <h3>教育服务与校园市场</h3>
                <strong>校园大使 / 社群运营</strong>
                <time>2023.09 — 至今</time>
              </header>
              <ul>
                {businessPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={`slide deck-work ${current === 4 ? "is-active" : ""}`} aria-hidden={current !== 4}>
          <div className="slide-label">04 / SELECTED PROJECTS</div>
          <div className="deck-title">
            <h2>
              三个代表项目
              <br />
              从问题到可运行结果
            </h2>
            <p>首页只看问题与结果；点进去看判断、过程与证据。</p>
          </div>
          <div className="deck-projects">
            {projects.map((project, i) => (
              <Link href={`/projects/${project.slug}/`} className={`deck-project ${project.slug}`} key={project.slug}>
                <div className="project-cover" aria-hidden="true">
                  <span className="project-cover-mark">CASE 0{i + 1}</span>
                  <strong className="project-cover-title">{project.title}</strong>
                  <em className="project-cover-en">{project.code}</em>
                  <i className="project-cover-bloom" />
                  <i className="project-cover-bloom alt" />
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

        <section className={`slide deck-campus ${current === 5 ? "is-active" : ""}`} aria-hidden={current !== 5}>
          <div className="slide-label">05 / EVENTS & LEADERSHIP</div>
          <div className="deck-title">
            <h2>
              赛事、活动与组织
              <br />
              三个重点案例
            </h2>
          </div>
          <div className="campus-clubs">
            {eventItems.map((item, i) => (
              <article key={item.title} className="campus-club">
                <span>0{i + 1}</span>
                <header>
                  <h3>{item.title}</h3>
                  <strong>{item.role}</strong>
                </header>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`slide deck-human ${current === 6 ? "is-active" : ""}`} aria-hidden={current !== 6}>
          <div className="slide-label">06 / OUTSIDE EXPERIENCE</div>
          <div className="deck-title">
            <h2>
              校外成长与背书
              <br />
              精选即可
            </h2>
          </div>
          <div className="beyond-list">
            {beyondItems.map((item, i) => (
              <article key={item.org} className="beyond-item">
                <span>0{i + 1}</span>
                <header>
                  <h3>{item.org}</h3>
                  <strong>{item.role}</strong>
                  {item.period ? <time>{item.period}</time> : null}
                </header>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`slide deck-contact ${current === 7 ? "is-active" : ""}`} aria-hidden={current !== 7}>
          <p className="eyebrow">07 / NEXT SIGNAL</p>
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

      <nav className="deck-controls" aria-label="翻页">
        <button onClick={prev} disabled={current === 0} aria-label="上一页">
          ←
        </button>
        <span className="deck-controls-label">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {slideNames[current]}
        </span>
        <button onClick={next} disabled={current === total - 1} aria-label="下一页">
          →
        </button>
      </nav>
      <p className="click-hint">顶部导航随时跳转 · 点击左右翻页 · 键盘 ← →</p>
    </main>
  );
}
