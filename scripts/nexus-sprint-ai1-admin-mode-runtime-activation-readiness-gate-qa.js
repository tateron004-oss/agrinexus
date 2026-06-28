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
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_AI1_ADMIN_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AI1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AI1 QA script must exist.");

const doc = read("docs", docName);
const ah5Doc = read("docs", "NEXUS_SPRINT_AH5_PROVIDER_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const adminContractSource = read("public", "nexus-admin-mode-readiness-contract.js");
const adminContract = require("../public/nexus-admin-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AI1",
  "95425690a4b6c417595b311e3b15a2bf336b4661",
  "documentation and deterministic QA only",
  "Relationship To Prior Lanes",
  "Runtime Activation Preconditions",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Standard User Boundary",
  "Required Contract Invariants",
  "Restricted Domains",
  "Safe Copy Boundary",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AI2 - Admin Mode Feature Flag Contract"
], "AI1 readiness doc");

assertIncludes(doc, [
  "Sprint AH5 - Provider Mode Lane Closeout",
  "Phase 87 - Admin Mode Readiness Contract",
  "Admin Mode readiness is not admin authority, review queue authority, role authority, audit authority, provider authority, clinic authority, telehealth authority, pharmacy authority, prescription authority, medical record authority, scheduling authority, communications authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, camera authority, microphone authority, identity authority, product owner approval, user consent, provider confirmation, admin review completion, human review approval, audit approval, or execution authority"
], "AI1 relationship section");

assertIncludes(doc, [
  "product owner approval for an Admin Mode runtime change",
  "verified admin, operations, provider, clinic, telehealth, pharmacy, care, workforce, transportation, marketplace, or regulated partner source",
  "verified live admin source connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "admin role, provider role, reviewer role, and permission check",
  "separation of duties for admin review and execution when needed",
  "explicit user approval for every admin, provider, contact, scheduling, telehealth, pharmacy, prescription, medical record, location, camera, microphone, communications, payment, transportation, emergency, marketplace, role, account, or partner-dependent action",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no auto admin review completion",
  "no auto provider contact",
  "no communications execution",
  "no medical advice, diagnosis claim, or prescription instruction from Admin Mode metadata",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AI1 runtime activation preconditions");

assertIncludes(doc, [
  "active Admin Mode runtime",
  "live admin connector activation",
  "review queue runtime",
  "admin console runtime",
  "role management runtime",
  "audit management runtime",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "scheduling connector runtime",
  "admin action runtime",
  "provider action runtime",
  "provider contact runtime",
  "appointment scheduling runtime",
  "telehealth session runtime",
  "medical records or FHIR access runtime",
  "call execution runtime",
  "message execution runtime",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Admin Mode metadata",
  "confirmation bypass from Admin Mode metadata",
  "permission bypass from Admin Mode metadata",
  "role bypass from Admin Mode metadata",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "clinic handoff",
  "pharmacy handoff",
  "telehealth handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AI1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare admin review options.",
  "Admin Mode is not connected yet.",
  "This requires a verified source or partner source.",
  "This requires role permission, consent, and approval.",
  "I cannot complete reviews, contact providers, or schedule appointments yet.",
  "I cannot access medical records, request refills, or create telehealth sessions yet.",
  "No action has been taken.",
  "I approved the review.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I started the telehealth session.",
  "I requested the refill.",
  "I accessed the medical record.",
  "I changed the role.",
  "I shared your location.",
  "I opened your camera.",
  "I sent the message.",
  "I arranged transportation.",
  "I completed the action."
], "AI1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AH5_PROVIDER_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_ADMIN_MODE_READINESS_CONTRACT_PHASE_87.md"],
  ["public", "nexus-admin-mode-readiness-contract.js"],
  ["scripts", "nexus-admin-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AI1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ah5Doc, [
  "Sprint AI1 - Admin Mode Runtime Activation Readiness Gate"
], "AH5 closeout next sprint recommendation");

assertIncludes(adminContractSource, [
  "ADMIN_MODE_READINESS_CONTRACT",
  "admin-mode.readiness.phase_87",
  "ADMIN_MODE_NO_EXECUTION_DEFAULTS",
  "createAdminModeReadinessContract",
  "review queues work",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 87 Admin Mode readiness contract");

assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.acceptanceTarget, "review queues work");
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(adminContract.ADMIN_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = adminContract.createAdminModeReadinessContract({
  actionType: "prepare_admin_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_admin_mode_summary");
assert.equal(sample.phase, "87");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "high");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-admin-mode-readiness-contract.js",
  "NexusAdminModeReadinessContract",
  "ADMIN_MODE_READINESS_CONTRACT",
  "admin-mode.readiness.phase_87",
  "createAdminModeReadinessContract",
  "adminModeRuntime",
  "liveAdminModeRuntime",
  "reviewQueueRuntime",
  "adminConsoleRuntime",
  "roleManagementRuntime",
  "auditManagementRuntime",
  "adminActionRuntime",
  "completeAdminReview(",
  "approveAdminReview(",
  "changeUserRole(",
  "writeAdminAudit(",
  "openAdminHandoff(",
  "nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Admin Mode lane artifact: ${term}`);
}

for (const term of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "open(",
  "sendBeacon",
  "setItem",
  "postMessage",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "completeAdminReview(",
  "approveAdminReview(",
  "changeUserRole(",
  "writeAdminAudit("
]) {
  assert(!adminContractSource.includes(term), `Phase 87 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AI1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah5-provider-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AH5 QA.");
assert(qaSuite.includes("scripts/nexus-admin-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 87 QA.");

console.log("[nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate-qa] passed");
