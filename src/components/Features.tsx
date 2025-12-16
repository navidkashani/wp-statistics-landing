"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Globe2,
  Shield,
  Zap,
  Users,
  Map,
  Clock,
  MousePointer,
  Search,
  FileText,
  Smartphone,
  Link2,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "No external tracking, no cookies required. All data stays on your server. Fully GDPR, CCPA, and PECR compliant.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Watch your visitors in real-time. See who's on your site right now with live activity tracking.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Globe2,
    title: "Geographic Data",
    description:
      "Know where your visitors come from with detailed country, city, and region statistics.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized code with minimal impact on your site's performance. Load times under 1 second.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Search,
    title: "Search Insights",
    description:
      "Track search engine queries and see what keywords bring visitors to your site.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: FileText,
    title: "Content Analytics",
    description:
      "Discover your most popular pages, posts, and content types with detailed reports.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Link2,
    title: "Referrer Tracking",
    description:
      "See exactly where your traffic comes from with comprehensive referrer analysis.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
  {
    icon: Smartphone,
    title: "Device & Browser",
    description:
      "Understand your audience with device, browser, and operating system statistics.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6"
          >
            Powerful Features
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Understand Your Audience
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive analytics tools that give you deep insights into your
            WordPress site&apos;s performance, all while respecting visitor privacy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-5`}
              >
                <feature.icon
                  className={`w-7 h-7 bg-gradient-to-r ${feature.color} bg-clip-text`}
                  style={{
                    stroke: `url(#gradient-${index})`,
                  }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        className={`text-${feature.color.split("-")[1]}-500`}
                        style={{ stopColor: "currentColor" }}
                      />
                      <stop
                        offset="100%"
                        className={`text-${feature.color.split("-")[3]}-500`}
                        style={{ stopColor: "currentColor" }}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 relative"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  100% Open Source & Free Forever
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-300 mb-8"
                >
                  WP Statistics is completely free and open source. No premium tiers,
                  no feature locks. Get all the analytics power without paying a cent.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    No tracking scripts
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    Self-hosted data
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    Regular updates
                  </div>
                </motion.div>
              </div>

              {/* Code Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-950 rounded-2xl p-6 font-mono text-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-gray-500">$</span> wp plugin install wp-statistics
                  </p>
                  <p className="text-green-400">Installing WP Statistics (14.0)...</p>
                  <p className="text-green-400">Plugin installed successfully.</p>
                  <p>
                    <span className="text-gray-500">$</span> wp plugin activate wp-statistics
                  </p>
                  <p className="text-green-400">Plugin &apos;WP Statistics&apos; activated.</p>
                  <p className="text-blue-400">
                    Success: Start tracking your visitors!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
