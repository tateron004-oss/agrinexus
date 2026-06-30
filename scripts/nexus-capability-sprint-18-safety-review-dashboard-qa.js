const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

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

const buildSource = extractFunction(app, "buildNexusSafetyReviewDashboardState");
const renderSource = extractFunction(app, "renderNexusSafetyReviewDashboard");
const queueRenderSource = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "nexus-safety-review-dashboard.v1",
  "buildNexusSafetyReviewDashboardState",
  "renderNexusSafetyReviewDashboard",
  "safe review mode",
  "No provider handoff, call, message, payment, location, camera, medical, pharmacy, emergency, backend write, or external action"
].forEach(term => assert(app.includes(term), `Sprint 18 safety dashboard should include ${term}`));

[
  "executionAuthority: false",
  "externalExecutionAllowed: false",
  "providerHandoffAuthorized: false",
  "permissionRequestAuthorized: false",
  "backendWriteAllowed: false"
].forEach(term => assert(buildSource.includes(term), `Sprint 18 dashboard state must include ${term}`));

[
  "data-nexus-safety-review-dashboard=\"true\"",
  "data-execution-authority=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-backend-write=\"false\""
].forEach(term => assert(renderSource.includes(term), `Sprint 18 dashboard renderer must include ${term}`));

assert(queueRenderSource.includes("renderNexusSafetyReviewDashboard"), "Controlled queue card should render safety review dashboard.");
assert(queueRenderSource.indexOf("renderNexusSafetyReviewDashboard") < queueRenderSource.indexOf("renderNexusSafeTaskHistory"), "Safety review should render before task history.");

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "XMLHttpRequest",
  "navigator.sendBeacon",
  "navigator.geolocation",
  "getCurrentPosition",
  "mediaDevices",
  "getUserMedia",
  "window.open",
  "location.href",
  "openWorkflowModal",
  "openWorkflowByVoice",
  "maybeDispatchConfirmedNativeCallHandoff",
  "dispatchProviderWebhook",
  "writeDb(",
  "request("
].forEach(term => {
  const source = [buildSource, renderSource].join("\n");
  assert(!source.includes(term), `Safety review dashboard must not introduce ${term}`);
});

[
  ".nexus-safety-review-dashboard",
  ".nexus-safety-review-dashboard-label",
  ".nexus-safety-review-dashboard-grid"
].forEach(term => assert(styles.includes(term), `Sprint 18 styles should include ${term}`));

const sandbox = vm.runInNewContext(`
  const htmlSafe = value => String(value == null ? "" : value);
  let nexusControlledActionQueue = [];
  let nexusSafeTaskHistory = [];
  let nexusSessionActionAuditLog = [];
  ${buildSource}
  ${renderSource}
  ({ buildNexusSafetyReviewDashboardState, renderNexusSafetyReviewDashboard });
`, {});

const state = sandbox.buildNexusSafetyReviewDashboardState({
  queue: [
    { actionType: "local_explanation", queueStatus: "queued_for_review", riskLevel: "low", providerHandoffAuthorized: false, externalExecutionAllowed: false },
    { actionType: "blocked_high_risk_action", queueStatus: "blocked", riskLevel: "high", providerHandoffAuthorized: false, externalExecutionAllowed: false }
  ],
  history: [{ storageMode: "volatile-ui-only" }],
  audit: [{}, {}]
});
assert.equal(state.schemaVersion, "nexus-safety-review-dashboard.v1", "Safety dashboard schema should be canonical.");
assert.equal(state.reviewCount, 1, "Safety dashboard should count review steps.");
assert.equal(state.blockedCount, 1, "Safety dashboard should count blocked steps.");
assert.equal(state.localOnlyCount, 1, "Safety dashboard should count local history.");
assert.equal(state.auditCount, 2, "Safety dashboard should count audit entries.");
assert.equal(state.executionAuthority, false, "Safety dashboard must not grant execution authority.");
assert.equal(state.providerHandoffAuthorized, false, "Safety dashboard must not authorize provider handoff.");
assert.equal(state.backendWriteAllowed, false, "Safety dashboard must not allow backend writes.");
assert.equal(state.status, "safe review mode", "Safety dashboard should default to safe review mode.");
const html = sandbox.renderNexusSafetyReviewDashboard(state);
assert(html.includes("data-nexus-safety-review-dashboard=\"true\""), "Safety dashboard should render review surface.");
assert(html.includes("data-execution-authority=\"false\""), "Safety dashboard should render no-execution attribute.");

assert(/nexus-behavior-\d+/.test(app) && /nexus-behavior-\d+/.test(index) && /nexus-behavior-\d+/.test(server), "Sprint 18 should preserve coordinated web build versioning.");
assert(/agrinexus-pwa-v\d+/.test(app) && /agrinexus-pwa-v\d+/.test(sw) && /agrinexus-pwa-v\d+/.test(server), "Sprint 18 should preserve coordinated PWA cache versioning.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-18-safety-review-dashboard"],
  "node scripts/nexus-capability-sprint-18-safety-review-dashboard-qa.js",
  "package alias should expose Sprint 18 QA."
);

assert(
  qaSuite.includes("scripts/nexus-capability-sprint-18-safety-review-dashboard-qa.js"),
  "qa-suite should include Sprint 18 QA."
);

console.log("[nexus-capability-sprint-18-safety-review-dashboard-qa] passed");
