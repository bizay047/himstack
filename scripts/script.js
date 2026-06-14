import { initNavbar } from './navbar.js';
import { initClickSpark } from './clickspark.js';
import { socialIcons } from '../components/social-icons.js';

document.addEventListener('DOMContentLoaded', () => {
  const isPagesFolder = window.location.pathname.includes('/pages/');
  const basePath = isPagesFolder ? '../' : './';
  
  initNavbar(basePath);
  initClickSpark();
  
  // Inject social icons
  const div = document.createElement('div');
  div.innerHTML = socialIcons(basePath);
  document.body.appendChild(div.firstElementChild);

  // Initialize floating social icons logic
  setupSocialIcons();
  
  // Staggered animations
  setupScrollAnimations();
});

function setupSocialIcons() {
  document.querySelectorAll('.social').forEach(icon => {
    icon.addEventListener('click', function(e) {
      // add pop effect
      this.classList.add('pop');
      setTimeout(() => this.classList.remove('pop'), 300);
    });
  });
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
