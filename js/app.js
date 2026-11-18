/* ==============================================
   HSC Science Notes — Main Application
   ============================================== */

// ────────────────────────────────────────────
// NAVIGATION CONFIG
// Add new chapters here — the sidebar & routing
// pick them up automatically.
// ────────────────────────────────────────────
const NAV = {
  physics: {
    icon: '⚛️',
    color: '#58a6ff',
    label: { bn: 'পদার্থবিজ্ঞান ১ম পত্র', en: 'Physics 1st Paper' },
    chapters: [
      { id: 'vector', label: { bn: 'অধ্যায় ২: ভেক্টর', en: 'Ch 2: Vectors' } },
    ],
  },
  chemistry: {
    icon: '🧪',
    color: '#f97583',
    label: { bn: 'রসায়ন ১ম পত্র', en: 'Chemistry 1st Paper' },
    chapters: [
      { id: 'qualitative', label: { bn: 'অধ্যায় ২: গুণগত রসায়ন', en: 'Ch 2: Qualitative Chemistry' } },
    ],
  },
  math: {
    icon: '📐',
    color: '#d2a8ff',
    label: { bn: 'উচ্চতর গণিত ১ম পত্র', en: 'Higher Math 1st Paper' },
    chapters: [
      { id: 'integration', label: { bn: 'অধ্যায় ৩: সমাকলন', en: 'Ch 3: Integration' } },
    ],
  },
};

// ────────────────────────────────────────────
// STATE
// ────────────────────────────────────────────
let currentLang = localStorage.getItem('hsc-lang') || 'bn';
let currentPath = '';
let contentRequestId = 0;
let sidebarOpen = false;

// ────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = currentLang;

  // Restore toggle position
  const langSwitch = document.getElementById('langSwitch');
  if (currentLang === 'en') langSwitch.checked = true;
  updateLangLabels();

  renderSidebar();
  setupListeners();
  handleRoute();
});

// ────────────────────────────────────────────
// EVENT LISTENERS
// ────────────────────────────────────────────
function setupListeners() {
  window.addEventListener('hashchange', handleRoute);

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', toggleSidebar);
  document.getElementById('overlay').addEventListener('click', closeSidebar);

  // Language switch
  document.getElementById('langSwitch').addEventListener('change', (e) => {
    currentLang = e.target.checked ? 'en' : 'bn';
    localStorage.setItem('hsc-lang', currentLang);
    document.documentElement.lang = currentLang;
    updateLangLabels();
    handleRoute();
  });

  // Scroll-to-top visibility
  window.addEventListener('scroll', () => {
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 300);
  });
  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function updateLangLabels() {
  document.querySelector('.lang-bn').classList.toggle('active', currentLang === 'bn');
  document.querySelector('.lang-en').classList.toggle('active', currentLang === 'en');
}

// ────────────────────────────────────────────
// SIDEBAR
// ────────────────────────────────────────────
function renderSidebar() {
  const nav = document.getElementById('sidebarNav');
  const L = currentLang;
  const isHome = currentPath === '';

  let html = `
    <a href="#/" class="sidebar-link home-link ${isHome ? 'active' : ''}">
      <span class="sidebar-icon">🏠</span>
      <span>${L === 'bn' ? 'হোম' : 'Home'}</span>
    </a>
    <div class="sidebar-divider"></div>`;

  for (const [subject, data] of Object.entries(NAV)) {
    const isExpanded = currentPath.startsWith(subject);
    html += `
    <div class="sidebar-section ${isExpanded ? 'expanded' : ''}" data-subject="${subject}">
      <button class="sidebar-section-header">
        <span class="accent-dot" style="background:${data.color}"></span>
        <span class="sidebar-icon">${data.icon}</span>
        <span class="section-label">${data.label[L]}</span>
        <svg class="chevron" width="16" height="16" viewBox="0 0 16 16">
          <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="sidebar-section-items">
        ${data.chapters
          .map(
            (ch) => `
        <a href="#/${subject}/${ch.id}" class="chapter-link ${currentPath === subject + '/' + ch.id ? 'active' : ''}">
          <span class="chapter-dot" style="background:${data.color}"></span>
          ${ch.label[L]}
        </a>`
          )
          .join('')}
      </div>
    </div>`;
  }

  nav.innerHTML = html;

  // Section toggle handlers
  nav.querySelectorAll('.sidebar-section-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('expanded');
    });
  });

  // Close sidebar on mobile when a link is clicked
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });
}

