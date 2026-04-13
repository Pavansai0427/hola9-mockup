"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Menu, 
  ChevronDown, 
  User, 
  Globe, 
  Bell, 
  Smartphone,
  Maximize,
  Minimize,
  Moon,
  Sun,
  Plus,
  Car,
  Building2,
  Briefcase,
  LayoutPanelTop,
  ShoppingBag,
  Cpu,
  X,
  History,
  TrendingUp,
  ChevronRight,
  LogOut,
  Settings,
  Heart,
  Package,
  Target
} from "lucide-react";

const Header = () => {
  const [scale, setScale] = useState(1);
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeScale = (delta: number) => {
    const newScale = Math.min(Math.max(scale + delta, 0.8), 1.2);
    setScale(newScale);
    document.documentElement.style.fontSize = `${newScale * 100}%`;
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring" as const, stiffness: 300, damping: 20 } 
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.95, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      {/* 1. TOP UTILITY STRIP */}
       <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 32 }}
            animate={{ height: 32 }}
            exit={{ height: 0 }}
            className="bg-slate-900 text-white/80 px-4 sm:px-6 lg:px-8 text-[10px] items-center hidden md:flex font-black uppercase tracking-widest overflow-hidden"
          >
            <div className="max-w-[1500px] mx-auto w-full flex justify-between items-center">
              <div className="flex items-center space-x-6">
                 <span className="hover:text-primary transition-all cursor-pointer">Hola9 Prime Marketplace</span>
                 <div className="w-px h-3 bg-white/10"></div>
                 <span className="hover:text-primary transition-all cursor-pointer">Post Ads for Free</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-0.5 space-x-3">
                   <button onClick={() => changeScale(-0.05)} className="hover:text-primary transition-colors"><Minimize className="w-3 h-3" /></button>
                   <span className="text-[9px] w-6 text-center">{Math.round(scale * 100)}%</span>
                   <button onClick={() => changeScale(0.05)} className="hover:text-primary transition-colors"><Maximize className="w-3 h-3" /></button>
                </div>
                <button onClick={toggleTheme} className="hover:text-white transition-colors flex items-center">
                  {theme === "light" ? <Moon className="w-3 h-3 mr-1.5" /> : <Sun className="w-3 h-3 mr-1.5" />}
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
                <div className="flex items-center space-x-2 bg-primary px-3 py-1 rounded-sm cursor-pointer group hover:scale-105 transition-transform active:scale-95">
                  <Smartphone className="w-3 h-3 text-white" />
                  <span className="text-white">Get Mobile App</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN NAV BAR */}
      <div className={`py-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-xl py-2" : "bg-white border-b border-slate-50"
      }`}>
        <div className="max-w-[1500px] mx-auto flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0 group">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30"
            >
              <span className="text-white font-black text-2xl">H</span>
            </motion.div>
            <div className="hidden lg:block leading-none">
              <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Hola<span className="text-primary italic">9</span></span>
              <div className="text-[10px] tracking-[0.3em] font-black text-slate-400 uppercase -mt-1 group-hover:text-primary transition-colors">Classifieds</div>
            </div>
          </Link>

          {/* Location Selector */}
          <div 
            className="hidden xl:flex items-center space-x-1.5 cursor-pointer hover:bg-slate-50 border border-transparent p-2 rounded-xl transition-all group relative"
            onMouseEnter={() => setActiveDropdown("location")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="p-2 transition-colors">
              <MapPin className="w-6 h-6 text-slate-400 group-hover:text-primary" />
            </div>
            <div className="leading-tight pr-4">
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">Deliver to</div>
              <div className="text-[14px] text-slate-900 font-black flex items-center">
                Bengaluru <ChevronDown className="w-3 h-3 ml-1 text-slate-400 group-hover:rotate-180 transition-transform" />
              </div>
            </div>
            
            <AnimatePresence>
              {activeDropdown === "location" && (
                <motion.div 
                  variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 overflow-hidden"
                >
                  <p className="text-[11px] font-black uppercase text-slate-400 mb-3 ml-1">Current Location</p>
                  <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-xl border border-primary/10 mb-4 group/loc">
                     <Target className="w-5 h-5 text-primary" />
                     <span className="text-sm font-bold text-slate-800">Use Current Location</span>
                  </div>
                  <p className="text-[11px] font-black uppercase text-slate-400 mb-2 ml-1">Top Cities</p>
                  <div className="space-y-1">
                    {["Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune"].map(city => (
                      <div key={city} className="p-2 hover:bg-slate-50 rounded-lg text-sm font-bold text-slate-600 transition-colors cursor-pointer">{city}</div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SEARCH ENGINE */}
          <div className="flex-1 flex items-stretch h-12 group relative" ref={searchRef}>
            <div 
              className="hidden sm:flex items-center px-5 bg-slate-50 rounded-l-2xl border-y border-l border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors border-r border-slate-200"
              onClick={() => setActiveDropdown(activeDropdown === "catSearch" ? null : "catSearch")}
            >
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest">All</span>
              <ChevronDown className="w-4 h-4 ml-3 text-slate-400" />
            </div>
            <input 
              type="text" 
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              placeholder="Search Hola9 for Properties, Cars, Jobs..." 
              className="flex-1 bg-white border-y border-slate-100 px-6 text-sm font-bold text-slate-800 focus:outline-none focus:border-primary/30 transition-all shadow-inner placeholder:text-slate-400"
            />
            <button className="bg-[#facc15] hover:bg-[#eab308] px-8 rounded-r-2xl transition-all shadow-[0_4px_20px_-5px_rgba(250,204,21,0.5)] active:scale-95 flex items-center">
              <Search className="w-5 h-5 text-slate-900" />
            </button>

            {/* Search Suggestions Dropdown */}
            <AnimatePresence>
              {searchFocused && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-black uppercase text-slate-400 flex items-center">
                       <History className="w-3.5 h-3.5 mr-2" /> Recent Searches
                    </span>
                    <button className="text-[10px] font-bold text-primary">Clear All</button>
                  </div>
                  <div className="space-y-3">
                    {["2BHK Flats in Whitefield", "Used BMW 3 Series", "Interior Designers"].map(q => (
                      <div key={q} className="flex items-center justify-between group cursor-pointer p-1">
                        <span className="text-sm font-bold text-slate-700">{q}</span>
                        <X className="w-4 h-4 text-slate-300 hover:text-red-400" />
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-slate-50 my-4"></div>
                  <span className="text-[11px] font-black uppercase text-slate-400 flex items-center mb-3">
                     <TrendingUp className="w-3.5 h-3.5 mr-2" /> Trending Listings
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["Modern Apartments", "SUV Cars", "Remote Tech Jobs", "Office Spaces"].map(q => (
                      <div key={q} className="p-3 bg-slate-50 rounded-xl hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all cursor-pointer">
                        <span className="text-xs font-black text-slate-800">{q}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT CLUSTER */}
          <div className="flex items-center space-x-1 shrink-0">
             {/* Language Dropdown */}
             <div 
               className="hidden md:flex flex-col items-center justify-center p-2.5 cursor-pointer hover:bg-slate-50 rounded-xl transition-all relative group"
               onMouseEnter={() => setActiveDropdown("lang")}
               onMouseLeave={() => setActiveDropdown(null)}
             >
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                  <ChevronDown className="w-3 h-3 ml-1 text-slate-300" />
                </div>
                <span className="text-[10px] font-black text-slate-900 mt-1 uppercase">EN</span>
                
                <AnimatePresence>
                  {activeDropdown === "lang" && (
                    <motion.div 
                      variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden"
                    >
                      {["English", "Telugu", "Hindi", "Kannada"].map(lang => (
                        <div key={lang} className="p-3 hover:bg-slate-50 rounded-xl text-sm font-bold text-slate-700 flex items-center justify-between group/in">
                          {lang}
                          {lang === "English" && <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             {/* Account Dropdown */}
             <div 
               className="flex items-center p-2.5 cursor-pointer hover:bg-slate-50 rounded-xl transition-all group relative"
               onMouseEnter={() => setActiveDropdown("profile")}
               onMouseLeave={() => setActiveDropdown(null)}
             >
               <div className="leading-tight text-right mr-3 hidden sm:block">
                  <div className="text-[10px] text-slate-400 font-extrabold uppercase">Hello, Sign in</div>
                  <div className="text-[14px] text-slate-900 font-black flex items-center">
                    Profile & Wallet <ChevronDown className="w-3 h-3 ml-1 text-slate-400 group-hover:rotate-180 transition-transform" />
                  </div>
               </div>
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-primary transition-all group-hover:shadow-lg group-hover:shadow-primary/20">
                  <User className="w-5 h-5 text-slate-400 group-hover:text-white" />
               </div>

               <AnimatePresence>
                  {activeDropdown === "profile" && (
                    <motion.div 
                      variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                      className="absolute top-full right-0 mt-2 w-72 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-5 z-50"
                    >
                       <div className="flex items-center space-x-4 mb-6 p-4 bg-slate-50 rounded-[1.5rem]">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                             <User className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                             <p className="text-[11px] font-black uppercase text-primary">Guest User</p>
                             <p className="text-sm font-black text-slate-900">Manage Account</p>
                          </div>
                       </div>

                       <div className="space-y-4 mb-6">
                          {[
                            { label: "Track Orders", icon: Package },
                            { label: "My Listings", icon: LayoutPanelTop },
                            { label: "Shortlisted", icon: Heart },
                            { label: "Wallet & Coins", icon: ShoppingBag },
                            { label: "Platform Settings", icon: Settings },
                          ].map(item => (
                            <div key={item.label} className="flex items-center justify-between p-1 group/item cursor-pointer">
                               <div className="flex items-center space-x-3">
                                  <div className="p-2 bg-slate-50 rounded-lg group-hover/item:bg-primary/5 transition-colors">
                                    <item.icon className="w-4 h-4 text-slate-400 group-hover/item:text-primary" />
                                  </div>
                                  <span className="text-sm font-bold text-slate-700 group-hover/item:text-slate-900">{item.label}</span>
                               </div>
                               <ChevronRight className="w-4 h-4 text-slate-300 opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                            </div>
                          ))}
                       </div>

                       <div className="h-px bg-slate-50 mb-4"></div>
                       <button className="w-full flex items-center justify-center space-x-2 py-3.5 bg-red-50 text-red-500 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all">
                          <LogOut className="w-4 h-4" />
                          <span>Logout Now</span>
                       </button>
                    </motion.div>
                  )}
               </AnimatePresence>
             </div>

             {/* Notifications */}
             <div className="relative p-2.5 cursor-pointer hover:bg-slate-50 rounded-xl transition-all group">
                <Bell className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-black text-white flex items-center justify-center border-2 border-white animate-pulse">3</span>
             </div>

             <Link href="/post-ad" className="flex items-center space-x-2 bg-[#facc15] text-slate-900 px-7 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-yellow-500/10 hover:shadow-yellow-500/30 hover:scale-105 active:scale-95 transition-all">
               <Plus className="w-4 h-4" />
               <span className="hidden lg:block">Start Selling</span>
             </Link>
          </div>
        </div>
      </div>

      {/* 3. SUB-NAV / CATEGORIES */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-50 flex items-center px-4 sm:px-6 lg:px-8 py-2 overflow-hidden">
         <div className="max-w-[1500px] mx-auto flex items-center w-full">
            <button 
              className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-all mr-8 group shadow-lg shadow-black/5"
              onMouseEnter={() => setActiveDropdown("allCats")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
               <Menu className="w-5 h-5" />
               <span className="text-[11px] font-black uppercase tracking-[0.1em]">All Categories</span>
            </button>
            <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-1">
               {[
                 { label: "Real Estate", icon: Building2 },
                 { label: "Automobiles", icon: Car },
                 { label: "Jobs Hub", icon: Briefcase },
                 { label: "Verified Services", icon: LayoutPanelTop },
                 { label: "New Tech", icon: Cpu },
                 { label: "Top Interiors", icon: ShoppingBag },
                 { label: "Elite Fashions", icon: ShoppingBag }
               ].map((item) => (
                 <Link 
                   key={item.label} 
                   href={`/cat/${item.label.toLowerCase()}`}
                   className="text-[11px] font-black text-slate-500 hover:text-primary whitespace-nowrap transition-all uppercase tracking-tight relative group"
                 >
                   {item.label}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full"></span>
                 </Link>
               ))}
            </div>
            <div className="ml-auto hidden xl:flex items-center text-[10px] font-black uppercase text-primary tracking-widest cursor-pointer bg-primary/5 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all border border-primary/20">
               Trending: Holi Mega Deals!
            </div>
         </div>
      </div>
    </header>
  );
};

export default Header;
