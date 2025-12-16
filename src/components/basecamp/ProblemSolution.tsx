"use client";

import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Sparkles } from "lucide-react";

const problems = [
  {
    problem: "Google Analytics is overwhelming",
    detail: "Hundreds of reports, confusing metrics, and a learning curve that never ends.",
  },
  {
    problem: "Third-party tools compromise privacy",
    detail: "Your visitors' data gets sent to external servers, requiring cookie consent banners.",
  },
  {
    problem: "Most analytics feel like overkill",
    detail: "You just want to know who's visiting and what they're reading. Is that too much to ask?",
  },
];

const solutions = [
  {
    solution: "See what matters at a glance",
    detail: "A clean dashboard that shows visitors, pages, referrers. That's it. That's what you need.",
  },
  {
    solution: "Your data stays on your server",
    detail: "No external tracking. No data sharing. GDPR-friendly by design, not by accident.",
  },
  {
    solution: "Works out of the box",
    detail: "Install the plugin, and you're done. Start seeing stats in minutes, not hours.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2d35] mb-6">
            There&apos;s a better way to understand your WordPress site.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most analytics tools are built for data scientists. WP Statistics
            is built for people who just want to know what&apos;s happening on their website.
          </p>
        </motion.div>

        {/* Problem/Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Problems Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d2d35]">The old way</h3>
            </motion.div>

            <div className="space-y-6">
              {problems.map((item, index) => (
                <motion.div
                  key={item.problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-red-50 rounded-2xl border border-red-100"
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d2d35] mb-1">{item.problem}</h4>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d2d35]">The WP Statistics way</h3>
            </motion.div>

            <div className="space-y-6">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.solution}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d2d35] mb-1">{item.solution}</h4>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
