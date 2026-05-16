"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    step: "Step 01",
    title: "無料相談",
    body: "LINEまたはお問い合わせフォームからご連絡ください。現状のご状況（学年・希望・予算・英語力）をヒアリングし、最適なプランをご提案します。",
    icon: "💬",
  },
  {
    step: "Step 02",
    title: "大学選び・出願準備",
    body: "志望大学の選定から出願書類の作成まで徹底サポート。語学学校の紹介も行っています。",
    icon: "📄",
  },
  {
    step: "Step 03",
    title: "ビザ・渡航準備",
    body: "学生ビザの申請手続き、航空券・住居探しのサポート。現地での銀行口座開設、SIMカード取得まで細かくサポート。",
    icon: "✈️",
  },
  {
    step: "Step 04",
    title: "現地生活サポート",
    body: "渡航後も安心。大学の授業についての相談、コミュニティへの参加紹介、帰国・就職活動のサポートまで一貫してサポートします。",
    icon: "🏠",
  },
];

const features = [
  { title: "入学保証", body: "合格まで何度でも出願をサポート" },
  { title: "24h対応", body: "LINEでいつでも質問OK" },
  { title: "現地コミュニティ", body: "先輩留学生とのつながり紹介" },
  { title: "就活サポート", body: "帰国後の就職活動もアドバイス" },
  { title: "奨学金情報", body: "利用可能な奨学金を徹底調査" },
  { title: "完全日本語対応", body: "全て日本語でサポート可能" },
];

export default function SupportSection() {
  return (
    <section id="support" className="section-padding bg-white">
      <div className="container-wide">
        <AnimatedSection className="mb-12">
          <p className="label-tag text-navy-400 mb-4">Support</p>
          <h2 className="heading-section text-navy-950">
            入学前から
            <br />
            <em className="italic">卒業後まで</em>、<br />
            全て一緒に。
          </h2>
          <p className="text-navy-400 mt-6 text-sm max-w-lg leading-relaxed">
            サポートに関わるスタッフは全員、マレーシアの大学を卒業した、または現在在学中の学生です。
            リアルな経験をもとに、あなたの留学を全力でサポートします。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-24">
          {steps.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.1}>
              <div className="relative p-8 border-l border-gray-100 first:border-l-0 md:first:border-l group hover:bg-gray-50 transition-all duration-300">
                <div className="text-3xl mb-6">{step.icon}</div>
                <p className="label-tag text-navy-300 mb-3">{step.step}</p>
                <h3 className="font-sans font-medium text-navy-950 text-lg mb-4">{step.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{step.body}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-px h-4 bg-gray-200 translate-x-px" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mb-8">
          <p className="label-tag text-navy-400 mb-6">サポートの特徴</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={i * 0.07}>
              <div className="border border-gray-100 p-6 hover:border-navy-950 transition-colors duration-300 group">
                <div className="w-1 h-6 bg-navy-950 mb-4 group-hover:h-8 transition-all duration-300" />
                <h4 className="font-medium text-navy-950 mb-2">{feat.title}</h4>
                <p className="text-navy-400 text-sm">{feat.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-navy-950 p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="label-tag text-gold-400 mb-3">Limited</p>
                <h3 className="font-display text-3xl md:text-4xl font-light text-white mb-3">まずは無料相談から。</h3>
                <p className="text-white/50 text-sm max-w-md">相談は完全無料。あなたの状況を聞かせてください。オーダーメイドのプランをご提案します。</p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a href="#contact" className="inline-flex items-center gap-2 bg-white text-navy-950 px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white/90 transition-all duration-300">
                  無料相談を申し込む →
                </a>
                <a href="https://lin.ee/XeQNsYI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-8 py-4 text-sm tracking-wider font-medium hover:bg-[#05b34e] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 3.5 2.13 6.55 5.29 8.28L6 22l3.09-1.63C9.96 20.77 10.97 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/></svg>
                  LINEで気軽に相談
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
