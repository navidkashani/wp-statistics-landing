"use client";

import { motion } from "framer-motion";
import { Shield, Server, Cookie, FileCheck, Lock, Eye } from "lucide-react";

const privacyFeatures = [
  {
    icon: Server,
    title: "داده روی سرور شما",
    description: "تمام اطلاعات آماری روی سرور خودتان ذخیره می‌شود، نه سرورهای خارجی.",
  },
  {
    icon: Cookie,
    title: "بدون کوکی",
    description: "نیازی به کوکی نیست. بدون نیاز به بنر رضایت کوکی.",
  },
  {
    icon: FileCheck,
    title: "سازگار با GDPR",
    description: "از ابتدا با قوانین حفاظت از داده اروپا و سایر مقررات سازگار است.",
  },
  {
    icon: Lock,
    title: "بدون اشتراک‌گذاری",
    description: "داده‌های شما هرگز با شرکت‌های تبلیغاتی یا سرویس‌های ثالث به اشتراک گذاشته نمی‌شود.",
  },
  {
    icon: Eye,
    title: "شفافیت کامل",
    description: "کد متن‌باز است. می‌توانید دقیقاً ببینید چه داده‌ای جمع‌آوری می‌شود.",
  },
  {
    icon: Shield,
    title: "کنترل کامل",
    description: "هر زمان بخواهید می‌توانید داده‌ها را پاک کنید یا ناشناس‌سازی فعال کنید.",
  },
];

export default function PrivacyFa() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800" id="privacy" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              حریم خصوصی در اولویت
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              آنالیز بدون نگرانی از{" "}
              <span className="text-green-400">حریم خصوصی</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              برخلاف گوگل آنالیتیکس و سرویس‌های مشابه، WP Statistics داده‌های بازدیدکنندگان را
              به سرورهای خارجی ارسال نمی‌کند. همه چیز روی سرور خودتان می‌ماند.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl p-8 border border-green-500/20">
              {/* Comparison */}
              <div className="space-y-6">
                {/* Other Analytics */}
                <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-400 text-xl">✗</span>
                    </div>
                    <h4 className="text-white font-semibold">سرویس‌های دیگر</h4>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      ارسال داده به سرورهای خارجی
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      نیاز به کوکی و بنر رضایت
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      اشتراک‌گذاری با تبلیغ‌دهندگان
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      کد بسته و غیرشفاف
                    </li>
                  </ul>
                </div>

                {/* WP Statistics */}
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-xl">✓</span>
                    </div>
                    <h4 className="text-white font-semibold">WP Statistics</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      داده‌ها روی سرور خودتان
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      بدون نیاز به کوکی
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      بدون اشتراک‌گذاری با هیچ‌کس
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      کد متن‌باز و قابل بررسی
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
