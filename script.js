/* ============================================================
   Hospitality Cancun — cinematic landing page
   Content data + rendering (all copy/images sourced from the
   existing hospitalitycancun.com site)
   ============================================================ */

const DATA = {
  ticker: [
    'Plastic Surgery', 'Exosomes', 'Dental Procedures', 'Stem cell therapy',
    'Flights', 'Accommodations', 'Local transportation',
    'Playa del Carmen', 'Cozumel', 'Puerto Morelos', 'Tulum',
    'Cancún International Airport', 'Personalized care', 'A healing holiday'
  ],

  // only lightweight assets here: the strip is decorative and already cached
  // from the sections above, so it adds essentially no extra page weight.
  marqueeImgs: [
    'assets/img/travel-rewards-card.jpeg', 'assets/img/plastic-surgery.jpg',
    'assets/img/exomas-celuas-madre.jpg', 'assets/img/dental-procedures.jpg',
    'assets/img/Stem-cell-therapy.jpg', 'assets/img/Exosome-therapy.jpg',
    'assets/img/img1-hospi.jpg', 'assets/img/img2-hospi.jpg', 'assets/img/img3-hospi.jpg'
  ],

  apps: [
    { icon: 'assets/icons/skin.svg', title: 'Skin Rejuvenation',
      text: 'Promote collagen synthesis, improve skin elasticity, and reduce the appearance of wrinkles by stimulating fibroblast proliferation and function.' },
    { icon: 'assets/icons/osteoarthritis.svg', title: 'Osteoarthritis and Joint Health',
      text: 'MSC exosomes have shown potential in treating age-related joint degeneration by promoting cartilage repair, reducing inflammation, and modulating immune responses.' },
    { icon: 'assets/icons/muscle.svg', title: 'Muscle Regeneration',
      text: 'Promote muscle regeneration by stimulating satellite cell activation, proliferation, and differentiation, potentially mitigating the effects of sarcopenia and improving muscle function.' },
    { icon: 'assets/icons/neurodegenerative.svg', title: 'Neurodegenerative Diseases',
      text: 'May offer therapeutic potential for age-related neurodegenerative diseases, such as Alzheimer’s and Parkinson’s, by modulating neuroinflammation, promoting neuronal survival, and facilitating neural repair and regeneration.' },
    { icon: 'assets/icons/cardiovascular.svg', title: 'Cardiovascular Health',
      text: 'Can improve vascular function and promote angiogenesis, which may help address age-related cardiovascular issues, such as atherosclerosis and ischemic diseases.' },
    { icon: 'assets/icons/metabolic.svg', title: 'Metabolic Health',
      text: 'Can potentially help regulate glucose and lipid metabolism, improving insulin sensitivity and mitigating the effects of age-related metabolic disorders, such as type 2 diabetes and dyslipidemia.' }
  ],

  why: [
    { title: 'All-in-One Convenience',
      text: 'From the initial consultation to post-treatment relaxation, every aspect of your journey is seamlessly coordinated for your comfort.' },
    { title: 'Affordable Excellence',
      text: 'Enjoy significant savings on medical procedures compared to prices in the USA, without compromising on quality.' },
    { title: 'World-Class Medical Facilities',
      text: 'Our hospitals are staffed by highly qualified, certified and experienced medical professionals, in modern facilities designed to heal.' },
    { title: 'Personalized Care',
      text: 'At Costamed, we understand that each patient is unique. Our dedicated team ensures personalized attention and tailored treatment plans.' },
    { title: 'A Healing Holiday',
      text: 'Combine your medical treatment with the opportunity to relax and recover in one of the world’s most stunning destinations.' }
  ],

  packages: {
    stem: [
      { tier: 'Standard', name: 'Stem cell — Standard', dose: '100 million HP-MSCs', time: 'Time of application 1½ hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '100 million HP-MSCs', 'Personalized follow-up', 'Snack provided'] },
      { tier: 'Gold', name: 'Stem cell — Gold', dose: '200 million HP-MSCs', time: 'Time of application 2½ hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '200 million HP-MSCs', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'] },
      { tier: 'Platinum', name: 'Stem cell — Platinum', dose: '300 million HP-MSCs', time: 'Time of application 3½ hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '300 million HP-MSCs', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'] }
    ],
    exo: [
      { tier: 'Standard', name: 'Exosomes — Standard', dose: '400 micrograms', time: 'Time of application 1 hour',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '400 micro grams of Exosome vial therapy', 'Personalized follow-up', 'Snack provided'] },
      { tier: 'Gold', name: 'Exosomes — Gold', dose: '800 micrograms', time: 'Time of application 2 hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '800 micro grams of Exosome vial therapy', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'] },
      { tier: 'Platinum', name: 'Exosomes — Platinum', dose: '1,400 micrograms', time: 'Time of application 3 hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '1,400 micro grams of Exosome vial therapy', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'] }
    ],
    both: [
      { tier: 'Standard', name: 'Stem cell + Exosomes — Standard', dose: '100 million HP-MSCs + 400 IU', time: 'Time of application 1½ hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '100 million HP-MSCs + 400 IU of Exosomes', 'Personalized follow-up', 'Snack provided'] },
      { tier: 'Gold', name: 'Stem cell + Exosomes — Gold', dose: '200 million HP-MSCs + 400 IU', time: 'Time of application 2½ hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '200 million HP-MSCs + 400 IU of Exosomes', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'] },
      { tier: 'Platinum', name: 'Stem cell + Exosomes — Platinum', dose: '300 million HP-MSCs + 400 IU', time: 'Time of application 3½ hours',
        items: ['Personalized Concierge Service', 'Initial medical Assessment', '300 million HP-MSCs + 400 IU of Exosomes', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'] }
    ]
  },

  doctors: [
    { name: 'Dr. Carlos García', spec: 'Pediatrics', img: 'assets/doctors/dr-carlos-garcia.jpg' },
    { name: 'Dr. Joel Rodríguez', spec: 'Neurosurgery', img: 'assets/doctors/dr-joel-rodriguez.jpg' },
    { name: 'Dra. Michel García', spec: 'Obstetrics & Gynecology', img: 'assets/doctors/dra-michel-garcia.jpg' },
    { name: 'Dr. Aldo Diosdado', spec: 'Plastic Surgery', img: 'assets/doctors/dr-aldo-diosdado.jpg' },
    { name: 'Dr. Salvador Martín', spec: 'General Surgery', img: 'assets/doctors/dr-salvador-martin.jpg' },
    { name: 'Dr. Javier Vázquez Ordoñez', spec: 'Anesthesiology', img: 'assets/doctors/dr-javier-vazquez.jpg' },
    { name: 'Dr. Jose Medina S.', spec: 'Urology', img: 'assets/doctors/dr-jose-medina.jpg' },
    { name: 'Dr. Moisés Hernández', spec: 'Dental Surgery', img: 'assets/doctors/dr-moises-hernandez.jpg' },
    { name: 'Dr. Raúl Medina', spec: 'Radiology', img: 'assets/doctors/dr-raul-medina.jpg' },
    { name: 'Dr. Rafael Moguel', spec: 'Cardiology · Interventional Cardiology', img: 'assets/doctors/dr-rafael-moguel.jpg' },
    { name: 'Dr. Ricardo Segovia', spec: 'Gastroenterology · Gastrointestinal Endoscopy', img: 'assets/doctors/dr-ricardo-segovia.jpg' },
    { name: 'Dr. Ricardo Montero', spec: 'High specialization in Endoscopic Surgery and Bariatric and Metabolic Surgery', img: 'assets/doctors/dr-ricardo-montero.jpg' }
  ]
};

