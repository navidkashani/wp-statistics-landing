"use client";

import { motion } from "framer-motion";

export default function BasecampCTA() {
  return (
    <section className="py-20 bg-[#1d2d35]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            You wouldn&apos;t be here if the way<br className="hidden md:block" />
            you&apos;re doing analytics was working.
          </h2>

          <p className="text-xl text-white mb-2">
            It&apos;s time for{" "}
            <span className="bg-[#ffc800] text-[#1d2d35] px-2 font-bold">WP Statistics</span>.
          </p>

          <p className="text-gray-400 mb-10">
            Simple. Private. Built for WordPress.
          </p>

          {/* CTA Button */}
          <a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#ffc800] text-[#1d2d35] rounded-full font-bold text-lg hover:bg-[#e6b400] transition-colors"
          >
            Try WP Statistics for free →
          </a>

          <p className="text-gray-500 text-sm mt-4">
            Free forever · 5-minute setup · No credit card needed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
