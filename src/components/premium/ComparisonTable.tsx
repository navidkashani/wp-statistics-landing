"use client";

import { motion } from "framer-motion";
import { Check, X, Crown, Sparkles } from "lucide-react";

const features = [
  { name: "Unlimited Pageviews & Visitors", free: true, premium: true },
  { name: "Basic Dashboard Widgets", free: true, premium: true },
  { name: "Geographic Data", free: true, premium: true },
  { name: "Browser & Device Stats", free: true, premium: true },
  { name: "Referrer Tracking", free: true, premium: true },
  { name: "Privacy Compliant (GDPR)", free: true, premium: true },
  { name: "Custom Post Types & Taxonomies", free: false, premium: true, highlight: true },
  { name: "Real-Time Live Visitors", free: false, premium: true, highlight: true },
  { name: "Google Search Console Integration", free: false, premium: true, highlight: true },
  { name: "UTM Campaign Tracking", free: false, premium: true, highlight: true },
  { name: "Custom Events & Goals", free: false, premium: true, highlight: true },
  { name: "Outbound Link Tracking", free: false, premium: true, highlight: true },
  { name: "Download Tracking", free: false, premium: true, highlight: true },
  { name: "Advanced Email Reports (PDF/HTML)", free: false, premium: true, highlight: true },
  { name: "REST API Access", free: false, premium: true, highlight: true },
  { name: "White-Label Customization", free: false, premium: true, highlight: true },
  { name: "Advanced Widgets & Mini Charts", free: false, premium: true, highlight: true },
  { name: "Author Performance Analytics", free: false, premium: true, highlight: true },
  { name: "Priority Support", free: false, premium: true, highlight: true },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Feature Comparison
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free vs{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Premium
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See exactly what you get with Premium. Unlock 13+ exclusive features
            designed for serious website owners.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-6 font-semibold text-gray-900">Features</div>
            <div className="p-6 text-center border-l border-gray-200">
              <p className="font-semibold text-gray-900">Free</p>
              <p className="text-sm text-gray-500">$0/year</p>
            </div>
            <div className="p-6 text-center border-l border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50 relative">
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 left-1/2 -translate-x-1/2"
              >
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                  <Crown className="w-3 h-3" />
                  RECOMMENDED
                </span>
              </motion.div>
              <p className="font-semibold text-gray-900 flex items-center justify-center gap-1">
                Premium <Sparkles className="w-4 h-4 text-amber-500" />
              </p>
              <p className="text-sm text-amber-600 font-medium">From $119/year</p>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`grid grid-cols-3 ${
                  feature.highlight ? "bg-amber-50/50" : ""
                } hover:bg-gray-50 transition-colors`}
              >
                <div className="p-4 flex items-center">
                  <span
                    className={`text-sm ${
                      feature.highlight ? "font-medium text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {feature.name}
                    {feature.highlight && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        Premium
                      </span>
                    )}
                  </span>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-gray-100">
                  {feature.free ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 + 0.2 }}
                      className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-green-600" />
                    </motion.div>
                  ) : (
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center border-l border-gray-100">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 + 0.2 }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      feature.highlight
                        ? "bg-gradient-to-r from-amber-400 to-orange-400"
                        : "bg-green-100"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 ${
                        feature.highlight ? "text-white" : "text-green-600"
                      }`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="grid grid-cols-3 bg-gray-50 border-t border-gray-200">
            <div className="p-6" />
            <div className="p-6 text-center border-l border-gray-200">
              <motion.a
                href="https://wordpress.org/plugins/wp-statistics/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors"
              >
                Get Free Version
              </motion.a>
            </div>
            <div className="p-6 text-center border-l border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50">
              <motion.a
                href="https://wp-statistics.com/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium shadow-lg shadow-amber-500/25"
              >
                <Crown className="w-4 h-4" />
                Upgrade to Premium
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-500"
        >
          All plans include unlimited pageviews, sites, and a 14-day money-back guarantee
        </motion.p>
      </div>
    </section>
  );
}
