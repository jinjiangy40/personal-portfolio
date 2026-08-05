"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "./projects/data";

const experiences = [
  [
    "2026.06~2026.08",
    "湖南中南智能装备",
    "国家项目「工艺知识图谱离线编程」：把工艺数据做成可检索知识库，验证大模型问答与参数推荐是否真能帮现场提效",
  ],
  ["2025.06~2025.08", "上海金仕达 · FICC 产品部", "智能体竞品分析、功能复测与 Bug 追踪，把产品判断落在可复查的证据上"],
  ["2024.06~2024.08", "长沙顺通云科技", "官网重构测试与真实软件交付协作"],
  [
    "2023.09~至今",
    "教育服务与校园市场",
    "校园大使对接数十家教育机构（启德、新东方、高顿等）；累计签约 10 万元+，运营多个 200+ 人兼职社群",
  ],
];

// 顶部常驻导航：开场 → 关于 → 作品 → 履历 → 校园 → 成长 → 联系（已去掉能力页）
const slideNames = ["开场", "关于", "作品", "履历", "校园", "成长", "联系"];

const campusClubs = [
  {
    org: "创新工程学生会",
    role: "秘书部部长",
    period: "2024.09 — 2026.01",
    points: [
      "负责校内外赞助拓展，推动资源落地活动",
      "协办烧烤派对等大型活动，单场到场 200+ 人",
      "协助华为 ICT 大赛完成校内宣传与流程对接",
    ],
  },
  {
    org: "网络文化交流社",
    role: "行政部部长",
    period: "2024.02 — 2026.01",
    points: [
      "统筹王者荣耀高校联赛澳门赛区与校级金铲铲赛事（100+ 人）",
      "担任赛事主持 / 解说，并完成数十家机构对接与长期赞助",
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
      "统筹迎新志愿分工与现场服务",
      "组织反诈、消防、急救等安全教育与主题公益活动",
    ],
  },
];

const campusMore =
  "另参与精武社财务部干事、魔术社运营部干事、羽毛球社外联部干事，持续练组织协作与现场表达。";

const beyondItems = [
  {
    org: "哈工大计算机城市科学营",
    role: "澳科大推荐学员",
    period: "",
    points: [
      "以澳科大推荐学员身份参与哈工大跨学科 AI 应用主题科学营（本校 13 个推荐名额）",
      "与港澳高校硕博共同学习；课题覆盖建筑 AI 模型训练优化与城市历史空间字体智能化应用",
      "提升跨学科项目协作与科研思维",
    ],
  },
  {
    org: "树成林教育 · AI 商业实战社群",
    role: "学员",
    period: "2026.06 — 至今",
    points: [
      "参与社群共学与交流，把 AI 能力落到可复用的实操闭环",
      "持续跟进多场景 AI 应用练习，补齐从工具到落地的判断",
    ],
  },
  {
    org: "1×100俱乐部",
    role: "年度会员",
    period: "2023.11 — 2026.05",
    points: [
      "15 期开眼计划优秀学员、17 期优秀教练员",
      "多次在 50–60 人分享会做经验分享与主题演讲",
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
    if ((event.target as HTMLElement).closest("a,button,nav,header")) return;
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
            <p className="eyebrow">AI PRODUCT INTERN · 2026 / 27 · CLASS OF 2023</p>
            <h1>
              <small>袁锦江</small>
              把技术理解，
              <br />
              变成真实可用的产品
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
              继续了解 →
            </button>
          </div>
          <figure className="hero-portrait">
            <img src="/yuan-jinjiang-portrait.jpg" alt="袁锦江黑白个人写真" />
            <figcaption>
              <span>PORTRAIT</span>
              <b>YJJ · 21</b>
              <small>CHANGSHA → HENGQIN</small>
            </figcaption>
            <div className="portrait-scan" aria-hidden="true" />
          </figure>
        </section>

        <section className={`slide deck-profile ${current === 1 ? "is-active" : ""}`} aria-hidden={current !== 1}>
          <div className="slide-label">01 / ABOUT</div>
          <div className="deck-title">
            <h2>
              不是一个标签
              <br />
              而是一组正在交叉的坐标
            </h2>
            <p>年龄、倾向、来处与现在——先认识人，再看作品与履历。</p>
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

        <section className={`slide deck-work ${current === 2 ? "is-active" : ""}`} aria-hidden={current !== 2}>
          <div className="slide-label">02 / SELECTED WORK</div>
          <div className="deck-title">
            <h2>
              我解决过的
              <br />
              三类真实问题
            </h2>
            <p>每个案例先看问题，再点进去看过程与证据。</p>
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
                  <em>打开案例档案 ↗</em>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className={`slide deck-timeline ${current === 3 ? "is-active" : ""}`} aria-hidden={current !== 3}>
          <div className="slide-label">03 / FIELD RECORDS</div>
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

        <section className={`slide deck-campus ${current === 4 ? "is-active" : ""}`} aria-hidden={current !== 4}>
          <div className="slide-label">04 / CAMPUS CHAPTER</div>
          <div className="deck-title">
            <h2>
              在组织里练推进
              <br />
              在现场练表达
            </h2>
            <p>部长统筹、赛事落地之外，也保留策划案撰写与大型活动主持等现场能力。</p>
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
            <article className="campus-club campus-more">
              <span>NOTE</span>
              <p>{campusMore}</p>
            </article>
          </div>
        </section>

        <section className={`slide deck-human ${current === 5 ? "is-active" : ""}`} aria-hidden={current !== 5}>
          <div className="slide-label">05 / BEYOND CAMPUS</div>
          <div className="deck-title">
            <h2>
              校外成长
              <br />
              把学习变成能力
            </h2>
            <p>在科学营、树成林与 1×100 等校外场域里学习、表达与协作。</p>
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

        <section className={`slide deck-contact ${current === 6 ? "is-active" : ""}`} aria-hidden={current !== 6}>
          <p className="eyebrow">06 / NEXT SIGNAL</p>
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
