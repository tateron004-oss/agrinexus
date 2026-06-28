const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const newsSecurity = require("../server/nexus-news-security-source-provider.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE6_NEWS_SECURITY_CONFLICT_PROVIDER_READINESS.md";
const moduleName = "nexus-news-security-source-provider.js";
const qaName = "nexus-sprint-live6-news-security-conflict-provider-readiness-qa.js";

assert(exists("docs", docName), "LIVE6 doc must exist.");
assert(exists("server", moduleName), "LIVE6 provider module must exist.");
assert(exists("scripts", qaName), "LIVE6 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("server", moduleName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE6",
  "News/Security/Conflict Provider Readiness",
  "ReliefWeb",
  "GDELT",
  "ACLED",
  "UN/OCHA",
  "government travel/security advisories",
  "risk",
  "multi-source",
  "provider-not-configured",
  "source-query-ready",
  "stale",
  "conflicting",
  "rate-limited",
  "does not make network requests",
  "dispatch emergency help",
  "call authorities",
  "provide certainty when sources conflict",
  "encourage risky travel",
  "readOnly: true",
  "noExecutionRequired: true",
  "executionAuthority: false",
  "LIVE7 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE6 doc must include: ${term}`));

[
  "buildNewsSecuritySourceQuery",
  "resolveNewsSecurityProviderConfig",
  "buildMockNewsSecurityResult",
  "buildConflictingNewsSecurityResult",
  "buildNewsSecurityProviderUnavailableResult",
  "getNewsSecuritySourceResult"
].forEach(fn => assert.equal(typeof newsSecurity[fn], "function", `LIVE6 module must export ${fn}`));

const query = newsSecurity.buildNewsSecuritySourceQuery({ regionOrTopic: "near Goma" });
assert.equal(query.regionOrTopic, "near Goma", "query must preserve user-provided region/topic.");
assert.equal(query.multiSourcePreferred, true, "conflict/security queries must prefer multi-source evidence.");
assert.equal(query.riskCautionRequired, true, "conflict/security queries must require caution.");
assert.equal(query.travelSafetyCertaintyAllowed, false, "travel safety certainty must not be allowed.");
assert.equal(query.executionAuthority, false, "query must not grant execution.");

assert.equal(newsSecurity.resolveNewsSecurityProviderConfig({}).providerMode, "fixture", "LIVE6 provider must default to fixture.");
assert.equal(newsSecurity.resolveNewsSecurityProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true"
}).providerMode, "mock", "LIVE6 provider without key must stay mock.");
assert.equal(newsSecurity.resolveNewsSecurityProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_API_KEY: "configured"
}).providerMode, "live", "LIVE6 provider with flags/key may become live-ready.");

const missingRegion = newsSecurity.getNewsSecuritySourceResult({}, {});
assert.equal(isSafeReadOnlySourceResult(missingRegion), true, "missing region result must remain safe.");
assert.equal(missingRegion.sourceStatus, "provider-required", "missing region must request clarification.");
assert(missingRegion.resultSummary.includes("Which area"), "missing region must ask concise area clarification.");

const unavailable = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: "Goma" }, {});
assert.equal(isSafeReadOnlySourceResult(unavailable), true, "unavailable news/security result must remain safe.");
assert.equal(unavailable.sourceStatus, "provider-not-configured", "disabled provider must return provider-not-configured.");
assert.equal(unavailable.executionAuthority, false, "disabled provider must not grant execution.");

const mock = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: "eastern DRC" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true"
});
assert.equal(isSafeReadOnlySourceResult(mock), true, "mock news/security result must be safe.");
assert.equal(mock.providerMode, "mock", "missing key must produce mock mode.");
assert.equal(mock.sourceStatus, "source-result-available", "mock news/security result must be available.");
assert(mock.limitationNotes.includes("not travel clearance"), "mock security result must include caution language.");

const conflicting = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: "Goma", conflictExpected: true }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true"
});
assert.equal(isSafeReadOnlySourceResult(conflicting), true, "conflicting source result must remain safe.");
assert.equal(conflicting.sourceStatus, "source-conflict-detected", "conflicting source status must be explicit.");
assert.equal(conflicting.freshnessStatus, "conflicting", "conflicting freshness must be explicit.");

const liveReady = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: "Sudan" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_API_KEY: "configured"
});
assert.equal(isSafeReadOnlySourceResult(liveReady), true, "live-ready news/security result must remain safe.");
assert.equal(liveReady.providerMode, "live", "configured provider may report live mode.");
assert.equal(liveReady.sourceStatus, "source-query-ready", "configured provider must be query-ready, not fetched, in this phase.");
assert.equal(liveReady.rawResultAvailable, false, "LIVE6 must not claim raw live result availability.");

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
  "navigator.geolocation",
  "mediaDevices"
].forEach(term => assert(!moduleSource.includes(term), `LIVE6 module must not include unsafe or live side-effect API: ${term}`));

[
  "dispatchEmergency",
  "callAuthorities",
  "travel is safe",
  "guaranteed safe",
  "executionAuthority: true"
].forEach(term => assert(!moduleSource.includes(term), `LIVE6 module must not include unsafe safety claim or execution path: ${term}`));

const alias = "qa:nexus-sprint-live6-news-security-conflict-provider-readiness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE6 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live5-weather-provider-readiness-qa.js"), "LIVE6 requires LIVE5 QA to remain in qa-suite.");

console.log("[nexus-sprint-live6-news-security-conflict-provider-readiness-qa] passed");
