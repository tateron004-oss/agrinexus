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

const docName = "NEXUS_SPRINT_AA1_PHARMACY_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AA1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AA1 QA script must exist.");

const doc = read("docs", docName);
const z5Doc = read("docs", "NEXUS_SPRINT_Z5_TELEHEALTH_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const pharmacyContractSource = read("public", "nexus-pharmacy-mode-readiness-contract.js");
const pharmacyContract = require("../public/nexus-pharmacy-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AA1",
  "d4e41197833e7a031e81210ef19f25aec3734973",
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
  "Sprint AA2 - Pharmacy Mode Feature Flag Contract"
], "AA1 readiness doc");

assertIncludes(doc, [
  "Sprint Z5 - Telehealth Mode Lane Closeout",
  "Phase 79 - Pharmacy Mode Readiness Contract",
  "Pharmacy Mode readiness is also not medication advice authority, prescription authority, refill authority, pharmacy provider authority, provider contact authority, clinician authority, scheduling authority, medical records authority, product owner approval, user consent, provider confirmation, audit approval, payment authority, insurance authority, identity authority, or execution authority"
], "AA1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Pharmacy Mode runtime change",
  "verified pharmacy, prescription, refill, medication safety, provider, payer, clinic, telehealth, or regulated source",
  "verified live pharmacy connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "medication safety boundary and non-prescription label",
  "user consent boundary",
  "identity verification boundary",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "provider or pharmacist confirmation before any provider-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no medication advice, dosage advice, prescription, refill, pharmacy provider contact, clinician contact, appointment scheduling, payment, insurance, transportation, emergency, location, camera, or microphone execution from Pharmacy Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AA1 runtime activation preconditions");

assertIncludes(doc, [
  "active Pharmacy Mode runtime",
  "live pharmacy connector activation",
  "pharmacy provider connector runtime",
  "prescription connector runtime",
  "refill connector runtime",
  "medication safety connector runtime",
  "payment or insurance connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "provider connector runtime",
  "clinician contact runtime",
  "pharmacy provider contact runtime",
  "prescription or refill execution",
  "medication advice",
  "dosage advice",
  "prescription instructions",
  "refill instructions",
  "pharmacy action execution claims",
  "provider contact claims",
  "clinician contact claims",
  "pharmacy provider contact claims",
  "appointment scheduling runtime",
  "transportation dispatch runtime",
  "emergency dispatch runtime",
  "medical records or FHIR access runtime",
  "source-backed pharmacy claims without sources",
  "stale data claims without freshness labels",
  "confidence-free pharmacy claims",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "medical advice claims",
  "diagnosis claims",
  "payment execution claims",
  "insurance processing claims",
  "transportation dispatch claims",
  "emergency dispatch claims",
  "location sharing claims",
  "camera activation claims",
  "microphone activation claims",
  "account or profile mutation claims",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Pharmacy Mode metadata",
  "confirmation bypass from Pharmacy Mode metadata",
  "permission bypass from Pharmacy Mode metadata",
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
], "AA1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare pharmacy support options",
  "I cannot prescribe, refill medication, give dosage instructions, contact a pharmacy or provider, schedule care, process payment or insurance, dispatch transportation, dispatch emergency services, share location, activate the camera, activate the microphone, or take medical action without verified sources, consent, permission, confirmation, provider availability, and audit controls",
  "Pharmacy mode is not connected yet.",
  "This requires a verified pharmacy connector.",
  "This requires consent and approval.",
  "I cannot refill a prescription yet.",
  "I cannot contact a pharmacy yet.",
  "No action has been taken.",
  "I prescribed medication.",
  "I refilled your prescription.",
  "I gave dosage instructions.",
  "I contacted the pharmacy.",
  "I contacted the provider.",
  "I scheduled your pharmacy visit.",
  "I processed your payment.",
  "I processed your insurance.",
  "I dispatched transport.",
  "I dispatched emergency help.",
  "I shared your location.",
  "I opened your camera.",
  "I opened your microphone.",
  "I accessed your medical record.",
  "I completed the action."
], "AA1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_Z5_TELEHEALTH_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_PHARMACY_MODE_READINESS_CONTRACT_PHASE_79.md"],
  ["public", "nexus-pharmacy-mode-readiness-contract.js"],
  ["scripts", "nexus-pharmacy-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AA1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(z5Doc, [
  "Sprint AA1 - Pharmacy Mode Runtime Activation Readiness Gate"
], "Z5 closeout next sprint recommendation");

assertIncludes(pharmacyContractSource, [
  "PHARMACY_MODE_READINESS_CONTRACT",
  "pharmacy-mode.readiness.phase_79",
  "PHARMACY_MODE_NO_EXECUTION_DEFAULTS",
  "createPharmacyModeReadinessContract",
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
], "Phase 79 Pharmacy Mode readiness contract");

assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.riskTier, "restricted");
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.acceptanceTarget, "refill gated");
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(pharmacyContract.PHARMACY_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = pharmacyContract.createPharmacyModeReadinessContract({
  actionType: "prepare_pharmacy_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_pharmacy_mode_summary");
assert.equal(sample.phase, "79");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-pharmacy-mode-readiness-contract.js",
  "NexusPharmacyModeReadinessContract",
  "PHARMACY_MODE_READINESS_CONTRACT",
  "pharmacy-mode.readiness.phase_79",
  "createPharmacyModeReadinessContract",
  "pharmacyModeRuntime",
  "livePharmacyModeRuntime",
  "livePharmacyConnectorRuntime",
  "executePrescriptionRefill(",
  "executePharmacyRefill(",
  "contactPharmacyProvider(",
  "contactPharmacist(",
  "processPharmacyPayment(",
  "processInsurance(",
  "nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Pharmacy Mode lane artifact: ${term}`);
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
  "executePrescriptionRefill(",
  "executePharmacyRefill(",
  "contactPharmacyProvider(",
  "contactPharmacist(",
  "processPharmacyPayment(",
  "processInsurance("
]) {
  assert(!pharmacyContractSource.includes(term), `Pharmacy Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AA1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-z5-telehealth-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint Z5 QA.");
assert(qaSuite.includes("scripts/nexus-pharmacy-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 79 QA.");

console.log("[nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate-qa] passed");