// ────────────────────────────────────────────
// ROUTING
// ────────────────────────────────────────────
function handleRoute() {
  const path = window.location.hash.replace(/^#\/?/, '');
  const keepPosition = path === currentPath;
  currentPath = path;

  if (!path) {
    contentRequestId++; // Invalidate a pending note request.
    renderHomepage();
  } else {
    loadContent(path, keepPosition);
  }

  renderSidebar();
}

// ────────────────────────────────────────────
// CONTENT LOADING
// ────────────────────────────────────────────
async function loadContent(path, keepPosition) {
  const requestId = ++contentRequestId;
  const el = document.getElementById('content');
  const previousNote = keepPosition ? el.querySelector('.markdown-body') : null;

  // Keep the old note visible during a language switch so the page doesn't shrink.
  if (!previousNote) {
    el.innerHTML = `
      <div class="loading">
        <div class="loading-spinner"></div>
        <p>${currentLang === 'bn' ? 'লোড হচ্ছে...' : 'Loading...'}</p>
      </div>`;
  }

  try {
    const res = await fetch(`notes/${currentLang}/${path}.md`);
    if (!res.ok) throw new Error(res.status);
    const md = await res.text();
    if (requestId !== contentRequestId) return;

    // Protect math from marked parser
    const { text, blocks } = shieldMath(md);
    let html = marked.parse(text, { breaks: true, gfm: true });
    html = restoreMath(html, blocks);

    const position = previousNote ? captureReadingPosition(previousNote) : null;
    el.innerHTML = `<div class="markdown-body">${html}</div>`;
    const note = el.firstElementChild;
    note.lang = currentLang;

    // Render KaTeX
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      });
    }

    restoreReadingPosition(note, position);
  } catch (_) {
    if (requestId !== contentRequestId) return;
    el.innerHTML = `
      <div class="error-page">
        <span class="error-icon">📄</span>
        <h2>${currentLang === 'bn' ? 'কন্টেন্ট পাওয়া যায়নি' : 'Content Not Found'}</h2>
        <p>${
          currentLang === 'bn'
            ? 'এই নোটটি এখনো তৈরি করা হয়নি। শীঘ্রই আসছে!'
            : 'This note hasn\'t been created yet. Coming soon!'
        }</p>
        <a href="#/" class="back-home">${currentLang === 'bn' ? '← হোমে ফিরে যাও' : '← Back to Home'}</a>
      </div>`;
  }
}

