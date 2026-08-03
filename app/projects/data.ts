export type ProjectEvidence = {
  kind: "image" | "download";
  label: string;
  caption: string;
  src: string;
  downloadName?: string;
};

export type Project = {
  slug: string;
  code: string;
  year: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  hero: string;
  problem: string;
  role: string;
  decisions: string[];
  outcome: string[];
  reflection: string;
  evidenceTitle?: string;
  evidenceNote?: string;
  evidence?: ProjectEvidence[];
};

export const projects: Project[] = [
  {
    slug: "selectpc",
    code: "SPC",
    year: "2026",
    title: "SelectPC",
    subtitle: "硬件智能对比与决策工具",
    summary:
      "面向选购电脑硬件的用户，把分散的 CPU、GPU、内存、主板参数组织成可搜索、可比较、可解释的选择流程。",
    tags: ["产品设计", "Python", "Streamlit", "SQLite", "课程项目"],
    hero: "从“查参数”到“做决定”，减少用户在电商、评测与论坛之间反复切换的成本。",
    problem:
      "懂一点硬件、但缺少专业判断的用户，常常要在多个站点之间来回对比性能与价格，仍难以形成清楚、可解释的配置结论。",
    role:
      "BSAI301 软件工程与项目管理课程项目（GitHub Classroom 私有仓）。本人参与核心功能实现、硬件数据库整理、对比与可视化相关能力，以及 Web 交互版本推进；仓库因课程要求保持私密，下方提供仓库截图作为项目存在证明。",
    decisions: [
      "将 CPU、GPU、RAM、主板等信息统一进入本地数据层，支持搜索与分页浏览",
      "围绕“硬件搜索 / 硬件对比 / AI 咨询”组织功能，而不是堆砌孤立页面",
      "用 Streamlit 快速验证 Web 交互流程，降低非技术同学试用门槛",
      "同步完善图表中文显示、对比结果可读性，以及后续可维护的数据修复脚本",
    ],
    outcome: [
      "完成 SelectPC v1.0 原型：首页、硬件搜索与对比主流程可运行",
      "支持 CPU、GPU、RAM、主板等品类的参数查看与多维对比",
      "保留课程文档、实现计划与演示视频，形成可复查的项目证据链",
    ],
    reflection:
      "最大收获不是堆叠功能，而是把“用户如何做硬件决策”拆成可验证流程。仓库因课程作业保持私密，所以作品集用界面截图、仓库截图和演示视频下载来呈现证据，而不是公开源码地址。",
    evidenceTitle: "项目证据",
    evidenceNote: "仓库为课程私有库，无法公开链接；以下为界面截图、仓库截图与功能演示下载。",
    evidence: [
      {
        kind: "image",
        label: "01 / APP HOME",
        caption: "Streamlit 主页面：硬件搜索与对比入口",
        src: "/projects/selectpc/app-home.png",
      },
      {
        kind: "image",
        label: "02 / PRIVATE REPO",
        caption: "GitHub Classroom 私有仓截图（课程作业，无法公开访问）",
        src: "/projects/selectpc/github-repo.png",
      },
      {
        kind: "download",
        label: "03 / DEMO VIDEO",
        caption: "功能演示视频（点击按钮下载）",
        src: "/projects/selectpc/selectpc-demo.mp4",
        downloadName: "SelectPC-功能演示.mp4",
      },
    ],
  },
  {
    slug: "voice-wings",
    code: "VWB",
    year: "2026",
    title: "Voice Wings",
    subtitle: "离线声控背包翅膀装置",
    summary: "把语音识别、机械传动、舵机与 RGB 灯效装进可穿戴原型，验证互动表演装置的可行性。",
    tags: ["硬件统筹", "ESP32", "离线语音", "原型制作"],
    hero: "让静态装饰对声音做出回应，成为一个可互动、可表演的穿戴设备。",
    problem: "常见角色扮演翅膀多为静态或手动控制，操作繁琐，也缺少动作、灯光与现场互动。",
    role:
      "两人课程项目。本人负责全部硬件工作，包括电路设计与焊接、元器件和电源调试、机械结构制作及整机集成；队友负责主要软件开发。",
    decisions: [
      "采用 LD3320 实现无需联网的语音控制",
      "用 ESP32、舵机和 WS2812B 灯带组合动作与灯效",
      "经历多次烧板与连接故障后，主动删减冗余模块",
      "由面包板转为焊接板，并用轻质材料降低舵机负担",
    ],
    outcome: [
      "完成可响应离线语音指令的穿戴式原型",
      "实现翅膀开合、慢速扇动与多种灯光模式",
      "在真实故障中完成元器件替换、电源与结构联调",
    ],
    reflection:
      "原型证明核心交互可行，但外壳、耐用性和舒适度仍是明显短板。下一步会优先重做结构和供电安全，再谈更多灯效与动作。",
    evidenceTitle: "项目影像",
    evidenceNote: "影像素材待补充；当前先保留结构位，不虚构图片或成果。",
  },
];
