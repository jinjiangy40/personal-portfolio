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
  /** 首页作品卡：一句话说清解决什么问题 */
  hook: string;
  /** 首页卡片主视觉：真实截图/实物图 */
  cover: string;
  tags: string[];
  hero: string;
  problem: string;
  role: string;
  decisions: string[];
  outcome: string[];
  reflection: string;
  repoUrl?: string;
  repoLabel?: string;
  evidenceTitle?: string;
  evidenceNote?: string;
  evidence?: ProjectEvidence[];
};

export const projects: Project[] = [
  {
    slug: "slidefix",
    code: "SLI",
    year: "2026",
    title: "SlideFix",
    subtitle: "PPT 交稿助手",
    summary:
      "面向实习汇报、小组作业与日常交稿场景，把 PPT 清理做成「先预览变更计划、再确认处理」的微信小程序流程，降低批量误改风险。",
    hook: "解决：PPT 动画、备注批量清理易漏易误改。",
    cover: "/projects/slidefix/ui-home.png",
    tags: ["产品设计", "AI 辅助开发", "微信小程序", "FastAPI", "Python"],
    hero: "设计「生成变更计划 → 预览 → 确认处理」流程，借助 AI 完成可联调原型。",
    problem:
      "针对 PPT 动画、备注批量清理易漏易误改的问题：手动操作费时且易漏；批量直接处理又存在误改风险。",
    role:
      "负责需求定义、产品流程设计，并借助 ChatGPT、Cursor、Codex 完成可联调原型。不将自己定位为传统全栈工程师。",
    decisions: [
      "主流程定为「生成变更计划 → 预览 → 确认处理」，避免一点击就直接改文件",
      "核心产品判断：批量文件操作不可逆，用户应在修改前知道会改什么、会删除什么",
      "借助 ChatGPT / Cursor / Codex 完成需求拆分、代码生成、测试反馈与持续调整",
    ],
    outcome: [
      "完成可联调的微信小程序原型，主流程打通",
      "实现「先预览变更计划、再确认处理」的交互",
      "当前仍为可联调原型 / MVP 阶段",
    ],
    reflection:
      "最重要的产品判断，是把批处理能力收进可确认的预览步骤。清理功能不难堆，难的是让用户在改之前看见后果。",
    repoUrl: "https://github.com/jinjiangy40/slidefix",
    repoLabel: "查看项目仓库 ↗",
    evidenceTitle: "产品界面",
    evidenceNote: "微信小程序关键界面截图；项目仍为可联调原型。",
    evidence: [
      {
        kind: "image",
        label: "01 / HOME",
        caption: "首页：先预览再处理，选择文件并配置清理项",
        src: "/projects/slidefix/ui-home.png",
      },
      {
        kind: "image",
        label: "02 / CLEAN",
        caption: "清理选项：去切换、去动画、清备注与作者信息等",
        src: "/projects/slidefix/ui-clean.png",
      },
      {
        kind: "image",
        label: "03 / PAGES",
        caption: "页管理：按关键词删留页面，或拆成多个文件",
        src: "/projects/slidefix/ui-pages.png",
      },
    ],
  },
  {
    slug: "selectpc",
    code: "SEL",
    year: "2026",
    title: "SelectPC",
    subtitle: "硬件智能对比与决策工具",
    summary:
      "面向选购电脑硬件的用户，把分散的 CPU、GPU、内存、主板参数组织成可搜索、可比较、可解释的选择流程。",
    hook: "解决：硬件参数散落多站，普通用户很难形成可解释的装机判断。",
    cover: "/projects/selectpc/app-home.png",
    tags: ["需求设计", "数据整理", "AI 辅助开发", "Python", "Streamlit"],
    hero: "从「查参数」到「做决定」：需求输入 → 参数分析 → 硬件对比 → 推荐结果。",
    problem:
      "电脑硬件参数分散在不同网站。普通用户很难快速理解 CPU、GPU、RAM、主板如何比较，也难以根据真实需求形成装机判断。",
    role:
      "整理 CPU、GPU、RAM、主板等 200+ 款硬件数据及核心对比维度，设计需求输入、参数对比与推荐逻辑，并借助 AI 编程工具完成 Web 原型。",
    decisions: [
      "整理 200+ 款 CPU / GPU / RAM / 主板等硬件产品数据与核心对比维度",
      "设计需求输入、参数对比与推荐逻辑",
      "借助 AI 编程工具完成可交互 Web 原型",
    ],
    outcome: [
      "完成 SelectPC Web 原型：搜索与对比主流程可运行",
      "覆盖 200+ 款硬件产品数据",
      "保留演示视频与过程材料，方便复查",
    ],
    reflection:
      "最大收获是把「用户如何做硬件决策」拆成可验证流程：先统一数据，再对比解释，最后才落到推荐。产品判断要落在用户真正卡住的那一步。",
    evidenceTitle: "项目材料",
    evidenceNote: "产品界面、过程材料与功能演示。",
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
        caption: "课程协作仓库截图",
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
    code: "VOI",
    year: "2026",
    title: "Voice Wings",
    subtitle: "离线声控可穿戴翅膀装置",
    summary:
      "面向舞台表演与角色扮演场景，把离线语音、舵机传动与 RGB 灯效整合进可穿戴机械翅膀。",
    hook: "解决：表演翅膀多为静态装饰，难以离线声控并联动灯效与动作。",
    cover: "/projects/voice-wings/image1.jpeg",
    tags: ["硬件设计", "ESP32", "LD3320", "舵机", "WS2812B"],
    hero: "把概念做成实体：离线语音控制翅膀动作，并联动 RGB 灯效。",
    problem:
      "主流表演翅膀多为静态装饰，或依赖手动开关，很难同时完成开合动作、灯效反馈与无需联网的语音互动。",
    role:
      "负责元器件选型、电路焊接、机械结构与整机联调，实现离线语音控制翅膀动作及 RGB 灯效联动。软件部分为团队协作。",
    decisions: [
      "以硬件侧为主：元器件选型、电路焊接、机械结构与整机联调",
      "选用离线语音方案，保证现场演示不依赖网络",
      "完成可穿戴原型，实现翅膀动作与 RGB 灯效联动",
    ],
    outcome: [
      "完成可穿戴机电原型：离线语音控制翅膀动作及 RGB 灯效联动",
      "硬件侧完成选型、焊接、结构与整机联调",
      "保留实物与制作过程材料",
    ],
    reflection:
      "这个项目更重要的是动手把概念变成实体：结构、电源、装配与联调要同时成立。后续若迭代，会优先优化佩戴舒适度与现场稳定性。",
    repoUrl: "https://github.com/jinjiangy40/voice-controlled-wings",
    repoLabel: "查看项目仓库 ↗",
    evidenceTitle: "制作过程",
    evidenceNote: "从实物、结构到焊接电路，串联硬件制作链路。",
    evidence: [
      {
        kind: "image",
        label: "01 / PROTOTYPE",
        caption: "可穿戴原型：舵机驱动骨架 + 轻质翅膀织物与灯效",
        src: "/projects/voice-wings/image1.jpeg",
      },
      {
        kind: "image",
        label: "02 / STRUCTURE",
        caption: "机械结构草图：翅膀、连杆、舵机与电池布局",
        src: "/projects/voice-wings/image5.png",
      },
      {
        kind: "image",
        label: "03 / ARCHITECTURE",
        caption: "系统架构：ESP32 / LD3320 / 舵机 / 灯带 / 电源链路",
        src: "/projects/voice-wings/image4.png",
      },
      {
        kind: "image",
        label: "04 / CIRCUIT",
        caption: "焊接电路与电源模块：主控、语音模块与锂电池集成",
        src: "/projects/voice-wings/image6.png",
      },
    ],
  },
];
