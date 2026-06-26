const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT_PHASE_45.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-high-risk-provider-boundary-contract.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  callProviderRegistryQa: path.join(root, "scripts", "call-provider-registry-qa.js"),
  providerHandoffBoundaryQa: path.join(root, "scripts", "nexus-provider-handoff-boundary-qa.js"),
  contactCallPermissionQa: path.join(root, "scripts", "nexus-contact-call-permission-qa.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-high-risk-provider-boundary-contract-qa] ${message}`);
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
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const callProviderRegistryQa = read(paths.callProviderRegistryQa);
const providerHandoffBoundaryQa = read(paths.providerHandoffBoundaryQa);
const contactCallPermissionQa = read(paths.contactCallPermissionQa);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "communications_provider_review_required",
  "payment_provider_review_required",
  "emergency_partner_review_required",
  "credential_review_required",
  "consent_policy_review_required",
  "audit_policy_review_required",
  "handoff_policy_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "outbound_call_provider",
  "outbound_message_provider",
  "whatsapp_handoff_provider",
  "sms_provider",
  "email_provider",
  "payment_processor",
  "wallet_provider",
  "marketplace_payment_provider",
  "emergency_response_partner",
  "public_safety_partner",
  "crisis_line_directory",
  "restricted_provider_boundary"
];
const fields = [
  "connectorId",
  "providerName",
  "sourceOwner",
  "providerStatus",
  "providerCategories",
  "supportedRegions",
  "supportedLanguages",
  "credentialReviewStatus",
  "consentPolicyStatus",
  "auditPolicyStatus",
  "handoffPolicyStatus",
  "sandboxTestingStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "consentGate",
  "highRiskExecutionGate",
  "auditRequirements",
  "auditEvent",
  "communicationContextAllowed",
  "paymentContextAllowed",
  "emergencyContextAllowed",
  "providerContactEnabled",
  "callExecutionEnabled",
  "messageExecutionEnabled",
  "paymentExecutionEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "communicationContextAllowed",
  "paymentContextAllowed",
  "emergencyContextAllowed",
  "liveProviderConnectionEnabled",
  "providerContactEnabled",
  "callExecutionEnabled",
  "messageExecutionEnabled",
  "whatsAppExecutionEnabled",
  "smsExecutionEnabled",
  "emailExecutionEnabled",
  "paymentExecutionEnabled",
  "walletExecutionEnabled",
  "marketplacePaymentEnabled",
  "emergencyDispatchEnabled",
  "publicSafetyDispatchEnabled",
  "externalNavigationEnabled",
  "credentialUseEnabled",
  "liveActionEnabled",
  "providerContacted",
  "callPlaced",
  "messageSent",
  "whatsAppOpened",
  "smsSent",
  "emailSent",
  "paymentProcessed",
  "walletCharged",
  "marketplacePaymentProcessed",
  "emergencyDispatched",
  "publicSafetyDispatched",
  "externalActionExecuted"
];

assert(roadmap.includes("| Phase 45 | Communication/payment/emergency partners |"), "Nexus 100 roadmap must include Phase 45 high-risk provider row.");
assert(providerUniverse.some(item => item.categoryId === "finance.payment_processors" && item.publicPartnerRegulatedStatus === "approved_high_risk" && item.defaultExecutionEnabled === false), "provider universe must keep finance.payment_processors approved-high-risk and disabled by default.");
assert(providerUniverse.some(item => item.categoryId === "emergency.public_safety_partners" && item.publicPartnerRegulatedStatus === "approved_high_risk" && item.defaultExecutionEnabled === false), "provider universe must keep emergency.public_safety_partners approved-high-risk and disabled by default.");
assert(callProviderRegistryQa.includes("confirmedOnly: true"), "call provider registry QA must preserve confirmed-only communication providers.");
assert(callProviderRegistryQa.includes("ACTION_DIAL") || read(path.join(root, "scripts", "android-call-launch-qa.js")).includes("ACTION_DIAL"), "native call QA must preserve ACTION_DIAL handoff behavior.");
assert(providerHandoffBoundaryQa.includes("Raw intent parsing must not dispatch native provider adapters") && providerHandoffBoundaryQa.includes("Provider adapters must never be called directly by raw intent parsing"), "provider handoff boundary QA must forbid raw-intent provider launch.");
assert(contactCallPermissionQa.includes("okay") && contactCallPermissionQa.includes("confirmed-call-handoff"), "contact call permission QA must block vague confirmations and require confirmed handoff metadata.");

