const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-approval-center-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  confirmationDoc: path.join(root, "docs", "NEXUS_UNIFIED_CONFIRMATION_UI_ARCHITECTURE.md"),
  confirmationQa: path.join(root, "scripts", "nexus-confirmation-ui-contract-qa.js"),
  controlledConfirmationQa: path.join(root, "scripts", "nexus-controlled-action-confirmation-readiness-qa.js"),
  auditRuntimeContract: path.join(root, "public", "nexus-audit-log-runtime-contract.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-approval-center-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const contract = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const confirmationDoc = read(paths.confirmationDoc);
const confirmationQa = read(paths.confirmationQa);
const controlledConfirmationQa = read(paths.controlledConfirmationQa);
const auditRuntimeContract = read(paths.auditRuntimeContract);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "approval_ui_required",
  "pending_action_source_required",
  "risk_policy_required",
  "confirmation_policy_required",
  "audit_policy_required",
  "consent_policy_required",
  "role_policy_required",
  "sandbox_testing_required",
  "approved_not_live",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "low_risk_review_option",
  "medium_risk_workflow_staging",
  "high_risk_provider_contact",
  "high_risk_communication",
  "high_risk_payment",
  "sensitive_location",
  "sensitive_health",
  "restricted_emergency",
  "restricted_identity",
  "restricted_marketplace_transaction",
  "restricted_approval_boundary"
];
const fields = [
  "approvalCenterId",
  "sourceOwner",
  "approvalStatus",
  "pendingActionCategories",
  "supportedSurfaces",
  "supportedLanguages",
  "riskPolicyStatus",
  "confirmationPolicyStatus",
  "auditPolicyStatus",
  "consentPolicyStatus",
  "rolePolicyStatus",
  "freshnessModel",
  "allowedResponseStates",
  "approvalReviewGate",
  "confirmationLanguageGate",
  "approvalRecordSchema",
  "auditRequirements",
  "approvalUiEnabled",
  "pendingActionStoreEnabled",
  "runtimeApprovalAuthorityEnabled",
  "providerExecutionEnabled",
  "paymentExecutionEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "approvalUiEnabled",
  "pendingActionStoreEnabled",
  "runtimeApprovalAuthorityEnabled",
  "approvalPersistenceEnabled",
  "approvalExportEnabled",
  "providerExecutionEnabled",
  "callExecutionEnabled",
  "messageExecutionEnabled",
  "paymentExecutionEnabled",
  "healthActionEnabled",
  "medicalRecordAccessEnabled",
  "locationSharingEnabled",
  "marketplaceTransactionEnabled",
  "emergencyDispatchEnabled",
  "accountMutationEnabled",
  "externalNavigationEnabled",
  "liveActionEnabled",
  "actionApproved",
  "actionRejected",
  "actionExecuted",
  "providerContacted",
  "callPlaced",
  "messageSent",
  "paymentExecuted",
  "healthActionPerformed",
  "medicalRecordAccessed",
  "locationShared",
  "marketplaceTransactionCompleted",
  "emergencyDispatched",
  "accountMutated",
  "externalActionExecuted"
];

assert(roadmap.includes("| Phase 49 | Approval center | Review pending actions | approval UI | future | high | action planner | explicit approval | approval QA | no vague confirmation |"), "Nexus 100 roadmap must include the Phase 49 approval center row.");

[
  "High-risk actions require explicit confirmation",
  "Vague acknowledgments such as `okay` must not confirm high-risk execution",
  "Cancel must always be visible",
  "Confirmation must be auditable",
  "Rendering a preview, staging card, confirmation modal, or provider handoff card must never execute an action by itself"
].forEach(phrase => {
  assert(confirmationDoc.includes(phrase), `confirmation architecture must preserve principle: ${phrase}`);
});

[
  "allowedConfirmations",
  "blockedConfirmations",
  "auditRequired",
  "okay",
  "safeConfirmedCallHandoffUrl"
].forEach(signal => {
  assert(confirmationQa.includes(signal), `confirmation UI QA must preserve signal ${signal}.`);
});
assert(controlledConfirmationQa.includes("observeConfirmationReadinessOnly"), "controlled action confirmation readiness QA must remain observation-only.");
assert(auditRuntimeContract.includes("requiresAuditBeforeHighRiskExecution"), "audit runtime contract must require audit before high-risk execution.");

