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

const docName = "NEXUS_SPRINT_AD1_WORKFORCE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AD1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AD1 QA script must exist.");

const doc = read("docs", docName);
const ac5Doc = read("docs", "NEXUS_SPRINT_AC5_TRANSPORTATION_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const workforceContractSource = read("public", "nexus-workforce-mode-readiness-contract.js");
const workforceContract = require("../public/nexus-workforce-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AD1",
  "c7ee4cf81e97843421c62d6d2d7b2ff6b71e0146",
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
  "Sprint AD2 - Workforce Mode Feature Flag Contract"
], "AD1 readiness doc");

assertIncludes(doc, [
  "Sprint AC5 - Transportation Mode Lane Closeout",
  "Phase 82 - Workforce Mode Readiness Contract",
  "Workforce Mode readiness is not job application authority, referral authority, employer authority, training provider authority, certification authority, identity authority, payment authority, communications authority, location consent, product owner approval, user consent, provider confirmation, employer confirmation, human review approval, audit approval, or execution authority"
], "AD1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Workforce Mode runtime change",
  "verified workforce, training, certification, employer, referral, or regulated source",
  "verified live workforce connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "identity verification boundary when needed",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "provider, employer, training partner, certification partner, or workforce partner confirmation before any partner-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no job application submission, referral execution, provider contact, employer contact, payment, medical, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, location sharing, camera, microphone, marketplace execution, or account/profile mutation from Workforce Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AD1 runtime activation preconditions");

assertIncludes(doc, [
  "active Workforce Mode runtime",
  "live workforce connector activation",
  "workforce program connector runtime",
  "training provider connector runtime",
  "certification provider connector runtime",
  "employer connector runtime",
  "referral connector runtime",
  "application connector runtime",
  "identity connector runtime",
  "payment connector runtime",
  "job application submission runtime",
  "workforce referral runtime",
  "credential or certification issuance runtime",
  "payment runtime",
  "transportation dispatch runtime",
  "emergency dispatch runtime",
  "medical records or FHIR access runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "workforce action execution claims",
  "provider contact claims",
  "employer contact claims",
  "referral execution claims",
  "application submission claims",
  "payment execution claims",
  "unsupported live data claims",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Workforce Mode metadata",
  "confirmation bypass from Workforce Mode metadata",
  "permission bypass from Workforce Mode metadata",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "employer handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AD1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare workforce pathway options.",
  "Workforce Mode is not connected yet.",
  "This requires a verified workforce source or partner.",
  "This requires consent and approval.",
  "I cannot submit an application yet.",
  "I cannot contact an employer or provider yet.",
  "No action has been taken.",
  "I submitted your application.",
  "I referred you to the program.",
  "I contacted the employer.",
  "I contacted the training provider.",
  "I issued your certificate.",
  "I processed your payment.",
  "I changed your account.",
  "I completed the action."
], "AD1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AC5_TRANSPORTATION_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_WORKFORCE_MODE_READINESS_CONTRACT_PHASE_82.md"],
  ["public", "nexus-workforce-mode-readiness-contract.js"],
  ["scripts", "nexus-workforce-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AD1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ac5Doc, [
  "Sprint AD1 - Workforce Mode Runtime Activation Readiness Gate"
], "AC5 closeout next sprint recommendation");

assertIncludes(workforceContractSource, [
  "WORKFORCE_MODE_READINESS_CONTRACT",
  "workforce-mode.readiness.phase_82",
  "WORKFORCE_MODE_NO_EXECUTION_DEFAULTS",
  "createWorkforceModeReadinessContract",
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
], "Phase 82 Workforce Mode readiness contract");

assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.riskTier, "controlled");
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.acceptanceTarget, "useful job pathways");
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(workforceContract.WORKFORCE_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = workforceContract.createWorkforceModeReadinessContract({
  actionType: "prepare_workforce_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_workforce_mode_summary");
assert.equal(sample.phase, "82");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-workforce-mode-readiness-contract.js",
  "NexusWorkforceModeReadinessContract",
  "WORKFORCE_MODE_READINESS_CONTRACT",
  "workforce-mode.readiness.phase_82",
  "createWorkforceModeReadinessContract",
  "workforceModeRuntime",
  "liveWorkforceModeRuntime",
  "liveWorkforceConnectorRuntime",
  "executeWorkforceReferral(",
  "submitJobApplication(",
  "contactWorkforceProvider(",
  "contactEmployer(",
  "issueCertification(",
  "processWorkforcePayment(",
  "nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Workforce Mode lane artifact: ${term}`);
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
  "executeWorkforceReferral(",
  "submitJobApplication(",
  "contactWorkforceProvider(",
  "contactEmployer(",
  "issueCertification(",
  "processWorkforcePayment("
]) {
  assert(!workforceContractSource.includes(term), `Workforce Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AD1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ac5-transportation-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AC5 QA.");
assert(qaSuite.includes("scripts/nexus-workforce-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 82 QA.");

console.log("[nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate-qa] passed");
