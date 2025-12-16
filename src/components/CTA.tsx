"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background Gradient Blob */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30"
            />
          </div>

          <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="cta-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                    <circle cx="0.5" cy="0.5" r="0.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#cta-grid)" />
              </svg>
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-8 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Over 600,000+ Active Installations
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Ready to Take Control of
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Your Analytics?
                </span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
              >
                Join thousands of WordPress sites using WP Statistics for privacy-first,
                powerful analytics. Install in seconds, no configuration needed.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="https://wordpress.org/plugins/wp-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download from WordPress.org
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://github.com/wp-statistics/wp-statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </motion.a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>No signup required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>Open source</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
