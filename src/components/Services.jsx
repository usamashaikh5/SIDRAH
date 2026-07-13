import React from 'react';

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            What We Offer
          </span>
          <h2 className="section-title">Premium <span className="gold-text">Services</span></h2>
          <p className="section-subtitle">
            Every detail of your sacred journey is meticulously planned and executed to ensure a seamless, enriching experience.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card" data-anim="fade-up">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </div>
            <h3>Flight Booking</h3>
            <p>Premium airline partnerships ensuring comfortable direct flights to all holy destinations with flexible scheduling.</p>
          </div>

          {/* Card 2 */}
          <div className="service-card" data-anim="fade-up">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
              </svg>
            </div>
            <h3>Luxury Hotels</h3>
            <p>5-star accommodations within walking distance of the holy sites, featuring premium amenities and stunning views.</p>
          </div>

          {/* Card 3 */}
          <div className="service-card" data-anim="fade-up">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <h3>Guided Tours</h3>
            <p>Knowledgeable scholars and experienced guides who bring the history and significance of each sacred site to life.</p>
          </div>

          {/* Card 4 */}
          <div className="service-card" data-anim="fade-up">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>Visa Assistance</h3>
            <p>Complete visa processing and documentation support, handling all bureaucratic requirements on your behalf.</p>
          </div>

          {/* Card 5 */}
          <div className="service-card" data-anim="fade-up">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock multilingual assistance available throughout your journey, ensuring peace of mind at every step.</p>
          </div>

          {/* Card 6 */}
          <div className="service-card" data-anim="fade-up">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3>Group Packages</h3>
            <p>Specially curated group tours that foster community bonds while providing personalized attention to each pilgrim.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
