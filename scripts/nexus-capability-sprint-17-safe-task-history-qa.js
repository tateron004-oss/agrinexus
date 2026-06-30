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

const sanitizeSource = extractFunction(app, "sanitizeNexusSessionAuditText");
const recordSource = extractFunction(app, "recordNexusSessionActionAuditEvent");
const createSource = extractFunction(app, "createNexusSafeTaskHistoryEntry");
const renderSource = extractFunction(app, "renderNexusSafeTaskHistory");
const queueRenderSource = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusSafeTaskHistory = []",
  "nexus-safe-task-history.v1",
  "createNexusSafeTaskHistoryEntry",
  "renderNexusSafeTaskHistory",
  "session-only review history"
].forEach(term => assert(app.includes(term), `Sprint 17 safe task history should include ${term}`));

[
  "storageMode: \"volatile-ui-only\"",
  "externalTransmissionAllowed: false",
  "backendWriteAllowed: false",
  "executionAuthority: false",
  "providerHandoffAuthorized: false"
].forEach(term => assert(createSource.includes(term), `Sprint 17 history entry should include ${term}`));

[
  "nexusSafeTaskHistory = [taskHistoryEntry, ...nexusSafeTaskHistory].slice(0, 12)",
  "createNexusSafeTaskHistoryEntry(type, details, entry)"
].forEach(term => assert(recordSource.includes(term), `Sprint 17 recorder should derive safe task history with ${term}`));

[
  "data-nexus-safe-task-history=\"true\"",
  "data-storage-mode=\"volatile-ui-only\"",
  "data-execution-authority=\"false\"",
  "data-external-transmission=\"false\"",
  "no backend write, provider handoff, permission request, or external action"
].forEach(term => assert(renderSource.includes(term), `Sprint 17 renderer should include ${term}`));

assert(queueRenderSource.includes("renderNexusSafeTaskHistory"), "Controlled action queue should render safe task history.");
assert(queueRenderSource.indexOf("renderNexusSafeTaskHistory") < queueRenderSource.indexOf("renderNexusSessionActionAuditLog"), "Safe task history should sit beside the session audit log.");

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
  const source = [createSource, renderSource].join("\n");
  assert(!source.includes(term), `Safe task history must not introduce ${term}`);
});

[
  ".nexus-safe-task-history",
  ".nexus-safe-task-history-label",
  "[data-nexus-safe-task-history-entry]"
].forEach(term => assert(styles.includes(term), `Sprint 17 styling should include ${term}`));

const sandbox = vm.runInNewContext(`
  const htmlSafe = value => String(value == null ? "" : value);
  let nexusSessionActionAuditLog = [];
  let nexusSafeTaskHistory = [];
  ${sanitizeSource}
  ${createSource}
  ${recordSource}
  ${renderSource}
  ({
    recordNexusSessionActionAuditEvent,
    renderNexusSafeTaskHistory,
    getHistory: () => nexusSafeTaskHistory
  });
`, { Date, Math });

const entry = sandbox.recordNexusSessionActionAuditEvent("workflow_started", {
  userRequest: "Nexus, prepare a job plan",
  actionType: "local_preparation",
  riskLevel: "low",
  resultStatus: "Workflow started locally."
});
assert(entry, "Recording audit event should still return audit entry.");
const history = sandbox.getHistory();
assert.equal(history.length, 1, "Safe task history should capture audit-derived entry.");
assert.equal(history[0].schemaVersion, "nexus-safe-task-history.v1", "Safe task history schema should be canonical.");
assert.equal(history[0].storageMode, "volatile-ui-only", "Safe task history should be volatile only.");
assert.equal(history[0].externalTransmissionAllowed, false, "Safe task history must not allow external transmission.");
assert.equal(history[0].backendWriteAllowed, false, "Safe task history must not allow backend writes.");
assert.equal(history[0].executionAuthority, false, "Safe task history must not grant execution authority.");
assert.equal(history[0].providerHandoffAuthorized, false, "Safe task history must not authorize provider handoff.");
const html = sandbox.renderNexusSafeTaskHistory();
assert(html.includes("data-nexus-safe-task-history=\"true\""), "Safe task history should render review-only surface.");
assert(html.includes("no backend write, provider handoff, permission request, or external action"), "Safe task history should display no-execution copy.");

assert(/nexus-behavior-\d+/.test(app) && /nexus-behavior-\d+/.test(index) && /nexus-behavior-\d+/.test(server), "Sprint 17 should preserve coordinated web build versioning.");
assert(/agrinexus-pwa-v\d+/.test(app) && /agrinexus-pwa-v\d+/.test(sw) && /agrinexus-pwa-v\d+/.test(server), "Sprint 17 should preserve coordinated PWA cache versioning.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-17-safe-task-history"],
  "node scripts/nexus-capability-sprint-17-safe-task-history-qa.js",
  "package alias should expose Sprint 17 QA."
);

assert(
  qaSuite.includes("scripts/nexus-capability-sprint-17-safe-task-history-qa.js"),
  "qa-suite should include Sprint 17 QA."
);

console.log("[nexus-capability-sprint-17-safe-task-history-qa] passed");
