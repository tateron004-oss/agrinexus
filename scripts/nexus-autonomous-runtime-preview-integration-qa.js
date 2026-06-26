const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  styles: path.join(root, "public", "styles.css"),
  agricultureCard: path.join(root, "public", "nexus-agriculture-support-response-card.js"),
  sourceRegistry: path.join(root, "public", "nexus-agriculture-source-registry.js"),
  actionContract: path.join(root, "public", "nexus-permission-gated-action-contract.js"),
  intentRouter: path.join(root, "public", "nexus-voice-text-intent-router.js"),
  plannerPreview: path.join(root, "public", "nexus-planner-preview-contract.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-autonomous-runtime-preview-integration-qa] ${message}`);
    process.exit(1);
  }
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const index = fs.readFileSync(files.index, "utf8");
const app = fs.readFileSync(files.app, "utf8");
const styles = fs.readFileSync(files.styles, "utf8");
const agricultureCardSource = fs.readFileSync(files.agricultureCard, "utf8");
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const sourceRegistry = require(files.sourceRegistry);
const actionContract = require(files.actionContract);
const intentRouter = require(files.intentRouter);
const plannerPreview = require(files.plannerPreview);

const expectedScriptOrder = [
  "/nexus-agriculture-source-registry.js?v=nexus-phase-102",
  "/nexus-permission-gated-action-contract.js?v=nexus-phase-103",
  "/nexus-voice-text-intent-router.js?v=nexus-phase-104",
  "/nexus-planner-preview-contract.js?v=nexus-phase-105",
  "/nexus-agriculture-support-response-card.js?v=nexus-phase-101",
  "/app.js?v="
];

let lastIndex = -1;
expectedScriptOrder.forEach(src => {
  const current = index.indexOf(src);
  assert(current !== -1, `index.html must load ${src}.`);
  assert(current > lastIndex, `${src} must load after the previous autonomous helper.`);
  lastIndex = current;
});

assert(index.indexOf("/nexus-voice-text-intent-router.js") < index.indexOf("/app.js"), "intent router must load before app.js.");
assert(index.indexOf("/nexus-planner-preview-contract.js") < index.indexOf("/app.js"), "planner preview must load before app.js.");
assert(index.includes("/nexus-agriculture-support-response-card.js?v=nexus-phase-101"), "Phase 101 agriculture card loader must remain present.");

[
  "nexusAutonomousRuntimeHelpers",
  "renderNexusAutonomousRuntimePreview",
  "installNexusAutonomousRuntimePreview",
  "routeNexusIntent",
  "buildActionContract",
  "buildPlannerPreview",
  "Nexus Plan Preview",
  "No action has been taken.",
  "data-nexus-autonomous-runtime-preview"
].forEach(fragment => assert(app.includes(fragment), `app.js must include Sprint B integration fragment: ${fragment}`));

assert(styles.includes(".nexus-autonomous-runtime-preview"), "styles must include autonomous preview card styling.");
assert(agricultureCardSource.includes("NexusAgricultureSourceRegistry"), "agriculture card must consult source registry when available.");

const generalSource = sourceRegistry.normalizeAgricultureSourceRecord(null);
assert(generalSource.status === "general guidance", "default agriculture source status must be general guidance.");
assert(/no live source lookup was performed/i.test(generalSource.freshnessLabel), "default freshness must disclose no live source lookup.");
assert(/general agriculture guidance only/i.test(generalSource.confidenceLabel), "default confidence must remain limited general guidance.");

const safeRoute = intentRouter.routeNexusIntent("My maize leaves are turning yellow");
assert(safeRoute.intentDomain === "agriculture-support", "safe agriculture prompt must route to agriculture-support.");
assert(safeRoute.routeStatus === "review-only", "safe agriculture prompt must be review-only.");
assert(safeRoute.executionAllowed === false && safeRoute.sideEffectsAllowed === false, "safe agriculture route must remain non-executing.");

const irrigationRoute = intentRouter.routeNexusIntent("How do I improve irrigation?");
assert(irrigationRoute.intentDomain === "agriculture-support", "irrigation prompt must route to agriculture-support.");
assert(irrigationRoute.routeStatus === "review-only", "irrigation prompt must be review-only.");
assert(irrigationRoute.executionAllowed === false && irrigationRoute.sideEffectsAllowed === false, "irrigation route must remain non-executing.");

const riskyRoute = intentRouter.routeNexusIntent("Nexus, call an agronomist");
assert(riskyRoute.intentDomain === "communication-request", "call prompt must route to communication-request.");
assert(riskyRoute.routeStatus === "permission-required", "call prompt must be permission-required.");
assert(riskyRoute.executionAllowed === false && riskyRoute.providerContactAllowed === false && riskyRoute.callAllowed === false, "call prompt must not execute or contact.");

const medicalRoute = intentRouter.routeNexusIntent("Nexus, get medical help");
assert(medicalRoute.intentDomain === "health-medical-request", "medical help prompt must route to health-medical-request.");
assert(medicalRoute.routeStatus === "permission-required", "medical help prompt must be permission-required.");
assert(medicalRoute.executionAllowed === false && medicalRoute.medicalActionAllowed === false, "medical help prompt must not execute a medical action.");

const blockedRoute = intentRouter.routeNexusIntent("Nexus, dispatch emergency help");
assert(blockedRoute.intentDomain === "emergency-request", "emergency prompt must route to emergency-request.");
assert(blockedRoute.routeStatus === "blocked", "emergency prompt must be blocked.");
assert(blockedRoute.emergencyDispatchAllowed === false, "emergency prompt must not dispatch.");

const action = actionContract.buildActionContract({ actionType: actionContract.ACTION_TYPES.CALL, summary: "Call preview" });
assert(action.executionAllowed === false, "action contract must remain non-executing.");
assert(action.sideEffectsAllowed === false, "action contract must disallow side effects.");
assert(/No provider has been contacted|No action has been taken/.test(action.userVisibleDisclosure), "action contract must disclose no execution.");

const plan = plannerPreview.buildPlannerPreview({
  title: "Nexus Plan Preview",
  steps: [{ title: "Review request", description: "Preview only", riskLevel: "low" }]
});
assert(plan.status === plannerPreview.PLAN_STATUS.PREVIEW_ONLY, "planner must produce preview-only status.");
assert(plannerPreview.assertPlannerPreviewSafe(plan), "planner preview must remain safe.");

const hiddenPlan = plannerPreview.buildPlannerPreview({
  title: "Hidden step",
  steps: [{ title: "Hidden", hidden: true }]
});
assert(hiddenPlan.status === plannerPreview.PLAN_STATUS.BLOCKED, "planner must block hidden steps.");

const sprintBAppSurface = [
  "function nexusAutonomousRuntimeHelpers",
  "function renderNexusAutonomousRuntimePreview",
  "function installNexusAutonomousRuntimePreview"
].map(marker => {
  const start = app.indexOf(marker);
  assert(start !== -1, `app.js must include marker ${marker}.`);
  return app.slice(start, start + 5200);
}).join("\n");

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
  "navigator.sendBeacon"
].forEach(forbidden => assert(!sprintBAppSurface.includes(forbidden), `Sprint B app integration must not include ${forbidden}.`));

assert(packageData.scripts["qa:nexus-autonomous-runtime-preview-integration"] === "node scripts/nexus-autonomous-runtime-preview-integration-qa.js", "package alias must exist.");
assert(qaSuite.includes("scripts/nexus-autonomous-runtime-preview-integration-qa.js"), "qa-suite must include autonomous runtime preview integration QA.");

console.log("[nexus-autonomous-runtime-preview-integration-qa] passed");
