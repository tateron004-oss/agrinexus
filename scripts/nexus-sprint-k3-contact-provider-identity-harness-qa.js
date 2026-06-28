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
  terms.forEach(term => assert(source.includes(term), `${label} must include: ${term}`));
}

const docName = "NEXUS_SPRINT_K3_FIXTURE_ONLY_CONTACT_PROVIDER_HARNESS.md";
const harnessName = "nexus-sprint-k3-contact-provider-identity-harness.js";
const qaName = "nexus-sprint-k3-contact-provider-identity-harness-qa.js";

assert(exists("docs", docName), "K3 doc must exist.");
assert(exists("scripts", harnessName), "K3 harness must exist.");
assert(exists("scripts", qaName), "K3 QA must exist.");

const doc = read("docs", docName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const harness = require("./nexus-sprint-k3-contact-provider-identity-harness.js");

assertIncludes(doc, [
  "Sprint K3",
  "fixture-only harness",
  "does not add runtime UI",
  "live contact lookup",
  "live provider lookup",
  "provider dispatch",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "payments",
  "location sharing",
  "medical/pharmacy behavior",
  "emergency routing",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "contact candidate preview",
  "provider candidate preview",
  "healthcare-provider candidate preview",
  "emergency-contact candidate preview",
  "execution authority escalation",
  "communication escalation",
  "incomplete blocked identity channels",
  "identityResolutionOnly: true",
  "approvalIntentOnly: true",
  "finalExecutionGateRequired: true",
  "executionAuthority: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "communicationAllowed: false",
  "executionAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js"
], "K3 doc");

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
].forEach(term => assert(!harnessSource.includes(term), `K3 harness must not include runtime side-effect API: ${term}`));

assert.equal(typeof harness.buildBaseIdentityCandidate, "function", "K3 harness must export buildBaseIdentityCandidate.");
assert.equal(typeof harness.runContactProviderIdentityFixtures, "function", "K3 harness must export runner.");
assert(Array.isArray(harness.fixtures), "K3 fixtures must be an array.");
assert(harness.fixtures.length >= 26, "K3 must cover representative identity success and failure cases.");

[
  "contact-candidate-preview",
  "provider-candidate-preview",
  "role-candidate-preview",
  "marketplace-party-candidate-preview",
  "healthcare-provider-candidate-preview",
  "pharmacy-provider-candidate-preview",
  "emergency-contact-candidate-preview",
  "transportation-provider-candidate-preview",
  "ambiguous-identity-candidate",
  "missing-identity-candidate",
  "execution-authority-escalation",
  "provider-dispatch-escalation",
  "provider-handoff-escalation",
  "communication-escalation",
  "incomplete-blocked-identity-channels"
].forEach(fixtureId => {
  assert(harness.fixtures.some(fixture => fixture.fixtureId === fixtureId), `K3 fixture set must include ${fixtureId}`);
});

const results = harness.runContactProviderIdentityFixtures();
assert.equal(results.length, harness.fixtures.length, "K3 result count must match fixture count.");
results.forEach(result => {
  assert.equal(result.ok, result.expectedOk, `${result.fixtureId} must match expected validation state.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(harnessName), `${label} must not load the K3 harness.`);
});

const alias = "qa:nexus-sprint-k3-contact-provider-identity-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-k2-inert-contact-provider-identity-contract-qa.js"), "K3 requires K2 QA to remain in qa-suite.");

console.log("[nexus-sprint-k3-contact-provider-identity-harness-qa] passed");
