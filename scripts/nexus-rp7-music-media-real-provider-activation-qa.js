const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const musicMedia = require("../server/nexus-music-media-source-provider.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");

const root = path.resolve(__dirname, "..");

const TEST_QUERIES = Object.freeze([
  "Find music about farming.",
  "Find educational agriculture videos.",
  "Find media resources for agriculture training."
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  const docName = "NEXUS_RP7_MUSIC_MEDIA_REAL_PROVIDER_ACTIVATION.md";
  const qaName = "nexus-rp7-music-media-real-provider-activation-qa.js";
  assert(exists("docs", docName), "RP7 music/media activation doc must exist.");
  assert(exists("scripts", qaName), "RP7 music/media activation QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Music/Media Real Provider Activation",
    "music-media",
    "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY",
    "Find music about farming.",
    "Find educational agriculture videos.",
    "Find media resources for agriculture training.",
    "read-only media metadata lookup",
    "educational media summary",
    "agriculture/workforce media resource suggestions",
    "live-ready config returns a future read-only query-ready state"
  ].forEach(term => assert(doc.includes(term), `RP7 doc must include ${term}.`));

  [
    "play copyrighted music",
    "stream media",
    "open paid media services",
    "download media",
    "bypass licensing",
    "authenticate to accounts",
    "create playlists",
    "alter account state",
    "store provider tokens",
    "purchase media",
    "expose lyrics",
    "navigate externally"
  ].forEach(term => assert(doc.includes(term), `RP7 blocked behavior must include ${term}.`));

  ["nexus-rp7-music-media-real-provider-activation-qa", "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp7-music-media-real-provider-activation-qa"), "server.js must not load RP7 QA.");

  [
    "fetch" + "(",
    "XML" + "HttpRequest",
    "http." + "request",
    "https." + "request",
    "navigator." + "geolocation",
    "media" + "Devices",
    "Audio" + "Context",
    "write" + "File",
    "append" + "File",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem",
    "window." + "open",
    "location." + "href",
    "play" + "Audio",
    "stream" + "Media",
    "store" + "Token"
  ].forEach(term => assert(!qaSource.includes(term), `RP7 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp7-music-media-real-provider-activation"],
    "node scripts/nexus-rp7-music-media-real-provider-activation-qa.js",
    "RP7 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp7-music-media-real-provider-activation-qa.js"), "RP7 QA must be in safe suites.");
}

function assertSafeMusicMediaResult(result, label) {
  assert.equal(isSafeReadOnlySourceResult(result), true, `${label} must satisfy safe read-only source result contract.`);
  assert.notEqual(result.executionAuthority, true, `${label} must not grant execution authority.`);
  assert(!/\b(will|can|authorized to|allowed to)\s+(play|stream|authenticate|create playlists|alter accounts|store tokens|purchase|download|navigate)\b/i.test(result.limitationNotes || ""), `${label} limitation notes must not authorize unsafe media action.`);
  assert(!/\b(will|can|authorized to|allowed to)\s+(play|stream|open paid|download|purchase|navigate)\b/i.test(result.resultSummary || ""), `${label} summary must not claim unsafe media action.`);
}

function assertQueryNonExecuting(query, label) {
  assert.equal(query.playbackAllowed, false, `${label} must not allow playback.`);
  assert.equal(query.streamingAllowed, false, `${label} must not allow streaming.`);
  assert.equal(query.authenticationAllowed, false, `${label} must not allow authentication.`);
  assert.equal(query.playlistCreationAllowed, false, `${label} must not allow playlist creation.`);
  assert.equal(query.accountStateChangeAllowed, false, `${label} must not allow account state changes.`);
  assert.equal(query.tokenStorageAllowed, false, `${label} must not allow token storage.`);
  assert.equal(query.executionAuthority, false, `${label} must not grant execution authority.`);
}

function runRp7MusicMediaRealProviderActivationQa() {
  assertStaticContract();

  const missing = musicMedia.getMusicMediaSourceResult({}, {});
  assert.equal(missing.sourceStatus, "provider-required", "Missing media request must ask for a provider/request rather than executing.");
  assertSafeMusicMediaResult(missing, "missing media request result");

  TEST_QUERIES.forEach(queryText => {
    const query = musicMedia.buildMusicMediaQuery({ mediaRequest: queryText });
    assertQueryNonExecuting(query, queryText);

    const skipped = musicMedia.getMusicMediaSourceResult({ mediaRequest: queryText }, {});
    assert.equal(skipped.sourceStatus, "provider-not-configured", `${queryText} must skip safely without config.`);
    assertSafeMusicMediaResult(skipped, `${queryText} skipped result`);

    const mock = musicMedia.getMusicMediaSourceResult({ mediaRequest: queryText }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
      NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY: ""
    });
    assert.equal(mock.providerMode, "mock", `${queryText} missing key path should use mock provider mode.`);
    assert.equal(mock.sourceStatus, "source-result-available", `${queryText} mock path must be source-shaped.`);
    assertSafeMusicMediaResult(mock, `${queryText} mock result`);

    const liveReady = musicMedia.getMusicMediaSourceResult({ mediaRequest: queryText }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
      NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY: "configured-for-test"
    });
    assert.equal(liveReady.providerMode, "live", `${queryText} credentialed path should be live-ready.`);
    assert.equal(liveReady.sourceStatus, "source-query-ready", `${queryText} credentialed path must not perform a live network request in RP7.`);
    assertSafeMusicMediaResult(liveReady, `${queryText} live-ready result`);
  });

  console.log(JSON.stringify({
    providerId: "music-media",
    queryCount: TEST_QUERIES.length,
    liveTested: false,
    status: "prepared-live-query-ready-with-safe-skip-mock-and-media-discovery-paths",
    noPlaybackAuthorized: true,
    noStreamingAuthorized: true,
    noAuthenticationAuthorized: true,
    noPlaylistCreationAuthorized: true,
    noTokenStorageAuthorized: true,
    noPurchaseAuthorized: true,
    noExternalNavigationAuthorized: true
  }, null, 2));
  console.log("[nexus-rp7-music-media-real-provider-activation-qa] passed");
}

if (require.main === module) {
  try {
    runRp7MusicMediaRealProviderActivationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  TEST_QUERIES,
  runRp7MusicMediaRealProviderActivationQa
});
