"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  Eye,
  Clock,
  TrendingUp,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Chrome,
  Apple,
  MousePointer,
  FileText,
  ArrowUp,
  ArrowDown,
  RefreshCw,
} from "lucide-react";

// Simulated live data
const generateRandomChange = () => Math.floor(Math.random() * 20) - 5;
const generateVisitorCount = () => Math.floor(Math.random() * 50) + 10;

const browsers = [
  { name: "Chrome", icon: Chrome, percentage: 64, color: "#4285F4" },
  { name: "Safari", icon: Apple, percentage: 19, color: "#000000" },
  { name: "Firefox", icon: Globe, percentage: 10, color: "#FF7139" },
  { name: "Edge", icon: Monitor, percentage: 7, color: "#0078D7" },
];

const devices = [
  { name: "Desktop", icon: Monitor, percentage: 58, color: "#8B5CF6" },
  { name: "Mobile", icon: Smartphone, percentage: 35, color: "#EC4899" },
  { name: "Tablet", icon: Tablet, percentage: 7, color: "#14B8A6" },
];

const countries = [
  { name: "United States", code: "US", visitors: 12453, flag: "🇺🇸" },
  { name: "Germany", code: "DE", visitors: 8234, flag: "🇩🇪" },
  { name: "United Kingdom", code: "GB", visitors: 6721, flag: "🇬🇧" },
  { name: "France", code: "FR", visitors: 4532, flag: "🇫🇷" },
  { name: "Canada", code: "CA", visitors: 3891, flag: "🇨🇦" },
];

const topPages = [
  { path: "/blog/wordpress-tips", views: 8432, change: 12.5 },
  { path: "/features", views: 6218, change: 8.3 },
  { path: "/pricing", views: 4891, change: -2.1 },
  { path: "/blog/seo-guide", views: 3654, change: 15.7 },
  { path: "/documentation", views: 2987, change: 5.2 },
];

const liveVisitors = [
  { page: "/blog/analytics-guide", country: "US", time: "Just now" },
  { page: "/features", country: "DE", time: "2s ago" },
  { page: "/pricing", country: "GB", time: "5s ago" },
  { page: "/", country: "FR", time: "8s ago" },
  { page: "/documentation", country: "CA", time: "12s ago" },
];

