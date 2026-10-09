/**
 * GTP Hardware — Navigation & Interactive UI Components
 * File: js/nav.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Mobile Menu Toggle & Accessibility
  // ==========================================
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      // Toggle state
      navToggle.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('is-active');

      // Accessibility focus management
      if (!isExpanded) {
        navToggle.setAttribute('aria-label', 'Close menu');
      } else {
        navToggle.setAttribute('aria-label', 'Open menu');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        primaryNav.classList.contains('is-active') &&
        !primaryNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        primaryNav.classList.remove('is-active');
      }
    });

    // Close mobile menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        primaryNav.classList.remove('is-active');
        navToggle.focus();
      }
    });
  }

  // ==========================================
  // 2. Highlight Active Page Link
  // ==========================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // ==========================================
  // 3. Header Box-Shadow on Scroll
  // ==========================================
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    });
  }
});
