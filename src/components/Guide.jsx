import React from 'react';

export default function Guide() {
  return (
    <section id="guide" className="section guide-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
            Step-by-Step Guide
          </span>
          <h2 className="section-title">The <span className="gold-text">Sacred Rituals</span></h2>
          <p className="section-subtitle">
            A brief overview of the key spiritual steps performed during Hajj & Umrah pilgrimage.
          </p>
        </div>

        <div className="guide-timeline">
          {/* Step 1 */}
          <div className="guide-step" data-anim="fade-up">
            <div className="guide-step-number">01</div>
            <div className="guide-step-content">
              <h3>Ihram & Intention</h3>
              <p>Begin your pilgrimage by entering the state of Ihram—wearing the sacred white garments, reciting the Talbiyah prayer, and setting your pure spiritual intention.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="guide-step" data-anim="fade-up">
            <div className="guide-step-number">02</div>
            <div className="guide-step-content">
              <h3>Tawaf al-Umrah</h3>
              <p>Encircle the Holy Kaaba seven times in a counter-clockwise direction, expressing devotion, seeking forgiveness, and connecting deeply with the divine presence.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="guide-step" data-anim="fade-up">
            <div className="guide-step-number">03</div>
            <div className="guide-step-content">
              <h3>Sa'i (Safa & Marwah)</h3>
              <p>Walk seven times between the historic hills of Safa and Marwah, re-enacting the search for water by Hajar (AS) and signifying perseverance and trust in God's mercy.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="guide-step" data-anim="fade-up">
            <div className="guide-step-number">04</div>
            <div className="guide-step-content">
              <h3>Halq or Taqsir</h3>
              <p>Conclude the primary rituals of Umrah by shaving (Halq) or clipping (Taqsir) your hair, symbolizing spiritual renewal, humility, and the completion of your sacred duties.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
