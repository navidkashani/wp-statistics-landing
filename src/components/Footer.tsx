"use client";

import { motion } from "framer-motion";
import { BarChart3, Github, Twitter, Heart } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "https://wp-statistics.com/documentation/" },
    { name: "Changelog", href: "https://wordpress.org/plugins/wp-statistics/#developers" },
  ],
  Resources: [
    { name: "Support Forum", href: "https://wordpress.org/support/plugin/wp-statistics/" },
    { name: "GitHub Issues", href: "https://github.com/wp-statistics/wp-statistics/issues" },
    { name: "Blog", href: "https://wp-statistics.com/blog/" },
    { name: "Add-ons", href: "https://wp-statistics.com/add-ons/" },
  ],
  Company: [
    { name: "About", href: "https://wp-statistics.com/about/" },
    { name: "Contact", href: "https://wp-statistics.com/contact/" },
    { name: "Privacy Policy", href: "https://wp-statistics.com/privacy-policy/" },
    { name: "Terms of Service", href: "https://wp-statistics.com/terms/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">WP Statistics</span>
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-sm">
              The most popular privacy-friendly analytics plugin for WordPress.
              Know your visitors without compromising their privacy.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/wp-statistics/wp-statistics"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/wpaborzan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 3 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WP Statistics. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for the WordPress community
          </p>
        </div>
      </div>
    </footer>
  );
}
