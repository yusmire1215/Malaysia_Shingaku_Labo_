"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "英語が全く話せないのですが、留学できますか？",
    a: "はい、可能です。多くの大学では入学前の語学コース（Foundation）が用意されており、英語ゼロからでも段階的に学べる環境が整っています。また、IELTSを取得するための語学学校や英語コーチングの紹介も行っていますので、英語力に自信がない方もご安心ください。実際、英語力ゼロから留学を実現した方も多くいます。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "大学・学部によって異なりますが、年間学費はRM 21,000〜69,000（約65万〜210万円）が目安です。生活費は月RM 2,000〜3,500（約6〜11万円）ほど。欧米留学の1/3以下のコストで同等の教育が受けられます。",
  },
  {
    q: "高校卒業後すぐに入学できますか？",
    a: "はい、可能です。高校卒業後のFoundation（準備コース）を経て、学士課程に進学するルートが一般的です。日本の大学を経由しなくても直接入学できるため、時間のロスなく世界水準の教育を受けられます。",
  },
  {
    q: "サポート費用はかかりますか？",
    a: "初回相談は完全無料です。その後のサポートプランについては、個別にご相談の上でお見積もりをご提示します。多くの方が想定より低い費用でスタートできています。",
  },
  {
    q: "治安は安全ですか？日本食はありますか？",
    a: "クアラルンプールは東南アジアの中でも治安が良い都市のひとつです。日本食レストランも多く、コンビニには日本のお菓子も並んでいます。現地のコミュニティも充実しており、初めての海外生活でも安心してスタートできます。",
  },
  {
    q: "卒業後の就職はどうなりますか？",
    a: "取得した学位は日本・欧米でも正式に認められています。外資系企業への就職実績も多く、MONASH・TAYLORSなどは日本の大手企業でも高く評価されています。帰国後の就職活動サポートも行っています。",
  },
  {
    q: "いつでも相談できますか？",
    a: "LINEで24時間受け付けています。返信は基本的に当日中を心がけています。お問い合わせフォームからも受け付けており、まずはお気軽にご連絡ください。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow">
        <AnimatedSection className="mb-16">
          <p className="label-tag text-navy-400 mb-4">FAQ</p>
          <h2 className="heading-section text-navy-950">
            よくある
            <br />
            <em className="italic">質問</em>。
          </h2>
        </AnimatedSection>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border-b border-gray-100">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-start justify-between gap-6 py-6 text-left group">
                  <div className="flex gap-4 items-start">
                    <span className="label-tag text-navy-300 pt-0.5 flex-shrink-0">0{i + 1}</span>
                    <span className="font-medium text-navy-950 group-hover:text-navy-700 transition-colors text-sm md:text-base">{faq.q}</span>
                  </div>
                  <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-navy-950 text-xl flex-shrink-0 mt-0.5">+</motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="pl-10 pb-6">
                        <p className="text-navy-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <p className="text-navy-400 text-sm mb-6">解決しない疑問は直接聞いてください</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://lin.ee/XeQNsYI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-8 py-4 text-sm tracking-wider font-medium hover:bg-[#05b34e] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 3.5 2.13 6.55 5.29 8.28L6 22l3.09-1.63C9.96 20.77 10.97 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/></svg>
              LINEで質問する
            </a>
            <a href="#contact" className="btn-primary">メールで質問する →</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
