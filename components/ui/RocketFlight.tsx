"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const RocketFlight = () => {
    // Track global window scroll
    const { scrollYProgress } = useScroll();

    // Map scroll progress (0 to 1) to viewport coordinates
    // Fly from Bottom-Left to Top-Right
    const x = useTransform(scrollYProgress, [0, 1], ["-10vw", "110vw"]);
    const y = useTransform(scrollYProgress, [0, 1], ["110vh", "-20vh"]);

    // Rotate to match trajectory (45deg for up-right diagonal)
    const rotate = useTransform(scrollYProgress, [0, 1], [45, 45]);

    // Subtle scale breathing
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <div
            className="hidden md:block fixed inset-0 pointer-events-none z-40 overflow-hidden"
            aria-hidden="true"
        >
            <motion.div
                className="absolute w-24 h-24 md:w-32 md:h-32"
                style={{ x, y, rotate, scale }}
            >
                {/* Minimal Geometric Rocket SVG */}
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-xl"
                >
                    {/* Main Body - Sleek geometric fuselage */}
                    <path
                        d="M50 15 C50 15 70 50 70 70 C70 80 50 90 50 90 C50 90 30 80 30 70 C30 50 50 15 50 15Z"
                        fill="white"
                        stroke="#111827"
                        strokeWidth="2"
                        className="dark:stroke-white dark:fill-gray-900"
                    />

                    {/* Cockpit Window - Lime accent */}
                    <circle cx="50" cy="50" r="6" fill="#A3E635" />

                    {/* Fins - Sharp triangles */}
                    <path d="M30 70 L15 85 L35 80 Z" fill="#111827" opacity="0.9" />
                    <path d="M70 70 L85 85 L65 80 Z" fill="#111827" opacity="0.9" />

                    {/* Center Thruster */}
                    <path d="M45 90 L50 95 L55 90" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

                    {/* Exhaust Trail - Subtle Lime Glow */}
                    <defs>
                        <linearGradient id="exhaust" x1="50" y1="95" x2="50" y2="120" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#A3E635" stopOpacity="0.6" />
                            <stop offset="1" stopColor="#A3E635" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M48 92 L50 115 L52 92" fill="url(#exhaust)" />
                </svg>
            </motion.div>
        </div>
    );
};

export default RocketFlight;
