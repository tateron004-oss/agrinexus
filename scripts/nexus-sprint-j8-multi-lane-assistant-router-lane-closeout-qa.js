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

const docName = "NEXUS_SPRINT_J8_MULTI_LANE_ASSISTANT_ROUTER_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-j8-multi-lane-assistant-router-lane-closeout-qa.js";
const routerModule = "nexus-multi-lane-assistant-router-readiness-contract.js";
const routerHarness = "nexus-sprint-j7-multi-lane-assistant-router-readiness-harness.js";

assert(exists("docs", docName), "Sprint J8 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint J8 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const routerContract = require("../public/nexus-multi-lane-assistant-router-readiness-contract.js");
const routerHarnessModule = require("./nexus-sprint-j7-multi-lane-assistant-router-readiness-harness.js");

assertIncludes(doc, [
  "Sprint J8",
  "documentation and deterministic QA only",
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
  "J1",
  "J2",
  "J3",
  "J4",
  "J5",
  "J6",
  "J7",
  "J8",
  "public/index.html",
  "public/app.js",
  "server.js",
  "readiness-only posture",
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
  "no runtime route is selected",
  "no real-world action is performed",
  "agriculture-support",
  "health-access-info",
  "communications-preparation",
  "runtime-routing",
  "tool-selection-authority",
  "provider-dispatch",
  "provider-handoff",
  "native-bridge",
  "network-call",
  "runtime router activation readiness"
], "J8 closeout doc");

[
  "docs/NEXUS_SPRINT_J1_USER_PROFILE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "docs/NEXUS_SPRINT_J2_USER_PROFILE_FEATURE_FLAG_CONTRACT.md",
  "docs/NEXUS_SPRINT_J3_USER_PROFILE_FLAG_CONTRACT_HARNESS.md",
  "docs/NEXUS_SPRINT_J4_USER_PROFILE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "docs/NEXUS_SPRINT_J5_USER_PROFILE_LANE_CLOSEOUT.md",
  "docs/NEXUS_SPRINT_J6_MULTI_LANE_ASSISTANT_ROUTER_READINESS_CONTRACT.md",
  "docs/NEXUS_SPRINT_J7_MULTI_LANE_ASSISTANT_ROUTER_READINESS_FIXTURE_HARNESS.md"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `J8 requires prior Sprint J artifact: ${relative}`));

[
  "scripts/nexus-sprint-j1-user-profile-runtime-activation-readiness-gate-qa.js",
  "scripts/nexus-sprint-j2-user-profile-feature-flag-contract-qa.js",
  "scripts/nexus-sprint-j3-user-profile-flag-contract-harness-qa.js",
  "scripts/nexus-sprint-j4-user-profile-runtime-absence-regression-guard-qa.js",
  "scripts/nexus-sprint-j5-user-profile-lane-closeout-qa.js",
  "scripts/nexus-sprint-j6-multi-lane-assistant-router-readiness-contract-qa.js",
  "scripts/nexus-sprint-j7-multi-lane-assistant-router-readiness-harness-qa.js"
].forEach(relative => assert(qaSuite.includes(relative), `J8 requires prior Sprint J QA in qa-suite: ${relative}`));

assert.equal(typeof routerContract.createMultiLaneAssistantRouterReadiness, "function", "J8 requires J6 router readiness contract factory.");
assert.equal(typeof routerHarnessModule.runMultiLaneAssistantRouterReadinessFixtures, "function", "J8 requires J7 router readiness harness runner.");

const results = routerHarnessModule.runMultiLaneAssistantRouterReadinessFixtures();
assert(results.length >= 24, "J8 requires representative router readiness fixtures.");
results.forEach(result => {
  assert.equal(result.routingAllowed, false, `${result.fixtureId} must never allow runtime routing.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[
  "agriculture-support",
  "workforce-support",
  "learning-support",
  "marketplace-review",
  "health-access-info",
  "communications-preparation",
  "provider-handoff-readiness",
  "real-world-action-pilot-readiness",
  "map-location-permission-info",
  "emergency-boundary-info"
].forEach(lane => assert(routerContract.SUPPORTED_ROUTER_LANES.includes(lane), `J8 requires supported lane: ${lane}`));

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(routerModule), `${label} must not load the multi-lane assistant router readiness module.`);
  assert(!source.includes(routerHarness), `${label} must not load the multi-lane assistant router readiness harness.`);
});

const alias = "qa:nexus-sprint-j8-multi-lane-assistant-router-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J8 QA.");

console.log("[nexus-sprint-j8-multi-lane-assistant-router-lane-closeout-qa] passed");
