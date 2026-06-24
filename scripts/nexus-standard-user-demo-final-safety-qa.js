const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const registry = read("public", "nexus-tool-registry.js");
const classifier = read("public", "nexus-intent-classifier.js");
const policy = read("public", "nexus-policy-engine.js");
const planner = read("public", "nexus-planner.js");
const memorySource = read("public", "nexus-session-memory.js");
const doc = read("docs", "NEXUS_STANDARD_USER_DEMO_FINAL_SAFETY_SWEEP.md");

const activeRuntime = `${index}\n${app}\n${server}`;
const nexusRuntime = `${registry}\n${classifier}\n${policy}\n${planner}`;

assert.match(index, /id="guestStartBtn"/, "Standard User start button must remain present");
assert.match(index, /Start as User/, "Standard User start label must remain present");
for (const script of [
  "nexus-tool-registry.js",
  "nexus-intent-classifier.js",
  "nexus-policy-engine.js",
  "nexus-planner.js",
  "app.js"
]) {
  assert(index.includes(script), `Standard User build must load ${script}`);
}
assert(!index.includes("nexus-session-memory.js"), "Standard User page must not load session memory");

for (const forbidden of [
  "NexusSessionMemory",
  "nexus-session-memory",
  "sessionMemory",
  "memory-consent",
  "resetSessionMemory",
  "data-session-memory",
  "session-memory-panel",
  "session-memory-status",
  "session-memory-inspector"
]) {
  assert(!activeRuntime.includes(forbidden), `active Standard User runtime must not include ${forbidden}`);
}

