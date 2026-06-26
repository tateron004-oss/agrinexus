const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PROVIDER_CONTACT_PREPARATION_CONTRACT_PHASE_50.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-provider-contact-preparation-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  contactPermissionQa: path.join(root, "scripts", "nexus-contact-call-permission-qa.js"),
  contactResolutionQa: path.join(root, "scripts", "nexus-contact-resolution-qa.js"),
  providerBoundaryQa: path.join(root, "scripts", "nexus-provider-handoff-boundary-qa.js"),
  approvalCenterQa: path.join(root, "scripts", "nexus-approval-center-contract-qa.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-provider-contact-preparation-contract-qa] ${message}`);
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
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "contact_source_required",
  "resolver_required",
  "provider_confirmation_required",
  "consent_policy_required",
  "audit_policy_required",
  "role_policy_required",
  "handoff_policy_required",
  "sandbox_testing_required",
  "approved_not_live",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "provider_directory_contact",
  "clinic_contact",
  "telehealth_provider_contact",
  "pharmacy_contact",
  "transportation_contact",
  "workforce_support_contact",
  "marketplace_partner_contact",
  "community_service_contact",
  "emergency_contact_boundary",
  "restricted_contact_boundary"
];
const fields = [
  "contactPreparationId",
  "sourceOwner",
  "preparationStatus",
  "contactCategories",
  "supportedRegions",
  "supportedLanguages",
  "contactSourceStatus",
  "resolverStatus",
  "providerConfirmationStatus",
  "consentPolicyStatus",
  "auditPolicyStatus",
  "rolePolicyStatus",
  "handoffPolicyStatus",
  "freshnessModel",
  "allowedResponseStates",
  "contactResolutionGate",
  "handoffPreparationGate",
  "contactCandidateSchema",
  "auditRequirements",
  "contactResolverEnabled",
  "providerConfirmationEnabled",
  "contactHandoffPreparationEnabled",
  "providerExecutionEnabled",
  "callExecutionEnabled",
  "messageExecutionEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "contactResolverEnabled",
  "contactSourceEnabled",
  "contactPersistenceEnabled",
  "providerConfirmationEnabled",
  "contactHandoffPreparationEnabled",
  "runtimeContactAuthorityEnabled",
  "providerExecutionEnabled",
  "callExecutionEnabled",
  "messageExecutionEnabled",
  "whatsAppExecutionEnabled",
  "smsExecutionEnabled",
  "emailExecutionEnabled",
  "healthActionEnabled",
  "locationSharingEnabled",
  "marketplaceTransactionEnabled",
  "emergencyDispatchEnabled",
  "externalNavigationEnabled",
  "liveActionEnabled",
  "contactResolved",
  "contactSelected",
  "providerConfirmed",
  "handoffPrepared",
  "providerContacted",
  "callPlaced",
  "messageSent",
  "whatsAppOpened",
  "smsSent",
  "emailSent",
  "healthActionPerformed",
  "locationShared",
  "marketplaceTransactionCompleted",
  "emergencyDispatched",
  "externalActionExecuted"
];

assert(roadmap.includes("| Phase 50 | Provider contact preparation | Prepare contact handoffs | contact resolver | future | high | provider contact source | provider confirmation | contact QA | no raw prompt contact |"), "Nexus 100 roadmap must include the Phase 50 provider contact preparation row.");

[
  "phase4HighRisk",
  "confirmed-call-handoff",
  "okay",
  "allowedConfirmations"
].forEach(signal => {
  assert(contactPermissionQa.includes(signal), `contact/call permission QA must preserve signal ${signal}.`);
});
[
  "number_needed",
  "duplicate",
  "must not expose native bridge dispatch metadata",
  "orphan"
].forEach(signal => {
  assert(new RegExp(signal, "i").test(contactResolutionQa), `contact resolution QA must preserve signal ${signal}.`);
});
[
  "Provider adapters must never be called directly by raw intent parsing",
  "stageAgentAction(db, command",
  "executePendingAgentAction(db, user, topPendingAction)",
  "executionConfirmed",
  "ACTION_DIAL"
].forEach(signal => {
  assert(providerBoundaryQa.includes(signal), `provider boundary QA must preserve signal ${signal}.`);
});
assert(approvalCenterQa.includes("blocksOkay"), "approval center QA must preserve no-vague-confirmation boundary.");

