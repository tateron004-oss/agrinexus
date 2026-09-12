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

const docName = "NEXUS_SPRINT_G7_PROVIDER_DISPATCH_DRY_RUN_FIXTURE_HARNESS.md";
const harnessName = "nexus-sprint-g7-provider-dispatch-dry-run-harness.js";
const qaName = "nexus-sprint-g7-provider-dispatch-dry-run-harness-qa.js";

assert(exists("docs", docName), "Sprint G7 doc must exist.");
assert(exists("scripts", harnessName), "Sprint G7 harness must exist.");
assert(exists("scripts", qaName), "Sprint G7 QA must exist.");

const doc = read("docs", docName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const harness = require("./nexus-sprint-g7-provider-dispatch-dry-run-harness.js");

assertIncludes(doc, [
  "Sprint G7",
  "fixture-only harness",
  "does not add runtime UI",
  "provider adapters",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
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
  "missing final execution gate",
  "attempted dispatch authority escalation",
  "incomplete blocked dispatch channels",
  "dryRunOnly: true",
  "executionAuthority: false",
  "dispatchAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "executionAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js",
  "no-dispatch boundary"
], "G7 doc");

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
].forEach(term => assert(!harnessSource.includes(term), `G7 harness must not include runtime side-effect API: ${term}`));

assert.equal(typeof harness.buildBaseDryRun, "function", "G7 harness must export buildBaseDryRun.");
assert.equal(typeof harness.runProviderDispatchDryRunFixtures, "function", "G7 harness must export runner.");
assert(Array.isArray(harness.fixtures), "G7 fixtures must be an array.");
assert(harness.fixtures.length >= 12, "G7 must cover representative dry-run success and failure cases.");

const expectedFixtureIds = [
  "complete-provider-dispatch-review",
  "missing-final-gate",
  "missing-permission",
  "missing-consent",
  "missing-audit",
  "missing-provider-availability",
  "missing-user-approval",
  "dispatch-authority-escalation",
  "network-escalation",
  "storage-escalation",
  "backend-write-escalation",
  "incomplete-blocked-dispatch-channels"
];

expectedFixtureIds.forEach(fixtureId => {
  assert(harness.fixtures.some(fixture => fixture.fixtureId === fixtureId), `G7 fixture set must include ${fixtureId}`);
});

const results = harness.runProviderDispatchDryRunFixtures();
assert.equal(results.length, harness.fixtures.length, "G7 result count must match fixture count.");
results.forEach(result => {
  assert.equal(result.ok, result.expectedOk, `${result.fixtureId} must match expected validation state.`);
  assert.equal(result.dispatchAllowed, false, `${result.fixtureId} must never allow dispatch.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(harnessName), `${label} must not load the G7 harness.`);
});

const alias = "qa:nexus-sprint-g7-provider-dispatch-dry-run-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-g6-provider-dispatch-dry-run-contract-qa.js"), "G7 requires G6 QA to remain in qa-suite.");

console.log("[nexus-sprint-g7-provider-dispatch-dry-run-harness-qa] passed");
