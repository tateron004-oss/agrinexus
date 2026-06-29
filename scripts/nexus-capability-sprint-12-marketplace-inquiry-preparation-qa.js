const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

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

const createBody = extractFunction(app, "createNexusMarketplaceInquiryPreparationResult");
const renderBody = extractFunction(app, "renderNexusMarketplaceInquiryPreparationResults");
const captionMatcherBody = extractFunction(app, "isNexusMarketplaceInquiryPreparationCommand");
const captionCommandBody = extractFunction(app, "handleNexusMarketplaceInquiryPreparationCaptionCommand");
const queueTypeBody = extractFunction(app, "nexusControlledActionQueueTypeForPlan");
const localCheckBody = extractFunction(app, "isNexusControlledQueueActionLocallyConfirmable");
const performBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusMarketplaceInquiryPreparationResults = []",
  "nexus-marketplace-inquiry-preparation.v1",
  "MARKETPLACE INQUIRY PREPARATION ONLY",
  "createNexusMarketplaceInquiryPreparationResult",
  "renderNexusMarketplaceInquiryPreparationResults",
  "function isNexusMarketplaceInquiryPreparationCommand",
  "function handleNexusMarketplaceInquiryPreparationCaptionCommand",
  "handleNexusMarketplaceInquiryPreparationCaptionCommand(command)",
  "Marketplace inquiry preparation is ready. Confirming will only create a local AgriTrade review card",
  "data-nexus-marketplace-inquiry-preparation-results=\"true\"",
  "data-inquiry-sent=\"false\"",
  "data-buyer-contacted=\"false\"",
  "data-seller-contacted=\"false\"",
  "data-order-created=\"false\"",
  "data-payment-processed=\"false\"",
  "data-inventory-changed=\"false\"",
  "data-external-marketplace-opened=\"false\"",
  "data-provider-contacted=\"false\"",
  "data-external-action-occurred=\"false\"",
  "data-backend-write-occurred=\"false\"",
  "inquirySent: false",
  "buyerContacted: false",
  "sellerContacted: false",
  "orderCreated: false",
  "paymentProcessed: false",
  "inventoryChanged: false",
  "externalMarketplaceOpened: false",
  "executionAuthority: false"
].forEach(term => assert(app.includes(term), `Sprint 12 marketplace inquiry preparation must include ${term}`));

assert(queueTypeBody.includes("safeMarketplaceInquiryPreparationIntent"), "queue mapper should distinguish safe marketplace inquiry preparation.");
assert(queueTypeBody.indexOf("if (safeMarketplaceInquiryPreparationIntent) return \"marketplace_inquiry_preparation\"") < queueTypeBody.indexOf("if (safeDraftIntent) return \"draft_generation\""), "marketplace inquiry preparation should be handled before generic draft generation.");
assert(localCheckBody.includes("\"marketplace_inquiry_preparation\""), "marketplace inquiry preparation should be locally confirmable.");
assert(performBody.includes("createNexusMarketplaceInquiryPreparationResult"), "confirmed marketplace inquiry preparation should create a local review result.");
assert(queueRendererBody.includes("renderNexusMarketplaceInquiryPreparationResults"), "controlled queue card should render marketplace inquiry results.");
assert(captionCommandBody.includes("buildNexusAutonomousTaskPlan(command, { category: \"marketplace-inquiry-preparation\" })"), "caption command should create a marketplace-inquiry-preparation task plan.");
assert(captionCommandBody.includes("startNexusAutonomousWorkflowFromTaskPlan(plan, { command })"), "caption command should start the existing controlled workflow/queue path.");
assert(jarvisQa.includes("handleNexusMarketplaceInquiryPreparationCaptionCommand"), "Jarvis-style QA should allow the Sprint 12 bridge before handleVoiceCommand.");

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
  const source = [createBody, renderBody, captionMatcherBody, captionCommandBody, queueTypeBody, localCheckBody, performBody].join("\n");
  assert(!source.includes(term), `Marketplace inquiry preparation must not introduce ${term}`);
});

assert(styles.includes(".nexus-marketplace-inquiry-preparation-results"), "Marketplace inquiry result styles should exist.");
assert(styles.includes("[data-nexus-marketplace-inquiry-preparation-result]"), "Marketplace inquiry result item styles should exist.");

const sandbox = vm.runInNewContext(`
  let nexusUserConfirmationGateState = null;
  let nexusMarketplaceInquiryPreparationResults = [];
  function sanitizeNexusSessionAuditText(value = "") {
    return String(value || "")
      .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}/gi, "[email]")
      .replace(/\\+?\\d[\\d\\s().-]{6,}\\d/g, "[phone]")
      .replace(/\\s+/g, " ")
      .trim()
      .slice(0, 180);
  }
  function htmlSafe(value = "") { return String(value || "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\"": "&quot;", "'": "&#39;" }[char])); }
  ${createBody}
  ${renderBody}
  ${captionMatcherBody}
  ${queueTypeBody}
  ${localCheckBody}
  ${performBody}
  ({
    createNexusMarketplaceInquiryPreparationResult,
    renderNexusMarketplaceInquiryPreparationResults,
    isNexusMarketplaceInquiryPreparationCommand,
    nexusControlledActionQueueTypeForPlan,
    isNexusControlledQueueActionLocallyConfirmable,
    performNexusConfirmedLocalQueueAction,
    getResults: () => nexusMarketplaceInquiryPreparationResults
  });
`);

