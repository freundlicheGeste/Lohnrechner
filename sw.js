const CACHE_NAME = 'lohnrechner-v1.0.5'; // Ändere die Nummer bei JEDEM Update!
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Install Event
self.addEventListener('install', e => {
  self.skipWaiting(); // Erzwingt Aktivierung des neuen Service Workers
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching assets');
      return cache.addAll(assets);
    })
  );
});

// Activate Event - löscht alte Caches automatisch
self.addEventListener('activate', e => {
  self.clients.claim(); // Übernimmt sofort die Kontrolle
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch Event
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
