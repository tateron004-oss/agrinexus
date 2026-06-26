const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  batchDoc: path.join(root, "docs", "NEXUS_PHASE_102_TO_105_AUTONOMOUS_ASSISTANT_FOUNDATION_BATCH.md"),
  sourceRegistry: path.join(root, "public", "nexus-agriculture-source-registry.js"),
  actionContract: path.join(root, "public", "nexus-permission-gated-action-contract.js"),
  plannerPreview: path.join(root, "public", "nexus-planner-preview-contract.js"),
  phase102Qa: path.join(root, "scripts", "nexus-phase-102-agriculture-source-registry-hardening-qa.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-102-to-105-autonomous-foundation-batch-qa] ${message}`);
    process.exit(1);
  }
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const sourceRegistry = require(files.sourceRegistry);
const actionContract = require(files.actionContract);
const plannerPreview = require(files.plannerPreview);

const generalSource = sourceRegistry.normalizeAgricultureSourceRecord(null);
assert(generalSource.status === "general guidance", "Source registry must keep empty source as general guidance.");
assert(generalSource.freshnessLabel === "Unavailable — no live source lookup was performed", "Source registry must not invent freshness.");

const reviewAction = actionContract.buildActionContract({ actionType: actionContract.ACTION_TYPES.INFORMATION, summary: "Review information" });
assert(reviewAction.status === actionContract.ACTION_STATUS.INFORMATION_ONLY, "Information action must stay information-only.");
assert(reviewAction.executionAllowed === false, "Information action must still be non-executing.");

const permissionAction = actionContract.buildActionContract({ actionType: actionContract.ACTION_TYPES.PROVIDER_CONTACT, summary: "Outside-party request" });
assert(permissionAction.status === actionContract.ACTION_STATUS.PERMISSION_REQUIRED, "Outside-party request must require future permission.");
assert(permissionAction.executionAllowed === false, "Future-permission action must not execute.");
assert(permissionAction.providerHandoffAllowed === false, "Future-permission action must not hand off.");

const excludedType = actionContract.ACTION_TYPES.BACKGROUND_TASK;
const blockedAction = actionContract.buildActionContract({ actionType: excludedType, summary: "Excluded background request" });
assert(blockedAction.status === actionContract.ACTION_STATUS.BLOCKED, "Excluded action must be blocked.");
assert(blockedAction.executionAllowed === false, "Blocked action must never execute.");

const safePlan = plannerPreview.buildPlannerPreview({
  title: "Review agriculture support request",
  steps: [
    { title: "Review symptoms", description: "Summarize crop issue", riskLevel: "low" },
    { title: "Show safe checks", description: "List non-executing review steps", riskLevel: "low" }
  ]
});
assert(safePlan.status === plannerPreview.PLAN_STATUS.PREVIEW_ONLY, "Planner must produce preview-only plans.");
assert(plannerPreview.assertPlannerPreviewSafe(safePlan), "Planner preview must satisfy safety assertion.");

const hiddenPlan = plannerPreview.buildPlannerPreview({
  title: "Hidden-step plan",
  steps: [{ title: "Invisible step", hidden: true }]
});
assert(hiddenPlan.status === plannerPreview.PLAN_STATUS.BLOCKED, "Planner must block hidden steps.");
assert(hiddenPlan.executionAllowed === false, "Blocked hidden plan must not execute.");

const combinedSource = [
  fs.readFileSync(files.sourceRegistry, "utf8"),
  fs.readFileSync(files.actionContract, "utf8"),
  fs.readFileSync(files.plannerPreview, "utf8")
].join("\n");

["fetch(", "XMLHttpRequest", "getCurrentPosition", "watchPosition", "getUserMedia", "window.open", "location.href", "sendBeacon"].forEach(forbidden => {
  assert(!combinedSource.includes(forbidden), `Autonomous foundation helpers must not include side effect token: ${forbidden}`);
});

console.log("[nexus-phase-102-to-105-autonomous-foundation-batch-qa] passed");
