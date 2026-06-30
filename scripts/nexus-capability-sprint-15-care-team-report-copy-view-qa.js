const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
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

const classifierSource = extractFunction(app, "isNexusCareTeamReportCopyViewCommand");
const handlerSource = extractFunction(app, "handleNexusCareTeamReportCopyViewCaptionCommand");
const audienceSource = extractFunction(app, "resolveNexusCareTeamReportCopyAudience");
const resultSource = extractFunction(app, "createNexusCareTeamReportCopyViewResult");
const renderSource = extractFunction(app, "renderNexusCareTeamReportCopyViewResults");
const queueTypeSource = extractFunction(app, "nexusControlledActionQueueTypeForPlan");
const confirmableSource = extractFunction(app, "isNexusControlledQueueActionLocallyConfirmable");
const performSource = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const queueRenderSource = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "nexusCareTeamReportCopyViewResults",
  "isNexusCareTeamReportCopyViewCommand",
  "handleNexusCareTeamReportCopyViewCaptionCommand",
  "createNexusCareTeamReportCopyViewResult",
  "renderNexusCareTeamReportCopyViewResults",
  "care_team_report_copy_view",
  "nexus-care-team-report-copy-view.v1"
].forEach(term => assert(app.includes(term), `Sprint 15 copy view should include ${term}`));

[
  "copy this for my doctor",
  "prepare report copy",
  "copy care team summary",
  "create CHW handoff note"
].forEach(prompt => {
  const fragment = prompt.split(" ")[0];
  assert(classifierSource.toLowerCase().includes(fragment), `Sprint 15 classifier should cover ${prompt}`);
});

[
  "physician",
  "provider",
  "nurse",
  "coach",
  "community health worker",
  "care team"
].forEach(audience => assert(audienceSource.includes(audience) || resultSource.includes(audience), `Sprint 15 should support ${audience}`));

[
  "review-only",
  "no diagnosis",
  "no medication changes",
  "no external send",
  "no persistent storage",
  "no provider handoff"
].forEach(copy => assert(resultSource.toLowerCase().includes(copy), `Sprint 15 copy text should include ${copy}`));

[
  "data-review-only=\"true\"",
  "data-local-only=\"true\"",
  "data-copy-ready=\"true\"",
  "data-diagnosis-made=\"false\"",
  "data-medication-changed=\"false\"",
  "data-external-send=\"false\"",
  "data-external-share=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-provider-contacted=\"false\"",
  "data-persistent-storage=\"false\"",
  "data-backend-write-occurred=\"false\"",
  "data-external-action-occurred=\"false\"",
  "data-execution-authority=\"false\""
].forEach(attr => assert(renderSource.includes(attr), `Sprint 15 renderer should include ${attr}`));

assert(queueTypeSource.includes("safeCareTeamCopyViewIntent"), "Sprint 15 queue mapper should detect safe copy-view intent.");
assert(queueTypeSource.includes("care_team_report_copy_view"), "Sprint 15 queue mapper should return copy-view action type.");
assert(confirmableSource.includes("\"care_team_report_copy_view\""), "Sprint 15 action should be locally confirmable.");
assert(performSource.includes("createNexusCareTeamReportCopyViewResult"), "Sprint 15 confirmation should create local copy view.");
assert(queueRenderSource.includes("renderNexusCareTeamReportCopyViewResults"), "Sprint 15 queue card should render copy-view results.");
assert(handlerSource.includes("buildNexusAutonomousTaskPlan(command, { category: \"care-team-report-copy-view\" })"), "Sprint 15 handler should create the correct workflow category.");

[
  "send",
  "submit",
  "share",
  "transmit",
  "upload",
  "message",
  "email",
  "whatsapp",
  "telegram",
  "sms",
  "call",
  "contact provider",
  "diagnose",
  "adjust medication",
  "store record"
].forEach(term => assert(classifierSource.includes(term), `Sprint 15 classifier should block ${term}`));

[
  ".nexus-care-team-report-copy-view-results",
  ".nexus-care-team-report-copy-view-label",
  "[data-nexus-care-team-report-copy-view-result]"
].forEach(selector => assert(styles.includes(selector), `Sprint 15 styles should include ${selector}`));

[
  "navigator.clipboard",
  "clipboard.write",
  "window.open",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "writeDb(",
  "dispatchProviderWebhook",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "getUserMedia",
  "requestPermission",
  "sendBeacon"
].forEach(term => {
  assert(!resultSource.includes(term), `Sprint 15 result creation must not introduce ${term}`);
  assert(!renderSource.includes(term), `Sprint 15 renderer must not introduce ${term}`);
  assert(!handlerSource.includes(term), `Sprint 15 handler must not introduce ${term}`);
});

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-15-care-team-report-copy-view"],
  "node scripts/nexus-capability-sprint-15-care-team-report-copy-view-qa.js",
  "package alias should expose Sprint 15 QA."
);

assert(
  qaSuite.includes("scripts/nexus-capability-sprint-15-care-team-report-copy-view-qa.js"),
  "qa-suite should include Sprint 15 QA."
);

console.log("[nexus-capability-sprint-15-care-team-report-copy-view-qa] passed");
