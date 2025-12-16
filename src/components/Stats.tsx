"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 600000,
    suffix: "+",
    label: "Active Installations",
    description: "WordPress sites trust WP Statistics",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Development",
    description: "Continuously improved since 2010",
  },
  {
    value: 4.5,
    suffix: "/5",
    label: "Star Rating",
    description: "From thousands of happy users",
    decimals: 1,
  },
  {
    value: 100,
    suffix: "%",
    label: "Privacy Compliant",
    description: "GDPR, CCPA, PECR ready",
  },
];

function AnimatedNumber({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = startValue + (value - startValue) * easeOut;

        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-6">
            Trusted Worldwide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powering Analytics for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Millions of Websites
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join the growing community of WordPress users who trust WP Statistics
            for their analytics needs.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 group-hover:border-transparent transition-colors">
                {/* Number */}
                <motion.div
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-500">{stat.description}</p>

                {/* Decorative Element */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative text-center max-w-4xl mx-auto">
              {/* Quote */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto mb-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </motion.svg>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8"
              >
                WP Statistics is the best privacy-focused analytics solution for
                WordPress. It gives us all the insights we need without compromising
                our visitors&apos; privacy or requiring cookie consent banners.
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">John Developer</p>
                  <p className="text-blue-200">WordPress Agency Owner</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
