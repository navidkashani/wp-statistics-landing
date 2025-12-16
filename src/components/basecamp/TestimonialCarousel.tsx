"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "After years of wrestling with Google Analytics, WP Statistics was like a breath of fresh air. I can actually understand my traffic now.",
    author: "Maria Santos",
    role: "Food Blogger",
    site: "healthyrecipes.com",
  },
  {
    text: "No more cookie consent banners. No more privacy concerns. Just simple, clean analytics that respect my visitors.",
    author: "James Miller",
    role: "WordPress Developer",
    site: "dev agency",
  },
  {
    text: "Installed it, and 5 minutes later I knew more about my visitors than I did after months with other tools.",
    author: "Sophie Chen",
    role: "E-commerce Owner",
    site: "handmade jewelry shop",
  },
  {
    text: "My clients love that their data stays on their servers. WP Statistics makes privacy-first analytics actually achievable.",
    author: "David Park",
    role: "Web Agency Owner",
    site: "15+ client sites",
  },
  {
    text: "Finally, analytics that don't require a PhD to understand. The dashboard shows me exactly what I need, nothing more.",
    author: "Emma Thompson",
    role: "Travel Blogger",
    site: "wanderlustdiaries.com",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#1d2d35] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#f4bd4f] font-semibold mb-4">
            Loved by 600,000+ WordPress sites
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Don&apos;t just take our word for it.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-[#f4bd4f] mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-lg">{testimonials[current].author}</p>
              <p className="text-gray-400">
                {testimonials[current].role} · {testimonials[current].site}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-[#f4bd4f] w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { value: "600K+", label: "Active Installs" },
            { value: "4.9/5", label: "User Rating" },
            { value: "14 yrs", label: "Track Record" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#f4bd4f]">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
