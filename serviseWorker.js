


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/serviseWorker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }







  var cached = [
    //"/",
    "/index.html",
    "/load/zpet.js"

];

self.addEventListener('install', event => {
    const preCache = async () => {
        const cache = await caches.open('store');
        return cache.addAll(cached.map(i => new Request(i, {cache: "reload"})));
    };
    event.waitUntil(preCache());
    self.cacheReady = true;
    console.log("Cache was updated");
});


self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