/* ---------- published procedure pricing ---------- */
const CATS = {
  plastic: 'Plastic Surgery',
  gastro: 'Gastroenterology',
  gyn: 'Gynecology',
  ent: 'Otorhinolaryngology',
  general: 'General Surgery',
  dental: 'Dental Procedures'
};

const PROCEDURES = [
  { c: 'plastic', n: 'Breast Augmentation w/ Implants', p: 4774, h: 0 },
  { c: 'plastic', n: 'Buttock Augmentation w/ Implants', p: 6435, h: 1 },
  { c: 'plastic', n: 'Tummy Tuck', p: 5796, h: 1 },
  { c: 'plastic', n: 'Facelift', p: 7202, h: 1 },
  { c: 'plastic', n: 'Mastopexy', p: 6818, h: 1 },
  { c: 'plastic', n: 'Mommy Makeover', p: 10077, h: 1 },
  { c: 'plastic', n: 'Liposculpture with BBL', p: 5413, h: 1 },

  { c: 'gastro', n: 'Gastric Balloon Placement', p: 3368, h: 0 },
  { c: 'gastro', n: 'Gastric Balloon Removal', p: 1899, h: 0 },
  { c: 'gastro', n: 'Hemorrhoid Ligation', p: 1516, h: 0 },
  { c: 'gastro', n: 'External Hemorrhoidectomy (Complex or Extensive)', p: 2155, h: 0 },
  { c: 'gastro', n: 'Endoscopy w/ Biopsy', p: 1019, h: 0 },
  { c: 'gastro', n: 'Colonoscopy w/ Biopsy', p: 1302, h: 0 },
  { c: 'gastro', n: 'Correction of Initial Incisional or Ventral Hernia (Incarceration or Strangulation)', p: 5218, h: 3 },

  { c: 'gyn', n: 'Laparoscopic Hysterectomy', p: 7905, h: 2 },
  { c: 'gyn', n: 'Laparoscopic Myomectomy', p: 7905, h: 2 },
  { c: 'gyn', n: 'Laparoscopic Cystectomy', p: 4966, h: 1 },
  { c: 'gyn', n: 'Oophorectomy (Partial or Total, Unilateral)', p: 3368, h: 2 },

  { c: 'ent', n: 'Tonsillectomy with Biopsy', p: 2538, h: 1 },
  { c: 'ent', n: 'Turbinate Cauterization', p: 877, h: 0 },
  { c: 'ent', n: 'Septoplasty', p: 2985, h: 1 },
  { c: 'ent', n: 'Primary Rhinoplasty Including Correction', p: 3407, h: 0 },

  { c: 'general', n: 'Laparoscopic Appendectomy', p: 4902, h: 1 },
  { c: 'general', n: 'Umbilical Hernioplasty', p: 1995, h: 0 },
  { c: 'general', n: 'Open Inguinal Hernioplasty', p: 3752, h: 1 },
  { c: 'general', n: 'Laparoscopic Cholecystectomy', p: 5030, h: 1 },

  { c: 'dental', n: 'Veneer', p: 727, h: 0 },
  { c: 'dental', n: 'Metal / Porcelain Crown', p: 627, h: 0 },
  { c: 'dental', n: 'Emax Crown', p: 727, h: 0 },
  { c: 'dental', n: 'Zirconia Crown', p: 777, h: 0 },
  { c: 'dental', n: 'Upper Complete Denture', p: 700, h: 0 },
  { c: 'dental', n: 'Lower Complete Denture', p: 700, h: 0 },
  { c: 'dental', n: 'Aesthetic Prosthesis Unit 1–2 Units', p: 523, h: 0 },
  { c: 'dental', n: 'Unilateral Prosthesis', p: 646, h: 0 },
  { c: 'dental', n: 'Bilateral Prosthesis', p: 778, h: 0 },
  { c: 'dental', n: 'Aesthetic Prosthesis', p: 832, h: 0 },
  { c: 'dental', n: 'Acrylic Unit', p: 518, h: 0 },
  { c: 'dental', n: 'Unilateral Acrylic Prosthesis 2 or More', p: 526, h: 0 },
  { c: 'dental', n: 'Bilateral Acrylic Prosthesis', p: 615, h: 0 },
  { c: 'dental', n: 'Dental Implant', p: 2317, h: 0 }
];

