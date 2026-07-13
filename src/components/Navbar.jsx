import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="Makkah Madinah Logo" className="brand-logo-img" />
          <div className="logo-text">
            <span className="logo-title">Sidrah</span>
            <span className="logo-subtitle">Tours & Travels</span>
          </div>
        </a>
        
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#hero" className="nav-link active" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#destinations" className="nav-link" onClick={() => setIsOpen(false)}>Holy Cities</a></li>
          <li><a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Inclusions</a></li>
          <li><a href="#packages" className="nav-link" onClick={() => setIsOpen(false)}>Packages</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a 
            href="https://wa.me/919376879151?text=Assalamualaikum%20Hafiz%20Usama%20Shaikh%2C%20I%20am%20interested%20in%20inquiring%20about%20the%207%20Days%20Luxury%20Umrah%20Experience%20(September%20Batch)%20with%20Sidrah%20Tours%20%26%20Travels.%20Could%20you%20please%20provide%20more%20details%3F" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
          >
            Book Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button 
            className={`nav-toggle ${isOpen ? 'active' : ''}`} 
            id="navToggle" 
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
