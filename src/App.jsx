import React, { useEffect, useState } from 'react';
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

    // 2. Integrate Lenis with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    lenis.on('scroll', ScrollTrigger.update);
    
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
      // Hero Section
      // =============================================
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', force3D: true } });
      heroTl
        .fromTo('.hero-tagline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
        .fromTo('.hero-description', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo('.hero-buttons', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-model', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6');

      // =============================================
      // Section Headers: Smooth cascade
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

        if (tag) tl.fromTo(tag, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 });
        if (title) tl.fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.35');
        if (subtitle) tl.fromTo(subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4');
      });

      // =============================================
      // Destinations: Flip cards
      // =============================================
      gsap.fromTo('.dest-card-flip', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
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
      gsap.fromTo('.sanctuary-model-col', {
        x: -60,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.madinah-sanctuary',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.fromTo('.sanctuary-content-col', {
        x: 60,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.15,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.madinah-sanctuary',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // =============================================
      // Services: Cards fade up
      // =============================================
      gsap.fromTo('.service-card', {
        y: 40,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
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
      // Guide: Steps cascade in
      // =============================================
      gsap.fromTo('.guide-step', {
        y: 40,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
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
      // Packages: Cards fade up
      // =============================================
      gsap.fromTo('.package-card', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
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
      gsap.fromTo('.cta-content', {
        y: 40,
        opacity: 0,
      }, {
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
      gsap.fromTo('.footer-grid > div', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.7,
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
    </>
  );
}
