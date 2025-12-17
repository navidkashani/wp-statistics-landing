"use client";

import { motion } from "framer-motion";
import { Gift, Sparkles, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import CouponCode from "./CouponCode";

// Seeded random function for consistent values between server and client
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export default function ChristmasHero() {
  // Pre-generate snowflake data with fixed values to avoid hydration mismatch
  const snowflakes = useMemo(() => {
    return [...Array(60)].map((_, i) => ({
      width: 2 + (i % 4),
      height: 2 + ((i + 1) % 4),
      left: (i * 1.7) % 100,
      opacity: 0.4 + ((i % 6) * 0.1),
      xEnd: -30 + (i % 60),
      duration: 8 + (i % 8),
      delay: (i % 8),
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a472a] pt-16">
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

      {/* Christmas decorations - Holly corners */}
      <div className="absolute top-20 left-8 text-6xl opacity-80">🎄</div>
      <div className="absolute top-32 right-12 text-5xl opacity-80">⭐</div>
      <div className="absolute bottom-20 left-16 text-4xl opacity-70">🎁</div>
      <div className="absolute bottom-32 right-20 text-5xl opacity-70">🔔</div>
      <div className="absolute top-1/3 left-4 text-3xl opacity-60">❄️</div>
      <div className="absolute top-1/2 right-8 text-3xl opacity-60">❄️</div>

      {/* String lights at top */}
      <div className="absolute top-16 left-0 right-0 flex justify-center">
        <div className="flex gap-6">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              <div className="w-px h-4 bg-gray-600" />
              <div
                className="w-3 h-4 rounded-full"
                style={{
                  backgroundColor: ["#e63946", "#2a9d8f", "#e9c46a", "#e63946", "#2a9d8f"][i % 5],
                  boxShadow: `0 0 10px ${["#e63946", "#2a9d8f", "#e9c46a", "#e63946", "#2a9d8f"][i % 5]}`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e3a] rounded-full text-white mb-8 shadow-lg"
        >
          <Gift className="w-5 h-5" />
          <span className="font-semibold">Limited Time Christmas Offer</span>
          <Sparkles className="w-5 h-5" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          <span className="text-[#f4d03f]">30% OFF</span>
          <br />
          WP Statistics Premium
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
        >
          Give your WordPress site the gift of powerful analytics this holiday season.
        </motion.p>

        {/* Coupon code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="inline-block mb-10"
        >
          <CouponCode variant="light" />
        </motion.div>

        {/* Price comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <p className="text-green-200 text-sm mb-1">Single Site - Was</p>
            <p className="text-3xl font-bold text-white/60 line-through">$119</p>
          </div>
          <div className="text-4xl">🎅</div>
          <div className="bg-white rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-[#c41e3a] text-sm mb-1 font-semibold">Now Only</p>
            <p className="text-5xl font-bold text-[#1a472a]">$83</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#c41e3a] text-white rounded-full font-bold text-xl shadow-xl hover:bg-[#a01830] transition-colors"
          >
            Claim Your 30% Off
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-green-100"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎄</span>
            <span>Offer ends Dec 31st</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            <span>14-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span>600,000+ happy users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