statuses.forEach(status => {
  assert(contract.PROVIDER_CONTACT_PREPARATION_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must document status ${status}`);
});
categories.forEach(category => {
  assert(contract.PROVIDER_CONTACT_CATEGORIES.includes(category), `contract must include contact category ${category}`);
  assert(doc.includes(category), `doc must document contact category ${category}`);
});
fields.forEach(field => {
  assert(contract.PROVIDER_CONTACT_PREPARATION_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.PROVIDER_CONTACT_PREPARATION_CONTRACT, field), `provider contact preparation contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.CONTACT_RESOLUTION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_CONTACT_RESOLUTION_GATE, field), `contact resolution gate must include ${field}`);
  assert(doc.includes(field), `doc must document contact resolution gate field ${field}`);
});
contract.HANDOFF_PREPARATION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_HANDOFF_PREPARATION_GATE, field), `handoff preparation gate must include ${field}`);
  assert(doc.includes(field), `doc must document handoff preparation gate field ${field}`);
});
contract.CONTACT_CANDIDATE_SCHEMA_FIELDS.forEach(field => {
  assert(contract.PROVIDER_CONTACT_PREPARATION_CONTRACT.contactCandidateSchema.includes(field), `contact candidate schema must include ${field}`);
  assert(doc.includes(field), `doc must document schema field ${field}`);
});

[
  "allowsRawPromptContact",
  "allowsAutomaticContactSelection",
  "allowsContactPersistence",
  "allowsProviderContact",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_CONTACT_RESOLUTION_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsCallExecution",
  "allowsMessageExecution",
  "allowsWhatsAppExecution",
  "allowsSmsExecution",
  "allowsEmailExecution",
  "allowsEmergencyDispatch",
  "allowsMarketplaceTransaction",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_HANDOFF_PREPARATION_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.PROVIDER_CONTACT_PREPARATION_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createProviderContactPreparationContract({
  contactPreparationId: "sample-provider-contact-preparation",
  preparationStatus: "approved_not_live",
  contactCategories: [
    "provider_directory_contact",
    "telehealth_provider_contact",
    "pharmacy_contact",
    "unsafe"
  ],
  supportedRegions: ["US"],
  supportedLanguages: ["en", "es"],
  contactResolutionGate: {
    allowsRawPromptContact: true,
    allowsAutomaticContactSelection: true,
    allowsContactPersistence: true,
    allowsProviderContact: true,
    allowsExternalNavigation: true
  },
  handoffPreparationGate: {
    allowsCallExecution: true,
    allowsMessageExecution: true,
    allowsWhatsAppExecution: true,
    allowsSmsExecution: true,
    allowsEmailExecution: true,
    allowsEmergencyDispatch: true,
    allowsMarketplaceTransaction: true,
    allowsExternalNavigation: true
  },
  liveActionEnabled: true
});

assert(Object.isFrozen(sample), "created provider contact preparation contract must be frozen.");
assert(sample.preparationStatus === "approved_not_live", "valid preparation status must be preserved.");
assert(sample.contactCategories.includes("provider_directory_contact"), "valid provider directory category must be preserved.");
assert(sample.contactCategories.includes("telehealth_provider_contact"), "valid telehealth category must be preserved.");
assert(sample.contactCategories.includes("pharmacy_contact"), "valid pharmacy category must be preserved.");
assert(!sample.contactCategories.includes("unsafe"), "invalid contact categories must be filtered.");
[
  "allowsRawPromptContact",
  "allowsAutomaticContactSelection",
  "allowsContactPersistence",
  "allowsProviderContact",
  "allowsExternalNavigation"
].forEach(field => {
  assert(sample.contactResolutionGate[field] === false, `${field} must remain disabled after override.`);
});
[
  "allowsCallExecution",
  "allowsMessageExecution",
  "allowsWhatsAppExecution",
  "allowsSmsExecution",
  "allowsEmailExecution",
  "allowsEmergencyDispatch",
  "allowsMarketplaceTransaction",
  "allowsExternalNavigation"
].forEach(field => {
  assert(sample.handoffPreparationGate[field] === false, `${field} must remain disabled after override.`);
});
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created provider contact preparation contract must force ${flag} safe default.`);
});

const invalid = contract.createProviderContactPreparationContract({ preparationStatus: "live_contact_enabled", contactCategories: ["everything"] });
assert(invalid.preparationStatus === "not_configured", "invalid preparation status must fall back to not_configured.");
assert(invalid.contactCategories.length === 0, "invalid contact categories must be removed.");

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
  "resolveContact",
  "selectContact",
  "contactProvider",
  "providerHandoff",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `provider contact preparation contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-provider-contact-preparation-contract.js",
  "NexusProviderContactPreparationContract",
  "createProviderContactPreparationContract",
  "PROVIDER_CONTACT_PREPARATION_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-provider-contact-preparation-contract"] === "node scripts/nexus-provider-contact-preparation-contract-qa.js", "package.json must expose qa:nexus-provider-contact-preparation-contract");
assert(qaSuite.includes("scripts/nexus-provider-contact-preparation-contract-qa.js"), "qa-suite.js must include provider contact preparation contract QA");

console.log("[nexus-provider-contact-preparation-contract-qa] passed");
