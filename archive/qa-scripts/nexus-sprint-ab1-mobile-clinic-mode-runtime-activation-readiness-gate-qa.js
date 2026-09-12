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

const docName = "NEXUS_SPRINT_AB1_MOBILE_CLINIC_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AB1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AB1 QA script must exist.");

const doc = read("docs", docName);
const aa5Doc = read("docs", "NEXUS_SPRINT_AA5_PHARMACY_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const mobileClinicContractSource = read("public", "nexus-mobile-clinic-mode-readiness-contract.js");
const mobileClinicContract = require("../public/nexus-mobile-clinic-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AB1",
  "2fb88c21430244a4c7b481eb13f3d57589a6d558",
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
  "Sprint AB2 - Mobile Clinic Mode Feature Flag Contract"
], "AB1 readiness doc");

assertIncludes(doc, [
  "Sprint AA5 - Pharmacy Mode Lane Closeout",
  "Phase 80 - Mobile Clinic Mode Readiness Contract",
  "Mobile Clinic Mode readiness is also not clinic authority, telehealth authority, provider authority, clinician authority, mobile clinic schedule authority, appointment authority, transportation authority, emergency authority, location consent, product owner approval, user consent, provider confirmation, audit approval, payment authority, identity authority, or execution authority"
], "AB1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Mobile Clinic Mode runtime change",
  "verified mobile clinic schedule, clinic, provider, transportation, location, telehealth, or regulated source",
  "verified live mobile clinic connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "identity verification boundary",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "provider or clinic confirmation before any provider-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no mobile clinic dispatch, appointment scheduling, clinic provider contact, clinician contact, transportation dispatch, emergency dispatch, location sharing, camera, microphone, payment, pharmacy, prescription, refill, or medical execution from Mobile Clinic Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AB1 runtime activation preconditions");

assertIncludes(doc, [
  "active Mobile Clinic Mode runtime",
  "live mobile clinic connector activation",
  "mobile clinic schedule connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "provider connector runtime",
  "clinician contact runtime",
  "transportation connector runtime",
  "location connector runtime",
  "pharmacy connector runtime",
  "prescription or refill connector runtime",
  "appointment scheduling runtime",
  "mobile clinic schedule execution",
  "transportation dispatch runtime",
  "emergency dispatch runtime",
  "medical records or FHIR access runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "mobile clinic action execution claims",
  "provider contact claims",
  "clinician contact claims",
  "appointment scheduling claims",
  "transportation dispatch claims",
  "emergency dispatch claims",
  "location sharing claims",
  "camera activation claims",
  "microphone activation claims",
  "payment execution claims",
  "source-backed mobile clinic claims without sources",
  "stale data claims without freshness labels",
  "confidence-free mobile clinic claims",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "account or profile mutation claims",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Mobile Clinic Mode metadata",
  "confirmation bypass from Mobile Clinic Mode metadata",
  "permission bypass from Mobile Clinic Mode metadata",
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
], "AB1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare mobile clinic access options",
  "I cannot schedule a visit, contact a clinic or provider, dispatch transportation, dispatch emergency services, share location, activate the camera, activate the microphone, process payment, access medical records, or take medical action without verified sources, consent, permission, confirmation, provider availability, and audit controls",
  "Mobile clinic mode is not connected yet.",
  "This requires a verified mobile clinic schedule source.",
  "This requires consent and approval.",
  "I cannot schedule a mobile clinic visit yet.",
  "I cannot contact a mobile clinic provider yet.",
  "I cannot dispatch transportation or emergency help.",
  "No action has been taken.",
  "I scheduled your mobile clinic visit.",
  "I contacted the mobile clinic.",
  "I contacted the provider.",
  "I dispatched transport.",
  "I dispatched emergency help.",
  "I shared your location.",
  "I opened your camera.",
  "I opened your microphone.",
  "I accessed your medical record.",
  "I processed your payment.",
  "I completed the action."
], "AB1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AA5_PHARMACY_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_MOBILE_CLINIC_MODE_READINESS_CONTRACT_PHASE_80.md"],
  ["public", "nexus-mobile-clinic-mode-readiness-contract.js"],
  ["scripts", "nexus-mobile-clinic-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AB1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(aa5Doc, [
  "Sprint AB1 - Mobile Clinic Mode Runtime Activation Readiness Gate"
], "AA5 closeout next sprint recommendation");

assertIncludes(mobileClinicContractSource, [
  "MOBILE_CLINIC_MODE_READINESS_CONTRACT",
  "mobile-clinic-mode.readiness.phase_80",
  "MOBILE_CLINIC_MODE_NO_EXECUTION_DEFAULTS",
  "createMobileClinicModeReadinessContract",
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
], "Phase 80 Mobile Clinic Mode readiness contract");

assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.acceptanceTarget, "no dispatch claim");
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(mobileClinicContract.MOBILE_CLINIC_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = mobileClinicContract.createMobileClinicModeReadinessContract({
  actionType: "prepare_mobile_clinic_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_mobile_clinic_mode_summary");
assert.equal(sample.phase, "80");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-mobile-clinic-mode-readiness-contract.js",
  "NexusMobileClinicModeReadinessContract",
  "MOBILE_CLINIC_MODE_READINESS_CONTRACT",
  "mobile-clinic-mode.readiness.phase_80",
  "createMobileClinicModeReadinessContract",
  "mobileClinicModeRuntime",
  "liveMobileClinicModeRuntime",
  "liveMobileClinicConnectorRuntime",
  "executeMobileClinicSchedule(",
  "scheduleMobileClinicVisit(",
  "contactMobileClinicProvider(",
  "dispatchMobileClinicTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Mobile Clinic Mode lane artifact: ${term}`);
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
  "executeMobileClinicSchedule(",
  "scheduleMobileClinicVisit(",
  "contactMobileClinicProvider(",
  "dispatchMobileClinicTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!mobileClinicContractSource.includes(term), `Mobile Clinic Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AB1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aa5-pharmacy-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AA5 QA.");
assert(qaSuite.includes("scripts/nexus-mobile-clinic-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 80 QA.");

console.log("[nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate-qa] passed");
