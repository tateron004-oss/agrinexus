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
  terms.forEach(term => assert(source.includes(term), `${label} must include: ${term}`));
}

const docName = "NEXUS_SPRINT_K4_IDENTITY_CONFIDENCE_RISK_EVIDENCE_MAPPING.md";
const moduleName = "nexus-contact-provider-identity-evidence-mapper.js";
const qaName = "nexus-sprint-k4-identity-confidence-risk-evidence-mapping-qa.js";

assert(exists("docs", docName), "K4 doc must exist.");
assert(exists("public", moduleName), "K4 mapper module must exist.");
assert(exists("scripts", qaName), "K4 QA must exist.");

const doc = read("docs", docName);
const mapperSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const mapper = require("../public/nexus-contact-provider-identity-evidence-mapper.js");

assertIncludes(doc, [
  "Sprint K4",
  "Identity Confidence, Risk, and Evidence Mapping",
  "inert mapping contract",
  "confidence",
  "risk",
  "evidence",
  "does not",
  "load in `public/index.html`",
  "load in `public/app.js`",
  "load in `server.js`",
  "call providers",
  "look up contacts",
  "request permissions",
  "network calls",
  "storage",
  "backend state",
  "pending real-world actions",
  "executionAuthority: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "communicationAllowed: false",
  "executionAllowed: false"
], "K4 doc");

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "writeFile",
  "appendFile"
].forEach(term => assert(!mapperSource.includes(term), `K4 mapper must not include runtime side-effect API: ${term}`));

assert.equal(typeof mapper.mapIdentityConfidenceRiskEvidence, "function", "K4 mapper must export mapIdentityConfidenceRiskEvidence.");
assert(mapper.IDENTITY_CONFIDENCE_MAP.exactVisibleLabel === "high", "K4 confidence map must include exact visible label.");
assert(mapper.IDENTITY_RISK_MAP.emergency === "restricted", "K4 risk map must include restricted emergency risk.");
assert(Array.isArray(mapper.EVIDENCE_REQUIREMENTS.ambiguous), "K4 evidence requirements must include ambiguous evidence.");

const cases = [
  {
    label: "exact contact label",
    input: { entityType: "contact", displayName: "John", requestedActionType: "call", exactVisibleLabel: true, phraseEvidence: "Call John" },
    confidenceTier: "high",
    riskTier: "high"
  },
  {
    label: "provider context",
    input: { entityType: "provider", displayName: "Clinic Desk", requestedActionType: "provider-contact", partialVisibleEvidence: true },
    confidenceTier: "medium",
    riskTier: "high"
  },
  {
    label: "role only",
    input: { entityType: "role", displayName: "my doctor", requestedActionType: "call", roleOnly: true },
    confidenceTier: "low",
    riskTier: "high"
  },
  {
    label: "multiple candidates",
    input: { entityType: "contact", displayName: "John", ambiguityState: "multiple-candidates" },
    confidenceTier: "ambiguous",
    riskTier: "high"
  },
  {
    label: "missing target",
    input: { entityType: "unknown", displayName: "", missingInformationState: "target-missing" },
    confidenceTier: "missing",
    riskTier: "medium"
  },
  {
    label: "healthcare provider",
    input: { entityType: "healthcare-provider", displayName: "Nurse Line", domainContext: "health access" },
    confidenceTier: "medium",
    riskTier: "high"
  },
  {
    label: "pharmacy provider",
    input: { entityType: "pharmacy-provider", displayName: "Pharmacy", domainContext: "pharmacy" },
    confidenceTier: "medium",
    riskTier: "high"
  },
  {
    label: "emergency contact",
    input: { entityType: "emergency-contact", displayName: "Emergency contact", domainContext: "emergency" },
    confidenceTier: "medium",
    riskTier: "restricted"
  }
];

cases.forEach(testCase => {
  const result = mapper.mapIdentityConfidenceRiskEvidence(testCase.input);
  assert.equal(result.validation.ok, true, `${testCase.label} must validate through K2 contract.`);
  assert.equal(result.candidate.confidenceTier, testCase.confidenceTier, `${testCase.label} confidence mismatch.`);
  assert.equal(result.candidate.riskTier, testCase.riskTier, `${testCase.label} risk mismatch.`);
  assert.equal(result.candidate.identityResolutionOnly, true, `${testCase.label} must stay identity-resolution-only.`);
  assert.equal(result.candidate.approvalIntentOnly, true, `${testCase.label} must stay approval-intent-only.`);
  assert.equal(result.candidate.finalExecutionGateRequired, true, `${testCase.label} must require final execution gate.`);
  assert.equal(result.candidate.executionAuthority, false, `${testCase.label} must not create execution authority.`);
  assert.equal(result.candidate.providerDispatchAllowed, false, `${testCase.label} must not allow provider dispatch.`);
  assert.equal(result.candidate.providerHandoffAllowed, false, `${testCase.label} must not allow provider handoff.`);
  assert.equal(result.candidate.communicationAllowed, false, `${testCase.label} must not allow communications.`);
  assert.equal(result.validation.executionAllowed, false, `${testCase.label} must not allow execution.`);
  assert(result.candidate.evidenceSummary.length > 0, `${testCase.label} must include evidence summary.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the K4 mapper.`);
});

const alias = "qa:nexus-sprint-k4-identity-confidence-risk-evidence-mapping";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-k3-contact-provider-identity-harness-qa.js"), "K4 requires K3 QA to remain in qa-suite.");

console.log("[nexus-sprint-k4-identity-confidence-risk-evidence-mapping-qa] passed");
