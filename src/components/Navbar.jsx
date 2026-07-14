import React, { useState, useEffect } from 'react';

export default function Navbar({ selectedMonth }) {
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
          <img src="/logo (2).png" alt="Sidrah Tours & Travels Logo" className="brand-logo-img" />
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
            href={`https://wa.me/919376879151?text=${encodeURIComponent(`Assalamu Alaikum Hafiz Usama,

I hope you're doing well. 🤲

I am interested in booking the 7 Days Luxury Umrah Experience – ${selectedMonth} Batch.

Could you please guide me through the next steps, including the booking process, payment details, and any documents required?

Looking forward to your response. JazakAllahu Khair! 🌹`)}`} 
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
