/* Qifei Li — shared site behaviour */
(function () {
  'use strict';

  // Nav frost on scroll
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '-32px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('revealed'); });
  }

  // Live Heidelberg (CET/CEST) clock
  var clock = document.getElementById('clock');
  if (clock) {
    var fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false, timeZone: 'Europe/Berlin', timeZoneName: 'short'
    });
    var tick = function () { clock.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  }
})();
