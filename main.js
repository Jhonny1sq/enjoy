/* launcher — reads GAMES_DATA, renders shelves, wires search, themes */
'use strict';

const SECTION_ORDER = [
  'Picks', 'Action', 'Sports', 'Platform', 'Puzzle',
  'Horror', 'Runners', 'Arcade', 'Tools',
];

const els = {
  catalog:        document.getElementById('catalog'),
  emptyState:     document.getElementById('empty-state'),
  errorState:     document.getElementById('error-state'),
  template:       document.getElementById('card-tpl'),
  search:         document.getElementById('search'),
  nav:            document.getElementById('shelf-nav'),
  count:          document.getElementById('count'),
  settingsBtn:    document.getElementById('settings-btn'),
  settingsPanel:  document.getElementById('settings-panel'),
  settingsClose:  document.getElementById('settings-close'),
  settingsOverlay:document.getElementById('settings-overlay'),
  bgPicker:       document.getElementById('bg-picker'),
  bgReset:        document.getElementById('bg-reset'),
  gridToggle:     document.getElementById('grid-toggle'),
  glowToggle:     document.getElementById('glow-toggle'),
  themeSwatches:  document.querySelectorAll('.theme-swatch'),
  bgCustom:       document.querySelector('.bg-custom'),
  bgGrid:         document.querySelector('.bg-grid'),
  bgGlow1:        document.querySelector('.bg-glow-1'),
  bgGlow2:        document.querySelector('.bg-glow-2'),
};

const state = {
  games: [],
  filtered: [],
  query: '',
};

/* ---------------- Theme ---------------- */

const DEFAULT_THEME = 'dark';
const STORAGE_KEY = 'arcade-settings';

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveSettings(patch) {
  const current = loadSettings();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...patch }));
}

function applyTheme(name) {
  document.documentElement.setAttribute('data-theme', name);
  els.themeSwatches.forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.theme === name);
  });
  saveSettings({ theme: name });
  /* Re-apply custom bg override after theme change */
  applyCustomBg(loadSettings().customBg);
}

function applyCustomBg(color) {
  if (color) {
    document.documentElement.style.setProperty('--ink', color);
    els.bgPicker.value = color;
  } else {
    document.documentElement.style.removeProperty('--ink');
    const computed = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim();
    els.bgPicker.value = rgbToHex(computed) || '#050508';
  }
}

function applyToggles(gridOn, glowOn) {
  els.bgGrid.classList.toggle('is-off', !gridOn);
  els.bgGlow1.classList.toggle('is-off', !glowOn);
  els.bgGlow2.classList.toggle('is-off', !glowOn);
  els.gridToggle.checked = gridOn;
  els.glowToggle.checked = glowOn;
  saveSettings({ gridOn, glowOn });
}

function rgbToHex(rgb) {
  if (rgb.startsWith('#')) return rgb;
  const m = rgb.match(/\d+/g);
  if (!m) return null;
  return '#' + m.slice(0, 3).map(x => (+x).toString(16).padStart(2, '0')).join('');
}

function initSettings() {
  const s = loadSettings();
  applyTheme(s.theme || DEFAULT_THEME);
  applyToggles(s.gridOn !== false, s.glowOn !== false);
  if (s.customBg) applyCustomBg(s.customBg);

  els.settingsBtn.addEventListener('click', openSettings);
  els.settingsClose.addEventListener('click', closeSettings);
  els.settingsOverlay.addEventListener('click', closeSettings);

  els.themeSwatches.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
      /* Theme swap resets custom bg, so picker shows new default */
      saveSettings({ customBg: null });
    });
  });

  els.bgPicker.addEventListener('input', e => {
    const color = e.target.value;
    document.documentElement.style.setProperty('--ink', color);
    saveSettings({ customBg: color });
  });

  els.bgReset.addEventListener('click', () => {
    saveSettings({ customBg: null });
    applyCustomBg(null);
  });

  els.gridToggle.addEventListener('change', e => {
    applyToggles(e.target.checked, els.glowToggle.checked);
  });

  els.glowToggle.addEventListener('change', e => {
    applyToggles(els.gridToggle.checked, e.target.checked);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSettings();
  });
}

function openSettings() {
  els.settingsPanel.classList.remove('hidden');
  els.settingsOverlay.classList.remove('hidden');
}

function closeSettings() {
  els.settingsPanel.classList.add('hidden');
  els.settingsOverlay.classList.add('hidden');
}

/* ---------------- Catalog ---------------- */

function normalizeGame(raw, idx) {
  if (!raw || typeof raw !== 'object') return null;
  const name = String(raw.name || '').trim();
  const path = String(raw.path || '').trim();
  if (!name || !path) return null;
  const section = String(raw.section || 'Arcade').trim() || 'Arcade';
  return {
    name, path,
    desc:     String(raw.desc || '').trim(),
    thumb:    String(raw.thumb || '').trim(),
    engine:   String(raw.engine || '').trim(),
    section,
    featured: Boolean(raw.featured),
    _id:      'g' + idx,
  };
}

