
self.addEventListener("fetch", function(e) {
    console.log(e);
});

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/template.html',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});