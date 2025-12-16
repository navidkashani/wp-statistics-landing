"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Clock, Target } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    role: "Marketing Director",
    company: "TechStartup Inc",
    image: "DC",
    rating: 5,
    text: "The Marketing add-on alone is worth the premium price. We can finally track our UTM campaigns directly in WordPress without sharing data with third parties.",
    metric: { icon: TrendingUp, value: "47%", label: "More conversions tracked" },
  },
  {
    name: "Sarah Mitchell",
    role: "Agency Owner",
    company: "WebCraft Agency",
    image: "SM",
    rating: 5,
    text: "Unlimited sites license was a no-brainer for our agency. We use the white-label feature for client dashboards. They love it, and we save hours every week.",
    metric: { icon: Clock, value: "10hrs", label: "Saved per week" },
  },
  {
    name: "Marcus Rodriguez",
    role: "E-commerce Manager",
    company: "ShopDirect",
    image: "MR",
    rating: 5,
    text: "Real-time stats changed how we handle flash sales. Seeing live visitors and what they're clicking on lets us optimize in real-time. Revenue is up 23%.",
    metric: { icon: Target, value: "23%", label: "Revenue increase" },
  },
];

const caseStudies = [
  {
    company: "Digital Magazine",
    industry: "Publishing",
    before: "Using Google Analytics, privacy concerns",
    after: "Full GDPR compliance, no cookie banners needed",
    result: "Removed cookie consent popup, improved UX, 15% lower bounce rate",
  },
  {
    company: "E-learning Platform",
    industry: "Education",
    before: "Multiple analytics tools, $500/month",
    after: "Single WP Statistics Premium subscription",
    result: "Saved $5,500/year, better insights from unified dashboard",
  },
  {
    company: "Multi-site Network",
    industry: "Media",
    before: "Separate analytics for each of 50 sites",
    after: "One Unlimited license for all sites",
    result: "Centralized reporting, 90% cost reduction vs. per-site tools",
  },
];

export default function PremiumTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Premium Users
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how businesses are growing with WP Statistics Premium
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Metric */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-6 border border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <testimonial.metric.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{testimonial.metric.value}</p>
                    <p className="text-sm text-gray-500">{testimonial.metric.label}</p>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Case Studies</h3>
            <p className="text-gray-400">Real transformations from free to premium</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="mb-4">
                  <p className="text-white font-semibold">{study.company}</p>
                  <p className="text-gray-500 text-sm">{study.industry}</p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-red-400 font-medium mb-1">Before:</p>
                    <p className="text-gray-400">{study.before}</p>
                  </div>
                  <div>
                    <p className="text-green-400 font-medium mb-1">After:</p>
                    <p className="text-gray-400">{study.after}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-amber-400 font-medium mb-1">Result:</p>
                    <p className="text-white">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Users, value: "50,000+", label: "Premium Users" },
            { icon: Star, value: "4.9/5", label: "Average Rating" },
            { icon: TrendingUp, value: "98%", label: "Renewal Rate" },
            { icon: Clock, value: "<2hr", label: "Avg Support Response" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
