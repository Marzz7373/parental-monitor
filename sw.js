self.addEventListener('install', e => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', event => {
  // Optionally cache or modify requests here
});
