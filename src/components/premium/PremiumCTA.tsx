"use client";

import { motion } from "framer-motion";
import { Crown, ArrowRight, Shield, Clock, Zap, Check } from "lucide-react";

export default function PremiumCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full mb-8"
          >
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold">14-Day Money-Back Guarantee</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Go{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Premium
            </span>
            ?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Join 50,000+ website owners who upgraded to Premium.
            All 8 add-ons, priority support, and instant access.
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            {[
              { icon: Zap, text: "Instant Activation" },
              { icon: Clock, text: "Cancel Anytime" },
              { icon: Crown, text: "All Add-ons Included" },
            ].map((item, index) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-gray-300"
              >
                <item.icon className="w-5 h-5 text-amber-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="https://wp-statistics.com/pricing/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 rounded-full font-bold text-lg shadow-xl shadow-amber-500/25 transition-all"
            >
              <Crown className="w-5 h-5" />
              Get Premium – From $119/year
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Pricing Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { sites: "1 Site", price: "$119", best: false },
              { sites: "5 Sites", price: "$249", best: true },
              { sites: "Unlimited", price: "$449", best: false },
            ].map((plan) => (
              <motion.div
                key={plan.sites}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-2xl border ${
                  plan.best
                    ? "bg-amber-500/10 border-amber-500/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <p className={`font-semibold ${plan.best ? "text-amber-400" : "text-white"}`}>
                  {plan.sites}
                </p>
                <p className={`text-2xl font-bold ${plan.best ? "text-amber-400" : "text-gray-300"}`}>
                  {plan.price}
                  <span className="text-sm font-normal text-gray-500">/year</span>
                </p>
                {plan.best && (
                  <span className="text-xs text-amber-400">Most Popular</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Final Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
              {[
                "Secure Payment",
                "Instant License Delivery",
                "No Questions Refund",
                "Premium Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
