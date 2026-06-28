const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE2_PROVIDER_ADAPTER_INTERFACE_SOURCE_RESULT_CONTRACT.md";
const moduleName = "nexus-live-source-result-contract.js";
const qaName = "nexus-sprint-live2-provider-adapter-interface-source-result-contract-qa.js";

assert(exists("docs", docName), "LIVE2 doc must exist.");
assert(exists("public", moduleName), "LIVE2 source result contract module must exist.");
assert(exists("scripts", qaName), "LIVE2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-live-source-result-contract.js");

[
  "Nexus Sprint LIVE2",
  "Provider Adapter Interface and Source Result Contract",
  "normalizeSourceResult(providerResult)",
  "buildProviderUnavailableResult(providerName, reason)",
  "buildProviderErrorResult(providerName, errorType)",
  "isSafeReadOnlySourceResult(result)",
  "getConfiguredProviderMode(providerName, env)",
  "redactSensitiveProviderInput(input)",
  "classifySourceRequestType(query, context)",
  "sourceResultId",
  "requestType",
  "providerName",
  "providerMode",
  "sourceName",
  "sourceCategory",
  "sourceUrl",
  "query",
  "resultSummary",
  "rawResultAvailable",
  "retrievedAt",
  "lastUpdated",
  "freshnessStatus",
  "confidenceLevel",
  "limitationNotes",
  "evidenceStatus",
  "sourceStatus",
  "`readOnly: true`",
  "`noExecutionRequired: true`",
  "`executionAuthority: false`",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
  "LIVE3 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE2 doc must include: ${term}`));

assert.equal(typeof contract.normalizeSourceResult, "function", "normalizeSourceResult must exist.");
assert.equal(typeof contract.buildProviderUnavailableResult, "function", "buildProviderUnavailableResult must exist.");
assert.equal(typeof contract.buildProviderErrorResult, "function", "buildProviderErrorResult must exist.");
assert.equal(typeof contract.isSafeReadOnlySourceResult, "function", "isSafeReadOnlySourceResult must exist.");
assert.equal(typeof contract.validateReadOnlySourceResult, "function", "validateReadOnlySourceResult must exist.");
assert.equal(typeof contract.getConfiguredProviderMode, "function", "getConfiguredProviderMode must exist.");
assert.equal(typeof contract.redactSensitiveProviderInput, "function", "redactSensitiveProviderInput must exist.");
assert.equal(typeof contract.classifySourceRequestType, "function", "classifySourceRequestType must exist.");

const normalized = contract.normalizeSourceResult({
  requestType: "weather",
  providerName: "OpenWeather",
  providerMode: "mock",
  sourceName: "OpenWeather mock",
  sourceCategory: "weather",
  sourceUrl: "provider:openweather",
  query: "weather in Nairobi",
  resultSummary: "Mock weather result for Nairobi.",
  rawResultAvailable: false,
  freshnessStatus: "recent",
  confidenceLevel: "medium",
  limitationNotes: "Mock mode only.",
  evidenceStatus: "mock-backed",
  sourceStatus: "source-result-available"
});

assert.equal(contract.isSafeReadOnlySourceResult(normalized), true, "normalized source result must be safe.");
assert.equal(normalized.readOnly, true, "source result must be read-only.");
assert.equal(normalized.noExecutionRequired, true, "source result must not require execution.");
assert.equal(normalized.executionAuthority, false, "source result must not grant execution authority.");

const unavailable = contract.buildProviderUnavailableResult("OpenWeather", "missing credentials");
assert.equal(contract.isSafeReadOnlySourceResult(unavailable), true, "unavailable result must still be a safe source result.");
assert.equal(unavailable.sourceStatus, "provider-not-configured", "unavailable provider must disclose provider-not-configured.");
assert.equal(unavailable.executionAuthority, false, "unavailable provider must not grant execution.");

const providerError = contract.buildProviderErrorResult("ReliefWeb", "source-rate-limited");
assert.equal(contract.isSafeReadOnlySourceResult(providerError), true, "provider error result must still be safe.");
assert.equal(providerError.sourceStatus, "source-rate-limited", "provider error must preserve error status.");

const invalid = Object.assign({}, normalized, { executionAuthority: true });
assert.equal(contract.isSafeReadOnlySourceResult(invalid), false, "execution authority must invalidate source result.");

assert.equal(contract.classifySourceRequestType("What is the weather in Nairobi?"), "weather", "weather classifier must work.");
assert.equal(contract.classifySourceRequestType("Is there fighting near Goma?"), "news-security", "news/security classifier must work.");
assert.equal(contract.classifySourceRequestType("Track my shipment"), "shipment-tracking", "shipment classifier must work.");
assert.equal(contract.classifySourceRequestType("Find farm jobs near Nairobi"), "job-search", "job classifier must work.");
assert.equal(contract.classifySourceRequestType("Update my resume for this role"), "job-application-preparation", "application preparation classifier must work.");
assert.equal(contract.classifySourceRequestType("Play R&B music"), "music-media", "music/media classifier must work.");

const redacted = contract.redactSensitiveProviderInput("Call +254 712 345 678 or email person@example.com with token=abc123 and tracking ABCDEFGHIJKL123");
assert(!redacted.includes("+254 712 345 678"), "phone-like input must be redacted.");
assert(!redacted.includes("person@example.com"), "email input must be redacted.");
assert(!redacted.includes("abc123"), "secret-like input must be redacted.");
assert(!redacted.includes("ABCDEFGHIJKL123"), "long tracking-like input must be redacted.");

assert.equal(contract.getConfiguredProviderMode("weather", {}), "fixture", "providers default to fixture.");
assert.equal(contract.getConfiguredProviderMode("weather", {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true"
}), "mock", "enabled provider without key must stay mock.");
assert.equal(contract.getConfiguredProviderMode("weather", {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_API_KEY: "configured"
}), "live", "enabled provider with key may report live mode.");

[
  "fetch(",
  "XMLHttpRequest",
  "http.request",
  "https.request",
  "child_process",
  "writeFile",
  "appendFile",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "addEventListener",
  "createElement",
  "innerHTML",
  "db.json"
].forEach(term => assert(!moduleSource.includes(term), `LIVE2 module must not include runtime side-effect API: ${term}`));

[
  "ACTION_CALL",
  "sms:",
  "mailto:",
  "whatsapp",
  "telegram",
  "payment execution",
  "book appointment",
  "emergency dispatch",
  "prescribe",
  "application submitted"
].forEach(term => assert(!moduleSource.toLowerCase().includes(term.toLowerCase()), `LIVE2 module must not include unsafe execution claim: ${term}`));

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the LIVE2 module.`);
});

const alias = "qa:nexus-sprint-live2-provider-adapter-interface-source-result-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live1-live-source-retrieval-assistant-product-boundary-qa.js"), "LIVE2 requires LIVE1 QA to remain in qa-suite.");

console.log("[nexus-sprint-live2-provider-adapter-interface-source-result-contract-qa] passed");
