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
    default: "MalayStudy | マレーシア留学サポート",
    template: "%s | MalayStudy",
  },
  description:
    "マレーシアへの留学を、プロがトータルサポート。INTI・SUNWAY・MONASH・TAYLOR'Sなどの名門大学への進学を徹底サポート。無料相談受付中。",
  keywords: [
    "マレーシア留学",
    "マレーシア大学",
    "留学サポート",
    "INTI",
    "SUNWAY",
    "MONASH",
    "TAYLOR'S",
    "海外留学",
    "英語留学",
    "アジア留学",
  ],
  authors: [{ name: "MalayStudy" }],
  creator: "MalayStudy",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://malaysia-study.jp",
    siteName: "MalayStudy",
    title: "MalayStudy | マレーシア留学サポート",
    description:
      "マレーシアへの留学を、プロがトータルサポート。名門大学への進学を徹底サポート。無料相談受付中。",
  },
  twitter: {
    card: "summary_large_image",
    title: "MalayStudy | マレーシア留学サポート",
    description: "マレーシアへの留学を、プロがトータルサポート。無料相談受付中。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
      </body>
    </html>
  );
}
