const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C5_SOURCE_BACKED_AGRICULTURE_READINESS_DESIGN.md"),
  c3Doc: path.join(root, "docs", "NEXUS_SPRINT_C3_SOURCE_BACKED_AGRICULTURE_ACTIVATION_HARDENING.md"),
  c4Doc: path.join(root, "docs", "NEXUS_SPRINT_C4_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_BROWSER_VALIDATION.md"),
  sourceRegistry: path.join(root, "public", "nexus-agriculture-source-registry.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c5-source-backed-agriculture-readiness-design-qa] ${message}`);
    process.exit(1);
  }
}

function includesAll(source, fragments, label) {
  fragments.forEach(fragment => {
    assert(source.toLowerCase().includes(fragment.toLowerCase()), `${label} must include: ${fragment}`);
  });
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const doc = fs.readFileSync(files.doc, "utf8");
const c3Doc = fs.readFileSync(files.c3Doc, "utf8");
const c4Doc = fs.readFileSync(files.c4Doc, "utf8");
const registrySource = fs.readFileSync(files.sourceRegistry, "utf8");
const registry = require(files.sourceRegistry);
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");

includesAll(doc, [
  "1029510fa240b520effffe39099df7d7c030dce7",
  "Purpose",
  "Readiness Decision",
  "Verified Public Agriculture Source Contract",
  "Acceptable Source Categories",
  "Disallowed Source Categories",
  "Low-Risk Eligible Prompt Families",
  "Excluded Prompt Families",
  "Source-Backed Display Contract",
  "Confidence Label Boundary",
  "Local Applicability Boundary",
  "No-Execution Authority",
  "Provider, Communications, And Marketplace Boundary",
  "Location, Camera, Medical, Pharmacy, And Emergency Boundary",
  "Activation Checklist",
  "Rollback Strategy",
  "Sprint C6 Recommendation"
], "Sprint C5 readiness design doc");

includesAll(doc, [
  "`sourceId`",
  "`sourceName`",
  "`sourceOwner`",
  "`sourceOwnerType`",
  "`sourceType`",
  "`contractId`",
  "`verificationStatus`",
  "`enabled`",
  "`lastVerifiedAt`",
  "`sourceUpdatedAt`",
  "`freshnessLabel`",
  "`confidenceLabel`",
  "`supportedRegions`",
  "`supportedLanguages`",
  "`supportedPromptFamilies`",
  "`sourceSupportedClaims`",
  "`limitations`",
  "`forbiddenClaims`",
  "`auditRequirements`"
], "verified public agriculture source contract fields");

includesAll(doc, [
  "government agriculture extension services",
  "university extension programs",
  "public agricultural research institutes",
  "recognized agricultural NGOs",
  "cooperative advisory bodies",
  "public crop, pest, disease, irrigation, soil, drought, and weather advisories",
  "public regulatory safety references",
  "partner-provided agriculture advisory data"
], "acceptable source categories");

includesAll(doc, [
  "random blogs",
  "ads",
  "sponsored marketplace listings",
  "marketplace sellers",
  "buyer or seller claims",
  "unverified social media posts",
  "unverified forum content",
  "anonymous advice",
  "scraped content without owner or contract metadata",
  "AI-generated text without a cited verified source",
  "product marketing claims",
  "chemical dosage advice"
], "disallowed source categories");

includesAll(doc, [
  "crop symptom observation",
  "irrigation learning",
  "drought preparedness",
  "soil, compost, mulch, planting",
  "safe first-check prompts",
  "agriculture training",
  "source, freshness, and confidence explanation prompts"
], "low-risk eligible prompt families");

includesAll(doc, [
  "chemical dosage",
  "pesticide",
  "herbicide",
  "fungicide",
  "insecticide",
  "fertilizer",
  "call, message, email, WhatsApp, SMS, Telegram",
  "buy, sell, list, pay, order, quote, checkout",
  "precise location",
  "camera",
  "upload images",
  "appointment booking",
  "emergency routing",
  "backend write",
  "storage write",
  "pending action",
  "provider handoff"
], "excluded prompt families");

includesAll(doc, [
  "`Evidence & Verification`",
  "source status: `source-backed`",
  "source owner or source name",
  "source type",
  "source contract ID",
  "verification status",
  "freshness label",
  "confidence label",
  "source-supported claims",
  "Nexus inferences",
  "local applicability warning",
  "local expert escalation guidance",
  "claims Nexus is not making",
  "no-action disclosure",
  "source status: `not-source-backed`",
  "no live source lookup was performed"
], "source-backed display contract");

includesAll(doc, [
  "Source-backed - verify against local conditions before acting",
  "Limited - general Nexus guidance only",
  "Unavailable - source could not be verified",
  "guarantee",
  "definitive",
  "diagnosis",
  "yield guarantee",
  "chemical instruction",
  "expert review completed"
], "confidence label boundary");

includesAll(doc, [
  "local crop variety",
  "soil condition",
  "rainfall and irrigation state",
  "pest and disease pressure",
  "local regulation",
  "product labels and PPE",
  "local expert review"
], "local applicability boundary");

includesAll(doc, [
  "`executionAllowed: false`",
  "`sideEffectsAllowed: false`",
  "`providerHandoffAllowed: false`",
  "`permissionRequestAllowed: false`",
  "`backendWriteAllowed: false`",
  "`storageWriteAllowed: false`",
  "`hiddenStagedActionAllowed: false`",
  "`pendingActionCreationAllowed: false`",
  "`marketplaceTransactionAllowed: false`",
  "`paymentAllowed: false`",
  "`locationRequestAllowed: false`",
  "`cameraRequestAllowed: false`",
  "`medicalActionAllowed: false`",
  "`pharmacyActionAllowed: false`",
  "`emergencyDispatchAllowed: false`",
  "No pending agent actions may be created"
], "no-execution authority");

includesAll(doc, [
  "extension workers",
  "agronomists",
  "cooperatives",
  "sellers",
  "buyers",
  "phone, WhatsApp, Telegram, SMS, email",
  "AgriTrade remains browse/review only",
  "buy, sell, quote, checkout, order, payment"
], "provider communications marketplace boundary");

includesAll(doc, [
  "GPS",
  "browser location permission",
  "location sharing",
  "camera",
  "photo upload",
  "image capture",
  "medical diagnosis",
  "prescriptions",
  "refills",
  "pharmacy actions",
  "medical records",
  "emergency dispatch"
], "location camera medical pharmacy emergency boundary");

includesAll(doc, [
  "Verified agriculture source contract fixture exists",
  "Source validator rejects missing, unverified, unsafe, or incomplete records",
  "Source-backed card display includes Evidence & Verification",
  "Excluded prompts cannot render a source-backed agriculture card",
  "No provider handoff, communications, marketplace transaction, payment, location, camera, medical, pharmacy, emergency, backend write, storage write, or pending action is possible",
  "Standard User browser validation passes",
  "`nexus-workforce` and `all-safe` QA pass",
  "`db.json` and runtime mutations are restored before commit"
], "activation checklist");

includesAll(doc, [
  "Disable the source-backed agriculture feature flag or source path",
  "fall back to Sprint C2 general evidence mode",
  "Restore `db.json`",
  "Rerun Sprint C2, Sprint C3, Sprint C4, Sprint C5",
  "deterministic fixture-only source-backed agriculture packet harness",
  "should not perform live lookup",
  "should not change Standard User runtime behavior"
], "rollback and Sprint C6 recommendation");

assert(c3Doc.includes("Source-Backed Agriculture Activation Hardening"), "Sprint C3 hardening doc must remain present.");
assert(c4Doc.includes("Sprint C5 Readiness Recommendation"), "Sprint C4 browser validation must recommend Sprint C5 readiness.");

const allowedConfidence = "Source-backed â€” verify against local conditions before acting";
const registryAllowedConfidenceMatch = registrySource.match(/return label === "([^"]+)";/);
assert(registryAllowedConfidenceMatch, "existing source registry must expose the allowed confidence label contract.");

