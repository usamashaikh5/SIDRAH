import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import KaabaViewer from './KaabaViewer';

export default function Hero() {
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);

  useEffect(() => {
    // Stat counters count-up animation
    const animateStat = (ref, target) => {
      if (!ref.current) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        delay: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.floor(obj.val);
          }
        }
      });
    };

    animateStat(stat1Ref, 15);
    animateStat(stat2Ref, 50);
    animateStat(stat3Ref, 98);
  }, []);

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
            Specially designed for working professionals. Just take 5 days leave.
            Journey starts from Saturday, return next Sunday. Your trusted partner for a blessed Umrah journey.
          </p>
          
          <div className="hero-buttons">
            <a href="#packages" className="btn btn-primary">
              Explore Packages
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="https://wa.me/919376879151?text=Assalamualaikum%20Hafiz%20Usama%20Shaikh%2C%20I%20am%20interested%20in%20inquiring%20about%20the%207%20Days%20Luxury%20Umrah%20Experience%20(September%20Batch)%20with%20Sidrah%20Tours%20%26%20Travels.%20Could%20you%20please%20provide%20more%20details%3F" 
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

          <div className="hero-stats">
            <div className="hero-stat">
              <span ref={stat1Ref} className="hero-stat-number">0</span><span className="hero-stat-suffix">+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span ref={stat2Ref} className="hero-stat-number">0</span><span className="hero-stat-suffix">K+</span>
              <span className="hero-stat-label">Happy Pilgrims</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span ref={stat3Ref} className="hero-stat-number">0</span><span className="hero-stat-suffix">%</span>
              <span className="hero-stat-label">Satisfaction</span>
            </div>
          </div>
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
