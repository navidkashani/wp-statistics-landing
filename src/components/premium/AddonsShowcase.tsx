"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Megaphone,
  Database,
  FileBarChart,
  Activity,
  LayoutGrid,
  Palette,
  BarChart2,
  Code,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const addons = [
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-100",
    badge: "NEW",
    description: "Track marketing campaigns, connect to Google Search Console, and create custom events.",
    features: [
      "UTM Campaign Tracking",
      "Google Search Console Integration",
      "Custom Event Creation",
      "Marketing ROI Reports",
    ],
    demo: {
      title: "Campaign Performance",
      stats: [
        { label: "Email Newsletter", visitors: 2453, conversions: 127 },
        { label: "Facebook Ads", visitors: 1892, conversions: 89 },
        { label: "Google Ads", visitors: 3241, conversions: 156 },
      ],
    },
  },
  {
    id: "dataplus",
    name: "Data Plus",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-100",
    description: "Track custom post types, taxonomies, outbound links, and download tracking.",
    features: [
      "Custom Post Type Analytics",
      "Taxonomy Tracking",
      "Outbound Link Monitoring",
      "File Download Stats",
    ],
    demo: {
      title: "Custom Post Types",
      stats: [
        { label: "Products", views: 12453 },
        { label: "Portfolio", views: 8921 },
        { label: "Testimonials", views: 3421 },
      ],
    },
  },
  {
    id: "reporting",
    name: "Advanced Reporting",
    icon: FileBarChart,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-100",
    description: "Receive scheduled, graphical reports of your site's statistics.",
    features: [
      "Automated Email Reports",
      "PDF & HTML Export",
      "Custom Report Schedules",
      "Visual Data Charts",
    ],
    demo: {
      title: "Weekly Report Preview",
      chartData: [65, 78, 82, 75, 90, 85, 92],
    },
  },
  {
    id: "realtime",
    name: "Real-Time Stats",
    icon: Activity,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-100",
    description: "Monitor your visitors and online users live, without refreshing the page.",
    features: [
      "Live Visitor Map",
      "Real-Time Activity Feed",
      "Instant Notifications",
      "Auto-Refreshing Dashboard",
    ],
    demo: {
      title: "Live Visitors",
      visitors: [
        { country: "US", page: "/pricing", time: "Just now" },
        { country: "DE", page: "/features", time: "2s ago" },
        { country: "UK", page: "/blog", time: "5s ago" },
      ],
    },
  },
  {
    id: "widgets",
    name: "Advanced Widgets",
    icon: LayoutGrid,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-100",
    description: "Display various statistical widgets using Gutenberg blocks or theme widgets.",
    features: [
      "Gutenberg Block Support",
      "Theme Widget Integration",
      "Customizable Displays",
      "Shortcode Support",
    ],
    demo: {
      title: "Widget Types",
      widgets: ["Top Pages", "Visitor Counter", "Popular Posts", "Traffic Sources"],
    },
  },
  {
    id: "customization",
    name: "Customization",
    icon: Palette,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-100",
    description: "Manage admin menus, change plugin headers, and create white-label products.",
    features: [
      "White-Label Branding",
      "Custom Admin Menus",
      "Plugin Header Changes",
      "Role-Based Access",
    ],
    demo: {
      title: "Your Brand Here",
      preview: "white-label",
    },
  },
  {
    id: "minichart",
    name: "Mini Chart",
    icon: BarChart2,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-100",
    description: "Analyze post and page performance with tiny, customizable charts.",
    features: [
      "Inline Post Stats",
      "Quick Performance View",
      "Customizable Chart Styles",
      "Admin Column Integration",
    ],
    demo: {
      title: "Post Performance",
      posts: [
        { title: "SEO Guide", views: 1234, trend: [40, 65, 55, 80, 70] },
        { title: "WordPress Tips", views: 987, trend: [30, 45, 60, 55, 75] },
      ],
    },
  },
  {
    id: "restapi",
    name: "REST API",
    icon: Code,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-100",
    description: "Enable detailed WP Statistics endpoints in the WordPress REST API.",
    features: [
      "Full API Access",
      "Custom Endpoints",
      "Data Integration",
      "Third-Party Connections",
    ],
    demo: {
      title: "API Response",
      code: true,
    },
  },
];

