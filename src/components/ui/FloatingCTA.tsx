"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <a
        href="https://lin.ee/XeQNsYI"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#06C755] text-white px-5 py-3 shadow-2xl hover:bg-[#05b34e] transition-all duration-300 hover:scale-105"
        aria-label="LINEで相談"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 3.5 2.13 6.55 5.29 8.28L6 22l3.09-1.63C9.96 20.77 10.97 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/></svg>
        <span className="text-sm font-medium">LINE相談</span>
      </a>
    </motion.div>
  );
}
