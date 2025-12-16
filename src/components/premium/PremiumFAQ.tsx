"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, Crown } from "lucide-react";

const faqs = [
  {
    question: "What exactly is included with Premium?",
    answer:
      "Premium includes all 8 add-ons (Marketing, Data Plus, Advanced Reporting, Real-Time Stats, Advanced Widgets, Customization, Mini Chart, and REST API), priority email support, 1 year of updates, and our 14-day money-back guarantee. You get everything with a single license.",
  },
  {
    question: "How is Premium different from buying add-ons separately?",
    answer:
      "Premium bundles all 8 add-ons at a significant discount compared to purchasing them individually. Plus, you get priority support and guaranteed compatibility between all add-ons. It's the best value if you need more than 2-3 add-ons.",
  },
  {
    question: "Can I upgrade from the free version easily?",
    answer:
      "Absolutely! Upgrading is seamless. Install the premium add-ons alongside your existing WP Statistics setup, enter your license key, and all your historical data remains intact. No migration needed.",
  },
  {
    question: "What happens after my license expires?",
    answer:
      "After 1 year, your add-ons continue to work, but you won't receive updates or priority support. You can renew at a discounted rate to maintain access to updates, new features, and priority support.",
  },
  {
    question: "Do all add-ons work together seamlessly?",
    answer:
      "Yes! All premium add-ons are designed to work together perfectly. For example, Advanced Reporting can include data from Data Plus custom post types, and Real-Time Stats works with all tracking features.",
  },
  {
    question: "Is there a trial period?",
    answer:
      "We offer a 14-day money-back guarantee instead of a trial. Purchase with confidence — if Premium doesn't meet your needs within 14 days, we'll refund you completely, no questions asked.",
  },
  {
    question: "Can I use Premium on client sites?",
    answer:
      "Yes! The 5 Sites and Unlimited licenses are perfect for agencies. You can use Premium on client sites. The Unlimited license also includes white-label rights for complete rebranding.",
  },
  {
    question: "What kind of support do Premium users get?",
    answer:
      "Premium users get priority email support with faster response times (typically under 2 hours during business hours). You also get access to our premium-only documentation and direct assistance from our development team.",
  },
  {
    question: "Will Premium slow down my website?",
    answer:
      "No. Premium add-ons are highly optimized and add minimal overhead. The tracking scripts remain lightweight, and features like Real-Time Stats use efficient AJAX calls that don't impact your site's frontend performance.",
  },
  {
    question: "Is my data still private with Premium?",
    answer:
      "Absolutely. Premium maintains the same privacy-first approach as the free version. All data stays on your server, no third-party tracking, and full GDPR/CCPA compliance. The premium features enhance your analytics without compromising privacy.",
  },
];

export default function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Premium FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Questions About{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Premium
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know before upgrading
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
              transition={{ delay: index * 0.03 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-amber-200 transition-colors shadow-sm"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.05)" }}
              >
                <span className="font-semibold text-gray-900 pr-8 flex items-center gap-3">
                  {index < 3 && <Crown className="w-4 h-4 text-amber-500" />}
                  {faq.question}
                </span>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wp-statistics.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Support
            </motion.a>
            <motion.a
              href="https://wp-statistics.com/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors"
            >
              View Documentation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
