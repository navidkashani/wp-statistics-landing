"use client";

import { BarChart3, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function BasecampFooter() {
  return (
    <footer className="bg-[#fffef9] py-12 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <Link href="/basecamp" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1d2d35] rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-[#ffc800]" />
            </div>
            <span className="font-bold text-[#1d2d35]">WP Statistics</span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-[#1d2d35] transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-[#1d2d35] transition-colors">
              Pricing
            </a>
            <Link href="/premium" className="hover:text-[#1d2d35] transition-colors">
              Premium
            </Link>
            <a
              href="https://wp-statistics.com/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1d2d35] transition-colors"
            >
              Docs
            </a>
            <a
              href="https://wp-statistics.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1d2d35] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} WP Statistics. Privacy-first analytics for WordPress.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/wp-statistics/wp-statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d2d35] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/wp_statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d2d35] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <span className="text-gray-300">|</span>
              <span>
                Design inspired by{" "}
                <a
                  href="https://basecamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1d2d35] hover:underline"
                >
                  Basecamp
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
