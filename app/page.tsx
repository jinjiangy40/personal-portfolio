"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "./projects/data";

const experiences = [
  [
    "2026.06~2026.08",
    "湖南中南智能装备",
    "参与国家项目「基于工艺知识图谱的离线编程软件」：完成工艺/材料数据清洗与结构化；搭建焊接工艺知识问答与参数查表流程；整理工艺文档并维护知识库更新；协助验证大模型检索与工艺推荐效果",
  ],
  ["2025.06~2025.08", "上海金仕达 · FICC 产品部", "智能体竞品分析、功能复测、Bug 追踪与数据更新"],
  ["2024.06~2024.08", "长沙顺通云科技", "官网重构测试与真实软件交付协作"],
  [
    "2023.09~至今",
    "教育服务与校园市场",
    "校园大使签约启德、信华、新东方、紫藤、留学匠、环球、高顿等机构，并持续拓展其他教育合作；累计签约约 6 万元，运营约 200 人兼职社群",
  ],
];

const capabilities = [
  ["01", "产品需求", "把模糊需求拆成可验证的问题、功能与迭代路径。"],
  ["02", "技术原型", "理解软件、数据与工业场景边界，动手完成可验证的数据处理与原型链路。"],
  ["03", "商业沟通", "从真实沟通中识别动机，用清楚表达推动选择。"],
];

// 顺序：能力放在导航前，线性浏览时不会被四个入口跳过
const slideNames = ["开场", "档案", "能力", "导航", "经历", "校园", "作品", "个人", "联系"];

const hubItems = [
  {
    title: "我的项目",
    en: "PROJECTS",
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
    text: "部长与干事岗位上的赞助拓展、赛事统筹、主持控场与公益落地。",
    target: 5,
  },
  {
    title: "课外拓展",
    en: "BEYOND CLASS",
    text: "1×100 等校外成长：公开表达、教练带教与真实社群连接。",
    target: 7,
  },
];

const campusClubs = [
  {
    org: "创新工程学生会",
    role: "秘书部部长",
    period: "2024.09 — 2026.01",
    points: [
      "负责校内外赞助拓展：线下逐店拜访、商谈合作，推动资源落地活动",
      "协办烧烤派对、干事大会等大型活动，其中烧烤派对到场 200+ 人",
      "统筹会议纪要、活动组织、破冰设计与现场气氛调动",
      "协助华为 ICT 大赛完成校内宣传、报名组织与流程对接",
    ],
  },
  {
    org: "网络文化交流社",
    role: "行政部部长",
    period: "2024.02 — 2026.01",
    points: [
      "多次组织并统筹王者荣耀高校联赛澳门赛区落地执行",
      "担任校级金铲铲比赛总负责人，赛事参与累计 100+ 人",
      "协助卓威奇亚 CS2 全国高校联赛、瓦洛兰特全澳高校赛等赛事统筹",
      "担任金铲铲赛事主持、王者高校联赛主持 / 解说；完成数十家机构对接",
      "对接留学、雅思、零食等长期赞助，保障社团持续办赛能力",
    ],
  },
  {
    org: "桌友汇",
    role: "策划部干事",
    period: "",
    points: [
      "撰写《社会服务十周年社团联展》《澳门四校狼王联赛》《2023 万圣节活动》等策划案",
      "参与原创二次元大型剧本杀制作，从剧本到流程落地协作推进",
      "万圣节活动担任 DM，现场引导 60+ 名学生完成完整体验",
    ],
  },
  {
    org: "音乐学会",
    role: "主持人团干事",
    period: "",
    points: [
      "入选并担任 2023 年校园歌手大赛总决赛主持人",
      "临场处理突发状况，稳住节奏，保障决赛完整顺利进行",
    ],
  },
  {
    org: "宿舍先锋队",
    role: "2024 届迎新志愿组组长",
    period: "",
    points: [
      "参与开展校园反诈宣传、消防演练、医疗急救等安全教育实务",
      "赴警局、消防局开展业务参观学习，并将所学用于活动组织与宣讲落地",
      "策划并组织手工日、安全教育日等主题公益活动",
      "担任 2024 届迎新志愿组组长，统筹分工、带队完成新生接待与服务",
    ],
  },
  {
    org: "其他社团干事",
    role: "干事岗位",
    period: "",
    points: ["精武社财务部干事、魔术社运营部干事、羽毛球社外联部干事"],
  },
];

const beyondItems = [
  {
    org: "1×100俱乐部",
    role: "年度会员",
    period: "2023.11 — 2026.05",
    points: [
      "15 期开眼计划优秀学员、17 期优秀教练员",
      "多次在 50–60 人分享会做经验分享与主题演讲",
      "参与活动主持与策划，持续锻炼公开表达与组织协作",
    ],
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
        <a href="mailto:jinjiangy40@gmail.com" className="status">
          <i /> OPEN TO INTERN
        </a>
      </header>

      <div className="slides" aria-live="polite">
        <section className={`slide deck-hero ${current === 0 ? "is-active" : ""}`} aria-hidden={current !== 0}>
          <div className="grid" aria-hidden="true" />
          <div className="deck-copy">
            <p className="eyebrow">AI PRODUCT INTERN · 2026 / 27 · CLASS OF 2023</p>
            <h1>
              <small>袁锦江</small>
              把技术理解，变成真实可用的产品
            </h1>
            <p>
              澳门科技大学人工智能本科生（2023 级）。关注 AI 如何进入真实工作流，也在一次次原型、沟通与交付中学习产品判断。
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
              <img src="/yuan-jinjiang-pixel.png" alt="袁锦江像素肖像" />
              <figcaption>PIXEL PORTRAIT / YJJ · 2026</figcaption>
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
              靠真实项目交叉验证
            </h2>
          </div>
          <div className="deck-cap-grid">
            {capabilities.map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
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
          <div className="deck-title">
            <h2>
              在组织里练推进
              <br />
              在现场练表达
            </h2>
            <p>部长与干事岗位上的赞助拓展、赛事统筹、主持控场与公益落地。</p>
          </div>
          <div className="campus-clubs">
            {campusClubs.map((club, i) => (
              <article key={club.org} className="campus-club">
                <span>0{i + 1}</span>
                <header>
                  <h3>{club.org}</h3>
                  <strong>{club.role}</strong>
                  {club.period ? <time>{club.period}</time> : null}
                </header>
                <ul>
                  {club.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
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
                  <p>{project.summary}</p>
                  <em>打开案例档案 ↗</em>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className={`slide deck-human ${current === 7 ? "is-active" : ""}`} aria-hidden={current !== 7}>
          <div className="slide-label">07 / BEYOND CAMPUS</div>
          <div className="deck-title">
            <h2>
              校外成长
              <br />
              把表达练成能力
            </h2>
            <p>在 1×100 等校外场域里做分享、带教与主持，持续对接真实人群与真实反馈。</p>
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
            <article className="beyond-note">
              <span>NOTE</span>
              <p>同时保持对科学营、软硬件原型与商业社群的持续探索，愿意进入陌生领域并快速建立理解。</p>
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
            <a href="tel:17765960611">电话 · 17765960611</a>
            <a href="mailto:jinjiangy40@gmail.com">邮箱 · jinjiangy40@gmail.com</a>
            <a href="/yuan-jinjiang-resume.pdf" download>
              下载脱敏简历 ↓
            </a>
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