const money = n => '$' + n.toLocaleString('en-US');
const esc = s => String(s).replace(/[&<>'\"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ============================================================
   Rendering
   ============================================================ */
function renderTicker() {
  const el = $('#tickerTrack');
  if (!el) return;
  const set = DATA.ticker.map(t => `<span>${esc(t)}</span>`).join('');
  el.innerHTML = set + set;
}

function renderImgMarquee() {
  const el = $('#imgMarquee');
  if (!el) return;
  const imgs = DATA.marqueeImgs.map(src => `<img src="${src}" alt="" loading="lazy" decoding="async">`).join('');
  el.innerHTML = imgs + imgs;
}

function renderApps() {
  const el = $('#appGrid');
  if (!el) return;
  el.innerHTML = DATA.apps.map(a => `
    <article class="app reveal-up">
      <img src="${a.icon}" alt="" loading="lazy">
      <h4>${esc(a.title)}</h4>
      <p>${esc(a.text)}</p>
    </article>`).join('');
}

function renderWhy() {
  const el = $('#whyGrid');
  if (!el) return;
  el.innerHTML = DATA.why.map(w => `
    <article class="why-card reveal-up">
      <h4>${esc(w.title)}</h4>
      <p>${esc(w.text)}</p>
    </article>`).join('');
}

function renderPackages(key) {
  const el = $('#pkgGrid');
  if (!el) return;
  const list = DATA.packages[key] || [];
  el.innerHTML = list.map(p => `
    <article class="pkg">
      <span class="pkg-tier">${esc(p.tier)}</span>
      <h3>${esc(p.dose)}</h3>
      <ul>${p.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
      <p class="pkg-foot">${esc(p.time)}</p>
      <a class="pkg-cta" href="#contactForm" data-inquiry="${esc('I am interested in the ' + p.name + ' package.')}">Ask about this package <span aria-hidden="true">→</span></a>
    </article>`).join('');
  if (window.__animateIn) window.__animateIn($$('#pkgGrid .pkg'));
}

// How many cards the pricing grid shows before "Show all" reveals the rest.
const PROC_VISIBLE = 8;
const procedureView = { filter: 'all', query: '', sort: 'default', expanded: false };

function renderProcedures(filter = procedureView.filter) {
  const el = $('#procGrid');
  if (!el) return;
  procedureView.filter = filter;
  const query = procedureView.query.trim().toLocaleLowerCase();
  let list = PROCEDURES.filter(p => {
    const matchesFilter = filter === 'all' || p.c === filter;
    const matchesQuery = !query || (p.n + ' ' + CATS[p.c]).toLocaleLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });
  if (procedureView.sort === 'price-asc') list = [...list].sort((a, b) => a.p - b.p || a.n.localeCompare(b.n));
  if (procedureView.sort === 'price-desc') list = [...list].sort((a, b) => b.p - a.p || a.n.localeCompare(b.n));
  if (procedureView.sort === 'name') list = [...list].sort((a, b) => a.n.localeCompare(b.n));
  const count = $('#procCount');
  if (count) count.textContent = list.length === PROCEDURES.length
    ? `${list.length} procedures` : `${list.length} of ${PROCEDURES.length} procedures`;
  const more = $('#procMore');
  const moreBtn = $('#procMoreBtn');
  const canToggle = list.length > PROC_VISIBLE;
  const includes = h => {
    const base = ["Doctor's Fees", 'Hospital Medicines & Material (for procedure)',
      '3 nights Hotel stay (double occupancy)', 'Transportation (Airport-Hotel)'];
    if (h > 0) base.push(h + (h === 1 ? ' Night of Hospital stay' : ' Nights of Hospital stay'));
    return base;
  };
  if (!list.length) {
    el.innerHTML = `<div class="proc-empty"><strong>No procedures found</strong>Try a different search or clear the filters.<br><button class="chip" type="button" data-clear-search>Clear search</button></div>`;
    if (more) more.hidden = true;
    return;
  }
  const shown = procedureView.expanded ? list : list.slice(0, PROC_VISIBLE);
  if (more) more.hidden = !canToggle;
  // Always resync the control, even when it is hidden, so it can never come
  // back carrying a stale label or aria-expanded value.
  if (moreBtn) {
    moreBtn.textContent = procedureView.expanded ? 'Show fewer' : `Show all ${list.length} procedures`;
    moreBtn.setAttribute('aria-expanded', String(procedureView.expanded));
  }
  el.innerHTML = shown.map(p => {
    const id = 'proc-detail-' + PROCEDURES.indexOf(p);
    return `
    <article class="proc" data-proc="${esc(p.n)}">
      <span class="proc-cat">${esc(CATS[p.c])}</span>
      <h4>${esc(p.n)}</h4>
      <div class="proc-price">${money(p.p)}<small>USD</small></div>
      <button class="proc-toggle" type="button" aria-expanded="false" aria-controls="${id}">What's included</button>
      <div class="proc-detail" id="${id}" hidden>
        <b>Includes</b>${includes(p.h).map(i => esc(i)).join(' &middot; ')}
        <b style="margin-top:.6rem">Not included</b>Pre and post consultations, preoperative lab services, post surgery care, procedure complications, air transportation, additional hotel nights, additional nights of hospital stay.
      </div>
      <a class="proc-inquiry" href="#contactForm" data-inquiry="${esc('I would like information about ' + p.n + ' (' + money(p.p) + ' USD).')}">Ask about this procedure <span aria-hidden="true">→</span></a>
    </article>`;
  }).join('');
  if (window.__animateIn) window.__animateIn($$('#procGrid .proc'));
}

function renderFilters() {
  const el = $('#filters');
  if (!el) return;
  const cats = [['all', 'All specialties']].concat(Object.entries(CATS));
  el.innerHTML = cats.map(([k, label], i) =>
    `<button class="chip${i === 0 ? ' is-active' : ''}" type="button" aria-pressed="${i === 0}" data-filter="${k}">${esc(label)}</button>`
  ).join('');
}

function renderDoctors() {
  const el = $('#docTrack');
  if (!el) return;
  const card = (d, duplicate = false) => `
    <article class="doc"${duplicate ? ' aria-hidden="true"' : ''}>
      <img src="${d.img}" alt="${duplicate ? '' : esc(d.name)}" loading="lazy" decoding="async">
      <div class="doc-body">
        <h4>${esc(d.name)}</h4>
        <p>${esc(d.spec)}</p>
      </div>
    </article>`;
  const set = DATA.doctors.map(d => card(d)).join('');
  const duplicateSet = DATA.doctors.map(d => card(d, true)).join('');
  el.innerHTML = set + duplicateSet;
}

/* ============================================================
   Interactions
   ============================================================ */
function initInquiryLinks() {
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-inquiry]');
    if (!link) return;
    const message = $('#message');
    const status = $('#formStatus');
    if (message) message.value = link.dataset.inquiry;
    if (status) {
      status.classList.remove('is-error');
      status.textContent = 'We added your selection to the message. Add your contact details to continue.';
    }
    if (message) requestAnimationFrame(() => message.focus({ preventScroll: true }));
  });
}

