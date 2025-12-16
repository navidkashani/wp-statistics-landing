"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Heart } from "lucide-react";

export default function BasecampCTA() {
  return (
    <section className="py-24 bg-[#1d2d35] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            It&apos;s time for{" "}
            <span className="text-[#f4bd4f]">simpler analytics.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Stop wrestling with complicated tools. Stop worrying about privacy.
            Start understanding your visitors in minutes.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <a
            href="https://wordpress.org/plugins/wp-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-[#f4bd4f] text-[#1d2d35] rounded-full font-bold text-xl hover:bg-[#e5ad40] transition-all"
          >
            Try WP Statistics free
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Free forever. Premium starts at $119/year if you want more.
          </p>
        </motion.div>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: Clock, text: "5-minute setup" },
            { icon: Shield, text: "Privacy-first" },
            { icon: Heart, text: "14 years of trust" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-400">
              <item.icon className="w-5 h-5" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
