"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      title: "Authentic Experiences",
      description: "We partner with trusted local hosts so every journey feels personal and genuine.",
    },
    {
      title: "Transparency",
      description: "Clear itineraries, INR pricing, and no hidden surprises from booking to arrival.",
    },
    {
      title: "Sustainability",
      description: "We champion responsible tourism that respects local culture and nature.",
    },
    {
      title: "Care",
      description: "Our travel specialists stay with you before, during, and after the trip.",
    },
  ];

  const team = [
    {
      name: "Arjun Das",
      role: "Founder & Travel Curator",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Meera Sharma",
      role: "Head of Guest Experience",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rohan Baruah",
      role: "North East Operations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Aisha Khan",
      role: "Community Partnerships",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-[#f6f7f2]">
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider mb-2 block">About Us</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6">
              Curating the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-900">
                North East Experience
              </span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Go Explore brings you handpicked journeys across Assam, Meghalaya, Sikkim, and Arunachal Pradesh. We connect travelers with local guides, culture, and unforgettable landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#f6f7f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                  alt="North East landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Story</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Go Explore started with a simple goal: share the magic of North East India with curious travelers. We now curate adventures that balance comfort, culture, and immersive nature experiences.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                From the tea gardens of Assam to the peaks of Sikkim, we work closely with local communities to craft itineraries that feel authentic and responsible.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Every itinerary is designed with care, combining trusted accommodations, local guides, and the flexibility to personalize your journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide every Go Explore journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f6f7f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Leadership Team</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The passionate individuals behind Go Explore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-slate-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}