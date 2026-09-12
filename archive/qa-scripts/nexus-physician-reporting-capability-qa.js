const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const reportSource = extractFunction(app, "a100ChronicCareReport");
const cardSource = extractFunction(app, "a100SafeAutonomyCardHtml");
const intentSource = extractFunction(app, "a100SafeAutonomyIntent");

[
  "Report Type",
  "Condition Area",
  "Patient Concern",
  "Current Session Data",
  "Readings Mentioned",
  "Symptoms Mentioned",
  "Medication Questions",
  "RPM/RTM Readiness",
  "Lifestyle / Adherence Barriers",
  "Missing Information",
  "Risk / Safety Flags",
  "Recommended Review Level",
  "Evidence / Source Label",
  "Nexus Safety Boundary"
].forEach(section => assert(reportSource.includes(section), `physician report should include section: ${section}`));

[
  "guideline-backed education",
  "RPM data needed",
  "RTM behavior data needed",
  "Manual/session-only information",
  "insufficient data",
  "Provider review required",
  "Urgent warning guidance"
].forEach(label => assert(reportSource.includes(label), `physician report should include evidence/source label: ${label}`));

[
  'capability: "physician-report-builder"',
  "copyReady: true",
  "localOnly: true",
  "reviewOnly: true",
  "externalTransmission: false",
  "providerReviewRequired: true",
  "noDiagnosis: true",
  "noPrescribing: true",
  "noMedicationAdjustment: true",
  "noProviderContact: true",
  "noExternalShare: true"
].forEach(term => assert(reportSource.includes(term), `report runtime contract should include ${term}`));

[
  "data-a100-report-capability",
  "data-copy-ready",
  "data-local-only",
  "data-review-only",
  "data-external-transmission",
  "data-provider-review-required",
  "data-diagnosis",
  "data-prescribing",
  "data-medication-adjustment",
  "data-provider-contact"
].forEach(attr => assert(cardSource.includes(attr), `report card should render inert runtime attribute ${attr}`));

[
  "Nexus prepared this report for review only",
  "Nexus did not diagnose",
  "prescribe",
  "adjust medication",
  "dispatch emergency services",
  "contact a provider",
  "connect a device",
  "transmit data",
  "store sensitive health data persistently"
].forEach(copy => assert(reportSource.includes(copy), `report safety boundary should include ${copy}`));

assert(intentSource.includes("report: a100ChronicCareReport(reportKind, command)"), "chronic-care prompts should attach physician/care-team reports.");
assert(intentSource.includes("report: a100ChronicCareReport(\"safety\", command)"), "high-risk medical prompts should attach a safety report.");
assert(intentSource.includes("I prepared a session-only physician/care-team report for review"), "assistant response should frame report as review-only.");

[
  "send report",
  "share report",
  "email report",
  "upload report",
  "submit report",
  "dispatch report"
].forEach(forbidden => assert(!reportSource.toLowerCase().includes(forbidden), `report builder must not include external transmission claim: ${forbidden}`));

assert.equal(
  pkg.scripts["qa:nexus-physician-reporting-capability"],
  "node scripts/nexus-physician-reporting-capability-qa.js",
  "package.json should expose physician reporting QA alias"
);

assert(
  qaSuite.includes("scripts/nexus-physician-reporting-capability-qa.js"),
  "qa-suite should include physician reporting QA in safe suites"
);

console.log("[nexus-physician-reporting-capability-qa] passed");
