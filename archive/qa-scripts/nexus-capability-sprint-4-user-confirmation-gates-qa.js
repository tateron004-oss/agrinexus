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

const localCheckBody = extractFunction(app, "isNexusControlledQueueActionLocallyConfirmable");
const gateBuilderBody = extractFunction(app, "buildNexusUserConfirmationGateFromQueueAction");
const gateRendererBody = extractFunction(app, "renderNexusUserConfirmationGate");
const localActionBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const internalNavigationBody = extractFunction(app, "executeNexusConfirmedInternalNavigation");
const gateControlBody = extractFunction(app, "handleNexusUserConfirmationGateControl");
const clickBody = extractFunction(app, "handleNexusControlledActionQueueClick");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");
const clearBody = extractFunction(app, "clearControlledActionPreview");
const syncBody = extractFunction(app, "syncNexusControlledActionQueueFromWorkflow");
const bindBody = extractFunction(app, "bindStatic");

[
  "let nexusUserConfirmationGateState = null",
  "nexus-user-confirmation-gate.v1",
  "buildNexusUserConfirmationGateFromQueueAction",
  "renderNexusUserConfirmationGate",
  "performNexusConfirmedLocalQueueAction",
  "handleNexusUserConfirmationGateControl",
  "handleNexusControlledActionQueueClick"
].forEach(term => assert(app.includes(term), `Sprint 4 confirmation gates must include ${term}`));

[
  "internal_navigation",
  "draft_generation",
  "report_generation",
  "simulated_provider_action"
].forEach(type => assert(localCheckBody.includes(type), `Local confirmable list must include ${type}`));

[
  "actionType",
  "description",
  "requiredData",
  "riskLevel",
  "confirmationRequired",
  "providerStatus",
  "safetyReason",
  "locallyConfirmable",
  "executionAuthority: false",
  "externalExecutionAllowed: false",
  "providerHandoffAuthorized: false"
].forEach(term => assert(gateBuilderBody.includes(term), `Gate model must include ${term}`));

[
  "What Nexus will do",
  "Data used",
  "Risk",
  "Provider status",
  "Safety note",
  "Confirm local step",
  "Cancel",
  "data-execution-authority=\"false\"",
  "data-provider-handoff=\"false\""
].forEach(term => assert(gateRendererBody.includes(term), `Gate renderer must include ${term}`));

assert(
  localActionBody.includes("executeNexusConfirmedInternalNavigation")
    && internalNavigationBody.includes("No external route"),
  "Local confirmation outcome must route internal navigation through the safe executor and state no external route."
);
assert(localActionBody.includes("createNexusLocalDraftMessageResult"), "Local confirmation outcome must route draft generation through the safe local draft generator.");
[
  "did not send",
  "contact a provider",
  "write backend data",
  "did not write records or contact a provider",
  "did not contact a real provider"
].forEach(term => assert(localActionBody.includes(term), `Local confirmation outcome must include ${term}`));

[
  "fetch(",
  "XMLHttpRequest",
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
  const source = [gateBuilderBody, gateRendererBody, localActionBody, gateControlBody, clickBody].join("\n");
  assert(!source.includes(term), `User confirmation gates must not introduce ${term}`);
});

assert(queueRendererBody.includes("data-nexus-controlled-action-queue-review"), "Queue renderer must expose review controls.");
assert(queueRendererBody.includes("renderNexusUserConfirmationGate"), "Queue renderer must render confirmation gate.");
assert(clearBody.includes("nexusUserConfirmationGateState = null"), "Preview clear must clear confirmation gate state.");
assert(syncBody.includes("nexusUserConfirmationGateState = null"), "Queue sync must reset stale confirmation gate state.");
assert(bindBody.includes("handleNexusControlledActionQueueClick"), "Central click binding must handle queue confirmation gates.");

