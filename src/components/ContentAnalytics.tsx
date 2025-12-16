"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FileText,
  Users,
  FolderOpen,
  TrendingUp,
  Eye,
  MessageSquare,
  Clock,
  BarChart2,
  ArrowRight,
} from "lucide-react";

const tabs = [
  { id: "posts", label: "Post Analytics", icon: FileText },
  { id: "authors", label: "Author Insights", icon: Users },
  { id: "categories", label: "Category Stats", icon: FolderOpen },
];

const postData = [
  {
    title: "Complete Guide to WordPress SEO",
    views: 12453,
    avgTime: "4:32",
    comments: 47,
    trend: 15.3,
    category: "SEO",
  },
  {
    title: "10 Best WordPress Plugins 2024",
    views: 9821,
    avgTime: "3:18",
    comments: 32,
    trend: 8.7,
    category: "Plugins",
  },
  {
    title: "WordPress Security Best Practices",
    views: 7654,
    avgTime: "5:12",
    comments: 28,
    trend: -2.1,
    category: "Security",
  },
  {
    title: "Speed Optimization Tips",
    views: 6432,
    avgTime: "3:45",
    comments: 19,
    trend: 12.4,
    category: "Performance",
  },
];

const authorData = [
  { name: "Sarah Johnson", posts: 45, views: 67832, avgEngagement: 4.2, topCategory: "SEO" },
  { name: "Mike Chen", posts: 38, views: 54219, avgEngagement: 3.8, topCategory: "Development" },
  { name: "Emily Davis", posts: 29, views: 41567, avgEngagement: 4.5, topCategory: "Design" },
];

const categoryData = [
  { name: "WordPress Tips", posts: 89, views: 124532, percentage: 35 },
  { name: "SEO & Marketing", posts: 67, views: 98234, percentage: 28 },
  { name: "Development", posts: 54, views: 76543, percentage: 22 },
  { name: "Design", posts: 32, views: 54321, percentage: 15 },
];

export default function ContentAnalytics() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
            Content Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Understand What{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Content Performs Best
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Deep insights into your posts, authors, and categories. Know exactly what
            resonates with your audience.
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8 border border-gray-200"
        >
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-200"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "posts" && (
              <motion.div
                key="posts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-3 gap-6"
              >
                {/* Post List */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900">Top Performing Posts</h3>
                    <span className="text-sm text-gray-500">Last 30 days</span>
                  </div>
                  <div className="space-y-4">
                    {postData.map((post, index) => (
                      <motion.div
                        key={post.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                              {post.title}
                            </h4>
                            <span className="inline-block mt-1 px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full">
                              {post.category}
                            </span>
                          </div>
                          <span
                            className={`flex items-center gap-1 text-sm font-medium ${
                              post.trend >= 0 ? "text-green-600" : "text-red-500"
                            }`}
                          >
                            <TrendingUp className={`w-4 h-4 ${post.trend < 0 ? "rotate-180" : ""}`} />
                            {Math.abs(post.trend)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.avgTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {post.comments}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4">Content Overview</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Total Posts", value: "234", icon: FileText, color: "orange" },
                        { label: "Total Views", value: "1.2M", icon: Eye, color: "blue" },
                        { label: "Avg. Read Time", value: "3:45", icon: Clock, color: "green" },
                        { label: "Engagement", value: "4.2%", icon: TrendingUp, color: "purple" },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                        >
                          <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                            <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-gray-500">{stat.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white"
                  >
                    <h3 className="font-semibold mb-2">Pro Tip</h3>
                    <p className="text-sm text-orange-100 mb-4">
                      Posts with word counts between 1,500-2,500 perform 23% better on average.
                    </p>
                    <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === "authors" && (
              <motion.div
                key="authors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-6">Author Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                        <th className="pb-4 font-medium">Author</th>
                        <th className="pb-4 font-medium">Posts</th>
                        <th className="pb-4 font-medium">Total Views</th>
                        <th className="pb-4 font-medium">Engagement</th>
                        <th className="pb-4 font-medium">Top Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {authorData.map((author, index) => (
                        <motion.tr
                          key={author.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-b border-gray-50 hover:bg-orange-50 transition-colors"
                        >
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-semibold">
                                {author.name.split(" ").map((n) => n[0]).join("")}
                              </div>
                              <span className="font-medium text-gray-900">{author.name}</span>
                            </div>
                          </td>
                          <td className="py-4 text-gray-600">{author.posts}</td>
                          <td className="py-4 text-gray-600">{author.views.toLocaleString()}</td>
                          <td className="py-4">
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                              {author.avgEngagement}%
                            </span>
                          </td>
                          <td className="py-4">
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                              {author.topCategory}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "categories" && (
              <motion.div
                key="categories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Category Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-6">Views by Category</h3>
                  <div className="relative h-64 flex items-center justify-center">
                    {/* Donut Chart */}
                    <svg viewBox="0 0 100 100" className="w-48 h-48">
                      {categoryData.map((cat, i) => {
                        const offset = categoryData.slice(0, i).reduce((acc, c) => acc + c.percentage, 0);
                        const colors = ["#F97316", "#3B82F6", "#8B5CF6", "#10B981"];
                        return (
                          <motion.circle
                            key={cat.name}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={colors[i]}
                            strokeWidth="20"
                            strokeDasharray={`${cat.percentage * 2.51} 251`}
                            strokeDashoffset={-offset * 2.51}
                            initial={{ strokeDasharray: "0 251" }}
                            animate={{ strokeDasharray: `${cat.percentage * 2.51} 251` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                          />
                        );
                      })}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gray-900">354K</p>
                        <p className="text-sm text-gray-500">Total Views</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category List */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-6">Category Breakdown</h3>
                  <div className="space-y-4">
                    {categoryData.map((cat, index) => {
                      const colors = ["bg-orange-500", "bg-blue-500", "bg-purple-500", "bg-green-500"];
                      return (
                        <motion.div
                          key={cat.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{cat.name}</span>
                            <span className="text-sm text-gray-500">{cat.posts} posts</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${cat.percentage}%` }}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                className={`h-full ${colors[index]} rounded-full`}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-900 w-12 text-right">
                              {cat.percentage}%
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {cat.views.toLocaleString()} views
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
