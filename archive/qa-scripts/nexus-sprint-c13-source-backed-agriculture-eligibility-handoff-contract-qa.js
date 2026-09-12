const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C13_SOURCE_BACKED_AGRICULTURE_ELIGIBILITY_HANDOFF_CONTRACT.md"),
  c12Doc: path.join(root, "docs", "NEXUS_SPRINT_C12_SOURCE_BACKED_AGRICULTURE_FLAG_RESOLVER_CONTRACT.md"),
  c13Module: path.join(root, "public", "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js"),
  c12Module: path.join(root, "public", "nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract.js"),
  c8Mapper: path.join(root, "public", "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const c13FileName = "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js";
const c8MapperFileName = "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js";
const flagName = "enableSourceBackedAgricultureRuntimeMapping";
const authorityFalseFields = [
  "runtimeWiringAllowed",
  "loadMapperInRuntimeAllowed",
  "renderVisibleCardAllowed",
  "executionAllowed",
  "sideEffectsAllowed",
  "providerHandoffAllowed",
  "communicationsAllowed",
  "marketplaceTransactionAllowed",
  "paymentAllowed",
  "networkLookupAllowed",
  "storageReadAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "permissionPromptAllowed",
  "routeAutoOpenAllowed",
  "modalAutoOpenAllowed",
  "pendingActionCreationAllowed",
  "locationRequestAllowed",
  "cameraRequestAllowed",
  "medicalActionAllowed",
  "pharmacyActionAllowed",
  "emergencyDispatchAllowed"
];

function fail(message) {
  console.error(`[nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract-qa] ${message}`);
  process.exit(1);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function includesAll(source, fragments, label) {
  fragments.forEach(fragment => {
    assert(source.toLowerCase().includes(fragment.toLowerCase()), `${label} must include: ${fragment}`);
  });
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const doc = read(files.doc);
const c12Doc = read(files.c12Doc);
const c13Source = read(files.c13Module);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c13 = require(files.c13Module);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Contract Module",
  "Fixture-Only Boundary",
  "No Runtime Authority",
  "Safe Fixture Expectations",
  "Excluded Fixture Expectations",
  "Standard User Boundary",
  "Sprint C13 QA Expectations",
  "Sprint C14 Recommendation",
  "This sprint remains inert",
  "does not wire C6, C8, C12, or C13 into Standard User runtime",
  "does not add script tags",
  "does not render DOM",
  "does not change backend behavior"
], "Sprint C13 handoff doc");

includesAll(doc, [
  "C12 resolves `enableSourceBackedAgricultureRuntimeMapping` to explicit fixture boolean `true`",
  "C6 builds a source-backed agriculture packet",
  "C8 maps the packet to `visiblePreviewAllowed: true`",
  "C8 keeps `renderDomAllowed: false`",
  "every C13 authority flag remains `false`"
], "handoff eligibility requirements");

includesAll(doc, [
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "Standard User startup",
  "controlled renderer runtime",
  "planner",
  "policy engine",
  "provider registry",
  "native bridge",
  "confirmation paths"
], "fixture-only boundary");

authorityFalseFields.forEach(field => {
  assert(doc.includes(field), `No Runtime Authority section must document ${field}.`);
});

includesAll(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?",
  "How do I prepare for drought?",
  "must stay ineligible until a later sprint adds a verified C6 source-backed packet family for drought preparedness"
], "safe fixture expectations");

includesAll(doc, [
  "Call an extension worker",
  "Message the seller",
  "Buy seeds",
  "Pay for fertilizer",
  "Use my location to find farms near me",
  "Open my camera for crop diagnosis",
  "Schedule an appointment",
  "Emergency pesticide poisoning",
  "Tell me the pesticide dose to spray",
  "Sell my crop"
], "excluded fixture expectations");

assert(c12Doc.includes("Sprint C13 should add a fixture-only source-backed agriculture eligibility handoff contract"), "C12 doc must recommend C13 handoff contract.");
assert(c13.HANDOFF_VERSION === "nexus.sprintC13.sourceBackedAgricultureEligibilityHandoffContract.v1", "C13 handoff version must be stable.");
assert(typeof c13.buildSourceBackedAgricultureEligibilityHandoff === "function", "C13 builder must be exported.");

[
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?"
].forEach(prompt => {
  const enabled = c13.buildSourceBackedAgricultureEligibilityHandoff(prompt, { [flagName]: true });
  assert(enabled.handoffEligible === true, `safe prompt should be eligible with explicit fixture flag: ${prompt}`);
  assert(enabled.packetEligible === true, `safe prompt should have packet eligibility: ${prompt}`);
  assert(enabled.mapperAllowsPreview === true, `safe prompt should allow preview mapping: ${prompt}`);

  const disabled = c13.buildSourceBackedAgricultureEligibilityHandoff(prompt, {});
  assert(disabled.handoffEligible === false, `safe prompt must remain ineligible without explicit fixture flag: ${prompt}`);
});

const unsupportedSafePrompt = c13.buildSourceBackedAgricultureEligibilityHandoff("How do I prepare for drought?", { [flagName]: true });
assert(unsupportedSafePrompt.handoffEligible === false, "drought prompt must remain ineligible until a verified C6 source-backed packet family exists.");
assert(unsupportedSafePrompt.packetEligible === false, "drought prompt must not claim current packet eligibility.");

[
  "Call an extension worker",
  "Message the seller",
  "Buy seeds",
  "Pay for fertilizer",
  "Use my location to find farms near me",
  "Open my camera for crop diagnosis",
  "Schedule an appointment",
  "Emergency pesticide poisoning",
  "Tell me the pesticide dose to spray",
  "Sell my crop"
].forEach(prompt => {
  const result = c13.buildSourceBackedAgricultureEligibilityHandoff(prompt, { [flagName]: true });
  assert(result.handoffEligible === false, `excluded prompt must remain ineligible even with explicit fixture flag: ${prompt}`);
});

[
  c13.buildSourceBackedAgricultureEligibilityHandoff("Help me find agriculture training", { [flagName]: true }),
  c13.buildSourceBackedAgricultureEligibilityHandoff("Help me find agriculture training", {}),
  c13.buildSourceBackedAgricultureEligibilityHandoff("Buy seeds", { [flagName]: true })
].forEach((result, index) => {
  authorityFalseFields.forEach(field => {
    assert(result[field] === false, `handoff result ${index} must keep ${field} false.`);
  });
  assert(result.noActionDisclosure === "No action has been taken.", `handoff result ${index} must preserve no-action disclosure.`);
});

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.open",
  "location.href",
  "document.createElement",
  "addEventListener",
  "postMessage",
  "confirm(",
  "alert("
].forEach(fragment => {
  assert(!c13Source.includes(fragment), `C13 module must not use side-effect API fragment: ${fragment}`);
});

assert(!index.includes(c13FileName), "public/index.html must not load C13 module.");
assert(!app.includes(c13FileName), "public/app.js must not reference C13 module.");
assert(!server.includes(c13FileName), "server.js must not explicitly inject or special-case C13 module.");
assert(!index.includes(c8MapperFileName), "public/index.html must still not load C8 mapper.");
assert(!server.includes(c8MapperFileName), "server.js must still not special-case C8 mapper.");

const alias = "qa:nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract";
const command = "node scripts/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract-qa.js"), "qa-suite must include Sprint C13 QA.");

console.log("[nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract-qa] passed");
