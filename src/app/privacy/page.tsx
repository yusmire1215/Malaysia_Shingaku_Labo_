"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white pt-32">
      <div className="container-narrow">
        <AnimatedSection className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-950 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            トップに戻る
          </Link>
          <h1 className="heading-section text-navy-950 mb-8">プライバシーポリシー</h1>
        </AnimatedSection>

        <AnimatedSection className="prose prose-sm max-w-none text-navy-600 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">1. 個人情報の取得</h2>
            <p>マレーシア進学ラボ（以下「当社」）は、お問い合わせフォームを通じて、お名前、メールアドレス、その他のご質問内容などの個人情報をご提供いただく場合があります。</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">2. 個人情報の利用目的</h2>
            <p>ご提供いただいた個人情報は、以下の目的に限定して利用させていただきます。</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>お問い合わせへのご回答・相談対応</li>
              <li>留学支援サービスの提供</li>
              <li>サービス向上のための分析</li>
              <li>当社からのご連絡（メール、LINE等）</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">3. 個人情報の管理</h2>
            <p>当社は、ご提供いただいた個人情報を安全に管理し、本人の同意なく第三者に提供することはありません。ただし、法令に基づく開示請求には応じる場合があります。</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">4. 情報セキュリティ</h2>
            <p>当社では、個人情報の保護のため、適切なセキュリティ対策を実施しています。</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-950 mb-4">5. お問い合わせ</h2>
            <p>個人情報に関するご質問やご懸念がある場合は、以下のメールアドレスまでご連絡ください。</p>
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
