const CACHE = 'hapysense-v1';
const URLS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;
  e.respondWith(
    caches.match(request).then(cached => {
      const fetched = fetch(request).then(res => {
        const clone = res.clone();
        if (res.ok && res.type === 'basic') {
          caches.open(CACHE).then(cache => cache.put(request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
