"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  Check,
  Sparkles,
  Star,
} from "lucide-react";

const valueProps = [
  { icon: Zap, text: "All 8 Premium Add-ons" },
  { icon: Shield, text: "Priority Support" },
  { icon: BarChart3, text: "Advanced Analytics" },
];

const trustBadges = [
  "14-Day Money Back",
  "Cancel Anytime",
  "Instant Access",
  "Free Updates",
];

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[150px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Crown className="w-5 h-5 text-amber-400" />
            </motion.div>
            <span className="text-amber-300 font-semibold">
              WP Statistics Premium
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Unlock the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Full Power
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 rounded-full origin-left"
              />
            </span>
            <br />
            <span className="text-gray-300">of Your Analytics</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Get all 8 premium add-ons, priority support, and advanced features.
            <br />
            <span className="text-white font-medium">
              Starting at just $119/year
            </span>{" "}
            for unlimited analytics power.
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                <prop.icon className="w-5 h-5 text-amber-400" />
                <span className="text-white font-medium">{prop.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
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
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 rounded-full font-bold text-lg shadow-xl shadow-amber-500/25 transition-all"
            >
              <Crown className="w-5 h-5" />
              Get Premium Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#comparison"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Compare Plans
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "50K+", label: "Premium Users" },
              { value: "8", label: "Add-ons Included" },
              { value: "4.9", label: "Customer Rating", icon: Star },
              { value: "24/7", label: "Priority Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-1 text-3xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.icon && <stat.icon className="w-5 h-5 text-amber-400 fill-amber-400" />}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}
