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
  title: "袁锦江 · AI 产品作品集",
  description: "袁锦江的 AI 产品个人作品集：技术理解、产品判断与真实落地。",
  openGraph: {
    title: "袁锦江 · AI 产品作品集",
    description: "技术理解 × 产品判断 × 真实落地",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "袁锦江 · AI 产品作品集",
    description: "技术理解 × 产品判断 × 真实落地",
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
