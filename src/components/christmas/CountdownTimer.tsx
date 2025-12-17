"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 bg-[#c41e3a]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-3xl">⏰</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Hurry! Offer Expires In
            </h2>
            <span className="text-3xl">🎅</span>
          </div>

          {/* Countdown */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {timeBlocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="w-24 md:w-32 h-28 md:h-36 bg-white rounded-2xl flex flex-col items-center justify-center shadow-xl">
                  <motion.span
                    key={block.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold text-[#1a472a]"
                  >
                    {String(block.value).padStart(2, "0")}
                  </motion.span>
                  <span className="text-[#c41e3a] text-sm mt-2 font-semibold">{block.label}</span>
                </div>
                {index < timeBlocks.length - 1 && (
                  <span className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 text-3xl text-white font-bold">
                    :
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Urgency message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/90 text-lg"
          >
            <span className="font-bold">Don&apos;t miss out!</span> This exclusive Christmas discount ends December 31st 🎄
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
