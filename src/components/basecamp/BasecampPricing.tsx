"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function BasecampPricing() {
  return (
    <section className="py-20 bg-white border-b border-gray-200" id="pricing">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2d35] mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-xl text-gray-600">
            No tricks. No &ldquo;contact sales.&rdquo; Just straightforward options.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fffef9] rounded-xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-[#1d2d35] mb-2">Free</h3>
            <p className="text-gray-600 mb-4">Everything you need to get started.</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-[#1d2d35]">$0</span>
              <span className="text-gray-500"> forever</span>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Unlimited pageviews",
                "Real-time stats",
                "Visitor locations",
                "Top pages & referrers",
                "Search keywords",
                "GDPR compliant",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://wordpress.org/plugins/wp-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 border-2 border-[#1d2d35] text-[#1d2d35] rounded-full font-bold hover:bg-[#1d2d35] hover:text-white transition-colors"
            >
              Download Free →
            </a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1d2d35] rounded-xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-[#ffc800] text-[#1d2d35] text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-gray-400 mb-4">For those who want the full picture.</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">$119</span>
              <span className="text-gray-400"> /year</span>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Everything in Free",
                "All 8 add-ons included",
                "Marketing campaigns",
                "Advanced reporting",
                "REST API access",
                "Priority support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#ffc800] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/premium"
              className="block w-full text-center py-3 bg-[#ffc800] text-[#1d2d35] rounded-full font-bold hover:bg-[#e6b400] transition-colors"
            >
              Go Premium →
            </Link>
          </motion.div>
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-8"
        >
          <span className="bg-[#ffc800] text-[#1d2d35] px-2 py-0.5 rounded font-medium">14-day money-back guarantee</span>
          {" "}on Premium. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
