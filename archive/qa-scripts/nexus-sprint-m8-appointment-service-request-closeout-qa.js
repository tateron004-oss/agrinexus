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

const docName = "NEXUS_SPRINT_M8_APPOINTMENT_SERVICE_REQUEST_CLOSEOUT_AND_SPRINT_N_READINESS.md";
const qaName = "nexus-sprint-m8-appointment-service-request-closeout-qa.js";

assert(exists("docs", docName), "M8 closeout doc must exist.");
assert(exists("scripts", qaName), "M8 QA must exist.");

[
  "NEXUS_SPRINT_M1_APPOINTMENT_SERVICE_REQUEST_PRODUCT_BOUNDARY.md",
  "NEXUS_SPRINT_M2_INERT_APPOINTMENT_SERVICE_REQUEST_CONTRACT.md",
  "NEXUS_SPRINT_M3_FIXTURE_ONLY_APPOINTMENT_SERVICE_REQUEST_HARNESS.md",
  "NEXUS_SPRINT_M4_PROVIDER_TIME_RISK_EVIDENCE_MAPPING.md",
  "NEXUS_SPRINT_M5_APPOINTMENT_SERVICE_FLAG_OFF_REGRESSION_GUARD.md",
  "NEXUS_SPRINT_M6_FLAG_GATED_APPOINTMENT_SERVICE_REQUEST_PREVIEW.md",
  "NEXUS_SPRINT_M7_APPOINTMENT_SERVICE_PREVIEW_BROWSER_VALIDATION.md",
  docName
].forEach(file => assert(exists("docs", file), `Sprint M doc must exist: ${file}`));

[
  "nexus-sprint-m1-appointment-service-request-product-boundary-qa.js",
  "nexus-sprint-m2-inert-appointment-service-request-contract-qa.js",
  "nexus-sprint-m3-appointment-service-request-harness-qa.js",
  "nexus-sprint-m4-provider-time-risk-evidence-mapping-qa.js",
  "nexus-sprint-m5-flag-off-appointment-service-regression-qa.js",
  "nexus-sprint-m6-flag-gated-appointment-service-request-preview-qa.js",
  "nexus-sprint-m7-standard-user-browser-validation-for-appointment-service-preview-qa.js",
  qaName
].forEach(file => assert(exists("scripts", file), `Sprint M QA must exist: ${file}`));

[
  "nexus-appointment-service-request-contract.js",
  "nexus-appointment-service-risk-evidence-mapping.js",
  "nexus-appointment-service-preview-flag-guard.js",
  "nexus-appointment-service-request-preview.js"
].forEach(file => assert(exists("public", file), `Sprint M public contract module must exist: ${file}`));

assert(exists("fixtures", "nexus", "appointment-service-requests.json"), "Sprint M fixture file must exist.");

const doc = read("docs", docName);
[
  "M1: product boundary",
  "M2: inert appointment/service request contract",
  "M3: fixture-only appointment/service request harness",
  "M4: provider, time, risk, and evidence mapping",
  "M5: flag-off appointment/service regression guard",
  "M6: flag-gated appointment/service request preview builder",
  "M7: Standard User browser-validation boundary",
  "Execution authority remains false",
  "Provider confirmation, user approval, final execution gate",
  "Standard User runtime remains unchanged",
  "Sprint N Readiness",
  "no execution until provider, consent, approval, audit, and final execution gates are complete"
].forEach(term => assert(doc.includes(term), `M8 doc must include: ${term}`));

const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const aliases = [
  "qa:nexus-sprint-m1-appointment-service-request-product-boundary",
  "qa:nexus-sprint-m2-inert-appointment-service-request-contract",
  "qa:nexus-sprint-m3-appointment-service-request-harness",
  "qa:nexus-sprint-m4-provider-time-risk-evidence-mapping",
  "qa:nexus-sprint-m5-flag-off-appointment-service-regression",
  "qa:nexus-sprint-m6-flag-gated-appointment-service-request-preview",
  "qa:nexus-sprint-m7-standard-user-browser-validation-for-appointment-service-preview",
  "qa:nexus-sprint-m8-appointment-service-request-closeout-and-sprint-n-readiness"
];
aliases.forEach(alias => assert(pkg.scripts && pkg.scripts[alias], `${alias} package script must exist.`));

