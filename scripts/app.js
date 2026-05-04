// Main app boot — renders all sections in order into #app
import { Navbar } from './navbar.js?v=25';
import { Hero } from './hero.js?v=25';
import { Manifesto } from './manifesto.js?v=25';
import { Partners } from './partners.js?v=25';
import { Philosophy } from './philosophy.js?v=25';
import { Modalidades } from './modalidade.js?v=25';
import { Schedule } from './schedule.js?v=25';
import { Testimonials } from './testimonials.js?v=25';
import { FAQ } from './faq.js?v=25';
import { Footer } from './footer.js?v=25';
import { initScrollReveal, initSpotlight, initTextReveal } from './fx.js?v=25';

const app = document.getElementById('app');
app.innerHTML =
  Navbar() +
  Hero() +
  Manifesto() +
  Partners() +
  Philosophy() +
  Modalidades() +
  Schedule() +
  Testimonials() +
  FAQ() +
  Footer();

// Wire up section-specific interactions
import('./navbar.js?v=25').then(m => m.bindNavbar?.());
import('./hero.js?v=25').then(m => m.bindHero?.());
import('./manifesto.js?v=25').then(m => m.bindManifesto?.());
import('./philosophy.js?v=25').then(m => m.bindPhilosophy?.());
import('./modalidade.js?v=25').then(m => m.bindModalidades?.());
import('./schedule.js?v=25').then(m => m.bindSchedule?.());
import('./testimonials.js?v=25').then(m => m.bindTestimonials?.());
import('./faq.js?v=25').then(m => m.bindFAQ?.());

// Global fx
initTextReveal();
initScrollReveal();
initSpotlight();
