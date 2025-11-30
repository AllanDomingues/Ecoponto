const CACHE_NAME = 'ecoponto-cache-v1';
const urlsToCache = [
    '/index.html',
    '/', 
    '/style.css',
    '/app.js',
    '/manifest.json',
    '/assets/icons/icon-192x192.png',
    '/assets/icons/icon-512x512.png'
];

// Instalação: Armazena todos os arquivos estáticos no cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto: Arquivos estáticos armazenados.');
                return cache.addAll(urlsToCache);
            })
    );
    // Força o Service Worker a ativar imediatamente
    self.skipWaiting();
});

// Fetch: Intercepta requisições. Tenta buscar no cache antes de ir para a rede
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - retorna a versão em cache
                if (response) {
                    return response;
                }
                // Cache miss - busca na rede
                return fetch(event.request);
            })
    );
});

// Ativação: Limpeza de caches antigos
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Se o cache não estiver na lista branca, ele é deletado
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});