"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Code, Rocket, BarChart3 } from "lucide-react";

const Process = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const cardRefs = useRef([]);

  const steps = [
    {
      id: "01",
      title: "Discovery & Research",
      description:
        "We dive deep into your market, analyzing competitors and identifying opportunities to ensure a solid foundation.",
      icon: Search,
      week: "Week 1",
    },
    {
      id: "02",
      title: "Development",
      description:
        "Our engineers build your product using scalable, modern tech stacks, focusing on performance and reliability.",
      icon: Code,
      week: "Week 2",
    },
    {
      id: "03",
      title: "Testing & Launch",
      description:
        "Rigorous beta testing ensures a bug-free experience before we deploy your product to the world.",
      icon: Rocket,
      week: "Week 3",
    },
    {
      id: "04",
      title: "Growth Strategy",
      description:
        "We don't just launch; we execute a data-driven marketing plan to acquire your first users and scale.",
      icon: BarChart3,
      week: "Week 4",
    },
  ];

  useEffect(() => {
    // Disable scroll-based hover effect on desktop to prevent "stuck" hover states
    // The CSS :hover state handles interactions on desktop
    if (typeof window !== "undefined" && window.innerWidth >= 768) return;

    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Check if the card is in the center third of the viewport
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const centerStart = viewportHeight * 0.35;
            const centerEnd = viewportHeight * 0.65;
            const cardCenter = rect.top + rect.height / 2;

            if (
              entry.isIntersecting &&
              cardCenter >= centerStart &&
              cardCenter <= centerEnd
            ) {
              setActiveCardIndex(index);
            } else if (activeCardIndex === index) {
              // Only clear if this was the active card
              const stillInCenter =
                cardCenter >= centerStart && cardCenter <= centerEnd;
              if (!stillInCenter) {
                setActiveCardIndex(null);
              }
            }
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: "-35% 0px -35% 0px",
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [activeCardIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="process"
      className="relative w-full py-16 md:py-24 bg-gray-50/50 overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-200/30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-200/30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-20 space-y-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-lime-600 font-semibold tracking-wide uppercase text-sm"
          >
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-coolvetica tracking-wide font-bold text-3xl lg:text-4xl text-gray-900 leading-[1.1]"
          >
            From concept to <br className="hidden md:block" />
            <span className="relative inline-block">
              market-ready
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-lime-300/40 -rotate-1 rounded-full -z-10" />
            </span>{" "}
            in 4 weeks.
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const isActive = activeCardIndex === index;
            return (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`group relative bg-white rounded-[2.5rem] p-8 shadow-sm transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col justify-between min-h-[320px] ${
                  isActive
                    ? "md:shadow-sm md:hover:shadow-xl shadow-xl shadow-lime-500/10"
                    : "md:hover:shadow-xl md:hover:shadow-lime-500/10"
                }`}
                style={{
                  transform: isActive ? "translateY(-8px)" : undefined,
                }}
              >
                {/* Card Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header: Icon & Week */}
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-lime-50 transition-all duration-500 flex items-center justify-center text-lime-600 ${
                        isActive
                          ? "md:group-hover:bg-lime-400 md:group-hover:scale-110 md:group-hover:text-white bg-lime-400 scale-110 text-white"
                          : "md:group-hover:bg-lime-400 md:group-hover:scale-110 md:group-hover:text-white"
                      }`}
                    >
                      <step.icon size={26} strokeWidth={2} />
                    </div>
                    <span
                      className={`px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "md:group-hover:bg-gray-900 md:group-hover:text-white bg-gray-900 text-white"
                          : "md:group-hover:bg-gray-900 md:group-hover:text-white"
                      }`}
                    >
                      {step.week}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h3
                      className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${
                        isActive
                          ? "md:group-hover:text-lime-600 text-lime-600"
                          : "md:group-hover:text-lime-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom visuals */}

                {/* Decorative Big Number */}
                <div
                  className={`absolute -bottom-10 -right-8 text-[10rem] font-bold text-gray-100 pointer-events-none transition-colors duration-500 select-none leading-none ${
                    isActive
                      ? "md:group-hover:text-lime-400 text-lime-400"
                      : "md:group-hover:text-lime-400"
                  }`}
                >
                  {step.id}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