[
  ".nexus-user-confirmation-gate",
  ".nexus-user-confirmation-gate-label",
  ".nexus-user-confirmation-gate-actions",
  "[data-nexus-controlled-action-queue-review]"
].forEach(term => assert(styles.includes(term), `Sprint 4 styling must include ${term}`));

const sandbox = vm.runInNewContext(`
  const htmlSafe = value => String(value == null ? "" : value);
  let nexusUserConfirmationGateState = null;
  let nexusControlledActionQueue = [];
  function paintNexusControlledActionQueue() {}
  function recordNexusSessionActionAuditEvent() { return null; }
  function createNexusLocalDraftMessageResult() {
    return {
      draftType: "marketplace inquiry",
      messageSent: false,
      providerContacted: false,
      backendWriteOccurred: false,
      executionAuthority: false
    };
  }
  ${localCheckBody}
  ${gateBuilderBody}
  ${gateRendererBody}
  ${localActionBody}
  ${gateControlBody}
  ({
    isNexusControlledQueueActionLocallyConfirmable,
    buildNexusUserConfirmationGateFromQueueAction,
    renderNexusUserConfirmationGate,
    performNexusConfirmedLocalQueueAction,
    handleNexusUserConfirmationGateControl,
    setGate: gate => { nexusUserConfirmationGateState = gate; },
    getGate: () => nexusUserConfirmationGateState
  });
`, {});

const draftGate = sandbox.buildNexusUserConfirmationGateFromQueueAction({
  actionType: "draft_generation",
  description: "Prepare a local marketplace draft.",
  requiredData: ["crop", "quantity"],
  riskLevel: "low",
  confirmationRequired: true,
  providerStatus: "not required",
  safetyReason: "Local draft only.",
  queueStatus: "queued_for_review"
}, 1);
assert.equal(draftGate.locallyConfirmable, true, "Draft generation should be locally confirmable.");
assert.equal(draftGate.executionAuthority, false, "Confirmable gate must still have no execution authority.");
assert.equal(draftGate.providerHandoffAuthorized, false, "Confirmable gate must not authorize provider handoff.");
assert(sandbox.renderNexusUserConfirmationGate(draftGate).includes("Confirm local step"), "Gate should render confirm control.");
assert(sandbox.performNexusConfirmedLocalQueueAction(draftGate).includes("did not send"), "Draft confirm outcome must remain local-only.");

const blockedGate = sandbox.buildNexusUserConfirmationGateFromQueueAction({
  actionType: "provider_ready_action",
  description: "Prepare provider handoff.",
  requiredData: ["provider"],
  riskLevel: "medium",
  confirmationRequired: true,
  providerStatus: "provider required",
  safetyReason: "Provider connector not active.",
  queueStatus: "queued_for_review"
}, 2);
assert.equal(blockedGate.locallyConfirmable, false, "Provider-ready actions must not be locally confirmable.");
assert(sandbox.renderNexusUserConfirmationGate(blockedGate).includes("disabled"), "Blocked gate confirm control should be disabled.");
assert(sandbox.performNexusConfirmedLocalQueueAction(blockedGate).includes("requires a final execution gate"), "Blocked confirm attempt must stay blocked.");

sandbox.setGate(draftGate);
assert.equal(sandbox.handleNexusUserConfirmationGateControl("confirm"), true, "Confirm control should be handled.");
assert(sandbox.getGate().status.includes("draft prepared for review"), "Confirming draft should create local-only status.");
sandbox.setGate(draftGate);
assert.equal(sandbox.handleNexusUserConfirmationGateControl("cancel"), true, "Cancel control should be handled.");
assert(sandbox.getGate().status.includes("Cancelled"), "Cancel should record no-action status.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-4-user-confirmation-gates"],
  "node scripts/nexus-capability-sprint-4-user-confirmation-gates-qa.js",
  "package.json must expose Sprint 4 QA alias."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-4-user-confirmation-gates-qa.js"),
  "qa-suite.js must include Sprint 4 QA."
);

console.log("[nexus-capability-sprint-4-user-confirmation-gates-qa] passed");
