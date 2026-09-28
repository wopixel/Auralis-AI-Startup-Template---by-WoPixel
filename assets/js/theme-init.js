(() => {
  const root = document.documentElement;
  const requested = new URLSearchParams(window.location.search).get('theme');
  let saved = null;
  try {
    saved = window.localStorage.getItem('auralis-theme');
  } catch {
    // The system preference still works when storage is unavailable.
  }
  const explicitTheme = requested === 'light' || requested === 'dark'
    ? requested
    : saved === 'light' || saved === 'dark'
      ? saved
      : null;
  root.dataset.theme = explicitTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
})();
