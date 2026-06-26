const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const helperPath = path.join(root, "public", "nexus-agriculture-source-registry.js");
const docPath = path.join(root, "docs", "NEXUS_PHASE_102_AGRICULTURE_SOURCE_REGISTRY_HARDENING.md");
const modulePath = path.join(root, "public", "nexus-agriculture-source-registry-phase-102.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-102-agriculture-source-registry-hardening-qa] ${message}`);
    process.exit(1);
  }
}

[
  helperPath,
  docPath,
  modulePath,
  indexPath,
  appPath,
  serverPath,
  packagePath,
  qaSuitePath
].forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const helperSource = fs.readFileSync(helperPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");
const existingRegistry = require(helperPath);
const allowedConfidenceMatch = helperSource.match(/return label === "([^"]+)";/);
assert(allowedConfidenceMatch, "Source registry helper must define an exact allowed source-backed confidence label.");
const allowedConfidenceLabel = allowedConfidenceMatch[1];

assert(existingRegistry.SOURCE_STATUS.GENERAL === "general guidance", "Registry must expose general guidance status.");
assert(existingRegistry.SOURCE_STATUS.SOURCE_BACKED === "source-backed guidance", "Registry must expose source-backed guidance status.");
assert(existingRegistry.SOURCE_STATUS.UNVERIFIED === "unverified source unavailable", "Registry must expose unverified status.");

const general = existingRegistry.normalizeAgricultureSourceRecord(null);
assert(general.status === "general guidance", "Null source must normalize to general guidance.");
assert(general.sourceName === "No verified live source connected", "General guidance must not invent a source name.");
assert(/no live source lookup was performed/i.test(general.freshnessLabel), "General guidance must disclose missing live lookup freshness.");
assert(/general agriculture guidance only/i.test(general.confidenceLabel), "General guidance must use limited confidence.");
assert(/local agriculture extension worker/.test(general.escalation), "General guidance must recommend generic local extension escalation.");

const verifiedSource = {
  name: "Verified County Agriculture Extension",
  sourceType: "extension",
  contractId: "ag-source-contract-001",
  freshnessLabel: "Verified source packet approved 2026-06-01",
  confidenceLabel: allowedConfidenceLabel,
  verificationStatus: "verified",
  enabled: true
};
const sourceBacked = existingRegistry.normalizeAgricultureSourceRecord(verifiedSource);
assert(sourceBacked.status === "source-backed guidance", "Verified source must normalize to source-backed guidance.");
assert(sourceBacked.sourceName === verifiedSource.name, "Verified source name must come from supplied record.");
assert(sourceBacked.contractId === verifiedSource.contractId, "Verified source contract ID must be preserved.");
assert(sourceBacked.freshnessLabel === verifiedSource.freshnessLabel, "Verified freshness must be preserved from source record.");
assert(sourceBacked.confidenceLabel === verifiedSource.confidenceLabel, "Verified confidence must be preserved from approved source record.");

const incompleteRecords = [
  {},
  { name: "Incomplete Source", sourceType: "extension", verificationStatus: "verified", enabled: true },
  Object.assign({}, verifiedSource, { enabled: false }),
  Object.assign({}, verifiedSource, { verificationStatus: "pending" }),
  Object.assign({}, verifiedSource, { sourceType: "invented-expert" }),
  Object.assign({}, verifiedSource, { confidenceLabel: "Guaranteed diagnosis" }),
  Object.assign({}, verifiedSource, { confidenceLabel: "Definitive crop disease diagnosis" }),
  Object.assign({}, verifiedSource, { freshnessLabel: "" }),
  Object.assign({}, verifiedSource, { contractId: "" })
];

incompleteRecords.forEach((record, index) => {
  const normalized = existingRegistry.normalizeAgricultureSourceRecord(record);
  assert(normalized.status === "unverified source unavailable", `Incomplete or unsafe record ${index} must normalize to unverified.`);
  assert(normalized.sourceName === "Source could not be verified", `Incomplete or unsafe record ${index} must not preserve fake source name.`);
  assert(/source could not be verified/i.test(normalized.confidenceLabel), `Incomplete or unsafe record ${index} must not preserve unsafe confidence.`);
});

