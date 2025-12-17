"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "آیا WP Statistics واقعاً رایگان است؟",
    answer: "بله! نسخه اصلی افزونه کاملاً رایگان است و تمام ویژگی‌های اساسی را شامل می‌شود. نسخه پرمیوم برای کسانی است که به ویژگی‌های پیشرفته‌تر نیاز دارند.",
  },
  {
    question: "آیا نیاز به ثبت‌نام در سرویس خارجی دارم؟",
    answer: "خیر! برخلاف گوگل آنالیتیکس، نیازی به ثبت‌نام در هیچ سرویس خارجی نیست. افزونه را نصب کنید و بلافاصله شروع به کار می‌کند.",
  },
  {
    question: "آیا سرعت سایت را کم می‌کند؟",
    answer: "خیر. WP Statistics بسیار سبک طراحی شده و تأثیر ناچیزی روی سرعت سایت دارد. همچنین با افزونه‌های کش سازگار است.",
  },
  {
    question: "آیا با قوانین GDPR سازگار است؟",
    answer: "بله! چون داده‌ها روی سرور خودتان ذخیره می‌شود و نیازی به کوکی نیست، به‌صورت پیش‌فرض با GDPR و سایر قوانین حریم خصوصی سازگار است.",
  },
  {
    question: "آیا می‌توانم بازدیدهای خودم را حذف کنم؟",
    answer: "بله! می‌توانید بازدیدهای ادمین‌ها، نویسندگان یا هر نقش کاربری دیگر را از آمار حذف کنید. همچنین می‌توانید IP خاصی را مستثنی کنید.",
  },
  {
    question: "چه تفاوتی با گوگل آنالیتیکس دارد؟",
    answer: "تفاوت اصلی در حریم خصوصی است. در گوگل آنالیتیکس داده‌ها به سرورهای گوگل ارسال می‌شود، اما در WP Statistics همه چیز روی سرور شما می‌ماند.",
  },
  {
    question: "آیا از وردپرس چندسایتی پشتیبانی می‌کند؟",
    answer: "بله! WP Statistics به‌صورت کامل از شبکه چندسایتی وردپرس پشتیبانی می‌کند و می‌توانید آمار هر سایت را جداگانه ببینید.",
  },
  {
    question: "چگونه می‌توانم داده‌ها را اکسپورت کنم؟",
    answer: "از بخش تنظیمات افزونه می‌توانید داده‌ها را به فرمت CSV خروجی بگیرید. در نسخه پرمیوم امکان گزارش‌های PDF نیز وجود دارد.",
  },
];

export default function FAQFa() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq" dir="rtl">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            سوالات متداول
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            پاسخ سوالات شما
          </h2>
          <p className="text-xl text-gray-600">
            سوال دیگری دارید؟{" "}
            <a
              href="https://wp-statistics.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:underline"
            >
              با ما تماس بگیرید
            </a>
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pl-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
