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

const docName = "NEXUS_SPRINT_L3_FIXTURE_ONLY_CALL_MESSAGE_HARNESS.md";
const fixtureName = "call-message-intents.json";
const harnessName = "nexus-sprint-l3-call-message-intent-harness.js";
const qaName = "nexus-sprint-l3-call-message-intent-harness-qa.js";

assert(exists("docs", docName), "L3 doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "L3 fixture file must exist.");
assert(exists("scripts", harnessName), "L3 harness must exist.");
assert(exists("scripts", qaName), "L3 QA must exist.");

const doc = read("docs", docName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const harness = require("./nexus-sprint-l3-call-message-intent-harness.js");

assertIncludes(doc, [
  "Sprint L3",
  "fixture-only harness",
  "does not add runtime UI",
  "provider dispatch",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "payments",
  "location sharing",
  "medical/pharmacy behavior",
  "emergency routing",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "call saved contact intent",
  "SMS user-provided contact intent",
  "WhatsApp agriculture provider message intent",
  "Telegram training provider message intent",
  "email workforce provider intent",
  "blocked emergency call attempt",
  "blocked payment message attempt",
  "ambiguous recipient requiring clarification",
  "executionAuthority: false",
  "executionAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js"
], "L3 doc");

[
  "writeFile",
  "appendFile",
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
  "setItem"
].forEach(term => assert(!harnessSource.includes(term), `L3 harness must not include runtime side-effect API: ${term}`));

assert.equal(typeof harness.loadCallMessageIntentFixtures, "function", "L3 harness must export fixture loader.");
assert.equal(typeof harness.buildCallMessageIntentFromFixture, "function", "L3 harness must export fixture builder.");
assert.equal(typeof harness.runCallMessageIntentFixtures, "function", "L3 harness must export fixture runner.");

const fixtures = harness.loadCallMessageIntentFixtures();
assert(Array.isArray(fixtures), "L3 fixtures must load as an array.");
assert.equal(fixtures.length, 8, "L3 must include eight representative call/message intent fixtures.");

[
  "call-saved-contact-intent",
  "sms-user-provided-contact-intent",
  "whatsapp-agriculture-provider-message-intent",
  "telegram-training-provider-message-intent",
  "email-workforce-provider-intent",
  "blocked-emergency-call-attempt",
  "blocked-payment-message-attempt",
  "ambiguous-recipient-requiring-clarification"
].forEach(fixtureId => {
  assert(fixtures.some(fixture => fixture.fixtureId === fixtureId), `L3 fixture set must include ${fixtureId}`);
  assert(fixturesSource.includes(fixtureId), `L3 fixture JSON must include ${fixtureId}`);
});

const results = harness.runCallMessageIntentFixtures();
assert.equal(results.length, fixtures.length, "L3 result count must match fixture count.");
results.forEach(result => {
  assert.equal(result.ok, result.expectedOk, `${result.fixtureId} must match expected validation state.`);
  assert.equal(result.previewAllowed, true, `${result.fixtureId} should be previewable as an inert representation.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(harnessName), `${label} must not load the L3 harness.`);
});

const alias = "qa:nexus-sprint-l3-call-message-intent-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-l2-inert-call-message-intent-contract-qa.js"), "L3 requires L2 QA to remain in qa-suite.");

console.log("[nexus-sprint-l3-call-message-intent-harness-qa] passed");
