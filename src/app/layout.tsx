import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond, DM_Mono } from "next/font/google";
import Script from "next/script"; // next/script をインポート
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    // 変更: 「マレーシア進学」をタイトルの先頭に配置
    default: "マレーシア進学・大学留学を完全サポート | マレーシア進学ラボ",
    template: "%s | マレーシア進学・大学留学を完全サポート",
  },
  description:
    // 変更: ディスクリプションの先頭にも「マレーシア進学」を配置
    "マレーシア進学・大学留学を完全サポート。Monash・Taylor's・Sunwayなど主要大学4校への進学ルートを紹介。英語ゼロからの留学実現まで、マレーシア進学ラボが完全無料相談で伴走します。",
  keywords: [
    // 変更: 「マレーシア進学」を追加し、上部に配置
    "マレーシア進学",
    "マレーシア大学",
    "マレーシア留学",
    "留学支援",
    "Monash University",
    "Taylor's University",
    "Sunway University",
    "INTI International",
    "海外留学",
    "海外進学", // 追加
  ],
  authors: [{ name: "マレーシア進学ラボ" }],
  creator: "マレーシア進学ラボ",
  metadataBase: new URL("https://malaysia-shingaku-lab.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://malaysia-shingaku-lab.jp",
    siteName: "マレーシア進学ラボ",
    // 変更: OGタグも統一
    title: "マレーシア進学・大学留学を完全サポート | マレーシア進学ラボ",
    description:
      "マレーシア進学・大学留学を完全サポート。英語ゼロからの留学実現。完全無料相談受付中。",
    images: [
      {
        url: "https://malaysia-shingaku-lab.jp/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "マレーシア進学ラボ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マレーシア進学・大学留学を完全サポート | マレーシア進学ラボ",
    description: "マレーシア進学・大学留学を完全サポート。完全無料相談受付中。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://malaysia-shingaku-lab.jp",
  },
};

// 変更: Next.jsの仕様に合わせて viewport を metadata の外に分離
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${cormorant.variable} ${dmMono.variable} font-sans antialiased grain`}
      >
        {children}

        {/* 変更: Next.js推奨の next/script コンポーネントを使用 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GSNYVDQZ9L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GSNYVDQZ9L');
          `}
        </Script>
      </body>
    </html>
  );
}
