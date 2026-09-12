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

const docName = "NEXUS_SPRINT_M2_INERT_APPOINTMENT_SERVICE_REQUEST_CONTRACT.md";
const moduleName = "nexus-appointment-service-request-contract.js";
const qaName = "nexus-sprint-m2-inert-appointment-service-request-contract-qa.js";

assert(exists("docs", docName), "M2 doc must exist.");
assert(exists("public", moduleName), "M2 contract module must exist.");
assert(exists("scripts", qaName), "M2 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-appointment-service-request-contract.js");

assertIncludes(doc, [
  "Sprint M2",
  "Inert Appointment/Service Request Contract",
  "appointment-request",
  "service-request",
  "field-visit-request",
  "consultation-request",
  "coordination-request",
  "agriculture-support",
  "training-workforce",
  "provider-consultation",
  "field-visit",
  "logistics-coordination",
  "health-service-caution-only",
  "emergency-service-blocked",
  "`providerConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "booking",
  "provider-dispatch",
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "emergency",
  "medical",
  "pharmacy",
  "backend-write",
  "pending-action",
  "must not mutate DOM",
  "not loaded by `public/index.html`, `public/app.js`, or `server.js`"
], "M2 doc");

assert.equal(typeof contract.isSafeAppointmentServiceRequestIntent, "function", "M2 validator must exist.");
assert.equal(typeof contract.validateAppointmentServiceRequestIntent, "function", "M2 validation details must exist.");
assert.equal(typeof contract.createAppointmentServiceRequestIntent, "function", "M2 creator must exist.");

const valid = contract.createAppointmentServiceRequestIntent({
  serviceRequestId: "service-request-m2-agriculture",
  serviceRequestType: "appointment-request",
  providerIdentityResolutionId: "provider-visible-extension-office",
  providerDisplayName: "County Extension Office",
  requestedServiceCategory: "agriculture-support",
  requestedTimeWindow: "next available weekday morning",
  userProvidedTimePreference: "morning",
  serviceLocationRequirement: "review service area before any visit",
  communicationIntentRequirement: "separate confirmed communication intent required before contact",
  requestDraft: "Request help reviewing crop pest options.",
  riskTier: "medium",
  evidenceRequirement: "visible provider identity, requested time window, user approval, provider confirmation, and audit-ready state",
  sourcePacketRequirement: "source packet required before future booking",
  safeUseNotes: "Review-only request packet.",
  limitations: "Does not book, dispatch, contact, or create pending actions."
});

assert.equal(valid.validation.ok, true, "M2 valid request must validate.");
assert.equal(contract.isSafeAppointmentServiceRequestIntent(valid.request), true, "M2 safe validator must accept valid inert request.");
assert.equal(valid.validation.executionAllowed, false, "M2 validation must never allow execution.");
assert.equal(valid.request.providerConfirmationRequired, true, "M2 must require provider confirmation.");
assert.equal(valid.request.userApprovalRequired, true, "M2 must require user approval.");
assert.equal(valid.request.finalExecutionGateRequired, true, "M2 must require final execution gate.");
assert.equal(valid.request.executionAuthority, false, "M2 must preserve executionAuthority false.");

const invalid = Object.assign({}, valid.request, { executionAuthority: true });
assert.equal(contract.isSafeAppointmentServiceRequestIntent(invalid), false, "M2 must reject execution authority.");

contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
  assert(valid.request.blockedExecutionChannels.includes(channel), `M2 valid request must block ${channel}.`);
});

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
  "appendFile",
  "addEventListener",
  "createElement",
  "innerHTML"
].forEach(term => assert(!moduleSource.includes(term), `M2 module must not include runtime side-effect or DOM API: ${term}`));

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the M2 module.`);
});

const alias = "qa:nexus-sprint-m2-inert-appointment-service-request-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include M2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-m1-appointment-service-request-product-boundary-qa.js"), "M2 requires M1 QA to remain in qa-suite.");

console.log("[nexus-sprint-m2-inert-appointment-service-request-contract-qa] passed");
