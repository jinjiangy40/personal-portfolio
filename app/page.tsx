import Link from "next/link";
import { projects } from "./projects/data";

const experiences = [
  { year: "2025", title: "上海金仕达 · FICC 产品部", role: "软件开发实习生", text: "从金融 AI 提示词学习进入智能体实践，参与平台竞品分析、功能复测、Bug 追踪与数据更新。" },
  { year: "2024", title: "长沙顺通云科技", role: "实习工程师", text: "参与官网重构项目的功能复测与问题追踪，在真实交付节奏中理解开发、测试与协作。" },
  { year: "2023—NOW", title: "教育服务与校园市场", role: "校园代理 / 社群运营", text: "连接学生真实需求与教育服务，累计签约金额 6 万元；同时运营 200 人兼职社群并探索商业合作。" },
  { year: "CAMPUS", title: "活动、赛事与学生组织", role: "主持 / 策划 / 项目推动", text: "主持 300 人校园歌手大赛，独立执行 100+ 人电竞赛事，参与大型活动策划与现场协同。" },
];

const capabilities = [
  ["01", "AI 产品与需求", "把模糊需求拆成可验证的问题、功能与迭代路径。", "智能体竞品分析 / SelectPC"],
  ["02", "技术理解与原型", "理解软件、数据和硬件边界，并动手完成可运行原型。", "Python / Streamlit / ESP32"],
  ["03", "商业沟通与用户连接", "从真实沟通中识别动机，用清楚表达推动选择。", "校园市场 / 社群运营"],
  ["04", "组织策划与执行", "把多人、多环节的事情拆开、对齐并推进到现场。", "赛事 / 主持 / 学生组织"],
];

export default function Home() {
  return (
    <main>
      <div className="progress" aria-hidden="true" />
      <header className="topbar">
        <Link href="#top" className="wordmark">YJJ / ARCHIVE</Link>
        <nav aria-label="主导航">
          <Link href="#profile">档案</Link><Link href="#work">作品</Link><Link href="#contact">联系</Link>
        </nav>
        <a className="status" href="mailto:1230017371@student.must.edu.mo"><i /> OPEN TO INTERN</a>
      </header>

      <section id="top" className="hero scene">
        <div className="grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">AI PRODUCT INTERN · 2026 / 27</p>
          <h1><span>袁锦江</span><em>把技术理解，</em>变成真实可用的产品。</h1>
          <p className="lede">澳门科技大学人工智能本科生。关注 AI 如何进入真实工作流，也在一次次原型、沟通与交付中，学习做出正确的产品判断。</p>
          <div className="actions"><Link className="button primary" href="#work">查看代表作品 ↘</Link><Link className="button" href="#profile">进入个人档案</Link></div>
        </div>
        <div className="signal-card" aria-label="个人能力坐标图">
          <div className="orbit"><span /><span /><span /><b>YJJ</b></div>
          <div className="coord">22.197 / 113.543<br />MUST · MACAU</div>
          <div className="index"><b>01</b><span>技术理解</span><b>02</b><span>产品判断</span><b>03</b><span>真实落地</span></div>
        </div>
        <a className="scroll-cue" href="#profile">SCROLL TO DECODE ↓</a>
      </section>

      <section id="profile" className="profile scene light-scene">
        <div className="section-head"><p>01 / PERSONAL DOSSIER</p><h2>不是一个标签，<br />而是一组正在交叉的能力。</h2></div>
        <div className="profile-grid">
          <article className="profile-intro"><span className="stamp">MUST · BSAI · 2027</span><h3>人工智能给我技术坐标，真实项目让我学习判断。</h3><p>我不把“懂技术”当作终点。更想理解用户为什么需要、团队怎样实现、产品如何在约束中成立。</p></article>
          <dl className="facts"><div><dt>EDUCATION</dt><dd>澳门科技大学<br /><small>人工智能 · 本科</small></dd></div><div><dt>DIRECTION</dt><dd>AI 产品实习<br /><small>产品 × 技术 × 业务</small></dd></div><div><dt>AVAILABLE</dt><dd>2026.09—2027.06<br /><small>持续实习</small></dd></div></dl>
          <blockquote>“先进入真实问题，再让技术成为解法。”</blockquote>
        </div>
      </section>

      <section className="timeline scene">
        <div className="section-head compact"><p>02 / FIELD RECORDS</p><h2>从代码、市场到现场，<br />在不同环境里练习推进。</h2></div>
        <div className="timeline-list">{experiences.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2, "0")}</span><time>{item.year}</time><div><h3>{item.title}</h3><strong>{item.role}</strong></div><p>{item.text}</p></article>)}</div>
      </section>

      <section className="capabilities scene dark-scene">
        <div className="section-head"><p>03 / CAPABILITY SYSTEM</p><h2>能力不靠百分比，<br />靠真实证据交叉验证。</h2></div>
        <div className="cap-grid">{capabilities.map(([n,t,d,e]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><small>EVIDENCE · {e}</small></article>)}</div>
      </section>

      <section id="work" className="work scene">
        <div className="section-head compact"><p>04 / SELECTED WORK</p><h2>让想法进入<br />可以被验证的环境。</h2></div>
        <div className="project-track" aria-label="代表项目横向列表">{projects.map((project, i) => <article className={`project-card ${project.slug}`} key={project.slug}>
          <div className="project-visual" aria-hidden="true"><span>{project.code}</span><div className="project-orbit" /></div>
          <div className="project-copy"><p>CASE {String(i + 1).padStart(2, "0")} · {project.year}</p><h3>{project.title}</h3><strong>{project.subtitle}</strong><p>{project.summary}</p><ul>{project.tags.map(t => <li key={t}>{t}</li>)}</ul><Link href={`/projects/${project.slug}`}>打开案例档案 ↗</Link></div>
        </article>)}</div>
        <p className="track-hint">横向滑动浏览 · SWIPE / SCROLL →</p>
      </section>

      <section className="human scene light-scene">
        <div className="section-head"><p>05 / HUMAN LAYER</p><h2>产品之外，<br />保持表达、连接与好奇。</h2></div>
        <div className="human-grid"><article><span>VOICE</span><h3>主持与公开表达</h3><p>在舞台、分享会和活动现场中，练习把复杂信息变得清楚、有感染力。</p></article><article><span>COMMUNITY</span><h3>社群与真实连接</h3><p>对接学生、商家与活动参与者，在长期互动中理解需求并建立信任。</p></article><article><span>EXPLORE</span><h3>持续探索</h3><p>从计算城市科学营到软硬件原型，愿意进入陌生领域，快速建立理解。</p></article></div>
      </section>

      <section id="contact" className="contact scene">
        <p className="eyebrow">06 / NEXT SIGNAL</p><h2>寻找一个真实问题，<br />一起把它做成产品。</h2><p>目标方向 · AI 产品实习 / 产品实习</p>
        <div className="contact-links"><a href="mailto:1230017371@student.must.edu.mo">职业邮箱 ↗</a><a href="/yuan-jinjiang-resume.pdf" download>下载脱敏简历 ↓</a><span>GitHub / LinkedIn · 待补充</span></div>
        <footer><b>袁锦江 · YUAN JINJIANG</b><span>AI PRODUCT PORTFOLIO · 2026</span><Link href="#top">BACK TO TOP ↑</Link></footer>
      </section>
    </main>
  );
}
