const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const media = require("../server/nexus-music-media-source-provider.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE10_MUSIC_MEDIA_PROVIDER_READINESS.md";
const moduleName = "nexus-music-media-source-provider.js";
const qaName = "nexus-sprint-live10-music-media-provider-readiness-qa.js";

assert(exists("docs", docName), "LIVE10 doc must exist.");
assert(exists("server", moduleName), "LIVE10 provider module must exist.");
assert(exists("scripts", qaName), "LIVE10 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("server", moduleName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE10",
  "Music/Media Provider Readiness",
  "Spotify",
  "local media provider",
  "radio stream provider",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
  "NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED=true",
  "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY",
  "provider-not-connected",
  "provider-not-configured",
  "source-query-ready",
  "play audio",
  "stream media",
  "authenticate users",
  "store provider tokens",
  "create playlists",
  "readOnly: true",
  "noExecutionRequired: true",
  "executionAuthority: false",
  "LIVE11 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE10 doc must include: ${term}`));

[
  "classifyMusicMediaIntent",
  "buildMusicMediaQuery",
  "resolveMusicMediaProviderConfig",
  "buildMockMusicMediaAvailabilityResult",
  "buildMusicMediaProviderUnavailableResult",
  "getMusicMediaSourceResult"
].forEach(fn => assert.equal(typeof media[fn], "function", `LIVE10 module must export ${fn}`));

assert.equal(media.classifyMusicMediaIntent("Play R&B music"), "music-media", "music intent must be recognized.");

const query = media.buildMusicMediaQuery({ mediaRequest: "R&B playlist", providerPreference: "Spotify" });
assert.equal(query.playbackAllowed, false, "music query must block playback.");
assert.equal(query.streamingAllowed, false, "music query must block streaming.");
assert.equal(query.authenticationAllowed, false, "music query must block authentication.");
assert.equal(query.playlistCreationAllowed, false, "music query must block playlist creation.");
assert.equal(query.tokenStorageAllowed, false, "music query must block token storage.");
assert.equal(query.executionAuthority, false, "music query must not grant execution.");

assert.equal(media.resolveMusicMediaProviderConfig({}).providerMode, "fixture", "music provider must default to fixture.");
assert.equal(media.resolveMusicMediaProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
}).providerMode, "mock", "music provider without key must stay mock.");
assert.equal(media.resolveMusicMediaProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY: "configured"
}).providerMode, "live", "music provider with flags/key may become live-ready.");

const missing = media.getMusicMediaSourceResult({}, {});
assert.equal(isSafeReadOnlySourceResult(missing), true, "missing music/media request result must remain safe.");
assert.equal(missing.sourceStatus, "provider-required", "missing music/media request must request clarification.");

const unavailable = media.getMusicMediaSourceResult({ mediaRequest: "R&B music" }, {});
assert.equal(isSafeReadOnlySourceResult(unavailable), true, "unavailable music/media result must remain safe.");
assert.equal(unavailable.sourceStatus, "provider-not-configured", "disabled provider must return provider-not-configured.");

const mock = media.getMusicMediaSourceResult({ mediaRequest: "R&B music", providerPreference: "Spotify" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
});
assert.equal(isSafeReadOnlySourceResult(mock), true, "mock music/media result must be safe.");
assert.equal(mock.providerMode, "mock", "missing key must produce mock mode.");
assert.equal(mock.sourceStatus, "source-result-available", "mock music/media result must be available.");
assert(mock.limitationNotes.includes("no playback"), "mock music/media result must disclose no playback.");

const liveReady = media.getMusicMediaSourceResult({ mediaRequest: "R&B music", providerPreference: "Spotify" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY: "configured"
});
assert.equal(isSafeReadOnlySourceResult(liveReady), true, "live-ready music/media result must remain safe.");
assert.equal(liveReady.providerMode, "live", "configured provider may report live mode.");
assert.equal(liveReady.sourceStatus, "source-query-ready", "configured provider must be query-ready, not fetched, in this phase.");
assert.equal(liveReady.rawResultAvailable, false, "LIVE10 must not claim raw live result availability.");

[
  "fetch(",
  "XMLHttpRequest",
  "http.request",
  "https.request",
  "axios",
  "request(",
  "writeFile",
  "appendFile",
  "localStorage",
  "sessionStorage",
  "db.json",
  "window.open",
  "location.href",
  "sendBeacon",
  "AudioContext",
  "HTMLAudioElement"
].forEach(term => assert(!moduleSource.includes(term), `LIVE10 module must not include unsafe or live side-effect API: ${term}`));

[
  "playAudio",
  "streamMedia",
  "authenticateUser",
  "createPlaylist",
  "storeToken",
  "executionAuthority: true"
].forEach(term => assert(!moduleSource.includes(term), `LIVE10 module must not include media execution path: ${term}`));

const alias = "qa:nexus-sprint-live10-music-media-provider-readiness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE10 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live9-agriculture-context-provider-readiness-qa.js"), "LIVE10 requires LIVE9 QA to remain in qa-suite.");

console.log("[nexus-sprint-live10-music-media-provider-readiness-qa] passed");
