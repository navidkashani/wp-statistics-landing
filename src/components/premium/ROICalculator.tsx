"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calculator, TrendingDown, Check, DollarSign } from "lucide-react";

const competitors = [
  { name: "Google Analytics 360", price: 150000, period: "year" },
  { name: "Matomo Cloud", price: 588, period: "year" },
  { name: "Plausible", price: 228, period: "year" },
  { name: "Fathom", price: 168, period: "year" },
  { name: "WP Statistics Premium", price: 119, period: "year", isUs: true },
];

export default function ROICalculator() {
  const [sites, setSites] = useState(1);
  const [animatedSavings, setAnimatedSavings] = useState(0);

  const wpPrice = sites === 1 ? 119 : sites <= 5 ? 249 : 449;
  const competitorAvg = Math.round((588 + 228 + 168) / 3);
  const annualSavings = (competitorAvg - wpPrice) * (sites === 1 ? 1 : sites <= 5 ? 5 : 10);
  const fiveYearSavings = annualSavings * 5;

  useEffect(() => {
    const duration = 1000;
    const start = animatedSavings;
    const end = annualSavings;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setAnimatedSavings(Math.round(start + (end - start) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [annualSavings]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4" />
            Value Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See How Much You{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Save
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            WP Statistics Premium costs a fraction of alternatives while delivering
            comparable features with complete privacy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Calculate Your Savings
            </h3>

            {/* Sites Selector */}
            <div className="mb-8">
              <label className="text-gray-400 text-sm mb-3 block">
                How many sites do you manage?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 1, label: "1 Site", price: "$119/yr" },
                  { value: 5, label: "Up to 5", price: "$249/yr" },
                  { value: 999, label: "Unlimited", price: "$449/yr" },
                ].map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSites(option.value)}
                    className={`p-4 rounded-xl text-center transition-all ${
                      sites === option.value
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900"
                        : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <p className="font-semibold">{option.label}</p>
                    <p className={`text-sm ${sites === option.value ? "text-gray-800" : "text-gray-500"}`}>
                      {option.price}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Savings Display */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Annual Savings vs. Alternatives</span>
                <TrendingDown className="w-5 h-5 text-green-400" />
              </div>
              <motion.div
                key={annualSavings}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-5xl font-bold text-green-400 mb-2"
              >
                ${animatedSavings.toLocaleString()}
              </motion.div>
              <p className="text-gray-500 text-sm">
                {fiveYearSavings > 0 && (
                  <>That&apos;s <span className="text-green-400 font-medium">${fiveYearSavings.toLocaleString()}</span> saved over 5 years!</>
                )}
              </p>
            </div>

            {/* What You Get */}
            <div className="mt-6 space-y-2">
              <p className="text-gray-400 text-sm mb-3">What&apos;s included:</p>
              {[
                "All 8 premium add-ons",
                "Priority email support",
                "1 year of updates",
                "14-day money-back guarantee",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Compare Annual Costs
            </h3>
            <div className="space-y-4">
              {competitors
                .filter((c) => c.price < 10000)
                .sort((a, b) => b.price - a.price)
                .map((competitor, index) => {
                  const maxPrice = 600;
                  const percentage = Math.min((competitor.price / maxPrice) * 100, 100);

                  return (
                    <motion.div
                      key={competitor.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`font-medium ${
                            competitor.isUs ? "text-amber-400" : "text-gray-300"
                          }`}
                        >
                          {competitor.name}
                          {competitor.isUs && (
                            <span className="ml-2 text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">
                              YOU SAVE
                            </span>
                          )}
                        </span>
                        <span
                          className={`font-bold ${
                            competitor.isUs ? "text-amber-400" : "text-gray-400"
                          }`}
                        >
                          ${competitor.price}/{competitor.period}
                        </span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className={`h-full rounded-full ${
                            competitor.isUs
                              ? "bg-gradient-to-r from-amber-500 to-orange-500"
                              : "bg-gray-600"
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
            </div>

            {/* Enterprise Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">Google Analytics 360</span> costs{" "}
                    <span className="text-red-400">$150,000+/year</span> for enterprise features.
                    WP Statistics Premium gives you privacy-first analytics at a fraction of the cost.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
