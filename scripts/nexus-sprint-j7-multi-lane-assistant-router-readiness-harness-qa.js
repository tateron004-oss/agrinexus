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

const docName = "NEXUS_SPRINT_J7_MULTI_LANE_ASSISTANT_ROUTER_READINESS_FIXTURE_HARNESS.md";
const harnessName = "nexus-sprint-j7-multi-lane-assistant-router-readiness-harness.js";
const qaName = "nexus-sprint-j7-multi-lane-assistant-router-readiness-harness-qa.js";

assert(exists("docs", docName), "Sprint J7 doc must exist.");
assert(exists("scripts", harnessName), "Sprint J7 harness must exist.");
assert(exists("scripts", qaName), "Sprint J7 QA must exist.");

const doc = read("docs", docName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const harness = require("./nexus-sprint-j7-multi-lane-assistant-router-readiness-harness.js");

assertIncludes(doc, [
  "Sprint J7",
  "fixture-only harness",
  "does not add runtime UI",
  "active routing",
  "tool selection authority",
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
  "complete agriculture-support router readiness",
  "complete health-access-info router readiness",
  "complete communications-preparation router readiness",
  "unsupported primary lane",
  "unsupported candidate lane",
  "missing intent confidence state",
  "missing final gate",
  "attempted routing authority escalation",
  "attempted execution authority escalation",
  "incomplete blocked router channels",
  "routerReadinessOnly: true",
  "routingAuthority: false",
  "executionAuthority: false",
  "runtimeRoutingAllowed: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "externalNavigationAllowed: false",
  "nativeBridgeAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "routingAllowed: false",
  "executionAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js",
  "no-routing and no-execution boundary"
], "J7 doc");

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
].forEach(term => assert(!harnessSource.includes(term), `J7 harness must not include runtime side-effect API: ${term}`));

assert.equal(typeof harness.buildBaseRouterReadiness, "function", "J7 harness must export buildBaseRouterReadiness.");
assert.equal(typeof harness.runMultiLaneAssistantRouterReadinessFixtures, "function", "J7 harness must export runner.");
assert(Array.isArray(harness.fixtures), "J7 fixtures must be an array.");
assert(harness.fixtures.length >= 24, "J7 must cover representative router readiness success and failure cases.");

const expectedFixtureIds = [
  "complete-agriculture-support-router-readiness",
  "complete-health-access-info-router-readiness",
  "complete-communications-preparation-router-readiness",
  "unsupported-primary-lane",
  "unsupported-candidate-lane",
  "missing-intent-confidence",
  "missing-policy",
  "missing-permission",
  "missing-consent",
  "missing-audit",
  "missing-final-gate",
  "missing-dry-run",
  "missing-fallback",
  "routing-authority-escalation",
  "runtime-routing-escalation",
  "execution-authority-escalation",
  "provider-dispatch-escalation",
  "provider-handoff-escalation",
  "external-navigation-escalation",
  "native-bridge-escalation",
  "network-escalation",
  "storage-escalation",
  "backend-write-escalation",
  "incomplete-blocked-router-channels"
];

expectedFixtureIds.forEach(fixtureId => {
  assert(harness.fixtures.some(fixture => fixture.fixtureId === fixtureId), `J7 fixture set must include ${fixtureId}`);
});

const results = harness.runMultiLaneAssistantRouterReadinessFixtures();
assert.equal(results.length, harness.fixtures.length, "J7 result count must match fixture count.");
results.forEach(result => {
  assert.equal(result.ok, result.expectedOk, `${result.fixtureId} must match expected validation state.`);
  assert.equal(result.routingAllowed, false, `${result.fixtureId} must never allow runtime routing.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(harnessName), `${label} must not load the J7 harness.`);
});

const alias = "qa:nexus-sprint-j7-multi-lane-assistant-router-readiness-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-j6-multi-lane-assistant-router-readiness-contract-qa.js"), "J7 requires J6 QA to remain in qa-suite.");

console.log("[nexus-sprint-j7-multi-lane-assistant-router-readiness-harness-qa] passed");
