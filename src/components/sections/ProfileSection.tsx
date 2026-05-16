"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProfileSection() {
  return (
    <section id="profile" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[3/4] max-w-sm bg-navy-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-8xl font-light text-white/10">代表</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-950">
                  <p className="label-tag text-gold-400 mb-1">Representative</p>
                  <p className="font-display text-2xl font-light text-white">代表</p>
                  <p className="text-white/40 text-sm">Monash University Malaysia 卒業</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl p-6 w-48">
                <p className="font-display text-4xl font-light text-navy-950">MONASH</p>
                <p className="label-tag text-navy-400 mt-1">Business卒業</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p className="label-tag text-navy-400 mb-6">Profile</p>
            <h2 className="heading-section text-navy-950 mb-6">
              同じ道を歩んだ
              <br />
              <em className="italic">先輩</em>として。
            </h2>
            <div className="divider" />

            <div className="space-y-6 text-navy-500 leading-relaxed">
              <p>
                高校2年生の時、英語が話せないまま「海外に出たい」という思いだけを胸にマレーシアへ。
                自身もエージェントを介し留学したものの、24時間対応や進学という大きな選択肢において、
                経験者だからこそわかるサービスを提供したいという思いが生まれました。
              </p>
              <p>
                「同じ夢を持つ後輩を全力でサポートしたい」という思いから、
                Monash Universityでビジネスを学びながら、マレーシア進学ラボを設立。
              </p>
              <p>
                相談者の状況・目的・予算に合わせて、自身の経験をフルに活かした
                リアルなアドバイスを提供しています。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { label: "出身大学", value: "Monash University Malaysia" },
                { label: "学部", value: "Business" },
              ].map((item) => (
                <div key={item.label} className="border-t border-gray-200 pt-4">
                  <p className="label-tag text-navy-300 mb-1">{item.label}</p>
                  <p className="text-sm text-navy-700 font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-navy-50 border border-navy-100">
              <p className="text-sm text-navy-600 leading-relaxed">
                ✦ サポートに関わるスタッフは全員、マレーシアの大学を卒業した、または現在在学中の学生です。
                リアルな経験をもとにしたサポートを提供しています。
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="https://www.instagram.com/malaysia_shingaku_lab?igsh=eXVudno0NW5sdXZi&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">Instagram →</a>
              <a href="#contact" className="btn-primary text-xs">相談する →</a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
