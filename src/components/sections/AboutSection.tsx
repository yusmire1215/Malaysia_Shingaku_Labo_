"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";

const reasons = [
  {
    number: "01",
    title: "学費がリーズナブル",
    body: "欧米留学の1/3〜1/5の費用で、同レベルの英語教育を受けることができます。生活費も日本より低く、コスパは最高水準。",
  },
  {
    number: "02",
    title: "英語環境が整備済み",
    body: "授業は全て英語で行われ、マルチカルチャーな環境で実践的な英語力が身につきます。TOEICスコアが急成長する学生が続出。",
  },
  {
    number: "03",
    title: "世界認定の学位",
    body: "MONASH・TAYLOR'Sなどは世界ランクTOP300入り。取得した学位は日本や欧米でも高く評価されます。",
  },
  {
    number: "04",
    title: "治安・生活環境が良好",
    body: "日本食レストランやアジア料理が充実。食事の心配が少なく、初めての海外生活でも安心してスタートできます。",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div className="lg:sticky lg:top-32">
            <AnimatedSection>
              <p className="label-tag text-navy-400 mb-6">About Malaysia</p>
              <h2 className="heading-section text-navy-950 mb-8">
                なぜ今、
                <br />
                <em className="italic">マレーシア</em>なのか。
              </h2>
              <div className="divider" />
              <p className="text-navy-400 leading-relaxed text-lg mb-8">
                東南アジアの中心に位置するマレーシアは、今や世界中の学生が注目する
                教育ハブです。欧米・オーストラリアの名門大学が分校を構え、
                低コストで国際的な学位が取得できる唯一の国。
              </p>
              <p className="text-navy-400 leading-relaxed">
                多民族・多言語の環境で、英語はもちろん、グローバルなビジネス感覚や
                異文化適応力も自然と身につきます。就職市場でも高評価。
              </p>
            </AnimatedSection>

            {/* Visual element */}
            <AnimatedSection delay={0.2} className="mt-12">
              <div className="relative">
                <div className="bg-navy-950 text-white p-8 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold-400" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold-400" />
                  <p className="label-tag text-gold-400 mb-3">Key Facts</p>
                  <p className="font-display text-5xl font-light mb-2">KL</p>
                  <p className="text-white/50 text-sm">
                    クアラルンプールから30分圏内に主要大学が集中。
                    都市の利便性と充実したキャンパスライフを両立。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Reasons */}
          <div className="space-y-0">
            {reasons.map((reason, i) => (
              <AnimatedSection key={reason.number} delay={i * 0.1}>
                <div className="group py-8 border-b border-gray-100 cursor-default hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4">
                  <div className="flex gap-6 items-start">
                    <span className="font-mono text-xs text-navy-200 pt-1 flex-shrink-0 group-hover:text-gold-400 transition-colors">
                      {reason.number}
                    </span>
                    <div>
                      <h3 className="font-sans font-medium text-navy-950 text-lg mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-navy-400 text-sm leading-relaxed">{reason.body}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
