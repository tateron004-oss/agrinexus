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

const docName = "NEXUS_SPRINT_M4_PROVIDER_TIME_RISK_EVIDENCE_MAPPING.md";
const moduleName = "nexus-appointment-service-risk-evidence-mapping.js";
const qaName = "nexus-sprint-m4-provider-time-risk-evidence-mapping-qa.js";

assert(exists("docs", docName), "M4 doc must exist.");
assert(exists("public", moduleName), "M4 mapping module must exist.");
assert(exists("scripts", qaName), "M4 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "appointment-service-requests.json"));
const contract = require("../public/nexus-appointment-service-request-contract.js");
const mapper = require("../public/nexus-appointment-service-risk-evidence-mapping.js");

[
  "provider identity requirement",
  "timing/availability expectation",
  "user approval requirement",
  "final execution gate requirement",
  "high-risk",
  "Ambiguous providers or unclear time windows require clarification",
  "execution",
  "provider dispatch",
  "not book appointments",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `M4 doc must include: ${term}`));

[
  "deriveAppointmentServiceRiskTier",
  "buildAppointmentServiceEvidenceRequirement",
  "mapAppointmentServiceRiskEvidence"
].forEach(exportName => assert.equal(typeof mapper[exportName], "function", `M4 module must export ${exportName}.`));

const cases = new Map(fixtures.map(fixture => [fixture.fixtureId, fixture]));
[
  ["agriculture-support-appointment-request", "medium", false],
  ["field-visit-request", "high", false],
  ["blocked-emergency-service-request", "restricted", false],
  ["ambiguous-provider-request", "high", true]
].forEach(([fixtureId, expectedRiskTier, expectedClarification]) => {
  const result = mapper.mapAppointmentServiceRiskEvidence(cases.get(fixtureId));
  assert.equal(result.validation.ok, true, `${fixtureId} must validate after mapping.`);
  assert.equal(result.validation.executionAllowed, false, `${fixtureId} must not execute after mapping.`);
  assert.equal(result.request.riskTier, expectedRiskTier, `${fixtureId} must map risk tier.`);
  assert.equal(result.mapping.riskTier, expectedRiskTier, `${fixtureId} mapping must expose risk tier.`);
  assert.equal(result.mapping.clarificationRequired, expectedClarification, `${fixtureId} clarification status must match.`);
  assert(result.mapping.evidenceRequirement.includes("visible user approval required"), `${fixtureId} must require visible user approval.`);
  assert(result.mapping.evidenceRequirement.includes("provider confirmation required"), `${fixtureId} must require provider confirmation.`);
  assert(result.mapping.evidenceRequirement.includes("final execution gate required"), `${fixtureId} must require final gate.`);
  assert(result.mapping.evidenceRequirement.includes("audit-ready state required"), `${fixtureId} must require audit-ready state.`);
  assert.equal(result.request.providerConfirmationRequired, true, `${fixtureId} must require provider confirmation.`);
  assert.equal(result.request.userApprovalRequired, true, `${fixtureId} must require user approval.`);
  assert.equal(result.request.finalExecutionGateRequired, true, `${fixtureId} must require final execution gate.`);
  assert.equal(result.request.executionAuthority, false, `${fixtureId} must keep executionAuthority false.`);
  assert.equal(result.mapping.executionAllowed, false, `${fixtureId} mapping must not allow execution.`);
  assert.equal(result.mapping.providerDispatchAllowed, false, `${fixtureId} mapping must not allow dispatch.`);
  assert.equal(result.mapping.bookingAllowed, false, `${fixtureId} mapping must not allow booking.`);
  contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(result.request.blockedExecutionChannels.includes(channel), `${fixtureId} must keep blocked channel ${channel}.`);
  });
});

[
  "writeFile",
  "appendFile",
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
  "addEventListener",
  "createElement",
  "innerHTML",
  "db.json"
].forEach(term => assert(!moduleSource.includes(term), `M4 module must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load M4 mapper.`);
});

const alias = "qa:nexus-sprint-m4-provider-time-risk-evidence-mapping";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include M4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-m3-appointment-service-request-harness-qa.js"), "M4 requires M3 QA to remain in qa-suite.");

console.log("[nexus-sprint-m4-provider-time-risk-evidence-mapping-qa] passed");
