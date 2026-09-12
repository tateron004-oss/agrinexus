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

const docName = "NEXUS_SPRINT_LIVE1_LIVE_SOURCE_RETRIEVAL_ASSISTANT_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-live1-live-source-retrieval-assistant-product-boundary-qa.js";

assert(exists("docs", docName), "LIVE1 product boundary doc must exist.");
assert(exists("scripts", qaName), "LIVE1 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE1",
  "Live Source Retrieval and Assistant Product Boundary",
  "Current HEAD",
  "Read-Only Retrieval vs Execution",
  "Supported Source Categories",
  "Supported Nexus Assistant Functions",
  "Supported General Questions",
  "Job Search and Application Help",
  "Source, Freshness, and Evidence Rules",
  "Provider Mode Rules",
  "Secret and Config Rules",
  "No-Execution Rules",
  "Fallback Behavior When Provider Is Missing",
  "High-Risk Caution Behavior",
  "Browser Validation Requirements",
  "Rollback Strategy",
  "LIVE2 Readiness Recommendation",
  "sourceName",
  "sourceCategory",
  "sourceUrl",
  "providerMode",
  "retrievedAt",
  "freshnessStatus",
  "confidenceLevel",
  "limitationNotes",
  "evidenceStatus",
  "userFacingSummary",
  "`noExecutionRequired: true`",
  "`executionAuthority: false`",
  "readOnly: true",
  "applicationActionAllowed: false",
  "applicationSubmissionAuthority: false",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=false",
  "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=false"
].forEach(term => assert(doc.includes(term), `LIVE1 doc must include: ${term}`));

[
  "weather",
  "current events",
  "conflict and security awareness",
  "shipment tracking",
  "job search",
  "agriculture weather and market context",
  "music and media provider availability",
  "provider and service status lookup",
  "follow-up handling",
  "clarification questions",
  "multilingual and simple-language readiness"
].forEach(term => assert(doc.toLowerCase().includes(term), `LIVE1 doc must cover source/assistant category: ${term}`));

[
  "must never fabricate source names",
  "provider-not-connected",
  "source-stale",
  "source-conflict-detected",
  "source-rate-limited",
  "source-error",
  "fixture",
  "mock",
  "sandbox",
  "live"
].forEach(term => assert(doc.includes(term), `LIVE1 doc must include retrieval/provider posture: ${term}`));

[
  "calls, SMS, WhatsApp, Telegram, or email sending",
  "payments, purchases, checkout, or money movement",
  "appointment booking",
  "location sharing or browser geolocation",
  "camera/image capture",
  "emergency dispatch",
  "medical diagnosis, prescription, dispensing, or pharmacy execution",
  "application submission",
  "backend real-world action writes",
  "pending real-world actions"
].forEach(term => assert(doc.includes(term), `LIVE1 no-execution boundary must include: ${term}`));

const unsafeClaims = [
  "live providers are enabled by default",
  "executionAuthority: true",
  "noExecutionRequired: false",
  "applicationSubmissionAuthority: true",
  "applicationActionAllowed: true"
];

unsafeClaims.forEach(term => {
  assert(!doc.includes(term), `LIVE1 doc must not claim unsafe enabled behavior: ${term}`);
});

const alias = "qa:nexus-sprint-live1-live-source-retrieval-assistant-product-boundary";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE1 QA.");

console.log("[nexus-sprint-live1-live-source-retrieval-assistant-product-boundary-qa] passed");