function initNav() {
  const nav = $('#siteNav');
  const burger = $('#burger');
  const links = $('#primaryNav');
  const isCompactNav = () => window.matchMedia('(max-width: 960px)').matches;
  const close = ({ restoreFocus = false } = {}) => {
    if (!burger || !links || !links.classList.contains('is-open')) return;
    links.classList.remove('is-open');
    links.setAttribute('aria-hidden', String(isCompactNav()));
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    window.__lenis?.start();
    if (restoreFocus) burger.focus();
  };
  if (burger && links) {
    links.setAttribute('aria-hidden', String(isCompactNav()));
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      links.setAttribute('aria-hidden', String(!open && isCompactNav()));
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        window.__lenis?.stop();
        requestAnimationFrame(() => $('a', links)?.focus());
      } else {
        window.__lenis?.start();
      }
    });
    $$('a', nav).forEach(a => a.addEventListener('click', () => close()));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && links.classList.contains('is-open')) {
        close({ restoreFocus: true });
        return;
      }
      if (e.key !== 'Tab' || !links.classList.contains('is-open')) return;
      const menuLinks = $$('a', links);
      const first = menuLinks[0], last = menuLinks.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); burger.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); burger.focus();
      } else if (e.shiftKey && document.activeElement === burger) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === burger) {
        e.preventDefault(); first.focus();
      }
    });
      document.addEventListener('click', e => {
      if (links.classList.contains('is-open') && !nav.contains(e.target)) close();
    });
    window.addEventListener('resize', () => {
      if (!isCompactNav()) {
        close();
        links.setAttribute('aria-hidden', 'false');
      } else if (!links.classList.contains('is-open')) {
        links.setAttribute('aria-hidden', 'true');
      }
    }, { passive: true });
  }
  const booking = $('#stickyBooking');
  if (booking) {
    const hero = $('#hero');
    const contact = $('#contact');
    if ('IntersectionObserver' in window) {
      if (hero) new IntersectionObserver(([entry]) => {
        booking.classList.toggle('is-prominent', !entry.isIntersecting);
      }, { threshold: .08 }).observe(hero);
      else booking.classList.add('is-prominent');
      if (contact) new IntersectionObserver(([entry]) => {
        booking.classList.toggle('is-near-contact', entry.isIntersecting);
      }, { threshold: .05 }).observe(contact);
    } else {
      const syncBooking = () => {
        if (hero) booking.classList.toggle('is-prominent', hero.getBoundingClientRect().bottom < 0);
        else booking.classList.add('is-prominent');
        if (contact) {
          const rect = contact.getBoundingClientRect();
          booking.classList.toggle('is-near-contact', rect.top < window.innerHeight && rect.bottom > 0);
        }
      };
      syncBooking();
      window.addEventListener('scroll', syncBooking, { passive: true });
      window.addEventListener('resize', syncBooking);
    }
  }
  const onScroll = () => nav && nav.classList.toggle('is-stuck', window.scrollY > 40);
  onScroll();
  requestAnimationFrame(onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initProcDetail() {
  const grid = $('#procGrid');
  if (!grid) return;
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.proc-toggle');
    if (!btn) return;
    const detail = btn.nextElementSibling;
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.textContent = open ? "What's included" : 'Hide inclusions';
    if (detail) detail.hidden = open;
  });
}

