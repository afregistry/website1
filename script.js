let activeCategory = 'all';

// 1. Search Logic
function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  let visibleCount = 0;

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();

    const matchesSearch = name.includes(query) || category.includes(query) || tags.includes(query);
    const matchesCategory = activeCategory === 'all' || category === activeCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById('emptyState').style.display = visibleCount === 0 ? 'block' : 'none';
}

// 2. Category Filtering Logic
function filterCategory(event, category) {
  activeCategory = category;
  document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  handleSearch();
}

// 3. Modal Controls
function openModal(title, desc, url) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalLink').href = url;
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal(event, force = false) {
  if (force || event.target.id === 'modalOverlay') {
    document.getElementById('modalOverlay').classList.remove('active');
  }
}

// 4. Keyboard Shortcut ('/' to search)
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement.id !== 'searchInput') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
  if (e.key === 'Escape') {
    closeModal(null, true);
  }
});

// 5. Theme Switching
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('themeIcon').textContent = next === 'dark' ? '☀️' : '🌙';
  document.getElementById('themeText').textContent = next === 'dark' ? 'Light' : 'Dark';
}
