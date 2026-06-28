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

const docName = "NEXUS_SPRINT_M1_APPOINTMENT_SERVICE_REQUEST_PRODUCT_BOUNDARY.md";
assert(exists("docs", docName), "M1 product boundary doc must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "6299131404bf71d1f35bec5c8c69a5e3f44c246a",
  "Sprint L closeout posture",
  "Appointment/service request intent",
  "Request intent",
  "Draft request",
  "Provider handoff",
  "Dispatch",
  "Actual booking",
  "agriculture support request",
  "training/workforce service request",
  "provider consultation request",
  "field visit request",
  "logistics/service coordination request",
  "health service request, caution-only and non-executing",
  "emergency service request, blocked from execution",
  "user-provided service request",
  "serviceRequestId",
  "serviceRequestType",
  "providerIdentityResolutionId",
  "providerDisplayName",
  "requestedServiceCategory",
  "requestedTimeWindow",
  "userProvidedTimePreference",
  "serviceLocationRequirement",
  "communicationIntentRequirement",
  "requestDraft",
  "providerConfirmationRequired",
  "userApprovalRequired",
  "finalExecutionGateRequired",
  "executionAuthority",
  "riskTier",
  "evidenceRequirement",
  "sourcePacketRequirement",
  "blockedExecutionChannels",
  "safeUseNotes",
  "limitations",
  "`providerConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "Sprint K provider identity requirements",
  "Sprint L communication intent requirements",
  "no actual booking",
  "no provider dispatch",
  "no call/message sending",
  "no WhatsApp, SMS, Telegram, in-app, or email sending",
  "no payments, purchases, marketplace transactions",
  "no location sharing, geolocation execution, camera, image capture",
  "no medical, pharmacy, or emergency execution",
  "no backend writes",
  "no real pending actions",
  "Browser validation is required",
  "Rollback Strategy",
  "Sprint M2 Readiness"
], "M1 doc");

const alias = "qa:nexus-sprint-m1-appointment-service-request-product-boundary";
const script = "scripts/nexus-sprint-m1-appointment-service-request-product-boundary-qa.js";
assert(pkg.scripts && pkg.scripts[alias] === `node ${script}`, `${alias} package script must exist.`);
assert(qaSuite.includes(script), "qa-suite must include M1 QA.");

console.log("[nexus-sprint-m1-appointment-service-request-product-boundary-qa] passed");
