import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, DM_Mono } from "next/font/google";
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
    default: "マレーシア進学ラボ | マレーシア留学サポート・完全無料相談",
    template: "%s | マレーシア進学ラボ",
  },
  description:
    "マレーシアへの留学を完全サポート。Monash・Taylor's・Sunwayなど主要大学4校を紹介。英語ゼロからの留学実現。完全無料相談受付中。",
  keywords: [
    "マレーシア留学",
    "マレーシア大学",
    "留学支援",
    "Monash University",
    "Taylor's University",
    "Sunway University",
    "INTI International",
    "海外留学",
    "英語研修",
    "アジア留学",
  ],
  authors: [{ name: "マレーシア進学ラボ" }],
  creator: "マレーシア進学ラボ",
  metadataBase: new URL("https://malaysia-shingaku-lab.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://malaysia-shingaku-lab.jp",
    siteName: "マレーシア進学ラボ",
    title: "マレーシア進学ラボ | マレーシア留学サポート",
    description:
      "マレーシアへの留学を完全サポート。英語ゼロからの留学実現。完全無料相談受付中。",
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
    title: "マレーシア進学ラボ | マレーシア留学サポート",
    description: "マレーシアへの留学を完全サポート。完全無料相談受付中。",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://malaysia-shingaku-lab.jp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GSNYVDQZ9L"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GSNYVDQZ9L');
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${cormorant.variable} ${dmMono.variable} font-sans antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