const gate = {
  schemaVersion: "nexus-user-confirmation-gate.v1",
  actionType: "marketplace_inquiry_preparation",
  description: "Prepare AgriTrade buyer inquiry for maize.",
  requiredData: ["Product: maize", "Buyer questions", "Quantity and quality", "Price expectations"],
  riskLevel: "high-review-required",
  providerStatus: "marketplace provider not connected",
  safetyReason: "No buyer/seller contact, order, payment, external marketplace, inventory change, or backend write.",
  locallyConfirmable: true
};
const result = sandbox.createNexusMarketplaceInquiryPreparationResult(gate);
assert.equal(result.schemaVersion, "nexus-marketplace-inquiry-preparation.v1", "marketplace inquiry should use canonical schema.");
assert.equal(result.label, "MARKETPLACE INQUIRY PREPARATION ONLY", "marketplace inquiry should be visibly preparation-only.");
assert.equal(result.marketplaceModule, "AgriTrade", "AgriTrade should remain the marketplace module.");
assert.equal(result.confirmationRequired, true, "marketplace inquiry should require review/confirmation.");
assert.equal(result.inquirySent, false, "marketplace inquiry must not be sent.");
assert.equal(result.buyerContacted, false, "marketplace inquiry must not contact buyers.");
assert.equal(result.sellerContacted, false, "marketplace inquiry must not contact sellers.");
assert.equal(result.orderCreated, false, "marketplace inquiry must not create orders.");
assert.equal(result.paymentProcessed, false, "marketplace inquiry must not process payment.");
assert.equal(result.inventoryChanged, false, "marketplace inquiry must not change inventory.");
assert.equal(result.externalMarketplaceOpened, false, "marketplace inquiry must not open an external marketplace.");
assert.equal(result.providerContacted, false, "marketplace inquiry must not contact providers.");
assert.equal(result.backendWriteOccurred, false, "marketplace inquiry must not write backend data.");
assert.equal(result.externalActionOccurred, false, "marketplace inquiry must not create external action.");
assert.equal(result.executionAuthority, false, "marketplace inquiry must not gain execution authority.");
assert(result.reviewChecklist.length >= 3, "marketplace inquiry should include local review checklist.");

const rendered = sandbox.renderNexusMarketplaceInquiryPreparationResults(sandbox.getResults());
assert(rendered.includes("data-inquiry-sent=\"false\""), "rendered marketplace inquiry should mark no inquiry sent.");
assert(rendered.includes("data-buyer-contacted=\"false\""), "rendered marketplace inquiry should mark no buyer contact.");
assert(rendered.includes("data-seller-contacted=\"false\""), "rendered marketplace inquiry should mark no seller contact.");
assert(rendered.includes("data-order-created=\"false\""), "rendered marketplace inquiry should mark no order.");
assert(rendered.includes("data-payment-processed=\"false\""), "rendered marketplace inquiry should mark no payment.");
assert(rendered.includes("data-external-marketplace-opened=\"false\""), "rendered marketplace inquiry should mark no external marketplace.");
assert(!/<button|<a\\s|<form|<input|<textarea/i.test(rendered), "marketplace inquiry surface must not include execution controls, links, forms, inputs, or textareas.");

assert.equal(sandbox.isNexusMarketplaceInquiryPreparationCommand("Nexus, prepare marketplace inquiry for maize"), true, "prepare marketplace inquiry command should be recognized.");
assert.equal(sandbox.isNexusMarketplaceInquiryPreparationCommand("Nexus, review AgriTrade buyer questions"), true, "review AgriTrade questions command should be recognized.");
assert.equal(sandbox.isNexusMarketplaceInquiryPreparationCommand("Nexus, contact the seller"), false, "seller contact command should not be recognized as safe prep.");
assert.equal(sandbox.isNexusMarketplaceInquiryPreparationCommand("Nexus, buy seeds"), false, "buy command should not be recognized as safe prep.");
assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "marketplace-inquiry-preparation", userIntent: "Nexus, prepare marketplace inquiry for maize", goal: "Prepare AgriTrade buyer questions" }),
  "marketplace_inquiry_preparation",
  "explicit marketplace inquiry preparation should map to marketplace_inquiry_preparation."
);
assert.notEqual(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "marketplace-inquiry-preparation", userIntent: "Nexus, buy maize now", goal: "Complete purchase" }),
  "marketplace_inquiry_preparation",
  "unsafe purchase wording should not map to marketplace inquiry preparation."
);
assert.equal(sandbox.isNexusControlledQueueActionLocallyConfirmable({ actionType: "marketplace_inquiry_preparation" }), true, "marketplace inquiry should be locally confirmable.");
const status = sandbox.performNexusConfirmedLocalQueueAction(gate);
assert(status.includes("Local marketplace inquiry preparation card created for review"), "confirmed marketplace inquiry should create a local card.");
assert(status.includes("did not contact buyers or sellers"), "confirmed marketplace inquiry should state no buyer/seller contact.");
assert(status.includes("process payment"), "confirmed marketplace inquiry should state no payment happened.");
assert(status.includes("write backend data"), "confirmed marketplace inquiry should state no backend write happened.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-12-marketplace-inquiry-preparation"],
  "node scripts/nexus-capability-sprint-12-marketplace-inquiry-preparation-qa.js",
  "package alias should expose Sprint 12 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-12-marketplace-inquiry-preparation-qa.js"),
  "qa-suite should include Sprint 12 marketplace inquiry QA."
);

console.log("[nexus-capability-sprint-12-marketplace-inquiry-preparation-qa] passed");
