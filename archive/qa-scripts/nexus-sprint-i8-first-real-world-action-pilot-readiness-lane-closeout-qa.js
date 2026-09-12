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

const docName = "NEXUS_SPRINT_I8_FIRST_REAL_WORLD_ACTION_PILOT_READINESS_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-i8-first-real-world-action-pilot-readiness-lane-closeout-qa.js";
const pilotModule = "nexus-first-real-world-action-pilot-readiness-contract.js";
const pilotHarness = "nexus-sprint-i7-first-real-world-action-pilot-readiness-harness.js";

assert(exists("docs", docName), "Sprint I8 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint I8 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pilotContract = require("../public/nexus-first-real-world-action-pilot-readiness-contract.js");
const pilotHarnessModule = require("./nexus-sprint-i7-first-real-world-action-pilot-readiness-harness.js");

assertIncludes(doc, [
  "Sprint I8",
  "documentation and deterministic QA only",
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
  "I1",
  "I2",
  "I3",
  "I4",
  "I5",
  "I6",
  "I7",
  "I8",
  "public/index.html",
  "public/app.js",
  "server.js",
  "readiness-only posture",
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
  "no real-world action is performed",
  "real-world-action",
  "provider-dispatch",
  "provider-handoff",
  "native-bridge",
  "network-call",
  "multi-lane assistant router readiness"
], "I8 closeout doc");

[
  "docs/NEXUS_SPRINT_I1_IDENTITY_FOUNDATION_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "docs/NEXUS_SPRINT_I2_IDENTITY_FOUNDATION_FEATURE_FLAG_CONTRACT.md",
  "docs/NEXUS_SPRINT_I3_IDENTITY_FOUNDATION_FLAG_CONTRACT_HARNESS.md",
  "docs/NEXUS_SPRINT_I4_IDENTITY_FOUNDATION_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "docs/NEXUS_SPRINT_I5_IDENTITY_FOUNDATION_LANE_CLOSEOUT.md",
  "docs/NEXUS_SPRINT_I6_FIRST_REAL_WORLD_ACTION_PILOT_READINESS_CONTRACT.md",
  "docs/NEXUS_SPRINT_I7_FIRST_REAL_WORLD_ACTION_PILOT_READINESS_FIXTURE_HARNESS.md"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `I8 requires prior Sprint I artifact: ${relative}`));

[
  "scripts/nexus-sprint-i1-identity-foundation-runtime-activation-readiness-gate-qa.js",
  "scripts/nexus-sprint-i2-identity-foundation-feature-flag-contract-qa.js",
  "scripts/nexus-sprint-i3-identity-foundation-flag-contract-harness-qa.js",
  "scripts/nexus-sprint-i4-identity-foundation-runtime-absence-regression-guard-qa.js",
  "scripts/nexus-sprint-i5-identity-foundation-lane-closeout-qa.js",
  "scripts/nexus-sprint-i6-first-real-world-action-pilot-readiness-contract-qa.js",
  "scripts/nexus-sprint-i7-first-real-world-action-pilot-readiness-harness-qa.js"
].forEach(relative => assert(qaSuite.includes(relative), `I8 requires prior Sprint I QA in qa-suite: ${relative}`));

assert.equal(typeof pilotContract.createFirstRealWorldActionPilotReadiness, "function", "I8 requires I6 pilot readiness contract factory.");
assert.equal(typeof pilotHarnessModule.runFirstRealWorldActionPilotReadinessFixtures, "function", "I8 requires I7 pilot readiness harness runner.");

const results = pilotHarnessModule.runFirstRealWorldActionPilotReadinessFixtures();
assert(results.length >= 20, "I8 requires representative pilot readiness fixtures.");
results.forEach(result => {
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
  assert.equal(result.pilotAllowed, false, `${result.fixtureId} must never allow pilot execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(pilotModule), `${label} must not load the first real-world action pilot readiness module.`);
  assert(!source.includes(pilotHarness), `${label} must not load the first real-world action pilot readiness harness.`);
});

const alias = "qa:nexus-sprint-i8-first-real-world-action-pilot-readiness-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I8 QA.");

console.log("[nexus-sprint-i8-first-real-world-action-pilot-readiness-lane-closeout-qa] passed");
