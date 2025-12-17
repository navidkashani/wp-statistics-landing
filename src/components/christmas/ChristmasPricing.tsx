"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Single Site",
    originalPrice: 119,
    discountedPrice: 83,
    period: "/year",
    description: "Perfect for a single WordPress site",
    features: [
      "All Premium Add-ons",
      "Real-Time Stats",
      "Advanced Reporting",
      "Email Reports",
      "Priority Support",
      "1 Year Updates",
    ],
    cta: "Get Single Site",
    popular: false,
    emoji: "🎁",
  },
  {
    name: "Up to 5 Sites",
    originalPrice: 249,
    discountedPrice: 174,
    period: "/year",
    description: "Great for agencies and freelancers",
    features: [
      "All Premium Add-ons",
      "Real-Time Stats",
      "Advanced Reporting",
      "Email Reports",
      "Priority Support",
      "1 Year Updates",
      "Use on 5 Sites",
    ],
    cta: "Get 5 Sites License",
    popular: true,
    emoji: "🎄",
  },
  {
    name: "Unlimited Sites",
    originalPrice: 449,
    discountedPrice: 314,
    period: "/year",
    description: "Best for agencies with many clients",
    features: [
      "All Premium Add-ons",
      "Real-Time Stats",
      "Advanced Reporting",
      "Email Reports",
      "Priority Support",
      "1 Year Updates",
      "Unlimited Sites",
      "White Label Option",
    ],
    cta: "Get Unlimited",
    popular: false,
    emoji: "⭐",
  },
];

export default function ChristmasPricing() {
  return (
    <section className="py-24 bg-[#1a472a]" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-5xl mb-4 block">🎅</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Holiday Plan
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            All plans include every premium add-on. Use code <span className="text-[#f4d03f] font-bold">CHRISTMAS30</span> at checkout.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-white shadow-2xl scale-105"
                  : "bg-white/95 shadow-xl"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-[#c41e3a] text-white rounded-full text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Emoji */}
              <div className="text-4xl mb-4">{plan.emoji}</div>

              {/* Plan name */}
              <h3 className="text-2xl font-bold text-[#1a472a] mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl text-gray-400 line-through">${plan.originalPrice}</span>
                  <span className="text-5xl font-bold text-[#1a472a]">${plan.discountedPrice}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-[#c41e3a] text-sm mt-2 font-semibold">
                  🎉 Save ${plan.originalPrice - plan.discountedPrice} with Christmas discount!
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[#1a472a] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
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
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.popular
                    ? "bg-[#c41e3a] text-white shadow-lg hover:bg-[#a01830]"
                    : "bg-[#1a472a] text-white hover:bg-[#143d22]"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-green-100 text-lg">
            <span className="text-2xl mr-2">🛡️</span>
            All plans come with a <span className="text-white font-semibold">14-day money-back guarantee</span>. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