function initFilters() {
  const wrap = $('#filters');
  if (!wrap) return;
  wrap.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip', wrap).forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-pressed', 'false'); });
    chip.classList.add('is-active');
    chip.setAttribute('aria-pressed', 'true');
    procedureView.expanded = false;
    renderProcedures(chip.dataset.filter);
  });
  const search = $('#procSearch');
  const sort = $('#procSort');
  search?.addEventListener('input', () => {
    procedureView.query = search.value;
    procedureView.expanded = false;
    renderProcedures();
  });
  sort?.addEventListener('change', () => {
    procedureView.sort = sort.value;
    procedureView.expanded = false;
    renderProcedures();
  });
  $('#procMoreBtn')?.addEventListener('click', () => {
    procedureView.expanded = !procedureView.expanded;
    const grid = $('#procGrid');
    // Remember where the grid sat so collapsing does not strand the reader far below it.
    const anchor = grid ? grid.getBoundingClientRect().top + window.scrollY - 130 : 0;
    renderProcedures();
    if (!procedureView.expanded && grid && window.scrollY > anchor) {
      window.scrollTo({ top: Math.max(0, anchor), behavior: REDUCED ? 'auto' : 'smooth' });
    }
  });
  $('#procGrid')?.addEventListener('click', e => {
    if (!e.target.closest('[data-clear-search]')) return;
    procedureView.query = '';
    procedureView.filter = 'all';
    procedureView.expanded = false;
    if (search) search.value = '';
    $$('.chip', wrap).forEach(chip => {
      const active = chip.dataset.filter === 'all';
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    renderProcedures('all');
    search?.focus();
  });
}

/* Service cards deep-link into the pricing grid pre-filtered to their own
   specialty, so "Know more" on Plastic Surgery lands on plastic-surgery prices. */
function initServiceLinks() {
  $$('[data-filter-link]').forEach(link => {
    link.addEventListener('click', e => {
      const chip = $(`#filters .chip[data-filter="${link.dataset.filterLink}"]`);
      if (!chip) return;                 // unknown specialty: fall back to the plain anchor
      e.preventDefault();
      chip.click();                      // reuse the chip's filter, aria state and render path
      $('#procedures')?.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
    });
  });
}

function initTabs() {
  const wrap = $('.tabs');
  if (!wrap) return;
  const activate = tab => {
    $$('.tab', wrap).forEach(t => {
      const active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
    });
    const panel = $('#pkgGrid');
    if (panel) panel.setAttribute('aria-labelledby', tab.id);
    renderPackages(tab.dataset.tab);
  };
  wrap.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (tab) activate(tab);
  });
  wrap.addEventListener('keydown', e => {
    const tabs = $$('.tab', wrap);
    const index = tabs.indexOf(e.target);
    if (index < 0) return;
    let next = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (index + 1) % tabs.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;
    e.preventDefault();
    activate(tabs[next]);
    tabs[next].focus();
  });
}

