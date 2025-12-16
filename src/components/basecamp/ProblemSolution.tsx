"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white border-b border-gray-200" id="how-it-works">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2d35] mb-4">
            Let&apos;s walk through it.
          </h2>
          <p className="text-xl text-gray-600">
            Here&apos;s what makes WP Statistics different from the rest.
          </p>
        </motion.div>

        {/* Feature Blocks - Basecamp Style */}
        <div className="space-y-16">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-shrink-0 text-5xl">📊</div>
            <div>
              <h3 className="text-xl font-bold text-[#1d2d35] mb-3">
                Your dashboard — <span className="bg-[#ffc800] px-1">everything in one place</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No more jumping between screens. See today&apos;s visitors, top pages,
                traffic sources, and trends all on one clean dashboard. It&apos;s like
                having a bird&apos;s eye view of your entire site.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-shrink-0 text-5xl">🔒</div>
            <div>
              <h3 className="text-xl font-bold text-[#1d2d35] mb-3">
                Privacy-first — <span className="bg-[#ffc800] px-1">no cookie banners needed</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data stays on your server. Period. No external tracking, no data
                sharing, no cookies required. GDPR compliance without the headache of
                consent popups ruining your site.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-shrink-0 text-5xl">⚡</div>
            <div>
              <h3 className="text-xl font-bold text-[#1d2d35] mb-3">
                Real-time stats — <span className="bg-[#ffc800] px-1">watch visitors live</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See who&apos;s on your site right now. What pages they&apos;re viewing, where
                they came from, what device they&apos;re using. It&apos;s like having a window
                into your website&apos;s activity.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-shrink-0 text-5xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-[#1d2d35] mb-3">
                Content insights — <span className="bg-[#ffc800] px-1">know what&apos;s working</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover which posts resonate with your audience. Track authors,
                categories, and individual pages. Double down on what works,
                improve what doesn&apos;t.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
