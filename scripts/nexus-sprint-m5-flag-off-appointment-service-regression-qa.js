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

const docName = "NEXUS_SPRINT_M5_APPOINTMENT_SERVICE_FLAG_OFF_REGRESSION_GUARD.md";
const moduleName = "nexus-appointment-service-preview-flag-guard.js";
const qaName = "nexus-sprint-m5-flag-off-appointment-service-regression-qa.js";

assert(exists("docs", docName), "M5 doc must exist.");
assert(exists("public", moduleName), "M5 flag guard module must exist.");
assert(exists("scripts", qaName), "M5 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "appointment-service-requests.json"));
const mapper = require("../public/nexus-appointment-service-risk-evidence-mapping.js");
const guard = require("../public/nexus-appointment-service-preview-flag-guard.js");

[
  "NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED",
  "default state: `false`",
  "Standard User state: `false`",
  "execution authority: always `false`",
  "does not book appointments",
  "dispatch providers",
  "write backend state",
  "write browser storage",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `M5 doc must include: ${term}`));

assert.equal(guard.APPOINTMENT_SERVICE_PREVIEW_FLAG, "NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED", "M5 flag name must be canonical.");
assert.equal(guard.DEFAULT_APPOINTMENT_SERVICE_PREVIEW_ENABLED, false, "M5 flag must default false.");
assert.equal(typeof guard.resolveAppointmentServicePreviewFlag, "function", "M5 must export flag resolver.");
assert.equal(typeof guard.isAppointmentServicePreviewAllowed, "function", "M5 must export preview guard.");

const agriculture = mapper.mapAppointmentServiceRiskEvidence(fixtures.find(fixture => fixture.fixtureId === "agriculture-support-appointment-request"));
const emergency = mapper.mapAppointmentServiceRiskEvidence(fixtures.find(fixture => fixture.fixtureId === "blocked-emergency-service-request"));

let result = guard.isAppointmentServicePreviewAllowed(agriculture.request, {});
assert.equal(result.previewAllowed, false, "M5 default flag-off must deny preview.");
assert.equal(result.visibleRendererAllowed, false, "M5 default flag-off must deny visible renderer.");
assert.equal(result.executionAllowed, false, "M5 default flag-off must not execute.");

result = guard.isAppointmentServicePreviewAllowed(agriculture.request, { enableAppointmentServiceRequestPreview: true, context: "standard-user" });
assert.equal(result.previewAllowed, false, "M5 Standard User must remain off even if flag is passed without local-safe context.");
assert.equal(result.flag.standardUserEnabled, false, "M5 Standard User flag must remain false.");

result = guard.isAppointmentServicePreviewAllowed(agriculture.request, { enableAppointmentServiceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(result.previewAllowed, true, "M5 local-safe non-restricted fixture may become preview-eligible.");
assert.equal(result.executionAllowed, false, "M5 local-safe fixture still must not execute.");
assert.equal(result.executionAuthority, false, "M5 local-safe fixture must keep executionAuthority false.");
assert.equal(result.providerDispatchAllowed, false, "M5 local-safe fixture must not dispatch.");
assert.equal(result.bookingAllowed, false, "M5 local-safe fixture must not book.");

result = guard.isAppointmentServicePreviewAllowed(emergency.request, { enableAppointmentServiceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(result.previewAllowed, false, "M5 restricted fixtures must remain hidden even with local-safe flag.");
assert.equal(result.executionAllowed, false, "M5 restricted fixtures must not execute.");

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
].forEach(term => assert(!moduleSource.includes(term), `M5 guard must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load M5 guard.`);
  assert(!source.includes("NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED"), `${label} must not enable M5 preview flag.`);
});

const alias = "qa:nexus-sprint-m5-flag-off-appointment-service-regression";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include M5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-m4-provider-time-risk-evidence-mapping-qa.js"), "M5 requires M4 QA to remain in qa-suite.");

console.log("[nexus-sprint-m5-flag-off-appointment-service-regression-qa] passed");