function initDoctorMarquee() {
  const track = $('.doc-track');
  const button = $('#docMotion');
  if (!track || !button) return;
  let userPaused = false;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const setPaused = () => {
    const paused = userPaused || reduced.matches;
    track.classList.toggle('is-paused', paused);
    button.setAttribute('aria-pressed', String(userPaused));
    button.setAttribute('aria-label', userPaused ? 'Resume doctor card animation' : 'Pause doctor card animation');
    button.textContent = userPaused ? 'Resume specialists' : 'Pause specialists';
  };
  setPaused();
  button.addEventListener('click', () => { userPaused = !userPaused; setPaused(); });
  reduced.addEventListener?.('change', setPaused);
}

function initFinancing() {
  const sel = $('#procSelect');
  const total = $('#fcTotal');
  const month = $('#fcMonth');
  const note = $('#fcNote');
  if (!sel || !total) return;
  const EXAMPLE_TOTAL = 10077, EXAMPLE_MONTHLY = 420;
  const apply = () => {
    const price = Number(sel.value) || EXAMPLE_TOTAL;
    total.textContent = money(price) + ' USD';
    const inquiry = $('#financingInquiry');
    if (inquiry) inquiry.dataset.inquiry = 'I would like to learn about financing for ' + (sel.selectedOptions[0]?.dataset.name || 'this procedure') + ' (' + money(price) + ' USD).';
    if (price === EXAMPLE_TOTAL) {
      month.textContent = money(EXAMPLE_MONTHLY) + ' USD';
      note.textContent = 'Based on the published example for the Mommy Makeover package. Financing options are provided by independent lenders and are subject to approval.';
    } else {
      month.textContent = 'Ask us';
      note.textContent = 'Monthly payment depends on the lender, term and approved rate. Submit an inquiry to receive personalized options from more than 10 financial institutions.';
    }
    if (window.__pulse) window.__pulse([total, month]);
  };
  sel.addEventListener('change', apply);
  apply();
}

function initForm() {
  const form = $('#contactForm');
  if (!form) return;
  const status = $('#formStatus');
  const fields = ['name', 'email', 'phone'].map(id => $('#' + id));
  const validate = f => {
    const value = f.value.trim();
    let message = '';
    if (!value) message = f.id === 'email' ? 'Please enter your email address.' : f.id === 'phone' ? 'Please enter your phone number.' : 'Please enter your name.';
    else if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) message = 'Enter a valid email address, such as name@example.com.';
    else if (f.type === 'tel' && value.replace(/\D/g, '').length < 7) message = 'Enter a phone number with at least 7 digits.';
    const error = $('#' + f.id + 'Error');
    const invalid = Boolean(message);
    f.setAttribute('aria-invalid', String(invalid));
    f.closest('.field').classList.toggle('has-error', invalid);
    if (error) { error.textContent = message; error.hidden = !invalid; }
    return !invalid;
  };
  fields.forEach(f => f.addEventListener('input', () => {
    validate(f);
    status.textContent = '';
    status.classList.remove('is-error');
  }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const invalid = fields.filter(f => !validate(f));
    if (invalid.length) {
      status.textContent = 'Please review the highlighted fields.';
      status.classList.add('is-error');
      invalid[0].focus();
      return;
    }
    status.classList.remove('is-error');
    status.textContent = 'Your details look good, but this form is not connected to a booking service yet. Your request has not been sent.';
    status.classList.add('is-error');
  });
}

function initHeroVideo() {
  const video = $('#heroVideo');
  if (!video) return;

  // Reveal the video only once it is genuinely playing; until then the hero
  // keeps its dark plate instead of flashing an unrelated still frame.
  const revealVideo = () => video.classList.add('is-ready');
  const hideVideo = () => video.classList.remove('is-ready');
  video.addEventListener('playing', revealVideo);
  video.addEventListener('error', hideVideo);
  // A stall does not blank a video that is already showing frames, so only fall
  // back to the dark plate when it never got going in the first place.
  video.addEventListener('stalled', () => { if (video.paused) hideVideo(); });
  video.addEventListener('play', () => { delete video.dataset.playbackState; });

  // Respect reduced-motion preferences; the dark hero plate remains visible if
  // autoplay is unavailable or blocked.
  if (REDUCED) {
    video.pause();
    hideVideo();
    return;
  }

  // The cloud plate is an ambient background loop rather than a one-shot clip.
  video.loop = true;
  video.muted = true;
  video.playsInline = true;

  // The markup `autoplay` attribute and this call race each other, and the loser
  // is rejected with AbortError. Without a retry the hero could sit paused on
  // frame 0 forever, so keep trying until it is genuinely playing.
  let attempts = 0;
  const start = () => {
    if (!video.paused) return;
    if (attempts++ >= 6) { hideVideo(); return; }
    const playRequest = video.play();
    if (!playRequest || typeof playRequest.then !== 'function') return;
    playRequest.catch(() => {
      if (video.readyState >= 2) setTimeout(start, 250);
      else video.addEventListener('loadeddata', start, { once: true });
    });
  };
  start();
}

