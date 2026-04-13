"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  MessageSquare, 
  TrendingUp, 
  Heart, 
  Settings,
  ArrowUpRight,
  Eye,
  MousePointer2,
  Clock
} from "lucide-react";

const stats = [
  { name: "Total Views", value: "1.2k", change: "+12%", icon: Eye, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Impressions", value: "8.4k", change: "+5%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  { name: "Click Rate", value: "3.2%", change: "+2%", icon: MousePointer2, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "Active Ads", value: "12", change: "Stable", icon: ShoppingBag, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Seller Dashboard</h1>
            <p className="text-slate-500 font-medium">Welcome back, analyze your marketplace performance here.</p>
          </div>
          <div className="flex space-x-3">
             <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Account Settings</span>
             </button>
             <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2">
                <LayoutDashboard className="w-4 h-4" />
                <span>Premium Insights</span>
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-green-500 px-2 py-1 bg-green-50 rounded-full">{stat.change}</span>
              </div>
              <h3 className="text-slate-500 font-bold text-sm tracking-wide uppercase mb-1">{stat.name}</h3>
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Ads List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <span>My Active Listings</span>
               </h2>
               <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            
            {[1, 2, 3].map((item) => (
               <motion.div 
                 key={item}
                 whileHover={{ x: 5 }}
                 className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md cursor-pointer"
                >
                  <div className="w-24 h-24 bg-slate-100 rounded-2xl overflow-hidden">
                     <div className="w-full h-full bg-slate-200 animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                     <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Real Estate</span>
                     <h3 className="font-bold text-slate-900 text-lg">Modern 3BHK Apartment in Bangalore</h3>
                     <div className="flex items-center space-x-4 mt-2">
                        <span className="flex items-center text-xs font-medium text-slate-400">
                           <Eye className="w-3.5 h-3.5 mr-1" />
                           450 Views
                        </span>
                        <span className="flex items-center text-xs font-medium text-slate-400">
                           <Clock className="w-3.5 h-3.5 mr-1" />
                           2 Days ago
                        </span>
                     </div>
                  </div>
                  <div className="text-right px-4">
                     <p className="text-lg font-black text-slate-900">₹85.5 L</p>
                     <p className="text-[10px] font-bold text-green-500 uppercase">Active</p>
                  </div>
                  <button className="p-3 hover:bg-slate-50 rounded-full transition-all">
                     <ArrowUpRight className="w-5 h-5 text-slate-400" />
                  </button>
               </motion.div>
            ))}
          </div>

          {/* Messages Preview */}
          <div className="space-y-6">
             <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Recent Inquiries</span>
             </h2>
             <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                {[1, 2, 3, 4].map((msg) => (
                   <div key={msg} className="p-5 border-b border-slate-50 last:border-0 hover:bg-slate-50 cursor-pointer transition-colors flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-center mb-0.5">
                            <span className="font-bold text-slate-900 text-sm truncate">Aditi Sharma</span>
                            <span className="text-[10px] font-medium text-slate-400">10:45 AM</span>
                         </div>
                         <p className="text-xs text-slate-500 truncate font-medium">Is the price negotiable for the apartme...</p>
                      </div>
                      {msg === 1 && <div className="w-2 h-2 bg-primary rounded-full ring-4 ring-primary/20"></div>}
                   </div>
                ))}
                <button className="w-full py-4 text-xs font-bold text-primary hover:bg-slate-50 transition-colors uppercase tracking-widest border-t border-slate-100">
                   Go to Message Hub
                </button>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
