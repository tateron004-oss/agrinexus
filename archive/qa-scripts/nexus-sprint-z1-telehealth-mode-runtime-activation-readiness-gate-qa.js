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

const docName = "NEXUS_SPRINT_Z1_TELEHEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint Z1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint Z1 QA script must exist.");

const doc = read("docs", docName);
const y5Doc = read("docs", "NEXUS_SPRINT_Y5_RURAL_HEALTH_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const telehealthContractSource = read("public", "nexus-telehealth-mode-readiness-contract.js");
const telehealthContract = require("../public/nexus-telehealth-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint Z1",
  "20d80fdb6896efe47dbe75b2c0c07df7a7aae1e1",
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
  "Sprint Z2 - Telehealth Mode Feature Flag Contract"
], "Z1 readiness doc");

assertIncludes(doc, [
  "Sprint Y5 - Rural Health Mode Lane Closeout",
  "Phase 78 - Telehealth Mode Readiness Contract",
  "Telehealth Mode readiness is also not medical advice authority, diagnosis authority, prescription authority, refill authority, provider contact authority, clinician contact authority, scheduling authority, telehealth session authority, camera consent, microphone consent, location consent, medical records authority, product owner approval, user consent, provider confirmation, audit approval, or execution authority"
], "Z1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Telehealth Mode runtime change",
  "verified telehealth, clinic, provider, health partner, pharmacy, mobile clinic, transportation-to-care, or regulated source",
  "verified live telehealth connector or provider availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "clinical boundary and non-diagnosis label",
  "user consent boundary",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "provider confirmation before any provider-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no medical advice, diagnosis, prescription, refill, provider contact, clinician contact, telehealth session start, scheduling, transportation, emergency, location, camera, or microphone execution from Telehealth Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "Z1 runtime activation preconditions");

assertIncludes(doc, [
  "active Telehealth Mode runtime",
  "live telehealth connector activation",
  "clinic connector runtime",
  "provider connector runtime",
  "clinician contact runtime",
  "telehealth session start or execution",
  "pharmacy connector runtime",
  "prescription or refill runtime",
  "scheduling runtime",
  "transportation dispatch runtime",
  "emergency dispatch runtime",
  "medical records or FHIR access runtime",
  "source-backed health claims without sources",
  "stale data claims without freshness labels",
  "confidence-free health claims",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "medical advice claims",
  "diagnosis claims",
  "prescription claims",
  "refill claims",
  "telehealth action execution claims",
  "provider contact claims",
  "clinician contact claims",
  "transportation dispatch claims",
  "emergency dispatch claims",
  "location sharing claims",
  "camera activation claims",
  "microphone activation claims",
  "account or profile mutation claims",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Telehealth Mode metadata",
  "confirmation bypass from Telehealth Mode metadata",
  "permission bypass from Telehealth Mode metadata",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "Z1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare telehealth access options",
  "I cannot diagnose, prescribe, refill medication, contact providers, start a live telehealth session, schedule care, dispatch transportation, dispatch emergency services, share location, activate the camera, activate the microphone, or take medical action without verified sources, consent, permission, confirmation, provider availability, and audit controls",
  "Telehealth mode is not connected yet.",
  "This requires a verified provider connector.",
  "This requires consent and approval.",
  "I cannot start a live telehealth session yet.",
  "No action has been taken.",
  "I diagnosed your condition.",
  "I prescribed medication.",
  "I refilled your prescription.",
  "I contacted the provider.",
  "I contacted the clinician.",
  "I scheduled your telehealth visit.",
  "I started your telehealth session.",
  "I dispatched transport.",
  "I dispatched emergency help.",
  "I shared your location.",
  "I opened your camera.",
  "I opened your microphone.",
  "I accessed your medical record.",
  "I completed the action."
], "Z1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_Y5_RURAL_HEALTH_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_TELEHEALTH_MODE_READINESS_CONTRACT_PHASE_78.md"],
  ["public", "nexus-telehealth-mode-readiness-contract.js"],
  ["scripts", "nexus-telehealth-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `Z1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(y5Doc, [
  "Sprint Z1 - Telehealth Mode Runtime Activation Readiness Gate"
], "Y5 closeout next sprint recommendation");

assertIncludes(telehealthContractSource, [
  "TELEHEALTH_MODE_READINESS_CONTRACT",
  "telehealth-mode.readiness.phase_78",
  "TELEHEALTH_MODE_NO_EXECUTION_DEFAULTS",
  "createTelehealthModeReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "healthcare",
  "medical_records",
  "pharmacy",
  "provider_contact",
  "transportation_dispatch",
  "regulated_execution"
], "Phase 78 Telehealth Mode readiness contract");

assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.acceptanceTarget, "live only when connected");
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(telehealthContract.TELEHEALTH_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = telehealthContract.createTelehealthModeReadinessContract({
  actionType: "prepare_telehealth_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_telehealth_mode_summary");
assert.equal(sample.phase, "78");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-telehealth-mode-readiness-contract.js",
  "NexusTelehealthModeReadinessContract",
  "TELEHEALTH_MODE_READINESS_CONTRACT",
  "telehealth-mode.readiness.phase_78",
  "createTelehealthModeReadinessContract",
  "telehealthModeRuntime",
  "liveTelehealthModeRuntime",
  "liveTelehealthConnectorRuntime",
  "executeTelehealthSession(",
  "startTelehealthSession(",
  "contactTelehealthProvider(",
  "contactClinician(",
  "executePrescriptionRefill(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Telehealth Mode lane artifact: ${term}`);
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
  "executeTelehealthSession(",
  "startTelehealthSession(",
  "contactTelehealthProvider(",
  "contactClinician(",
  "executePrescriptionRefill(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!telehealthContractSource.includes(term), `Telehealth Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Z1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-y5-rural-health-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint Y5 QA.");
assert(qaSuite.includes("scripts/nexus-telehealth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 78 QA.");

console.log("[nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate-qa] passed");