function initButtonMotion() {
  if (!window.gsap || REDUCED || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;

  $$('a.btn, button.btn, .proc-more-btn').forEach(button => {
    if (button.dataset.gsapHover === 'true') return;
    button.dataset.gsapHover = 'true';
    gsap.set(button, { transformOrigin: '50% 50%' });

    const arrow = $('span[aria-hidden="true"]', button);
    let pointerInside = false;
    let focused = false;
    const enter = () => {
      gsap.to(button, {
        y: -4, scale: 1.035, duration: .42, ease: 'power3.out', overwrite: 'auto',
        boxShadow: '0 18px 46px -22px rgba(126,170,214,.82)'
      });
      if (arrow) gsap.to(arrow, { x: 4, duration: .38, ease: 'power3.out', overwrite: 'auto' });
    };
    const leave = () => {
      gsap.to(button, {
        y: 0, scale: 1, duration: .72,
        ease: 'elastic.out(1,.55)', overwrite: 'auto', boxShadow: '0 0 0 0 rgba(126,170,214,0)'
      });
      if (arrow) gsap.to(arrow, { x: 0, duration: .5, ease: 'power3.out', overwrite: 'auto' });
    };

    button.addEventListener('pointerenter', () => { pointerInside = true; enter(); });
    button.addEventListener('pointerleave', () => {
      pointerInside = false;
      if (!focused) leave();
    });
    button.addEventListener('pointerdown', () => {
      gsap.to(button, { scale: .975, y: -1, duration: .14, ease: 'power2.in', overwrite: 'auto' });
    });
    button.addEventListener('pointerup', () => { if (pointerInside) enter(); });
    button.addEventListener('pointercancel', leave);
    button.addEventListener('focus', () => { focused = true; enter(); });
    button.addEventListener('blur', () => {
      focused = false;
      if (!pointerInside) leave();
    });
  });
}

function initUI() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
  initButtonMotion();
  initNav();
  initInquiryLinks();
  initFilters();
  initServiceLinks();
  initProcDetail();
  initTabs();
  initDoctorMarquee();
  initFinancing();
  initForm();
}

function renderFinancingSelect() {
  const sel = $('#procSelect');
  if (!sel) return;
  const groups = Object.entries(CATS).map(([k, label]) => {
    const opts = PROCEDURES.filter(p => p.c === k)
      .map(p => `<option value="${p.p}" data-name="${esc(p.n)}">${esc(p.n)} — ${money(p.p)}</option>`).join('');
    return `<optgroup label="${esc(label)}">${opts}</optgroup>`;
  }).join('');
  sel.innerHTML = groups;
  sel.value = '10077';
}

/* ============================================================
   Cinematic animation layer
   ============================================================ */
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll() {
  document.documentElement.classList.add('no-anim');
}

/* The hero video loops as an ambient background. No scroll or pointer
   parallax is applied to the media plate. */