const disclosure = existingRegistry.buildSourceDisclosure(verifiedSource);
assert(disclosure.sourceStatus === "source-backed guidance", "Source disclosure must expose source-backed status for verified source.");
assert(disclosure.freshness === verifiedSource.freshnessLabel, "Source disclosure must expose verified freshness.");
assert(disclosure.confidence === verifiedSource.confidenceLabel, "Source disclosure must expose verified confidence.");

[
  "general guidance",
  "source-backed guidance",
  "unverified source unavailable",
  "No live source lookup was performed",
  "No provider directory lookup",
  "No fake source names",
  "No backend mutation",
  "Acceptance criteria"
].forEach(fragment => assert(doc.includes(fragment), `Phase 102 doc must include: ${fragment}`));

const moduleSource = fs.readFileSync(modulePath, "utf8");
const sourceRegistry = require(modulePath);
const sources = sourceRegistry.getAgricultureSourceRegistry();
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");
const activeRuntime = [indexPath, appPath, serverPath].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");

assert(sourceRegistry.REGISTRY_VERSION === "nexus.agricultureSourceRegistry.phase102.v1", "registry version must be canonical.");
assert(sources.length >= 6, "source registry must include core agriculture categories.");
["extension_advisory", "weather_climate", "soil_fertilizer", "irrigation_water", "pest_disease", "market_context"].forEach(category => {
  const source = sources.find(item => item.category === category);
  assert(source, `registry must include ${category}.`);
  assert(source.sourceVerificationRequired === true, `${category} must require source verification.`);
  assert(source.sourceBackedGuidanceAllowed === true, `${category} must allow source-backed guidance only after verification.`);
  assert(source.executionEnabled === false, `${category} must keep execution disabled.`);
  assert(source.liveLookupEnabled === false, `${category} must keep live lookup disabled.`);
  assert(Array.isArray(source.requiredCitationFields) && source.requiredCitationFields.length >= 3, `${category} must require citation fields.`);
  assert(Array.isArray(source.auditEvents) && source.auditEvents.includes("unsafe_action_blocked"), `${category} must include audit events.`);
});

const candidate = sourceRegistry.validateSourceCandidate({
  sourceId: "agriculture.irrigation.water",
  sourceName: "Fixture water source",
  sourceOwner: "Fixture authority",
  sourceUpdatedAt: "2026-06-26",
  region: "fixture-region"
});
assert(candidate.valid === true && candidate.executionEnabled === false, "valid source candidate must remain non-executing.");
assert(sourceRegistry.validateSourceCandidate({ sourceId: "unknown" }).valid === false, "unknown source must be rejected.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "window.open",
  "location.href",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "PaymentRequest",
  "navigator.sendBeacon",
  "tel:",
  "mailto:",
  "whatsapp",
  "telegram"
].forEach(forbidden => {
  assert(!helperSource.includes(forbidden), `Source registry helper must not include forbidden side effect token: ${forbidden}`);
  assert(!moduleSource.includes(forbidden), `Phase 102 source registry module must not include forbidden side effect token: ${forbidden}`);
});

[
  "nexus-agriculture-source-registry-phase-102.js",
  "NexusAgricultureSourceRegistryPhase102"
].forEach(hook => assert(!activeRuntime.includes(hook), `active runtime must not load ${hook}.`));

assert(packageData.scripts["qa:nexus-phase-102-agriculture-source-registry-hardening"] === "node scripts/nexus-phase-102-agriculture-source-registry-hardening-qa.js", "package alias must exist.");
assert(qaSuite.includes("scripts/nexus-phase-102-agriculture-source-registry-hardening-qa.js"), "qa-suite must include Phase 102 QA.");

console.log("[nexus-phase-102-agriculture-source-registry-hardening-qa] passed");
