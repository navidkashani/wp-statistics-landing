"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function BasecampHeader() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#1d2d35]"
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/basecamp" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#ffc800] rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-[#1d2d35]" />
          </div>
          <span className="text-lg font-bold text-white">WP Statistics</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="#before-after" className="hover:text-white transition-colors">
            Before & After
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Sign in
          </a>
        </div>

        <a
          href="https://wordpress.org/plugins/wp-statistics/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#ffc800] text-[#1d2d35] rounded-full font-bold text-sm hover:bg-[#e6b400] transition-colors"
        >
          Try it free
        </a>
      </nav>
    </motion.header>
  );
}
