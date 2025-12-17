"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Gauge,
  Globe,
  FileText,
  Users,
  Search,
  PieChart,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "حریم خصوصی در اولویت",
    description: "تمام داده‌ها روی سرور خودتان ذخیره می‌شود. بدون ردیابی خارجی، بدون نیاز به کوکی.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Gauge,
    title: "آمار لحظه‌ای",
    description: "بازدیدکنندگان آنلاین را در لحظه ببینید و از فعالیت‌های سایت مطلع شوید.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "تحلیل جغرافیایی",
    description: "بدانید بازدیدکنندگان از کدام کشورها و شهرها به سایت شما سر می‌زنند.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: FileText,
    title: "محتوای محبوب",
    description: "پرطرفدارترین صفحات، نوشته‌ها و دسته‌بندی‌های سایت را شناسایی کنید.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Users,
    title: "منابع ترافیک",
    description: "ببینید بازدیدکنندگان از کجا می‌آیند: موتورهای جستجو، شبکه‌های اجتماعی یا لینک مستقیم.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Search,
    title: "کلمات کلیدی جستجو",
    description: "کشف کنید کاربران با چه عباراتی سایت شما را در گوگل پیدا می‌کنند.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: PieChart,
    title: "گزارش‌های جامع",
    description: "آمار مرورگرها، دستگاه‌ها و سیستم‌عامل‌های بازدیدکنندگان را ببینید.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
  {
    icon: Lock,
    title: "سازگار با GDPR",
    description: "بدون نیاز به بنر رضایت کوکی. از ابتدا با قوانین حریم خصوصی سازگار است.",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
  },
];

export default function FeaturesFa() {
  return (
    <section className="py-24 bg-white" id="features" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6"
          >
            ویژگی‌ها
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            هر آنچه برای آنالیز نیاز دارید
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ابزارهای قدرتمند برای درک رفتار بازدیدکنندگان، بدون نگرانی از حریم خصوصی
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group relative p-6 rounded-2xl ${feature.bgColor} border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className={`absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l ${feature.color} rounded-b-2xl origin-right`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
