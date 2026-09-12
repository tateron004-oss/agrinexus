const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const agriculture = require("../server/nexus-agriculture-context-source-provider.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE9_AGRICULTURE_CONTEXT_PROVIDER_READINESS.md";
const moduleName = "nexus-agriculture-context-source-provider.js";
const qaName = "nexus-sprint-live9-agriculture-context-provider-readiness-qa.js";

assert(exists("docs", docName), "LIVE9 doc must exist.");
assert(exists("server", moduleName), "LIVE9 provider module must exist.");
assert(exists("scripts", qaName), "LIVE9 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("server", moduleName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE9",
  "Agriculture Context Provider Readiness",
  "agriculture weather context",
  "market context",
  "crop public source context",
  "soil public source context",
  "irrigation public source context",
  "food security context",
  "FAO",
  "FEWS NET",
  "NASA POWER",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
  "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED=true",
  "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY",
  "buy or sell crops",
  "create marketplace listings",
  "process payments",
  "request camera or location",
  "readOnly: true",
  "noExecutionRequired: true",
  "executionAuthority: false",
  "LIVE10 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE9 doc must include: ${term}`));

[
  "classifyAgricultureContextCategory",
  "buildAgricultureContextQuery",
  "resolveAgricultureContextProviderConfig",
  "buildMockAgricultureContextResult",
  "buildAgricultureProviderUnavailableResult",
  "getAgricultureContextSourceResult"
].forEach(fn => assert.equal(typeof agriculture[fn], "function", `LIVE9 module must export ${fn}`));

assert.equal(agriculture.classifyAgricultureContextCategory("irrigation water"), "irrigation-public-source-context", "irrigation category must be recognized.");
assert.equal(agriculture.classifyAgricultureContextCategory("market price"), "market-context", "market category must be recognized.");
assert.equal(agriculture.classifyAgricultureContextCategory("soil fertility"), "soil-public-source-context", "soil category must be recognized.");

const query = agriculture.buildAgricultureContextQuery({ topic: "maize market price", locationText: "Kenya" });
assert.equal(query.category, "market-context", "query must classify market context.");
assert.equal(query.marketplaceExecutionAllowed, false, "query must block marketplace execution.");
assert.equal(query.paymentExecutionAllowed, false, "query must block payment execution.");
assert.equal(query.cameraDiagnosisAllowed, false, "query must block camera diagnosis.");
assert.equal(query.locationSharingAllowed, false, "query must block location sharing.");
assert.equal(query.executionAuthority, false, "query must not grant execution.");

assert.equal(agriculture.resolveAgricultureContextProviderConfig({}).providerMode, "fixture", "agriculture provider must default to fixture.");
assert.equal(agriculture.resolveAgricultureContextProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true"
}).providerMode, "mock", "agriculture provider without key must stay mock.");
assert.equal(agriculture.resolveAgricultureContextProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY: "configured"
}).providerMode, "live", "agriculture provider with flags/key may become live-ready.");

const missing = agriculture.getAgricultureContextSourceResult({}, {});
assert.equal(isSafeReadOnlySourceResult(missing), true, "missing agriculture topic result must remain safe.");
assert.equal(missing.sourceStatus, "provider-required", "missing agriculture topic must request clarification.");
assert(missing.resultSummary.includes("Which crop"), "missing agriculture topic must ask concise clarification.");

const unavailable = agriculture.getAgricultureContextSourceResult({ topic: "irrigation", locationText: "Kenya" }, {});
assert.equal(isSafeReadOnlySourceResult(unavailable), true, "unavailable agriculture result must remain safe.");
assert.equal(unavailable.sourceStatus, "provider-not-configured", "disabled provider must return provider-not-configured.");

const mock = agriculture.getAgricultureContextSourceResult({ topic: "irrigation", locationText: "Kenya" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true"
});
assert.equal(isSafeReadOnlySourceResult(mock), true, "mock agriculture result must be safe.");
assert.equal(mock.providerMode, "mock", "missing key must produce mock mode.");
assert.equal(mock.sourceStatus, "source-result-available", "mock agriculture result must be available.");
assert(mock.limitationNotes.includes("No marketplace"), "mock agriculture result must disclose no marketplace/payment behavior.");

const liveReady = agriculture.getAgricultureContextSourceResult({ topic: "soil health", locationText: "Ghana" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY: "configured"
});
assert.equal(isSafeReadOnlySourceResult(liveReady), true, "live-ready agriculture result must remain safe.");
assert.equal(liveReady.providerMode, "live", "configured provider may report live mode.");
assert.equal(liveReady.sourceStatus, "source-query-ready", "configured provider must be query-ready, not fetched, in this phase.");
assert.equal(liveReady.rawResultAvailable, false, "LIVE9 must not claim raw live result availability.");

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
].forEach(term => assert(!moduleSource.includes(term), `LIVE9 module must not include unsafe or live side-effect API: ${term}`));

[
  "createListing",
  "buyCrop",
  "sellCrop",
  "processPayment",
  "captureImage",
  "executionAuthority: true"
].forEach(term => assert(!moduleSource.includes(term), `LIVE9 module must not include agriculture execution path: ${term}`));

const alias = "qa:nexus-sprint-live9-agriculture-context-provider-readiness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE9 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live8-job-search-application-provider-readiness-qa.js"), "LIVE9 requires LIVE8 QA to remain in qa-suite.");

console.log("[nexus-sprint-live9-agriculture-context-provider-readiness-qa] passed");
