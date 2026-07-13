import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Testimonials
          </span>
          <h2 className="section-title">What Our <span className="gold-text">Pilgrims Say</span></h2>
          <p className="section-subtitle">
            Hear from those who have trusted us with their most sacred journeys.
          </p>
        </div>

        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card" data-anim="fade-up">
            <div className="testimonial-quote">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#C9A96E" opacity="0.2">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <p className="testimonial-text">
              Sidrah Tours & Travels made our Umrah journey absolutely seamless. Every detail was taken care of, from the flights to the hotel, and the scholar who accompanied us made the experience truly transformative.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AK</div>
              <div className="testimonial-info">
                <strong>Ahmed Khan</strong>
                <span>Hajj 2025 - London, UK</span>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A96E">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card" data-anim="fade-up">
            <div className="testimonial-quote">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#C9A96E" opacity="0.2">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <p className="testimonial-text">
              The premium package exceeded all our expectations. The hotel was steps away from Masjid al-Haram, and the private transportation made everything so convenient. Truly a five-star experience.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">FR</div>
              <div className="testimonial-info">
                <strong>Fatima Rahman</strong>
                <span>Umrah 2025 - Toronto, Canada</span>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A96E">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card" data-anim="fade-up">
            <div className="testimonial-quote">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#C9A96E" opacity="0.2">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <p className="testimonial-text">
              As a first-time pilgrim, I was nervous about the journey. Sidrah's team made me feel at home. The group was wonderful, the scholar was knowledgeable, and the whole trip was life-changing.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">YH</div>
              <div className="testimonial-info">
                <strong>Yusuf Hassan</strong>
                <span>Umrah 2024 - New York, USA</span>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A96E">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
