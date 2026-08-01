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

const slideNames = ["开场", "档案", "经历", "能力", "作品", "个人", "联系"];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const touchX = useRef<number | null>(null);
  const total = slideNames.length;
  const go = (index: number) => setCurrent(Math.max(0, Math.min(total - 1, index)));
  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(event.key)) { event.preventDefault(); setCurrent(v => Math.min(total - 1, v + 1)); }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); setCurrent(v => Math.max(0, v - 1)); }
      if (event.key === "Home") setCurrent(0);
      if (event.key === "End") setCurrent(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const advanceOnCanvas = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a,button")) return;
    if (event.clientX < window.innerWidth * .28) prev(); else next();
  };

  return <main className="deck" onClick={advanceOnCanvas}
    onTouchStart={e => { touchX.current = e.changedTouches[0].clientX; }}
    onTouchEnd={e => { if (touchX.current === null) return; const dx = e.changedTouches[0].clientX - touchX.current; if (Math.abs(dx) > 45) dx < 0 ? next() : prev(); touchX.current = null; }}>
    <header className="deck-header">
      <button onClick={() => go(0)} className="wordmark">YJJ / ARCHIVE</button>
      <span>{String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {slideNames[current]}</span>
      <a href="mailto:1230017371@student.must.edu.mo" className="status"><i /> OPEN TO INTERN</a>
    </header>

    <div className="slides" aria-live="polite">
      <section className={`slide deck-hero ${current === 0 ? "is-active" : ""}`} aria-hidden={current !== 0}>
        <div className="grid" aria-hidden="true" />
        <div className="deck-copy"><p className="eyebrow">AI PRODUCT INTERN · 2026 / 27</p><h1><small>袁锦江</small>把技术理解，<em>变成真实可用的产品。</em></h1><p>澳门科技大学人工智能本科生。关注 AI 如何进入真实工作流，也在一次次原型、沟通与交付中学习产品判断。</p><button className="button primary" onClick={next}>点击进入档案 →</button></div>
        <div className="signal-card"><div className="orbit"><span /><span /><span /><b>YJJ</b></div><div className="coord">22.197 / 113.543<br />MUST · MACAU</div><div className="index"><b>01</b><span>技术理解</span><b>02</b><span>产品判断</span><b>03</b><span>真实落地</span></div></div>
      </section>

      <section className={`slide deck-profile ${current === 1 ? "is-active" : ""}`} aria-hidden={current !== 1}>
        <div className="slide-label">01 / PERSONAL DOSSIER</div><div className="deck-title"><h2>不是一个标签，<br />而是一组正在交叉的能力。</h2><p>人工智能给我技术坐标，真实项目让我学习判断。</p></div>
        <div className="dossier"><article><span>MUST · BSAI · 2027</span><h3>产品 × 技术 × 业务</h3><p>我不把“懂技术”当作终点。更想理解用户为什么需要、团队怎样实现、产品如何在约束中成立。</p></article><dl><div><dt>EDUCATION</dt><dd>澳门科技大学 · 人工智能</dd></div><div><dt>DIRECTION</dt><dd>AI 产品实习</dd></div><div><dt>AVAILABLE</dt><dd>2026.09—2027.06</dd></div></dl></div>
      </section>

      <section className={`slide deck-timeline ${current === 2 ? "is-active" : ""}`} aria-hidden={current !== 2}>
        <div className="slide-label">02 / FIELD RECORDS</div><div className="deck-title"><h2>从代码、市场到现场，<br />在不同环境里练习推进。</h2></div>
        <div className="deck-records">{experiences.map((item,i)=><article key={item[1]}><b>0{i+1}</b><time>{item[0]}</time><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
      </section>

      <section className={`slide deck-capabilities ${current === 3 ? "is-active" : ""}`} aria-hidden={current !== 3}>
        <div className="slide-label">03 / CAPABILITY SYSTEM</div><div className="deck-title"><h2>能力不靠百分比，<br />靠真实证据交叉验证。</h2></div>
        <div className="deck-cap-grid">{capabilities.map(([n,t,d,e])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><small>EVIDENCE · {e}</small></article>)}</div>
      </section>

      <section className={`slide deck-work ${current === 4 ? "is-active" : ""}`} aria-hidden={current !== 4}>
        <div className="slide-label">04 / SELECTED WORK</div><div className="deck-title"><h2>让想法进入<br />可以被验证的环境。</h2></div>
        <div className="deck-projects">{projects.map((project,i)=><Link href={`/projects/${project.slug}`} className={`deck-project ${project.slug}`} key={project.slug}><div><span>CASE 0{i+1} · {project.year}</span><b>{project.code}</b></div><article><h3>{project.title}</h3><strong>{project.subtitle}</strong><p>{project.summary}</p><em>打开案例档案 ↗</em></article></Link>)}</div>
      </section>

      <section className={`slide deck-human ${current === 5 ? "is-active" : ""}`} aria-hidden={current !== 5}>
        <div className="slide-label">05 / HUMAN LAYER</div><div className="deck-title"><h2>产品之外，<br />保持表达、连接与好奇。</h2></div>
        <div className="deck-human-grid"><article><span>VOICE</span><h3>主持与公开表达</h3><p>在舞台、分享会和活动现场中，练习把复杂信息变得清楚、有感染力。</p></article><article><span>COMMUNITY</span><h3>社群与真实连接</h3><p>对接学生、商家与活动参与者，在长期互动中理解需求并建立信任。</p></article><article><span>EXPLORE</span><h3>持续探索</h3><p>从计算城市科学营到软硬件原型，愿意进入陌生领域，快速建立理解。</p></article></div>
      </section>

      <section className={`slide deck-contact ${current === 6 ? "is-active" : ""}`} aria-hidden={current !== 6}>
        <p className="eyebrow">06 / NEXT SIGNAL</p><h2>寻找一个真实问题，<br />一起把它做成产品。</h2><p>目标方向 · AI 产品实习 / 产品实习</p><div className="deck-contact-links"><a href="mailto:1230017371@student.must.edu.mo">职业邮箱 ↗</a><a href="/yuan-jinjiang-resume.pdf" download>下载脱敏简历 ↓</a><span>GitHub / LinkedIn · 待补充</span></div>
      </section>
    </div>

    <nav className="deck-controls" aria-label="页面切换">
      <button onClick={prev} disabled={current === 0} aria-label="上一页">←</button>
      <div>{slideNames.map((name,i)=><button key={name} onClick={()=>go(i)} className={i === current ? "active" : ""} aria-label={`前往${name}`} aria-current={i === current ? "step" : undefined}><span>{name}</span></button>)}</div>
      <button onClick={next} disabled={current === total - 1} aria-label="下一页">→</button>
    </nav>
    <p className="click-hint">点击右侧继续 · 点击左侧返回 · 键盘 ← →</p>
  </main>;
}
