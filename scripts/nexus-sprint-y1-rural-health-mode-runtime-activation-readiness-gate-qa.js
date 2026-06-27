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

const docName = "NEXUS_SPRINT_Y1_RURAL_HEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint Y1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint Y1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const ruralHealthContractSource = read("public", "nexus-rural-health-mode-readiness-contract.js");
const ruralHealthContract = require("../public/nexus-rural-health-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint Y1",
  "949eb59ab8cd3e1d6c9cfa62dc48e96011f638e6",
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
  "Sprint Y2 - Rural Health Mode Feature Flag Contract"
], "Y1 readiness doc");

assertIncludes(doc, [
  "Sprint X5 - Farmer Mode Lane Closeout",
  "Phase 77 - Rural Health Mode Readiness Contract",
  "Rural Health Mode readiness is also not medical advice authority, diagnosis authority, prescription authority, telehealth authority, pharmacy authority, provider contact authority, transportation dispatch authority, emergency dispatch authority, location consent, camera consent, medical records authority, product owner approval, user consent, audit approval, or execution authority"
], "Y1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Rural Health Mode runtime change",
  "verified health, clinic, telehealth, pharmacy, mobile clinic, transportation, or partner source",
  "source attribution",
  "freshness label",
  "confidence label",
  "clinical boundary and non-diagnosis label",
  "user consent boundary",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no medical advice, diagnosis, prescription, refill, telehealth, pharmacy, provider contact, transportation, emergency, location, camera, or microphone execution from Rural Health Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "Y1 runtime activation preconditions");

assertIncludes(doc, [
  "active Rural Health Mode runtime",
  "live health connector activation",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "prescription or refill runtime",
  "mobile clinic schedule runtime",
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
  "pharmacy action execution claims",
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
  "policy bypass from Rural Health Mode metadata",
  "confirmation bypass from Rural Health Mode metadata",
  "permission bypass from Rural Health Mode metadata",
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
], "Y1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare health-access options",
  "I cannot diagnose, prescribe, refill medication, contact providers, schedule telehealth, dispatch transportation, dispatch emergency services, share location, activate the camera, or take medical action without verified sources, consent, permission, confirmation, and audit controls",
  "I diagnosed your condition.",
  "I prescribed medication.",
  "I refilled your prescription.",
  "I contacted the provider.",
  "I scheduled your telehealth visit.",
  "I dispatched transport.",
  "I dispatched emergency help.",
  "I shared your location.",
  "I opened your camera.",
  "I accessed your medical record.",
  "I completed the action."
], "Y1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_X5_FARMER_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_RURAL_HEALTH_MODE_READINESS_CONTRACT_PHASE_77.md"],
  ["public", "nexus-rural-health-mode-readiness-contract.js"],
  ["scripts", "nexus-rural-health-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `Y1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ruralHealthContractSource, [
  "RURAL_HEALTH_MODE_READINESS_CONTRACT",
  "rural-health-mode.readiness.phase_77",
  "RURAL_HEALTH_MODE_NO_EXECUTION_DEFAULTS",
  "createRuralHealthModeReadinessContract",
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
], "Phase 77 Rural Health Mode readiness contract");

assert.equal(ruralHealthContract.RURAL_HEALTH_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(ruralHealthContract.RURAL_HEALTH_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(ruralHealthContract.RURAL_HEALTH_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(ruralHealthContract.RURAL_HEALTH_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(ruralHealthContract.RURAL_HEALTH_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(ruralHealthContract.RURAL_HEALTH_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(ruralHealthContract.RURAL_HEALTH_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = ruralHealthContract.createRuralHealthModeReadinessContract({
  actionType: "prepare_rural_health_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_rural_health_mode_summary");
assert.equal(sample.phase, "77");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-rural-health-mode-readiness-contract.js",
  "NexusRuralHealthModeReadinessContract",
  "rural-health-mode.readiness.phase_77",
  "RURAL_HEALTH_MODE_READINESS_CONTRACT",
  "ruralHealthModeRuntime",
  "liveRuralHealthModeRuntime",
  "ruralHealthModeFeatureFlag",
  "activateRuralHealthMode(",
  "executeRuralHealthMode(",
  "executeMedicalDiagnosis(",
  "executeTelehealthVisit(",
  "executePharmacyRefill(",
  "contactHealthcareProvider(",
  "dispatchMedicalTransport(",
  "dispatchEmergencyHelp(",
  "sharePatientLocation(",
  "openHealthCamera(",
  "nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Rural Health Mode lane artifact: ${term}`);
}

for (const term of [
  "fetch(",
  "XMLHttpRequest",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "execute(",
  "dispatch(",
  "openProvider(",
  "sendMessage(",
  "makeCall(",
  "processPayment(",
  "requestPermission("
]) {
  assert(!ruralHealthContractSource.includes(term), `Rural Health Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Y1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-x5-farmer-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint X5 QA.");
assert(qaSuite.includes("scripts/nexus-rural-health-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 77 QA.");

console.log("[nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate-qa] passed");
