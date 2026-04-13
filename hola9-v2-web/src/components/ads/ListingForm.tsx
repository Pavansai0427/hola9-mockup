"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles, MapPin, Tag, Info, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

const steps = ["Details", "Media", "Pricing", "Trust"];

export const ListingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
  });

  const handleAiSuggest = () => {
    setIsAiGenerating(true);
    // Simulate AI Call
    setTimeout(() => {
      setFormData({
        ...formData,
        title: "Premium iPhone 15 Pro - Titanium Blue (256GB)",
        description: "Nearly new iPhone 15 Pro in stunning Titanium Blue. 256GB storage. 100% battery health. Includes original box and unused accessories. No scratches or dents. Professional used only.",
      });
      setIsAiGenerating(false);
    }, 2000);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Progress Bar */}
      <div className="mb-12 relative">
        <div className="flex justify-between relative z-10">
          {steps.map((step, idx) => (
            <div key={step} className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-bold ${
                  idx <= currentStep ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                }`}
              >
                {idx < currentStep ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
              </div>
              <span className={`mt-2 text-xs font-bold uppercase tracking-wider ${
                idx <= currentStep ? "text-slate-900" : "text-slate-400"
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 -z-0">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="glass p-8 rounded-3xl border-white/40 shadow-2xl">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-sm font-bold text-slate-900">Product Title</label>
                  <button 
                    onClick={handleAiSuggest}
                    className="flex items-center space-x-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isAiGenerating ? "AI is thinking..." : "AI Suggestion"}</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                  placeholder="What are you selling?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Detailed Description</label>
                <textarea
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium resize-none"
                  placeholder="Describe your item in detail..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Category</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Electronics", "Vehicles", "Property", "Home"].map((cat) => (
                    <button
                      key={cat}
                      className="p-4 rounded-xl border border-slate-200 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold text-slate-700 group-hover:text-primary">{cat}</span>
                      <Tag className="w-4 h-4 text-slate-300 group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Upload Media</h3>
                <p className="text-slate-500 text-sm mt-2">Up to 10 images and 1 video (max 50MB)</p>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                <p className="text-xs text-blue-700 leading-relaxed font-medium">
                  <strong>Pro Tip:</strong> Listings with more than 5 high-quality photos and at least 1 video sell <strong>4x faster</strong> on Hola9.
                </p>
              </div>
            </motion.div>
          )}

          {/* Subsequent steps placeholder */}
          {currentStep >= 2 && (
             <motion.div className="flex flex-col items-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                   <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Step in progress...</h2>
                <p className="text-slate-500 mt-2">Finalizing the data architecture for this module.</p>
             </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 font-bold px-6 py-3 rounded-xl transition-all ${
              currentStep === 0 ? "opacity-0 invisible" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          
          <button
            onClick={nextStep}
            className="flex items-center space-x-2 bg-slate-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span>{currentStep === steps.length - 1 ? "Submit Listing" : "Continue"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
