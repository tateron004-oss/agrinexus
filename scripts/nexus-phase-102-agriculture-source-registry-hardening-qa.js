const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const helperPath = path.join(root, "public", "nexus-agriculture-source-registry.js");
const docPath = path.join(root, "docs", "NEXUS_PHASE_102_AGRICULTURE_SOURCE_REGISTRY_HARDENING.md");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-102-agriculture-source-registry-hardening-qa] ${message}`);
    process.exit(1);
  }
}

assert(fs.existsSync(helperPath), "Phase 102 source registry helper must exist.");
assert(fs.existsSync(docPath), "Phase 102 hardening doc must exist.");

const helperSource = fs.readFileSync(helperPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");
const registry = require(helperPath);

assert(registry.SOURCE_STATUS.GENERAL === "general guidance", "Registry must expose general guidance status.");
assert(registry.SOURCE_STATUS.SOURCE_BACKED === "source-backed guidance", "Registry must expose source-backed guidance status.");
assert(registry.SOURCE_STATUS.UNVERIFIED === "unverified source unavailable", "Registry must expose unverified status.");

const general = registry.normalizeAgricultureSourceRecord(null);
assert(general.status === "general guidance", "Null source must normalize to general guidance.");
assert(general.sourceName === "No verified live source connected", "General guidance must not invent a source name.");
assert(general.freshnessLabel === "Unavailable — no live source lookup was performed", "General guidance must disclose missing live lookup freshness.");
assert(general.confidenceLabel === "Limited — general agriculture guidance only", "General guidance must use limited confidence.");
assert(/local agriculture extension worker/.test(general.escalation), "General guidance must recommend generic local extension escalation.");

const verifiedSource = {
  name: "Verified County Agriculture Extension",
  sourceType: "extension",
  contractId: "ag-source-contract-001",
  freshnessLabel: "Verified source packet approved 2026-06-01",
  confidenceLabel: "Source-backed — verify against local conditions before acting",
  verificationStatus: "verified",
  enabled: true
};
const sourceBacked = registry.normalizeAgricultureSourceRecord(verifiedSource);
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
  const normalized = registry.normalizeAgricultureSourceRecord(record);
  assert(normalized.status === "unverified source unavailable", `Incomplete or unsafe record ${index} must normalize to unverified.`);
  assert(normalized.sourceName === "Source could not be verified", `Incomplete or unsafe record ${index} must not preserve fake source name.`);
  assert(normalized.confidenceLabel === "Unavailable — source could not be verified", `Incomplete or unsafe record ${index} must not preserve unsafe confidence.`);
});

const disclosure = registry.buildSourceDisclosure(verifiedSource);
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

[
  "fetch(",
  "XMLHttpRequest",
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
});

console.log("[nexus-phase-102-agriculture-source-registry-hardening-qa] passed");
