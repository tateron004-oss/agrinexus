const CACHE_NAME = "agrinexus-pwa-v249";
const BUILD_VERSION = "nexus-behavior-269";
const APP_SHELL = [
  "/",
  "/index.html",
  `/styles.css?v=${BUILD_VERSION}`,
  `/app.js?v=${BUILD_VERSION}`,
  "/manifest.webmanifest",
  "/native-bridge.json",
  "/icons/agri-nexus-192.png",
  "/icons/agri-nexus-512.png",
  "/icons/agri-nexus-icon.svg",
  "/status.html",
  "/status.js",
  "/terms.html",
  "/privacy.html",
  "/refund.html"
];

async function purgeOldCaches() {
  const keys = await caches.keys();
  await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
}

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    purgeOldCaches()
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", event => {
  if (event.data?.type === "AGRINEXUS_PURGE_OLD_CACHES") {
    event.waitUntil(purgeOldCaches().then(() => self.skipWaiting()));
  }
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/api/")) return;
  if (event.request.method !== "GET") return;
  const networkFirst = event.request.mode === "navigate"
    || ["/", "/index.html", "/app.js", "/styles.css", "/sw.js"].includes(url.pathname)
    || url.searchParams.has("v");

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || (networkFirst ? caches.match("/index.html") : caches.match("/index.html"))))
  );
});


