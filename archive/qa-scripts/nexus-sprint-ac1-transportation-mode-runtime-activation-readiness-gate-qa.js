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

const docName = "NEXUS_SPRINT_AC1_TRANSPORTATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AC1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AC1 QA script must exist.");

const doc = read("docs", docName);
const ab5Doc = read("docs", "NEXUS_SPRINT_AB5_MOBILE_CLINIC_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const transportationContractSource = read("public", "nexus-transportation-mode-readiness-contract.js");
const transportationContract = require("../public/nexus-transportation-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AC1",
  "6d52f62f44b4c2c844b5023f779dc61185873ceb",
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
  "Sprint AC2 - Transportation Mode Feature Flag Contract"
], "AC1 readiness doc");

assertIncludes(doc, [
  "Sprint AB5 - Mobile Clinic Mode Lane Closeout",
  "Phase 81 - Transportation Mode Readiness Contract",
  "Transportation Mode readiness is not dispatch authority, booking authority, provider authority, driver authority, clinic authority, telehealth authority, emergency authority, location consent, product owner approval, user consent, provider confirmation, driver confirmation, audit approval, payment authority, identity authority, or execution authority"
], "AC1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Transportation Mode runtime change",
  "verified transportation schedule, provider, driver, routing, location, clinic, telehealth, or regulated source",
  "verified live transportation connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "identity verification boundary",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "provider, driver, or transportation partner confirmation before any provider-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no transportation booking, dispatch, provider contact, driver contact, emergency dispatch, location sharing, camera, microphone, payment, medical, pharmacy, prescription, refill, or marketplace execution from Transportation Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AC1 runtime activation preconditions");

assertIncludes(doc, [
  "active Transportation Mode runtime",
  "live transportation connector activation",
  "transportation provider connector runtime",
  "driver connector runtime",
  "dispatch connector runtime",
  "routing connector runtime",
  "location connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "payment connector runtime",
  "appointment scheduling runtime",
  "transportation booking runtime",
  "transportation dispatch runtime",
  "emergency dispatch runtime",
  "medical records or FHIR access runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "transportation action execution claims",
  "provider contact claims",
  "driver contact claims",
  "location sharing claims",
  "payment execution claims",
  "unsupported live data claims",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Transportation Mode metadata",
  "confirmation bypass from Transportation Mode metadata",
  "permission bypass from Transportation Mode metadata",
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
], "AC1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare transportation access options.",
  "Transportation Mode is not connected yet.",
  "This requires a verified transportation provider or schedule source.",
  "This requires consent and approval.",
  "I cannot book transportation yet.",
  "I cannot dispatch transportation or emergency help.",
  "No action has been taken.",
  "I booked your ride.",
  "I dispatched transportation.",
  "I contacted the driver.",
  "I contacted the provider.",
  "I dispatched emergency help.",
  "I shared your location.",
  "I opened your camera.",
  "I opened your microphone.",
  "I accessed your medical record.",
  "I processed your payment.",
  "I completed the action."
], "AC1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AB5_MOBILE_CLINIC_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_TRANSPORTATION_MODE_READINESS_CONTRACT_PHASE_81.md"],
  ["public", "nexus-transportation-mode-readiness-contract.js"],
  ["scripts", "nexus-transportation-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AC1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ab5Doc, [
  "Sprint AC1 - Transportation Mode Runtime Activation Readiness Gate"
], "AB5 closeout next sprint recommendation");

assertIncludes(transportationContractSource, [
  "TRANSPORTATION_MODE_READINESS_CONTRACT",
  "transportation-mode.readiness.phase_81",
  "TRANSPORTATION_MODE_NO_EXECUTION_DEFAULTS",
  "createTransportationModeReadinessContract",
  "executionAllowed",
  "liveConnectorEnabled",
  "providerExecutionEnabled",
  "regulatedActionEnabled",
  "healthcare",
  "medical_records",
  "pharmacy",
  "provider_contact",
  "transportation_dispatch",
  "regulated_execution"
], "Phase 81 Transportation Mode readiness contract");

assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.acceptanceTarget, "booking gated");
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(transportationContract.TRANSPORTATION_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = transportationContract.createTransportationModeReadinessContract({
  actionType: "prepare_transportation_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_transportation_mode_summary");
assert.equal(sample.phase, "81");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-transportation-mode-readiness-contract.js",
  "NexusTransportationModeReadinessContract",
  "TRANSPORTATION_MODE_READINESS_CONTRACT",
  "transportation-mode.readiness.phase_81",
  "createTransportationModeReadinessContract",
  "transportationModeRuntime",
  "liveTransportationModeRuntime",
  "liveTransportationConnectorRuntime",
  "executeTransportationBooking(",
  "bookTransportation(",
  "dispatchTransportation(",
  "contactTransportationProvider(",
  "contactDriver(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Transportation Mode lane artifact: ${term}`);
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
  "executeTransportationBooking(",
  "bookTransportation(",
  "contactTransportationProvider(",
  "contactDriver(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!transportationContractSource.includes(term), `Transportation Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AC1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ab5-mobile-clinic-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AB5 QA.");
assert(qaSuite.includes("scripts/nexus-transportation-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 81 QA.");

console.log("[nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate-qa] passed");
