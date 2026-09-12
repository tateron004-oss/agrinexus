const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C3_SOURCE_BACKED_AGRICULTURE_ACTIVATION_HARDENING.md"),
  c2Doc: path.join(root, "docs", "NEXUS_SPRINT_C2_EVIDENCE_ACCOUNTABILITY_STANDARD.md"),
  app: path.join(root, "public", "app.js"),
  index: path.join(root, "public", "index.html"),
  modeRequirements: path.join(root, "public", "nexus-mode-evidence-requirements.js"),
  evidencePacket: path.join(root, "public", "nexus-professional-evidence-packet.js"),
  sourceRegistry: path.join(root, "public", "nexus-agriculture-source-registry.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c3-source-backed-agriculture-activation-hardening-qa] ${message}`);
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
const c2Doc = fs.readFileSync(files.c2Doc, "utf8");
const app = fs.readFileSync(files.app, "utf8");
const index = fs.readFileSync(files.index, "utf8");
const modeSource = fs.readFileSync(files.modeRequirements, "utf8");
const packetSource = fs.readFileSync(files.evidencePacket, "utf8");
const registrySource = fs.readFileSync(files.sourceRegistry, "utf8");
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");

includesAll(doc, [
  "Current Sprint C2 Posture",
  "Agriculture Activation Goal",
  "Acceptable Public Agriculture Source Categories",
  "Disallowed Source Categories",
  "Low-Risk Agriculture Prompt Families",
  "Excluded And High-Risk Prompt Families",
  "Evidence & Verification Display Expectations",
  "No-Execution Requirements",
  "No-Provider-Handoff Requirements",
  "No-Payment And No-Marketplace-Transaction Requirements",
  "No-Location And No-Camera Requirements",
  "No-Medical, No-Pharmacy, No-Emergency Requirements",
  "Standard User Browser Validation Plan",
  "Rollback Strategy",
  "Future Sprint D Boundary"
], "Sprint C3 doc");

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
  "marketplace sellers",
  "unverified social media posts",
  "unverified forum content",
  "anonymous advice",
  "AI-generated text without a cited verified source"
], "disallowed source categories");

includesAll(doc, [
  "crop symptom observation",
  "irrigation learning",
  "drought preparedness",
  "soil, compost, mulch, planting",
  "safe first-check prompts",
  "agriculture training",
  "source, freshness, and confidence explanation"
], "low-risk prompt families");

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
  "medical",
  "pharmacy",
  "backend write",
  "storage write",
  "pending action"
], "excluded high-risk prompt families");

includesAll(doc, [
  "source status",
  "source owner or name",
  "source type",
  "source contract ID",
  "freshness label",
  "confidence label",
  "source-supported claims",
  "Nexus inferences",
  "limitations",
  "local applicability warning",
  "local expert escalation guidance",
  "claims Nexus is not making",
  "no-action disclosure"
], "Evidence & Verification expectations");

includesAll(doc, [
  "`executionAllowed: false`",
  "`sideEffectsAllowed: false`",
  "`providerHandoffAllowed: false`",
  "`permissionRequestAllowed: false`",
  "`backendWriteAllowed: false`",
  "`storageWriteAllowed: false`",
  "`networkAllowed: false`",
  "`hiddenStagedActionAllowed: false`",
  "`pendingActionCreationAllowed: false`",
  "No pending agent actions may be created"
], "no-execution requirements");

includesAll(doc, [
  "must not contact or hand off",
  "extension workers",
  "agronomists",
  "cooperatives",
  "sellers",
  "buyers",
  "phone, WhatsApp, Telegram, SMS, email",
  "separate permission, consent, provider readiness, and audit phase"
], "provider handoff block");

includesAll(doc, [
  "buy or sell flows",
  "marketplace listings",
  "buyer contact",
  "seller contact",
  "checkout",
  "payment",
  "wallet or bank action",
  "delivery or shipment scheduling",
  "order creation",
  "AgriTrade remains browse/review only"
], "payment and marketplace block");

includesAll(doc, [
  "GPS",
  "browser location permission",
  "location sharing",
  "camera",
  "photo upload",
  "image capture",
  "media scanning",
  "microphone activation"
], "location and camera block");

includesAll(doc, [
  "diagnose humans or animals",
  "prescribe medication",
  "refill prescriptions",
  "access medical records",
  "contact health providers",
  "book appointments",
  "dispatch emergency help",
  "route emergency services",
  "claim clinical review"
], "medical pharmacy emergency block");

includesAll(doc, [
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "My maize leaves are turning yellow",
  "Teach me how irrigation works",
  "Tell me how much pesticide to spray",
  "Call an agronomist",
  "Buy seeds",
  "Use my location",
  "Open my camera",
  "Get medical help",
  "Emergency help",
  "normal Standard User build behavior is preserved",
  "db.json"
], "Standard User browser validation plan");

includesAll(doc, [
  "Disable the source-backed agriculture feature flag or source path",
  "fall back to Sprint C2 general evidence mode",
  "Preserve the visible no-action and not-source-backed disclosures",
  "Rerun Sprint C2, Sprint C3",
  "Restore any runtime data mutation"
], "rollback strategy");

includesAll(doc, [
  "controlled user-approved action staging",
  "after source-backed review-only agriculture behavior is proven",
  "separate from provider execution",
  "must not enable live calls, messages, payments, marketplace transactions, location sharing, camera/media activation, health actions, pharmacy actions, emergency dispatch, backend writes, or hidden pending agent actions"
], "future Sprint D boundary");

assert(c2Doc.includes("Evidence & Verification"), "Sprint C2 doc must remain present and evidence-focused.");
assert(index.includes("/nexus-mode-evidence-requirements.js?v=nexus-sprint-c2"), "index must continue loading mode evidence requirements before app.js.");
assert(index.includes("/nexus-professional-evidence-packet.js?v=nexus-sprint-c2"), "index must continue loading professional evidence packet before app.js.");
assert(index.indexOf("/nexus-professional-evidence-packet.js") < index.indexOf("/app.js"), "evidence packet helper must load before app.js.");
assert(app.includes("data-nexus-evidence-verification"), "app must continue rendering Evidence & Verification.");
assert(app.includes("No source-supported claims are asserted in this preview."), "app must continue avoiding fabricated source-supported claims.");
assert(modeSource.includes("agriculture") && modeSource.includes("blockedClaims"), "mode evidence requirements must keep agriculture blocked claims.");
assert(packetSource.includes("not-source-backed") && packetSource.includes("assertEvidencePacketSafe"), "professional evidence packet must keep safe not-source-backed assertion.");
assert(registrySource.includes("general guidance") && registrySource.includes("isVerifiedSourceRecord"), "agriculture source registry must keep verification boundaries.");

const forbiddenRuntimeEdits = [
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
];
const sprintC3RuntimeSurface = doc;
forbiddenRuntimeEdits.forEach(fragment => {
  assert(!sprintC3RuntimeSurface.includes(fragment), `Sprint C3 doc must not propose direct runtime side effect API: ${fragment}`);
});

const alias = "qa:nexus-sprint-c3-source-backed-agriculture-activation-hardening";
const command = "node scripts/nexus-sprint-c3-source-backed-agriculture-activation-hardening-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c3-source-backed-agriculture-activation-hardening-qa.js"), "qa-suite must include Sprint C3 QA.");

console.log("[nexus-sprint-c3-source-backed-agriculture-activation-hardening-qa] passed");
