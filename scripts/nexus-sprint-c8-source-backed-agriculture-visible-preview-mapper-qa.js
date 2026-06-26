const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C8_SOURCE_BACKED_AGRICULTURE_VISIBLE_PREVIEW_MAPPER.md"),
  c7Doc: path.join(root, "docs", "NEXUS_SPRINT_C7_FIXTURE_TO_VISIBLE_PREVIEW_REVIEW_PLAN.md"),
  c6Harness: path.join(root, "public", "nexus-sprint-c6-source-backed-agriculture-packet-harness.js"),
  mapper: path.join(root, "public", "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper-qa] ${message}`);
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
const c7Doc = fs.readFileSync(files.c7Doc, "utf8");
const mapperSource = fs.readFileSync(files.mapper, "utf8");
const activeRuntime = [files.index, files.app, files.server].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const harness = require(files.c6Harness);
const mapper = require(files.mapper);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Mapper Contract",
  "Metadata-Only Boundary",
  "Standard User Boundary",
  "QA Expectations",
  "Browser Validation",
  "Sprint C9 Recommendation",
  "does not render DOM",
  "does not wire into Standard User runtime"
], "Sprint C8 mapper doc");

includesAll(doc, [
  "`visiblePreviewAllowed: true`",
  "`Evidence & Verification`",
  "verification status is `verified`",
  "`No action has been taken.`",
  "every execution authority flag is exactly `false`",
  "`renderDomAllowed: false`",
  "no provider handoff",
  "no calls, messages, WhatsApp, Telegram, SMS, or email",
  "no marketplace transaction",
  "no payment",
  "no location, camera, microphone, upload, or media capture",
  "no medical, pharmacy, telehealth, appointment, or emergency execution"
], "mapper contract and metadata-only boundary");

assert(c7Doc.includes("Sprint C8 should add an inert mapper contract module"), "Sprint C7 must recommend the C8 mapper.");
assert(mapper.MAPPER_VERSION === "nexus.sprintC8.sourceBackedAgricultureVisiblePreviewMapper.v1", "mapper version must be canonical.");

const safePacket = harness.buildFixtureSourceBackedAgriculturePacket("I need help with crop issues");
assert(mapper.isMappableSourceBackedAgriculturePacket(safePacket) === true, "safe C6 packet must be mappable.");
const preview = mapper.mapPacketToVisiblePreviewModel(safePacket);
assert(preview.mappable === true && preview.visiblePreviewAllowed === true, "safe packet must map to visible-preview metadata.");
assert(preview.renderDomAllowed === false && preview.renderTargetRequired === false, "mapper must remain metadata-only.");
assert(preview.evidenceTitle === "Evidence & Verification", "preview metadata must preserve Evidence & Verification.");
assert(preview.sourceStatus === "source-backed", "preview metadata must preserve source-backed status.");
assert(preview.contractId === safePacket.contractId, "preview metadata must preserve contract ID.");
assert(preview.noActionDisclosure === "No action has been taken.", "preview metadata must preserve no-action disclosure.");
assert(Array.isArray(preview.reviewOnlyControls) && preview.reviewOnlyControls[0].disabled === true, "preview controls must be disabled review-only controls.");
mapper.REQUIRED_FALSE_FLAGS.forEach(flag => assert(preview[flag] === false, `preview ${flag} must remain false.`));

[
  { ...safePacket, executionAllowed: true },
  { ...safePacket, sourceBacked: false },
  { ...safePacket, sourceStatus: "not-source-backed" },
  { ...safePacket, verificationStatus: "unverified" },
  { ...safePacket, contractId: "" },
  harness.buildFixtureSourceBackedAgriculturePacket("Call an extension worker")
].forEach((packet, index) => {
  assert(mapper.isMappableSourceBackedAgriculturePacket(packet) === false, `tampered packet ${index} must not be mappable.`);
  const rejected = mapper.mapPacketToVisiblePreviewModel(packet);
  assert(rejected.visiblePreviewAllowed === false, `tampered packet ${index} must not allow visible preview.`);
  assert(rejected.renderDomAllowed === false && rejected.executionAllowed === false, `tampered packet ${index} must remain inert.`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "AudioContext",
  "window.open",
  "location.href",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "PaymentRequest",
  "navigator.sendBeacon",
  "Notification",
  "setTimeout(",
  "addEventListener(",
  "document.createElement"
].forEach(fragment => {
  assert(!mapperSource.includes(fragment), `mapper must not include side-effect/runtime API: ${fragment}`);
});

[
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js",
  "NexusSprintC8SourceBackedAgricultureVisiblePreviewMapper"
].forEach(fragment => {
  assert(!activeRuntime.includes(fragment), `active runtime must not load or reference C8 mapper: ${fragment}`);
});

const alias = "qa:nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper";
const command = "node scripts/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper-qa.js"), "qa-suite must include Sprint C8 QA.");

console.log("[nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper-qa] passed");
