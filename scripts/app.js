// Main app boot — renders all sections in order into #app
import { Navbar } from './navbar.js?v=22';
import { Hero } from './hero.js?v=22';
import { Manifesto } from './manifesto.js?v=22';
import { Partners } from './partners.js?v=22';
import { Philosophy } from './philosophy.js?v=22';
import { Schedule } from './schedule.js?v=22';
import { Testimonials } from './testimonials.js?v=22';
import { FAQ } from './faq.js?v=22';
import { Footer } from './footer.js?v=22';
import { initScrollReveal, initSpotlight, initTextReveal } from './fx.js?v=22';

const app = document.getElementById('app');
app.innerHTML =
  Navbar() +
  Hero() +
  Manifesto() +
  Partners() +
  Philosophy() +
  Schedule() +
  Testimonials() +
  FAQ() +
  Footer();

// Wire up section-specific interactions
import('./navbar.js?v=22').then(m => m.bindNavbar?.());
import('./hero.js?v=22').then(m => m.bindHero?.());
import('./manifesto.js?v=22').then(m => m.bindManifesto?.());
import('./philosophy.js?v=22').then(m => m.bindPhilosophy?.());
import('./schedule.js?v=22').then(m => m.bindSchedule?.());
import('./testimonials.js?v=22').then(m => m.bindTestimonials?.());
import('./faq.js?v=22').then(m => m.bindFAQ?.());

// Global fx
initTextReveal();
initScrollReveal();
initSpotlight();
