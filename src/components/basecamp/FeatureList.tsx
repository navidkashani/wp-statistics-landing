"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    question: "Can I see who's visiting my site right now?",
    answer: "Yes! See real-time visitors as they browse your site.",
  },
  {
    question: "Does it work with my caching plugin?",
    answer: "Yes! Compatible with all major caching plugins.",
  },
  {
    question: "Can I track specific posts and pages?",
    answer: "Yes! See stats for every piece of content.",
  },
  {
    question: "Will it slow down my site?",
    answer: "No! Lightweight tracking with minimal impact.",
  },
  {
    question: "Can I see where visitors come from?",
    answer: "Yes! Country, city, browser, device - all there.",
  },
  {
    question: "Does it track search keywords?",
    answer: "Yes! See what people searched to find you.",
  },
  {
    question: "Can I exclude my own visits?",
    answer: "Yes! Filter out admins, editors, or any role.",
  },
  {
    question: "Is it GDPR compliant?",
    answer: "Yes! No cookies required. Privacy-first design.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes! Export to CSV anytime you want.",
  },
  {
    question: "Does it integrate with other plugins?",
    answer: "Yes! Works with popular page builders and themes.",
  },
  {
    question: "Can I see stats in the admin bar?",
    answer: "Yes! Quick stats always visible while you work.",
  },
  {
    question: "Is there an API?",
    answer: "Yes! REST API available for developers.",
  },
];

export default function FeatureList() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2d35] mb-4">
            The answer is <span className="text-[#4ade80]">YES!</span>
          </h2>
          <p className="text-xl text-gray-600">
            Whatever you&apos;re wondering, we probably already thought of it.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group p-6 bg-[#f7f5f2] rounded-2xl hover:bg-[#1d2d35] transition-colors duration-300"
            >
              <p className="font-semibold text-[#1d2d35] group-hover:text-white mb-3 transition-colors">
                {feature.question}
              </p>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-[#4ade80] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm transition-colors">
                  {feature.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Got a question not listed here?{" "}
            <a
              href="https://wp-statistics.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d2d35] font-semibold hover:underline"
            >
              Just ask us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
