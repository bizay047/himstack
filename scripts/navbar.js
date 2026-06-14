import { navbarTemplate } from '../components/navbar/navbar.js';

export function initNavbar(basePath) {
  const mount = document.getElementById('site-navbar');
  if (mount) {
    mount.innerHTML = navbarTemplate(basePath);
    setupNavbarBehavior();
  }
}

function setupNavbarBehavior() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navbar = document.querySelector('.navbar');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });
  }

  // Keyboard and hover logic for dropdowns
  const navItems = document.querySelectorAll('.nav-item.dropdown');
  
  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    
    // Toggle on click for mobile
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 780) {
        e.preventDefault();
        const isOpen = item.classList.contains('active');
        // Close others
        navItems.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('active');
          link.setAttribute('aria-expanded', 'true');
        }
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navMenu && navMenu.classList.remove('active');
      navToggle && navToggle.setAttribute('aria-expanded', 'false');
      navItems.forEach(item => {
        item.classList.remove('active');
        const pl = item.querySelector('a');
        if (pl) pl.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Highlight active link based on current URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
      link.classList.add('current');
    }
  });
}
