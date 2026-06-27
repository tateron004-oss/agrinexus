const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  loadStagedActionFixtures
} = require("./nexus-sprint-d3-staged-action-harness.js");
const {
  buildStagedActionEvidenceAccountability,
  validateStagedActionEvidenceAccountability
} = require("../public/nexus-staged-action-evidence-mapping.js");

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

const docName = "NEXUS_SPRINT_D4_STAGED_ACTION_EVIDENCE_ACCOUNTABILITY_MAPPING.md";
const moduleName = "nexus-staged-action-evidence-mapping.js";
const qaName = "nexus-sprint-d4-staged-action-evidence-accountability-mapping-qa.js";

assert(exists("docs", docName), "Sprint D4 evidence accountability doc must exist.");
assert(exists("public", moduleName), "Sprint D4 evidence mapping module must exist.");
assert(exists("scripts", qaName), "Sprint D4 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadStagedActionFixtures();

assertIncludes(doc, [
  "Sprint D4",
  "Evidence Accountability Requirements",
  "Source-Backed Actions",
  "Not-Source-Backed Actions",
  "No-Execution Guarantees",
  "public/nexus-staged-action-evidence-mapping.js",
  "buildStagedActionEvidenceAccountability(action)",
  "validateStagedActionEvidenceAccountability(action)",
  "readyForVisibleReview",
  "Runtime Boundary"
], "D4 doc");

[
  "evidenceRequirement",
  "sourcePacketRequirement",
  "safeUseNotes",
  "limitations",
  "reviewOnly: true",
  "requiresUserApproval: true",
  "executionAuthority: false",
  "execution false",
  "provider handoff false",
  "no pending actions",
  "no backend writes"
].forEach(term => assert(doc.includes(term), `D4 doc must include ${term}`));

assert.equal(fixtures.length, 6, "D4 must validate all six D3 fixtures.");

fixtures.forEach(action => {
  const mapping = buildStagedActionEvidenceAccountability(action);
  const validation = validateStagedActionEvidenceAccountability(action);

  assert.equal(mapping.hasEvidenceRequirement, true, `${action.stagedActionId} must have evidence requirement`);
  assert.equal(mapping.hasSourcePacketRequirement, true, `${action.stagedActionId} must have source packet requirement`);
  assert.equal(mapping.hasLimitations, true, `${action.stagedActionId} must have limitations`);
  assert.equal(mapping.hasSafeUseNotes, true, `${action.stagedActionId} must have safe use notes`);
  assert.equal(mapping.executionAuthority, false, `${action.stagedActionId} must not have execution authority`);
  assert.equal(mapping.providerHandoffAllowed, false, `${action.stagedActionId} must not allow provider handoff`);
  assert.equal(mapping.pendingActionAllowed, false, `${action.stagedActionId} must not allow pending actions`);
  assert.equal(mapping.backendWriteAllowed, false, `${action.stagedActionId} must not allow backend writes`);
  assert.equal(validation.ok, true, `${action.stagedActionId} must pass evidence accountability validation: ${validation.failures.join("; ")}`);
  assert.equal(mapping.readyForVisibleReview, true, `${action.stagedActionId} must be ready for visible review only`);

  if (mapping.sourceBacked) {
    assert(!/not source-backed/i.test(action.sourcePacketRequirement), `${action.stagedActionId} source-backed action must require source packet references`);
  } else {
    assert(/not source-backed|safety boundary|limitation/i.test(action.sourcePacketRequirement), `${action.stagedActionId} non-source-backed action must disclose source limitation`);
    assert(/review-only|blocked|cannot|no /i.test(action.limitations), `${action.stagedActionId} non-source-backed action must disclose limitations`);
  }
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
  "writeFile",
  "appendFile"
].forEach(term => {
  assert(!moduleSource.includes(term), `D4 evidence mapping module must not include unsafe runtime API: ${term}`);
});

const alias = "qa:nexus-sprint-d4-staged-action-evidence-accountability-mapping";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D4 QA.");

console.log("[nexus-sprint-d4-staged-action-evidence-accountability-mapping-qa] passed");
