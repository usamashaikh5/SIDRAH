import React, { useEffect } from 'react';
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
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 2. Integrate Lenis with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // 3. GSAP Animations Context for clean component lifecycle updates
    const ctx = gsap.context(() => {
      // Navbar scroll style trigger
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

      // Navbar auto-hide/show on scroll
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

      // ---- Destination Cards ----
      gsap.fromTo('.dest-card', {
        y: 25,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.destinations-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onStart: () => {
          gsap.set('.dest-card', { transition: 'none' });
        },
        onComplete: () => {
          gsap.set('.dest-card', { clearProps: 'transition,transform' });
        }
      });

      // ---- Service Cards ----
      gsap.fromTo('.service-card', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onStart: () => {
          gsap.set('.service-card', { transition: 'none' });
        },
        onComplete: () => {
          gsap.set('.service-card', { clearProps: 'transition,transform' });
        }
      });

      // ---- Package Cards ----
      gsap.fromTo('.package-card', {
        y: 25,
        opacity: 0,
        scale: 0.98
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.packages-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onStart: () => {
          gsap.set('.package-card', { transition: 'none' });
        },
        onComplete: () => {
          gsap.set('.package-card', { clearProps: 'transition,transform,scale' });
        }
      });

      // ---- Testimonial Cards ----
      gsap.fromTo('.testimonial-card', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onStart: () => {
          gsap.set('.testimonial-card', { transition: 'none' });
        },
        onComplete: () => {
          gsap.set('.testimonial-card', { clearProps: 'transition,transform' });
        }
      });

      // ---- Guide Steps ----
      gsap.fromTo('.guide-step', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.guide-timeline',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onStart: () => {
          gsap.set('.guide-step', { transition: 'none' });
        },
        onComplete: () => {
          gsap.set('.guide-step', { clearProps: 'transition,transform' });
        }
      });

      // ---- Madinah Sanctuary Section ----
      gsap.fromTo('.sanctuary-model-col', {
        x: -25,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.madinah-sanctuary',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      });

      gsap.fromTo('.sanctuary-content-col', {
        x: 25,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.madinah-sanctuary',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      });

      // ---- CTA Section ----
      gsap.fromTo('.cta-content', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });

      // ---- Footer ----
      gsap.from('.footer-grid > div', {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 96%',
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
          lenis.scrollTo(target, {
            offset: -80,
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
      <Navbar />
      <Hero />
      <Destinations />
      <Sanctuary />
      <Services />
      <Guide />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
