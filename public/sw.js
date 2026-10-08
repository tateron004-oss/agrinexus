const CACHE_NAME = "agrinexus-pwa-__NEXUS_RELEASE_SHA__";
const BUILD_VERSION = "__NEXUS_RELEASE_SHA__";
// Files cached at install besides the page itself. The page and every script/stylesheet it names are taken from the CURRENT index.html
// (see shellUrlsFromPage), so the cache always holds one release: the index.html the server just sent and exactly the files that index.html names.
// The ?v= list below is only the fallback used when the page names no scripts at all; it is not the preferred source.
const SHELL_EXTRAS = [
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
const APP_SHELL = [
  "/manifest.webmanifest",
  `/styles.css?v=${BUILD_VERSION}`,
  `/app.js?v=${BUILD_VERSION}`,
  `/nexus-genesis-voice-runtime-manager.js?v=${BUILD_VERSION}`,
  `/nexus-os-agrinexus-deployment-profile.js?v=nexus-os-agrinexus-deployment-1`,
  `/nexus-os-health-workforce-safety-pack.js?v=nexus-os-health-workforce-safety-1`,
  `/kyro-offline-notes.js?v=kyro-offline-notes-1`,
  `/kyro-crisis-phrases.js?v=kyro-crisis-phrases-1`,
  `/kyro-navigation.js?v=kyro-navigation-1`,
  `/kyro-emergency.js?v=kyro-emergency-1`,
  `/kyro-voice-intake.js?v=kyro-voice-intake-1`,
  `/kyro-intake-forms.js?v=kyro-intake-forms-1`,
  `/kyro-stall-watchdog.js?v=kyro-stall-watchdog-1`,
  `/kyro-media-commands.js?v=kyro-media-commands-1`,
  `/kyro-media-player.js?v=kyro-media-player-1`
];

// Local scripts, stylesheets and the manifest named by the page, exactly as the page names them (the server writes /file.js?v=<content hash>).
function shellUrlsFromPage(html) {
  const urls = new Set();
  for (const match of String(html).matchAll(/\b(?:src|href)="(\/[^"#\s]+\.(?:js|mjs|css|webmanifest)(?:\?[^"#\s]*)?)"/g)) urls.add(match[1]);
  return [...urls];
}

function sameOriginHttp(path) {
  try {
    const url = new URL(path, self.location.origin);
    return ["http:", "https:"].includes(url.protocol) && url.origin === self.location.origin;
  } catch {
    return false;
  }
}

// Fills the new release's cache. The page is always fetched from the network (it is never stored by the browser, so this is the one request that
// must reach the server); every other file is fetched with the default cache mode, so the browser answers from its own copy when the URL is a
// content-hashed one, or asks the server "has this changed?" (a 304 with no body) when it is not. An unchanged file therefore costs no download
// at install, whatever number of releases have passed since it was last fetched.
async function populateShell(cache) {
  const pageResponse = await fetch("/", { cache: "no-store" });
  if (!pageResponse.ok) throw new Error("page unavailable");
  const html = await pageResponse.clone().text();
  const pageUrls = shellUrlsFromPage(html).filter(sameOriginHttp);
  await cache.put("/", pageResponse.clone());
  await cache.put("/index.html", pageResponse);
  await cache.addAll(pageUrls.length ? pageUrls : APP_SHELL.filter(sameOriginHttp));
  // Convenience files: a missing one must not stop the release from installing.
  await Promise.allSettled(SHELL_EXTRAS.filter(sameOriginHttp).map(path => cache.add(path)));
}

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
      .then(cache => populateShell(cache))
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

self.addEventListener("sync", event => {
  if (event.tag !== "nexus-authoritative-sync") return;
  event.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true })
    .then(clients => clients.forEach(client => client.postMessage({ type: "NEXUS_FLUSH_AUTHORITATIVE_SYNC" }))));
});

self.addEventListener("push", event => {
  event.waitUntil((async () => {
    let payload = {};
    try { payload = event.data?.json?.() || {}; } catch { payload = { body: event.data?.text?.() || "" }; }
    if (!payload.receiptId || !payload.title) return;
    await self.registration.showNotification(payload.title, {
      body: payload.body || "Nexus has an update.",
      icon: "/icons/agri-nexus-192.png",
      badge: "/icons/agri-nexus-192.png",
      tag: payload.tag || payload.receiptId,
      data: { url: payload.url || "/", receiptId: payload.receiptId }
    });
  })());
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(async clients => {
    const target = new URL(event.notification.data?.url || "/", self.location.origin).href;
    const existing = clients.find(client => client.url === target);
    if (existing) return existing.focus();
    return self.clients.openWindow(target);
  }));
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
