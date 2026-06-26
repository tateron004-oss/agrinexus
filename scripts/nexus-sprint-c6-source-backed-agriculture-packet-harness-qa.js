const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C6_SOURCE_BACKED_AGRICULTURE_PACKET_HARNESS.md"),
  c5Doc: path.join(root, "docs", "NEXUS_SPRINT_C5_SOURCE_BACKED_AGRICULTURE_READINESS_DESIGN.md"),
  harness: path.join(root, "public", "nexus-sprint-c6-source-backed-agriculture-packet-harness.js"),
  sourceRegistry: path.join(root, "public", "nexus-agriculture-source-registry.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c6-source-backed-agriculture-packet-harness-qa] ${message}`);
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
const c5Doc = fs.readFileSync(files.c5Doc, "utf8");
const harnessSource = fs.readFileSync(files.harness, "utf8");
const activeRuntime = [files.index, files.app, files.server].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const harness = require(files.harness);
const sourceRegistry = require(files.sourceRegistry);

includesAll(doc, [
  "Purpose",
  "Harness Decision",
  "Packet Contract",
  "Eligible Fixture Prompt Families",
  "Excluded Prompt Families",
  "No-Execution Authority",
  "Runtime Boundary",
  "QA Expectations",
  "Browser Validation",
  "Sprint C7 Recommendation",
  "fixture-only",
  "No action has been taken",
  "Browser validation is not required"
], "Sprint C6 packet harness doc");

includesAll(doc, [
  "`executionAllowed: false`",
  "`sideEffectsAllowed: false`",
  "`providerHandoffAllowed: false`",
  "`communicationsAllowed: false`",
  "`callAllowed: false`",
  "`messageAllowed: false`",
  "`marketplaceTransactionAllowed: false`",
  "`paymentAllowed: false`",
  "`locationRequestAllowed: false`",
  "`locationSharingAllowed: false`",
  "`cameraRequestAllowed: false`",
  "`microphoneActivationAllowed: false`",
  "`medicalActionAllowed: false`",
  "`pharmacyActionAllowed: false`",
  "`emergencyDispatchAllowed: false`",
  "`backendWriteAllowed: false`",
  "`storageWriteAllowed: false`",
  "`networkLookupAllowed: false`",
  "`pendingActionCreationAllowed: false`",
  "`routeAutoOpenAllowed: false`",
  "`modalAutoOpenAllowed: false`"
], "Sprint C6 no-execution authority");

assert(c5Doc.includes("deterministic fixture-only source-backed agriculture packet harness"), "Sprint C5 must recommend the C6 harness.");
assert(harness.HARNESS_VERSION === "nexus.sprintC6.sourceBackedAgriculturePacketHarness.v1", "harness version must be canonical.");
assert(harness.NO_EXECUTION_AUTHORITY.executionAllowed === false, "harness no-execution authority must default executionAllowed false.");
assert(sourceRegistry.isVerifiedSourceRecord(harness.FIXTURE_SOURCE) === true, "fixture source must satisfy the existing source registry contract.");

[
  ["Help me find agriculture training", "agriculture training"],
  ["Teach me how irrigation works", "irrigation learning"],
  ["I need help with crop issues", "crop symptom observation"],
  ["What should I check in my farm soil?", "safe first-check prompts"]
].forEach(([prompt, family]) => {
  const packet = harness.buildFixtureSourceBackedAgriculturePacket(prompt);
  assert(packet.schemaVersion === harness.HARNESS_VERSION, `${prompt} packet must use the harness schema.`);
  assert(packet.eligible === true, `${prompt} must produce an eligible source-backed fixture packet.`);
  assert(packet.promptFamily === family, `${prompt} must infer ${family}.`);
  assert(packet.evidenceTitle === "Evidence & Verification", `${prompt} must include Evidence & Verification.`);
  assert(packet.sourceBacked === true && packet.sourceStatus === "source-backed", `${prompt} must be source-backed.`);
  assert(packet.sourceName === harness.FIXTURE_SOURCE.name, `${prompt} must expose source name.`);
  assert(packet.contractId === harness.FIXTURE_SOURCE.contractId, `${prompt} must expose source contract ID.`);
  assert(packet.verificationStatus === "verified", `${prompt} must expose verified status.`);
  assert(Array.isArray(packet.sourceSupportedClaims) && packet.sourceSupportedClaims.length >= 2, `${prompt} must include source-supported claims.`);
  assert(Array.isArray(packet.nexusInferences) && packet.nexusInferences.some(item => /did not perform live lookup/i.test(item)), `${prompt} must disclose no live lookup.`);
  assert(/local/i.test(packet.localApplicabilityWarning), `${prompt} must include local applicability warning.`);
  assert(packet.noActionDisclosure === "No action has been taken.", `${prompt} must disclose no action.`);
  Object.keys(harness.NO_EXECUTION_AUTHORITY).forEach(flag => assert(packet[flag] === false, `${prompt} ${flag} must remain false.`));
});

[
  "Call an extension worker",
  "Message the seller",
  "Buy seeds",
  "Pay for fertilizer",
  "Use my location to find farms near me",
  "Open my camera for crop diagnosis",
  "Schedule an appointment",
  "Emergency pesticide poisoning",
  "Tell me the pesticide dose to spray"
].forEach(prompt => {
  const packet = harness.buildFixtureSourceBackedAgriculturePacket(prompt);
  assert(packet.eligible === false, `${prompt} must be ineligible.`);
  assert(packet.sourceBacked === false, `${prompt} must not be source-backed.`);
  assert(packet.noActionDisclosure === "No action has been taken.", `${prompt} must disclose no action.`);
  Object.keys(harness.NO_EXECUTION_AUTHORITY).forEach(flag => assert(packet[flag] === false, `${prompt} ${flag} must remain false.`));
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
  assert(!harnessSource.includes(fragment), `harness must not include side-effect/runtime API: ${fragment}`);
});

[
  "nexus-sprint-c6-source-backed-agriculture-packet-harness.js",
  "NexusSprintC6SourceBackedAgriculturePacketHarness"
].forEach(fragment => {
  assert(!activeRuntime.includes(fragment), `active runtime must not load or reference C6 harness: ${fragment}`);
});

const alias = "qa:nexus-sprint-c6-source-backed-agriculture-packet-harness";
const command = "node scripts/nexus-sprint-c6-source-backed-agriculture-packet-harness-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c6-source-backed-agriculture-packet-harness-qa.js"), "qa-suite must include Sprint C6 QA.");

console.log("[nexus-sprint-c6-source-backed-agriculture-packet-harness-qa] passed");
