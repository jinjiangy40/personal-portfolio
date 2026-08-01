import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "袁锦江 · AI 产品作品集",
  description: "袁锦江的 AI 产品个人作品集：技术理解、产品判断与真实落地。",
  openGraph: { title: "袁锦江 · AI 产品作品集", description: "技术理解 × 产品判断 × 真实落地", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "袁锦江 · AI 产品作品集", description: "技术理解 × 产品判断 × 真实落地", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
