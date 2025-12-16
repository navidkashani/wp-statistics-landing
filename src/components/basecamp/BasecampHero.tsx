"use client";

import { motion } from "framer-motion";

export default function BasecampHero() {
  return (
    <section className="bg-[#fffef9] py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Decorative Elements - Basecamp style scattered icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative mb-8"
        >
          {/* Scattered decorative elements like Basecamp */}
          <div className="absolute -top-8 left-1/4 text-4xl rotate-12">📊</div>
          <div className="absolute -top-4 right-1/4 text-3xl -rotate-12">🔒</div>
          <div className="absolute top-0 left-10 text-2xl rotate-6">📈</div>
          <div className="absolute -top-6 right-10 text-2xl -rotate-6">🌍</div>
          <div className="hidden md:block absolute top-4 -left-4 text-3xl">✨</div>
          <div className="hidden md:block absolute top-2 -right-4 text-3xl">🎯</div>
        </motion.div>

        {/* Problem Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-gray-600 mb-4 mt-12"
        >
          Frustrated with analytics?
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d2d35] leading-tight mb-6"
        >
          Understanding your visitors<br />
          <span className="relative inline-block">
            shouldn&apos;t be this hard.
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
              <path d="M1 5.5C47 2 153 2 199 5.5" stroke="#ffc800" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
        >
          WP Statistics is refreshingly simple,{" "}
          <span className="bg-[#ffc800] px-1">privacy-first</span> analytics
          for WordPress — with a 14-year track record to back it up.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc800] text-[#1d2d35] rounded-full font-bold text-lg hover:bg-[#e6b400] transition-colors shadow-sm"
          >
            Try WP Statistics for free →
          </a>
          <p className="text-gray-500 text-sm">
            Free forever · No credit card · 600,000+ active sites
          </p>
        </motion.div>
      </div>
    </section>
  );
}
