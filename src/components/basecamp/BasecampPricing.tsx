"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to understand your visitors.",
    features: [
      "Unlimited pageviews",
      "Real-time stats",
      "Visitor locations",
      "Top pages & referrers",
      "Device & browser data",
      "Search keywords",
      "Admin bar stats",
      "GDPR compliant",
    ],
    cta: "Download Free",
    href: "https://wordpress.org/plugins/wp-statistics/",
    popular: false,
  },
  {
    name: "Premium",
    price: "$119",
    period: "/year",
    description: "For serious site owners who want the full picture.",
    features: [
      "Everything in Free",
      "Marketing campaigns",
      "Advanced reporting",
      "Custom post types",
      "Download tracking",
      "REST API access",
      "White-label option",
      "Priority support",
    ],
    cta: "Go Premium",
    href: "/premium",
    popular: true,
  },
];

export default function BasecampPricing() {
  return (
    <section className="py-24 bg-[#f7f5f2]" id="pricing">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2d35] mb-6">
            Simple, honest pricing.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No tricks, no hidden fees,
            no &ldquo;contact us for pricing&rdquo; nonsense.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-[#1d2d35] text-white"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f4bd4f] text-[#1d2d35] rounded-full text-sm font-bold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[#1d2d35]"}`}>
                  {plan.name}
                </h3>
                <p className={plan.popular ? "text-gray-300" : "text-gray-600"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-[#1d2d35]"}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-gray-300" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-[#f4bd4f]" : "bg-[#4ade80]"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-[#1d2d35]" : "text-white"}`} />
                    </div>
                    <span className={plan.popular ? "text-gray-200" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.href.startsWith("/") ? (
                <Link
                  href={plan.href}
                  className={`group flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-lg transition-all ${
                    plan.popular
                      ? "bg-[#f4bd4f] text-[#1d2d35] hover:bg-[#e5ad40]"
                      : "bg-[#1d2d35] text-white hover:bg-[#2d3d45]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-lg transition-all ${
                    plan.popular
                      ? "bg-[#f4bd4f] text-[#1d2d35] hover:bg-[#e5ad40]"
                      : "bg-[#1d2d35] text-white hover:bg-[#2d3d45]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12"
        >
          14-day money-back guarantee on Premium. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
