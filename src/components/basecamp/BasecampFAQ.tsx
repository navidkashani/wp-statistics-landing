"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I install WP Statistics?",
        a: "Just like any WordPress plugin! Go to Plugins → Add New, search for 'WP Statistics', click Install, then Activate. That's it. You'll start seeing stats within minutes.",
      },
      {
        q: "Do I need to create an account somewhere?",
        a: "Nope. WP Statistics runs entirely on your own server. No external accounts, no API keys, no third-party dependencies. Install and go.",
      },
      {
        q: "Will it slow down my website?",
        a: "We've spent 14 years optimizing performance. The tracking script is tiny, database queries are efficient, and it works great with caching plugins. Most users see zero impact on page speed.",
      },
    ],
  },
  {
    category: "Privacy & Compliance",
    questions: [
      {
        q: "Is WP Statistics GDPR compliant?",
        a: "Yes! Since all data stays on your server and we don't use cookies by default, you can use WP Statistics without cookie consent banners. Your data, your server, your control.",
      },
      {
        q: "Does it use cookies?",
        a: "No cookies are required for basic tracking. We use a privacy-respecting approach that works without storing anything on your visitors' devices.",
      },
      {
        q: "Can I anonymize visitor IPs?",
        a: "Absolutely. You can configure IP anonymization right from the settings. We also support automatic data cleanup after a period you choose.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        q: "Can I see real-time visitors?",
        a: "Yes! Watch visitors browse your site in real-time. See what pages they're viewing, where they're from, and how they found you - all updating live.",
      },
      {
        q: "Does it work with WooCommerce?",
        a: "Yes. Track product views, category popularity, and customer behavior. Premium users get even deeper e-commerce insights.",
      },
      {
        q: "Can I exclude my own visits?",
        a: "Of course! Exclude by user role (admin, editor, etc.), IP address, or even specific users. Your stats will only show real visitors.",
      },
    ],
  },
];

export default function BasecampFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "0-0": true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2d35] mb-6">
            Questions? We&apos;ve got answers.
          </h2>
          <p className="text-xl text-gray-600">
            Here&apos;s everything you might want to know. Still curious?{" "}
            <a
              href="https://wp-statistics.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d2d35] font-semibold hover:underline"
            >
              Just ask
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#1d2d35] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f4bd4f] rounded-full" />
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={key}
                      className="bg-[#f7f5f2] rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f0ede8] transition-colors"
                      >
                        <span className="font-semibold text-[#1d2d35] pr-4">
                          {item.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                              {item.a}
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
      </div>
    </section>
  );
}
