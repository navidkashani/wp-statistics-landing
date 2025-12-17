"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Shield, Zap } from "lucide-react";

export default function CTAFa() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <BarChart3 className="w-10 h-10 text-white" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            آماده شروع هستید؟
          </h2>

          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            همین الان WP Statistics را نصب کنید و در کمتر از ۵ دقیقه
            آمار سایت وردپرسی خود را ببینید.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/25 transition-all"
          >
            دانلود رایگان از وردپرس
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </motion.a>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12"
          >
            {[
              { icon: Zap, text: "نصب در ۲ دقیقه" },
              { icon: Shield, text: "بدون نیاز به کوکی" },
              { icon: BarChart3, text: "رایگان برای همیشه" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-purple-200">
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
