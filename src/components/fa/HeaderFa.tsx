"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { BarChart3, Menu, X, Crown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "ویژگی‌ها", href: "#features" },
  { name: "دمو", href: "#dashboard-demo" },
  { name: "حریم خصوصی", href: "#privacy" },
  { name: "قیمت‌گذاری", href: "#pricing" },
  { name: "سوالات متداول", href: "#faq" },
];

export default function HeaderFa() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            whileHover={{ rotate: -5 }}
            className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25"
          >
            <BarChart3 className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-xl font-bold text-gray-900">
            WP <span className="text-purple-600">Statistics</span>
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium group"
              whileHover={{ y: -2 }}
            >
              {link.name}
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://github.com/wp-statistics/wp-statistics"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            گیت‌هاب
          </motion.a>
          <Link href="/premium">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 rounded-full font-semibold shadow-lg shadow-amber-500/25 transition-all"
            >
              <Crown className="w-4 h-4" />
              پرمیوم
            </motion.div>
          </Link>
          <motion.a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-purple-500/25 transition-all"
          >
            دانلود رایگان
          </motion.a>
        </div>

        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        dir="rtl"
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ x: -5 }}
            >
              {link.name}
            </motion.a>
          ))}
          <div className="pt-4 space-y-2">
            <Link
              href="/premium"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 rounded-xl font-semibold shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Crown className="w-4 h-4" />
              خرید پرمیوم
            </Link>
            <a
              href="https://wordpress.org/plugins/wp-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              دانلود رایگان
            </a>
            <a
              href="https://github.com/wp-statistics/wp-statistics"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              مشاهده در گیت‌هاب
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
