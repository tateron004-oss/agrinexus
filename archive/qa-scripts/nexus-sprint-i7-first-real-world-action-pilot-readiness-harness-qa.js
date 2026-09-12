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

const docName = "NEXUS_SPRINT_I7_FIRST_REAL_WORLD_ACTION_PILOT_READINESS_FIXTURE_HARNESS.md";
const harnessName = "nexus-sprint-i7-first-real-world-action-pilot-readiness-harness.js";
const qaName = "nexus-sprint-i7-first-real-world-action-pilot-readiness-harness-qa.js";

assert(exists("docs", docName), "Sprint I7 doc must exist.");
assert(exists("scripts", harnessName), "Sprint I7 harness must exist.");
assert(exists("scripts", qaName), "Sprint I7 QA must exist.");

const doc = read("docs", docName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const harness = require("./nexus-sprint-i7-first-real-world-action-pilot-readiness-harness.js");

assertIncludes(doc, [
  "Sprint I7",
  "fixture-only harness",
  "does not add runtime UI",
  "provider dispatch",
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
  "purchases",
  "location sharing",
  "camera or microphone access",
  "medical/pharmacy behavior",
  "emergency routing",
  "marketplace transactions",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "missing identity state",
  "missing final gate",
  "attempted execution authority escalation",
  "incomplete blocked action channels",
  "pilotReadinessOnly: true",
  "executionAuthority: false",
  "executionAllowed: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "externalNavigationAllowed: false",
  "nativeBridgeAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "pilotAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js",
  "no-execution boundary"
], "I7 doc");

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
].forEach(term => assert(!harnessSource.includes(term), `I7 harness must not include runtime side-effect API: ${term}`));

assert.equal(typeof harness.buildBasePilotReadiness, "function", "I7 harness must export buildBasePilotReadiness.");
assert.equal(typeof harness.runFirstRealWorldActionPilotReadinessFixtures, "function", "I7 harness must export runner.");
assert(Array.isArray(harness.fixtures), "I7 fixtures must be an array.");
assert(harness.fixtures.length >= 20, "I7 must cover representative pilot readiness success and failure cases.");

const expectedFixtureIds = [
  "complete-first-real-world-action-pilot-review",
  "missing-identity",
  "missing-recipient-resolution",
  "missing-provider-readiness",
  "missing-final-gate",
  "missing-permission",
  "missing-consent",
  "missing-audit",
  "missing-dry-run",
  "missing-reversal-or-cancel-path",
  "missing-user-approval",
  "execution-authority-escalation",
  "provider-dispatch-escalation",
  "provider-handoff-escalation",
  "external-navigation-escalation",
  "native-bridge-escalation",
  "network-escalation",
  "storage-escalation",
  "backend-write-escalation",
  "incomplete-blocked-action-channels"
];

expectedFixtureIds.forEach(fixtureId => {
  assert(harness.fixtures.some(fixture => fixture.fixtureId === fixtureId), `I7 fixture set must include ${fixtureId}`);
});

const results = harness.runFirstRealWorldActionPilotReadinessFixtures();
assert.equal(results.length, harness.fixtures.length, "I7 result count must match fixture count.");
results.forEach(result => {
  assert.equal(result.ok, result.expectedOk, `${result.fixtureId} must match expected validation state.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
  assert.equal(result.pilotAllowed, false, `${result.fixtureId} must never allow pilot execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(harnessName), `${label} must not load the I7 harness.`);
});

const alias = "qa:nexus-sprint-i7-first-real-world-action-pilot-readiness-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-i6-first-real-world-action-pilot-readiness-contract-qa.js"), "I7 requires I6 QA to remain in qa-suite.");

console.log("[nexus-sprint-i7-first-real-world-action-pilot-readiness-harness-qa] passed");
