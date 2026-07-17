import React from 'react';
import KaabaViewer from './KaabaViewer';

export default function Hero({ selectedMonth }) {
  return (
    <section id="hero" className="section hero">
      <div className="hero-bg-pattern"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tagline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span>Sidrah Tours & Travels</span>
          </div>
          <h1 className="hero-title">
            7 Days <span className="gold-text">Luxury Umrah</span> Experience
          </h1>
          <p className="hero-description">
            Specially designed for working professionals from Ahmedabad &amp; Gujarat. Just take 5 days leave (Saturday to next Sunday). Your trusted local partner for a blessed luxury Umrah journey.
          </p>
          
          <div className="hero-buttons">
            <a href="#packages" className="btn btn-primary">
              Explore Packages
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href={`https://wa.me/919376879151?text=${encodeURIComponent(`Assalamu Alaikum Hafiz Usama,

I hope you're doing well. 🤲

I am interested in booking the 7 Days Luxury Umrah Experience – ${selectedMonth} Batch.

Could you please guide me through the next steps, including the booking process, payment details, and any documents required?

Looking forward to your response. JazakAllahu Khair! 🌹`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Book via WhatsApp
            </a>
          </div>

          {/* Stats section removed */}
        </div>

        {/* 3D Model Rendering Canvas Wrapper */}
        <KaabaViewer />
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  );
}
