const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const jarvisQa = fs.readFileSync(path.join(root, "scripts", "nexus-jarvis-style-standard-user-experience-qa.js"), "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
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

const reportModelBody = extractFunction(app, "a100ChronicCareReport");
const createBody = extractFunction(app, "createNexusChronicCarePhysicianReportResult");
const renderBody = extractFunction(app, "renderNexusChronicCarePhysicianReportResults");
const matcherBody = extractFunction(app, "isNexusChronicCarePhysicianReportCommand");
const captionBody = extractFunction(app, "handleNexusChronicCarePhysicianReportCaptionCommand");
const queueTypeBody = extractFunction(app, "nexusControlledActionQueueTypeForPlan");
const localCheckBody = extractFunction(app, "isNexusControlledQueueActionLocallyConfirmable");
const performBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusChronicCarePhysicianReportResults = []",
  "nexus-chronic-care-physician-report.v1",
  "PHYSICIAN / CARE-TEAM REPORT FOR REVIEW ONLY",
  "function isNexusChronicCarePhysicianReportCommand",
  "function handleNexusChronicCarePhysicianReportCaptionCommand",
  "handleNexusChronicCarePhysicianReportCaptionCommand(command)",
  "chronic_care_report_generation",
  "Chronic-care report preparation is ready",
  "data-nexus-chronic-care-physician-report-results=\"true\"",
  "data-review-only=\"true\"",
  "data-local-only=\"true\"",
  "data-provider-handoff=\"false\"",
  "data-provider-contacted=\"false\"",
  "data-external-transmission=\"false\"",
  "data-diagnosis-made=\"false\"",
  "data-prescribed-medication=\"false\"",
  "data-medication-adjusted=\"false\"",
  "data-emergency-dispatched=\"false\"",
  "data-device-connected=\"false\"",
  "data-sensitive-health-data-persisted=\"false\"",
  "data-backend-write-occurred=\"false\""
].forEach(term => assert(app.includes(term), `Sprint 13 report builder must include ${term}`));

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
].forEach(section => {
  assert(reportModelBody.includes(section), `base report model should include ${section}`);
  assert(renderBody.includes(section), `rendered report card should include ${section}`);
});

[
  "diabetes",
  "hypertension",
  "wellness",
  "rpm",
  "telehealth",
  "chw",
  "care-team-summary"
].forEach(kind => assert(app.includes(kind), `report kind should remain supported: ${kind}`));

[
  "Education / self-management support",
  "Coach or community health worker review",
  "Nurse review",
  "Physician/provider review",
  "Urgent/emergency care guidance"
].forEach(level => assert(reportModelBody.includes(level), `review level should exist: ${level}`));

[
  "General chronic-care education",
  "RPM data needed",
  "RTM behavior data needed",
  "Manual/session-only information",
  "Insufficient data",
  "Provider review required",
  "Urgent warning guidance"
].forEach(label => assert(reportModelBody.includes(label), `evidence/source label should exist: ${label}`));

const requiredDisclaimer = "Nexus prepared this report for review only. Nexus did not diagnose, prescribe, adjust medication, dispatch emergency services, contact a provider, connect a device, transmit data, or store sensitive health data persistently.";
assert(app.includes(requiredDisclaimer), "required Sprint 13 report safety disclaimer should be present.");

assert(queueTypeBody.includes("safeChronicCareReportIntent"), "queue mapper should distinguish safe chronic-care report intent.");
assert(queueTypeBody.includes("return \"chronic_care_report_generation\""), "queue mapper should return chronic_care_report_generation.");
assert(localCheckBody.includes("\"chronic_care_report_generation\""), "chronic-care reports should be locally confirmable.");
assert(performBody.includes("createNexusChronicCarePhysicianReportResult"), "confirmed chronic-care report should create a local report result.");
assert(queueRendererBody.includes("renderNexusChronicCarePhysicianReportResults"), "controlled queue should render chronic-care reports.");
assert(captionBody.includes("buildNexusAutonomousTaskPlan(command, { category: \"chronic-care-reporting\" })"), "caption bridge should use chronic-care-reporting category.");
assert(jarvisQa.includes("handleNexusChronicCarePhysicianReportCaptionCommand"), "Jarvis-style QA should recognize Sprint 13 bridge.");

[
  "prepare a physician report",
  "summarize for my doctor",
  "create a clinical summary",
  "prepare care team report",
  "summarize this for the nurse",
  "summarize this for the community health worker",
  "what data supports this",
  "what is missing",
  "what should the doctor review",
  "blood pressure",
  "blood sugar",
  "diabetes"
].forEach(promptTerm => {
  assert(`${matcherBody}\n${app}`.toLowerCase().includes(promptTerm), `prompt routing should include: ${promptTerm}`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "navigator.permissions",
  "getUserMedia",
  "window.open",
  "location.href",
  ".click()",
  "ACTION_CALL",
  "ACTION_DIAL",
  "tel:",
  "sms:",
  "mailto:",
  "wa.me",
  "api.whatsapp",
  "t.me/",
  "telegram.org",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "mutate(",
  "request("
].forEach(term => {
  const source = [createBody, renderBody, matcherBody, captionBody, queueTypeBody, localCheckBody, performBody].join("\n");
  assert(!source.includes(term), `Sprint 13 report lane must not introduce ${term}`);
});

assert(styles.includes(".nexus-chronic-care-physician-report-results"), "Sprint 13 report styles should exist.");
assert(styles.includes("[data-nexus-chronic-care-physician-report-result]"), "Sprint 13 report item styles should exist.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-13-chronic-care-physician-report-builder"],
  "node scripts/nexus-capability-sprint-13-chronic-care-physician-report-builder-qa.js",
  "package alias should expose Sprint 13 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-13-chronic-care-physician-report-builder-qa.js"),
  "qa-suite should include Sprint 13 QA."
);

console.log("[nexus-capability-sprint-13-chronic-care-physician-report-builder-qa] passed");
