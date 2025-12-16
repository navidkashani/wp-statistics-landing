"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Shield, Zap, Globe, Users, Check } from "lucide-react";

const floatingStats = [
  { label: "Active Installs", value: "600K+", icon: Users, delay: 0.8 },
  { label: "Privacy First", value: "100%", icon: Shield, delay: 1 },
  { label: "Fast & Light", value: "<1s", icon: Zap, delay: 1.2 },
];

const trustBadges = [
  "No cookies required",
  "GDPR compliant",
  "Open source",
  "Self-hosted",
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl translate-x-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-100 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8 shadow-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
            The #1 Privacy-Focused Analytics for WordPress
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            Know Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Visitors
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
                fill="none"
              >
                <motion.path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="url(#hero-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="hero-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#9333ea" />
                    <stop offset="0.5" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
            <br />
            <span className="text-gray-700">Without Compromising Privacy</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Complete website analytics directly in WordPress.{" "}
            <span className="text-purple-600 font-medium">No external services</span>,{" "}
            <span className="text-purple-600 font-medium">no cookie consent needed</span>,{" "}
            fully GDPR compliant.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Check className="w-4 h-4 text-green-500" />
                {badge}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://wordpress.org/plugins/wp-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-purple-500/25 transition-all"
            >
              Download Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:border-purple-300 hover:bg-purple-50 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors"
              >
                <Play className="w-4 h-4 text-purple-600 fill-current ml-0.5" />
              </motion.div>
              See Live Demo
            </motion.a>
          </motion.div>

          {/* Floating Stats */}
          <div className="mt-20 flex flex-wrap justify-center gap-6">
            {floatingStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-lg shadow-purple-100/50 border border-gray-100 hover:border-purple-200 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center"
                >
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </motion.div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative"
          id="demo"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-[2rem] opacity-20 blur-2xl" />

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl shadow-purple-200/50 border border-gray-200 overflow-hidden"
          >
            {/* Browser Chrome */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 flex items-center gap-4 border-b border-gray-200">
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-red-400 rounded-full cursor-pointer" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-green-400 rounded-full cursor-pointer" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 bg-white rounded-lg text-sm text-gray-500 border border-gray-200 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  yourdomain.com/wp-admin/admin.php?page=wps_overview
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Live
                </span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Views", value: "124,592", change: "+12.5%", color: "purple" },
                  { label: "Unique Visitors", value: "45,821", change: "+8.3%", color: "blue" },
                  { label: "Avg. Time on Site", value: "4m 32s", change: "+5.1%", color: "green" },
                  { label: "Bounce Rate", value: "32.4%", change: "-2.1%", color: "amber" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-pointer"
                  >
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    <p className={`text-sm mt-1 font-medium ${item.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                      {item.change} from last week
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Visitor Analytics</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-sm rounded-lg font-medium">Weekly</span>
                    <span className="px-3 py-1.5 text-gray-500 text-sm hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">Monthly</span>
                  </div>
                </div>
                <div className="h-48 flex items-end gap-3">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-gradient-to-t from-purple-600 to-violet-400 rounded-t-lg cursor-pointer relative group"
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {Math.floor(height * 50)} visits
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-gray-400">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fade overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>
  );
}
