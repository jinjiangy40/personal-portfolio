import type { Metadata } from "next";
import { Noto_Serif_SC, Outfit, ZCOOL_XiaoWei } from "next/font/google";
import "./globals.css";

const display = ZCOOL_XiaoWei({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Noto_Serif_SC({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "袁锦江 · AI 产品运营 / 市场增长作品集",
  description:
    "澳门科技大学人工智能本科生。求职方向：AI 产品运营 / 市场增长 / 商务拓展（BD）。累计签约 10 万元+，多个 200+ 人社群运营。",
  openGraph: {
    title: "袁锦江 · AI · PRODUCT · GROWTH",
    description: "把 AI 想法做成产品，把产品推向真实市场。",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "袁锦江 · AI · PRODUCT · GROWTH",
    description: "把 AI 想法做成产品，把产品推向真实市场。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
