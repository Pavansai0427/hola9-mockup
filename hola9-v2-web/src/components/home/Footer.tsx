"use client";
import React, { useState } from 'react';
import './footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const columns = [
    {
      title: 'Buy & Sell',
      links: [
        'Mobile Phones', 'Laptops & Computers', 'Cars & Bikes', 'Real Estate',
        'Furniture & Home', 'Electronics & Appliances', 'Books & Hobbies',
        'Fashion & Clothing', 'Sports & Fitness', 'Musical Instruments',
      ],
    },
    {
      title: 'Jobs & Services',
      links: [
        'Full Time Jobs', 'Part-Time & Freelance', 'Walk-In Interviews',
        'Home Services', 'Packers & Movers', 'Interior Designing',
        'Pest Control', 'Home Cleaning', 'Appliance Repair', 'Tutors & Coaching',
      ],
    },
    {
      title: 'Real Estate',
      links: [
        'Buy Residential', 'Rent Residential', 'Buy Commercial', 'Rent Commercial',
        'PG & Hostels', 'New Projects', 'Plot & Land', 'Real Estate Agents',
        'Home Loans', 'Vastu Consultants',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Hola9', 'Our Vision', 'Careers', 'Press & Media',
        'Blog & Stories', 'Case Studies', 'Investor Relations',
        'Partnerships', 'Affiliate Program', 'Contact Us',
      ],
    },
    {
      title: 'Help & Support',
      links: [
        'Help Center', 'Safety Tips', 'Report Abuse', 'Community Guidelines',
        'Seller Guidelines', 'Buyer Protection', 'Fraud Prevention',
        'Terms & Conditions', 'Privacy Policy', 'Cookie Policy',
      ],
    },
    {
      title: 'Advertise',
      links: [
        'Post Free Ad', 'Featured Listings', 'Homepage Banner',
        'Category Spotlight', 'Email Campaigns', 'Seller Dashboard',
        'Analytics & Insights', 'Bulk Upload', 'API Integration', 'Seller School',
      ],
    },
  ];

  return (
    <footer className="hf-root">

      {/* Aurora bg */}
      <div className="hf-aurora">
        <div className="hf-aurora-blob hf-blob-1" />
        <div className="hf-aurora-blob hf-blob-2" />
        <div className="hf-aurora-blob hf-blob-3" />
        <div className="hf-grid-overlay" />
      </div>

      {/* ─── MAIN BODY ─── */}
      <div className="hf-body">

        {/* LEFT COLUMN — Logo + About + App */}
        <div className="hf-left-col">
          <img src="/assets/hola9-logo.png" alt="Hola9" className="hf-logo" />
          <p className="hf-about-text">
            Hola9 is India's fastest-growing AI-powered classifieds marketplace.
            Buy, sell, and rent anything — from cars and properties to electronics
            and services — with verified listings across 500+ cities.
          </p>

          {/* App download */}
          <p className="hf-app-label">Get the App</p>
          <div className="hf-app-btns">
            <a href="#" className="hf-store-btn">
              <svg className="hf-store-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div><small>Download on</small><strong>App Store</strong></div>
            </a>
            <a href="#" className="hf-store-btn">
              <svg className="hf-store-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.18 23.76c.3.17.64.24.99.19l.1-.06 10.72-10.73-2.26-2.26L3.18 23.76zm14.54-14.6L14.9 6.34 4.04.5C3.71.31 3.35.28 3.03.42l9.71 9.71 5.02-2.97zM21.5 10.5c-.34-.2-.74-.31-1.11-.31s-.77.11-1.11.31l-2.43 1.44 2.26 2.26 2.39-1.42c.65-.39.99-.9.99-1.59s-.35-1.2-.99-1.59v.9zM4.04 23.5c.32.14.68.11 1.01-.08l10.85-6.43-2.26-2.26-9.6 8.77z"/>
              </svg>
              <div><small>Get it on</small><strong>Google Play</strong></div>
            </a>
          </div>

          {/* Socials */}
          <div className="hf-socials">
            {/* Instagram */}
            <a href="#" className="hf-social-icon" style={{ '--c': '#e1306c' } as any} title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hf-social-icon" style={{ '--c': '#0a66c2' } as any} title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="hf-social-icon" style={{ '--c': '#1da1f2' } as any} title="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hf-social-icon" style={{ '--c': '#ff0000' } as any} title="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        {/* RIGHT — Amazon-style feature columns */}
        <div className="hf-columns-grid">
          {columns.map((col, i) => (
            <div key={i} className="hf-col">
              <h5 className="hf-col-head">{col.title}</h5>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}><a href="#" className="hf-link">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─── NEWSLETTER BAND ─── */}
      <div className="hf-nl-band">
        <div className="hf-nl-band-inner">
          <div>
            <p className="hf-nl-band-title">Get the best deals straight to your inbox</p>
            <p className="hf-nl-band-sub">Join 1M+ subscribers. No spam, ever.</p>
          </div>
          {subscribed ? (
            <div className="hf-nl-success">🎉 Subscribed! Check your inbox.</div>
          ) : (
            <div className="hf-nl-form">
              <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="hf-nl-input" />
              <button className="hf-nl-btn" onClick={() => setSubscribed(true)}>Subscribe →</button>
            </div>
          )}
        </div>
      </div>

      {/* ─── BOTTOM BAR ─── */}
      <div className="hf-bottom-bar">
        <span className="hf-copy">© 2026 Hola9 Technologies Pvt. Ltd. All rights reserved.</span>
        <div className="hf-bottom-selects">
          <select className="hf-sel"><option>🌐 English</option><option>🇮🇳 Telugu</option><option>🇮🇳 Hindi</option></select>
          <select className="hf-sel"><option>📍 Hyderabad</option><option>Mumbai</option><option>Delhi</option><option>Bangalore</option></select>
        </div>
        <div className="hf-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
          <a href="#">Accessibility</a>
        </div>
      </div>

    </footer>
  );
}
