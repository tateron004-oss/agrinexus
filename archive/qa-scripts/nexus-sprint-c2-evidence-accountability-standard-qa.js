const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  modeRequirements: path.join(root, "public", "nexus-mode-evidence-requirements.js"),
  evidencePacket: path.join(root, "public", "nexus-professional-evidence-packet.js"),
  sourceRegistry: path.join(root, "public", "nexus-agriculture-source-registry.js"),
  intentRouter: path.join(root, "public", "nexus-voice-text-intent-router.js"),
  permissionReview: path.join(root, "public", "nexus-permission-review-contract.js"),
  auditEvent: path.join(root, "public", "nexus-audit-event-contract.js"),
  doc: path.join(root, "docs", "NEXUS_SPRINT_C2_EVIDENCE_ACCOUNTABILITY_STANDARD.md"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c2-evidence-accountability-standard-qa] ${message}`);
    process.exit(1);
  }
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const index = fs.readFileSync(files.index, "utf8");
const app = fs.readFileSync(files.app, "utf8");
const modeSource = fs.readFileSync(files.modeRequirements, "utf8");
const packetSource = fs.readFileSync(files.evidencePacket, "utf8");
const doc = fs.readFileSync(files.doc, "utf8");
const pkg = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const modeRequirements = require(files.modeRequirements);
const evidencePacket = require(files.evidencePacket);
const sourceRegistry = require(files.sourceRegistry);
const intentRouter = require(files.intentRouter);
const permissionReview = require(files.permissionReview);
const auditEvent = require(files.auditEvent);

const expectedOrder = [
  "/nexus-agriculture-source-registry.js?v=nexus-phase-102",
  "/nexus-permission-gated-action-contract.js?v=nexus-phase-103",
  "/nexus-voice-text-intent-router.js?v=nexus-phase-104",
  "/nexus-planner-preview-contract.js?v=nexus-phase-105",
  "/nexus-permission-review-contract.js?v=nexus-sprint-c",
  "/nexus-audit-event-contract.js?v=nexus-sprint-c",
  "/nexus-mode-evidence-requirements.js?v=nexus-sprint-c2",
  "/nexus-professional-evidence-packet.js?v=nexus-sprint-c2",
  "/nexus-agriculture-support-response-card.js?v=nexus-phase-101",
  "/app.js?v="
];

let lastIndex = -1;
expectedOrder.forEach(src => {
  const current = index.indexOf(src);
  assert(current !== -1, `index.html must load ${src}.`);
  assert(current > lastIndex, `${src} must load after the previous helper.`);
  lastIndex = current;
});

["MODE_REQUIREMENTS", "DOMAIN_MODE_MAP", "modeForIntentDomain", "getModeEvidenceRequirements", "assertModeEvidenceRequirementsSafe"].forEach(name => {
  assert(Object.prototype.hasOwnProperty.call(modeRequirements, name), `mode requirements helper must export ${name}.`);
});
["SCHEMA_VERSION", "SOURCE_STATUS", "buildEvidencePacket", "assertEvidencePacketSafe"].forEach(name => {
  assert(Object.prototype.hasOwnProperty.call(evidencePacket, name), `evidence packet helper must export ${name}.`);
});

["agriculture", "telehealth", "logistics", "marketplace", "workforce", "learning", "maps", "general"].forEach(mode => {
  const requirements = modeRequirements.getModeEvidenceRequirements(mode);
  assert(requirements.mode === mode, `${mode} requirements must normalize to the same mode.`);
  assert(Array.isArray(requirements.requiredEvidenceFields) && requirements.requiredEvidenceFields.length >= 3, `${mode} must enumerate required evidence fields.`);
  assert(Array.isArray(requirements.limitations) && requirements.limitations.length >= 1, `${mode} must include limitations.`);
  assert(Array.isArray(requirements.blockedClaims) && requirements.blockedClaims.length >= 1, `${mode} must include blocked claims.`);
  assert(modeRequirements.assertModeEvidenceRequirementsSafe(requirements), `${mode} requirements must pass safety assertion.`);
});

assert(modeRequirements.modeForIntentDomain("agriculture-support") === "agriculture", "agriculture support route must map to agriculture mode.");
assert(modeRequirements.modeForIntentDomain("health-medical-request") === "telehealth", "health route must map to telehealth mode.");
assert(modeRequirements.modeForIntentDomain("marketplace-request") === "marketplace", "marketplace route must map to marketplace mode.");
assert(modeRequirements.modeForIntentDomain("location-request") === "maps", "location route must map to maps mode.");

const agricultureRequirements = modeRequirements.getModeEvidenceRequirements("agriculture");
const defaultPacket = evidencePacket.buildEvidencePacket({
  mode: "agriculture",
  modeRequirements: agricultureRequirements,
  nexusInferences: ["Nexus inferred an agriculture support request from the prompt."],
  limitations: agricultureRequirements.limitations
});
assert(defaultPacket.schemaVersion === "nexus.professionalEvidencePacket.v1", "packet schema version must match Sprint C2 contract.");
assert(defaultPacket.sourceBacked === false, "default packet must not be source-backed.");
assert(defaultPacket.sourceStatus === "not-source-backed", "default packet must disclose not-source-backed status.");
assert(/no verified source lookup was performed/i.test(defaultPacket.freshnessLabel), "default freshness must disclose no verified source lookup.");
assert(/general Nexus guidance only/i.test(defaultPacket.confidenceLabel), "default confidence must remain limited.");
assert(defaultPacket.executionAllowed === false && defaultPacket.providerHandoffAllowed === false, "default packet must not allow execution or provider handoff.");
assert(defaultPacket.networkAllowed === false && defaultPacket.storageWriteAllowed === false && defaultPacket.backendWriteAllowed === false, "default packet must not allow network or writes.");
assert(evidencePacket.assertEvidencePacketSafe(defaultPacket), "default packet must pass safety assertion.");

const unverifiedPacket = evidencePacket.buildEvidencePacket({
  mode: "agriculture",
  modeRequirements: agricultureRequirements,
  sources: [{ name: "Unverified source", freshnessLabel: "today" }]
});
assert(unverifiedPacket.sourceBacked === false, "incomplete source metadata must not become source-backed.");
assert(unverifiedPacket.sourceStatus === "unverified-source", "incomplete source metadata must be unverified.");
assert(evidencePacket.assertEvidencePacketSafe(unverifiedPacket), "unverified packet must remain safe.");

const verifiedPacket = evidencePacket.buildEvidencePacket({
  mode: "agriculture",
  modeRequirements: agricultureRequirements,
  sources: [{
    enabled: true,
    verificationStatus: "verified",
    name: "County Extension Advisory",
    sourceType: "extension",
    contractId: "ag-extension-001",
    freshnessLabel: "Updated 2026-06-01",
    confidenceLabel: "Source-backed - verify against local conditions before acting"
  }],
  sourceSupportedClaims: ["Source-backed field review guidance is available for this connector."]
});
assert(verifiedPacket.sourceBacked === true, "verified source metadata must produce source-backed packet.");
assert(verifiedPacket.sourceStatus === "source-backed", "verified source metadata must set source-backed status.");
assert(verifiedPacket.sources.length === 1 && verifiedPacket.sources[0].contractId === "ag-extension-001", "verified packet must expose contract metadata summary.");
assert(evidencePacket.assertEvidencePacketSafe(verifiedPacket), "verified packet must remain safe.");

const sensitivePacket = evidencePacket.buildEvidencePacket({ phone: "555-0100", mode: "general" });
assert(sensitivePacket.sensitiveFieldBlocked === true, "sensitive field names must be blocked.");
assert(sensitivePacket.sourceBacked === false, "sensitive packet must not be source-backed.");
assert(evidencePacket.assertEvidencePacketSafe(sensitivePacket), "sensitive packet must still be inert and safe.");

const sourceRegistryDefault = sourceRegistry.normalizeAgricultureSourceRecord(null);
assert(sourceRegistryDefault.status === "general guidance", "source registry default must remain general guidance.");

const safeRoute = intentRouter.routeNexusIntent("I need help with crop issues");
assert(safeRoute.intentDomain === "agriculture-support", "crop prompt must still route to agriculture support.");
assert(safeRoute.executionAllowed === false && safeRoute.sideEffectsAllowed === false, "crop route must remain non-executing.");

const healthRoute = intentRouter.routeNexusIntent("Start telehealth video");
assert(healthRoute.intentDomain === "health-medical-request" || healthRoute.intentDomain === "camera-media-request", "telehealth/video prompt must remain a restricted health or camera route.");
assert(healthRoute.executionAllowed === false, "health/video route must not execute.");

assert(permissionReview.assertPermissionReviewSafe(permissionReview.buildPermissionReview({ domain: "telehealth", riskLevel: "high" })), "permission review contract must still be safe.");
assert(auditEvent.assertAuditEventPreviewSafe(auditEvent.buildAuditEventPreview({ domain: "telehealth", riskLevel: "high" })), "audit event contract must still be safe.");

["NexusModeEvidenceRequirements", "NexusProfessionalEvidencePacket", "buildNexusEvidencePacketForPreview", "nexusEvidenceMarkup", "Evidence & Verification", "data-nexus-evidence-verification", "Source-supported claims", "Nexus inferences", "Claims Nexus is not making"].forEach(fragment => {
  assert(app.includes(fragment), `app.js must include evidence accountability fragment: ${fragment}`);
});

["not source-backed", "source-supported claims", "Nexus inferences", "No action has been taken", "No provider contact", "No live source lookup", "provider contact", "payment", "location sharing", "camera", "medical", "emergency dispatch"].forEach(fragment => {
  assert(doc.toLowerCase().includes(fragment.toLowerCase()), `Sprint C2 doc must include: ${fragment}`);
});

const inertSurface = [modeSource, packetSource].join("\n");
["fetch(", "XMLHttpRequest", "navigator.geolocation", "getCurrentPosition", "watchPosition", "getUserMedia", "window.open", "location.href", "localStorage.setItem", "sessionStorage.setItem", "PaymentRequest", "navigator.sendBeacon", "WebSocket", "new AudioContext"].forEach(forbidden => {
  assert(!inertSurface.includes(forbidden), `Sprint C2 helper modules must not include ${forbidden}.`);
});

["diagnosis completed", "provider contacted", "payment started", "location shared", "emergency dispatch started"].forEach(unsafeClaim => {
  assert(!packetSource.includes(`"${unsafeClaim}"`), `evidence packet helper must not assert unsafe completed claim: ${unsafeClaim}`);
});

const alias = "qa:nexus-sprint-c2-evidence-accountability-standard";
const script = "node scripts/nexus-sprint-c2-evidence-accountability-standard-qa.js";
assert(pkg.scripts && pkg.scripts[alias] === script, `${alias} package script must run Sprint C2 QA.`);
assert(qaSuite.includes("scripts/nexus-sprint-c2-evidence-accountability-standard-qa.js"), "qa-suite must include Sprint C2 evidence QA.");

console.log("[nexus-sprint-c2-evidence-accountability-standard-qa] passed");
