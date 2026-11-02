"use client";

import Link from "next/link";

const heroChips = ["Popular", "Customizable", "All Inclusive"];

const whyChooseUs = [
  {
    title: "Flexible Packages",
    description: "Customize trips via admin settings to match your travel style.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "24/7 Local Support",
    description: "We are always here to help you before and during your trip.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8a6 6 0 00-12 0v5a6 6 0 0012 0V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16v4" />
      </svg>
    ),
  },
  {
    title: "Trusted Operators",
    description: "Verified partners and hosts for safe, curated experiences.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Best Value",
    description: "No hidden fees, just transparent pricing for every package.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v2m0 12v2" />
      </svg>
    ),
  },
];

const featuredPackages = [
  {
    title: "Munnar Hill Station Escape",
    location: "Kerala, India",
    duration: "3 Days / 2 Nights · Guided",
    price: "$120",
    rating: "4.8",
    tags: ["Best Seller", "Customizable"],
    image: "/r1.jpg",
  },
  {
    title: "Goa Beach & Adventure",
    location: "Goa, India",
    duration: "4 Days / 3 Nights · Adventure",
    price: "$150",
    rating: "4.9",
    tags: ["Family Friendly"],
    image: "/r2.jpg",
  },
  {
    title: "Heritage Rajasthan Tour",
    location: "Jaipur, India",
    duration: "5 Days / 4 Nights · Heritage",
    price: "$180",
    rating: "4.7",
    tags: ["Weekend Getaway"],
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Himalayan Trek Retreat",
    location: "Himachal, India",
    duration: "6 Days / 5 Nights · Trek",
    price: "$220",
    rating: "4.8",
    tags: ["Adventure", "Guided"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Kerala Backwater Escape",
    location: "Alleppey, India",
    duration: "2 Days / 1 Night · Cruise",
    price: "$95",
    rating: "4.6",
    tags: ["Relax"],
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heritage Homestay Trails",
    location: "Udaipur, India",
    duration: "3 Days / 2 Nights · Stay",
    price: "$110",
    rating: "4.7",
    tags: ["Customizable"],
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  { value: "1,200+", label: "Packages" },
  { value: "50k+", label: "Happy Travelers" },
  { value: "150+", label: "Destinations" },
  { value: "24/7", label: "Customer Care" },
];

export default function Home() {
  return (
    <main className="bg-[#f5f7f2] text-slate-900">
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#edf6ef] via-[#f6f7f2] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-white text-emerald-700 border border-emerald-100"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">
              Discover Your Next Adventure
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold">Book Your Perfect Getaway</h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl">
              Affordable travel, curated packages, and personalized service tailored to explorers like you.
            </p>
            <div className="w-full max-w-4xl bg-white/90 shadow-xl rounded-2xl p-4 md:p-5">
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <div className="flex-1 w-full md:border-r border-slate-200 md:pr-4">
                  <p className="text-xs text-slate-500 mb-1">Where to?</p>
                  <input
                    className="w-full bg-transparent text-sm font-medium focus:outline-none"
                    placeholder="Search destination"
                  />
                </div>
                <div className="flex-1 w-full md:border-r border-slate-200 md:pr-4">
                  <p className="text-xs text-slate-500 mb-1">Dates</p>
                  <input
                    className="w-full bg-transparent text-sm font-medium focus:outline-none"
                    placeholder="Add dates"
                  />
                </div>
                <div className="flex-1 w-full">
                  <p className="text-xs text-slate-500 mb-1">Guests/Items</p>
                  <input
                    className="w-full bg-transparent text-sm font-medium focus:outline-none"
                    placeholder="2 Adults"
                  />
                </div>
                <button className="w-full md:w-auto bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg hover:bg-emerald-700 transition">
                  Search Packages
                </button>
              </div>
            </div>
            <div className="mt-6 w-full max-w-5xl">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/reference.jpeg"
                  alt="Travelers enjoying a scenic journey"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-700 font-semibold text-sm">Why Book With Us?</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">Everything you need for a smooth trip</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feature) => (
              <div key={feature.title} className="bg-[#f6f8f4] rounded-2xl p-6 border border-emerald-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f6f7f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-700 font-semibold text-sm">Featured Packages & Tours</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">Curated getaways for every traveler</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Manage & customize packages directly from the admin panel.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {heroChips.map((chip) => (
                <span
                  key={`filter-${chip}`}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-emerald-700 border border-emerald-100"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 text-emerald-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>{pkg.location}</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.26-1.64 5.81L12 17.27z" />
                      </svg>
                      {pkg.rating}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{pkg.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{pkg.duration}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-semibold text-emerald-700">{pkg.price}</p>
                      <p className="text-xs text-slate-500">per person</p>
                    </div>
                    <Link
                      href="/booking/"
                      className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
                    >
                      View Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#f6f8f4] rounded-2xl p-6 text-center border border-emerald-100">
                <p className="text-3xl font-semibold text-emerald-700">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f6f7f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-100 via-white to-emerald-50 rounded-3xl p-10 md:p-14 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-semibold">Ready to Start Your Journey?</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Browse our packages or customize a dream trip tailored to your preferences today.
            </p>
            <Link
              href="/tours/"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
            >
              Explore All Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
