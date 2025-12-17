"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Check, Copy } from "lucide-react";

interface CouponCodeProps {
  variant?: "light" | "dark";
}

export default function CouponCode({ variant = "light" }: CouponCodeProps) {
  const [copied, setCopied] = useState(false);
  const code = "CHRISTMAS30";

  // Pre-generate values with deterministic calculations to avoid hydration mismatch
  const snowflakes = useMemo(() => {
    return [...Array(80)].map((_, i) => ({
      size: 4 + (i % 12),
      left: (i * 1.25) % 100,
      duration: 3 + (i % 3),
      delay: (i % 3),
      xOffset: -100 + (i * 2.5) % 200,
    }));
  }, []);

  const gifts = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      duration: 4 + (i % 3),
      xOffset: -5 + (i % 10),
    }));
  }, []);

  const streamers = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      width: 20 + (i % 20),
      height: 60 + (i % 40),
    }));
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      // Fallback for environments where clipboard API doesn't work
      console.log("Clipboard API not available, but showing animation anyway");
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 6000);
  };

  const borderColor = variant === "light" ? "border-[#c41e3a]" : "border-[#1a472a]";
  const textColor = variant === "light" ? "text-[#c41e3a]" : "text-[#1a472a]";

  return (
    <>
      {/* Full screen celebration overlay */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-hidden pointer-events-auto"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Dark backdrop */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(196,30,58,0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Giant Santa flying across - MUCH BIGGER */}
            <motion.div
              className="absolute whitespace-nowrap"
              style={{ top: "20%", fontSize: "clamp(80px, 15vw, 200px)" }}
              initial={{ x: "-400px", y: 0 }}
              animate={{
                x: ["calc(-400px)", "calc(100vw + 400px)"],
                y: [0, -50, 0, -40, 0, -30, 0],
              }}
              transition={{
                x: { duration: 4, ease: [0.25, 0.1, 0.25, 1] },
                y: { duration: 0.6, repeat: 6, ease: "easeInOut" }
              }}
            >
              {/* Sleigh and Santa */}
              <div className="relative inline-flex items-center">
                <span className="inline-block transform -scale-x-100 drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]">🛷</span>
                <span className="inline-block ml-[-20px] drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]">🎅</span>
                <span className="inline-block drop-shadow-[0_0_20px_rgba(139,69,19,0.8)]">🦌</span>
                <span className="inline-block drop-shadow-[0_0_20px_rgba(139,69,19,0.8)]">🦌</span>
                <span className="inline-block drop-shadow-[0_0_20px_rgba(139,69,19,0.8)]">🦌</span>

                {/* Magic trail */}
                {[...Array(15)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute"
                    style={{
                      left: -30 - i * 40,
                      top: "50%",
                      fontSize: "clamp(20px, 4vw, 50px)",
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5],
                      y: [-20, 20, -20],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.08,
                    }}
                  >
                    {["✨", "⭐", "💫", "🌟"][i % 4]}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Giant "Ho Ho Ho!" bouncing text */}
            <motion.div
              className="absolute top-[35%] left-1/2 transform -translate-x-1/2"
              initial={{ scale: 0, rotate: -20, y: 100 }}
              animate={{
                scale: 1.1,
                rotate: 0,
                y: 0,
              }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-center"
              >
                <span
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-white"
                  style={{
                    textShadow: "0 0 40px #c41e3a, 0 0 80px #c41e3a, 0 0 120px #c41e3a, 0 4px 0 #8b0000",
                  }}
                >
                  HO HO HO!
                </span>
              </motion.div>
            </motion.div>

            {/* Big Success Card */}
            <motion.div
              className="absolute top-[55%] left-1/2 transform -translate-x-1/2"
              initial={{ scale: 0, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="bg-white rounded-3xl px-12 py-8 shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                animate={{
                  boxShadow: [
                    "0 0 60px rgba(255,255,255,0.5)",
                    "0 0 100px rgba(244,208,63,0.8)",
                    "0 0 60px rgba(255,255,255,0.5)",
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <p className="text-3xl md:text-5xl font-bold text-[#1a472a] flex items-center gap-4">
                  <motion.span
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-5xl md:text-6xl"
                  >
                    🎁
                  </motion.span>
                  <span>Code Copied!</span>
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                    className="text-green-500 text-5xl md:text-6xl"
                  >
                    ✓
                  </motion.span>
                </p>
              </motion.div>
            </motion.div>

            {/* Massive falling gifts */}
            {gifts.map((gift, i) => (
              <motion.div
                key={`gift-${i}`}
                className="absolute"
                style={{ fontSize: "clamp(40px, 8vw, 100px)" }}
                initial={{
                  x: `${5 + i * 8}vw`,
                  y: "-150px",
                  rotate: 0,
                }}
                animate={{
                  y: "120vh",
                  rotate: [0, 360, 720, 1080],
                  x: `${5 + i * 8 + gift.xOffset}vw`,
                }}
                transition={{
                  duration: gift.duration,
                  delay: 0.3 + i * 0.2,
                  ease: "easeIn"
                }}
              >
                <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  {["🎁", "🎀", "🎄", "⭐", "🔔", "❄️", "🎁", "✨", "🎊", "🎉", "💝", "🌟"][i]}
                </span>
              </motion.div>
            ))}

            {/* Heavy snow */}
            {snowflakes.map((flake, i) => (
              <motion.div
                key={`snow-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: flake.size,
                  height: flake.size,
                  left: `${flake.left}%`,
                  top: "-20px",
                  boxShadow: "0 0 10px white",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0.5],
                  y: "120vh",
                  x: flake.xOffset,
                }}
                transition={{
                  duration: flake.duration,
                  delay: flake.delay,
                  ease: "linear"
                }}
              />
            ))}

            {/* Big fireworks */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`firework-${i}`}
                className="absolute"
                style={{
                  left: `${10 + i * 11}%`,
                  top: `${20 + (i % 3) * 15}%`,
                }}
              >
                {/* Firework center */}
                <motion.div
                  className="absolute w-8 h-8 rounded-full"
                  style={{ backgroundColor: ["#c41e3a", "#f4d03f", "#1a472a", "#ff6b6b"][i % 4] }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: [0, 2, 0], opacity: [1, 1, 0] }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.3 }}
                />

                {/* Firework rays */}
                {[...Array(16)].map((_, j) => {
                  const angle = (j / 16) * Math.PI * 2;
                  const colors = ["#c41e3a", "#f4d03f", "#1a472a", "#ff6b6b", "#4ecdc4", "#ff9f43"];
                  return (
                    <motion.div
                      key={j}
                      className="absolute rounded-full"
                      style={{
                        width: 12,
                        height: 12,
                        backgroundColor: colors[j % colors.length],
                        boxShadow: `0 0 20px ${colors[j % colors.length]}`,
                      }}
                      initial={{ x: 0, y: 0, scale: 0 }}
                      animate={{
                        x: Math.cos(angle) * 150,
                        y: Math.sin(angle) * 150,
                        scale: [0, 1.5, 0],
                        opacity: [1, 1, 0],
                      }}
                      transition={{ duration: 1, delay: 1 + i * 0.2 }}
                    />
                  );
                })}
              </motion.div>
            ))}

            {/* Side streamers */}
            {streamers.map((streamer, i) => {
              const colors = ["#c41e3a", "#1a472a", "#f4d03f", "#ff6b6b", "#4ecdc4"];
              const fromLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`streamer-${i}`}
                  className="absolute"
                  style={{
                    width: streamer.width,
                    height: streamer.height,
                    backgroundColor: colors[i % colors.length],
                    borderRadius: "10px",
                    left: fromLeft ? "-50px" : "auto",
                    right: fromLeft ? "auto" : "-50px",
                    top: `${10 + (i * 4)}%`,
                    boxShadow: `0 0 20px ${colors[i % colors.length]}`,
                  }}
                  initial={{ x: 0, rotate: 0 }}
                  animate={{
                    x: fromLeft ? "120vw" : "-120vw",
                    rotate: [0, 360, 720, 1080],
                    y: [0, -100, 100, -50, 150],
                  }}
                  transition={{
                    duration: 4,
                    delay: 0.3 + i * 0.15,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {/* Click to close hint */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <p className="text-white/70 text-lg">Animation ends in a few seconds...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coupon button */}
      <motion.button
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative bg-white rounded-2xl px-8 py-4 shadow-xl border-4 border-dashed ${borderColor} cursor-pointer transition-all hover:shadow-2xl group`}
      >
        {/* Content */}
        <motion.div
          className="relative z-10"
          animate={copied ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 text-sm mb-1 flex items-center justify-center gap-2">
            {copied ? (
              <motion.span
                className="flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-green-600 font-semibold">Santa delivered your code!</span>
              </motion.span>
            ) : (
              <>
                <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span>Click to copy code</span>
              </>
            )}
          </p>
          <motion.p
            className={`text-3xl font-bold ${textColor} tracking-wider`}
            animate={copied ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            {code}
          </motion.p>
        </motion.div>
      </motion.button>
    </>
  );
}
