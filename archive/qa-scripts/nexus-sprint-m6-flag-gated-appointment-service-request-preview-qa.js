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

const docName = "NEXUS_SPRINT_M6_FLAG_GATED_APPOINTMENT_SERVICE_REQUEST_PREVIEW.md";
const moduleName = "nexus-appointment-service-request-preview.js";
const qaName = "nexus-sprint-m6-flag-gated-appointment-service-request-preview-qa.js";

assert(exists("docs", docName), "M6 doc must exist.");
assert(exists("public", moduleName), "M6 preview module must exist.");
assert(exists("scripts", qaName), "M6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "appointment-service-requests.json"));
const preview = require("../public/nexus-appointment-service-request-preview.js");

[
  "Sprint M4 risk/evidence mapper",
  "Sprint M5 default-off flag guard",
  "not wired into the Standard User runtime",
  "Default behavior and Standard User behavior remain hidden",
  "provider display",
  "requested time window",
  "evidence requirement",
  "provider confirmation requirement",
  "user approval requirement",
  "final execution gate requirement",
  "must not include buttons",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `M6 doc must include: ${term}`));

assert.equal(typeof preview.hiddenAppointmentServicePreview, "function", "M6 must export hidden preview helper.");
assert.equal(typeof preview.buildAppointmentServiceRequestPreview, "function", "M6 must export preview builder.");

const agriculture = fixtures.find(fixture => fixture.fixtureId === "agriculture-support-appointment-request");
const fieldVisit = fixtures.find(fixture => fixture.fixtureId === "field-visit-request");
const emergency = fixtures.find(fixture => fixture.fixtureId === "blocked-emergency-service-request");

let model = preview.buildAppointmentServiceRequestPreview(agriculture, {});
assert.equal(model.visible, false, "M6 default preview must be hidden.");
assert.equal(model.executionAllowed, false, "M6 default preview must not execute.");
assert.deepEqual(model.controls, [], "M6 hidden preview must not expose controls.");

model = preview.buildAppointmentServiceRequestPreview(agriculture, { enableAppointmentServiceRequestPreview: true, context: "standard-user" });
assert.equal(model.visible, false, "M6 Standard User preview must remain hidden.");
assert.equal(model.providerDispatchAllowed, false, "M6 Standard User preview must not dispatch.");
assert.equal(model.bookingAllowed, false, "M6 Standard User preview must not book.");

model = preview.buildAppointmentServiceRequestPreview(agriculture, { enableAppointmentServiceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(model.visible, true, "M6 local-safe eligible preview may become visible.");
assert.equal(model.title, "Review appointment or service request", "M6 preview title must be review-only.");
assert.equal(model.providerDisplayName, "County Extension Office", "M6 preview must expose provider display.");
assert.equal(model.requestedServiceCategory, "agriculture-support", "M6 preview must expose service category.");
assert.equal(model.riskTier, "medium", "M6 preview must expose mapped risk.");
assert(model.evidenceRequirement.includes("provider confirmation required"), "M6 preview must expose evidence requirement.");
assert.equal(model.providerConfirmationRequired, true, "M6 preview must require provider confirmation.");
assert.equal(model.userApprovalRequired, true, "M6 preview must require user approval.");
assert.equal(model.finalExecutionGateRequired, true, "M6 preview must require final gate.");
assert.equal(model.executionAllowed, false, "M6 visible preview must not execute.");
assert.equal(model.executionAuthority, false, "M6 visible preview must keep executionAuthority false.");
assert.equal(model.providerDispatchAllowed, false, "M6 visible preview must not dispatch.");
assert.equal(model.bookingAllowed, false, "M6 visible preview must not book.");
assert.equal(model.providerHandoffAllowed, false, "M6 visible preview must not hand off providers.");
assert.equal(model.communicationAllowed, false, "M6 visible preview must not allow communication.");
assert.equal(model.externalNavigationAllowed, false, "M6 visible preview must not navigate.");
assert.equal(model.nativeBridgeAllowed, false, "M6 visible preview must not use native bridge.");
assert.equal(model.networkAllowed, false, "M6 visible preview must not use network.");
assert.equal(model.storageWriteAllowed, false, "M6 visible preview must not write storage.");
assert.equal(model.backendWriteAllowed, false, "M6 visible preview must not write backend.");
assert.deepEqual(model.controls, [], "M6 visible preview must not expose controls.");
assert.deepEqual(model.links, [], "M6 visible preview must not expose links.");
assert.deepEqual(model.eventHandlers, [], "M6 visible preview must not expose event handlers.");

model = preview.buildAppointmentServiceRequestPreview(fieldVisit, { enableAppointmentServiceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(model.visible, true, "M6 high but non-restricted local-safe fixture may be review-visible.");
assert.equal(model.riskTier, "high", "M6 high fixture must expose high risk.");
assert.equal(model.executionAllowed, false, "M6 high fixture must not execute.");

model = preview.buildAppointmentServiceRequestPreview(emergency, { enableAppointmentServiceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(model.visible, false, "M6 restricted fixture must remain hidden.");
assert.equal(model.reason, "restricted-risk", "M6 restricted fixture must explain restricted risk.");
assert.equal(model.executionAllowed, false, "M6 restricted fixture must not execute.");

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
].forEach(term => assert(!moduleSource.includes(term), `M6 preview module must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load M6 preview builder.`);
});

const alias = "qa:nexus-sprint-m6-flag-gated-appointment-service-request-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include M6 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-m5-flag-off-appointment-service-regression-qa.js"), "M6 requires M5 QA to remain in qa-suite.");

console.log("[nexus-sprint-m6-flag-gated-appointment-service-request-preview-qa] passed");
