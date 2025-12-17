"use client";

import { BarChart3, Heart } from "lucide-react";
import Link from "next/link";

export default function ChristmasFooter() {
  return (
    <footer className="bg-[#1a472a] text-green-100 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#c41e3a] rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              WP <span className="text-[#f4d03f]">Statistics</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <a
              href="https://wp-statistics.com/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href="https://wp-statistics.com/support/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Support
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#c41e3a] fill-[#c41e3a]" />
            <span>for WordPress</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-green-200/70">
          <p>© {new Date().getFullYear()} WP Statistics. All rights reserved.</p>
          <p className="mt-2">
            🎄 Christmas offer valid until December 31, 2025. Use code <span className="text-[#f4d03f] font-semibold">CHRISTMAS30</span> at checkout. 🎅
          </p>
        </div>
      </div>
    </footer>
  );
}