// Translations share a heading order, but their text may wrap differently.
// Measure progress in the section at the top of the viewport, below the fixed header.
function getReadingSections(note) {
  const headings = [...note.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  const readingLine = document.querySelector('.header').getBoundingClientRect().bottom;
  return {
    outline: headings.map((heading) => heading.tagName).join(','),
    bounds: [
      ...headings.map((heading) => heading.getBoundingClientRect().top - readingLine),
      note.getBoundingClientRect().bottom - readingLine,
    ],
  };
}

function captureReadingPosition(note) {
  const top = window.scrollY;
  if (top <= 0) return { top: 0 };

  const { outline, bounds } = getReadingSections(note);
  const index = bounds.findIndex((bound) => bound > 0) - 1;
  if (index < 0) return { top };

  const start = bounds[index];
  return { top, outline, index, progress: -start / (bounds[index + 1] - start) };
}

function restoreReadingPosition(note, position) {
  let top = position?.top ?? 0;
  if (position?.index !== undefined) {
    const { outline, bounds } = getReadingSections(note);
    if (outline === position.outline) {
      const start = bounds[position.index];
      const end = bounds[position.index + 1];
      top = window.scrollY + start + position.progress * (end - start);
    }
  }
  window.scrollTo({ top, behavior: 'instant' });
}

// ── Math shield helpers ──
function shieldMath(md) {
  const blocks = [];
  // Display math first (greedy match for $$...$$)
  let text = md.replace(/\$\$([\s\S]+?)\$\$/g, (m) => {
    blocks.push(m);
    return `⌈MATH${blocks.length - 1}⌉`;
  });
  // Inline math ($...$) — single line, no nested $
  text = text.replace(/\$([^\$\n]+?)\$/g, (m) => {
    blocks.push(m);
    return `⌈MATH${blocks.length - 1}⌉`;
  });
  return { text, blocks };
}

function restoreMath(html, blocks) {
  return html.replace(/⌈MATH(\d+)⌉/g, (_, i) => blocks[parseInt(i)]);
}

// ────────────────────────────────────────────
// HOMEPAGE
// ────────────────────────────────────────────
function renderHomepage() {
  const el = document.getElementById('content');
  const bn = currentLang === 'bn';

  const cards = Object.entries(NAV)
    .map(
      ([key, d]) => `
    <div class="subject-card" onclick="window.location.hash='#/${key}/${d.chapters[0].id}'" style="--card-accent:${d.color}">
      <div class="card-icon">${d.icon}</div>
      <h3>${d.label[currentLang]}</h3>
      <p class="card-count">${d.chapters.length} ${bn ? 'টি অধ্যায়' : d.chapters.length === 1 ? 'chapter' : 'chapters'}</p>
      <div class="card-chips">
        ${d.chapters.map((c) => `<span class="chip">${c.label[currentLang]}</span>`).join('')}
      </div>
    </div>`
    )
    .join('');

  el.innerHTML = `
  <div class="homepage">
    <div class="hero">
      <div class="hero-badge">${bn ? '📖 ওপেন সোর্স নোটস' : '📖 Open Source Notes'}</div>
      <h1 class="hero-title">${bn ? 'HSC ডিজিটাল নোটবুক' : 'HSC Digital Notebook'}</h1>
      <p class="hero-subtitle">${
        bn
          ? 'পদার্থবিজ্ঞান, রসায়ন ও উচ্চতর গণিতের জন্য তোমার সম্পূর্ণ ডিজিটাল স্টাডি সঙ্গী। LaTeX সূত্র ও SVG চিত্রসহ সুন্দর নোটস।'
          : 'Your complete study companion for HSC Physics, Chemistry & Higher Mathematics. Beautiful notes with LaTeX formulas and SVG diagrams.'
      }</p>
    </div>
    <div class="subject-cards">${cards}</div>
    <div class="features-section">
      <h2>${bn ? '✨ বৈশিষ্ট্যসমূহ' : '✨ Features'}</h2>
      <div class="features-grid">
        <div class="feature-item">
          <span class="feature-icon">🌙</span>
          <h4>${bn ? 'ডার্ক থিম' : 'Dark Theme'}</h4>
          <p>${bn ? 'রাতে পড়ার জন্য চোখ-বান্ধব ডিজাইন' : 'Easy on the eyes for late-night study'}</p>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📱</span>
          <h4>${bn ? 'মোবাইল ফ্রেন্ডলি' : 'Mobile Friendly'}</h4>
          <p>${bn ? 'যেকোনো ডিভাইসে সুন্দরভাবে কাজ করে' : 'Works perfectly on any device'}</p>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🌐</span>
          <h4>${bn ? 'দ্বিভাষিক' : 'Bilingual'}</h4>
          <p>${bn ? 'বাংলা ↔ ইংরেজি যেকোনো সময় পরিবর্তন করো' : 'Switch between Bengali & English anytime'}</p>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📐</span>
          <h4>${bn ? 'LaTeX গণিত' : 'LaTeX Math'}</h4>
          <p>${bn ? 'সুন্দরভাবে রেন্ডার করা গাণিতিক সূত্র' : 'Beautiful mathematical formulas rendered live'}</p>
        </div>
      </div>
    </div>
    <div class="homepage-footer">
      <p>${bn ? '← শুরু করতে সাইডবার থেকে একটি বিষয় নির্বাচন করো' : '← Pick a subject from the sidebar to begin'}</p>
    </div>
  </div>`;
}

// ────────────────────────────────────────────
// SIDEBAR TOGGLE (mobile)
// ────────────────────────────────────────────
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('open', sidebarOpen);
  document.getElementById('overlay').classList.toggle('visible', sidebarOpen);
  document.getElementById('hamburger').classList.toggle('active', sidebarOpen);
  document.body.style.overflow = sidebarOpen ? 'hidden' : '';
}

function closeSidebar() {
  sidebarOpen = false;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
  document.getElementById('hamburger').classList.remove('active');
  document.body.style.overflow = '';
}
