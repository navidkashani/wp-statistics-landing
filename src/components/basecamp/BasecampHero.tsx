"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BasecampHero() {
  return (
    <section className="bg-[#1d2d35] text-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Problem Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#f4bd4f] text-lg md:text-xl font-medium mb-6"
        >
          Frustrated with analytics tools?
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          Understanding your visitors{" "}
          <span className="text-[#f4bd4f]">shouldn&apos;t require a PhD.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          WP Statistics is refreshingly simple analytics for WordPress.
          No external accounts. No complicated setup. No privacy headaches.
          Just clear insights about your website, right in your dashboard.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-[#f4bd4f] text-[#1d2d35] rounded-full font-bold text-lg hover:bg-[#e5ad40] transition-all"
          >
            Try WP Statistics free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-gray-400 text-sm">
            Free forever. No credit card required.
          </span>
        </motion.div>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300"
        >
          {[
            "600,000+ active sites",
            "14 years of development",
            "100% privacy-focused",
          ].map((point) => (
            <div key={point} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
              <span>{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
