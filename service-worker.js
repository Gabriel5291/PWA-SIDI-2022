var cacheName = 'SIDI-Reservations-v1';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        '/service-worker.js',
        '/pwabuilder-sw.js',
        '/pwabuilder-serviceworker.js',
        '/manifest.json',
        '/index.html',
        '/mainpage.html',
        '/agendamento.html',
        '/minhasReservas.html',
        '/perfil.html',
        '/images/sidiLogoFull.png',
        '/service-worker.js',
        '/images/user.png',
        '/images/sidiLogo.png',
        '/images/place.png',
        '/images/logo-footer.png',
        '/images/calendar.png',
        '/images/book.png',
        'images/icons',
        'images/icons/16.png',
        'images/icons/20.png',
        'images/icons/32.png',
        'images/icons/40.png',
        'images/icons/48.png',
        'images/icons/50.png',
        'images/icons/72.png',
        'images/icons/80.png',
        'images/icons/120.png',
        'images/icons/144.png',
        'images/icons/172.png',
        'images/icons/180.png',
        'images/icons/196.png',
        'images/icons/256.png',
        'images/icons/1024.png',
        'css/dycalendar.css',
        'css/mainpage.css',
        'css/style.css'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );

});