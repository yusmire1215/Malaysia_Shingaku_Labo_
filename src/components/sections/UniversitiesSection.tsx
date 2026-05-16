"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const universities = [
  {
    id: "monash",
    name: "Monash University",
    nameJp: "モナッシュ大学",
    rank: "QS #36",
    location: "Sunway City, Selangor",
    fee: "RM 42,000〜69,000 / 年",
    color: "bg-navy-950",
    tags: ["薬学 世界4位", "医学", "工学", "ビジネス"],
    desc: "オーストラリア屈指の名門大学のマレーシア校。取得する学位は本校と完全に同等で、世界中で高く評価されます。医学・薬学分野では世界トップクラスの評価を誇ります。",
    highlight: "オーストラリア名門の学位をマレーシアで",
  },
  {
    id: "taylors",
    name: "Taylor's University",
    nameJp: "テイラーズ大学",
    rank: "QS #253",
    location: "Subang Jaya, Selangor",
    fee: "RM 34,000〜50,000 / 年",
    color: "bg-white",
    tags: ["ホスピタリティ 世界19位", "建築", "デザイン", "法律"],
    desc: "東南アジアNo.1プライベート大学。ホスピタリティ分野は世界19位と突出しており、建築・デザイン・ビジネス系でも高い就職率を誇ります。",
    highlight: "東南アジアNo.1 プライベート大学",
  },
  {
    id: "sunway",
    name: "Sunway University",
    nameJp: "サンウェイ大学",
    rank: "QS #410",
    location: "Bandar Sunway, Selangor",
    fee: "RM 30,000〜55,000 / 年",
    color: "bg-navy-900",
    tags: ["就職率マレーシアNo.1", "IT・コンピュータ", "心理学", "会計"],
    desc: "ハーバード・ケンブリッジ・オックスフォードと提携。マレーシアで最も高い就職率を誇り、グローバル企業への就職実績も豊富。",
    highlight: "就職率マレーシア1位 4年連続",
  },
  {
    id: "inti",
    name: "INTI International University",
    nameJp: "インティ大学",
    rank: "QS #516",
    location: "Nilai / Subang Jaya",
    fee: "RM 21,000〜35,000 / 年",
    color: "bg-white",
    tags: ["アメリカ編入プログラム", "UK大学提携", "工学", "ビジネス"],
    desc: "4大学の中で最もリーズナブルな学費が魅力。米国・英国300以上の大学への編入プログラムが充実しており、「2年マレーシア＋2年欧米」というコスパ最高ルートが人気。",
    highlight: "最安コースで欧米大学への道",
  },
];

export default function UniversitiesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="universities" className="section-padding bg-gray-50">
      <div className="container-wide">
        <AnimatedSection className="mb-16">
          <p className="label-tag text-navy-400 mb-4">Universities</p>
          <h2 className="heading-section text-navy-950">
            主要大学
            <br />
            <em className="italic">4校</em>を徹底解説。
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {universities.map((uni, i) => (
            <AnimatedSection key={uni.id} delay={i * 0.1}>
              <div
                className={`relative p-8 cursor-pointer transition-all duration-500 card-hover border ${
                  uni.color === "bg-white" ? "bg-white border-gray-200" : `${uni.color} border-transparent`
                }`}
                onClick={() => setActiveId(activeId === uni.id ? null : uni.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block label-tag px-2 py-1 mb-3 ${uni.color === "bg-white" ? "bg-navy-950 text-white" : "bg-white/10 text-white/70"}`}>
                      {uni.rank}
                    </span>
                    <h3 className={`font-display text-2xl md:text-3xl font-light mb-1 ${uni.color === "bg-white" ? "text-navy-950" : "text-white"}`}>
                      {uni.name}
                    </h3>
                    <p className={`text-sm ${uni.color === "bg-white" ? "text-navy-400" : "text-white/50"}`}>{uni.nameJp}</p>
                  </div>
                  <motion.div animate={{ rotate: activeId === uni.id ? 45 : 0 }} className={`text-xl ${uni.color === "bg-white" ? "text-navy-950" : "text-white"}`}>+</motion.div>
                </div>

                <div className={`text-sm font-medium mb-6 pb-6 border-b ${uni.color === "bg-white" ? "text-navy-950 border-gray-100" : "text-white border-white/10"}`}>
                  ✦ {uni.highlight}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {uni.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-3 py-1 ${uni.color === "bg-white" ? "bg-gray-100 text-navy-600" : "bg-white/10 text-white/70"}`}>{tag}</span>
                  ))}
                </div>

                <AnimatePresence>
                  {activeId === uni.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className={`pt-4 mt-4 border-t space-y-3 ${uni.color === "bg-white" ? "border-gray-100" : "border-white/10"}`}>
                        <p className={`text-sm leading-relaxed ${uni.color === "bg-white" ? "text-navy-500" : "text-white/70"}`}>{uni.desc}</p>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <span className={`label-tag ${uni.color === "bg-white" ? "text-navy-300" : "text-white/30"}`}>Location</span>
                            <span className={`text-sm ${uni.color === "bg-white" ? "text-navy-700" : "text-white/80"}`}>{uni.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`label-tag ${uni.color === "bg-white" ? "text-navy-300" : "text-white/30"}`}>Fee</span>
                            <span className={`text-sm ${uni.color === "bg-white" ? "text-navy-700" : "text-white/80"}`}>{uni.fee}</span>
                          </div>
                        </div>
                        <a href="#contact" className={`inline-flex items-center gap-2 text-xs tracking-wider uppercase mt-2 hover:gap-4 transition-all duration-300 ${uni.color === "bg-white" ? "text-navy-950 border-b border-navy-950" : "text-white border-b border-white/50"}`}>
                          この大学について相談する →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <p className="text-navy-400 text-sm mb-6">どの大学が自分に合うか迷っている方へ</p>
          <a href="#contact" className="btn-primary">無料で大学選びを相談する →</a>
        </AnimatedSection>
      </div>
    </section>
  );
}
