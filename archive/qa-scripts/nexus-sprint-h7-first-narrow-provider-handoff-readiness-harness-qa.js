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

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_H7_FIRST_NARROW_PROVIDER_HANDOFF_READINESS_FIXTURE_HARNESS.md";
const harnessName = "nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness.js";
const qaName = "nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness-qa.js";

assert(exists("docs", docName), "Sprint H7 doc must exist.");
assert(exists("scripts", harnessName), "Sprint H7 harness must exist.");
assert(exists("scripts", qaName), "Sprint H7 QA must exist.");

const doc = read("docs", docName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const harness = require("./nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness.js");

assertIncludes(doc, [
  "Sprint H7",
  "fixture-only harness",
  "does not add runtime UI",
  "provider adapters",
  "provider handoff",
  "external navigation",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "scheduling",
  "payments",
  "location sharing",
  "camera or microphone access",
  "medical/pharmacy behavior",
  "emergency routing",
  "marketplace transactions",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "missing final gate",
  "attempted handoff authority escalation",
  "incomplete blocked handoff channels",
  "handoffReadinessOnly: true",
  "handoffAllowed: false",
  "externalNavigationAllowed: false",
  "providerApiAllowed: false",
  "nativeBridgeAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "executionAuthority: false",
  "executionAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js",
  "no-handoff boundary"
], "H7 doc");

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "writeFile",
  "appendFile"
].forEach(term => assert(!harnessSource.includes(term), `H7 harness must not include runtime side-effect API: ${term}`));

assert.equal(typeof harness.buildBaseHandoffReadiness, "function", "H7 harness must export buildBaseHandoffReadiness.");
assert.equal(typeof harness.runFirstNarrowProviderHandoffReadinessFixtures, "function", "H7 harness must export runner.");
assert(Array.isArray(harness.fixtures), "H7 fixtures must be an array.");
assert(harness.fixtures.length >= 16, "H7 must cover representative handoff readiness success and failure cases.");

const expectedFixtureIds = [
  "complete-narrow-provider-handoff-review",
  "missing-final-gate",
  "missing-permission",
  "missing-consent",
  "missing-audit",
  "missing-provider-availability",
  "missing-user-approval",
  "missing-dry-run",
  "handoff-authority-escalation",
  "external-navigation-escalation",
  "provider-api-escalation",
  "native-bridge-escalation",
  "network-escalation",
  "storage-escalation",
  "backend-write-escalation",
  "incomplete-blocked-handoff-channels"
];

expectedFixtureIds.forEach(fixtureId => {
  assert(harness.fixtures.some(fixture => fixture.fixtureId === fixtureId), `H7 fixture set must include ${fixtureId}`);
});

const results = harness.runFirstNarrowProviderHandoffReadinessFixtures();
assert.equal(results.length, harness.fixtures.length, "H7 result count must match fixture count.");
results.forEach(result => {
  assert.equal(result.ok, result.expectedOk, `${result.fixtureId} must match expected validation state.`);
  assert.equal(result.handoffAllowed, false, `${result.fixtureId} must never allow handoff.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(harnessName), `${label} must not load the H7 harness.`);
});

const alias = "qa:nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-h6-first-narrow-provider-handoff-readiness-contract-qa.js"), "H7 requires H6 QA to remain in qa-suite.");

console.log("[nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness-qa] passed");
