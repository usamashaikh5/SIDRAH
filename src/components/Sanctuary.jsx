import React from 'react';

export default function Sanctuary({ selectedMonth }) {
  return (
    <section id="madinah-sanctuary" className="section madinah-sanctuary">
      <div className="container">
        <div className="sanctuary-grid">
          {/* Left Column: Sanctuary Image */}
          <div className="sanctuary-model-col" data-anim="fade-up">
            <div className="sanctuary-image-wrapper">
              <img src="/madinah_sanctuary_bg.png" alt="Masjid an-Nabawi Madinah" className="sanctuary-static-image" />
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="sanctuary-content-col" data-anim="fade-up">
            <div className="sanctuary-tagline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>Prophetic Sanctuary</span>
            </div>
            <h2 className="sanctuary-title">Visit <span className="gold-text">Al-Masjid an-Nabawi</span> in Serene Comfort</h2>
            <p className="sanctuary-description">
              Madinah Al-Munawwarah, the illuminated city of the Prophet Muhammad (PBUH). Our custom packages ensure you spend 3.5 peaceful days visiting the second holiest sanctuary in Islam.
            </p>
            <p className="sanctuary-description">
              Experience the tranquil beauty of the Green Dome, pray inside the sacred garden of Ar-Rawdah ash-Sharifah, and visit historic sites in Madinah with expert scholarly guides.
            </p>
            
            <div className="sanctuary-highlights">
              <div className="sanctuary-highlight">
                <span className="highlight-number">3.5</span>
                <span className="highlight-label">Days Stay in Madinah</span>
              </div>
              <div className="sanctuary-highlight">
                <span className="highlight-number">5★</span>
                <span className="highlight-label">Luxury Hotels Near Masjid</span>
              </div>
              <div className="sanctuary-highlight">
                <span className="highlight-number">0</span>
                <span className="highlight-label">Meters Walking Distance</span>
              </div>
            </div>
            
            <div className="sanctuary-buttons">
              <a 
                href={`https://wa.me/919376879151?text=${encodeURIComponent(`Assalamu Alaikum Hafiz Usama,

I hope you're doing well. 🤲

I am interested in the 7 Days Luxury Umrah Experience – ${selectedMonth} Batch. Could you please provide more details about the Madinah stay?

Looking forward to your response. JazakAllahu Khair! 🌹`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Inquire About Madinah Stay
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
