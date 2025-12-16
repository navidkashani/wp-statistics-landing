"use client";

import { motion } from "framer-motion";
import { BarChart3, Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Premium", href: "/premium" },
    { name: "Documentation", href: "https://wp-statistics.com/documentation/" },
  ],
  Resources: [
    { name: "Blog", href: "https://wp-statistics.com/blog/" },
    { name: "Support", href: "https://wp-statistics.com/support/" },
    { name: "Contact", href: "https://wp-statistics.com/contact/" },
    { name: "Changelog", href: "https://wordpress.org/plugins/wp-statistics/#developers" },
  ],
  Company: [
    { name: "About", href: "https://wp-statistics.com/about/" },
    { name: "Privacy Policy", href: "https://wp-statistics.com/privacy-policy/" },
    { name: "Terms of Service", href: "https://wp-statistics.com/terms-of-service/" },
  ],
};

export default function BasecampFooter() {
  return (
    <footer className="bg-[#f7f5f2] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/basecamp" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1d2d35] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#f4bd4f]" />
              </div>
              <span className="text-xl font-bold text-[#1d2d35]">WP Statistics</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Privacy-friendly analytics for WordPress. Simple, powerful, and
              trusted by 600,000+ websites worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/wp-statistics/wp-statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1d2d35] rounded-full flex items-center justify-center text-white hover:bg-[#2d3d45] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/wp_statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1d2d35] rounded-full flex items-center justify-center text-white hover:bg-[#2d3d45] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://wp-statistics.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1d2d35] rounded-full flex items-center justify-center text-white hover:bg-[#2d3d45] transition-colors"
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-[#1d2d35] mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-[#1d2d35] transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#1d2d35] transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1d2d35] transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
        >
          <p>
            &copy; {new Date().getFullYear()} WP Statistics. Made with care for WordPress.
          </p>
          <p>
            Design inspired by{" "}
            <a
              href="https://basecamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d2d35] hover:underline"
            >
              Basecamp
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
