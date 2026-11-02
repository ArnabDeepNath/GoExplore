"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSiteConfig } from "../../lib/site-config";

export default function ToursPage() {
  const { config } = useSiteConfig();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = config.packages.filter((pkg) => {
    const query = searchQuery.toLowerCase();
    return (
      pkg.title.toLowerCase().includes(query) ||
      pkg.location.toLowerCase().includes(query) ||
      pkg.duration.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen pt-20 bg-[#f6f7f2]">
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-50 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider mb-2 block">
              Travel Packages
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              North East Tours & Experiences
            </h1>
            <p className="text-slate-600 text-lg">
              Discover curated itineraries that highlight the beauty of North East India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-sm text-slate-500">
              Showing {filteredPackages.length} curated tours
            </p>
            <div className="relative w-full sm:w-72">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-emerald-50 rounded-full text-sm border-none focus:ring-2 focus:ring-emerald-400 focus:bg-white transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={`${pkg.title}-${index}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-emerald-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{pkg.title}</h3>
                    <span className="text-lg font-medium text-emerald-700">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{pkg.location} · {pkg.duration}</p>
                  <Link
                    href="/booking/"
                    className="block w-full text-center py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-all"
                  >
                    Reserve Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No tours found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}