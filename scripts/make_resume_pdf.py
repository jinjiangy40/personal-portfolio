# -*- coding: utf-8 -*-
"""Generate anonymized one-page resume PDF aligned with the portfolio site.

创建时间: 2026-08-07
更新时间: 2026-08-07
"""
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
            "求职意向：AI 产品运营 / 产品运营 / 市场增长 / 商务拓展（BD）实习"
            "  ·  澳门科技大学 · 人工智能 · 2023 级本科",
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
            "关注 AI 在真实业务中的应用，实践从需求发现、产品原型到用户运营与商业转化",
            "熟悉 ChatGPT / Cursor / Codex / Coze 等 AI 工具；NVIDIA DLI Fundamentals of Deep Learning",
        ]
    )

    pdf.section("实习经历")
    pdf.job("湖南中南智能装备 · 中央研究院实习生", "2026.06 — 2026.08")
    pdf.bullets(
        [
            "参与国家项目「基于工艺知识图谱的离线编程软件」；完成工艺 / 材料数据整理与结构化",
            "参与知识库维护；搭建焊接工艺知识问答与参数查表流程；协助验证大模型检索与工艺推荐效果",
        ]
    )
    pdf.job("上海金仕达 · FICC 产品部 · 软件开发实习生", "2025.06 — 2025.08")
    pdf.bullets(
        [
            "围绕金融 AI 智能体做产品调研；对比自研平台与 Coze / 豆包 / MiniMax 等主流平台",
            "自学 Coze 并完成智能体搭建；参与功能复测、Bug 追踪、数据更新与压力测试",
        ]
    )
    pdf.job("长沙顺通云科技 · 实习工程师", "2024.06 — 2024.08")
    pdf.bullets(
        [
            "参与湖南省妇幼官网重构：功能复测、问题记录与进度跟进，协助保障按计划上线",
        ]
    )

    pdf.section("商业与运营实践")
    pdf.job("教育服务与校园市场 · 校园大使 / 社群运营", "2023.09 — 至今")
    pdf.bullets(
        [
            "累计对接 10+ 家教育 / 培训机构（启德、新东方、高顿、环球雅思等）；累计签约 10 万元+",
            "覆盖珠海、澳门高校市场；独立运营多个 200+ 人校园兼职社群，探索兼职 / 赞助等资源对接",
        ]
    )

    pdf.section("代表项目")
    pdf.job("SlideFix · PPT 交稿助手", "产品设计 / AI 辅助开发")
    pdf.bullets(
        [
            "设计「先预览变更计划、再确认处理」流程；借助 ChatGPT / Cursor / Codex 完成可联调微信小程序原型",
        ]
    )
    pdf.job("SelectPC · 硬件智能对比与决策工具", "需求设计 / 数据整理")
    pdf.bullets(
        [
            "整理 200+ 款 CPU / GPU / RAM / 主板数据与对比维度；借助 AI 完成可交互 Web 原型",
        ]
    )
    pdf.job("Voice Wings · 离线声控可穿戴翅膀", "硬件设计 / 整机联调")
    pdf.bullets(
        [
            "负责元器件选型、电路焊接、机械结构、电源调试与整机装配；软件为团队协作",
        ]
    )

    pdf.section("赛事 / 表达 / 校外背书")
    pdf.job("赛事与组织 · 部长 / 策划 / 主持", "2023 — 2026")
    pdf.bullets(
        [
            "协助 ZOWIE GEAR CS2、王者荣耀高校联赛澳门赛区；独立负责金铲铲校内赛（120+ 人）",
            "撰写联展 / 联赛 / 万圣节等策划案；校园歌手大赛总决赛主持；1×100 多次 50–60 人主题分享",
        ]
    )
    pdf.job("校外背书", "精选")
    pdf.bullets(
        [
            "1×100：15 期开眼计划优秀学员、17 期优秀教练员",
            "入选哈尔滨工业大学第二届计算城市科学营，参与跨学科 AI 应用课题学习与交流",
        ]
    )

    pdf.section("技能与工具")
    pdf.set_font("cn", "", 9)
    pdf.set_x(pdf.l_margin)
    pdf.multi_cell(
        0,
        4.5,
        "- AI Tools：ChatGPT / Cursor / Codex / Coze\n"
        "- 产品与运营：竞品分析、需求拆解、社群运营、用户沟通、活动策划与执行\n"
        "- 工具基础：Excel / PowerPoint / GitHub 基础；Python / SQL 入门；Onshape CAD",
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
