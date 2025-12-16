"use client";

import { motion } from "framer-motion";
import { Users, Eye, TrendingUp, Globe } from "lucide-react";

export default function ProductWalkthrough() {
  return (
    <section className="py-20 bg-[#fffef9] border-b border-gray-200" id="before-after">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2d35] mb-4">
            See it in action
          </h2>
          <p className="text-xl text-gray-600">
            A peek at what your WordPress dashboard will look like.
          </p>
        </motion.div>

        {/* Mock Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Browser Bar */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded px-3 py-1 text-gray-500 text-sm border border-gray-200">
                yoursite.com/wp-admin
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 md:p-8">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#1d2d35]">📊 WP Statistics Overview</h3>
                <p className="text-gray-500 text-sm">Last 30 days</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                ● Live
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Visitors", value: "12,847", icon: Users, change: "+12%" },
                { label: "Page Views", value: "48,293", icon: Eye, change: "+8%" },
                { label: "Bounce Rate", value: "34%", icon: TrendingUp, change: "-5%" },
                { label: "Avg. Time", value: "2:34", icon: Globe, change: "+18%" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#fffef9] rounded-lg p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-sm">{stat.label}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-[#1d2d35]">{stat.value}</span>
                    <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-green-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="bg-[#fffef9] rounded-lg p-6 border border-gray-100 mb-8">
              <h4 className="font-semibold text-[#1d2d35] mb-4">Traffic Overview</h4>
              <div className="flex items-end gap-2 h-32">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex-1 bg-[#ffc800] rounded-t"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Top Pages */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#fffef9] rounded-lg p-4 border border-gray-100">
                <h4 className="font-semibold text-[#1d2d35] mb-3">Top Pages</h4>
                <div className="space-y-2">
                  {[
                    { page: "/how-to-start-blog", views: "2,341" },
                    { page: "/best-themes-2024", views: "1,892" },
                    { page: "/seo-guide", views: "1,456" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600 truncate">{item.page}</span>
                      <span className="font-medium text-[#1d2d35]">{item.views}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#fffef9] rounded-lg p-4 border border-gray-100">
                <h4 className="font-semibold text-[#1d2d35] mb-3">Top Countries</h4>
                <div className="space-y-2">
                  {[
                    { country: "🇺🇸 United States", percent: "42%" },
                    { country: "🇬🇧 United Kingdom", percent: "18%" },
                    { country: "🇩🇪 Germany", percent: "12%" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.country}</span>
                      <span className="font-medium text-[#1d2d35]">{item.percent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-6"
        >
          ↑ This is what you&apos;ll see in your WordPress admin. Simple, right?
        </motion.p>
      </div>
    </section>
  );
}
