"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    id: 1,
    age: "22歳",
    uni: "Taylor's University",
    program: "Business Administration",
    year: "2023年入学",
    quote: "英語が全く話せない状態から挑戦しましたが、出願書類から面接対策まで全部サポートしてもらいました。今では英語でプレゼンもできるようになり、マレーシアへの留学は人生最高の選択でした。",
    highlight: "英語ゼロから留学を実現",
  },
  {
    id: 2,
    age: "20歳",
    uni: "Monash University",
    program: "Engineering",
    year: "2022年入学",
    quote: "欧米留学を考えていたけど費用面で諦めていました。相談したらMonashのマレーシア校なら学費が3分の1以下でオーストラリアと同じ学位が取れると知り、即決。今は工学部で充実した毎日を送っています。",
    highlight: "費用1/3でオーストラリアと同じ学位",
  },
  {
    id: 3,
    age: "19歳",
    uni: "Sunway University",
    program: "Psychology",
    year: "2023年入学",
    quote: "高校卒業後すぐの留学で不安だらけでしたが、渡航前から現地のコミュニティに繋げてもらえて、到着した日からすでに友達がいました。勉強のことも生活のことも、本当に細かく相談に乗ってもらえます。",
    highlight: "到着初日から友達がいた",
  },
  {
    id: 4,
    age: "24歳",
    uni: "INTI University",
    program: "American Degree Transfer Program",
    year: "2022年入学",
    quote: "INTI経由でアメリカの大学への編入を計画中です。マレーシアで2年過ごすだけで英語力がネイティブレベルに近づきました。学費も安くて本当に賢い選択だったと思います。",
    highlight: "マレーシア→アメリカ 夢の編入ルート",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="section-padding bg-navy-950 overflow-hidden">
      <div className="container-wide">
        <AnimatedSection className="mb-16">
          <p className="label-tag text-gold-400 mb-4">Testimonials</p>
          <h2 className="heading-section text-white">
            留学した
            <br />
            <em className="italic">先輩の声</em>。
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {testimonials.map((t, i) => (
              <button key={t.id} onClick={() => setActive(i)} className={`flex-shrink-0 text-left p-4 border transition-all duration-300 ${active === i ? "border-white bg-white/5" : "border-white/10 hover:border-white/30"}`}>
                <p className="label-tag text-white/30 mb-1">{t.uni}</p>
                <p className="text-white font-medium text-sm">{t.age} · {t.year}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="relative">
                  <span className="font-display text-9xl text-white/5 absolute -top-8 -left-4 leading-none select-none">"</span>
                  <div className="relative z-10">
                    <p className="label-tag text-gold-400 mb-4">✦ {testimonials[active].highlight}</p>
                    <p className="font-display text-2xl md:text-3xl font-light text-white leading-relaxed mb-10 italic">
                      "{testimonials[active].quote}"
                    </p>
                    <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-6">
                      <div>
                        <p className="label-tag text-white/30 mb-1">University</p>
                        <p className="text-white">{testimonials[active].uni}</p>
                      </div>
                      <div>
                        <p className="label-tag text-white/30 mb-1">Program</p>
                        <p className="text-white">{testimonials[active].program}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AnimatedSection delay={0.3} className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/50 text-sm mb-2">もっとリアルな留学生活を見たいなら</p>
              <p className="font-display text-2xl font-light text-white">Instagramをフォロー →</p>
            </div>
            <a href="https://www.instagram.com/malaysia_shingaku_lab?igsh=eXVudno0NW5sdXZi&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-navy-950 transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @malaysia_shingaku_lab
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
