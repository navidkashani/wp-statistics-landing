"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Globe,
  TrendingUp,
  Eye,
} from "lucide-react";

const steps = [
  {
    id: "dashboard",
    title: "Your home base",
    icon: LayoutDashboard,
    description:
      "Everything you need to know, right when you log in. Today's visitors, top pages, traffic sources. No digging required.",
    mockData: {
      visitors: "1,247",
      pageviews: "4,892",
      topPage: "/how-to-start-a-blog",
      topSource: "Google",
    },
  },
  {
    id: "visitors",
    title: "Know your visitors",
    icon: Users,
    description:
      "See where your visitors come from, what devices they use, and which browsers they prefer. Understand your audience without invading their privacy.",
    mockData: {
      countries: [
        { name: "United States", percent: 45 },
        { name: "United Kingdom", percent: 18 },
        { name: "Germany", percent: 12 },
        { name: "Canada", percent: 8 },
      ],
    },
  },
  {
    id: "content",
    title: "See what works",
    icon: FileText,
    description:
      "Discover which posts and pages resonate with your audience. Double down on what's working, improve what's not.",
    mockData: {
      pages: [
        { title: "How to Start a Blog in 2024", views: 892 },
        { title: "Best WordPress Themes", views: 654 },
        { title: "SEO Tips for Beginners", views: 521 },
        { title: "WordPress vs Squarespace", views: 443 },
      ],
    },
  },
  {
    id: "referrers",
    title: "Track your sources",
    icon: Globe,
    description:
      "Know exactly how people find you. Search engines, social media, other websites - see where your traffic actually comes from.",
    mockData: {
      sources: [
        { name: "Google", visits: 2341, icon: "search" },
        { name: "Direct", visits: 1892, icon: "direct" },
        { name: "Twitter", visits: 456, icon: "social" },
        { name: "Facebook", visits: 234, icon: "social" },
      ],
    },
  },
];

export default function ProductWalkthrough() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section className="py-24 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2d35] mb-6">
            Here&apos;s how it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No PhD required. No 47-step setup process. Just install and start understanding your visitors.
          </p>
        </motion.div>

        {/* Walkthrough */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Step Selector */}
          <div className="lg:col-span-2 space-y-3">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(step)}
                className={`w-full text-left p-5 rounded-2xl transition-all ${
                  activeStep.id === step.id
                    ? "bg-white shadow-lg border-2 border-[#f4bd4f]"
                    : "bg-white/50 hover:bg-white border-2 border-transparent"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeStep.id === step.id
                        ? "bg-[#f4bd4f] text-[#1d2d35]"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1d2d35] mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{step.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Demo Preview */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Mock Browser Bar */}
              <div className="bg-[#1d2d35] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#2d3d45] rounded-lg px-4 py-1.5 text-gray-400 text-sm">
                    yoursite.com/wp-admin/admin.php?page=wps_overview_page
                  </div>
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="p-8">
                {activeStep.id === "dashboard" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-[#1d2d35]">Overview</h3>
                      <span className="text-sm text-gray-500">Today</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#f7f5f2] rounded-xl p-5">
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">Visitors</span>
                        </div>
                        <p className="text-3xl font-bold text-[#1d2d35]">
                          {activeStep.mockData.visitors}
                        </p>
                      </div>
                      <div className="bg-[#f7f5f2] rounded-xl p-5">
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">Page Views</span>
                        </div>
                        <p className="text-3xl font-bold text-[#1d2d35]">
                          {activeStep.mockData.pageviews}
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#f7f5f2] rounded-xl p-5">
                      <p className="text-sm text-gray-500 mb-2">Top page today</p>
                      <p className="font-semibold text-[#1d2d35]">{activeStep.mockData.topPage}</p>
                    </div>
                  </div>
                )}

                {activeStep.id === "visitors" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#1d2d35] mb-6">Visitor Locations</h3>
                    {activeStep.mockData.countries?.map((country, i) => (
                      <div key={country.name} className="flex items-center gap-4">
                        <span className="w-32 text-sm text-gray-600">{country.name}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${country.percent}%` }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="h-full bg-[#f4bd4f] rounded-full"
                          />
                        </div>
                        <span className="text-sm font-medium text-[#1d2d35] w-12 text-right">
                          {country.percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep.id === "content" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#1d2d35] mb-6">Top Content</h3>
                    {activeStep.mockData.pages?.map((page, i) => (
                      <motion.div
                        key={page.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 bg-[#f7f5f2] rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 bg-[#f4bd4f] rounded-lg flex items-center justify-center text-[#1d2d35] font-bold text-sm">
                            {i + 1}
                          </span>
                          <span className="font-medium text-[#1d2d35]">{page.title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span>{page.views}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeStep.id === "referrers" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#1d2d35] mb-6">Traffic Sources</h3>
                    {activeStep.mockData.sources?.map((source, i) => (
                      <motion.div
                        key={source.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 bg-[#f7f5f2] rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <TrendingUp className="w-5 h-5 text-[#1d2d35]" />
                          </div>
                          <span className="font-medium text-[#1d2d35]">{source.name}</span>
                        </div>
                        <span className="font-semibold text-[#1d2d35]">
                          {source.visits.toLocaleString()} visits
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
