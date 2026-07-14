import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Sanctuary from './components/Sanctuary';
import Services from './components/Services';
import Guide from './components/Guide';
import Packages from './components/Packages';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState('September');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll — tuned for butter-smooth feel
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;

    // 2. Integrate Lenis with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      const scrollPos = e.scroll !== undefined ? e.scroll : window.scrollY;
      if (scrollPos > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // Helper: add .revealed class to restore CSS hover transitions after GSAP
    const addRevealed = (selector) => {
      document.querySelectorAll(selector).forEach(el => el.classList.add('revealed'));
    };

    // 3. GSAP Animations Context
    const ctx = gsap.context(() => {
      // =============================================
      // Navbar: Scroll style + auto-hide/show
      // =============================================
      ScrollTrigger.create({
        start: 'top -80',
        onUpdate: (self) => {
          const navbar = document.getElementById('navbar');
          if (!navbar) return;
          if (self.scroll() > 80) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        },
      });

      let lastScroll = 0;
      ScrollTrigger.create({
        onUpdate: (self) => {
          const navbar = document.getElementById('navbar');
          if (!navbar) return;
          const currentScroll = self.scroll();
          if (currentScroll > lastScroll && currentScroll > 400) {
            gsap.to(navbar, { y: -100, duration: 0.3, ease: 'power2.in' });
          } else {
            gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power2.out' });
          }
          lastScroll = currentScroll;
        },
      });

      // =============================================
      // Hero Section (immediate on load)
      // =============================================
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', force3D: true } });
      heroTl
        .fromTo('.hero-tagline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
        .fromTo('.hero-description', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo('.hero-buttons', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-model', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6');

      // =============================================
      // Section Headers: Tag → Title → Subtitle cascade
      // =============================================
      document.querySelectorAll('.section-header').forEach((header) => {
        const tag = header.querySelector('.section-tag');
        const title = header.querySelector('.section-title');
        const subtitle = header.querySelector('.section-subtitle');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          defaults: { ease: 'power2.out', force3D: true },
        });

        if (tag) tl.to(tag, { y: 0, opacity: 1, duration: 0.7 });
        if (title) tl.to(title, { y: 0, opacity: 1, duration: 0.9 }, '-=0.3');
        if (subtitle) tl.to(subtitle, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4');
      });

      // =============================================
      // Destinations: Flip cards rise up
      // =============================================
      gsap.to('.dest-card-flip', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.destinations-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onComplete: () => addRevealed('.dest-card-flip'),
      });

      // =============================================
      // Sanctuary: Slide in from sides
      // =============================================
      gsap.to('.sanctuary-model-col', {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.madinah-sanctuary',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to('.sanctuary-content-col', {
        x: 0,
        opacity: 1,
        duration: 1.1,
        delay: 0.2,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.madinah-sanctuary',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // =============================================
      // Services: Cards rise up with stagger
      // =============================================
      gsap.to('.service-card', {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onComplete: () => addRevealed('.service-card'),
      });

      // =============================================
      // Guide: Steps cascade in one by one
      // =============================================
      gsap.to('.guide-step', {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.guide-timeline',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onComplete: () => addRevealed('.guide-step'),
      });

      // =============================================
      // Packages: Cards rise up with stagger
      // =============================================
      gsap.to('.package-card', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.packages-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onComplete: () => addRevealed('.package-card'),
      });

      // =============================================
      // CTA: Fade up
      // =============================================
      gsap.to('.cta-content', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // =============================================
      // Footer: Columns stagger in
      // =============================================
      gsap.to('.footer-grid > div', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      });
    });

    // 4. Anchor Link Smooth Scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href === '#' || !href) return;
      e.preventDefault();
      try {
        const target = document.querySelector(href);
        if (target) {
          const isHero = href === '#hero';
          lenis.scrollTo(target, {
            offset: isHero ? 0 : -80,
            duration: 1.5,
          });
        }
      } catch (err) {
        console.warn('Invalid anchor target:', href);
      }
    };

    document.addEventListener('click', handleAnchorClick);

     // Cleanups on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
      ctx.revert();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Navbar selectedMonth={selectedMonth} />
      <Hero selectedMonth={selectedMonth} />
      <Destinations />
      <Sanctuary selectedMonth={selectedMonth} />
      <Services />
      <Guide />
      <Packages selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      {/* <Testimonials /> */}
      <Contact selectedMonth={selectedMonth} />
      <Footer />

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'active' : ''}`}
        onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.5 })}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
}
