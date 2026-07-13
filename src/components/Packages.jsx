import React from 'react';

export default function Packages() {
  return (
    <section id="packages" className="section packages">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            </svg>
            September Batch Packages
          </span>
          <h2 className="section-title">Choose Your <span className="gold-text">Sharing Package</span></h2>
          <p className="section-subtitle">
            Affordable and transparent pricing tailored to your sharing preference. Rates are per person and include premium flight booking and luxury hotel stays.
          </p>
        </div>

        <div className="packages-grid">
          {/* Double Sharing */}
          <div className="package-card" data-anim="fade-up">
            <div className="package-tier">Double Sharing</div>
            <div className="package-price">
              <span className="currency">₹</span>
              <span className="amount">1,40,367</span>
              <span className="period">/person starting</span>
            </div>
            <p className="package-desc">Perfect for couples or pairs seeking a premium, personal, and comfortable experience with maximum privacy.</p>
            
            <div className="package-meal-options">
              <div className="meal-option">
                <span className="meal-label">Room Only</span>
                <span className="meal-price">₹1,40,367</span>
              </div>
              <div className="meal-option">
                <span className="meal-label">With Breakfast</span>
                <span className="meal-price">₹1,48,367</span>
              </div>
              <div className="meal-option">
                <span className="meal-label">Full Board (B+L+D)</span>
                <span className="meal-price">₹1,60,367</span>
              </div>
            </div>

            <ul className="package-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Return Air Tickets Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Umrah Visa Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                5★ Hotel (0-50m from Haramain)
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Bullet Train (Makkah-Madinah-Jeddah)
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Private Transport Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                24x7 Customer Support
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Expert Scholarly Guidance
              </li>
            </ul>
            <a 
              href="https://wa.me/919376879151?text=Assalamualaikum%20Hafiz%20Usama%20Shaikh%2C%20I%20am%20interested%20in%20booking%20the%20Double%20Sharing%20package%20for%20the%207%20Days%20Luxury%20Umrah%20Experience%20(September%20Batch).%20Please%20guide%20me%20on%20further%20steps." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-block"
            >
              Book Double Sharing
            </a>
          </div>

          {/* Triple Sharing (Featured) */}
          <div className="package-card package-card-featured" data-anim="fade-up">
            <div className="package-badge">Most Popular</div>
            <div className="package-tier">Triple Sharing</div>
            <div className="package-price">
              <span className="currency">₹</span>
              <span className="amount">1,33,367</span>
              <span className="period">/person starting</span>
            </div>
            <p className="package-desc">An excellent balance of affordability and comfort. Ideal for families or small groups of friends.</p>
            
            <div className="package-meal-options">
              <div className="meal-option">
                <span className="meal-label">Room Only</span>
                <span className="meal-price">₹1,33,367</span>
              </div>
              <div className="meal-option">
                <span className="meal-label">With Breakfast</span>
                <span className="meal-price">₹1,41,367</span>
              </div>
              <div className="meal-option">
                <span className="meal-label">Full Board (B+L+D)</span>
                <span className="meal-price">₹1,53,367</span>
              </div>
            </div>

            <ul className="package-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Return Air Tickets Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Umrah Visa Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                5★ Hotel (0-50m from Haramain)
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Bullet Train (Makkah-Madinah-Jeddah)
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Private Transport Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                24x7 Customer Support
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Expert Scholarly Guidance
              </li>
            </ul>
            <a 
              href="https://wa.me/919376879151?text=Assalamualaikum%20Hafiz%20Usama%20Shaikh%2C%20I%20am%20interested%20in%20booking%20the%20Triple%20Sharing%20package%20for%20the%207%20Days%20Luxury%20Umrah%20Experience%20(September%20Batch).%20Please%20guide%20me%20on%20further%20steps." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-block"
            >
              Book Triple Sharing
            </a>
          </div>

          {/* Quad Sharing */}
          <div className="package-card" data-anim="fade-up">
            <div className="package-tier">Quad Sharing</div>
            <div className="package-price">
              <span className="currency">₹</span>
              <span className="amount">1,27,367</span>
              <span className="period">/person starting</span>
            </div>
            <p className="package-desc">Best value package. Great choice for families, larger groups, or budget-conscious pilgrims seeking luxury service.</p>
            
            <div className="package-meal-options">
              <div className="meal-option">
                <span className="meal-label">Room Only</span>
                <span className="meal-price">₹1,27,367</span>
              </div>
              <div className="meal-option">
                <span className="meal-label">With Breakfast</span>
                <span className="meal-price">₹1,35,367</span>
              </div>
              <div className="meal-option">
                <span className="meal-label">Full Board (B+L+D)</span>
                <span className="meal-price">₹1,47,367</span>
              </div>
            </div>

            <ul className="package-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Return Air Tickets Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Umrah Visa Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                5★ Hotel (0-50m from Haramain)
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Bullet Train (Makkah-Madinah-Jeddah)
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Private Transport Included
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                24x7 Customer Support
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Expert Scholarly Guidance
              </li>
            </ul>
            <a 
              href="https://wa.me/919376879151?text=Assalamualaikum%20Hafiz%20Usama%20Shaikh%2C%20I%20am%20interested%20in%20booking%20the%20Quad%20Sharing%20package%20for%20the%207%20Days%20Luxury%20Umrah%20Experience%20(September%20Batch).%20Please%20guide%20me%20on%20further%20steps." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-block"
            >
              Book Quad Sharing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
