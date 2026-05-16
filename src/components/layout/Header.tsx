"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "留学について", href: "#about" },
  { label: "大学紹介", href: "#universities" },
  { label: "サポート", href: "#support" },
  { label: "体験談", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-wide section-padding py-0 !py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-navy-950 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-display font-light tracking-wider">M</span>
            </div>
            <span className={`font-display text-lg font-medium tracking-wider transition-colors ${scrolled ? "text-navy-950" : "text-white"}`}>
              マレーシア進学ラボ
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`label-tag hover:text-navy-950 transition-colors cursor-pointer ${scrolled ? "text-navy-400" : "text-white/70"}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://lin.ee/XeQNsYI" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 bg-[#06C755] text-white px-4 py-2.5 text-xs tracking-wider font-medium hover:bg-[#05b34e] transition-all duration-300">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 3.5 2.13 6.55 5.29 8.28L6 22l3.09-1.63C9.96 20.77 10.97 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/></svg>
              LINE相談
            </a>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-navy-950 text-white px-4 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-navy-800 transition-all duration-300">
              無料相談
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative" aria-label="メニュー">
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className={`block w-6 h-0.5 transition-colors ${menuOpen || scrolled ? "bg-navy-950" : "bg-white"}`} />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className={`block w-6 h-0.5 transition-colors ${menuOpen || scrolled ? "bg-navy-950" : "bg-white"}`} />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className={`block w-6 h-0.5 transition-colors ${menuOpen || scrolled ? "bg-navy-950" : "bg-white"}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-white flex flex-col">
            <div className="flex-1 flex flex-col justify-center px-8">
              <p className="label-tag text-navy-400 mb-10">Navigation</p>
              {navItems.map((item, i) => (
                <motion.a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07, duration: 0.4 }} className="font-display text-4xl font-light text-navy-950 py-3 border-b border-gray-100 hover:pl-4 transition-all duration-300">
                  {item.label}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 flex flex-col gap-4">
                <a href="https://lin.ee/XeQNsYI" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-8 py-4 text-sm tracking-wider font-medium">
                  LINEで友達追加 →
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary justify-center">
                  無料相談を始める →
                </a>
                <a href="https://www.instagram.com/malaysia_shingaku_lab?igsh=eXVudno0NW5sdXZi&utm_source=qr" target="_blank" rel="noopener noreferrer" className="label-tag text-navy-400 hover:text-navy-950 transition-colors text-center">Instagram</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
