const CACHE_NAME = "agrinexus-pwa-v392";
const BUILD_VERSION = "nexus-behavior-447";
const APP_SHELL = [
  "/",
  "/index.html",
  `/styles.css?v=${BUILD_VERSION}`,
  `/app.js?v=${BUILD_VERSION}`,
  "/manifest.webmanifest",
  "/native-bridge.json",
  `/nexus-os-agrinexus-deployment-profile.js?v=nexus-os-agrinexus-deployment-1`,
  `/nexus-os-health-workforce-safety-pack.js?v=nexus-os-health-workforce-safety-1`,
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

function isCacheableApplicationRequest(request) {
  try {
    const url = new URL(request.url);
    if (!["http:", "https:"].includes(url.protocol)) return false;
    if (url.origin !== self.location.origin) return false;
    if (request.method !== "GET") return false;
    if (url.pathname.startsWith("/api/voice/elevenlabs/")) return false;
    if (url.pathname.startsWith("/api/voice/realtime/")) return false;
    if (url.pathname.startsWith("/api/voice/transcribe")) return false;
    if (url.pathname.startsWith("/api/voice/speak")) return false;
    return true;
  } catch {
    return false;
  }
}

async function safeCachePut(request, response) {
  if (!isCacheableApplicationRequest(request)) return;
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response);
  } catch (error) {
    console.warn("[AgriNexus service worker] cache put skipped", {
      reason: error?.name || "CachePutError",
      message: error?.message || "cache put failed"
    });
  }
}

async function safeCacheMatch(request) {
  if (!isCacheableApplicationRequest(request)) return undefined;
  try {
    return await caches.match(request);
  } catch {
    return undefined;
  }
}

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL.filter(path => {
        try {
          const url = new URL(path, self.location.origin);
          return ["http:", "https:"].includes(url.protocol) && url.origin === self.location.origin;
        } catch {
          return false;
        }
      })))
      .then(() => self.skipWaiting())
      .catch(error => {
        console.warn("[AgriNexus service worker] install cache skipped", {
          reason: error?.name || "InstallCacheError",
          message: error?.message || "install cache failed"
        });
        return self.skipWaiting();
      })
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
  if (!isCacheableApplicationRequest(event.request)) return;
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/api/")) return;
  const networkFirst = event.request.mode === "navigate"
    || ["/", "/index.html", "/app.js", "/styles.css", "/sw.js"].includes(url.pathname)
    || url.searchParams.has("v");

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        safeCachePut(event.request, response.clone());
        return response;
      })
      .catch(() => safeCacheMatch(event.request).then(cached => cached || (networkFirst ? caches.match("/index.html") : caches.match("/index.html"))))
  );
});
