# -*- coding: utf-8 -*-
"""Generate anonymized one-page resume PDF aligned with the portfolio site."""
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "yuan-jinjiang-resume.pdf"
FONT = Path(r"C:\Windows\Fonts\msyh.ttc")
FONT_BOLD = Path(r"C:\Windows\Fonts\msyhbd.ttc")
if not FONT.exists():
    FONT = Path(r"C:\Windows\Fonts\simhei.ttf")
    FONT_BOLD = FONT


class Resume(FPDF):
    def __init__(self):
        super().__init__(format="A4")
        self.set_auto_page_break(auto=True, margin=12)
        self.add_font("cn", "", str(FONT))
        self.add_font("cn", "B", str(FONT_BOLD if FONT_BOLD.exists() else FONT))
        self.set_margins(14, 12, 14)

    def header_block(self):
        self.set_font("cn", "B", 18)
        self.set_text_color(20, 40, 70)
        self.cell(0, 9, "袁锦江", new_x="LMARGIN", new_y="NEXT")
        self.set_font("cn", "", 9.5)
        self.set_text_color(50, 70, 95)
        self.multi_cell(
            0,
            5,
            "求职意向：AI 产品实习 / 产品实习  ·  澳门科技大学 · 人工智能 · 2023 级本科",
        )
        self.set_text_color(40, 90, 160)
        self.set_x(self.l_margin)
        self.multi_cell(
            0,
            5,
            "电话 17765960611  ·  邮箱 jinjiangy40@gmail.com\n"
            "作品集 https://yuan-jinjiang-portfolio-cn.pages.dev/",
        )
        self.ln(2)
        self.set_draw_color(40, 90, 160)
        self.set_line_width(0.5)
        self.line(14, self.get_y(), 196, self.get_y())
        self.ln(4)

    def section(self, title: str):
        self.set_font("cn", "B", 11)
        self.set_text_color(30, 90, 170)
        self.cell(0, 7, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(190, 205, 220)
        self.set_line_width(0.25)
        self.line(14, self.get_y(), 196, self.get_y())
        self.ln(2.5)
        self.set_text_color(30, 35, 45)

    def job(self, left: str, right: str):
        self.set_x(self.l_margin)
        self.set_font("cn", "B", 9.5)
        self.cell(118, 5, left)
        self.set_font("cn", "", 9)
        self.set_text_color(80, 95, 115)
        self.cell(0, 5, right, align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(30, 35, 45)

    def bullets(self, items: list[str]):
        self.set_font("cn", "", 9)
        for item in items:
            self.set_x(self.l_margin)
            self.multi_cell(0, 4.4, f"- {item}")
        self.ln(1.2)


def build():
    pdf = Resume()
    pdf.add_page()
    pdf.header_block()

    pdf.section("教育背景")
    pdf.job("澳门科技大学 · 人工智能（本科）", "2023.09 — 2027.06（预计）")
    pdf.bullets(
        [
            "核心课程：机器学习、深度学习、自然语言处理、计算机视觉、数据结构、数据库系统",
            "关注 AI 如何进入真实工作流，在原型、沟通与交付中训练产品判断",
        ]
    )

    pdf.section("实习与实践")
    pdf.job("湖南中南智能装备 · 产品 / 数据相关实习", "2026.06 — 2026.08")
    pdf.bullets(
        [
            "参与国家项目「基于工艺知识图谱的离线编程软件」相关工作",
            "完成工艺 / 材料数据清洗与结构化；搭建焊接工艺知识问答与参数查表流程",
            "整理工艺文档并维护知识库更新；协助验证大模型检索与工艺推荐效果",
        ]
    )
    pdf.job("上海金仕达 · FICC 产品部 · 软件开发实习生", "2025.06 — 2025.08")
    pdf.bullets(
        [
            "学习金融场景 AI Prompt 与智能体相关能力建设思路",
            "完成主流智能体平台功能对比；参与功能复测、Bug 追踪与数据更新等产品压力测试协作",
        ]
    )
    pdf.job("长沙顺通云科技 · 实习工程师", "2024.06 — 2024.08")
    pdf.bullets(
        [
            "参与官网重构项目的功能复测与问题追踪，建立对真实软件交付协作的基础理解",
        ]
    )
    pdf.job("教育服务与校园市场 · 校园大使 / 社群运营", "2023.09 — 至今")
    pdf.bullets(
        [
            "以校园大使形式对接数十家教育机构（启德、新东方、高顿等），覆盖语言培训与留学咨询等场景",
            "累计签约 10 万元+；运营多个 200+ 人兼职社群，连接机构资源与校园需求",
        ]
    )

    pdf.section("代表项目")
    pdf.job("SelectPC · 硬件智能对比与决策工具", "Python / Streamlit / SQLite")
    pdf.bullets(
        [
            "解决硬件参数散落多站、普通用户难形成可解释装机结论的问题",
            "参与核心功能实现、硬件数据整理、对比可视化与 Web 交互版本推进",
        ]
    )
    pdf.job("Voice Wings · 离线声控可穿戴翅膀装置", "ESP32 / LD3320 / 舵机 / WS2812B")
    pdf.bullets(
        [
            "解决表演翅膀多为静态装饰、难以离线声控与灯效联动的问题",
            "负责硬件全流程：电路焊接、结构制作、电源联调与整机集成",
        ]
    )
    pdf.job("SlideFix · 微信小程序 PPT 交稿助手", "微信小程序 / FastAPI / Python")
    pdf.bullets(
        [
            "解决交稿前清理 PPT 动画 / 备注费时易漏、改错难撤回的问题",
            "设计「先预览变更计划、再确认处理」流程，完成可联调小程序原型",
        ]
    )

    pdf.section("组织与表达 / 校外成长")
    pdf.job("校园组织 · 部长 / 策划 / 主持 / 执行", "2023 — 2026")
    pdf.bullets(
        [
            "创新工程学生会秘书部部长、网络文化交流社行政部部长：赞助拓展、赛事统筹（含 100+ / 200+ 人活动）",
            "桌友汇策划部干事：撰写联展 / 联赛 / 万圣节等策划案；音乐学会主持人团：校园歌手大赛总决赛主持",
            "宿舍先锋队迎新志愿组组长；另参与精武社财务、魔术社运营、羽毛球社外联等干事岗位",
        ]
    )
    pdf.job("校外成长 · 科学营 / AI 实战 / 表达社群", "持续")
    pdf.bullets(
        [
            "哈工大计算机城市科学营（澳科大推荐学员，本校 13 个推荐名额）：跨学科 AI 应用课题学习与交流",
            "树成林教育 · AI 商业实战社群学员：多场景 AI 应用练习与实操闭环",
            "1×100 俱乐部：15 期开眼计划优秀学员、17 期优秀教练员；多次 50–60 人分享会主题演讲",
        ]
    )

    pdf.section("技能与证书")
    pdf.set_font("cn", "", 9)
    pdf.set_x(pdf.l_margin)
    pdf.multi_cell(
        0,
        4.5,
        "- 产品与协作：竞品分析、需求拆解、原型验证；Office / 腾讯文档 / 企业协作工具\n"
        "- 技术基础：Python（基础）、SQL（基础）、Prompt；NVIDIA DLI 深度学习基础\n"
        "- 工程设计：Onshape CAD（Part Studios / Assembly / Sketch）",
    )

    pdf.ln(3)
    pdf.set_font("cn", "", 8)
    pdf.set_text_color(120, 130, 145)
    pdf.multi_cell(0, 4, "说明：本简历为公开投递用脱敏版本；完整案例与过程材料见个人作品集网站。")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
