"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Menu, 
  Mic, 
  ChevronRight, 
  ChevronDown,
  Car, 
  Home as HomeIcon, 
  Briefcase, 
  Smartphone, 
  Monitor, 
  Globe,
  Wrench, 
  TrendingUp, 
  TrendingDown, 
  Plus,
  Bike,
  Gem,
  Cpu,
  Smartphone as PhoneIcon,
  Dog,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Landmark,
  Plane,
  Building2,
  Umbrella,
  Star,
  ShieldCheck,
  Zap,
  Bell,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './homepage.css';
import Footer from './Footer';

const Homepage = () => {
  const [scale, setScale] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const categories = [
    {
      name: "Mobiles", 
      icon: <PhoneIcon size={16} />,
      sub: ["Mobile Phones", "Accessories", "Tablets"]
    },
    {
      name: "Furnitures",
      icon: <HomeIcon size={16} />,
      sub: ["Furniture for Home & Office", "Home Decor – Furnishings", "Household", "Kitchenware", "Painting"]
    },
    {
      name: "Electronics",
      icon: <Monitor size={20} />,
      sub: ["Air Conditioners – AC", "Air Coolers", "Camera Accessories", "Cameras", "Laptops (Desktops)", "Microwave Ovens", "Mixer – Grinder – Juicer", "Monitor / Printers / Scanners", "Music Systems", "Refrigerators", "TV", "Video Games", "Washing Machines", "Water Heaters", "Water Purifiers"]
    },
    {
      name: "Real Estate",
      icon: <Building2 size={16} />,
      sub: ["Rent – Commercial", "Buy – Commercial", "Rent – Residential", "Buy – Residential", "PG-Hostels"]
    },
    {
      name: "Jobs",
      icon: <Briefcase size={16} />,
      sub: ["Full Time Jobs", "Contract Job", "Walk-In"]
    },
    {
      name: "Education",
      icon: <Gem size={16} />,
      sub: ["Career Counseling", "Certification & Training", "Competitive Exams", "Distance Learning", "Entrance Exam Coaching", "Hobby Classes", "Schools & Tuitions", "Study Abroad Consultants", "Vocational Training"]
    },
    {
      name: "Services",
      icon: <Wrench size={16} />,
      sub: ["Appliance Repair", "Computer Repair", "Home Cleaning", "Home Help", "Home Repair", "Interior Designing", "Kitchen Appliance Repair", "Mobile Repair", "Packers and Movers", "Pest Control"]
    },
    {
      name: "Cars",
      icon: <Car size={16} />,
      sub: ["Cars", "Spare Parts – Accessories"]
    },
    {
      name: "Bikes",
      icon: <Bike size={16} />,
      sub: ["Bikes", "Spare Parts – Accessories"]
    },
    {
      name: "Pets",
      icon: <Dog size={16} />,
      sub: ["Pet Food", "Pet Shop", "Pet Clinics", "Pet Training", "Pet Care"]
    }
  ];

  const topCities = [
    { name: 'Delhi / NCR', listings: '248,000+', img: '/assets/city-delhi.png' },
    { name: 'Bangalore', listings: '82,000+', img: '/assets/city-bangalore.png' },
    { name: 'Pune', listings: '66,000+', img: '/assets/city-pune.png' },
    { name: 'Chennai', listings: '49,000+', img: '/assets/city-chennai.png' },
    { name: 'Mumbai', listings: '77,000+', img: '/assets/city-mumbai.png' },
    { name: 'Hyderabad', listings: '42,000+', img: '/assets/city-hyderabad.png' },
    { name: 'Kolkata', listings: '48,000+', img: '/assets/city-kolkata.png' },
    { name: 'Ahmedabad', listings: '35,000+', img: '/assets/city-ahmedabad.png' }
  ];

  const recommendations = [
    { id: 1, name: 'iPhone 15 Pro Max - 256GB', price: '₹1,05,000', category: 'Mobiles', loc: 'Hyderabad', time: '2h ago', img: '/assets/city-delhi.png', badge: 'AI PICK' },
    { id: 2, name: 'Tesla Model S - Plaid Edition', price: '₹1.2 Cr', category: 'Vehicles', loc: 'Mumbai', time: '1h ago', img: '/assets/city-mumbai.png', badge: 'VERIFIED' },
    { id: 3, name: 'Designer L-Shape Velvet Sofa', price: '₹45,000', category: 'Furniture', loc: 'Bangalore', time: '5h ago', img: '/assets/city-bangalore.png', badge: 'TRENDING' },
    { id: 4, name: 'MacBook Pro M3 Max - 16"', price: '₹2,49,000', category: 'Electronics', loc: 'Pune', time: '10m ago', img: '/assets/city-pune.png', badge: 'NEW' },
    { id: 5, name: 'Rolex Submariner Date 2024', price: '₹12,50,000', category: 'Luxury', loc: 'Chennai', time: '3h ago', img: '/assets/city-chennai.png', badge: 'FEATURED' }
  ];

  const fullGrid = [...recommendations, ...recommendations, ...recommendations, ...recommendations, ...recommendations];

  return (
    <div 
      className="homepage-wrapper"
      style={{'--ui-scale': scale} as any}
    >
      <div className="homepage-container">
        {/* Background */}
        <div className="aurora-canvas" />
        <div className="subtle-grid" />

        {/* 1. PREMIUM TOPNAV (SCROLLS AWAY) */}
        <div className="announcement-bar">
          <div className="ticker-wrap">
            <div className="ticker-content">
               🚀 Global: Hola9 AI Search Now Available in 5 Languages | New Business Hubs in Dubai & Singapore | Post Your Ad for FREE 🚀
            </div>
          </div>
          
          <div className="scaling-tools">
            {/* Multi-Language */}
            <div className="scale-btn">
               <Globe size={14} /> <span>English</span> <ChevronDown size={12} />
            </div>

            {/* Scale Tools */}
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: 6, padding: '2px 8px' }}>
              <div className="scale-btn" onClick={() => setScale(prev => Math.min(prev + 0.05, 1.2))} style={{ padding: '4px 8px', background: 'transparent' }}>
                 <Maximize2 size={14} /> <span>Scale +</span>
              </div>
              <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.2)' }} />
              <div className="scale-btn" onClick={() => setScale(prev => Math.max(prev - 0.05, 0.8))} style={{ padding: '4px 8px', background: 'transparent' }}>
                 <Minimize2 size={14} /> <span>Scale -</span>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="scale-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
               {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </div>

            {/* Get App Button */}
            <a href="#" className="scale-btn" style={{ background: 'var(--primary)', opacity: 1, border: 'none', color: 'white', fontWeight: 800 }}>
               <Smartphone size={14} /> <span>Get App</span>
            </a>
          </div>
        </div>

        {/* 2. MERGED EXCEL HEADER (STICKY) */}
        <header className="merged-header">
           <div className="logo-cell">
             <a href="/" className="logo-link">
               <img src="/assets/hola9-logo.png" alt="Hola9 Logo" style={{ height: 45, display: 'block' }} />
             </a>
           </div>
           
           <div className="nav-stack">
              <div className="row-top">
                <div className="search-pill">
                   <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', gap: 8, color: '#475569', borderRight: '1px solid #e2e8f0', cursor: 'pointer' }}>
                     <MapPin size={18} /> <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>Hyderabad</span>
                   </div>
                   <input type="text" style={{ flex: 1, border: 'none', background: 'transparent', padding: '0 20px', outline: 'none', fontWeight: 500 }} placeholder="Search for Anything..." />
                   <div style={{ padding: '0 15px', color: '#94a3b8', cursor: 'pointer' }}><Mic size={18} /></div>
                   <button style={{ width: 42, height: 42, background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginRight: 4 }}>
                     <Search size={20} />
                   </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                   <a href="#" style={{ color: '#0f172a', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem' }}>Sign In</a>
                   <a href="#" className="post-ad-cta" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white', padding: '10px 25px', borderRadius: 99, fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 10px 20px rgba(37,99,235,0.2)' }}>
                     <Plus size={18} /> Post Ad
                   </a>
                </div>
              </div>

              <div className="row-bottom">
                 <a href="#" className="nav-link-v2">Home</a>
                 <a href="#" className="nav-link-v2">Deals</a>
                 <a href="#" className="nav-link-v2">Blog</a>
                 <a href="#" className="nav-link-v2">Case Studies</a>
                 <a href="#" className="nav-link-v2">Contact</a>
                 <div className="nav-separator" />
                 <a href="#" className="nav-link-v2">Company</a>
                 <a href="#" className="become-seller-cta">Become Seller</a>
              </div>
           </div>
        </header>

        {/* 3. CATEGORY NAV (STICKY) */}
        <nav className="category-nav">
           {categories.map((cat, i) => (
             <div key={i} className="cat-item">
               {cat.icon} <span>{cat.name}</span> <ChevronDown size={14} />
               
               <div className="mega-menu">
                  <div>
                    <span className="menu-section-title">{cat.name}</span>
                    <ul className="menu-link-list">
                      {cat.sub.map((sub, j) => (
                        <li key={j}><a href="#">{sub}</a></li>
                      ))}
                    </ul>
                  </div>
               </div>
             </div>
           ))}
        </nav>

        {/* SCALABLE CONTENT WRAPPER */}
        <main className="content-wrapper">
          <section className="hero-cinematic">
             <div className="hero-overlay" />
             <div className="hero-content">
                <motion.div 
                  className="hero-text-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="hero-launch-info">THE AI-POWERED PLATFORM</p>
                  <h1 className="hero-brand-name">HOLA<span>9</span> MARKETPLACE</h1>
                  <h2 className="hero-subtitle">TRADE ANYTHING. ANYTIME. ANYWHERE.</h2>
                  <p className="hero-rera">TRUSTED BY 10M+ USERS GLOBALLY | SECURE VERIFIED ASSETS</p>
                </motion.div>
             </div>

             {/* FLOATING GLASS SEARCH BOX */}
             <div className="floating-search-container">
                <div className="glass-search-box premium-shadow">
                   <div className="search-tabs">
                      <button className="search-tab active">Mobiles</button>
                      <button className="search-tab">Vehicles</button>
                      <button className="search-tab">Electronics</button>
                      <button className="search-tab">Real Estate</button>
                      <button className="search-tab">Jobs <span className="tab-badge" /></button>
                      <button className="search-tab">Services</button>
                      <div className="tab-divider" />
                      <button className="search-tab post-property">Post Free Ad <span className="free-tag">AI BOOST</span></button>
                   </div>

                   <div className="search-input-row">
                      <div className="dropdown-selector">
                         <MapPin size={18} className="search-icon-dim" />
                         <span>Select City</span> <ChevronDown size={16} />
                      </div>
                      <div className="search-main">
                         <Search size={20} className="search-icon-dim" />
                         <input type="text" placeholder='Find Mobiles, Cars, Electronics and more...' />
                      </div>
                      <div className="search-actions">
                         <div className="action-circle"><Mic size={18} /></div>
                         <button className="final-search-btn pulse-glow">Search Marketplace</button>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          <div style={{ height: 60 }} />

          {/* TOP CITIES SECTION */}
          <section className="top-cities-section">
             <p className="section-label">MAJOR MARKETPLACE HUBS</p>
             <h2 className="section-main-title">Capitals of Trade: Verified Regional Listings</h2>
             
             <div className="cities-grid">
                {topCities.map((city, i) => (
                  <motion.div 
                    key={i} 
                    className="city-card"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                     <div className="city-img-wrapper">
                        <img src={city.img} alt={city.name} />
                     </div>
                     <div className="city-info">
                        <h3>{city.name}</h3>
                        <p>{city.listings} Ads</p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </section>

          {/* AI FRESH RECOMMENDATIONS SECTION */}
          <section className="recommendations-section">
             <div className="section-header-flex">
                <div>
                   <p className="section-label">CURATED FOR YOU</p>
                   <h2 className="section-main-title">Fresh Recommendations <span className="ai-badge-header">AI-POWERED</span></h2>
                </div>
                <div className="filter-pill-row">
                   <button className="filter-pill active">All Deals</button>
                   <button className="filter-pill">Price: Low to High</button>
                   <button className="filter-pill">Near Me</button>
                </div>
             </div>

             <div className="recommendations-5x5-grid">
                {fullGrid.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="ad-card-premium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 5) * 0.1 }}
                  >
                     <div className="ad-image-container">
                        <img src={item.img} alt={item.name} />
                        <span className="ad-badge-premium">{item.badge}</span>
                        <div className="ad-overlay-actions">
                           <div className="fav-circle"><TrendingUp size={14} /></div>
                        </div>
                     </div>
                     <div className="ad-content-premium">
                        <div className="ad-meta-top">
                           <span className="ad-cat">{item.category}</span>
                           <span className="ad-time">{item.time}</span>
                        </div>
                        <h3 className="ad-title">{item.name}</h3>
                        <div className="ad-price-row">
                           <span className="ad-price">{item.price}</span>
                           <div className="ad-loc"><MapPin size={12} /> {item.loc}</div>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>

             <div className="view-more-container">
                <button className="view-more-btn">Load More Intelligence <ChevronDown size={18} /></button>
             </div>
          </section>

          {/* PREMIUM COMPACT TESTIMONIALS SECTION - V2 */}
          <section className="testimonials-v2">
             <div className="v2-container">
                <div className="v2-header">
                   <span className="v2-badge">PLATFORM TRUST</span>
                   <h2 className="v2-title">Verified Voices</h2>
                   <div className="v2-trust-score">
                      <Star fill="#fbbf24" color="#fbbf24" size={16} />
                      <strong>4.9/5</strong>
                      <span>(2M+ Reviews)</span>
                   </div>
                </div>

                <div className="v2-grid">
                   {[
                     { name: "Rahul S.", text: "Spot on AI car suggestions. Trusted verification.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop" },
                     { name: "Priya P.", text: "Sold furniture in hours. Verified buyers only.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop" },
                     { name: "Vikram R.", text: "High-end electronics at steal prices. Safe chat.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop" },
                     { name: "Ananya K.", text: "Best real estate portal I've used so far.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop" }
                   ].map((t, i) => (
                     <motion.div 
                       key={i} 
                       className="v2-card"
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.05 }}
                     >
                        <div className="v2-card-head">
                           <img src={t.img} alt={t.name} className="v2-avatar" />
                           <div className="v2-identity">
                              <h4>{t.name}</h4>
                              <div className="v2-stars">
                                 {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="#fbbf24" color="#fbbf24" />)}
                              </div>
                           </div>
                           <ShieldCheck className="v2-verified-icon" size={16} />
                        </div>
                        <p className="v2-text">{t.text}</p>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* INTERESTING THINGS - SECTION 1: AI MARKET INTEL */}
          <section className="market-intel-section">
             <div className="intel-container">
                <div className="intel-info">
                   <div className="intel-live-tag">
                      <div className="ping-dot" /> LIVE INTEL
                   </div>
                   <h3 className="intel-title">AI Market <span className="metallic-text">Arbitrage</span></h3>
                   <p className="intel-p">Track real-time valuation drops and elite opportunities.</p>
                </div>
                
                <div className="intel-items-row">
                   {[
                     { label: "Luxury Cars", change: "-12.5%", trend: "down", icon: <TrendingDown size={14} /> },
                     { label: "Real Estate", change: "+4.2%", trend: "up", icon: <TrendingUp size={14} /> },
                     { label: "Electronics", change: "-18.0%", trend: "down", icon: <TrendingDown size={14} /> }
                   ].map((item, idx) => (
                     <div key={idx} className="intel-chip">
                        <span className="intel-chip-label">{item.label}</span>
                        <span className={`intel-chip-val ${item.trend}`}>
                           {item.icon} {item.change}
                        </span>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* INTERESTING THINGS - SECTION 2: VERIFIED SPOTLIGHT */}
          <section className="verified-spotlight">
             <div className="spotlight-container">
                <div className="spotlight-left">
                   <h3 className="spotlight-title">Elite Dealer Network</h3>
                   <p className="spotlight-p">The most trusted sellers on our platform today.</p>
                </div>
                <div className="spotlight-avatars">
                   {[1,2,3,4,5,6].map(i => (
                     <motion.div 
                        key={i} 
                        className="spotlight-avatar-item"
                        whileHover={{ y: -5, scale: 1.1 }}
                     >
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Elite" />
                        <div className="spotlight-verified-dot" />
                     </motion.div>
                   ))}
                   <div className="spotlight-more">+240K Others</div>
                </div>
             </div>
          </section>

          {/* ULTRA-PREMIUM HIGH UI APP SHOWCASE - REMODEL */}
          <section className="app-showcase-premium">
             <div className="premium-aurora" />
             <div className="premium-aurora red-glow" />
             
             <div className="premium-grid">
                <div className="premium-content">
                   <motion.span 
                     className="premium-eyebrow"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                   >
                     ELITE TRADING INFRASTRUCTURE
                   </motion.span>
                   <h2 className="premium-title">The Future of Trade <br/> is <span className="metallic-text">Hola9.</span></h2>
                   <p className="premium-description">
                     Step into the next evolution of marketplaces. AI-detected pricing, 
                     instant verified connects, and localized intelligence—all encapsulated 
                     in one masterful mobile experience.
                   </p>
                   
                   <div className="premium-input-box">
                      <div className="glass-input-wrapper">
                         <div className="dot-indicator" />
                         <input type="text" placeholder="Enter mobile for elite access" className="glass-field" />
                      </div>
                      <button className="premium-cta-btn">GET ACCESS <Zap size={16} fill="white" /></button>
                   </div>
 
                   <div className="premium-badges-row">
                      <div className="premium-store-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
                      </div>
                      <div className="premium-store-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                      </div>
                      <div className="premium-divider-v5" />
                      <div className="premium-users-stat">
                         <strong>10M+</strong>
                         <span>Active Nodes</span>
                      </div>
                   </div>
                </div>
 
                <div className="premium-visual-area">
                   <motion.div 
                     className="phone-3d-wrapper"
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   >
                      <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbab?q=80&w=800&h=1600&auto=format&fit=crop" alt="Hola9 3D Mockup" className="phone-3d-img" />
                      
                      {/* Floating Glass Cards */}
                      <motion.div 
                        className="floating-card-elite card-1"
                        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                         <ShieldCheck className="text-blue-400" size={18} />
                         <span>Verified Node</span>
                      </motion.div>
 
                      <motion.div 
                        className="floating-card-elite card-2"
                        animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                      >
                         <TrendingUp className="text-green-400" size={18} />
                         <span>+12% Value AI</span>
                      </motion.div>
                   </motion.div>
                </div>
             </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
