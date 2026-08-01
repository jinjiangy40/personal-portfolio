import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main className={`case-page ${project.slug}`}>
    <header className="case-nav"><Link href="/#work">← 返回作品集</Link><span>YJJ / CASE ARCHIVE</span><Link href={`/projects/${next.slug}`}>下一个案例 →</Link></header>
    <section className="case-hero case-panel"><div><p className="eyebrow">CASE FILE · {project.code} / {project.year}</p><h1>{project.title}</h1><strong>{project.subtitle}</strong><p>{project.hero}</p><ul>{project.tags.map(t => <li key={t}>{t}</li>)}</ul></div><div className="case-machine" aria-hidden="true"><span>{project.code}</span><i /><i /><i /><b>ACTIVE</b></div><a href="#problem">向下解码 ↓</a></section>
    <section id="problem" className="case-panel split"><div><p className="eyebrow">01 / PROBLEM</p><h2>先确认真实问题，<br />再决定做什么。</h2></div><article><h3>问题背景</h3><p>{project.problem}</p><h3>我的角色</h3><p>{project.role}</p></article></section>
    <section className="case-panel decisions"><div className="section-head compact"><p>02 / PRODUCT DECISIONS</p><h2>关键判断与<br />实现路径。</h2></div><ol>{project.decisions.map((d,i) => <li key={d}><span>{String(i+1).padStart(2,"0")}</span><p>{d}</p></li>)}</ol></section>
    <section className="case-panel results"><div><p className="eyebrow">03 / DELIVERED</p><h2>最终交付</h2></div><div>{project.outcome.map((o,i) => <article key={o}><b>0{i+1}</b><p>{o}</p></article>)}</div></section>
    <section className="case-panel reflection"><p className="eyebrow">04 / REFLECTION</p><blockquote>{project.reflection}</blockquote><div><Link className="button primary" href={`/projects/${next.slug}`}>查看下一个案例 ↗</Link><Link className="button" href="/#contact">联系我</Link></div></section>
  </main>;
}