statuses.forEach(status => {
  assert(contract.HIGH_RISK_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.HIGH_RISK_PROVIDER_CATEGORIES.includes(category), `contract must include provider category ${category}`);
  assert(doc.includes(category), `doc must include provider category ${category}`);
});
fields.forEach(field => {
  assert(contract.HIGH_RISK_PROVIDER_BOUNDARY_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT, field), `high-risk provider boundary contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_CONSENT_GATE, field), `consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document consent gate field ${field}`);
});
contract.HIGH_RISK_EXECUTION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_HIGH_RISK_EXECUTION_GATE, field), `high-risk execution gate must include ${field}`);
  assert(doc.includes(field), `doc must document high-risk execution gate field ${field}`);
});
contract.HIGH_RISK_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsCommunicationProviderContact",
  "allowsPaymentProcessing",
  "allowsEmergencyDispatch",
  "allowsExternalNavigation",
  "allowsCredentialUse"
].forEach(field => {
  assert(contract.DEFAULT_CONSENT_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsCallExecution",
  "allowsMessageExecution",
  "allowsPaymentExecution",
  "allowsEmergencyDispatch",
  "allowsPublicSafetyDispatch",
  "allowsLiveProviderConnection",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_HIGH_RISK_EXECUTION_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createHighRiskProviderBoundary({
  connectorId: "sample-high-risk-provider",
  providerStatus: "approved_not_live",
  providerCategories: ["outbound_call_provider", "payment_processor", "emergency_response_partner", "unsafe"],
  consentGate: {
    allowsCommunicationProviderContact: true,
    allowsPaymentProcessing: true,
    allowsEmergencyDispatch: true,
    allowsExternalNavigation: true,
    allowsCredentialUse: true
  },
  highRiskExecutionGate: {
    allowsCallExecution: true,
    allowsMessageExecution: true,
    allowsPaymentExecution: true,
    allowsEmergencyDispatch: true,
    allowsPublicSafetyDispatch: true,
    allowsLiveProviderConnection: true,
    allowsExternalNavigation: true
  }
});
assert(Object.isFrozen(sample), "created high-risk provider boundary must be frozen.");
assert(sample.providerCategories.includes("outbound_call_provider"), "valid outbound call category must be preserved.");
assert(sample.providerCategories.includes("payment_processor"), "valid payment processor category must be preserved.");
assert(sample.providerCategories.includes("emergency_response_partner"), "valid emergency category must be preserved.");
assert(!sample.providerCategories.includes("unsafe"), "invalid provider category must be filtered.");
assert(sample.consentGate.allowsCommunicationProviderContact === false, "communication provider contact must remain disabled.");
assert(sample.consentGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.consentGate.allowsEmergencyDispatch === false, "emergency dispatch must remain disabled.");
assert(sample.consentGate.allowsExternalNavigation === false, "external navigation must remain disabled.");
assert(sample.consentGate.allowsCredentialUse === false, "credential use must remain disabled.");
assert(sample.highRiskExecutionGate.allowsCallExecution === false, "call execution must remain disabled.");
assert(sample.highRiskExecutionGate.allowsMessageExecution === false, "message execution must remain disabled.");
assert(sample.highRiskExecutionGate.allowsPaymentExecution === false, "payment execution must remain disabled.");
assert(sample.highRiskExecutionGate.allowsEmergencyDispatch === false, "emergency dispatch must remain disabled.");
assert(sample.highRiskExecutionGate.allowsPublicSafetyDispatch === false, "public safety dispatch must remain disabled.");
assert(sample.highRiskExecutionGate.allowsLiveProviderConnection === false, "live provider connection must remain disabled.");
assert(sample.highRiskExecutionGate.allowsExternalNavigation === false, "high-risk external navigation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created boundary must force ${flag} safe default.`);
});

const invalid = contract.createHighRiskProviderBoundary({ providerStatus: "live_now" });
assert(invalid.providerStatus === "not_configured", "invalid provider status must fall back to not_configured.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "setInterval",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "openProvider",
  "callNow",
  "sendMessage",
  "sendWhatsApp",
  "sendSms",
  "sendEmail",
  "processPayment",
  "dispatchEmergency",
  "ACTION_CALL",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `high-risk provider boundary contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-high-risk-provider-boundary-contract.js",
  "NexusHighRiskProviderBoundaryContract",
  "createHighRiskProviderBoundary",
  "HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-high-risk-provider-boundary-contract"] === "node scripts/nexus-high-risk-provider-boundary-contract-qa.js", "package.json must expose qa:nexus-high-risk-provider-boundary-contract");
assert(qaSuite.includes("scripts/nexus-high-risk-provider-boundary-contract-qa.js"), "qa-suite.js must include high-risk provider boundary contract QA");

console.log("[nexus-high-risk-provider-boundary-contract-qa] passed");
