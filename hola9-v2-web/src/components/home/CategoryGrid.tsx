"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Car, 
  Smartphone, 
  Briefcase, 
  Tv, 
  Dog, 
  Hammer, 
  Camera, 
  Gem, 
  Gamepad2, 
  Music, 
  Shirt,
  Search
} from "lucide-react";

const categories = [
  { name: "Real Estate", icon: Home, color: "bg-blue-50 text-blue-600" },
  { name: "Cars & Vehicles", icon: Car, color: "bg-red-50 text-red-600" },
  { name: "Electronics", icon: Tv, color: "bg-teal-50 text-teal-600" },
  { name: "Mobiles", icon: Smartphone, color: "bg-orange-50 text-orange-600" },
  { name: "Jobs", icon: Briefcase, color: "bg-purple-50 text-purple-600" },
  { name: "Services", icon: Hammer, color: "bg-green-50 text-green-600" },
  { name: "Movies & Hobby", icon: Gamepad2, color: "bg-pink-50 text-pink-600" },
  { name: "Fashion", icon: Shirt, color: "bg-indigo-50 text-indigo-600" },
  { name: "Pets", icon: Dog, color: "bg-amber-50 text-amber-600" },
  { name: "Photography", icon: Camera, color: "bg-cyan-50 text-cyan-600" },
  { name: "Collectibles", icon: Gem, color: "bg-sky-50 text-sky-600" },
  { name: "Musical", icon: Music, color: "bg-rose-50 text-rose-600" },
];

export const CategoryGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Browse by Category</h2>
            <p className="text-slate-500 font-medium max-w-lg">
              Explore over 12+ premium categories curated to help you find exactly what you need.
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-primary font-bold hover:underline transition-all">
            <span>View All</span>
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-slate-50 rounded-3xl p-8 mb-4 border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-0 transition-transform group-hover:scale-110`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-center font-bold text-slate-800 text-sm group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
