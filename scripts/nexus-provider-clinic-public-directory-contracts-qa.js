const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PROVIDER_CLINIC_PUBLIC_DIRECTORY_CONTRACTS_PHASE_21.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  baseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  module: path.join(root, "public", "nexus-provider-clinic-public-directory-contracts.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-provider-clinic-public-directory-contracts-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const baseline = require(paths.baseline).getPublicDataConnectorBaseline();
const moduleSource = read(paths.module);
const contracts = require(paths.module).getProviderClinicPublicDirectoryContracts();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredDirectoryIds = [
  "provider.clinic.public_directory",
  "provider.hospital.public_directory",
  "provider.telehealth.access_point",
  "provider.mobile_clinic.public_schedule",
  "provider.pharmacy.public_directory",
  "provider.public_health.office",
  "provider.community_health_worker.program",
  "provider.transportation_to_care.access"
];

const requiredFields = [
  "directoryId",
  "domain",
  "displayName",
  "sourceOwnerType",
  "directoryCategory",
  "expectedDirectoryFields",
  "verificationRequirements",
  "freshnessRequirements",
  "providerAvailabilityRules",
  "contactBoundaryRules",
  "privacyRequirements",
  "permissionRequirements",
  "auditRequirements",
  "allowedResponseStates",
  "forbiddenClaims",
  "futureRoadmapPhase"
];

const disabledFlags = [
  "fetchEnabled",
  "liveAvailabilityEnabled",
  "providerContactEnabled",
  "appointmentSchedulingEnabled",
  "telehealthRoomEnabled",
  "cameraPermissionEnabled",
  "microphonePermissionEnabled",
  "medicalRecordAccessEnabled",
  "prescriptionRefillEnabled",
  "pharmacyExecutionEnabled",
  "emergencyDispatchEnabled",
  "locationSharingEnabled",
  "paymentEnabled",
  "executionEnabled"
];

assert(roadmap.includes("| Phase 21 | Provider/clinic public sources |"), "Nexus 100 roadmap must include Phase 21 provider/clinic public sources.");
assert(baseline.some(item => item.connectorId === "public.provider.directory"), "Phase 19 baseline must include public provider directory connector.");
assert(baseline.some(item => item.connectorId === "public.health.clinic_directory"), "Phase 19 baseline must include public clinic directory connector.");
assert(Array.isArray(contracts), "provider/clinic contracts must export an array.");
assert(contracts.length === requiredDirectoryIds.length, `provider/clinic contracts must include exactly ${requiredDirectoryIds.length} entries.`);

requiredDirectoryIds.forEach(directoryId => {
  const contract = contracts.find(item => item.directoryId === directoryId);
  assert(contract, `contracts must include ${directoryId}`);
  requiredFields.forEach(field => {
    assert(Object.prototype.hasOwnProperty.call(contract, field), `${directoryId} must include ${field}`);
  });
  disabledFlags.forEach(flag => {
    assert(contract[flag] === false, `${directoryId} must keep ${flag} false`);
  });
  assert(contract.domain === "healthcare access", `${directoryId} must stay in healthcare access domain.`);
  assert(contract.allowedResponseStates.includes("provider_directory_result"), `${directoryId} must allow provider_directory_result.`);
  assert(contract.allowedResponseStates.includes("unavailable_source_fallback"), `${directoryId} must include unavailable fallback.`);
  assert(contract.verificationRequirements.includes("source owner named"), `${directoryId} must require named source owner.`);
  assert(contract.contactBoundaryRules.some(rule => /not provider contact/i.test(rule)), `${directoryId} must state directory display is not provider contact.`);
  assert(contract.auditRequirements.includes("provider-contact-blocked"), `${directoryId} must audit provider contact blocking.`);
});

[
  "clinics",
  "hospitals",
  "telehealth access points",
  "mobile clinic operators",
  "pharmacy directory entries",
  "public health offices",
  "community health worker programs",
  "transportation-to-care access points",
  "Directory display is not contact or scheduling.",
  "no provider contact",
  "no scheduling",
  "no regulated health execution",
  "Nexus must not"
].forEach(phrase => {
  assert(doc.toLowerCase().includes(phrase.toLowerCase()), `doc must include ${phrase}`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "execute:",
  "handler:",
  "adapter:",
  "contactProvider(",
  "scheduleAppointment(",
  "openTelehealthRoom(",
  "requestCamera",
  "requestMicrophone",
  "dispatchEmergency"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `provider/clinic module must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-provider-clinic-public-directory-contracts.js",
  "NexusProviderClinicPublicDirectoryContracts",
  "getProviderClinicPublicDirectoryContracts",
  "PROVIDER_CLINIC_PUBLIC_DIRECTORY_CONTRACTS"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-provider-clinic-public-directory-contracts"] === "node scripts/nexus-provider-clinic-public-directory-contracts-qa.js",
  "package.json must expose qa:nexus-provider-clinic-public-directory-contracts"
);
assert(
  qaSuite.includes("scripts/nexus-provider-clinic-public-directory-contracts-qa.js"),
  "qa-suite.js must include provider/clinic public directory contracts QA"
);

console.log("[nexus-provider-clinic-public-directory-contracts-qa] passed");
