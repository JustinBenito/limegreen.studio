"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const solutions = [
  {
    name: "Product Development Agency",
    tagline: "Your End-to-End Product Development Partner",
    slug: "product-development-agency",
    icon: "🚀",
  },
  {
    name: "Software Development Agency",
    tagline: "Custom Software Solutions Built Right",
    slug: "software-development-agency",
    icon: "💻",
  },
  {
    name: "AI Development Agency",
    tagline: "Intelligent Products Powered by AI",
    slug: "ai-development-agency",
    icon: "🤖",
  },
  {
    name: "Software Product Studio",
    tagline: "Modern Product Building for Startups",
    slug: "software-product-studio",
    icon: "⚡",
  },
  {
    name: "SaaS Development",
    tagline: "Scalable Multi-Tenant SaaS Products",
    slug: "saas-development",
    icon: "☁️",
  },
  {
    name: "ERP Development",
    tagline: "Enterprise Resource Planning Systems",
    slug: "erp-development",
    icon: "🏢",
  },
];

export default function SolutionsShowcase() {
  return (
    <section
      id="solutions"
      className="relative w-full bg-gray-50 py-16 md:py-24 px-4 md:px-8 overflow-hidden border-0"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center mb-14 md:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-lime-600 font-semibold tracking-wide uppercase text-xs md:text-sm"
          >
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
            WHAT WE DO
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
          </motion.div>
          <motion.h2
            className="font-coolvetica tracking-wide text-gray-900 text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
            variants={itemVariants}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-lime-400 to-lime-200 text-gray-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Specialized services designed to bring your ideas to life—from MVPs
            to enterprise systems.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {solutions.map((solution) => (
            <motion.div key={solution.slug} variants={itemVariants}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group block h-full bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-lime-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{solution.icon}</div>

                  {/* Title */}
                  <h3 className="font-coolvetica text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                    {solution.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {solution.tagline}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-lime-600 font-semibold text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/solutions/product-development-agency"
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-lime-600 font-semibold text-base transition-all duration-200"
          >
            Explore all solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
