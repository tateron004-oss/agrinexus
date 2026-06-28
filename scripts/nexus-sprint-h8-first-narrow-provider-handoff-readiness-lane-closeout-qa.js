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

const docName = "NEXUS_SPRINT_H8_FIRST_NARROW_PROVIDER_HANDOFF_READINESS_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-h8-first-narrow-provider-handoff-readiness-lane-closeout-qa.js";
const handoffModule = "nexus-first-narrow-provider-handoff-readiness-contract.js";
const handoffHarness = "nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness.js";

assert(exists("docs", docName), "Sprint H8 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint H8 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const handoffContract = require("../public/nexus-first-narrow-provider-handoff-readiness-contract.js");
const handoffHarnessModule = require("./nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness.js");

assertIncludes(doc, [
  "Sprint H8",
  "documentation and deterministic QA only",
  "does not add runtime UI",
  "provider handoff",
  "provider adapters",
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
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "public/index.html",
  "public/app.js",
  "server.js",
  "readiness-only posture",
  "handoffReadinessOnly: true",
  "executionAuthority: false",
  "handoffAllowed: false",
  "externalNavigationAllowed: false",
  "providerApiAllowed: false",
  "nativeBridgeAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "executionAllowed: false",
  "no provider is contacted",
  "provider-handoff",
  "external-navigation",
  "provider-api",
  "native-bridge",
  "network-call",
  "first real-world action pilot readiness"
], "H8 closeout doc");

[
  "docs/NEXUS_SPRINT_H1_CONSENT_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "docs/NEXUS_SPRINT_H2_CONSENT_CENTER_FEATURE_FLAG_CONTRACT.md",
  "docs/NEXUS_SPRINT_H3_CONSENT_CENTER_FLAG_CONTRACT_HARNESS.md",
  "docs/NEXUS_SPRINT_H4_CONSENT_CENTER_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "docs/NEXUS_SPRINT_H5_CONSENT_CENTER_LANE_CLOSEOUT.md",
  "docs/NEXUS_SPRINT_H6_FIRST_NARROW_PROVIDER_HANDOFF_READINESS_CONTRACT.md",
  "docs/NEXUS_SPRINT_H7_FIRST_NARROW_PROVIDER_HANDOFF_READINESS_FIXTURE_HARNESS.md"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `H8 requires prior Sprint H artifact: ${relative}`));

[
  "scripts/nexus-sprint-h1-consent-center-runtime-activation-readiness-gate-qa.js",
  "scripts/nexus-sprint-h2-consent-center-feature-flag-contract-qa.js",
  "scripts/nexus-sprint-h3-consent-center-flag-contract-harness-qa.js",
  "scripts/nexus-sprint-h4-consent-center-runtime-absence-regression-guard-qa.js",
  "scripts/nexus-sprint-h5-consent-center-lane-closeout-qa.js",
  "scripts/nexus-sprint-h6-first-narrow-provider-handoff-readiness-contract-qa.js",
  "scripts/nexus-sprint-h7-first-narrow-provider-handoff-readiness-harness-qa.js"
].forEach(relative => assert(qaSuite.includes(relative), `H8 requires prior Sprint H QA in qa-suite: ${relative}`));

assert.equal(typeof handoffContract.createProviderHandoffReadiness, "function", "H8 requires H6 handoff readiness contract factory.");
assert.equal(typeof handoffHarnessModule.runFirstNarrowProviderHandoffReadinessFixtures, "function", "H8 requires H7 handoff readiness harness runner.");

const results = handoffHarnessModule.runFirstNarrowProviderHandoffReadinessFixtures();
assert(results.length >= 16, "H8 requires representative handoff readiness fixtures.");
results.forEach(result => {
  assert.equal(result.handoffAllowed, false, `${result.fixtureId} must never allow handoff.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(handoffModule), `${label} must not load the first narrow provider handoff readiness module.`);
  assert(!source.includes(handoffHarness), `${label} must not load the first narrow provider handoff readiness harness.`);
});

const alias = "qa:nexus-sprint-h8-first-narrow-provider-handoff-readiness-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H8 QA.");

console.log("[nexus-sprint-h8-first-narrow-provider-handoff-readiness-lane-closeout-qa] passed");
