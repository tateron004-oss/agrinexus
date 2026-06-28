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

const docName = "NEXUS_SPRINT_AE1_EDUCATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AE1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AE1 QA script must exist.");

const doc = read("docs", docName);
const ad5Doc = read("docs", "NEXUS_SPRINT_AD5_WORKFORCE_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const educationContractSource = read("public", "nexus-education-mode-readiness-contract.js");
const educationContract = require("../public/nexus-education-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AE1",
  "ad7492d4f3672261dfc71051938d14813258772c",
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
  "Sprint AE2 - Education Mode Feature Flag Contract"
], "AE1 readiness doc");

assertIncludes(doc, [
  "Sprint AD5 - Workforce Mode Lane Closeout",
  "Phase 83 - Education Mode Readiness Contract",
  "Education Mode readiness is not enrollment authority, course registration authority, certification authority, content provider authority, training provider authority, identity authority, payment authority, communications authority, transportation authority, emergency authority, medical authority, location consent, product owner approval, user consent, provider confirmation, training partner confirmation, human review approval, audit approval, or execution authority"
], "AE1 relationship section");

assertIncludes(doc, [
  "product owner approval for an Education Mode runtime change",
  "verified education, learning, training, certification, content, or regulated source",
  "verified live education connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "identity verification boundary when needed",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "provider, training partner, certification partner, content partner, or education partner confirmation before any partner-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no course enrollment, course registration, certificate issuance, provider contact, training provider contact, education partner contact, payment, medical, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, location sharing, camera, microphone, marketplace execution, or account/profile mutation from Education Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AE1 runtime activation preconditions");

assertIncludes(doc, [
  "active Education Mode runtime",
  "live education connector activation",
  "education content provider connector runtime",
  "training provider connector runtime",
  "certification provider connector runtime",
  "enrollment connector runtime",
  "identity connector runtime",
  "payment connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "health connector runtime",
  "course enrollment runtime",
  "course registration runtime",
  "certificate issuance runtime",
  "payment runtime",
  "transportation dispatch runtime",
  "emergency dispatch runtime",
  "medical records or FHIR access runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "education action execution claims",
  "provider contact claims",
  "training provider contact claims",
  "education partner contact claims",
  "enrollment execution claims",
  "registration execution claims",
  "certificate issuance claims",
  "payment execution claims",
  "unsupported live data claims",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Education Mode metadata",
  "confirmation bypass from Education Mode metadata",
  "permission bypass from Education Mode metadata",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "training partner handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AE1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare learning options.",
  "Education Mode is not connected yet.",
  "This requires a verified education source or partner.",
  "This requires consent and approval.",
  "I cannot enroll you in a course yet.",
  "I cannot contact a provider or training partner yet.",
  "No action has been taken.",
  "I enrolled you in the course.",
  "I registered you for the program.",
  "I contacted the provider.",
  "I contacted the training partner.",
  "I issued your certificate.",
  "I processed your payment.",
  "I changed your account.",
  "I completed the action."
], "AE1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AD5_WORKFORCE_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_EDUCATION_MODE_READINESS_CONTRACT_PHASE_83.md"],
  ["public", "nexus-education-mode-readiness-contract.js"],
  ["scripts", "nexus-education-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AE1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ad5Doc, [
  "Sprint AE1 - Education Mode Runtime Activation Readiness Gate"
], "AD5 closeout next sprint recommendation");

assertIncludes(educationContractSource, [
  "EDUCATION_MODE_READINESS_CONTRACT",
  "education-mode.readiness.phase_83",
  "EDUCATION_MODE_NO_EXECUTION_DEFAULTS",
  "createEducationModeReadinessContract",
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
], "Phase 83 Education Mode readiness contract");

assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.riskTier, "low");
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.acceptanceTarget, "learning available");
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(educationContract.EDUCATION_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = educationContract.createEducationModeReadinessContract({
  actionType: "prepare_education_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_education_mode_summary");
assert.equal(sample.phase, "83");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-education-mode-readiness-contract.js",
  "NexusEducationModeReadinessContract",
  "EDUCATION_MODE_READINESS_CONTRACT",
  "education-mode.readiness.phase_83",
  "createEducationModeReadinessContract",
  "educationModeRuntime",
  "liveEducationModeRuntime",
  "liveEducationConnectorRuntime",
  "executeEducationEnrollment(",
  "registerCourse(",
  "enrollInCourse(",
  "issueEducationCredential(",
  "contactEducationProvider(",
  "contactTrainingProvider(",
  "processEducationPayment(",
  "nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Education Mode lane artifact: ${term}`);
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
  "executeEducationEnrollment(",
  "registerCourse(",
  "enrollInCourse(",
  "issueEducationCredential(",
  "contactEducationProvider(",
  "contactTrainingProvider(",
  "processEducationPayment("
]) {
  assert(!educationContractSource.includes(term), `Education Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AE1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ad5-workforce-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AD5 QA.");
assert(qaSuite.includes("scripts/nexus-education-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 83 QA.");

console.log("[nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate-qa] passed");
