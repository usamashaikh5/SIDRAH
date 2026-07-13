import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section cta-section">
      <div className="cta-glow"></div>
      <div className="container">
        <div className="cta-content" data-anim="fade-up">
          <h2>Begin Your Sacred Journey Today</h2>
          <p>
            Join the September Batch with Sidrah Tours & Travels. Experience luxury hospitality, 5★ accommodations steps from Haramain, and expert scholarly guidance throughout your pilgrimage.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://wa.me/919376879151?text=Assalamualaikum%20Hafiz%20Usama%20Shaikh%2C%20I%20am%20interested%20in%20inquiring%20about%20the%207%20Days%20Luxury%20Umrah%20Experience%20(September%20Batch)%20with%20Sidrah%20Tours%20%26%20Travels.%20Could%20you%20please%20provide%20more%20details%3F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Book via WhatsApp
            </a>
            <a 
              href="mailto:sidrahtravels2026@gmail.com?subject=Umrah%20Inquiry%20-%20September%20Batch" 
              className="btn btn-glass btn-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
