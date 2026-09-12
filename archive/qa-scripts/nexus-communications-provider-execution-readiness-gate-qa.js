const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-communications-provider-execution-readiness-gate.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  contactPermissionQa: path.join(root, "scripts", "nexus-contact-call-permission-qa.js"),
  contactResolutionQa: path.join(root, "scripts", "nexus-contact-resolution-qa.js"),
  providerBoundaryQa: path.join(root, "scripts", "nexus-provider-handoff-boundary-qa.js"),
  approvalCenterQa: path.join(root, "scripts", "nexus-approval-center-contract-qa.js"),
  providerContactQa: path.join(root, "scripts", "nexus-provider-contact-preparation-contract-qa.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-communications-provider-execution-readiness-gate-qa] ${message}`);
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
const contactPermissionQa = read(paths.contactPermissionQa);
const contactResolutionQa = read(paths.contactResolutionQa);
const providerBoundaryQa = read(paths.providerBoundaryQa);
const approvalCenterQa = read(paths.approvalCenterQa);
const providerContactQa = read(paths.providerContactQa);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(roadmap.includes("| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |"), "roadmap must preserve Phase 51 communications execution row.");
assert(doc.includes("Phase 51 remains deferred"), "doc must state Phase 51 remains deferred.");
assert(doc.includes("Phase 51 must remain blocked until the readiness gate is satisfied"), "doc must state Phase 51 remains blocked until gate satisfaction.");

[
  "phase4HighRisk",
  "confirmed-call-handoff",
  "okay",
  "allowedConfirmations"
].forEach(signal => {
  assert(contactPermissionQa.includes(signal), `contact/call permission QA must preserve ${signal}.`);
});
[
  "number_needed",
  "duplicate",
  "orphan"
].forEach(signal => {
  assert(new RegExp(signal, "i").test(contactResolutionQa), `contact resolution QA must preserve ${signal}.`);
});
[
  "Provider adapters must never be called directly by raw intent parsing",
  "executionConfirmed",
  "ACTION_DIAL"
].forEach(signal => {
  assert(providerBoundaryQa.includes(signal), `provider boundary QA must preserve ${signal}.`);
});
assert(approvalCenterQa.includes("blocksOkay"), "approval center QA must preserve blocked vague confirmation boundary.");
assert(providerContactQa.includes("allowsRawPromptContact"), "provider contact preparation QA must preserve raw-prompt-contact boundary.");

[
  "READINESS_STATUSES",
  "COMMUNICATION_ACTION_TYPES",
  "RESTRICTED_DOMAIN_CATEGORIES",
  "NO_EXECUTION_DEFAULTS",
  "READINESS_GATE_FIELDS",
  "REQUIRED_PRECONDITION_FIELDS",
  "STANDARD_USER_EXPECTATION_FIELDS",
  "ADMIN_FULL_EXPECTATION_FIELDS",
  "COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE",
  "createCommunicationsProviderExecutionReadinessGate"
].forEach(exportName => {
  assert(Object.prototype.hasOwnProperty.call(contract, exportName), `contract must export ${exportName}.`);
  assert(doc.includes(exportName), `doc must document ${exportName}.`);
});

[
  "resolvedRecipient",
  "visibleRecipientDisplay",
  "visibleProviderDisplay",
  "visibleActionType",
  "purposePreview",
  "languageConfirmation",
  "explicitUserApproval",
  "cancellationPath",
  "auditEvent",
  "permissionState",
  "providerAvailabilityState",
  "noBackgroundExecution",
  "noSilentSend",
  "noSilentCall",
  "noHiddenProviderHandoff"
].forEach(field => {
  assert(contract.REQUIRED_PRECONDITION_FIELDS.includes(field), `required preconditions must include ${field}.`);
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_REQUIRED_PRECONDITIONS, field), `default preconditions must include ${field}.`);
  assert(doc.includes(field), `doc must document precondition ${field}.`);
});

[
  "call",
  "message",
  "whatsapp",
  "telegram",
  "native_phone",
  "browser_tel",
  "sms",
  "email",
  "restricted_communication_boundary"
].forEach(actionType => {
  assert(contract.COMMUNICATION_ACTION_TYPES.includes(actionType), `action types must include ${actionType}.`);
  assert(doc.includes(actionType), `doc must document action type ${actionType}.`);
});

[
  "healthcare",
  "pharmacy",
  "emergency",
  "payments",
  "marketplace_transactions",
  "transportation_dispatch",
  "minors_family_support",
  "regulated_identity",
  "restricted_domain_boundary"
].forEach(domain => {
  assert(contract.RESTRICTED_DOMAIN_CATEGORIES.includes(domain), `restricted domains must include ${domain}.`);
  assert(doc.includes(domain), `doc must document restricted domain ${domain}.`);
});

[
  "mayPreviewContactOnly",
  "mayPrepareContactOnly",
  "mustNotExecuteCommunication",
  "mustNotTriggerProviderCommunicationAutomatically",
  "mustNotOpenWhatsAppSilently",
  "mustNotOpenPhoneSilently",
  "mustNotOpenSmsSilently",
  "mustNotOpenTelegramSilently"
].forEach(field => {
  assert(contract.STANDARD_USER_EXPECTATION_FIELDS.includes(field), `Standard User expectations must include ${field}.`);
  assert(contract.DEFAULT_STANDARD_USER_EXPECTATIONS[field] === true, `${field} must default true.`);
  assert(doc.includes(field), `doc must document Standard User expectation ${field}.`);
});

