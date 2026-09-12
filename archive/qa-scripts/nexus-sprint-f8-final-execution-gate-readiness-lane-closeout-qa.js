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

const docName = "NEXUS_SPRINT_F8_FINAL_EXECUTION_GATE_READINESS_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-f8-final-execution-gate-readiness-lane-closeout-qa.js";
const finalGateModule = "nexus-final-execution-gate-contract.js";
const finalGateHarness = "nexus-sprint-f7-final-execution-gate-harness.js";

assert(exists("docs", docName), "Sprint F8 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint F8 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const finalGate = require("../public/nexus-final-execution-gate-contract.js");
const finalGateHarnessModule = require("./nexus-sprint-f7-final-execution-gate-harness.js");

assertIncludes(doc, [
  "Sprint F8",
  "documentation and deterministic QA only",
  "does not add runtime UI",
  "provider handoff",
  "calls",
  "messages",
  "payments",
  "location sharing",
  "camera access",
  "medical/pharmacy behavior",
  "emergency routing",
  "marketplace transactions",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "public/index.html",
  "public/app.js",
  "server.js",
  "user approval intent is not execution authority",
  "finalGateRequired",
  "finalGateSatisfied",
  "executionAuthority",
  "incomplete gate objects fail closed",
  "execution is never allowed",
  "provider",
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "medical",
  "pharmacy",
  "emergency",
  "marketplace-transaction",
  "backend-write",
  "pending-action",
  "provider dispatch simulation or dry-run behavior",
  "real-world execution remains blocked"
], "F8 closeout doc");

[
  "docs/NEXUS_SPRINT_F1_APPROVAL_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "docs/NEXUS_SPRINT_F2_APPROVAL_CENTER_FEATURE_FLAG_CONTRACT.md",
  "docs/NEXUS_SPRINT_F3_APPROVAL_CENTER_FLAG_CONTRACT_HARNESS.md",
  "docs/NEXUS_SPRINT_F4_APPROVAL_CENTER_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "docs/NEXUS_SPRINT_F5_APPROVAL_CENTER_LANE_CLOSEOUT.md",
  "docs/NEXUS_SPRINT_F6_FINAL_EXECUTION_GATE_CONTRACT.md",
  "docs/NEXUS_SPRINT_F7_FINAL_EXECUTION_GATE_FIXTURE_HARNESS.md"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `F8 requires prior Sprint F artifact: ${relative}`));

[
  "scripts/nexus-sprint-f1-approval-center-runtime-activation-readiness-gate-qa.js",
  "scripts/nexus-sprint-f2-approval-center-feature-flag-contract-qa.js",
  "scripts/nexus-sprint-f3-approval-center-flag-contract-harness-qa.js",
  "scripts/nexus-sprint-f4-approval-center-runtime-absence-regression-guard-qa.js",
  "scripts/nexus-sprint-f5-approval-center-lane-closeout-qa.js",
  "scripts/nexus-sprint-f6-final-execution-gate-contract-qa.js",
  "scripts/nexus-sprint-f7-final-execution-gate-harness-qa.js"
].forEach(relative => assert(qaSuite.includes(relative), `F8 requires prior Sprint F QA in qa-suite: ${relative}`));

assert.equal(typeof finalGate.createFinalExecutionGate, "function", "F8 requires F6 final execution gate factory.");
assert.equal(typeof finalGateHarnessModule.runFinalExecutionGateFixtures, "function", "F8 requires F7 fixture harness runner.");

const fixtureResults = finalGateHarnessModule.runFinalExecutionGateFixtures();
assert(fixtureResults.length >= 8, "F8 requires a representative F7 fixture set.");
fixtureResults.forEach(result => {
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must never allow execution.`);
});

[
  index,
  app,
  server
].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(finalGateModule), `${label} must not load the final execution gate module.`);
  assert(!source.includes(finalGateHarness), `${label} must not load the final execution gate harness.`);
});

const alias = "qa:nexus-sprint-f8-final-execution-gate-readiness-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint F8 QA.");

console.log("[nexus-sprint-f8-final-execution-gate-readiness-lane-closeout-qa] passed");
