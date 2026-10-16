const themeToggle = document.querySelector('#theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
const navItems = document.querySelectorAll('.nav-link');

// Set the copyright year automatically.
document.querySelector('#year').textContent = new Date().getFullYear();

// Toggle the dark theme by adding/removing a class on the body.
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('aria-pressed', String(isDark));
});

// Show or hide the navigation links on small screens.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

// Close the mobile menu after a link is selected and update the active link.
navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    navItems.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
