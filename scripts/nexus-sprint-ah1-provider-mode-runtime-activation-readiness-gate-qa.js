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

const docName = "NEXUS_SPRINT_AH1_PROVIDER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AH1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AH1 QA script must exist.");

const doc = read("docs", docName);
const ag5Doc = read("docs", "NEXUS_SPRINT_AG5_FIELD_AGENT_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const providerContractSource = read("public", "nexus-provider-mode-readiness-contract.js");
const providerContract = require("../public/nexus-provider-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AH1",
  "2ae8b1aea11d3a7309c4ba40375f74c035b9b5bf",
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
  "Sprint AH2 - Provider Mode Feature Flag Contract"
], "AH1 readiness doc");

assertIncludes(doc, [
  "Sprint AG5 - Field Agent Mode Lane Closeout",
  "Phase 86 - Provider Mode Readiness Contract",
  "Provider Mode readiness is not provider authority, clinic authority, telehealth authority, pharmacy authority, prescription authority, medical record authority, scheduling authority, communications authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, camera authority, microphone authority, identity authority, product owner approval, user consent, provider confirmation, admin review, human review approval, audit approval, or execution authority"
], "AH1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Provider Mode runtime change",
  "verified provider, clinic, telehealth, pharmacy, care, workforce, transportation, or regulated partner source",
  "verified live provider connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "provider role, admin role, and permission check",
  "admin or clinical review path when needed",
  "explicit user approval for every provider, contact, scheduling, telehealth, pharmacy, prescription, medical record, location, camera, microphone, communications, payment, transportation, emergency, or partner-dependent action",
  "provider, clinic, telehealth partner, pharmacy partner, transportation partner, or operations confirmation before any partner-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no auto provider contact",
  "no appointment scheduling, telehealth session creation, prescription/refill workflow, clinical documentation, medical record/FHIR access, call, message, payment, marketplace transaction, healthcare, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, or account/profile mutation from Provider Mode",
  "no communications execution",
  "no medical advice, diagnosis claim, or prescription instruction from Provider Mode metadata",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AH1 runtime activation preconditions");

assertIncludes(doc, [
  "active Provider Mode runtime",
  "live provider connector activation",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "scheduling connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "provider action runtime",
  "provider contact runtime",
  "appointment scheduling runtime",
  "telehealth session runtime",
  "pharmacy refill runtime",
  "prescription workflow runtime",
  "clinical documentation runtime",
  "medical records or FHIR access runtime",
  "call execution runtime",
  "message execution runtime",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Provider Mode metadata",
  "confirmation bypass from Provider Mode metadata",
  "permission bypass from Provider Mode metadata",
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
], "AH1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare provider access options.",
  "Provider Mode is not connected yet.",
  "This requires a verified provider or partner source.",
  "This requires role permission, consent, and approval.",
  "I cannot contact providers or schedule appointments yet.",
  "I cannot access medical records, request refills, or create telehealth sessions yet.",
  "No action has been taken.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I started the telehealth session.",
  "I requested the refill.",
  "I accessed the medical record.",
  "I shared your location.",
  "I opened your camera.",
  "I sent the message.",
  "I arranged transportation.",
  "I completed the action."
], "AH1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AG5_FIELD_AGENT_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_PROVIDER_MODE_READINESS_CONTRACT_PHASE_86.md"],
  ["public", "nexus-provider-mode-readiness-contract.js"],
  ["scripts", "nexus-provider-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AH1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ag5Doc, [
  "Sprint AH1 - Provider Mode Runtime Activation Readiness Gate"
], "AG5 closeout next sprint recommendation");

assertIncludes(providerContractSource, [
  "PROVIDER_MODE_READINESS_CONTRACT",
  "provider-mode.readiness.phase_86",
  "PROVIDER_MODE_NO_EXECUTION_DEFAULTS",
  "createProviderModeReadinessContract",
  "provider actions gated",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 86 Provider Mode readiness contract");

assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.acceptanceTarget, "provider actions gated");
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(providerContract.PROVIDER_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = providerContract.createProviderModeReadinessContract({
  actionType: "prepare_provider_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_provider_mode_summary");
assert.equal(sample.phase, "86");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "high");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-provider-mode-readiness-contract.js",
  "NexusProviderModeReadinessContract",
  "PROVIDER_MODE_READINESS_CONTRACT",
  "provider-mode.readiness.phase_86",
  "createProviderModeReadinessContract",
  "providerModeRuntime",
  "liveProviderModeRuntime",
  "liveProviderConnectorRuntime",
  "providerActionRuntime",
  "contactProvider(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "openProviderHandoff(",
  "nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Provider Mode lane artifact: ${term}`);
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
  "contactProvider(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord("
]) {
  assert(!providerContractSource.includes(term), `Phase 86 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AH1 QA.");
assert(qaSuite.includes("scripts/nexus-provider-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 86 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag5-field-agent-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AG5 QA.");

console.log("[nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate-qa] passed");
