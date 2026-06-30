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

const docName = "NEXUS_CAPABILITY_SPRINT_20_TESTING_READINESS_CLOSEOUT.md";
const qaName = "nexus-capability-sprint-20-testing-readiness-closeout-qa.js";

const doc = read("docs", docName);
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(exists("docs", docName), "Sprint 20 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint 20 QA must exist.");

[
  "Sprint 20 closes the Nexus capability sprint lane",
  "documentation and deterministic QA phase only",
  "does not add runtime behavior",
  "provider handoff",
  "calls, messages",
  "payments",
  "location sharing",
  "camera or microphone activation",
  "medical or pharmacy execution",
  "emergency dispatch",
  "backend writes",
  "autonomous real-world execution",
  "Standard User Safety Posture",
  "Activation Boundary",
  "Closeout Decision"
].forEach(term => assert(doc.includes(term), `Sprint 20 closeout doc must include: ${term}`));

for (let sprint = 1; sprint <= 20; sprint += 1) {
  const script = `scripts/nexus-capability-sprint-${sprint}-`;
  assert(
    qaSuite.includes(script) || sprint === 20,
    `qa-suite should include capability Sprint ${sprint} QA pattern.`
  );
}

[
  "nexus-capability-sprint-1-autonomous-task-planner-qa.js",
  "nexus-capability-sprint-2-multi-step-workflow-engine-qa.js",
  "nexus-capability-sprint-3-controlled-action-queue-qa.js",
  "nexus-capability-sprint-4-user-confirmation-gates-qa.js",
  "nexus-capability-sprint-5-session-action-audit-log-qa.js",
  "nexus-capability-sprint-6-provider-adapter-contracts-qa.js",
  "nexus-capability-sprint-7-simulated-provider-execution-mode-qa.js",
  "nexus-capability-sprint-8-internal-navigation-execution-qa.js",
  "nexus-capability-sprint-9-draft-message-generation-qa.js",
  "nexus-capability-sprint-10-call-preparation-workflow-qa.js",
  "nexus-capability-sprint-11-map-navigation-handoff-preparation-qa.js",
  "nexus-capability-sprint-12-marketplace-inquiry-preparation-qa.js",
  "nexus-capability-sprint-13-chronic-care-physician-report-builder-qa.js",
  "nexus-capability-sprint-14-rpm-rtm-manual-data-intake-qa.js",
  "nexus-capability-sprint-15-care-team-report-copy-view-qa.js",
  "nexus-capability-sprint-16-voice-workflow-routing-qa.js",
  "nexus-capability-sprint-17-safe-task-history-qa.js",
  "nexus-capability-sprint-18-safety-review-dashboard-qa.js",
  "nexus-capability-sprint-19-end-to-end-autonomous-workflow-qa.js",
  "nexus-capability-sprint-20-testing-readiness-closeout-qa.js"
].forEach(script => {
  assert(exists("scripts", script), `${script} must exist.`);
  assert(qaSuite.includes(`scripts/${script}`), `${script} must be wired into qa-suite.`);
});

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-20-testing-readiness-closeout"],
  "node scripts/nexus-capability-sprint-20-testing-readiness-closeout-qa.js",
  "package alias should expose Sprint 20 closeout QA."
);

[
  "qa:nexus-capability-sprint-18-safety-review-dashboard",
  "qa:nexus-capability-sprint-19-end-to-end-autonomous-workflow"
].forEach(alias => assert(pkg.scripts[alias], `${alias} should remain available.`));

[
  "nexus-safety-review-dashboard.v1",
  "nexus-safe-task-history.v1",
  "nexus-session-action-audit.v1",
  "nexus-user-confirmation-gate.v1",
  "nexus-controlled-action-queue-item.v1",
  "nexus-autonomous-task-planner.v1"
].forEach(term => assert(app.includes(term), `Runtime source should still expose controlled schema ${term}.`));

[
  "executionAuthority: false",
  "canExecute: false",
  "externalExecutionAllowed: false",
  "providerHandoffAuthorized: false",
  "backendWriteAllowed: false"
].forEach(term => assert(app.includes(term), `Runtime source should continue to include ${term}.`));

[
  "nexus-capability-sprint-20-testing-readiness-closeout",
  "NEXUS_CAPABILITY_SPRINT_20_TESTING_READINESS_CLOSEOUT"
].forEach(term => {
  assert(!app.includes(term), `Sprint 20 closeout must not be loaded by public app runtime: ${term}`);
  assert(!server.includes(term), `Sprint 20 closeout must not be loaded by server runtime: ${term}`);
});

console.log("[nexus-capability-sprint-20-testing-readiness-closeout-qa] passed");
