"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, UserCheck, Zap } from "lucide-react";

const features = [
  {
    title: "AI Analysis",
    description: "Our AI scans every listing for authenticity and automatically generates professional descriptions.",
    icon: BrainCircuit,
  },
  {
    title: "Verified Sellers",
    description: "Every user goes through a multi-step verification process to ensure a secure community.",
    icon: UserCheck,
  },
  {
    title: "Fraud Detection",
    description: "Real-time patterns recognition prevents scams before they even reach your search results.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Match",
    description: "Smart matching algorithms alert you the second a buyer is interested in your item.",
    icon: Zap,
  },
];

export const TrustSection = () => {
  return (
    <section className="py-24 premium-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Built on Trust, Powered by AI</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Experience the most secure marketplace ever built. We use cutting-edge technology to keep your transactions safe and simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
