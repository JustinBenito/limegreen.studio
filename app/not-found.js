"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 translate-y-1/3" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 max-w-2xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-lime-50">
            <Image
              src="/LGS.svg"
              alt="Lime Green Studio"
              width={60}
              height={60}
              className="relative z-10"
            />
            <div className="absolute inset-0 rounded-full bg-lime-400/10" />
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="font-coolvetica text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-200 leading-none mb-4">
            404
          </h1>
          <h2 className="font-coolvetica text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed max-w-lg mx-auto"
        >
          Oops! The page you're looking for seems to have taken a wrong turn.
          Let's get you back on track.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-4 bg-lime-600 text-white rounded-2xl font-sans font-bold text-lg shadow-xl shadow-lime-600/20 hover:shadow-2xl hover:shadow-lime-600/40 hover:bg-lime-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl font-sans font-bold text-lg hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-400 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/blogs"
              className="text-lime-600 hover:text-lime-700 font-medium transition-colors"
            >
              Our Blogs
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/#process"
              className="text-lime-600 hover:text-lime-700 font-medium transition-colors"
            >
              Our Process
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/#start-shipping"
              className="text-lime-600 hover:text-lime-700 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
