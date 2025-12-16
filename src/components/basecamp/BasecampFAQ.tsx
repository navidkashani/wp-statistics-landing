"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "About the company",
    questions: [
      {
        q: "How long has WP Statistics been around?",
        a: "WP Statistics has been actively developed for over 14 years. We're one of the oldest and most trusted analytics plugins in the WordPress ecosystem.",
      },
      {
        q: "Who's behind WP Statistics?",
        a: "We're a dedicated team of WordPress developers and privacy advocates. We believe website owners deserve simple, honest analytics that respect user privacy.",
      },
    ],
  },
  {
    category: "Security and privacy",
    questions: [
      {
        q: "Is my data safe?",
        a: "Your data stays on your own server. We never see it, we never store it, we never sell it. You have complete control over your analytics data.",
      },
      {
        q: "Do I need cookie consent banners?",
        a: "No! WP Statistics doesn't use cookies by default, so you can skip those annoying consent popups entirely. Your site stays clean and GDPR-friendly.",
      },
      {
        q: "Is it compliant with GDPR, CCPA, and other regulations?",
        a: "Yes. Since all data stays on your server and we don't use cookies or track users across sites, WP Statistics is compliant with major privacy regulations out of the box.",
      },
    ],
  },
  {
    category: "Getting started",
    questions: [
      {
        q: "How do I install WP Statistics?",
        a: "Just like any WordPress plugin! Go to Plugins → Add New, search 'WP Statistics', click Install, then Activate. That's it — you'll see stats within minutes.",
      },
      {
        q: "Will it slow down my website?",
        a: "No. We've spent 14 years optimizing performance. The tracking script is tiny and works great with caching plugins. Most users see zero impact on page speed.",
      },
      {
        q: "Can I try Premium before buying?",
        a: "We offer a 14-day money-back guarantee. If Premium doesn't meet your needs, we'll refund you completely — no questions asked.",
      },
    ],
  },
];

export default function BasecampFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-20 bg-[#fffef9] border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">
                  {catIndex === 0 ? "🏢" : catIndex === 1 ? "🔐" : "🚀"}
                </span>
                <h3 className="text-xl font-bold text-[#1d2d35]">
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={key}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-[#1d2d35] pr-4">
                          {item.q}
                        </span>
                        <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-gray-500" />
                          ) : (
                            <Plus className="w-4 h-4 text-gray-500" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-4 text-gray-600 leading-relaxed">
                              <span className="bg-[#ffc800] text-[#1d2d35] px-1 font-medium">
                                {item.a}
                              </span>
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-12 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="https://wp-statistics.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d2d35] text-white rounded-full font-bold hover:bg-[#2d3d45] transition-colors"
          >
            Ask us anything →
          </a>
          <p className="text-gray-500 text-sm mt-3">We typically respond within a few hours.</p>
        </motion.div>
      </div>
    </section>
  );
}
