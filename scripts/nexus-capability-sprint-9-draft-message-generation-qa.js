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

const classifyBody = extractFunction(app, "classifyNexusLocalDraftMessageType");
const createBody = extractFunction(app, "createNexusLocalDraftMessageResult");
const renderBody = extractFunction(app, "renderNexusLocalDraftMessageResults");
const captionMatcherBody = extractFunction(app, "isNexusLocalDraftMessageCommand");
const captionCommandBody = extractFunction(app, "handleNexusLocalDraftMessageCaptionCommand");
const queueTypeBody = extractFunction(app, "nexusControlledActionQueueTypeForPlan");
const performBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusLocalDraftMessageResults = []",
  "nexus-local-draft-message.v1",
  "LOCAL DRAFT ONLY",
  "classifyNexusLocalDraftMessageType",
  "createNexusLocalDraftMessageResult",
  "renderNexusLocalDraftMessageResults",
  "function isNexusLocalDraftMessageCommand",
  "function handleNexusLocalDraftMessageCaptionCommand",
  "handleNexusLocalDraftMessageCaptionCommand(command)",
  "Draft review prepared. Confirming will only create a local editable draft.",
  "data-nexus-local-draft-message-results=\"true\"",
  "data-message-sent=\"false\"",
  "data-provider-contacted=\"false\"",
  "data-external-action-occurred=\"false\"",
  "data-backend-write-occurred=\"false\"",
  "data-nexus-local-draft-message-text=\"true\"",
  "editableLocally: true",
  "messageSent: false",
  "providerContacted: false",
  "backendWriteOccurred: false",
  "executionAuthority: false"
].forEach(term => assert(app.includes(term), `Sprint 9 draft generation must include ${term}`));

[
  "farmer outreach",
  "training inquiry",
  "job/workforce inquiry",
  "marketplace inquiry",
  "care-team note",
  "provider question"
].forEach(term => assert(app.includes(term), `Sprint 9 should support ${term} drafts.`));

assert(queueTypeBody.includes("safeDraftIntent"), "queue type mapper should distinguish explicit draft/prepare intent.");
assert(queueTypeBody.indexOf("if (safeDraftIntent) return \"draft_generation\"") < queueTypeBody.indexOf("blocked_high_risk_action"), "safe draft intent should be handled before raw message blocking.");
assert(app.includes("Prepare local draft for review: ${taskPlan.userIntent"), "draft queue descriptions should preserve the original user intent.");
assert(performBody.includes("createNexusLocalDraftMessageResult"), "confirmed draft_generation should create a local draft result.");
assert(queueRendererBody.includes("renderNexusLocalDraftMessageResults"), "controlled queue card should render local draft results.");
assert(captionCommandBody.includes("buildNexusAutonomousTaskPlan(command, { category: \"message-call-preparation\" })"), "caption command should create a message/call preparation task plan.");
assert(captionCommandBody.includes("startNexusAutonomousWorkflowFromTaskPlan(plan, { command })"), "caption command should start the existing controlled workflow/queue path.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
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
  const source = [classifyBody, createBody, renderBody, captionMatcherBody, captionCommandBody, queueTypeBody, performBody].join("\n");
  assert(!source.includes(term), `Draft generation must not introduce ${term}`);
});

assert(styles.includes(".nexus-local-draft-message-results"), "Draft result styles should exist.");
assert(styles.includes("[data-nexus-local-draft-message-result]"), "Draft result item styles should exist.");
assert(styles.includes(".nexus-local-draft-message-results textarea"), "Draft textarea styles should exist.");

const sandbox = vm.runInNewContext(`
  let nexusUserConfirmationGateState = null;
  let nexusLocalDraftMessageResults = [];
  function sanitizeNexusSessionAuditText(value = "") {
    return String(value || "")
      .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}/gi, "[email]")
      .replace(/\\+?\\d[\\d\\s().-]{6,}\\d/g, "[phone]")
      .replace(/\\s+/g, " ")
      .trim()
      .slice(0, 180);
  }
  function htmlSafe(value = "") { return String(value || "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\"": "&quot;", "'": "&#39;" }[char])); }
  ${classifyBody}
  ${createBody}
  ${renderBody}
  ${captionMatcherBody}
  ${queueTypeBody}
  ${performBody}
  ({
    classifyNexusLocalDraftMessageType,
    createNexusLocalDraftMessageResult,
    renderNexusLocalDraftMessageResults,
    isNexusLocalDraftMessageCommand,
    nexusControlledActionQueueTypeForPlan,
    performNexusConfirmedLocalQueueAction,
    getDrafts: () => nexusLocalDraftMessageResults
  });
`);

