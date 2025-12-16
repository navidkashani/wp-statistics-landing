"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is WP Statistics really free?",
    answer:
      "Yes! WP Statistics is 100% free and open source. All core features are available without any cost. We offer optional premium add-ons for advanced features, but the main plugin will always be free.",
  },
  {
    question: "Do I need cookie consent banners with WP Statistics?",
    answer:
      "No, you don't! WP Statistics doesn't use cookies by default, so you don't need consent banners or cookie notices for analytics. This makes your site cleaner and more privacy-friendly.",
  },
  {
    question: "Is WP Statistics GDPR compliant?",
    answer:
      "Absolutely. WP Statistics is fully compliant with GDPR, CCPA, PECR, and other privacy regulations. We don't collect personal data by default, IP addresses are anonymized, and all data stays on your server.",
  },
  {
    question: "Will WP Statistics slow down my website?",
    answer:
      "WP Statistics is highly optimized and has minimal impact on your site's performance. The tracking script is lightweight (under 1KB) and loads asynchronously, so it won't affect your page load times.",
  },
  {
    question: "Can I use WP Statistics with caching plugins?",
    answer:
      "Yes! WP Statistics works seamlessly with all major caching plugins including WP Rocket, W3 Total Cache, LiteSpeed Cache, and others. The tracking continues to work even with aggressive caching enabled.",
  },
  {
    question: "Where is my analytics data stored?",
    answer:
      "All your analytics data is stored directly in your WordPress database on your server. Unlike cloud-based solutions, your data never leaves your hosting environment, giving you complete ownership and control.",
  },
  {
    question: "Can I export my analytics data?",
    answer:
      "Yes, WP Statistics provides multiple export options. You can export data to CSV, XML, or TSV formats. This is useful for backups, compliance requests, or further analysis in other tools.",
  },
  {
    question: "Does WP Statistics work with multisite?",
    answer:
      "Yes, WP Statistics fully supports WordPress multisite installations. You can track statistics for individual sites or view network-wide analytics, depending on your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              We&apos;ve Got Answers
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about WP Statistics
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-200 transition-colors"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                whileHover={{ backgroundColor: "rgba(239, 246, 255, 0.5)" }}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.a
            href="https://wp-statistics.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
