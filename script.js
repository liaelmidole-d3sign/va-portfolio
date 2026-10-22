(() => {
  const menu = document.getElementById('menu-button');
  const nav = document.getElementById('site-navigation');
  const links = [...document.querySelectorAll('.nav-link')];
  const closeMenu = () => {
    nav?.classList.remove('is-open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open menu');
    document.querySelector('.site-header')?.classList.remove('menu-open');
  };
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    document.querySelector('.site-header')?.classList.toggle('menu-open', open);
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => { if (nav && menu && !nav.contains(e.target) && !menu.contains(e.target)) closeMenu(); });

  const speeches = [...document.querySelectorAll('[data-service-speech]')];
  const original = 'Here are the<br>services I can<br>help you with!';
  let resetTimeout;
  document.querySelectorAll('.service-card').forEach(card => {
    const speak = () => {
      clearTimeout(resetTimeout);
      speeches.forEach(speech => { speech.textContent = card.dataset.speech || ''; speech.classList.add('is-speaking'); });
    };
    const reset = () => {
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        speeches.forEach(speech => {speech.innerHTML = original; speech.classList.remove('is-speaking');});
      }, 900);
    };
    card.addEventListener('mouseenter', speak);
    card.addEventListener('mouseleave', reset);
    card.addEventListener('focus', speak);
    card.addEventListener('blur', reset);
    card.addEventListener('click', speak);
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, {rootMargin: '-20% 0px -65% 0px'});
  for (const section of document.querySelectorAll('#home,#about,#services,#experience,#skills,#education,#contact')) observer.observe(section);
  document.getElementById('year').textContent = new Date().getFullYear();
})();
