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

const docName = "NEXUS_SPRINT_G8_PROVIDER_DISPATCH_DRY_RUN_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-g8-provider-dispatch-dry-run-lane-closeout-qa.js";
const dryRunModule = "nexus-provider-dispatch-dry-run-contract.js";
const dryRunHarness = "nexus-sprint-g7-provider-dispatch-dry-run-harness.js";

assert(exists("docs", docName), "Sprint G8 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint G8 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const dryRunContract = require("../public/nexus-provider-dispatch-dry-run-contract.js");
const dryRunHarnessModule = require("./nexus-sprint-g7-provider-dispatch-dry-run-harness.js");

assertIncludes(doc, [
  "Sprint G8",
  "documentation and deterministic QA only",
  "does not add runtime UI",
  "provider dispatch",
  "provider adapters",
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
  "G1",
  "G2",
  "G3",
  "G4",
  "G5",
  "G6",
  "G7",
  "G8",
  "public/index.html",
  "public/app.js",
  "server.js",
  "dry-run only posture",
  "executionAuthority: false",
  "dispatchAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "executionAllowed: false",
  "no provider is contacted",
  "provider-dispatch",
  "network-call",
  "first narrow provider handoff readiness"
], "G8 closeout doc");

[
  "docs/NEXUS_SPRINT_G1_APPROVAL_AUDIT_PERSISTENCE_READINESS_GATE.md",
  "docs/NEXUS_SPRINT_G2_APPROVAL_AUDIT_PERSISTENCE_CONTRACT.md",
  "docs/NEXUS_SPRINT_G3_APPROVAL_AUDIT_PERSISTENCE_FIXTURE_HARNESS.md",
  "docs/NEXUS_SPRINT_G4_APPROVAL_AUDIT_PERSISTENCE_NO_WRITE_REGRESSION_GUARD.md",
  "docs/NEXUS_SPRINT_G5_APPROVAL_AUDIT_PERSISTENCE_LANE_CLOSEOUT.md",
  "docs/NEXUS_SPRINT_G6_PROVIDER_DISPATCH_DRY_RUN_CONTRACT.md",
  "docs/NEXUS_SPRINT_G7_PROVIDER_DISPATCH_DRY_RUN_FIXTURE_HARNESS.md"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `G8 requires prior Sprint G artifact: ${relative}`));

[
  "scripts/nexus-sprint-g1-approval-audit-persistence-readiness-gate-qa.js",
  "scripts/nexus-sprint-g2-approval-audit-persistence-contract-qa.js",
  "scripts/nexus-sprint-g3-approval-audit-persistence-fixture-harness-qa.js",
  "scripts/nexus-sprint-g4-approval-audit-persistence-no-write-regression-guard-qa.js",
  "scripts/nexus-sprint-g5-approval-audit-persistence-lane-closeout-qa.js",
  "scripts/nexus-sprint-g6-provider-dispatch-dry-run-contract-qa.js",
  "scripts/nexus-sprint-g7-provider-dispatch-dry-run-harness-qa.js"
].forEach(relative => assert(qaSuite.includes(relative), `G8 requires prior Sprint G QA in qa-suite: ${relative}`));

assert.equal(typeof dryRunContract.createProviderDispatchDryRun, "function", "G8 requires G6 dry-run contract factory.");
assert.equal(typeof dryRunHarnessModule.runProviderDispatchDryRunFixtures, "function", "G8 requires G7 dry-run harness runner.");

const results = dryRunHarnessModule.runProviderDispatchDryRunFixtures();
assert(results.length >= 12, "G8 requires representative dry-run fixtures.");
results.forEach(result => {
  assert.equal(result.dispatchAllowed, false, `${result.fixtureId} must never allow dispatch.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(dryRunModule), `${label} must not load the provider dispatch dry-run module.`);
  assert(!source.includes(dryRunHarness), `${label} must not load the provider dispatch dry-run harness.`);
});

const alias = "qa:nexus-sprint-g8-provider-dispatch-dry-run-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G8 QA.");

console.log("[nexus-sprint-g8-provider-dispatch-dry-run-lane-closeout-qa] passed");
