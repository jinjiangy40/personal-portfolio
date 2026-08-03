"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "./projects/data";

const experiences = [
  ["2025", "上海金仕达 · FICC 产品部", "智能体竞品分析、功能复测、Bug 追踪与数据更新"],
  ["2024", "长沙顺通云科技", "官网重构测试与真实软件交付协作"],
  ["2023—NOW", "教育服务与校园市场", "累计签约 6 万元，运营约 200 人兼职社群"],
  ["CAMPUS", "活动、赛事与学生组织", "主持 300 人活动，独立执行 100+ 人校园赛事"],
];

const capabilities = [
  ["01", "AI 产品与需求", "把模糊需求拆成可验证的问题、功能与迭代路径。", "智能体竞品 / SelectPC"],
  ["02", "技术理解与原型", "理解软件、数据和硬件边界，动手完成可运行原型。", "Python / ESP32"],
  ["03", "商业沟通与连接", "从真实沟通中识别动机，用清楚表达推动选择。", "校园市场 / 社群"],
  ["04", "组织策划与执行", "把多人、多环节的事情拆开、对齐并推进到现场。", "赛事 / 主持"],
];

// 顺序：能力放在导航前，线性浏览时不会被四个入口跳过
const slideNames = ["开场", "档案", "能力", "导航", "经历", "校园", "作品", "个人", "联系"];

const hubItems = [
  {
    title: "我的项目库",
    en: "PROJECT ARCHIVE",
    text: "产品、软件与硬件原型，以及每次真实落地后的判断与反思。",
    target: 6,
  },
  {
    title: "我的履历",
    en: "EXPERIENCE",
    text: "实习、商业实践与技术学习，组成持续向产品靠近的路径。",
    target: 4,
  },
  {
    title: "校园经历",
    en: "CAMPUS",
    text: "这一章先留空，等校园经历素材补充后再完整展开。",
    target: 5,
  },
  {
    title: "课外拓展",
    en: "BEYOND CLASS",
    text: "科学营、社群与公开表达，保持对真实世界的连接与好奇。",
    target: 7,
  },
];

