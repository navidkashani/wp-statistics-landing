"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Lock,
  Eye,
  Server,
  FileCheck,
  UserX,
  Cookie,
  Globe,
  CheckCircle2,
} from "lucide-react";

const privacyFeatures = [
  {
    icon: Cookie,
    title: "No Cookie Consent Required",
    description:
      "Track visitors without setting cookies. No annoying banners, no consent management needed.",
  },
  {
    icon: Server,
    title: "Self-Hosted Data",
    description:
      "All analytics data stays on your server. You own 100% of your data, always.",
  },
  {
    icon: UserX,
    title: "No Personal Data Collection",
    description:
      "By default, no personal information is collected. IP addresses are anonymized.",
  },
  {
    icon: Globe,
    title: "No Third-Party Sharing",
    description:
      "Your visitor data is never shared with any third parties. Period.",
  },
];

const complianceLogos = [
  { name: "GDPR", region: "European Union" },
  { name: "CCPA", region: "California" },
  { name: "PECR", region: "United Kingdom" },
  { name: "LGPD", region: "Brazil" },
];

export default function Privacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              Privacy-First Analytics
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Respect Visitor Privacy.{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                No Compromises.
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              WP Statistics is designed from the ground up with privacy in mind. Get
              meaningful insights without tracking individual users or requiring consent.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Shield Visual */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl blur-3xl opacity-50" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                {/* Shield Icon */}
                <motion.div
                  animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-xl shadow-green-500/30"
                >
                  <Shield className="w-12 h-12 text-white" />
                </motion.div>

                {/* Compliance Badges */}
                <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
                  Fully Compliant With
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {complianceLogos.map((logo, index) => (
                    <motion.div
                      key={logo.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-gray-50 rounded-xl text-center hover:bg-green-50 transition-colors"
                    >
                      <p className="text-2xl font-bold text-gray-900 mb-1">
                        {logo.name}
                      </p>
                      <p className="text-xs text-gray-500">{logo.region}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Check Items */}
                <div className="mt-8 space-y-3">
                  {[
                    "No cross-site tracking",
                    "Data export & erasure ready",
                    "Audit-friendly logging",
                    "Consent plugin compatible",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Lock className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
