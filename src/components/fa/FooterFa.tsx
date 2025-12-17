"use client";

import { motion } from "framer-motion";
import { BarChart3, Github, Twitter, Mail, Heart } from "lucide-react";
import Link from "next/link";

const footerLinks: Record<string, { name: string; href: string; external?: boolean }[]> = {
  محصول: [
    { name: "ویژگی‌ها", href: "#features" },
    { name: "قیمت‌گذاری", href: "#pricing" },
    { name: "پرمیوم", href: "/premium" },
    { name: "دموی داشبورد", href: "#dashboard-demo" },
  ],
  منابع: [
    { name: "مستندات", href: "https://wp-statistics.com/documentation/", external: true },
    { name: "پشتیبانی", href: "https://wp-statistics.com/support/", external: true },
    { name: "بلاگ", href: "https://wp-statistics.com/blog/", external: true },
    { name: "تغییرات نسخه", href: "https://wordpress.org/plugins/wp-statistics/#developers", external: true },
  ],
  شرکت: [
    { name: "درباره ما", href: "https://wp-statistics.com/about/", external: true },
    { name: "تماس با ما", href: "https://wp-statistics.com/contact/", external: true },
    { name: "حریم خصوصی", href: "https://wp-statistics.com/privacy-policy/", external: true },
  ],
};

export default function FooterFa() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/fa" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                WP <span className="text-purple-400">Statistics</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              آنالیز وردپرس با حفظ حریم خصوصی. ساده، قدرتمند و مورد اعتماد
              بیش از ۶۰۰,۰۰۰ وب‌سایت در سراسر جهان.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/wp-statistics/wp-statistics"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/wp_statistics"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wp-statistics.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="hover:text-purple-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-purple-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} WP Statistics. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>ساخته شده با</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>برای جامعه وردپرس</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:text-purple-400 transition-colors">
                English
              </Link>
              <Link href="/basecamp" className="hover:text-purple-400 transition-colors">
                Basecamp Style
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