[
  "requiresExplicitApproval",
  "requiresAudit",
  "requiresHighRiskRestrictions",
  "cannotBypassConsent",
  "cannotBypassProviderReadiness",
  "cannotBypassDomainRestrictions"
].forEach(field => {
  assert(contract.ADMIN_FULL_EXPECTATION_FIELDS.includes(field), `Admin/full expectations must include ${field}.`);
  assert(contract.DEFAULT_ADMIN_FULL_EXPECTATIONS[field] === true, `${field} must default true.`);
  assert(doc.includes(field), `doc must document Admin/full expectation ${field}.`);
});

[
  "intent-recorded",
  "risk-tier-recorded",
  "recipient-resolution-recorded",
  "provider-display-recorded",
  "purpose-preview-recorded",
  "language-confirmation-recorded",
  "explicit-approval-recorded",
  "cancellation-path-recorded",
  "provider-availability-recorded",
  "execution-blocked-until-phase-51-gate-satisfied"
].forEach(requirement => {
  assert(contract.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.auditRequirements.includes(requirement), `audit requirements must include ${requirement}.`);
  assert(doc.includes(requirement), `doc must document audit requirement ${requirement}.`);
});

Object.entries(contract.NO_EXECUTION_DEFAULTS).forEach(([flag, expected]) => {
  assert(expected === (flag === "noExecution" || flag === "phase51Blocked"), `${flag} must default safely.`);
  assert(contract.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE[flag] === expected, `${flag} must match default on base gate.`);
});

const sample = contract.createCommunicationsProviderExecutionReadinessGate({
  gateStatus: "approved_not_live",
  readinessGateSatisfied: true,
  communicationsExecutionEnabled: true,
  providerExecutionEnabled: true,
  callExecutionEnabled: true,
  messageExecutionEnabled: true,
  whatsAppExecutionEnabled: true,
  telegramExecutionEnabled: true,
  nativePhoneExecutionEnabled: true,
  browserTelExecutionEnabled: true,
  smsExecutionEnabled: true,
  emailExecutionEnabled: true,
  backgroundCommunicationEnabled: true,
  silentSendEnabled: true,
  silentCallEnabled: true,
  hiddenProviderHandoffEnabled: true,
  providerApiEnabled: true,
  liveActionEnabled: true,
  requiredPreconditions: {
    noBackgroundExecution: false,
    noSilentSend: false,
    noSilentCall: false,
    noHiddenProviderHandoff: false
  },
  standardUserExpectations: {
    mustNotExecuteCommunication: false,
    mustNotTriggerProviderCommunicationAutomatically: false,
    mustNotOpenWhatsAppSilently: false,
    mustNotOpenPhoneSilently: false,
    mustNotOpenSmsSilently: false,
    mustNotOpenTelegramSilently: false
  },
  adminFullExpectations: {
    requiresExplicitApproval: false,
    requiresAudit: false,
    requiresHighRiskRestrictions: false,
    cannotBypassConsent: false,
    cannotBypassProviderReadiness: false,
    cannotBypassDomainRestrictions: false
  }
});

assert(Object.isFrozen(sample), "created readiness gate must be frozen.");
assert(sample.gateStatus === "approved_not_live", "valid status may be preserved as approved-not-live.");
Object.entries(contract.NO_EXECUTION_DEFAULTS).forEach(([flag, expected]) => {
  assert(sample[flag] === expected, `created readiness gate must force safe default ${flag}.`);
});
[
  "noBackgroundExecution",
  "noSilentSend",
  "noSilentCall",
  "noHiddenProviderHandoff"
].forEach(field => {
  assert(sample.requiredPreconditions[field] === true, `${field} must remain true after override.`);
});
[
  "mustNotExecuteCommunication",
  "mustNotTriggerProviderCommunicationAutomatically",
  "mustNotOpenWhatsAppSilently",
  "mustNotOpenPhoneSilently",
  "mustNotOpenSmsSilently",
  "mustNotOpenTelegramSilently"
].forEach(field => {
  assert(sample.standardUserExpectations[field] === true, `${field} must remain true after override.`);
});
[
  "requiresExplicitApproval",
  "requiresAudit",
  "requiresHighRiskRestrictions",
  "cannotBypassConsent",
  "cannotBypassProviderReadiness",
  "cannotBypassDomainRestrictions"
].forEach(field => {
  assert(sample.adminFullExpectations[field] === true, `${field} must remain true after override.`);
});

const invalid = contract.createCommunicationsProviderExecutionReadinessGate({ gateStatus: "live_execution_enabled", actionTypes: ["everything"], restrictedDomains: ["everything"] });
assert(invalid.gateStatus === "blocked_until_gate_satisfied", "invalid gate status must fall back to blocked.");
assert(invalid.actionTypes.length === 0, "invalid action types must be filtered.");
assert(invalid.restrictedDomains.length === 0, "invalid restricted domains must be filtered.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.contacts",
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
  "sendMessage",
  "placeCall",
  "openWhatsApp",
  "openTelegram",
  "openPhone",
  "providerHandoff",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `readiness gate contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-communications-provider-execution-readiness-gate.js",
  "NexusCommunicationsProviderExecutionReadinessGate",
  "createCommunicationsProviderExecutionReadinessGate",
  "COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-communications-provider-execution-readiness-gate"] === "node scripts/nexus-communications-provider-execution-readiness-gate-qa.js", "package.json must expose qa:nexus-communications-provider-execution-readiness-gate.");
assert(qaSuite.includes("scripts/nexus-communications-provider-execution-readiness-gate-qa.js"), "qa-suite.js must include communications provider execution readiness gate QA.");

console.log("[nexus-communications-provider-execution-readiness-gate-qa] passed");