const cases = [
  {
    gate: { actionType: "draft_generation", description: "Prepare farmer outreach for crop issues", requiredData: ["crop"], providerStatus: "not required", safetyReason: "No send.", locallyConfirmable: true },
    type: "farmer outreach"
  },
  {
    gate: { actionType: "draft_generation", description: "Prepare training inquiry for irrigation course", requiredData: ["program"], providerStatus: "not required", safetyReason: "No send.", locallyConfirmable: true },
    type: "training inquiry"
  },
  {
    gate: { actionType: "draft_generation", description: "Prepare workforce job inquiry", requiredData: ["role"], providerStatus: "not required", safetyReason: "No send.", locallyConfirmable: true },
    type: "job/workforce inquiry"
  },
  {
    gate: { actionType: "draft_generation", description: "Prepare AgriTrade buyer marketplace inquiry", requiredData: ["product"], providerStatus: "not required", safetyReason: "No sell.", locallyConfirmable: true },
    type: "marketplace inquiry"
  },
  {
    gate: { actionType: "draft_generation", description: "Prepare care-team physician provider question", requiredData: ["concern"], providerStatus: "not connected", safetyReason: "No provider contact.", locallyConfirmable: true },
    type: "care-team note"
  }
];

cases.forEach(({ gate, type }) => {
  assert.equal(sandbox.classifyNexusLocalDraftMessageType(gate), type, `${type} should classify correctly.`);
  const result = sandbox.createNexusLocalDraftMessageResult(gate);
  assert.equal(result.schemaVersion, "nexus-local-draft-message.v1", "draft result should use canonical schema.");
  assert.equal(result.label, "LOCAL DRAFT ONLY", "draft should be visibly local-only.");
  assert.equal(result.draftType, type, `draft type should be ${type}.`);
  assert.equal(result.editableLocally, true, "drafts should be locally editable/reviewable.");
  assert.equal(result.messageSent, false, "draft generation must not send messages.");
  assert.equal(result.providerContacted, false, "draft generation must not contact providers.");
  assert.equal(result.externalActionOccurred, false, "draft generation must not create external actions.");
  assert.equal(result.backendWriteOccurred, false, "draft generation must not write backend data.");
  assert.equal(result.executionAuthority, false, "draft generation must not gain execution authority.");
  assert(result.content.length > 40, "draft content should be useful enough to review.");
});

const rendered = sandbox.renderNexusLocalDraftMessageResults(sandbox.getDrafts());
assert(rendered.includes("data-message-sent=\"false\""), "rendered draft should mark message not sent.");
assert(rendered.includes("data-provider-contacted=\"false\""), "rendered draft should mark provider not contacted.");
assert(rendered.includes("data-backend-write-occurred=\"false\""), "rendered draft should mark no backend write.");
assert(rendered.includes("<textarea"), "rendered draft should include copy-ready/editable text.");
assert(!/<button|<a\\s|<form|<input/i.test(rendered), "rendered draft surface must not include send controls, links, forms, or inputs.");

assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "general", userIntent: "Nexus, draft a message to the training program", goal: "Prepare a draft" }),
  "draft_generation",
  "explicit draft message intent should map to draft_generation."
);
assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "general", userIntent: "Nexus, send a message to the seller", goal: "Send a message" }),
  "blocked_high_risk_action",
  "send message intent should remain blocked."
);
assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "general", userIntent: "Nexus, call the provider", goal: "Call provider" }),
  "blocked_high_risk_action",
  "call intent should remain blocked."
);
assert.equal(sandbox.isNexusLocalDraftMessageCommand("Nexus, draft a message to the training program"), true, "draft message command should be recognized.");
assert.equal(sandbox.isNexusLocalDraftMessageCommand("Nexus, prepare a provider question"), true, "provider question draft command should be recognized.");
assert.equal(sandbox.isNexusLocalDraftMessageCommand("Nexus, send a message to the seller"), false, "send message command should not be recognized as local draft.");
assert.equal(sandbox.isNexusLocalDraftMessageCommand("Nexus, call the provider"), false, "call command should not be recognized as local draft.");
assert.equal(
  sandbox.classifyNexusLocalDraftMessageType({
    actionType: "draft_generation",
    description: "Prepare local draft for review: Nexus, draft a message to the training program",
    requiredData: ["Recipient", "Purpose"],
    providerStatus: "provider requirement: not connected",
    safetyReason: "No provider handoff and no provider contact."
  }),
  "training inquiry",
  "training draft classification should use the original user intent instead of provider safety boilerplate."
);

const status = sandbox.performNexusConfirmedLocalQueueAction({
  schemaVersion: "nexus-user-confirmation-gate.v1",
  actionType: "draft_generation",
  description: "Prepare marketplace buyer question",
  requiredData: ["product"],
  riskLevel: "low",
  providerStatus: "not connected / not required",
  safetyReason: "No sending, buying, selling, or payment.",
  locallyConfirmable: true
});
assert(status.includes("Local marketplace inquiry draft prepared for review"), "confirming a draft action should report local draft preparation.");
assert(status.includes("did not send"), "draft confirmation status should explicitly say no send happened.");
assert(status.includes("write backend data"), "draft confirmation status should explicitly say no backend write happened.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-9-draft-message-generation"],
  "node scripts/nexus-capability-sprint-9-draft-message-generation-qa.js",
  "package alias should expose Sprint 9 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-9-draft-message-generation-qa.js"),
  "qa-suite should include Sprint 9 draft message generation QA."
);

console.log("[nexus-capability-sprint-9-draft-message-generation-qa] passed");
