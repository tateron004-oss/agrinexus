const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const sw = read("public/sw.js");
const doc = read("docs/NEXUS_GLOBAL_OFFLINE_LOW_BANDWIDTH_ACCESS.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected to find ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect to find ${needle}`);
}

const offlineBridge = spawnSync(process.execPath, ["scripts/nexus-offline-expansion-bridge-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(
  offlineBridge.status,
  0,
  `offline expansion bridge QA should pass before global offline access QA\n${offlineBridge.stdout}\n${offlineBridge.stderr}`
);

[
  "offline_access_packet",
  "low_bandwidth_guidance_packet",
  "stale_data_warning_packet",
  "nexusGlobalOfflineAccessState",
  "renderNexusGlobalOfflineAccessLayer",
  "handleNexusGlobalOfflineAccessClick",
  "data-testid=\"nexus-global-offline-access-layer\"",
  "data-testid=\"nexus-global-offline-connectivity\"",
  "data-testid=\"nexus-global-offline-cache-status\"",
  "data-testid=\"nexus-global-offline-queue-count\"",
  "data-testid=\"nexus-global-offline-stale-warning\"",
  "data-testid=\"nexus-global-offline-africa-first\"",
  "data-testid=\"nexus-global-offline-queue-behavior\"",
  "data-testid=\"nexus-global-offline-restore-behavior\"",
  "data-testid=\"nexus-global-offline-no-fake-provider\"",
  "data-nexus-global-offline-action=\"show-offline-queue\"",
  "data-nexus-global-offline-action=\"prepare-low-bandwidth-packet\"",
  "data-nexus-global-offline-action=\"show-stale-data-warning\"",
  "nexus_global_low_bandwidth_packet_prepared",
  "nexus_global_stale_data_warning_shown",
  "noProviderAccessClaimed: true",
  "noLocationSharingAuthorized: true",
  "noAutomaticSync: true",
  "noFreshCitationClaimed: true",
  "showNexusQueuedActions"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  ".nexus-global-offline-access-panel",
  ".nexus-global-offline-grid",
  ".nexus-global-offline-actions",
  ".nexus-global-offline-notes"
].forEach(token => includes(styles, token, `styles should include ${token}`));

[
  "APP_SHELL",
  "caches.open",
  "url.pathname.startsWith(\"/api/\")",
  "caches.match(\"/index.html\")"
].forEach(token => includes(sw, token, `service worker should preserve ${token}`));

[
  "Nexus Global Offline, Low-Bandwidth, and Africa-First Access Layer",
  "`offline_access_packet`",
  "`low_bandwidth_guidance_packet`",
  "`stale_data_warning_packet`",
  "show the offline queue",
  "prepare a low-bandwidth packet",
  "show a stale-data warning",
  "must not be presented as current",
  "restored connectivity does not authorize automatic submission",
  "Africa-First Access Design",
  "Safety Boundaries"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "offline provider access is live",
  "fresh citations guaranteed offline",
  "auto-sync without confirmation",
  "secret value:",
  "api key value:",
  "location shared automatically",
  "payment completed automatically",
  "emergency dispatched automatically",
  "provider contacted automatically"
].forEach(phrase => {
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-offline-access"],
  "node scripts/nexus-global-offline-access-qa.js",
  "package script should expose global offline access QA"
);
includes(qaSuite, "scripts/nexus-global-offline-access-qa.js", "qa suite should include global offline access QA");

console.log("nexus-global-offline-access QA passed");
