"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "WordPress Developer",
    company: "DevAgency Pro",
    image: "MT",
    rating: 5,
    text: "WP Statistics is the perfect solution for clients who want analytics without the complexity of Google Analytics. Simple to set up, privacy-compliant, and gives all the insights we need.",
  },
  {
    name: "Sarah Chen",
    role: "Digital Marketing Manager",
    company: "Growth Labs",
    image: "SC",
    rating: 5,
    text: "Finally, an analytics plugin that respects user privacy! We switched from Google Analytics and haven't looked back. The real-time features are fantastic.",
  },
  {
    name: "James Wilson",
    role: "Agency Owner",
    company: "WebCraft Studios",
    image: "JW",
    rating: 5,
    text: "We use WP Statistics on all our client sites. It's lightweight, doesn't slow down websites, and the GDPR compliance means no more cookie consent hassles.",
  },
  {
    name: "Emma Rodriguez",
    role: "Content Strategist",
    company: "ContentFirst Media",
    image: "ER",
    rating: 5,
    text: "The content analytics features are amazing. I can see exactly which posts perform best, track author performance, and make data-driven decisions about our content strategy.",
  },
  {
    name: "David Park",
    role: "E-commerce Manager",
    company: "ShopSmart Inc",
    image: "DP",
    rating: 5,
    text: "For our WooCommerce store, WP Statistics gives us valuable insights without the overhead of external tracking services. The geographic data helps us understand our customer base.",
  },
  {
    name: "Lisa Anderson",
    role: "Blogger",
    company: "TechInsights Blog",
    image: "LA",
    rating: 5,
    text: "As a solo blogger, I love how simple WP Statistics is. I can quickly see what's working without getting overwhelmed by complex dashboards. Highly recommended!",
  },
];

const stats = [
  { value: "600K+", label: "Active Installations" },
  { value: "4.5/5", label: "Average Rating" },
  { value: "1000+", label: "5-Star Reviews" },
  { value: "10+", label: "Years Trusted" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Loved by Users
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              600,000+ Websites
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            See what WordPress users around the world are saying about WP Statistics
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          {/* Featured Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Background Quote */}
            <Quote className="absolute top-8 right-8 w-24 h-24 text-purple-100" />

            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {testimonials[currentIndex].image}
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-purple-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors shadow-sm"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
