"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function BasecampHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1d2d35] text-white"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/basecamp" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#f4bd4f] rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-[#1d2d35]" />
          </div>
          <span className="text-xl font-bold">WP Statistics</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#how-it-works" className="hover:text-[#f4bd4f] transition-colors">
            How it works
          </a>
          <a href="#features" className="hover:text-[#f4bd4f] transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-[#f4bd4f] transition-colors">
            Pricing
          </a>
          <a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#f4bd4f] text-[#1d2d35] rounded-full font-semibold hover:bg-[#e5ad40] transition-colors"
          >
            Try it free
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
