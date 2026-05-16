import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-wide section-padding !py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-display">M</span>
              </div>
              <span className="font-display text-xl font-medium tracking-widest">マレーシア進学ラボ</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              マレーシア留学を、あなたの可能性を広げる最初の一歩に。
              実際の卒業生が、入学から現地生活まで完全サポートします。
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/malaysia_shingaku_lab?igsh=eXVudno0NW5sdXZi&utm_source=qr" target="_blank" rel="noopener noreferrer" className="label-tag text-white/40 hover:text-white transition-colors">Instagram</a>
              <span className="text-white/20">|</span>
              <a href="https://lin.ee/XeQNsYI" target="_blank" rel="noopener noreferrer" className="label-tag text-white/40 hover:text-white transition-colors">LINE</a>
              <span className="text-white/20">|</span>
              <a href="mailto:ancoraimparo60@gmail.com" className="label-tag text-white/40 hover:text-white transition-colors">メール</a>
            </div>
          </div>

          <div>
            <p className="label-tag text-white/30 mb-6">Pages</p>
            <ul className="space-y-3">
              {[
                { label: "留学について", href: "#about" },
                { label: "大学紹介", href: "#universities" },
                { label: "サポート内容", href: "#support" },
                { label: "代表プロフィール", href: "#profile" },
                { label: "留学体験談", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-tag text-white/30 mb-6">Contact</p>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-sm text-white/50 hover:text-white transition-colors">無料相談を申し込む</a></li>
              <li><a href="mailto:ancoraimparo60@gmail.com" className="text-sm text-white/50 hover:text-white transition-colors">ancoraimparo60@gmail.com</a></li>
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a href="https://lin.ee/XeQNsYI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-3 text-xs tracking-wider font-medium hover:bg-[#05b34e] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 3.5 2.13 6.55 5.29 8.28L6 22l3.09-1.63C9.96 20.77 10.97 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/></svg>
                LINEで友達追加
              </a>
              <a href="mailto:ancoraimparo60@gmail.com" className="inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-3 text-xs tracking-wider font-medium hover:bg-navy-700 transition-colors">
                メールで相談する
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs tracking-wider">© 2024 マレーシア進学ラボ. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-white/30 text-xs hover:text-white/60 transition-colors">プライバシーポリシー</a>
            <a href="/terms" className="text-white/30 text-xs hover:text-white/60 transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
