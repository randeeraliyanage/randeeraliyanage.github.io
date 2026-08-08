const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}));

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), { passive: true });
document.getElementById('year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-30% 0px -60% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

const canvas = document.getElementById('formation-canvas');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas) {
  const context = canvas.getContext('2d');
  const agents = Array.from({ length: 7 }, (_, index) => ({
    x: Math.random(), y: Math.random(), phase: index * 0.72
  }));
  let width = 0;
  let height = 0;
  let frame = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(time = 0) {
    context.clearRect(0, 0, width, height);
    const cx = width * .53;
    const cy = height * .49;
    const radius = Math.min(width, height) * .42;
    const positions = agents.map((agent, index) => {
      const angle = (Math.PI * 2 * index / agents.length) - Math.PI / 2;
      const drift = reducedMotion ? 0 : Math.sin(time * .00055 + agent.phase) * 8;
      return {
        x: cx + Math.cos(angle) * (radius + drift),
        y: cy + Math.sin(angle) * (radius * .74 + drift)
      };
    });

    context.lineWidth = 1;
    context.strokeStyle = 'rgba(11, 116, 93, .17)';
    positions.forEach((point, index) => {
      const next = positions[(index + 1) % positions.length];
      context.beginPath();
      context.moveTo(point.x, point.y);
      context.lineTo(next.x, next.y);
      context.stroke();
      context.beginPath();
      context.moveTo(point.x, point.y);
      context.lineTo(cx, cy);
      context.stroke();
    });

    positions.forEach((point, index) => {
      context.beginPath();
      context.arc(point.x, point.y, index === 0 ? 6 : 4, 0, Math.PI * 2);
      context.fillStyle = index === 0 ? '#b9d97b' : '#0b745d';
      context.fill();
      context.strokeStyle = '#f6f8f5';
      context.lineWidth = 2;
      context.stroke();
    });

    context.beginPath();
    context.arc(cx, cy, 5, 0, Math.PI * 2);
    context.fillStyle = '#102a27';
    context.fill();

    if (!reducedMotion) frame = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else if (!reducedMotion) frame = requestAnimationFrame(draw);
  });
}