statuses.forEach(status => {
  assert(contract.APPROVAL_CENTER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must document status ${status}`);
});
categories.forEach(category => {
  assert(contract.PENDING_ACTION_CATEGORIES.includes(category), `contract must include pending action category ${category}`);
  assert(doc.includes(category), `doc must document pending action category ${category}`);
});
fields.forEach(field => {
  assert(contract.APPROVAL_CENTER_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.APPROVAL_CENTER_CONTRACT, field), `approval center contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.APPROVAL_REVIEW_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_APPROVAL_REVIEW_GATE, field), `approval review gate must include ${field}`);
  assert(doc.includes(field), `doc must document approval review gate field ${field}`);
});
contract.CONFIRMATION_LANGUAGE_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_CONFIRMATION_LANGUAGE_GATE, field), `confirmation language gate must include ${field}`);
  assert(doc.includes(field), `doc must document confirmation language gate field ${field}`);
});
contract.APPROVAL_RECORD_SCHEMA_FIELDS.forEach(field => {
  assert(contract.APPROVAL_CENTER_CONTRACT.approvalRecordSchema.includes(field), `approval record schema must include ${field}`);
  assert(doc.includes(field), `doc must document schema field ${field}`);
});

[
  "allowsRuntimeApprovalAuthority",
  "allowsProviderExecution",
  "allowsPaymentExecution",
  "allowsEmergencyDispatch",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_APPROVAL_REVIEW_GATE[field] === false, `${field} must default false.`);
});
[
  "blocksOkay",
  "blocksSure",
  "blocksMaybe"
].forEach(field => {
  assert(contract.DEFAULT_CONFIRMATION_LANGUAGE_GATE[field] === true, `${field} must default true.`);
});
[
  "allowsAlwaysApprove",
  "allowsSilentApproval",
  "allowsBulkApproval"
].forEach(field => {
  assert(contract.DEFAULT_CONFIRMATION_LANGUAGE_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.APPROVAL_CENTER_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createApprovalCenterContract({
  approvalCenterId: "sample-approval-center",
  approvalStatus: "approved_not_live",
  pendingActionCategories: [
    "low_risk_review_option",
    "high_risk_communication",
    "high_risk_payment",
    "unsafe"
  ],
  supportedSurfaces: ["assistant"],
  supportedLanguages: ["en", "es"],
  approvalReviewGate: {
    allowsRuntimeApprovalAuthority: true,
    allowsProviderExecution: true,
    allowsPaymentExecution: true,
    allowsEmergencyDispatch: true,
    allowsExternalNavigation: true
  },
  confirmationLanguageGate: {
    blocksOkay: false,
    blocksSure: false,
    blocksMaybe: false,
    allowsAlwaysApprove: true,
    allowsSilentApproval: true,
    allowsBulkApproval: true
  },
  liveActionEnabled: true
});

assert(Object.isFrozen(sample), "created approval center contract must be frozen.");
assert(sample.approvalStatus === "approved_not_live", "valid approval status must be preserved.");
assert(sample.pendingActionCategories.includes("low_risk_review_option"), "valid low-risk category must be preserved.");
assert(sample.pendingActionCategories.includes("high_risk_communication"), "valid communication category must be preserved.");
assert(sample.pendingActionCategories.includes("high_risk_payment"), "valid payment category must be preserved.");
assert(!sample.pendingActionCategories.includes("unsafe"), "invalid categories must be filtered.");
[
  "allowsRuntimeApprovalAuthority",
  "allowsProviderExecution",
  "allowsPaymentExecution",
  "allowsEmergencyDispatch",
  "allowsExternalNavigation"
].forEach(field => {
  assert(sample.approvalReviewGate[field] === false, `${field} must remain disabled after override.`);
});
[
  "blocksOkay",
  "blocksSure",
  "blocksMaybe"
].forEach(field => {
  assert(sample.confirmationLanguageGate[field] === true, `${field} must remain blocked after override.`);
});
[
  "allowsAlwaysApprove",
  "allowsSilentApproval",
  "allowsBulkApproval"
].forEach(field => {
  assert(sample.confirmationLanguageGate[field] === false, `${field} must remain disabled after override.`);
});
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created approval center contract must force ${flag} safe default.`);
});

const invalid = contract.createApprovalCenterContract({ approvalStatus: "live_approval_enabled", pendingActionCategories: ["everything"] });
assert(invalid.approvalStatus === "not_configured", "invalid approval status must fall back to not_configured.");
assert(invalid.pendingActionCategories.length === 0, "invalid pending action categories must be removed.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "setInterval",
  "addEventListener",
  "onclick",
  "execute:",
  "handler:",
  "adapter:",
  "approveAction",
  "runApproval",
  "confirmAction",
  "providerHandoff",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `approval center contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-approval-center-contract.js",
  "NexusApprovalCenterContract",
  "createApprovalCenterContract",
  "APPROVAL_CENTER_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-approval-center-contract"] === "node scripts/nexus-approval-center-contract-qa.js", "package.json must expose qa:nexus-approval-center-contract");
assert(qaSuite.includes("scripts/nexus-approval-center-contract-qa.js"), "qa-suite.js must include approval center contract QA");

console.log("[nexus-approval-center-contract-qa] passed");
