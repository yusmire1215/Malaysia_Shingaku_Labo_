"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-32 overflow-hidden bg-navy-950"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        {/* Subtle geometric accent */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] border border-white/5 rounded-full translate-x-1/2 -translate-y-1/4" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] border border-white/5 rounded-full translate-x-1/3 -translate-y-1/4" />
        {/* Soft light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-navy-700/20 rounded-full blur-3xl" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="label-tag text-white/30 rotate-90 origin-center whitespace-nowrap">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 container-wide section-padding !py-0">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-px bg-gold-400" />
          <span className="label-tag text-gold-400">Malaysia Study Support</span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-display text-white"
          >
            あなたの未来を、
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-display text-white"
          >
            マレーシアから。
          </motion.h1>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed mb-12"
        >
          世界水準の教育を、アジアの中心で。
          <br />
          現地卒業生が、あなたの留学を完全サポートします。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <a href="#contact" className="btn-primary bg-white text-navy-950 hover:bg-white/90">
            無料相談を始める
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#about" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:text-white">
            留学について知る
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-white/10"
        >
          {[
            { num: "50+", label: "サポート実績" },
            { num: "4", label: "主要大学" },
            { num: "99%", label: "入学成功率" },
            { num: "24h", label: "サポート対応" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl md:text-4xl font-light text-white stat-number">
                {stat.num}
              </span>
              <span className="label-tag text-white/30">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