assert(!/app\.(get|post|put|patch|delete)\(\s*["'`]\/api\/(?:nexus-)?(?:session-)?memory/i.test(server), "server must not expose session-memory APIs");
assert(!/fetch\(\s*["'`]\/api\/(?:nexus-)?(?:session-)?memory/i.test(activeRuntime), "runtime must not fetch session-memory APIs");
assert(!/localStorage\.(?:setItem|getItem|removeItem)\(["'`][^"'`]*(?:sessionMemory|session-memory|memoryConsent|memory-consent)/i.test(activeRuntime), "runtime must not persist session memory");
assert(!/sessionStorage\.(?:setItem|getItem|removeItem)\(["'`][^"'`]*(?:sessionMemory|session-memory|memoryConsent|memory-consent)/i.test(activeRuntime), "runtime must not persist session memory");

for (const forbidden of [
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "fetch(",
  "XMLHttpRequest",
  "window.open",
  "location.href",
  ".click()",
  "getUserMedia",
  "geolocation",
  "ACTION_CALL",
  "ACTION_DIAL",
  "openWorkflow",
  "confirmPending",
  "agentPendingAction",
  "outboundCalls.push",
  "transactions.push",
  "messages.push"
]) {
  assert(!memorySource.includes(forbidden), `session memory module must not introduce ${forbidden}`);
}

assert.match(app, /function buildLowRiskAgentActionSuggestion/, "low-risk suggestion builder must remain present");
assert.match(app, /Metadata cannot execute, route, open workflows, stage actions, or confirm actions\./, "low-risk suggestion metadata must remain non-executing");
assert.match(app, /function buildControlledActionMetadataFromSuggestion/, "controlled action metadata builder must remain present");
assert.match(app, /metadataOnly/, "controlled action metadata should remain metadata-only");
assert.match(app, /function buildControlledActionPreviewReadinessFromMetadata/, "preview readiness builder must remain present");
assert.match(app, /executionBoundary:\s*"previewOnlyReadiness"/, "preview readiness must keep preview-only boundary");
assert.match(app, /Preview only - no action has been taken\./, "preview UI must state no action has been taken");
assert.match(app, /function buildControlledActionConfirmationReadinessFromPreview/, "confirmation readiness builder must remain present");
assert.match(app, /executionBoundary:\s*"confirmationReadinessOnly"/, "confirmation readiness must remain readiness-only");
assert.match(app, /function buildControlledActionNavigationReadinessFromConfirmation/, "navigation readiness builder must remain present");
assert.match(app, /allowedAfterConfirmationOnly:\s*true/, "navigation readiness must require explicit review/confirmation click");
assert.match(app, /function performControlledLowRiskNavigation/, "controlled low-risk navigation helper must remain present");

for (const promptTool of [
  "workforce.training",
  "learning.start",
  "workforce.job_pathways",
  "marketplace.agritrade",
  "agriculture.help",
  "workforce.field_support"
]) {
  assert(nexusRuntime.includes(promptTool) || app.includes(promptTool), `${promptTool} should remain represented for low-risk demo prompts`);
}

assert.match(registry, /Browse AgriTrade[\s\S]*without buy, sell, payment, or account execution/, "AgriTrade must remain browse/review only");
assert.match(registry, /Crop issue help[\s\S]*without camera, location, dispatch, or record creation/, "crop guidance must not trigger camera/location/dispatch/record execution");
assert.match(registry, /communications\.call_contact[\s\S]*requiresConfirmation:\s*true[\s\S]*requiresPermission:\s*true/, "contact calls must remain confirmation and permission gated");
assert.match(registry, /health\.camera_preview[\s\S]*requiresConfirmation:\s*true[\s\S]*requiresPermission:\s*true/, "camera preview must remain confirmation and permission gated");
assert.match(registry, /maps\.location_permission[\s\S]*requiresPermission:\s*true/, "location must remain permission gated");
assert.match(registry, /executionStatus:\s*"confirmation_required"/, "registry must preserve confirmation-required status");
assert.match(registry, /executionStatus:\s*"permission_required"/, "registry must preserve permission-required status");

assert.match(policy, /canExecuteAlwaysFalse:\s*true/, "policy engine must keep canExecute always false contract");
assert.match(policy, /canExecute:\s*false/, "policy decisions must remain non-executing");
assert.match(policy, /Existing routers, confirmations, and permissions remain authoritative/, "policy metadata must not become authority");
assert.match(policy, /communications\.call_contact[\s\S]*contactResolved[\s\S]*phoneNumberResolved/, "contact calls must require contact or number resolution");
assert.match(policy, /require_permission/, "policy engine must preserve permission-required status");
assert.match(policy, /require_confirmation/, "policy engine must preserve confirmation-required status");
assert.match(policy, /clarify/, "policy engine must preserve clarification path");

assert.match(planner, /executionMode:\s*"plan_only"/, "planner must remain plan-only");
assert.match(planner, /canExecute:\s*false/, "planner output must remain non-executing");
assert.match(planner, /Existing routers remain authoritative/, "planner metadata must not become authority");
assert.match(planner, /Preserve confirmation gate/, "planner must preserve confirmation gate step");
assert.match(planner, /Planner cannot accept or trigger confirmation/, "planner must not accept or trigger confirmation");

assert.match(app, /agentPendingAction/, "existing pending action path should remain present");
const confirmationGateStart = server.indexOf("const topPendingAction = db.profile.agentPendingAction;");
const confirmationGateEnd = server.indexOf("if (!topPendingAction && conversational && isAffirmativeCommand", confirmationGateStart);
assert(confirmationGateStart >= 0 && confirmationGateEnd > confirmationGateStart, "server confirmation gate should remain extractable");
const confirmationGate = server.slice(confirmationGateStart, confirmationGateEnd);
assert.match(confirmationGate, /topPendingAction\?\.phase4HighRisk && isVagueConfirmationCommand/, "high-risk confirmation gate must reject vague confirmations");
assert.match(confirmationGate, /allowed\.includes\(normalizeSpeechForIntent\(lower\)\)/, "high-risk confirmation gate must require allowed explicit terms");
assert.match(server, /function isVagueConfirmationCommand[\s\S]*ok\|okay/, "okay must remain classified as vague confirmation");
assert.match(server, /allowedConfirmations:\s*\["yes", "confirm", "do it"\]/, "high-risk allowed confirmations must remain limited");
assert.match(app, /confirmed-call-handoff/, "confirmed call handoff source must remain present in frontend handoff logic");

for (const unsafePhrase of [
  "Do it all",
  "Continue automatically",
  "Submit everything",
  "Yes, always"
]) {
  assert(!activeRuntime.includes(unsafePhrase), `unsafe confirmation phrase must not appear: ${unsafePhrase}`);
}

assert.match(doc, /Phase: 11H/, "final safety sweep doc must identify Phase 11H");
assert.match(doc, /Standard User Startup Findings/i, "doc must include startup findings");
assert.match(doc, /Low-Risk Suggestion Safety Findings/i, "doc must include low-risk safety findings");
assert.match(doc, /Planner, Policy, And Tool Registry Safety Findings/i, "doc must include planner/policy/registry findings");
assert.match(doc, /Session Memory Findings/i, "doc must include session-memory findings");
assert.match(doc, /High-Risk Domain Safety Checklist/i, "doc must include high-risk checklist");
assert.match(doc, /Manual Browser Validation Script/i, "doc must include manual browser validation script");
assert.match(doc, /no provider\/call\/payment\/health\/emergency action executes automatically/i, "doc must include manual no-auto-execution check");

console.log("Nexus Standard User final demo safety QA passed");
console.log("- Standard User startup path remains intact");
console.log("- session memory remains absent from live Standard User runtime");
console.log("- low-risk suggestion and controlled action metadata remain non-executing");
console.log("- policy, planner, registry, confirmation, and pending-action boundaries remain guarded");
