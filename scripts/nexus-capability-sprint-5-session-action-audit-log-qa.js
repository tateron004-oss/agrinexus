const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
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

const sanitizeBody = extractFunction(app, "sanitizeNexusSessionAuditText");
const recordBody = extractFunction(app, "recordNexusSessionActionAuditEvent");
const renderBody = extractFunction(app, "renderNexusSessionActionAuditLog");
const workflowStartBody = extractFunction(app, "startNexusAutonomousWorkflowFromTaskPlan");
const workflowControlBody = extractFunction(app, "handleNexusAutonomousWorkflowControl");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");
const gateControlBody = extractFunction(app, "handleNexusUserConfirmationGateControl");
const queueClickBody = extractFunction(app, "handleNexusControlledActionQueueClick");

[
  "let nexusSessionActionAuditLog = []",
  "nexus-session-action-audit.v1",
  "sanitizeNexusSessionAuditText",
  "recordNexusSessionActionAuditEvent",
  "renderNexusSessionActionAuditLog"
].forEach(term => assert(app.includes(term), `Sprint 5 session audit log must include ${term}`));

[
  "user_request",
  "plan_created",
  "workflow_started",
  "action_queued",
  "confirmation_shown",
  "action_confirmed",
  "action_canceled",
  "action_simulated",
  "action_blocked",
  "safetyReason",
  "createdAt"
].forEach(term => assert(app.includes(term), `Audit event coverage must include ${term}`));

[
  "[email]",
  "[phone]",
  "slice(0, 180)"
].forEach(term => assert(sanitizeBody.includes(term), `Audit sanitizer must include ${term}`));

[
  "storageMode: \"volatile-ui-only\"",
  "externalTransmissionAllowed: false",
  "backendWriteAllowed: false",
  "nexusSessionActionAuditLog = [entry, ...nexusSessionActionAuditLog].slice(0, 25)"
].forEach(term => assert(recordBody.includes(term), `Audit recorder must include ${term}`));

[
  "data-nexus-session-action-audit-log=\"true\"",
  "data-storage-mode=\"volatile-ui-only\"",
  "data-external-transmission=\"false\"",
  "no backend write or external transmission"
].forEach(term => assert(renderBody.includes(term), `Audit renderer must include ${term}`));

[
  "recordNexusSessionActionAuditEvent(\"user_request\"",
  "recordNexusSessionActionAuditEvent(\"plan_created\"",
  "recordNexusSessionActionAuditEvent(\"action_queued\"",
  "recordNexusSessionActionAuditEvent(\"workflow_started\""
].forEach(term => assert(workflowStartBody.includes(term), `Workflow start must record ${term}`));

assert(workflowControlBody.includes("recordNexusSessionActionAuditEvent(\"action_canceled\""), "Workflow cancel must be audited.");
assert(workflowControlBody.includes("recordNexusSessionActionAuditEvent(normalized === \"finish\" ? \"action_confirmed\" : \"workflow_updated\""), "Workflow controls must be audited.");
assert(queueRendererBody.includes("renderNexusSessionActionAuditLog"), "Queue card must expose session audit review surface.");
assert(gateControlBody.includes("action_simulated"), "Confirmation gate must record simulated actions.");
assert(gateControlBody.includes("action_blocked"), "Confirmation gate must record blocked confirmation attempts.");
assert(queueClickBody.includes("confirmation_shown"), "Reviewing a queued action must record confirmation shown.");

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
  "confirmPendingWorkflow",
  "mutate(",
  "request("
].forEach(term => {
  const source = [sanitizeBody, recordBody, renderBody].join("\n");
  assert(!source.includes(term), `Session audit log must not introduce ${term}`);
});

[
  ".nexus-session-action-audit-log",
  ".nexus-session-action-audit-label",
  "[data-nexus-session-action-audit-entry"
].forEach(term => assert(styles.includes(term), `Sprint 5 styling must include ${term}`));

const sandbox = vm.runInNewContext(`
  const htmlSafe = value => String(value == null ? "" : value);
  let nexusSessionActionAuditLog = [];
  ${sanitizeBody}
  ${recordBody}
  ${renderBody}
  ({
    sanitizeNexusSessionAuditText,
    recordNexusSessionActionAuditEvent,
    renderNexusSessionActionAuditLog,
    getLog: () => nexusSessionActionAuditLog
  });
`, {});

const sanitized = sandbox.sanitizeNexusSessionAuditText("Call +1 (555) 123-4567 or test@example.com now");
assert(sanitized.includes("[phone]"), "Audit sanitizer should redact phone-like values.");
assert(sanitized.includes("[email]"), "Audit sanitizer should redact email values.");

const entry = sandbox.recordNexusSessionActionAuditEvent("action_blocked", {
  userRequest: "Call +1 555 123 4567",
  actionType: "blocked_high_risk_action",
  riskLevel: "high",
  providerStatus: "not connected",
  safetyReason: "No calls without final gate.",
  resultStatus: "Blocked locally."
});
assert.equal(entry.schemaVersion, "nexus-session-action-audit.v1", "Audit entry schema should be canonical.");
assert.equal(entry.storageMode, "volatile-ui-only", "Audit entry should be volatile UI-only.");
assert.equal(entry.externalTransmissionAllowed, false, "Audit entry must not allow external transmission.");
assert.equal(entry.backendWriteAllowed, false, "Audit entry must not allow backend writes.");
assert(sandbox.getLog().length === 1, "Audit log should store entry in local memory.");
const html = sandbox.renderNexusSessionActionAuditLog();
assert(html.includes("data-nexus-session-action-audit-log=\"true\""), "Audit log should render safe review surface.");
assert(html.includes("no backend write or external transmission"), "Audit surface should state no external transmission.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-5-session-action-audit-log"],
  "node scripts/nexus-capability-sprint-5-session-action-audit-log-qa.js",
  "package.json must expose Sprint 5 QA alias."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-5-session-action-audit-log-qa.js"),
  "qa-suite.js must include Sprint 5 QA."
);

console.log("[nexus-capability-sprint-5-session-action-audit-log-qa] passed");