const verifiedSource = {
  name: "Verified Extension Fixture",
  sourceType: "extension",
  contractId: "ag-c5-fixture-001",
  freshnessLabel: "Verified 2026-06-26",
  confidenceLabel: registryAllowedConfidenceMatch[1],
  verificationStatus: "verified",
  enabled: true
};
assert(registry.isVerifiedSourceRecord(verifiedSource) === true, "existing source registry must accept a complete verified extension fixture.");
assert(registry.normalizeAgricultureSourceRecord(verifiedSource).status === "source-backed guidance", "verified fixture must normalize to source-backed guidance.");
assert(registry.normalizeAgricultureSourceRecord(null).status === "general guidance", "missing fixture must remain general guidance.");
assert(registry.normalizeAgricultureSourceRecord({ ...verifiedSource, enabled: false }).status === "unverified source unavailable", "disabled fixture must not become source-backed.");
assert(registry.normalizeAgricultureSourceRecord({ ...verifiedSource, confidenceLabel: "Guaranteed diagnosis" }).status === "unverified source unavailable", "unsafe confidence must not become source-backed.");

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
  "WebSocket"
].forEach(fragment => {
  assert(!registrySource.includes(fragment), `existing agriculture source registry must remain free of side-effect API: ${fragment}`);
});

const alias = "qa:nexus-sprint-c5-source-backed-agriculture-readiness-design";
const command = "node scripts/nexus-sprint-c5-source-backed-agriculture-readiness-design-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c5-source-backed-agriculture-readiness-design-qa.js"), "qa-suite must include Sprint C5 QA.");

console.log("[nexus-sprint-c5-source-backed-agriculture-readiness-design-qa] passed");
