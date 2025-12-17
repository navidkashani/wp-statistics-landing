"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ChristmasHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a472a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#c41e3a] rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              WP <span className="text-[#f4d03f]">Statistics</span>
            </span>
          </Link>

          {/* Christmas badge */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#c41e3a] rounded-full shadow-lg">
            <span className="text-lg">🎄</span>
            <span className="text-white text-sm font-semibold">Christmas Sale - 30% OFF</span>
            <span className="text-lg">🎅</span>
          </div>

          {/* CTA */}
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#f4d03f] text-[#1a472a] rounded-full font-bold text-sm shadow-lg hover:bg-[#e5c235] transition-colors"
          >
            Get 30% Off
          </motion.a>
        </div>
      </div>
    </header>
  );
}