[
  "scripts/nexus-sprint-m1-appointment-service-request-product-boundary-qa.js",
  "scripts/nexus-sprint-m2-inert-appointment-service-request-contract-qa.js",
  "scripts/nexus-sprint-m3-appointment-service-request-harness-qa.js",
  "scripts/nexus-sprint-m4-provider-time-risk-evidence-mapping-qa.js",
  "scripts/nexus-sprint-m5-flag-off-appointment-service-regression-qa.js",
  "scripts/nexus-sprint-m6-flag-gated-appointment-service-request-preview-qa.js",
  "scripts/nexus-sprint-m7-standard-user-browser-validation-for-appointment-service-preview-qa.js",
  `scripts/${qaName}`
].forEach(script => assert(qaSuite.includes(script), `qa-suite must include ${script}.`));

const fixtures = JSON.parse(read("fixtures", "nexus", "appointment-service-requests.json"));
const contract = require("../public/nexus-appointment-service-request-contract.js");
const harness = require("./nexus-sprint-m3-appointment-service-request-harness.js");
const mapper = require("../public/nexus-appointment-service-risk-evidence-mapping.js");
const guard = require("../public/nexus-appointment-service-preview-flag-guard.js");
const preview = require("../public/nexus-appointment-service-request-preview.js");

fixtures.forEach(fixture => {
  const validation = contract.validateAppointmentServiceRequestIntent(fixture);
  assert.equal(validation.ok, true, `${fixture.fixtureId} must satisfy M2 contract.`);
  assert.equal(validation.executionAllowed, false, `${fixture.fixtureId} must not execute.`);
});

harness.runAppointmentServiceRequestFixtures().forEach(result => {
  assert.equal(result.ok, true, `${result.fixtureId} M3 harness result must pass.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} M3 harness result must not execute.`);
});

const agriculture = fixtures.find(fixture => fixture.fixtureId === "agriculture-support-appointment-request");
const emergency = fixtures.find(fixture => fixture.fixtureId === "blocked-emergency-service-request");
const mapped = mapper.mapAppointmentServiceRiskEvidence(agriculture);
assert.equal(mapped.validation.ok, true, "M4 mapper must validate eligible fixture.");
assert.equal(mapped.mapping.executionAllowed, false, "M4 mapper must not execute.");
assert.equal(guard.isAppointmentServicePreviewAllowed(mapped.request, {}).previewAllowed, false, "M5 flag guard must default hidden.");
assert.equal(guard.isAppointmentServicePreviewAllowed(mapped.request, { enableAppointmentServiceRequestPreview: true, context: "standard-user" }).previewAllowed, false, "M5 guard must deny Standard User.");
assert.equal(preview.buildAppointmentServiceRequestPreview(agriculture, {}).visible, false, "M6 preview must default hidden.");
assert.equal(preview.buildAppointmentServiceRequestPreview(agriculture, { enableAppointmentServiceRequestPreview: true, context: "standard-user" }).visible, false, "M6 preview must keep Standard User hidden.");
const visible = preview.buildAppointmentServiceRequestPreview(agriculture, { enableAppointmentServiceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(visible.visible, true, "M6 preview must support local-safe fixture visibility.");
assert.equal(visible.executionAllowed, false, "M6 visible fixture must not execute.");
assert.deepEqual(visible.controls, [], "M6 visible fixture must not expose controls.");
assert.equal(preview.buildAppointmentServiceRequestPreview(emergency, { enableAppointmentServiceRequestPreview: true, context: "local-safe-fixture" }).visible, false, "M6 restricted fixture must remain hidden.");

const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
[
  "nexus-appointment-service-risk-evidence-mapping.js",
  "nexus-appointment-service-preview-flag-guard.js",
  "nexus-appointment-service-request-preview.js",
  "NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED"
].forEach(term => {
  assert(!indexHtml.includes(term), `index.html must not load ${term}.`);
  assert(!appSource.includes(term), `app.js must not load ${term}.`);
  assert(!serverSource.includes(term), `server.js must not load ${term}.`);
});

console.log("[nexus-sprint-m8-appointment-service-request-closeout-qa] passed");
