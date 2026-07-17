import React from 'react';

export default function Destinations() {
  return (
    <section id="destinations" className="section destinations">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Sacred Destinations
          </span>
          <h2 className="section-title">The <span className="gold-text">Holy Sanctuaries</span></h2>
          <p className="section-subtitle">
            A spiritual journey encompassing the two holiest sanctuaries of Islam, designed for your comfort and absolute peace of mind.
          </p>
        </div>

        <div className="destinations-grid">
          {/* Card 1: Makkah (3D flip layout showing details on back side) */}
          <div className="dest-card dest-card-flip" data-anim="fade-up">
            <div className="dest-card-inner">
              <div className="dest-card-front">
                <div className="dest-card-bg-wrap">
                  <img src="/destination_makkah.png" alt="Holy Kaaba in Makkah - Premium Umrah Package from Ahmedabad" className="dest-card-bg" />
                </div>
                <div className="dest-card-overlay"></div>
                <div className="dest-card-front-content">
                  <div className="dest-card-tag">0-50m from Haram</div>
                  <h3>Makkah Al-Mukarramah</h3>
                  <span className="flip-hint">
                    Hover to explore details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="dest-card-back">
                <div className="dest-card-back-content">
                  <div>
                    <div className="dest-card-tag">0-50m from Haram</div>
                    <h3>Makkah Al-Mukarramah</h3>
                    <p>Perform Tawaf at the Holy Kaaba and offer prayers in Masjid al-Haram, staying in ultra-luxury accommodations steps away from the courtyard.</p>
                    
                    <ul className="dest-highlights">
                      <li>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Luxury 5★ Hotels near Haram (0-50m)
                      </li>
                      <li>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Guided Ziyarat Tours
                      </li>
                      <li>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        24/7 Support & Group Guidance
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="dest-card-meta">
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        5★ Hotels
                      </span>
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
                        3.5 Days Stay
                      </span>
                    </div>
                    <a href="#packages" className="dest-card-link">
                      View Package Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Madinah (3D flip layout showing details on back side) */}
          <div className="dest-card dest-card-flip" data-anim="fade-up">
            <div className="dest-card-inner">
              <div className="dest-card-front">
                <div className="dest-card-bg-wrap">
                  <img src="/destination_madinah.png" alt="Masjid an-Nabawi in Madinah - Sidrah Tours &amp; Travels Sacred Destination" className="dest-card-bg" />
                </div>
                <div className="dest-card-overlay"></div>
                <div className="dest-card-front-content">
                  <div className="dest-card-tag">Radiant City</div>
                  <h3>Madinah Al-Munawwarah</h3>
                  <span className="flip-hint">
                    Hover to explore details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="dest-card-back">
                <div className="dest-card-back-content">
                  <div>
                    <div className="dest-card-tag">Radiant City</div>
                    <h3>Madinah Al-Munawwarah</h3>
                    <p>Offer prayers and greetings to the Prophet Muhammad (PBUH) in Masjid an-Nabawi, and experience the unparalleled tranquility of the city of peace.</p>
                    
                    <ul className="dest-highlights">
                      <li>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Haramain Bullet Train Experience
                      </li>
                      <li>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Rawdah Visit Coordination
                      </li>
                      <li>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Historical Ziyarat Guidance
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="dest-card-meta">
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        Bullet Train
                      </span>
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
                        3.5 Days Stay
                      </span>
                    </div>
                    <a href="#packages" className="dest-card-link">
                      View Package Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
