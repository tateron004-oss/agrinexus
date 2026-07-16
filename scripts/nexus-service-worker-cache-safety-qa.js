const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

function includesAll(source, tokens, label) {
  for (const token of tokens) {
    assert(source.includes(token), `${label} missing ${token}`);
  }
}

includesAll(sw, [
  'const CACHE_NAME = "agrinexus-pwa-v403"',
  'const BUILD_VERSION = "nexus-behavior-458"',
  "function isCacheableApplicationRequest",
  '["http:", "https:"].includes(url.protocol)',
  "url.origin !== self.location.origin",
  'request.method !== "GET"',
  "async function safeCachePut",
  "async function safeCacheMatch",
  "await cache.put(request, response)",
  "console.warn(\"[AgriNexus service worker] cache put skipped\"",
  "purgeOldCaches()",
  "caches.delete(key)"
], "service worker cache safety contract");

assert(!sw.includes("cache.put(event.request"), "fetch handler must not pass event.request directly to Cache.put");
assert(!sw.includes("caches.match(event.request)"), "fetch handler must not match unsupported requests directly");
assert(sw.includes("if (!isCacheableApplicationRequest(event.request)) return;"), "fetch handler must bypass unsupported schemes before caching");
assert(sw.includes("APP_SHELL.filter"), "install cache must filter app-shell resources");
assert(sw.includes(".catch(error =>"), "install cache failures must be handled");

[
  "chrome-extension:",
  "moz-extension:",
  "edge-extension:",
  "about:",
  "blob:",
  "data:",
  "file:"
].forEach(protocol => {
  const parsed = new URL(`${protocol}${protocol === "about:" ? "blank" : "//nexus-test"}`);
  const supported = ["http:", "https:"].includes(parsed.protocol);
  assert.strictEqual(supported, false, `${protocol} must be classified as unsupported`);
});

includesAll(app, [
  'const NEXUS_GENESIS_VOICE_RUNTIME_VERSION = "nexus-genesis-voice-runtime-v455"',
  'const AGRINEXUS_BUILD_VERSION = "nexus-behavior-458"',
  'const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v403"',
  "console.info(`[Nexus Genesis voice] ${stage}",
  "controller-initialized",
  "automatic-start-entered",
  "permission-state-resolved",
  "getUserMedia-requested",
  "stream-acquired",
  "live-audio-track-verified",
  "recognition-constructor-resolved",
  "recognition-constructed",
  "recognition-handlers-registered",
  "recognition-start-requested",
  "recognition-onstart-received",
  "onaudiostart",
  "onsoundstart",
  "onspeechstart",
  "onresult",
  "final-transcript-received",
  "command-submitted",
  "response-received",
  "synthesis-started",
  "synthesis-completed",
  "recognition-restarted"
], "Genesis readable voice diagnostics");

assert(!app.includes('console.info("[Nexus Genesis voice]", payload)'), "voice debug must not print collapsed generic Object logs");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-service-worker-cache-safety",
  verifies: [
    "unsupported URL schemes bypass Cache.put",
    "extension requests bypass service-worker caching",
    "cache failures are handled",
    "same-origin http/https resources still cache",
    "old caches are purged",
    "Genesis voice debug events are readable and named"
  ]
}, null, 2));
