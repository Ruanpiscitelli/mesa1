const CACHE_NAME = 'funil-whats-cache-v1';
const STATIC_RESOURCES = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  '/vite.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_RESOURCES);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache-first strategy for static resources
      if (response) {
        return response;
      }

      // Network-first strategy for dynamic content
      return fetch(event.request).then((response) => {
        // Don't cache non-GET requests
        if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method !== 'GET') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
}); 