type TabType = "overview" | "realtime" | "content" | "geo";

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isLive, setIsLive] = useState(true);
  const [stats, setStats] = useState({
    visitors: 1247,
    pageviews: 4892,
    avgTime: "3:42",
    bounceRate: 32.4,
  });
  const [onlineNow, setOnlineNow] = useState(47);
  const [chartData, setChartData] = useState([40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80]);

  // Simulate live updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setStats((prev) => ({
        visitors: prev.visitors + Math.floor(Math.random() * 5),
        pageviews: prev.pageviews + Math.floor(Math.random() * 12),
        avgTime: prev.avgTime,
        bounceRate: Math.max(20, Math.min(45, prev.bounceRate + (Math.random() - 0.5))),
      }));
      setOnlineNow((prev) => Math.max(20, Math.min(80, prev + Math.floor(Math.random() * 7) - 3)));
      setChartData((prev) => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 60) + 40];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const tabs = [
    { id: "overview" as TabType, label: "Overview", icon: BarChart3 },
    { id: "realtime" as TabType, label: "Real-time", icon: RefreshCw },
    { id: "content" as TabType, label: "Content", icon: FileText },
    { id: "geo" as TabType, label: "Geographic", icon: Globe },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Interactive Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Your Analytics in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Real Action
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore a live simulation of the WP Statistics dashboard. All features shown are
            available in the free plugin.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Browser Chrome */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Browser Header */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 flex items-center gap-4 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 bg-white rounded-lg text-sm text-gray-600 border border-gray-200 flex items-center gap-2">
                  <span className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
                    <BarChart3 className="w-2.5 h-2.5 text-white" />
                  </span>
                  yoursite.com/wp-admin/admin.php?page=wps_overview
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLive(!isLive)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isLive
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isLive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
                {isLive ? "Live" : "Paused"}
              </motion.button>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-gray-50">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">WP Statistics</h3>
                  <p className="text-gray-500">Dashboard Overview</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">Online now:</span>
                  <motion.span
                    key={onlineNow}
                    initial={{ scale: 1.2, color: "#22C55E" }}
                    animate={{ scale: 1, color: "#1F2937" }}
                    className="font-bold text-gray-900"
                  >
                    {onlineNow}
                  </motion.span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 bg-white p-1.5 rounded-xl border border-gray-200 w-fit">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {[
                        { label: "Total Visitors", value: stats.visitors.toLocaleString(), icon: Users, change: 12.5, color: "purple" },
                        { label: "Page Views", value: stats.pageviews.toLocaleString(), icon: Eye, change: 8.3, color: "blue" },
                        { label: "Avg. Session", value: stats.avgTime, icon: Clock, change: 5.1, color: "green" },
                        { label: "Bounce Rate", value: `${stats.bounceRate.toFixed(1)}%`, icon: TrendingUp, change: -2.1, color: "amber" },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all group"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                            </div>
                            <span className={`text-sm font-medium flex items-center gap-1 ${stat.change >= 0 ? "text-green-600" : "text-red-500"}`}>
                              {stat.change >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                              {Math.abs(stat.change)}%
                            </span>
                          </div>
                          <motion.p
                            key={stat.value}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            className="text-2xl font-bold text-gray-900"
                          >
                            {stat.value}
                          </motion.p>
                          <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart and Sidebar */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Main Chart */}
                      <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-semibold text-gray-900">Traffic Overview</h4>
                          <div className="flex gap-2">
                            {["Day", "Week", "Month"].map((period, i) => (
                              <button
                                key={period}
                                className={`px-3 py-1 text-sm rounded-lg ${
                                  i === 1 ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-500 hover:bg-gray-100"
                                }`}
                              >
                                {period}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="h-48 flex items-end gap-2">
                          {chartData.map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.5, delay: i * 0.05 }}
                              className="flex-1 bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t-lg relative group cursor-pointer"
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {Math.floor(height * 50)} visits
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-gray-400">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                            <span key={i}>{day}</span>
                          ))}
                        </div>
                      </div>

                      {/* Top Pages */}
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Top Pages</h4>
                        <div className="space-y-3">
                          {topPages.slice(0, 4).map((page, i) => (
                            <motion.div
                              key={page.path}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{page.path}</p>
                                <p className="text-xs text-gray-500">{page.views.toLocaleString()} views</p>
                              </div>
                              <span className={`text-xs font-medium ${page.change >= 0 ? "text-green-600" : "text-red-500"}`}>
                                {page.change >= 0 ? "+" : ""}{page.change}%
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "realtime" && (
                  <motion.div
                    key="realtime"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Live Activity Feed */}
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Live Visitors</h4>
                          <span className="flex items-center gap-2 text-sm text-green-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Live updating
                          </span>
                        </div>
                        <div className="space-y-3">
                          {liveVisitors.map((visitor, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-lg">
                                {visitor.country === "US" ? "🇺🇸" : visitor.country === "DE" ? "🇩🇪" : visitor.country === "GB" ? "🇬🇧" : visitor.country === "FR" ? "🇫🇷" : "🇨🇦"}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{visitor.page}</p>
                                <p className="text-xs text-gray-500">{visitor.time}</p>
                              </div>
                              <MousePointer className="w-4 h-4 text-purple-500" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Real-time Stats */}
                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-4">Active Visitors Map</h4>
                          <div className="relative h-48 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg overflow-hidden">
                            {/* Simplified world map with animated dots */}
                            <svg viewBox="0 0 200 100" className="w-full h-full">
                              <motion.circle cx="40" cy="35" r="4" fill="#8B5CF6" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                              <motion.circle cx="95" cy="32" r="3" fill="#8B5CF6" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                              <motion.circle cx="105" cy="38" r="3" fill="#8B5CF6" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                              <motion.circle cx="160" cy="55" r="2" fill="#8B5CF6" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
                              <motion.circle cx="55" cy="42" r="2" fill="#8B5CF6" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
                            </svg>
                            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs text-gray-600">
                              {onlineNow} active sessions
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-4">Pages Being Viewed</h4>
                          <div className="space-y-2">
                            {["/", "/features", "/pricing", "/blog"].map((page, i) => (
                              <div key={page} className="flex items-center gap-3">
                                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${[45, 28, 18, 9][i]}%` }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                                  />
                                </div>
                                <span className="text-xs text-gray-600 w-20">{page}</span>
                                <span className="text-xs font-medium text-gray-900">{[45, 28, 18, 9][i]}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "content" && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Content Performance */}
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Top Performing Content</h4>
                        <div className="space-y-4">
                          {topPages.map((page, i) => (
                            <motion.div
                              key={page.path}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-900">{page.path}</span>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                  page.change >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                  {page.change >= 0 ? "+" : ""}{page.change}%
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  {page.views.toLocaleString()} views
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  2m 34s avg
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Author Stats */}
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Author Performance</h4>
                        <div className="space-y-4">
                          {[
                            { name: "John Smith", posts: 45, views: 24532, avatar: "JS" },
                            { name: "Sarah Wilson", posts: 38, views: 18921, avatar: "SW" },
                            { name: "Mike Johnson", posts: 29, views: 15643, avatar: "MJ" },
                          ].map((author, i) => (
                            <motion.div
                              key={author.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {author.avatar}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{author.name}</p>
                                <p className="text-sm text-gray-500">{author.posts} posts</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-gray-900">{author.views.toLocaleString()}</p>
                                <p className="text-xs text-gray-500">total views</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "geo" && (
                  <motion.div
                    key="geo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Countries */}
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Top Countries</h4>
                        <div className="space-y-3">
                          {countries.map((country, i) => (
                            <motion.div
                              key={country.code}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-4"
                            >
                              <span className="text-2xl">{country.flag}</span>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium text-gray-900">{country.name}</span>
                                  <span className="text-sm text-gray-600">{country.visitors.toLocaleString()}</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(country.visitors / countries[0].visitors) * 100}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Browser & Device */}
                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-4">Browsers</h4>
                          <div className="flex gap-4">
                            {browsers.map((browser, i) => (
                              <motion.div
                                key={browser.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex-1 text-center"
                              >
                                <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-xl flex items-center justify-center">
                                  <browser.icon className="w-6 h-6" style={{ color: browser.color }} />
                                </div>
                                <p className="text-lg font-bold text-gray-900">{browser.percentage}%</p>
                                <p className="text-xs text-gray-500">{browser.name}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-4">Devices</h4>
                          <div className="flex gap-4">
                            {devices.map((device, i) => (
                              <motion.div
                                key={device.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex-1"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <device.icon className="w-5 h-5" style={{ color: device.color }} />
                                  <span className="text-sm font-medium text-gray-900">{device.name}</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${device.percentage}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: device.color }}
                                  />
                                </div>
                                <p className="text-right text-sm font-medium text-gray-900 mt-1">{device.percentage}%</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
