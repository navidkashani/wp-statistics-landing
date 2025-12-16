"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "After years of wrestling with Google Analytics, WP Statistics was like a breath of fresh air. I can actually understand my traffic now.",
    author: "Maria Santos",
    role: "Food Blogger",
  },
  {
    text: "No more cookie consent banners. No more privacy concerns. Just simple, clean analytics that respect my visitors.",
    author: "James Miller",
    role: "WordPress Developer",
  },
  {
    text: "Installed it, and 5 minutes later I knew more about my visitors than I did after months with other tools.",
    author: "Sophie Chen",
    role: "E-commerce Owner",
  },
  {
    text: "My clients love that their data stays on their servers. WP Statistics makes privacy-first analytics actually achievable.",
    author: "David Park",
    role: "Agency Owner",
  },
  {
    text: "Finally, analytics that don't require a PhD to understand. The dashboard shows me exactly what I need.",
    author: "Emma Thompson",
    role: "Travel Blogger",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-[#fffef9] border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 mb-2">Loved by 600,000+ WordPress sites</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2d35]">
            Don&apos;t take our word for it.
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div className="relative bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200">
          <div className="text-6xl text-[#ffc800] absolute top-4 left-6">&ldquo;</div>

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center pt-8"
          >
            <blockquote className="text-xl md:text-2xl text-[#1d2d35] leading-relaxed mb-6">
              {testimonials[current].text}
            </blockquote>
            <div>
              <p className="font-bold text-[#1d2d35]">{testimonials[current].author}</p>
              <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-[#ffc800] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-12 text-center"
        >
          {[
            { value: "600K+", label: "Active Installs" },
            { value: "4.9★", label: "Average Rating" },
            { value: "14 yrs", label: "Track Record" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-[#1d2d35]">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
