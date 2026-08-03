"use client";

import { useEffect, useState } from "react";
import type { ProjectEvidence } from "./data";

export default function EvidenceGallery({
  evidence,
}: {
  evidence: ProjectEvidence[];
}) {
  const [active, setActive] = useState<ProjectEvidence | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  if (!evidence.length) {
    return (
      <div className="evidence-grid">
        <figure>
          <span>01</span>
          <b>最终成品 / 核心界面</b>
          <small>建议横向主视觉</small>
        </figure>
        <figure>
          <span>02</span>
          <b>使用过程 / 功能演示</b>
          <small>建议截图或短视频</small>
        </figure>
        <figure>
          <span>03</span>
          <b>草图 / 制作过程</b>
          <small>建议 2-4 张过程图</small>
        </figure>
      </div>
    );
  }

  return (
    <>
      <div
        className={`evidence-grid has-media ${evidence.length >= 4 ? "dense" : ""}`}
      >
        {evidence.map((item) =>
          item.kind === "image" ? (
            <button
              key={item.src}
              type="button"
              className="evidence-card evidence-card-btn"
              onClick={() => setActive(item)}
            >
              <span>{item.label}</span>
              <img src={item.src} alt={item.caption} />
              <div className="evidence-card-meta">
                <b>{item.caption}</b>
                <small>点击查看完整图片</small>
              </div>
            </button>
          ) : (
            <figure key={item.src} className="evidence-card evidence-download">
              <span>{item.label}</span>
              <div className="evidence-download-body">
                <b>{item.caption}</b>
                <small>点击下载本地演示文件</small>
                <a
                  className="button primary"
                  href={item.src}
                  download={item.downloadName ?? true}
                >
                  下载功能演示 ↓
                </a>
              </div>
            </figure>
          ),
        )}
      </div>

      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
        >
          <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActive(null)}
              aria-label="关闭"
            >
              ×
            </button>
            <img src={active.src} alt={active.caption} />
            <p>{active.caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