function cinematic() {
  const intro = $('#intro');
  const has = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  let introFinished = false;
  let introTimeline = null;
  const finishIntro = () => {
    if (introFinished) return;
    introFinished = true;
    introTimeline?.kill();
    if (intro) { intro.classList.add('is-done'); intro.style.display = 'none'; }
    document.body.classList.remove('is-loading');
  };
  $('#skipIntro')?.addEventListener('click', () => {
    if (window.gsap) {
      const targets = [intro, ...$$('.intro-inner > *, .hero .mask-inner, .hero-sub, .hero-cta, .nav')].filter(Boolean);
      gsap.killTweensOf(targets);
      gsap.set($$('.hero .mask-inner, .hero-sub, .hero-cta, .nav'), { opacity: 1, y: 0, yPercent: 0 });
    }
    finishIntro();
  });
  if (intro) {
    document.body.classList.add('is-loading');
    const introFailsafe = window.setTimeout(finishIntro, 5500);

    if (!has || REDUCED) {
      finishIntro();
      revealAll();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /* ---------- intro curtain ---------- */
    const tl = introTimeline = gsap.timeline({ onComplete: () => { clearTimeout(introFailsafe); finishIntro(); } });
    tl.to('.intro-logo', { opacity: 1, duration: .35, ease: 'power2.out' })
      .to('.intro-bar i', { width: '100%', duration: .55, ease: 'power2.inOut' }, '-=.2')
      .to('.intro-tag', { opacity: 1, duration: .25, ease: 'power2.out' }, '-=.3')
      .to('.intro-inner > *', { opacity: 0, y: -20, duration: .3, ease: 'power2.in' })
      .to(intro, { yPercent: -100, duration: .55, ease: 'power4.inOut' }, '-=.15');

    /* ---------- hero entrance ---------- */
    tl.fromTo('.hero .mask-inner', { yPercent: 118, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.25, stagger: .1, ease: 'power4.out' }, '-=.72')
      .fromTo('.hero-sub', { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: .85, ease: 'power3.out' }, '-=.8')
      .fromTo('.hero-cta', { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }, '-=.6')
      .fromTo('.nav', { opacity: 0, y: -26 },
        { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }, '-=1.1');

    document.body.classList.remove('is-loading');
  } else {
    finishIntro();
    if (!has || REDUCED) {
      revealAll();
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.nav', { opacity: 1, y: 0 });
  }

  /* ---------- scroll reveals ---------- */
  gsap.utils.toArray('.reveal-up').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 34 }, {
      opacity: 1, y: 0, duration: .95, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  /* ---------- masked headline reveals ---------- */
  gsap.utils.toArray('.mask').forEach(mask => {
    const inner = $('.mask-inner', mask);
    if (!inner || inner.closest('.hero')) return;
    gsap.fromTo(inner, { yPercent: 116, opacity: 0 }, {
      yPercent: 0, opacity: 1, duration: 1.15, ease: 'power4.out',
      scrollTrigger: { trigger: mask, start: 'top 90%', once: true }
    });
  });

  /* ---------- parallax layers ---------- */
  gsap.utils.toArray('[data-parallax]').forEach(el => {
    const amt = parseFloat(el.dataset.parallax) || .18;
    gsap.fromTo(el, { yPercent: -amt * 40 }, {
      yPercent: amt * 60, ease: 'none',
      scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  /* ---------- counters ---------- */
  gsap.utils.toArray('[data-count]').forEach(el => {
    const end = Number(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to(obj, {
        v: end, duration: 1.7, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; }
      })
    });
  });

  /* ---------- cinematography: science visuals drift ---------- */
  gsap.to('.sc-img.a', {
    yPercent: -14, rotate: -1, ease: 'none',
    scrollTrigger: { trigger: '.science', start: 'top bottom', end: 'bottom top', scrub: true }
  });
  gsap.to('.sc-img.b', {
    yPercent: 10, rotate: 7, ease: 'none',
    scrollTrigger: { trigger: '.science', start: 'top bottom', end: 'bottom top', scrub: true }
  });


  /* ---------- scroll progress ---------- */
  const bar = $('#scrollProgress');
  if (bar) {
    const set = (p) => {
      let progress = p;
      if (typeof progress !== 'number') {
        const h = document.documentElement;
        progress = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      }
      bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, progress)) + ')';
    };
    bar.style.transformOrigin = 'left center';
    set();
    if (window.__lenis) {
      window.__lenis.on('scroll', ({ progress }) => set(progress));
    } else {
      window.addEventListener('scroll', () => set(), { passive: true });
    }
    window.addEventListener('resize', () => set());
  }

  /* ---------- cursor glow ---------- */
  const glow = $('#cursorGlow');
  if (glow && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    gsap.set(glow, { xPercent: -50, yPercent: -50 });
    const gx = gsap.quickTo(glow, 'x', { duration: .8, ease: 'power3' });
    const gy = gsap.quickTo(glow, 'y', { duration: .8, ease: 'power3' });
    window.addEventListener('pointermove', e => { gx(e.clientX); gy(e.clientY); });
  } else if (glow) {
    glow.style.display = 'none';
  }

  /* ---------- card tilt ---------- */
  gsap.utils.toArray('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      gsap.to(card, {
        rotateY: ((e.clientX - r.left) / r.width - .5) * 7,
        rotateX: ((e.clientY - r.top) / r.height - .5) * -7,
        transformPerspective: 1000, duration: .6, ease: 'power2.out'
      });
    });
    card.addEventListener('pointerleave', () =>
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: .9, ease: 'power3.out' }));
  });

  /* late layout shifts (web fonts, images) move section boundaries, which
     throws off trigger ranges — recalculate once everything has loaded */
  window.addEventListener('load', () => ScrollTrigger.refresh());

  /* ---------- helpers used by renderers ---------- */
  window.__animateIn = (els) => {
    if (!els || !els.length) return;
    gsap.fromTo(els, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .6, stagger: .045, ease: 'power3.out' });
  };
  window.__pulse = (els) => {
    gsap.fromTo(els, { scale: 1.05 }, { scale: 1, duration: .5, ease: 'power3.out' });
  };
  window.__ST = ScrollTrigger;
}

/* ============================================================
   Lenis Smooth Scrolling
   ============================================================ */
function initLenis() {
  if (typeof Lenis === 'undefined') return null;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
    infinite: false
  });

  window.__lenis = lenis;

  // Synchronize Lenis with GSAP ticker & ScrollTrigger
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
    }
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Smooth-scroll in-page hash links via Lenis
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#!') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      lenis.scrollTo(target, { offset: -70 });
    }
  });

  return lenis;
}

/* ============================================================
   Boot
   ============================================================ */
function boot() {
  initLenis();
  renderImgMarquee();
  renderApps();
  renderWhy();
  renderPackages('stem');
  renderFilters();
  renderProcedures('all');
  renderDoctors();
  renderFinancingSelect();
  initHeroVideo();
  initUI();
  cinematic();
  if (window.__ST) setTimeout(() => window.__ST.refresh(), 600);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
