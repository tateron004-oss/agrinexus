const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  loadConfirmationFixtures
} = require("./nexus-sprint-e3-confirmation-harness.js");
const {
  REQUIRED_ACCOUNTABILITY_FIELDS,
  mapConfirmationEvidenceRisk,
  validateConfirmationEvidenceRisk
} = require("../public/nexus-confirmation-evidence-risk-mapping.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_E4_CONFIRMATION_EVIDENCE_AND_RISK_MAPPING.md";
const moduleName = "nexus-confirmation-evidence-risk-mapping.js";
const qaName = "nexus-sprint-e4-confirmation-evidence-risk-mapping-qa.js";

assert(exists("docs", docName), "Sprint E4 evidence/risk mapping doc must exist.");
assert(exists("public", moduleName), "Sprint E4 evidence/risk mapping module must exist.");
assert(exists("scripts", qaName), "Sprint E4 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadConfirmationFixtures();

assertIncludes(doc, [
  "Sprint E4",
  "967b09de720aac4e52c14e50e072080c49e910c1",
  "Evidence Requirement",
  "Source Packet Requirement",
  "Risk Disclosure",
  "Required No-Execution Mapping",
  "approvalIntentOnly: true",
  "requiresFinalExecutionGate: true",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "pendingActionCreated: false",
  "backendWriteAllowed: false",
  "Runtime Boundary",
  "Sprint E4 proves confirmation evidence and risk accountability"
], "E4 doc");

[
  "evidenceRequirement",
  "sourcePacketRequirement",
  "riskDisclosure",
  "limitations",
  "blockedExecutionChannels"
].forEach(field => {
  assert(doc.includes(field), `E4 doc must include accountability field: ${field}`);
  assert(REQUIRED_ACCOUNTABILITY_FIELDS.includes(field), `mapper required fields must include: ${field}`);
});

assert.equal(typeof mapConfirmationEvidenceRisk, "function", "mapper must export mapConfirmationEvidenceRisk");
assert.equal(typeof validateConfirmationEvidenceRisk, "function", "mapper must export validateConfirmationEvidenceRisk");

fixtures.forEach(confirmation => {
  const validation = validateConfirmationEvidenceRisk(confirmation);
  assert.equal(validation.ok, true, `${confirmation.confirmationId} must pass evidence/risk mapping`);

  const mapped = validation.mapped;
  assert.equal(mapped.safe, true, `${confirmation.confirmationId} must map as safe`);
  assert.equal(mapped.evidenceRequired, true, `${confirmation.confirmationId} must require evidence`);
  assert.equal(mapped.sourcePacketRequired, true, `${confirmation.confirmationId} must require source packet or disclose non-source-backed limitations`);
  assert.equal(mapped.limitationsDisclosed, true, `${confirmation.confirmationId} must disclose limitations`);
  assert.equal(mapped.riskDisclosurePresent, true, `${confirmation.confirmationId} must include risk disclosure`);
  assert.equal(mapped.approvalIntentOnly, true, `${confirmation.confirmationId} must remain approval-intent-only`);
  assert.equal(mapped.requiresFinalExecutionGate, true, `${confirmation.confirmationId} must require final execution gate`);
  assert.equal(mapped.executionAuthority, false, `${confirmation.confirmationId} must have no execution authority`);
  assert.equal(mapped.providerHandoffAllowed, false, `${confirmation.confirmationId} must not allow provider handoff`);
  assert.equal(mapped.pendingActionCreated, false, `${confirmation.confirmationId} must not create pending actions`);
  assert.equal(mapped.backendWriteAllowed, false, `${confirmation.confirmationId} must not allow backend writes`);
});

const sourceBackedFixtures = fixtures.filter(confirmation => !confirmation.sourcePacketRequirement.toLowerCase().includes("not source-backed"));
assert(sourceBackedFixtures.length >= 4, "E4 must include source-backed confirmation fixtures.");
sourceBackedFixtures.forEach(confirmation => {
  assert(confirmation.sourcePacketRequirement.toLowerCase().includes("required"), `${confirmation.confirmationId} must require source packet references`);
});

const notSourceBackedFixtures = fixtures.filter(confirmation => confirmation.sourcePacketRequirement.toLowerCase().includes("not source-backed"));
assert(notSourceBackedFixtures.length >= 2, "E4 must include not-source-backed boundary fixtures.");
notSourceBackedFixtures.forEach(confirmation => {
  assert(confirmation.limitations.length > 0, `${confirmation.confirmationId} must disclose limitations`);
});

[
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "open(",
  "sendBeacon",
  "setItem",
  "postMessage"
].forEach(term => {
  assert(!moduleSource.includes(term), `E4 evidence/risk mapper must not include unsafe runtime API: ${term}`);
});

const alias = "qa:nexus-sprint-e4-confirmation-evidence-risk-mapping";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E4 evidence/risk mapping QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e3-confirmation-harness-qa.js"), "E4 requires E3 QA to remain in qa-suite.");

console.log("[nexus-sprint-e4-confirmation-evidence-risk-mapping-qa] passed");