function buildCard(g) {
  const node  = els.template.content.firstElementChild.cloneNode(true);
  const img   = node.querySelector('img');
  const name  = node.querySelector('.card-name');
  const desc  = node.querySelector('.card-desc');
  const engine = node.querySelector('.card-engine');
  const fallback = node.querySelector('.card-fallback');

  node.href = g.path;
  node.target = '_blank';
  node.rel = 'noopener noreferrer';
  node.dataset.id = g._id;

  if (g.thumb) {
    img.src = g.thumb;
    img.alt = g.name;
    node.classList.remove('is-blank');
  } else {
    img.removeAttribute('src');
    img.alt = '';
    node.classList.add('is-blank');
  }

  fallback.textContent = g.name.charAt(0);
  name.textContent = g.name;
  desc.textContent = g.desc || '';
  engine.textContent = g.engine || '';
  if (!g.engine) engine.classList.add('hidden');

  return node;
}

function groupGames(games) {
  const used = new Set();
  const groups = [];
  const picks = games.filter(g => g.featured);
  if (picks.length) {
    groups.push({ title: 'Picks', games: picks });
    picks.forEach(g => used.add(g._id));
  }
  const buckets = new Map();
  for (const g of games) {
    if (used.has(g._id)) continue;
    const key = SECTION_ORDER.includes(g.section) ? g.section : 'Arcade';
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(g);
  }
  for (const title of SECTION_ORDER) {
    if (title === 'Picks') continue;
    const list = buckets.get(title);
    if (list && list.length) groups.push({ title, games: list });
  }
  return groups;
}

function slug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function renderNav(groups) {
  els.nav.innerHTML = '';
  const frag = document.createDocumentFragment();
  for (const group of groups) {
    const a = document.createElement('a');
    a.href = '#shelf-' + slug(group.title);
    a.textContent = group.title;
    frag.appendChild(a);
  }
  els.nav.appendChild(frag);
}

function renderCatalog(games) {
  els.catalog.innerHTML = '';
  if (games.length === 0) {
    showEmpty();
    updateCount(0);
    return;
  }
  hideEmpty();
  hideError();
  const groups = groupGames(games);
  renderNav(groups);
  const frag = document.createDocumentFragment();
  for (const group of groups) {
    const section = document.createElement('section');
    section.className = 'shelf';
    section.id = 'shelf-' + slug(group.title);
    section.dataset.shelf = group.title;
    const head = document.createElement('div');
    head.className = 'shelf-head';
    const title = document.createElement('h2');
    title.className = 'shelf-title';
    title.textContent = group.title;
    const count = document.createElement('span');
    count.className = 'shelf-count';
    count.textContent = group.games.length === 1 ? '1 title' : group.games.length + ' titles';
    head.append(title, count);
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (const g of group.games) grid.appendChild(buildCard(g));
    section.append(head, grid);
    frag.appendChild(section);
  }
  els.catalog.appendChild(frag);
  updateCount(games.length);
}

function showEmpty() {
  els.catalog.classList.add('hidden');
  els.emptyState.classList.remove('hidden');
  els.errorState.classList.add('hidden');
  els.nav.innerHTML = '';
}
function hideEmpty() {
  els.emptyState.classList.add('hidden');
  els.catalog.classList.remove('hidden');
}
function showError() {
  els.catalog.classList.add('hidden');
  els.emptyState.classList.add('hidden');
  els.errorState.classList.remove('hidden');
  els.nav.innerHTML = '';
}
function hideError() {
  els.errorState.classList.add('hidden');
}
function updateCount(n) {
  els.count.textContent = n === 1 ? '1 title' : n + ' titles';
}

function applyFilter(query) {
  state.query = query.trim().toLowerCase();
  if (!state.query) {
    state.filtered = state.games.slice();
    renderCatalog(state.filtered);
    return;
  }
  const q = state.query;
  state.filtered = state.games.filter(g =>
    g.name.toLowerCase().includes(q) ||
    g.desc.toLowerCase().includes(q) ||
    g.engine.toLowerCase().includes(q) ||
    g.section.toLowerCase().includes(q)
  );
  renderCatalog(state.filtered);
}

let searchTimer = null;
function onSearchInput(e) {
  const val = e.target.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => applyFilter(val), 80);
}

function boot() {
  initSettings();
  if (typeof GAMES_DATA === 'undefined') {
    showError();
    console.error('GAMES_DATA is not defined. Did you load data/games.js?');
    return;
  }
  const cleaned = GAMES_DATA.map(normalizeGame).filter(Boolean);
  state.games = cleaned;
  state.filtered = cleaned.slice();
  renderCatalog(cleaned);
  els.search.addEventListener('input', onSearchInput);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}