export default function AddonsShowcase() {
  const [selectedAddon, setSelectedAddon] = useState(addons[0]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            All Included with Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            8 Powerful{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Add-ons
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium unlocks all add-ons instantly. No extra purchases needed.
          </p>
        </motion.div>

        {/* Add-ons Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add-on Cards */}
          <div className="lg:col-span-1 space-y-3">
            {addons.map((addon, index) => (
              <motion.button
                key={addon.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedAddon(addon)}
                className={`w-full p-4 rounded-2xl text-left transition-all flex items-center gap-4 ${
                  selectedAddon.id === addon.id
                    ? "bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 shadow-lg"
                    : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-12 h-12 ${addon.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <addon.icon
                    className={`w-6 h-6 bg-gradient-to-r ${addon.color} bg-clip-text`}
                    style={{ color: addon.color.includes("gray") ? "#374151" : undefined }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{addon.name}</span>
                    {addon.badge && (
                      <span className="px-2 py-0.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full">
                        {addon.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">{addon.description}</p>
                </div>
                {selectedAddon.id === addon.id && (
                  <ArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Selected Add-on Detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAddon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${selectedAddon.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <selectedAddon.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-white">{selectedAddon.name}</h3>
                      {selectedAddon.badge && (
                        <span className="px-2 py-0.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full">
                          {selectedAddon.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400">{selectedAddon.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {selectedAddon.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Demo Preview */}
                <div className="bg-gray-950/50 rounded-2xl p-6 border border-gray-700/50">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                    {selectedAddon.demo.title}
                  </p>

                  {/* Marketing Demo */}
                  {selectedAddon.id === "marketing" && (
                    <div className="space-y-3">
                      {(selectedAddon.demo as { title: string; stats: { label: string; visitors: number; conversions: number }[] }).stats?.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                          <span className="text-white font-medium">{stat.label}</span>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-400">{stat.visitors} visitors</span>
                            <span className="text-green-400">{stat.conversions} conversions</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Data Plus Demo */}
                  {selectedAddon.id === "dataplus" && (
                    <div className="space-y-3">
                      {(selectedAddon.demo as { title: string; stats: { label: string; views: number }[] }).stats?.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                          <span className="text-white font-medium">{stat.label}</span>
                          <span className="text-blue-400">{stat.views?.toLocaleString()} views</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reporting Demo */}
                  {selectedAddon.id === "reporting" && (
                    <div className="h-32 flex items-end gap-2">
                      {selectedAddon.demo.chartData?.map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg"
                        />
                      ))}
                    </div>
                  )}

                  {/* Real-Time Demo */}
                  {selectedAddon.id === "realtime" && (
                    <div className="space-y-2">
                      {selectedAddon.demo.visitors?.map((visitor, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-lg">{visitor.country === "US" ? "🇺🇸" : visitor.country === "DE" ? "🇩🇪" : "🇬🇧"}</span>
                          <span className="text-white flex-1">{visitor.page}</span>
                          <span className="text-gray-500 text-sm">{visitor.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Widgets Demo */}
                  {selectedAddon.id === "widgets" && (
                    <div className="grid grid-cols-2 gap-2">
                      {selectedAddon.demo.widgets?.map((widget, i) => (
                        <motion.div
                          key={widget}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-3 bg-gray-800/50 rounded-lg text-center text-gray-300 text-sm"
                        >
                          {widget}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Customization Demo */}
                  {selectedAddon.id === "customization" && (
                    <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">YB</span>
                      </div>
                      <p className="text-white font-medium">Your Brand Analytics</p>
                      <p className="text-gray-500 text-sm">Fully white-labeled</p>
                    </div>
                  )}

                  {/* Mini Chart Demo */}
                  {selectedAddon.id === "minichart" && (
                    <div className="space-y-3">
                      {selectedAddon.demo.posts?.map((post) => (
                        <div key={post.title} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-xl">
                          <span className="text-white flex-1">{post.title}</span>
                          <div className="flex items-end gap-0.5 h-6">
                            {post.trend.map((h, i) => (
                              <div
                                key={i}
                                className="w-1.5 bg-teal-500 rounded-t"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                          <span className="text-teal-400 text-sm">{post.views}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* REST API Demo */}
                  {selectedAddon.id === "restapi" && (
                    <div className="font-mono text-xs text-gray-400 overflow-hidden">
                      <p className="text-green-400">GET /wp-json/wp-statistics/v2/stats</p>
                      <p className="mt-2 text-gray-500">{"{"}</p>
                      <p className="ml-4">&quot;visitors&quot;: 12453,</p>
                      <p className="ml-4">&quot;pageviews&quot;: 45821,</p>
                      <p className="ml-4">&quot;bounce_rate&quot;: 32.4</p>
                      <p className="text-gray-500">{"}"}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
