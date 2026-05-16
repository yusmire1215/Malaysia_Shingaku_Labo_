"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

export default function TermsPage() {
  return (
    <section className="section-padding bg-white pt-32">
      <div className="container-narrow">
        <AnimatedSection className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-950 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            トップに戻る
          </Link>
          <h1 className="heading-section text-navy-950 mb-8">利用規約</h1>
        </AnimatedSection>

        <AnimatedSection className="prose prose-sm max-w-none text-navy-600 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">1. 本規約について</h2>
            <p>本規約は、マレーシア進学ラボ（以下「当社」）が提供する留学支援サービス（以下「サービス」）の利用に関する条件を規定するものです。</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">2. サービスの利用資格</h2>
            <p>当サービスは、18歳以上の者、または保護者の同意を得た未成年者が利用可能です。</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">3. 禁止事項</h2>
            <p>ご利用の際、以下の行為は禁止されています。</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>虚偽の情報の入力</li>
              <li>当社のサービスを不正な目的で利用すること</li>
              <li>他者の権利を侵害する行為</li>
              <li>法令に違反する行為</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">4. 免責事項</h2>
            <p>当社は、サービスの利用により生じた直接的・間接的な損害について、一切の責任を負いません。</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">5. 本規約の変更</h2>
            <p>当社は、事前通告なしに本規約を変更する権利を有します。変更後のご利用をもって、規約に同意したものとみなします。</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">6. お問い合わせ</h2>
            <p>本規約に関するご質問は、以下のメールアドレスまでご連絡ください。</p>
            <p className="mt-4"><strong>メール：ancoraimparo60@gmail.com</strong></p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-navy-400 text-sm">最終更新日：2024年5月17日</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
