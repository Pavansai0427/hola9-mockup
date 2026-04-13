"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Menu, X, Bell, ShoppingBag, Plus } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Hola<span className="text-primary">9</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Browse
            </Link>
            <Link href="/categories" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              AI Insights
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <Search className="w-5 h-5 text-slate-400 group-hover:text-primary cursor-pointer transition-colors" />
            </div>
            <Link href="/notifications" className="relative">
              <Bell className="w-5 h-5 text-slate-400 hover:text-primary transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Link>
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            <Link
              href="/post-ad"
              className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>List Item</span>
            </Link>
            <Link href="/profile" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
              <User className="w-5 h-5 text-slate-600" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link href="/browse" className="block text-base font-medium text-slate-600">Browse</Link>
              <Link href="/categories" className="block text-base font-medium text-slate-600">Categories</Link>
              <Link href="/post-ad" className="block text-base font-medium text-primary">Post Advertisement</Link>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/profile" className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-slate-600" />
                  <span className="text-base font-medium text-slate-600">Account</span>
                </Link>
                <div className="flex space-x-4">
                   <Bell className="w-6 h-6 text-slate-400" />
                   <Search className="w-6 h-6 text-slate-400" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
