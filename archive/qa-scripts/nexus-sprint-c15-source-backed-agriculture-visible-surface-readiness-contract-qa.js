const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C15_SOURCE_BACKED_AGRICULTURE_VISIBLE_SURFACE_READINESS_CONTRACT.md"),
  c14Doc: path.join(root, "docs", "NEXUS_SPRINT_C14_SOURCE_BACKED_AGRICULTURE_ELIGIBILITY_HANDOFF_BROWSER_VALIDATION_PLAN.md"),
  c15Module: path.join(root, "public", "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const c15FileName = "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js";
const c13FileName = "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js";
const c8MapperFileName = "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js";
const flagName = "enableSourceBackedAgricultureRuntimeMapping";

const authorityFalseFields = [
  "runtimeWiringAllowed",
  "renderDomAllowed",
  "visibleRuntimeSurfaceAllowed",
  "clickHandlerAllowed",
  "formSubmissionAllowed",
  "navigationAllowed",
  "routeAutoOpenAllowed",
  "modalAutoOpenAllowed",
  "permissionPromptAllowed",
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
  "pendingActionCreationAllowed",
  "locationRequestAllowed",
  "cameraRequestAllowed",
  "medicalActionAllowed",
  "pharmacyActionAllowed",
  "emergencyDispatchAllowed"
];

function fail(message) {
  console.error(`[nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract-qa] ${message}`);
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
const c14Doc = read(files.c14Doc);
const c15Source = read(files.c15Module);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c15 = require(files.c15Module);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Contract Module",
  "Fixture-Only Surface Readiness",
  "Required Future Visible Fields",
  "Review-Only Controls",
  "No Runtime Authority",
  "Safe Fixture Expectations",
  "Unsupported Safe Prompt Expectations",
  "Excluded Prompt Expectations",
  "Standard User Boundary",
  "Sprint C15 QA Expectations",
  "Sprint C16 Recommendation",
  "This sprint remains inert",
  "does not render DOM",
  "does not wire any module into Standard User runtime",
  "does not change backend behavior"
], "Sprint C15 visible surface readiness doc");

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
], "Standard User boundary");

[
  "title",
  "evidenceTitle",
  "sourceStatus",
  "sourceName",
  "sourceType",
  "contractId",
  "verificationStatus",
  "freshnessLabel",
  "confidenceLabel",
  "localApplicabilityWarning",
  "noActionDisclosure"
].forEach(field => {
  assert(doc.includes(field), `Required Future Visible Fields must document ${field}.`);
});

authorityFalseFields.forEach(field => {
  assert(doc.includes(field), `No Runtime Authority section must document ${field}.`);
});

includesAll(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?",
  "How do I prepare for drought?"
], "fixture prompt expectations");

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
], "excluded prompt expectations");

assert(c14Doc.includes("Sprint C15 should add a fixture-only visible-surface readiness contract for the C13 output shape"), "C14 doc must recommend C15 visible-surface readiness contract.");
assert(c15.SURFACE_CONTRACT_VERSION === "nexus.sprintC15.sourceBackedAgricultureVisibleSurfaceReadinessContract.v1", "C15 surface contract version must be stable.");
assert(typeof c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel === "function", "C15 surface model builder must be exported.");
assert(Array.isArray(c15.REQUIRED_VISIBLE_FIELDS), "C15 required visible fields must be exported as an array.");

[
  "title",
  "evidenceTitle",
  "sourceStatus",
  "sourceName",
  "sourceType",
  "contractId",
  "verificationStatus",
  "freshnessLabel",
  "confidenceLabel",
  "localApplicabilityWarning",
  "noActionDisclosure"
].forEach(field => {
  assert(c15.REQUIRED_VISIBLE_FIELDS.includes(field), `C15 required visible fields export must include ${field}.`);
});

[
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?"
].forEach(prompt => {
  const enabled = c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel(prompt, { [flagName]: true });
  assert(enabled.surfaceReady === true, `safe prompt should be surface-ready with explicit fixture flag: ${prompt}`);
  assert(enabled.handoffEligible === true, `safe prompt should preserve handoff eligibility: ${prompt}`);
  assert(enabled.title === "Agriculture Source Review", `safe prompt should expose stable title: ${prompt}`);
  assert(enabled.evidenceTitle === "Evidence & Verification", `safe prompt should expose stable evidence title: ${prompt}`);
  assert(enabled.noActionDisclosure === "No action has been taken.", `safe prompt should preserve no-action disclosure: ${prompt}`);
  assert(Array.isArray(enabled.requiredVisibleFields) && enabled.requiredVisibleFields.length >= 10, `safe prompt should enumerate required visible fields: ${prompt}`);
  assert(Array.isArray(enabled.reviewOnlyControls) && enabled.reviewOnlyControls.length === 1, `safe prompt should describe one inert review-only control: ${prompt}`);
  assert(enabled.reviewOnlyControls[0].disabled === true, `review-only control must be disabled: ${prompt}`);
  assert(enabled.reviewOnlyControls[0].executionAllowed === false, `review-only control must not execute: ${prompt}`);
  assert(enabled.reviewOnlyControls[0].clickHandlerAllowed === false, `review-only control must not have click handler: ${prompt}`);

  const disabled = c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel(prompt, {});
  assert(disabled.surfaceReady === false, `safe prompt must remain not surface-ready without explicit fixture flag: ${prompt}`);
});

const unsupportedSafePrompt = c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel("How do I prepare for drought?", { [flagName]: true });
assert(unsupportedSafePrompt.surfaceReady === false, "drought prompt must remain not surface-ready until C6 source coverage exists.");
assert(unsupportedSafePrompt.handoffEligible === false, "drought prompt must not claim handoff eligibility.");

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
  const result = c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel(prompt, { [flagName]: true });
  assert(result.surfaceReady === false, `excluded prompt must remain not surface-ready even with explicit fixture flag: ${prompt}`);
  assert(result.handoffEligible === false, `excluded prompt must not claim handoff eligibility: ${prompt}`);
});

[
  c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel("Help me find agriculture training", { [flagName]: true }),
  c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel("Help me find agriculture training", {}),
  c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel("Buy seeds", { [flagName]: true })
].forEach((result, index) => {
  authorityFalseFields.forEach(field => {
    assert(result[field] === false, `surface result ${index} must keep ${field} false.`);
  });
  assert(result.noActionDisclosure === "No action has been taken.", `surface result ${index} must preserve no-action disclosure.`);
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
  "appendChild",
  "querySelector",
  "addEventListener",
  "postMessage",
  "confirm(",
  "alert("
].forEach(fragment => {
  assert(!c15Source.includes(fragment), `C15 module must not use side-effect API fragment: ${fragment}`);
});

assert(!index.includes(c15FileName), "public/index.html must not load C15 module.");
assert(!app.includes(c15FileName), "public/app.js must not reference C15 module.");
assert(!server.includes(c15FileName), "server.js must not explicitly inject or special-case C15 module.");
assert(!index.includes(c13FileName), "public/index.html must still not load C13 module.");
assert(!app.includes(c13FileName), "public/app.js must still not reference C13 module.");
assert(!index.includes(c8MapperFileName), "public/index.html must still not load C8 mapper.");
assert(!server.includes(c8MapperFileName), "server.js must still not special-case C8 mapper.");

const alias = "qa:nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract";
const command = "node scripts/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract-qa.js"), "qa-suite must include Sprint C15 QA.");

console.log("[nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract-qa] passed");
