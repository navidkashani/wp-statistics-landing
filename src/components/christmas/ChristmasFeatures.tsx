"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Activity,
  FileText,
  Zap,
  Layout,
  Settings,
  TrendingUp,
  Code,
} from "lucide-react";

const addons = [
  {
    icon: TrendingUp,
    name: "Marketing",
    description: "Campaign tracking, Google Search Console integration, custom events",
    emoji: "📈",
  },
  {
    icon: BarChart3,
    name: "Data Plus",
    description: "Custom post types, taxonomies, outbound links, downloads tracking",
    emoji: "📊",
  },
  {
    icon: FileText,
    name: "Advanced Reporting",
    description: "Scheduled graphical reports with PDF/HTML export",
    emoji: "📄",
  },
  {
    icon: Activity,
    name: "Real-Time Stats",
    description: "Live visitor monitoring without page refresh",
    emoji: "⚡",
  },
  {
    icon: Layout,
    name: "Advanced Widgets",
    description: "Gutenberg blocks and theme widgets for stats display",
    emoji: "🧩",
  },
  {
    icon: Settings,
    name: "Customization",
    description: "White-label branding and admin menu management",
    emoji: "⚙️",
  },
  {
    icon: Zap,
    name: "Mini Chart",
    description: "Compact performance charts for posts and pages",
    emoji: "📉",
  },
  {
    icon: Code,
    name: "REST API",
    description: "Advanced data retrieval endpoints for developers",
    emoji: "🔌",
  },
];

export default function ChristmasFeatures() {
  return (
    <section className="py-24 bg-[#fdf6e3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-5xl mb-4 block">🎁</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-6">
            8 Premium Add-ons Included
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unwrap all these powerful features at 30% off this Christmas!
          </p>
        </motion.div>

        {/* Add-ons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#1a472a]/10 hover:border-[#c41e3a]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{addon.emoji}</span>
                <div className="w-10 h-10 rounded-xl bg-[#1a472a] flex items-center justify-center">
                  <addon.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a472a] mb-2">{addon.name}</h3>
              <p className="text-gray-600 text-sm">{addon.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center gap-4 mt-12 text-4xl">
          <span>🎄</span>
          <span>⭐</span>
          <span>🎄</span>
        </div>
      </div>
    </section>
  );
}
