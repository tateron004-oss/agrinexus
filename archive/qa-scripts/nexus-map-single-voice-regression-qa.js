const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

assert(html.includes('/vendor/leaflet/leaflet.css?v=1.9.4'), "Leaflet CSS must be served locally.");
assert(html.includes('/vendor/leaflet/leaflet.js?v=1.9.4'), "Leaflet JavaScript must be served locally.");
assert(!html.includes("unpkg.com/leaflet"), "The production map must not depend on the external Leaflet CDN.");
assert(app.includes('recordNexusAudioPipelineEvent("competing-speech-suppressed"'), "Realtime audio ownership must suppress competing speech.");
assert(app.includes('canonicalOwner: "openai-realtime-webrtc"'), "Realtime WebRTC must remain the canonical audible owner.");
assert(app.includes('openCountryMapFromVoice(country, response, { suppressSpeech: true })'), "Realtime country maps must not start local speech.");
assert(app.includes('openFullScaleUserMap(response, { suppressSpeech: true })'), "Realtime maps must not start local speech.");
assert(app.includes("[80, 180, 360, 700].forEach"), "Map rendering must retry while the visible Leaflet surface initializes.");
assert(app.includes('allowRealtimeSurfaceChange: true,\n    source: "explicit-voice-map-navigation"'), "An explicit spoken map request must be allowed to open the visible map during Realtime.");
assert(app.includes("return data?.permissions?.[area] !== false;"), "Realtime tool results must not crash workspace permission checks when shared data is temporarily unavailable.");
assert(fs.existsSync(path.join(root, "public", "vendor", "leaflet", "leaflet.js")), "Local Leaflet JavaScript is missing.");
assert(fs.existsSync(path.join(root, "public", "vendor", "leaflet", "leaflet.css")), "Local Leaflet CSS is missing.");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-map-single-voice-regression-qa",
  protections: {
    realtimeIntelligence: "unchanged",
    canonicalVoice: "openai-realtime-webrtc",
    duplicatePlayback: "suppressed",
    mapRuntime: "self-hosted-leaflet",
    visibleRenderRetries: 4
  }
}));
