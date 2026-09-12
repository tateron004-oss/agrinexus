const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `Missing source marker: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `Missing end marker after ${start}`);
  return source.slice(startIndex, endIndex);
}

const app = read("public", "app.js");
const styles = read("public", "styles.css");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const plannerSource = sourceBetween(app, "function nexusAutonomousTaskPlanCategory", "function a100SafeAutonomyCardHtml");
const controlledPreviewSource = sourceBetween(app, "function renderControlledActionPreview", "function isControlledStagedActionPreviewFlagEnabled");
const readinessSource = sourceBetween(app, "function buildControlledActionPreviewReadinessFromMetadata", "function buildControlledActionConfirmationReadinessFromPreview");
const cardSource = sourceBetween(app, "function a100SafeAutonomyCardHtml", "function renderA100SafeAutonomyCard");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");
const voiceBridgeSource = sourceBetween(app, "function installNexusVoiceDemoShellBridge", "installNexusVoiceDemoShellBridge();");

[
  "function nexusAutonomousTaskPlanCategory",
  "function buildNexusAutonomousTaskPlan",
  "const explicitFallback",
  "goal",
  "category",
  "userIntent",
  "steps",
  "currentStep",
  "requiredInformation",
  "missingInformation",
  "allowedSafeActions",
  "blockedHighRiskActions",
  "riskLevel",
  "confirmationRequirement",
  "providerRequirement",
  "nextSuggestedAction",
  "executionAuthority: false",
  "canExecute: false",
  "noExecutionAuthorized: true",
  "nexus-autonomous-task-planner.v1"
].forEach(term => assert(plannerSource.includes(term), `Autonomous task planner must include ${term}`));

[
  "agriculture-help",
  "training-learning",
  "workforce-jobs",
  "marketplace-browsing",
  "route-planning",
  "provider-status",
  "chronic-care-support",
  "care-team-reporting",
  "message-call-preparation"
].forEach(category => assert(plannerSource.includes(category), `Planner must cover category ${category}`));

[
  "No provider handoff.",
  "No calls, messages, WhatsApp, Telegram, SMS, or email sending.",
  "No payments, purchases, marketplace transactions, or account changes.",
  "No location sharing, camera, microphone, medical, pharmacy, emergency, or backend-write execution.",
  "Approval intent may be discussed, but final execution confirmation is not available from this planner.",
  "Provider availability may be reviewed, but provider handoff remains disabled."
].forEach(boundary => assert(plannerSource.includes(boundary), `Planner must protect boundary: ${boundary}`));

[
  "a100-autonomous-task-plan",
  "data-nexus-task-plan-source",
  "data-nexus-task-plan-execution-authority",
  "Task plan",
  "Missing information",
  "Allowed safe actions",
  "Blocked high-risk actions",
  "Confirmation",
  "Provider"
].forEach(term => assert(cardSource.includes(term), `Visible card must render task-plan field ${term}`));

[
  "nexus-controlled-action-task-plan",
  "data-nexus-task-plan-source",
  "data-nexus-task-plan-execution-authority",
  "Task plan:",
  "Missing:",
  "Allowed:",
  "Blocked:",
  "Next:"
].forEach(term => assert(controlledPreviewSource.includes(term), `Controlled preview must render task-plan field ${term}`));

[
  "taskPlan: null",
  "taskPlanCategoryMap",
  "openTrainingResources: \"training-learning\"",
  "showFarmJobs: \"workforce-jobs\"",
  "browseMarketplace: \"marketplace-browsing\"",
  "explainAgricultureHelp: \"agriculture-help\"",
  "const taskPlan = buildNexusAutonomousTaskPlan",
  "taskPlan,"
].forEach(term => assert(readinessSource.includes(term), `Controlled preview readiness must attach task plan: ${term}`));

[
  "taskPlan: buildNexusAutonomousTaskPlan(command, { category: \"general\" })",
  "taskPlan: buildNexusAutonomousTaskPlan(command, { category })",
  "taskPlan: buildNexusAutonomousTaskPlan(command, { category: preparationCategory })"
].forEach(term => assert(intentSource.includes(term), `A100 intents must attach task plans: ${term}`));

[
  "showResponse(message = \"\", options = {})",
  "options.blocked === true",
  "clearControlledActionPreview(\"voice-demo-shell-blocked-response\")"
].forEach(term => assert(voiceBridgeSource.includes(term), `Voice bridge must clear stale previews for blocked prompts: ${term}`));

[
  "body.user-mode .a100-autonomous-task-plan",
  "body.user-mode .a100-autonomous-task-plan div",
  "body.user-mode .a100-autonomous-task-plan strong",
  "body.user-mode .a100-autonomous-task-plan span",
  ".nexus-controlled-action-task-plan",
  ".nexus-controlled-action-task-plan span",
  ".nexus-controlled-action-task-plan strong",
  "pointer-events: none"
].forEach(term => assert(styles.includes(term), `Task plan card styling must include ${term}`));

[
  "getUserMedia",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "fetch(",
  "XMLHttpRequest",
  "window.open",
  "location.href",
  "dispatchProviderWebhook",
  "agentPendingAction",
  "localStorage.setItem",
  "sessionStorage.setItem"
].forEach(term => assert(!plannerSource.includes(term), `Planner source must not introduce unsafe behavior: ${term}`));

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-1-autonomous-task-planner"],
  "node scripts/nexus-capability-sprint-1-autonomous-task-planner-qa.js",
  "package.json must expose Sprint 1 QA alias."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-1-autonomous-task-planner-qa.js"),
  "qa-suite.js must include Sprint 1 QA."
);

console.log("[nexus-capability-sprint-1-autonomous-task-planner-qa] passed");
