"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal blogs and small websites",
    features: [
      "Unlimited pageviews tracking",
      "Real-time statistics",
      "Geographic data",
      "Browser & device stats",
      "Referrer tracking",
      "Search engine keywords",
      "Privacy compliant (GDPR)",
      "Email reports",
    ],
    cta: "Download Free",
    ctaLink: "https://wordpress.org/plugins/wp-statistics/",
    highlighted: false,
  },
  {
    name: "Pro Add-ons",
    price: "$99",
    period: "/year",
    description: "Advanced features for professionals and agencies",
    features: [
      "Everything in Free, plus:",
      "Advanced widgets",
      "Customizable reports",
      "Mini charts",
      "Data Plus integration",
      "REST API access",
      "Priority support",
      "Early access to features",
    ],
    cta: "Get Pro Add-ons",
    ctaLink: "https://wp-statistics.com/add-ons/",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-6">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Free,{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Upgrade When Ready
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            WP Statistics core is and will always be free. Optional premium add-ons
            available for power users who need more.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
                  : "bg-white border-2 border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 rounded-full text-sm font-semibold shadow-lg"
                >
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </motion.div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={
                    plan.highlighted ? "text-blue-200" : "text-gray-500"
                  }
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-5xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={
                    plan.highlighted ? "text-blue-200" : "text-gray-500"
                  }
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "bg-white/20 text-white"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span
                      className={
                        plan.highlighted ? "text-white" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block w-full py-4 rounded-xl font-semibold text-center transition-all ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-50 shadow-lg"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-gray-600">
              <strong className="text-gray-900">30-day money-back guarantee</strong> on all
              premium add-ons
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
