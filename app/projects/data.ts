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
  repoUrl?: string;
  repoLabel?: string;
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
    subtitle: "离线声控可穿戴翅膀装置",
    summary:
      "面向舞台表演与角色扮演场景，把离线语音、舵机传动与 RGB 灯效整合进可穿戴机械翅膀，让装饰装置能听指令、能动起来、能发光。",
    tags: ["硬件统筹", "ESP32", "LD3320", "舵机", "WS2812B"],
    hero: "让声音成为开关：翅膀扇动、灯光变幻，把静态道具做成可互动的机电装置。",
    problem:
      "主流电商上的表演翅膀大多仍是静态装饰，或依赖手动开关。它们很难同时完成开合动作、灯效反馈与无需联网的语音互动，舞台表现力和玩法都被限制。",
    role:
      "在本项目中，我负责硬件侧全流程：电路设计与焊接、舵机与灯带布线、机械结构与翅膀骨架制作、材料加工，以及整机集成联调。协作同学负责软件开发：舵机动作与灯效控制、程序调试与软件优化。",
    decisions: [
      "以 ESP32 作为主控，统一调度舵机 PWM、灯带单总线与语音模块通信",
      "选用 LD3320 做离线语音识别，保证现场演示不依赖网络",
      "用舵机驱动轻质翅膀骨架，搭配欧根纱等轻质材料，降低负载、保证可扇动",
      "电源采用 7.4V 锂电池经降压模块供电，电路由洞洞板焊接，保留 Type-C 充电路径",
      "固件主循环按 100ms 轮询语音指令，并分离正常扇动、慢速扇动、彩虹/闪烁/流水等灯效状态机",
    ],
    outcome: [
      "完成可穿戴机电原型：离线语音触发、舵机扇动与 WS2812B 灯效同机运行",
      "建立从结构草图、系统架构、焊接电路到固件主循环的完整设计链路",
      "硬件侧完成背架、翅膀骨架、舵机安装、电源与控制板集成；软件侧完成多模式动作与灯光控制逻辑",
    ],
    reflection:
      "这个项目最有价值的地方，是把“好看的装饰”拆成可落地的机电系统：结构承重、电源稳定、通信协议和交互状态要同时成立。后续若继续迭代，会优先优化外壳工艺、舵机扭矩与语音识别鲁棒性，让装置更适合长时间佩戴与舞台环境。",
    repoUrl: "https://github.com/jinjiangy40/voice-controlled-wings",
    repoLabel: "voice-controlled-wings",
    evidenceTitle: "制作过程",
    evidenceNote:
      "从原型实物、结构草图、系统架构，到焊接电路与固件主循环，串联完整制作链路。",
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
      {
        kind: "image",
        label: "05 / FIRMWARE",
        caption: "固件主循环：语音轮询 + 扇动/灯效状态更新",
        src: "/projects/voice-wings/image7.png",
      },
    ],
  },
  {
    slug: "slidefix",
    code: "SFX",
    year: "2026",
    title: "SlideFix",
    subtitle: "微信小程序 · PPT 交稿助手",
    summary:
      "面向实习汇报、小组作业与日常交稿场景，把 PPT 清理与页管理做成“先预览、再处理”的微信小程序流程，减少一点就改、改错难撤回的风险。",
    tags: ["微信小程序", "FastAPI", "Python", "PPTX", "产品设计"],
    hero: "交稿前先看清会改什么：去动画、清备注、管页面，确认后再下载结果。",
    problem:
      "实习汇报、课程作业或客户交稿前，PPT 里常残留切换动画、演讲者备注、作者信息，或页数过多需要拆开。用户往往要在 WPS/Office 里手动逐项清理，既费时也容易漏。",
    role:
      "个人公开项目（GitHub：jinjiangy40/slidefix）。我负责产品流程与端到端实现：微信小程序前端（首页 / 预览 / 结果 / 我的）、FastAPI 处理服务，以及 ppt_tools 核心清理与页管理逻辑；另保留桌面端与命令行路径便于本地验证。",
    decisions: [
      "把主流程设计成“选文件 → 设选项 → 预览变更计划 → 确认处理 → 下载”，避免批量误改",
      "交稿清理聚焦去切换/动画、清备注与批注、清作者属性、删隐藏页；字体调整作为可选项",
      "页管理支持按关键词删除/保留，以及按每 N 页或指定起始页拆分文稿",
      "小程序负责交互与上传，实际改文件放在服务端 ppt_tools 流水线，便于复用 CLI 与桌面版",
      "仅支持 .pptx，并在文档中明确真机联调需配置 HTTPS 合法域名",
    ],
    outcome: [
      "完成可联调的微信小程序原型（展示版本 v0.3.0）：首页、预览、结果、我的四页流程打通",
      "实现预览接口与确认处理接口：先返回 changePlan，再执行清理 / 删页 / 拆分并下载 pptx 或 zip",
      "沉淀公开仓库、联调文档与发布清单，方便复查与后续正式上线配置",
    ],
    reflection:
      "这个项目最重要的产品判断，是把“批处理能力”收进可确认的预览步骤。清理功能本身不难堆，难的是让用户在改之前看见后果。后续若正式上线，会优先补齐公网 HTTPS、隐私说明与真机验收，而不是继续盲目加功能。",
    repoUrl: "https://github.com/jinjiangy40/slidefix",
    repoLabel: "jinjiangy40/slidefix",
    evidenceTitle: "产品结构",
    evidenceNote:
      "以下为应用图标、安全流程示意与系统架构示意；源码与说明见公开 GitHub 仓库。",
    evidence: [
      {
        kind: "image",
        label: "01 / APP ICON",
        caption: "SlideFix 小程序应用图标",
        src: "/projects/slidefix/app-icon.png",
      },
      {
        kind: "image",
        label: "02 / SAFE FLOW",
        caption: "安全流程：选文件 → 预览计划 → 确认处理 → 下载",
        src: "/projects/slidefix/flow.svg",
      },
      {
        kind: "image",
        label: "03 / ARCHITECTURE",
        caption: "系统结构：小程序前端 · FastAPI · ppt_tools 核心",
        src: "/projects/slidefix/architecture.svg",
      },
    ],
  },
];
