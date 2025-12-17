"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import CouponCode from "./CouponCode";

export default function ChristmasCTA() {
  // Pre-generate snowflake data with deterministic values to avoid hydration mismatch
  const snowflakes = useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      width: 2 + (i % 4),
      height: 2 + ((i + 1) % 4),
      left: (i * 2.5) % 100,
      opacity: 0.3 + ((i % 5) * 0.1),
      xEnd: -20 + (i % 40),
      duration: 10 + (i % 10),
      delay: i % 8,
    }));
  }, []);

  return (
    <section className="py-24 bg-[#c41e3a] relative overflow-hidden">
      {/* Snow overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map((flake, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: flake.width,
              height: flake.height,
              left: `${flake.left}%`,
              top: `-5%`,
              opacity: flake.opacity,
            }}
            animate={{
              y: ["0vh", "105vh"],
              x: [0, flake.xEnd],
            }}
            transition={{
              duration: flake.duration,
              repeat: Infinity,
              delay: flake.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Decorations */}
      <div className="absolute top-8 left-8 text-5xl opacity-70">🎄</div>
      <div className="absolute top-12 right-12 text-4xl opacity-70">⭐</div>
      <div className="absolute bottom-8 left-16 text-4xl opacity-60">🎁</div>
      <div className="absolute bottom-12 right-8 text-5xl opacity-60">🔔</div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="text-7xl mb-8">🎅</div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Don&apos;t Let This Gift Pass You By!
          </h2>

          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            This is our biggest sale of the year. Get WP Statistics Premium at 30% off and unlock the full power of your analytics.
          </p>

          {/* Coupon */}
          <div className="inline-block mb-10">
            <CouponCode variant="dark" />
          </div>

          {/* CTA Button */}
          <div>
            <motion.a
              href="https://wp-statistics.com/pricing/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-12 py-6 bg-[#1a472a] text-white rounded-full font-bold text-xl shadow-xl hover:bg-[#143d22] transition-colors"
            >
              Claim Your 30% Discount Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/90"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span>14-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span>All Add-ons Included</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
