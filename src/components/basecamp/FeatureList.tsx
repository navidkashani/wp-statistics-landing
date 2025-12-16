"use client";

import { motion } from "framer-motion";

const features = [
  { q: "Can I see real-time visitors?", a: "Yes! Watch visitors browse your site live." },
  { q: "Does it work with caching?", a: "Yes! Works with all major caching plugins." },
  { q: "Can I track specific pages?", a: "Yes! See stats for every piece of content." },
  { q: "Will it slow my site?", a: "No! Lightweight with minimal impact." },
  { q: "Can I see visitor locations?", a: "Yes! Country, city, browser, device." },
  { q: "Does it track search keywords?", a: "Yes! See how people find you." },
  { q: "Can I exclude my own visits?", a: "Yes! Filter by role, IP, or user." },
  { q: "Is it GDPR compliant?", a: "Yes! No cookies, privacy-first." },
  { q: "Can I export data?", a: "Yes! Export to CSV anytime." },
  { q: "Does it support WooCommerce?", a: "Yes! Track products and sales." },
  { q: "Can I see stats in admin bar?", a: "Yes! Quick stats always visible." },
  { q: "Is there an API?", a: "Yes! Full REST API for developers." },
];

export default function FeatureList() {
  return (
    <section className="py-20 bg-white border-b border-gray-200" id="features">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2d35] mb-4">
            Got questions? <span className="bg-[#ffc800] px-2">We&apos;ve got answers.</span>
          </h2>
        </motion.div>

        {/* Feature Questions - Basecamp FAQ Style */}
        <div className="space-y-4">
          {features.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-gray-100 last:border-0"
            >
              <span className="text-[#1d2d35] font-medium flex-1">
                {item.q}
              </span>
              <span className="bg-[#ffc800] px-3 py-1 text-[#1d2d35] font-bold text-sm rounded inline-block w-fit">
                {item.a}
              </span>
            </motion.div>
          ))}
        </div>

        {/* More Questions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-10"
        >
          Still have questions?{" "}
          <a
            href="https://wp-statistics.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1d2d35] font-semibold underline decoration-[#ffc800] decoration-2 underline-offset-2"
          >
            Just ask us
          </a>
          . We&apos;re real humans.
        </motion.p>
      </div>
    </section>
  );
}
