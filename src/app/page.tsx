"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ArrowRight, Globe, Award, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      <main className="flex-1">
        {/* New 21st.dev Hero Section */}
        <Hero
          eyebrow="Trusted Admission Consultants"
          title="Your Gateway to Success in Education"
          subtitle="Expert guidance for Medical, Engineering, and Management admissions in top colleges across India and Abroad."
          ctaLabel="Get Free Counselling"
          ctaHref="#"
        />

        {/* Bento Grid Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">World-Class Services</h2>
              <p className="text-gray-500 text-lg">Everything you need to secure your seat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
              {/* Large Card */}
              <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gray-50 p-8 md:p-12 relative overflow-hidden group border border-gray-100">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
                      <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Medical Admissions</h3>
                    <p className="text-gray-500 max-w-md text-lg">Guaranteed guidance for MBBS, BDS, and PG Medical seats in top-tier institutions across India.</p>
                  </div>
                  <div className="mt-8">
                    <span className="text-sm font-semibold text-blue-600 flex items-center gap-2 group-hover:gap-4 transition-all">Learn more <ArrowRight size={16} /></span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=2070&auto=format&fit=crop"
                  className="absolute right-0 bottom-0 w-1/2 h-3/4 object-cover rounded-tl-3xl opacity-80 group-hover:scale-105 transition-transform duration-700"
                  alt="Medical"
                />
              </div>

              {/* Tall Card */}
              <div className="md:col-span-1 md:row-span-2 rounded-3xl bg-gray-900 text-white p-8 relative overflow-hidden group">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                      <Globe size={28} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Global Education</h3>
                    <p className="text-gray-400">Study in UK, USA, Canada, and Australia.</p>
                  </div>
                  <div className="mt-8">
                    <div className="space-y-3">
                      {["Ivy League Support", "Visa Assistance", "Scholarship Aid"].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-3xl bg-blue-50 p-8 border border-blue-100 flex items-center justify-between group hover:bg-blue-100/50 transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-blue-900">Engineering</h3>
                  <p className="text-blue-700/70 text-sm">IITs, NITs & Top Private Colleges</p>
                </div>
                <div className="bg-white p-3 rounded-full text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
              </div>
              <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100 flex items-center justify-between group hover:bg-gray-100/80 transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Management</h3>
                  <p className="text-gray-500 text-sm">MBA/PGDM in Premier B-Schools</p>
                </div>
                <div className="bg-white p-3 rounded-full text-gray-900 shadow-sm group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
