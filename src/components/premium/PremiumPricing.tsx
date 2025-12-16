"use client";

import { motion } from "framer-motion";
import { Check, Crown, Zap, Building2, ArrowRight, Shield } from "lucide-react";

const plans = [
  {
    name: "Single Site",
    price: 119,
    period: "/year",
    description: "Perfect for personal sites and blogs",
    icon: Zap,
    features: [
      "1 Website License",
      "All 8 Premium Add-ons",
      "1 Year of Updates",
      "Priority Email Support",
      "14-Day Money Back",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "5 Sites",
    price: 249,
    period: "/year",
    description: "Ideal for freelancers and small agencies",
    icon: Crown,
    features: [
      "Up to 5 Website Licenses",
      "All 8 Premium Add-ons",
      "1 Year of Updates",
      "Priority Email Support",
      "14-Day Money Back",
      "Volume Discount",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Unlimited",
    price: 449,
    period: "/year",
    description: "Best for agencies and enterprises",
    icon: Building2,
    features: [
      "Unlimited Website Licenses",
      "All 8 Premium Add-ons",
      "1 Year of Updates",
      "Priority Email Support",
      "14-Day Money Back",
      "Best Value",
      "White-Label Rights",
    ],
    cta: "Best Value",
    popular: false,
    bestValue: true,
  },
];

export default function PremiumPricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All plans include every premium add-on. Pick the license that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 transition-all ${
                plan.popular
                  ? "bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-2xl shadow-purple-500/30 scale-105 z-10"
                  : plan.bestValue
                  ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl"
                  : "bg-white border-2 border-gray-100 shadow-lg"
              }`}
            >
              {/* Badge */}
              {(plan.popular || plan.bestValue) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg ${
                    plan.popular
                      ? "bg-white text-purple-600"
                      : "bg-gray-900 text-amber-400"
                  }`}
                >
                  {plan.popular ? "MOST POPULAR" : "BEST VALUE"}
                </motion.div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular || plan.bestValue
                    ? "bg-white/20"
                    : "bg-purple-100"
                }`}
              >
                <plan.icon
                  className={`w-7 h-7 ${
                    plan.popular || plan.bestValue ? "text-white" : "text-purple-600"
                  }`}
                />
              </div>

              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular || plan.bestValue ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular
                    ? "text-purple-200"
                    : plan.bestValue
                    ? "text-amber-100"
                    : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-5xl font-bold ${
                    plan.popular || plan.bestValue ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={
                    plan.popular
                      ? "text-purple-200"
                      : plan.bestValue
                      ? "text-amber-100"
                      : "text-gray-500"
                  }
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular || plan.bestValue
                          ? "bg-white/20 text-white"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular || plan.bestValue ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="https://wp-statistics.com/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-purple-600 hover:bg-gray-50 shadow-lg"
                    : plan.bestValue
                    ? "bg-gray-900 text-amber-400 hover:bg-gray-800 shadow-lg"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                }`}
              >
                Get {plan.name}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: Shield, text: "14-Day Money Back Guarantee" },
            { icon: Check, text: "Instant License Delivery" },
            { icon: Crown, text: "All Add-ons Included" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-600">
              <item.icon className="w-5 h-5 text-green-500" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Need a custom solution for your organization?</p>
          <motion.a
            href="https://wp-statistics.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-purple-300 hover:text-purple-600 transition-all"
          >
            Contact Sales
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
