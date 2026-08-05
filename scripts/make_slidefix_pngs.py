from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

out = Path(__file__).resolve().parents[1] / "public" / "projects" / "slidefix"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        r"C:\Windows\Fonts\msyhbd.ttc" if bold else r"C:\Windows\Fonts\msyh.ttc",
        r"C:\Windows\Fonts\simhei.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def make_flow() -> None:
    img = Image.new("RGB", (1200, 720), "#0a1426")
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((40, 40, 1160, 680), radius=8, outline="#456a9a", width=2)
    draw.text((80, 90), "SLIDEFIX · SAFE FLOW", fill="#16d8ff", font=font(22, True))
    draw.text((80, 140), "先预览，再处理", fill="#e8edf0", font=font(44, True))
    draw.text(
        (80, 210),
        "选文件 → 设选项 → 预览变更计划 → 确认处理 → 下载结果",
        fill="#8da0b8",
        font=font(22),
    )
    steps = [
        ("01", "选文件", ".pptx", False),
        ("02", "设选项", "清理 / 页管理", False),
        ("03", "预览计划", "看清会改什么", True),
        ("04", "确认下载", "pptx / zip", False),
    ]
    x = 80
    for index, (num, title, sub, accent) in enumerate(steps):
        width = 200 if index < 3 else 250
        box = (x, 300, x + width, 460)
        draw.rounded_rectangle(
            box,
            radius=6,
            fill="#12233d",
            outline="#ff7a1a" if accent else "#1667ff",
            width=2,
        )
        cx = (box[0] + box[2]) // 2
        color = "#ff7a1a" if accent else "#16d8ff"
        draw.text((cx, 340), num, fill=color, font=font(20, True), anchor="mt")
        draw.text((cx, 385), title, fill="#e8edf0", font=font(26, True), anchor="mt")
        draw.text((cx, 425), sub, fill="#8da0b8", font=font(16), anchor="mt")
        if index < 3:
            draw.line((box[2] + 8, 380, box[2] + 38, 380), fill="#16d8ff", width=2)
            x = box[2] + 50
    draw.text((80, 540), "MINIPROGRAM · FASTAPI · PPT_TOOLS", fill="#8da0b8", font=font(18))
    draw.text((80, 585), "SlideFix v0.3.0", fill="#65748a", font=font(16))
    img.save(out / "flow.png", optimize=True)


def make_architecture() -> None:
    img = Image.new("RGB", (1200, 720), "#07101f")
    draw = ImageDraw.Draw(img)
    draw.text((80, 80), "SYSTEM ARCHITECTURE", fill="#16d8ff", font=font(20, True))
    draw.text((80, 125), "小程序前端 · API · PPT 核心", fill="#e8edf0", font=font(40, True))
    cols = [
        ("MINIPROGRAM", "微信小程序", ["首页 · 预览 · 结果 · 我的", "上传 .pptx / 勾选规则", "展示 changePlan"]),
        ("API", "FastAPI 服务", ["POST /v1/jobs/preview", "POST /v1/jobs/{id}/apply", "GET download / zip"]),
        ("CORE", "ppt_tools", ["去动画 / 清备注", "删页 / 拆分文稿", "元数据与可选字体"]),
    ]
    x = 80
    for label, title, lines in cols:
        draw.rounded_rectangle((x, 230, x + 300, 550), radius=8, fill="#101c30", outline="#456a9a", width=2)
        draw.text((x + 30, 270), label, fill="#ff7a1a", font=font(16, True))
        draw.text((x + 30, 320), title, fill="#e8edf0", font=font(28, True))
        y = 380
        for line in lines:
            draw.text((x + 30, y), line, fill="#8da0b8", font=font(18))
            y += 40
        x += 370
    draw.line((380, 400, 450, 400), fill="#16d8ff", width=2)
    draw.line((750, 400, 820, 400), fill="#16d8ff", width=2)
    img.save(out / "architecture.png", optimize=True)


if __name__ == "__main__":
    out.mkdir(parents=True, exist_ok=True)
    make_flow()
    make_architecture()
    print("wrote", out / "flow.png", out / "architecture.png")
