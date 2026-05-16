"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormData = {
  name: string;
  email: string;
  grade: string;
  goal: string;
  budget: string;
  message: string;
};

const grades = ["中学生","高校1年生","高校2年生","高校3年生","大学1年生","大学2年生","大学3年生","大学4年生","既卒・社会人","保護者"];
const goals = ["学士号を取得したい","英語力を伸ばしたい","欧米大学への編入を考えている","コスパの良い留学をしたい","海外就職を目指している","まだ迷っている"];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <AnimatedSection className="mb-16">
          <p className="label-tag text-navy-400 mb-4">Contact</p>
          <h2 className="heading-section text-navy-950">
            まずは、
            <br />
            <em className="italic">話してみよう</em>。
          </h2>
          <p className="text-navy-400 mt-6 text-lg max-w-md leading-relaxed">
            相談は完全無料。あなたの状況を聞かせてください。24時間以内にご返信します。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://lin.ee/XeQNsYI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-[#06C755] text-white hover:bg-[#05b34e] transition-colors group">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 3.5 2.13 6.55 5.29 8.28L6 22l3.09-1.63C9.96 20.77 10.97 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/></svg>
              </div>
              <div>
                <p className="font-medium">LINEで友達追加</p>
                <p className="text-white/70 text-sm">一番手軽&レスが早い</p>
              </div>
              <svg className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>
            <a href="https://www.instagram.com/malaysia_shingaku_lab?igsh=eXVudno0NW5sdXZi&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 border border-gray-200 bg-white hover:border-navy-950 transition-colors group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div>
                <p className="font-medium text-navy-950">Instagramで見る</p>
                <p className="text-navy-400 text-sm">リアルな留学生活を発信中</p>
              </div>
              <svg className="w-4 h-4 ml-auto text-navy-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-navy-950 text-white p-16 text-center">
              <div className="text-5xl mb-6">✦</div>
              <h3 className="font-display text-3xl font-light mb-4">お問い合わせありがとうございます</h3>
              <p className="text-white/60 mb-8">24時間以内にご連絡いたします。<br />お急ぎの場合はLINEをご利用ください。</p>
              <button onClick={() => setSubmitted(false)} className="btn-outline border-white/30 text-white hover:bg-white/10">もう一件送る</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-tag text-navy-400 block mb-2">お名前 <span className="text-red-400">*</span></label>
                  <input {...register("name", { required: "お名前を入力してください" })} className={`w-full border ${errors.name ? "border-red-400" : "border-gray-200"} bg-white px-4 py-3 text-sm text-navy-950 placeholder-navy-300 focus:border-navy-950 transition-colors`} placeholder="山田 太郎" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="label-tag text-navy-400 block mb-2">メールアドレス <span className="text-red-400">*</span></label>
                  <input {...register("email", { required: "メールアドレスを入力してください", pattern: { value: /\S+@\S+\.\S+/, message: "正しいメールアドレスを入力してください" } })} type="email" className={`w-full border ${errors.email ? "border-red-400" : "border-gray-200"} bg-white px-4 py-3 text-sm text-navy-950 placeholder-navy-300 focus:border-navy-950 transition-colors`} placeholder="yamada@example.com" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-tag text-navy-400 block mb-2">現在の学年・状況</label>
                  <select {...register("grade")} className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 focus:border-navy-950 transition-colors appearance-none">
                    <option value="">選択してください</option>
                    {grades.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-tag text-navy-400 block mb-2">留学の目的</label>
                  <select {...register("goal")} className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 focus:border-navy-950 transition-colors appearance-none">
                    <option value="">選択してください</option>
                    {goals.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="label-tag text-navy-400 block mb-2">おおよその予算（年間）</label>
                <select {...register("budget")} className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 focus:border-navy-950 transition-colors appearance-none">
                  <option value="">選択してください</option>
                  <option value="100万円以下">100万円以下</option>
                  <option value="100〜150万円">100〜150万円</option>
                  <option value="150〜200万円">150〜200万円</option>
                  <option value="200万円以上">200万円以上</option>
                  <option value="未定">未定・要相談</option>
                </select>
              </div>
              <div>
                <label className="label-tag text-navy-400 block mb-2">ご質問・ご相談内容 <span className="text-red-400">*</span></label>
                <textarea {...register("message", { required: "メッセージを入力してください" })} rows={5} className={`w-full border ${errors.message ? "border-red-400" : "border-gray-200"} bg-white px-4 py-3 text-sm text-navy-950 placeholder-navy-300 focus:border-navy-950 transition-colors resize-none`} placeholder="気になっていること、不安なこと、なんでもお気軽にどうぞ。" />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <p className="text-navy-300 text-xs">送信いただいた情報はサービス向上のためにのみ使用し、第三者に提供することはありません。</p>
              <button type="submit" disabled={isLoading} className="btn-primary w-full justify-center relative overflow-hidden">
                {isLoading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                ) : (
                  <>無料相談を送信する <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></>
                )}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
