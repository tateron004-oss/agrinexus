const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C17_SOURCE_BACKED_AGRICULTURE_SURFACE_COPY_MODEL.md"),
  c16Doc: path.join(root, "docs", "NEXUS_SPRINT_C16_SOURCE_BACKED_AGRICULTURE_VISIBLE_SURFACE_COPY_LAYOUT_REVIEW_PLAN.md"),
  c17Module: path.join(root, "public", "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const blockedRuntimeFragments = [
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

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
  console.error(`[nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa] ${message}`);
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
const c16Doc = read(files.c16Doc);
const c17Source = read(files.c17Module);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c17 = require(files.c17Module);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Contract Module",
  "Copy Readiness Rules",
  "Metadata-Only Sections",
  "Review-Only Controls",
  "No Runtime Authority",
  "Safe Fixture Expectations",
  "Unsupported Safe Prompt Expectations",
  "Excluded Prompt Expectations",
  "Standard User Boundary",
  "Sprint C17 QA Expectations",
  "Sprint C18 Recommendation",
  "This sprint remains inert",
  "does not render DOM",
  "does not load C17 in `public/index.html`",
  "does not import C17 in `public/app.js`",
  "does not change backend behavior"
], "Sprint C17 copy model doc");

includesAll(doc, [
  "`Evidence & Verification`",
  "`What this source supports`",
  "`What Nexus inferred`",
  "`Local applicability`",
  "`What Nexus is not claiming`",
  "`Action status`",
  "Source: {sourceName}",
  "Type: {sourceType}",
  "Source contract: {contractId}",
  "Verification: {verificationStatus}",
  "Freshness: {freshnessLabel}",
  "Confidence: {confidenceLabel}",
  "`No action has been taken.`"
], "metadata-only sections");

includesAll(doc, [
  "`Review source details`",
  "`Not now`",
  "`disabled: true`",
  "`executionAllowed: false`",
  "`clickHandlerAllowed: false`"
], "review-only controls");

authorityFalseFields.forEach(field => {
  assert(doc.includes(field), `No Runtime Authority section must document ${field}.`);
});

includesAll(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?",
  "How do I prepare for drought?",
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
], "prompt expectations");

assert(c16Doc.includes("Sprint C17 should add a fixture-only source-backed agriculture surface copy model"), "C16 doc must recommend C17 copy model.");
assert(c17.COPY_MODEL_VERSION === "nexus.sprintC17.sourceBackedAgricultureSurfaceCopyModel.v1", "C17 copy model version must be stable.");
assert(typeof c17.buildSourceBackedAgricultureSurfaceCopyModel === "function", "C17 copy model builder must be exported.");

[
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?"
].forEach(prompt => {
  const enabled = c17.buildSourceBackedAgricultureSurfaceCopyModel(prompt, { [flagName]: true });
  assert(enabled.copyReady === true, `safe prompt should be copy-ready with explicit fixture flag: ${prompt}`);
  assert(enabled.title === "Agriculture Source Review", `safe prompt should expose stable title: ${prompt}`);
  assert(enabled.noActionDisclosure === "No action has been taken.", `safe prompt should preserve no-action disclosure: ${prompt}`);
  assert(Array.isArray(enabled.sections) && enabled.sections.length === 6, `safe prompt should expose six metadata-only sections: ${prompt}`);
  assert(enabled.sections.some(section => section.heading === "Evidence & Verification"), `safe prompt should include evidence section: ${prompt}`);
  assert(enabled.sections.some(section => section.heading === "Action status" && section.text === "No action has been taken."), `safe prompt should include action status: ${prompt}`);
  const evidence = enabled.sections.find(section => section.id === "evidence-verification");
  assert(evidence && Array.isArray(evidence.lines) && evidence.lines.length === 6, `safe prompt should include evidence lines: ${prompt}`);
  ["Source", "Type", "Source contract", "Verification", "Freshness", "Confidence"].forEach(label => {
    assert(evidence.lines.some(line => line.label === label && line.displayText.startsWith(`${label}: `)), `evidence section should include ${label}: ${prompt}`);
  });
  assert(Array.isArray(enabled.reviewOnlyControls) && enabled.reviewOnlyControls.length === 2, `safe prompt should describe two inert review-only controls: ${prompt}`);
  enabled.reviewOnlyControls.forEach(control => {
    assert(control.disabled === true, `review-only control must be disabled: ${prompt}`);
    assert(control.executionAllowed === false, `review-only control must not execute: ${prompt}`);
    assert(control.clickHandlerAllowed === false, `review-only control must not have click handler: ${prompt}`);
  });

  const disabled = c17.buildSourceBackedAgricultureSurfaceCopyModel(prompt, {});
  assert(disabled.copyReady === false, `safe prompt must remain not copy-ready without explicit fixture flag: ${prompt}`);
});

const unsupportedSafePrompt = c17.buildSourceBackedAgricultureSurfaceCopyModel("How do I prepare for drought?", { [flagName]: true });
assert(unsupportedSafePrompt.copyReady === false, "drought prompt must remain not copy-ready until C6 source coverage exists.");

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
  const result = c17.buildSourceBackedAgricultureSurfaceCopyModel(prompt, { [flagName]: true });
  assert(result.copyReady === false, `excluded prompt must remain not copy-ready even with explicit fixture flag: ${prompt}`);
});

[
  c17.buildSourceBackedAgricultureSurfaceCopyModel("Help me find agriculture training", { [flagName]: true }),
  c17.buildSourceBackedAgricultureSurfaceCopyModel("Help me find agriculture training", {}),
  c17.buildSourceBackedAgricultureSurfaceCopyModel("Buy seeds", { [flagName]: true })
].forEach((result, index) => {
  authorityFalseFields.forEach(field => {
    assert(result[field] === false, `copy model result ${index} must keep ${field} false.`);
  });
  assert(result.noActionDisclosure === "No action has been taken.", `copy model result ${index} must preserve no-action disclosure.`);
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
  assert(!c17Source.includes(fragment), `C17 module must not use side-effect API fragment: ${fragment}`);
});

blockedRuntimeFragments.forEach(fragment => {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
});

const alias = "qa:nexus-sprint-c17-source-backed-agriculture-surface-copy-model";
const command = "node scripts/nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa.js"), "qa-suite must include Sprint C17 QA.");

console.log("[nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa] passed");
