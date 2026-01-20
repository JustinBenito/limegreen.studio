"use client";
import BlogCard from "@/app/components/cards/BlogCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function CaseStudiesClient({ blogs }) {
  const allBlogs = blogs.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Extract unique tags
  const allTags = [...new Set(allBlogs.flatMap((blog) => blog.tags || []))];

  const [selectedTag, setSelectedTag] = useState("all");

  // Filter blogs based on selected tag
  const filteredBlogs =
    selectedTag === "all"
      ? allBlogs
      : allBlogs.filter((blog) => blog.tags?.includes(selectedTag));

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-grow pt-12 pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Logo Header */}
          <div className="flex justify-center mb-16 -ml-40 md:-ml-64">
            <Link
              href="/"
              className="group flex items-center gap-4 px-5 py-2 bg-white border border-lime-200 rounded-full shadow-xl shadow-lime-900/5 transition-all duration-500 ease-out"
            >
              <ArrowLeft className="w-4 h-4 text-lime-500 -translate-x-1 transition-all duration-500" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-lime-600 uppercase tracking-widest leading-none mb-1 transition-colors duration-500">
                  Return to
                </span>
                <span className="text-sm font-coolvetica font-bold text-gray-900 leading-none">
                  Home Page
                </span>
              </div>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-lime-50 transition-colors duration-500">
                <Image
                  src="/LGS.svg"
                  alt="Lime Green Studio"
                  width={24}
                  height={24}
                  className="relative z-10"
                />
                <div className="absolute inset-0 rounded-full bg-lime-400/10 transition-colors duration-500" />
              </div>
            </Link>
          </div>

          {/* Hero / Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-semibold mb-6">
              Real Projects, Real Results
            </div>
            <h1 className="font-coolvetica text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Case <span className="text-lime-600">Studies</span>
            </h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              See how we've helped founders build and ship products that solve
              real problems.
            </p>
          </div>

          {/* Filter Tags */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setSelectedTag("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === "all"
                    ? "bg-lime-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Projects
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTag === tag
                      ? "bg-lime-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 place-items-start">
            {filteredBlogs.map((blog) => (
              <div key={blog.slug} className="w-full h-full">
                <BlogCard {...blog} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p>
                No case studies found for this filter. Try selecting a
                different tag.
              </p>
            </div>
          )}

          {/* Stats Section */}
          {allBlogs.length > 0 && (
            <div className="mt-20 pt-16 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">
                    {allBlogs.length}+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Products Shipped
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">
                    4 Weeks
                  </div>
                  <div className="text-gray-600 font-medium">
                    Average Time to Launch
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-lime-500 to-lime-600 rounded-3xl p-12 md:p-16 text-white">
            <h2 className="font-coolvetica text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Build Your Product?
            </h2>
            <p className="text-xl text-lime-50 mb-8 max-w-2xl mx-auto">
              Join the founders who've shipped products with us. Let's turn your
              idea into reality.
            </p>
            <Link
              href="/#start-shipping"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-lime-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
