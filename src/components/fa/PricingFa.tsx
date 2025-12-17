"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "رایگان",
    price: "۰",
    period: "برای همیشه",
    description: "همه ویژگی‌های اصلی برای شروع",
    features: [
      "بازدید نامحدود",
      "آمار لحظه‌ای",
      "موقعیت جغرافیایی بازدیدکنندگان",
      "صفحات پربازدید",
      "منابع ترافیک",
      "کلمات کلیدی جستجو",
      "آمار مرورگر و دستگاه",
      "سازگار با GDPR",
    ],
    cta: "دانلود رایگان",
    href: "https://wordpress.org/plugins/wp-statistics/",
    highlighted: false,
  },
  {
    name: "پرمیوم",
    price: "۱۱۹",
    period: "دلار / سالانه",
    description: "تمام افزونه‌ها و پشتیبانی اولویت‌دار",
    features: [
      "همه ویژگی‌های رایگان",
      "۸ افزونه پرمیوم",
      "ردیابی کمپین بازاریابی",
      "گزارش‌های پیشرفته",
      "آمار انواع محتوا",
      "API کامل",
      "امکان White-label",
      "پشتیبانی اولویت‌دار",
    ],
    cta: "خرید پرمیوم",
    href: "/premium",
    highlighted: true,
  },
];

export default function PricingFa() {
  return (
    <section className="py-24 bg-gray-50" id="pricing" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            قیمت‌گذاری
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ساده و شفاف
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            با نسخه رایگان شروع کنید. هر زمان خواستید به پرمیوم ارتقا دهید.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 right-8">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-400 text-gray-900 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    محبوب‌ترین
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {plan.highlighted && <Crown className="w-5 h-5 text-amber-400" />}
                  <h3 className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className={plan.highlighted ? "text-purple-200" : "text-gray-600"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price === "۰" ? "رایگان" : `$${plan.price}`}
                </span>
                {plan.price !== "۰" && (
                  <span className={plan.highlighted ? "text-purple-200" : "text-gray-500"}>
                    {" "}/ {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? "bg-white/20" : "bg-green-100"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-green-600"}`} />
                    </div>
                    <span className={plan.highlighted ? "text-purple-100" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.href.startsWith("/") ? (
                <Link
                  href={plan.href}
                  className={`block w-full text-center py-4 rounded-full font-bold text-lg transition-all ${
                    plan.highlighted
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              ) : (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-full font-bold text-lg transition-all ${
                    plan.highlighted
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-8"
        >
          ۱۴ روز ضمانت بازگشت وجه برای پرمیوم. بدون هیچ سوالی.
        </motion.p>
      </div>
    </section>
  );
}