const identityTiles = [
  {
    label: "01 / AGE",
    value: "21",
    note: "YEARS OLD",
    image: "/tile-age.png",
    tone: "age",
  },
  {
    label: "02 / MBTI",
    value: "ENTJ",
    note: "COMMANDER",
    image: "/tile-entj-official.svg",
    tone: "mbti",
  },
  {
    label: "03 / FROM",
    value: "长沙",
    note: "CHANGSHA",
    image: "/tile-changsha.png",
    tone: "from",
  },
  {
    label: "04 / NOW",
    value: "横琴",
    note: "HENGQIN",
    image: "/tile-hengqin.png",
    tone: "now",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [activeHub, setActiveHub] = useState(0);
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
    if ((event.target as HTMLElement).closest("a,button")) return;
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
          YJJ / ARCHIVE
        </button>
        <span>
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {slideNames[current]}
        </span>
        <a href="mailto:1230017371@student.must.edu.mo" className="status">
          <i /> OPEN TO INTERN
        </a>
      </header>

      <div className="slides" aria-live="polite">
        <section className={`slide deck-hero ${current === 0 ? "is-active" : ""}`} aria-hidden={current !== 0}>
          <div className="grid" aria-hidden="true" />
          <div className="deck-copy">
            <p className="eyebrow">AI PRODUCT INTERN · 2026 / 27</p>
            <h1>
              <small>袁锦江</small>
              把技术理解，
              <em>变成真实可用的产品</em>
            </h1>
            <p>
              澳门科技大学人工智能本科生。关注 AI 如何进入真实工作流，也在一次次原型、沟通与交付中学习产品判断。
            </p>
            <button className="button primary" onClick={next}>
              点击进入档案 →
            </button>
          </div>
          <figure className="hero-portrait">
            <img src="/yuan-jinjiang-portrait.jpg" alt="袁锦江黑白个人写真" />
            <figcaption>
              <span>PORTRAIT / 001</span>
              <b>YJJIANG · 21</b>
              <small>CHANGSHA → HENGQIN</small>
            </figcaption>
            <div className="portrait-scan" aria-hidden="true" />
          </figure>
        </section>

        <section className={`slide deck-profile ${current === 1 ? "is-active" : ""}`} aria-hidden={current !== 1}>
          <div className="slide-label">01 / PERSONAL DOSSIER</div>
          <div className="deck-title">
            <h2>
              不是一个标签
              <br />
              而是一组正在交叉的能力
            </h2>
            <p>人工智能给我技术坐标，真实项目让我学习判断。</p>
          </div>
          <div className="identity-board">
            <figure className="dossier-photo">
              <img src="/yuan-jinjiang-portrait.jpg" alt="袁锦江个人档案照片" />
              <figcaption>OFFICIAL PORTRAIT / YJJ · 2026</figcaption>
            </figure>
            <div className="identity-tiles">
              {identityTiles.map((tile) => (
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

        <section className={`slide deck-capabilities ${current === 2 ? "is-active" : ""}`} aria-hidden={current !== 2}>
          <div className="slide-label">02 / CAPABILITY SYSTEM</div>
          <div className="deck-title">
            <h2>
              能力不靠百分比
              <br />
              靠真实证据交叉验证
            </h2>
          </div>
          <div className="deck-cap-grid">
            {capabilities.map(([n, t, d, e]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <small>EVIDENCE · {e}</small>
              </article>
            ))}
          </div>
        </section>

        <section className={`slide deck-hub ${current === 3 ? "is-active" : ""}`} aria-hidden={current !== 3}>
          <div className="slide-label">03 / PERSONAL SYSTEM</div>
          <div className="hub-copy">
            <p className="eyebrow">SELECT A SIGNAL</p>
            <h2>
              从一个中心
              <br />
              进入四组个人档案
            </h2>
            <article>
              <span>{hubItems[activeHub].en}</span>
              <h3>{hubItems[activeHub].title}</h3>
              <p>{hubItems[activeHub].text}</p>
              <button onClick={() => go(hubItems[activeHub].target)}>进入这一章 →</button>
            </article>
          </div>
          <div className="hub-orbit" aria-label="个人内容导航">
            <div className="hub-core">
              <b>档案</b>
              <small>
                PERSONAL
                <br />
                ARCHIVE
              </small>
            </div>
            {hubItems.map((item, i) => (
              <button
                key={item.title}
                className={i === activeHub ? "active" : ""}
                onClick={() => setActiveHub(i)}
              >
                <i />
                <span>0{i + 1}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
        </section>

        <section className={`slide deck-timeline ${current === 4 ? "is-active" : ""}`} aria-hidden={current !== 4}>
          <div className="slide-label">04 / FIELD RECORDS</div>
          <div className="deck-title">
            <h2>
              从代码、市场到现场
              <br />
              在不同环境里练习推进
            </h2>
          </div>
          <div className="deck-records">
            {experiences.map((item, i) => (
              <article key={item[1]}>
                <b>0{i + 1}</b>
                <time>{item[0]}</time>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`slide deck-campus ${current === 5 ? "is-active" : ""}`} aria-hidden={current !== 5}>
          <div className="slide-label">05 / CAMPUS CHAPTER</div>
          <div className="campus-placeholder">
            <p className="eyebrow">WAITING FOR SOURCE</p>
            <h2>
              校园经历
              <br />
              这一章先留白
            </h2>
            <p>内容稍后由你补充。当前只保留占位，不再跳转到履历页。</p>
          </div>
        </section>

        <section className={`slide deck-work ${current === 6 ? "is-active" : ""}`} aria-hidden={current !== 6}>
          <div className="slide-label">06 / SELECTED WORK</div>
          <div className="deck-title">
            <h2>
              让想法进入
              <br />
              可以被验证的环境
            </h2>
          </div>
          <div className="deck-projects">
            {projects.map((project, i) => (
              <Link href={`/projects/${project.slug}/`} className={`deck-project ${project.slug}`} key={project.slug}>
                <div>
                  <span>
                    CASE 0{i + 1} · {project.year}
                  </span>
                  <b>{project.code}</b>
                  <small className="project-media-slot">
                    {project.slug === "selectpc"
                      ? "STREAMLIT HOME · SELECTPC"
                      : project.slug === "voice-wings"
                        ? "HARDWARE PROTOTYPE · VOICE WINGS"
                        : "PROJECT IMAGE · 待补充"}
                  </small>
                </div>
                <article>
                  <h3>{project.title}</h3>
                  <strong>{project.subtitle}</strong>
                  <p>{project.summary}</p>
                  <em>打开案例档案 ↗</em>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className={`slide deck-human ${current === 7 ? "is-active" : ""}`} aria-hidden={current !== 7}>
          <div className="slide-label">07 / HUMAN LAYER</div>
          <div className="deck-title">
            <h2>
              产品之外
              <br />
              保持表达、连接与好奇
            </h2>
          </div>
          <div className="deck-human-grid">
            <article>
              <span>VOICE</span>
              <h3>主持与公开表达</h3>
              <p>在舞台、分享会和活动现场中，练习把复杂信息变得清楚、有感染力。</p>
            </article>
            <article>
              <span>COMMUNITY</span>
              <h3>社群与真实连接</h3>
              <p>对接学生、商家与活动参与者，在长期互动中理解需求并建立信任。</p>
            </article>
            <article>
              <span>EXPLORE</span>
              <h3>持续探索</h3>
              <p>从计算城市科学营到软硬件原型，愿意进入陌生领域，快速建立理解。</p>
            </article>
          </div>
        </section>

        <section className={`slide deck-contact ${current === 8 ? "is-active" : ""}`} aria-hidden={current !== 8}>
          <p className="eyebrow">08 / NEXT SIGNAL</p>
          <h2>
            寻找一个真实问题
            <br />
            一起把它做成产品
          </h2>
          <p>目标方向 · AI 产品实习 / 产品实习</p>
          <div className="deck-contact-links">
            <a href="mailto:1230017371@student.must.edu.mo">职业邮箱 ↗</a>
            <a href="/yuan-jinjiang-resume.pdf" download>
              下载脱敏简历 ↓
            </a>
            <span>GitHub / LinkedIn · 待补充</span>
          </div>
        </section>
      </div>

      <nav className="deck-controls" aria-label="页面切换">
        <button onClick={prev} disabled={current === 0} aria-label="上一页">
          ←
        </button>
        <div>
          {slideNames.map((name, i) => (
            <button
              key={name}
              onClick={() => go(i)}
              className={i === current ? "active" : ""}
              aria-label={`前往${name}`}
              aria-current={i === current ? "step" : undefined}
            >
              <span>{name}</span>
            </button>
          ))}
        </div>
        <button onClick={next} disabled={current === total - 1} aria-label="下一页">
          →
        </button>
      </nav>
      <p className="click-hint">点击右侧继续 · 点击左侧返回 · 键盘 ← →</p>
    </main>
  );
}
