"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Users,
  Eye,
  Clock,
  TrendingUp,
  Globe,
  Monitor,
  Smartphone,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "نمای کلی", icon: Eye },
  { id: "visitors", label: "بازدیدکنندگان", icon: Users },
  { id: "content", label: "محتوا", icon: TrendingUp },
  { id: "geo", label: "جغرافیایی", icon: Globe },
];

const chartData = [35, 45, 55, 40, 65, 55, 75, 60, 80, 70, 90, 85];

export default function DashboardDemoFa() {
  const [activeTab, setActiveTab] = useState("overview");
  const [visitors, setVisitors] = useState(1247);
  const [onlineUsers, setOnlineUsers] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((v) => v + Math.floor(Math.random() * 3));
      setOnlineUsers(Math.floor(Math.random() * 15) + 15);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="dashboard-demo" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            دموی تعاملی
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            داشبورد زیبا و کاربردی
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تمام آمار سایت در یک نگاه. ساده، سریع و قدرتمند.
          </p>
        </motion.div>

        {/* Dashboard Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Browser Chrome */}
          <div className="bg-gray-800 rounded-t-2xl p-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm text-left" dir="ltr">
              yoursite.com/wp-admin/admin.php?page=wps_overview
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white rounded-b-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Top Stats Bar */}
            <div className="bg-gradient-to-l from-purple-600 to-indigo-600 p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "بازدیدکنندگان امروز", value: visitors.toLocaleString("fa-IR"), icon: Users, change: "+۱۲%" },
                  { label: "بازدید صفحات", value: "۴,۸۹۲", icon: Eye, change: "+۸%" },
                  { label: "کاربران آنلاین", value: onlineUsers.toLocaleString("fa-IR"), icon: Clock, change: "زنده", live: true },
                  { label: "نرخ پرش", value: "۳۲.۵%", icon: TrendingUp, change: "-۵%", negative: true },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-5 h-5 text-white/70" />
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        stat.live
                          ? "bg-green-500 text-white"
                          : stat.negative
                            ? "bg-green-500/20 text-green-300"
                            : "bg-white/20 text-white"
                      }`}>
                        {stat.live && <span className="inline-block w-1.5 h-1.5 bg-white rounded-full ml-1 animate-pulse" />}
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex gap-1 p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* Chart */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">نمودار ترافیک</h4>
                      <div className="h-48 flex items-end gap-2">
                        {chartData.map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: i * 0.05 }}
                            className="flex-1 bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t-lg relative group"
                          >
                            <div className="absolute -top-8 right-1/2 translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {Math.floor(height * 15)} بازدید
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>فروردین</span>
                        <span>اسفند</span>
                      </div>
                    </div>

                    {/* Top Pages */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">صفحات پربازدید</h4>
                      <div className="space-y-3">
                        {[
                          { page: "/آموزش-وردپرس", views: "۱,۲۳۴", change: 12 },
                          { page: "/قالب-های-رایگان", views: "۸۹۲", change: -5 },
                          { page: "/افزونه-سئو", views: "۶۵۴", change: 8 },
                          { page: "/طراحی-سایت", views: "۴۲۱", change: 15 },
                        ].map((item, i) => (
                          <motion.div
                            key={item.page}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between p-3 bg-white rounded-lg"
                          >
                            <span className="text-gray-600 truncate flex-1">{item.page}</span>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-gray-900">{item.views}</span>
                              <span className={`flex items-center text-xs ${item.change > 0 ? "text-green-600" : "text-red-600"}`}>
                                {item.change > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                {Math.abs(item.change)}%
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "visitors" && (
                  <motion.div
                    key="visitors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">دستگاه‌ها</h4>
                      <div className="space-y-4">
                        {[
                          { device: "دسکتاپ", percent: 55, icon: Monitor },
                          { device: "موبایل", percent: 38, icon: Smartphone },
                          { device: "تبلت", percent: 7, icon: Monitor },
                        ].map((item) => (
                          <div key={item.device} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <item.icon className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-600">{item.device}</span>
                              </div>
                              <span className="font-semibold">{item.percent}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.percent}%` }}
                                className="h-full bg-gradient-to-l from-purple-600 to-indigo-500 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">مرورگرها</h4>
                      <div className="space-y-3">
                        {[
                          { browser: "کروم", percent: 64 },
                          { browser: "سافاری", percent: 19 },
                          { browser: "فایرفاکس", percent: 11 },
                          { browser: "اج", percent: 6 },
                        ].map((item, i) => (
                          <div key={item.browser} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-xs font-bold text-purple-600">
                              {i + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-600">{item.browser}</span>
                                <span className="font-semibold">{item.percent}%</span>
                              </div>
                              <div className="h-1.5 bg-gray-200 rounded-full">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.percent}%` }}
                                  className="h-full bg-purple-500 rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "content" && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">محبوب‌ترین نوشته‌ها</h4>
                      <div className="space-y-3">
                        {[
                          { title: "آموزش کامل سئو وردپرس", views: "۲,۳۴۵", author: "ادمین" },
                          { title: "بهترین قالب‌های فروشگاهی", views: "۱,۸۷۶", author: "ادمین" },
                          { title: "افزونه‌های ضروری وردپرس", views: "۱,۵۴۳", author: "نویسنده" },
                          { title: "امنیت در وردپرس", views: "۱,۲۳۲", author: "ادمین" },
                          { title: "بهینه‌سازی سرعت سایت", views: "۹۸۷", author: "نویسنده" },
                        ].map((post, i) => (
                          <motion.div
                            key={post.title}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 p-4 bg-white rounded-xl"
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                              {i + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 truncate">{post.title}</p>
                              <p className="text-sm text-gray-500">توسط {post.author}</p>
                            </div>
                            <div className="text-left">
                              <p className="font-bold text-gray-900">{post.views}</p>
                              <p className="text-xs text-gray-500">بازدید</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "geo" && (
                  <motion.div
                    key="geo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">کشورها</h4>
                      <div className="space-y-3">
                        {[
                          { country: "ایران", flag: "🇮🇷", percent: 68 },
                          { country: "آمریکا", flag: "🇺🇸", percent: 12 },
                          { country: "آلمان", flag: "🇩🇪", percent: 8 },
                          { country: "کانادا", flag: "🇨🇦", percent: 5 },
                          { country: "انگلستان", flag: "🇬🇧", percent: 4 },
                        ].map((item) => (
                          <div key={item.country} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                            <span className="text-2xl">{item.flag}</span>
                            <span className="flex-1 text-gray-700">{item.country}</span>
                            <div className="w-24 h-2 bg-gray-200 rounded-full">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.percent}%` }}
                                className="h-full bg-purple-500 rounded-full"
                              />
                            </div>
                            <span className="font-semibold text-gray-900 w-12 text-left">{item.percent}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">شهرها (ایران)</h4>
                      <div className="space-y-3">
                        {[
                          { city: "تهران", visits: "۳,۲۴۵" },
                          { city: "مشهد", visits: "۱,۱۲۳" },
                          { city: "اصفهان", visits: "۸۹۲" },
                          { city: "شیراز", visits: "۶۵۴" },
                          { city: "تبریز", visits: "۵۴۳" },
                        ].map((item, i) => (
                          <div key={item.city} className="flex items-center justify-between p-3 bg-white rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                {i + 1}
                              </div>
                              <span className="text-gray-700">{item.city}</span>
                            </div>
                            <span className="font-semibold text-gray-900">{item.visits}</span>
                          </div>
                        ))}
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
