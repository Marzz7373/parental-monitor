// sw.js
const CACHE_NAME = 'monitor-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  // Add your icon image files here once you create them
  // 'icon-192.png',
  // 'icon-512.png'
];

// Install event: cache all necessary assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: serve assets from cache first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // No cache - fetch from network
        return fetch(event.request);
      }
    )
  );
});
