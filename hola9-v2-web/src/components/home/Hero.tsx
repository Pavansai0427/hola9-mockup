"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  MapPin, 
  ChevronDown, 
  Mic, 
  Target,
  Home,
  Tag,
  Building2,
  Hotel,
  LandPlot,
  Store,
  UserCircle2
} from "lucide-react";

const mainTabs = [
  { id: "buy", label: "Buy", icon: Home },
  { id: "rental", label: "Rental", icon: Tag },
  { id: "projects", label: "Projects", icon: Building2 },
  { id: "hostels", label: "PG / Hostels", icon: Hotel },
  { id: "land", label: "Plot & Land", icon: LandPlot },
  { id: "commercial", label: "Commercial", icon: Store },
  { id: "agents", label: "Agents", icon: UserCircle2 },
];

const filterOptions = ["Budget", "Property Type", "Possession Status"];

export const Hero = () => {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section className="relative h-[85vh] min-h-[650px] flex items-center pt-20 overflow-hidden">
      {/* High-Quality Hero Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&w=2070&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-white font-bold text-lg mb-2 block">Hyderabad</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 tracking-tighter">
              Real Estate Made Real Easy
            </h1>
            <p className="text-xl text-white/90 font-medium">
              We&apos;ve got you covered! From finding the perfect property to <span className="text-[#facc15] font-black">Financing</span>
            </p>
          </motion.div>

          {/* Search Box Unit */}
          <div className="mt-12">
             {/* Category Tabs (Dark Bar) */}
             <div className="flex flex-wrap bg-slate-900/95 backdrop-blur-md rounded-t-2xl p-1 w-fit border-b border-white/10">
                {mainTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl transition-all text-sm font-bold ${
                      activeTab === tab.id 
                        ? "bg-white/10 text-white border-b-2 border-primary" 
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
             </div>

             {/* MAIN SEARCH BAR (White) */}
             <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
                <div className="flex-[0.5] flex items-center px-4 py-3 bg-slate-50 rounded-xl cursor-pointer group hover:bg-slate-100 transition-colors">
                   <span className="font-bold text-slate-700 mr-2">Hyderabad</span>
                   <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors ml-auto" />
                </div>
                
                <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

                <div className="flex-[2] flex items-center px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors">
                   <Search className="w-5 h-5 text-slate-400 mr-3" />
                   <input 
                     type="text" 
                     placeholder='Search by "Locality"'
                     className="bg-transparent w-full font-bold text-slate-800 outline-none placeholder:text-slate-400"
                   />
                   <div className="flex items-center space-x-4 ml-4">
                      <Target className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer" />
                      <Mic className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer" />
                   </div>
                </div>

                <button className="w-full md:w-auto bg-[#facc15] text-slate-900 font-black px-12 py-4 rounded-xl hover:bg-[#eab308] transition-all shadow-lg active:scale-95 uppercase tracking-wider">
                  Search
                </button>
             </div>

             {/* Bottom Filter Buttons */}
             <div className="flex flex-wrap gap-4 mt-6">
                {filterOptions.map((filter) => (
                  <button 
                    key={filter}
                    className="flex items-center space-x-3 bg-white px-6 py-3 rounded-xl shadow-lg border border-slate-100 hover:border-primary transition-all group"
                  >
                    <span className="font-bold text-slate-600 group-hover:text-primary">{filter}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
