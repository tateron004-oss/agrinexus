const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function pass(label) {
  console.log(`PASS ${label}`);
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  pass(label);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const renderStart = app.indexOf("function renderUserWorkspace()");
const renderEnd = app.indexOf("function renderUserAccessibilityPanel", renderStart);
assert(renderStart >= 0 && renderEnd > renderStart, "renderUserWorkspace exists");
const renderBlock = app.slice(renderStart, renderEnd);

assert(app.includes("function ensureNexusOsVisualBoundaryStyles"), "visual boundary style injector exists");
assert(app.includes("document.body.classList.add(\"nexus-os-visual-boundary\")"), "Standard User body receives Nexus OS visual boundary class");
assert(app.includes("body.user-mode.nexus-os-visual-boundary .sidebar"), "persistent sidebar is hidden for Standard User startup");
assert(app.includes("body.user-mode.nexus-os-visual-boundary #workspaceBar"), "workspace bar is hidden for Standard User startup");
assert(app.includes("body.user-mode.nexus-os-visual-boundary #userVoiceDock"), "bulky voice dock is hidden for Standard User startup");
assert(app.includes("body.user-mode.nexus-os-visual-boundary #userMobileDock"), "mobile dock is hidden for Standard User startup");
assert(renderBlock.includes("data-nexus-os-standard-startup=\"calm\""), "Standard User startup is marked as calm Nexus OS surface");
assert(renderBlock.includes("renderNexusTopWelcomeArea()"), "Nexus welcome area remains visible");
assert(renderBlock.includes('renderNexusUserWorkspaceSegment("Command center", renderNexusCommandCenterHero)'), "Ask Nexus hero remains visible");
assert(renderBlock.includes('renderNexusUserWorkspaceSegment("Mission workspace", renderNexusAgenticMissionWorkspace)'), "mission workspace remains available");
assert(renderBlock.includes('renderNexusUserWorkspaceSegment("Active workflow", renderNexusActiveWorkflowWorkspace)'), "active workflow workspace remains available");
assert(renderBlock.includes('renderNexusUserWorkspaceSegment("Calm helper", renderNexusOsCalmHelper)'), "small calm helper is visible");
assert(renderBlock.includes('renderNexusUserWorkspaceSegment("Review workspace details", renderNexusOsDeferredLegacySurfaces)'), "legacy surfaces are preserved behind deferred host");

const visibleStartupProhibited = [
  "renderNexusDemoSandboxControls(\"command-landing\")",
  "renderNexusUserTestingRuntimePanel()",
  "renderNexusPremiumMiniAppLauncher()",
  "renderNexusDemoRecordsPanel()",
  "renderNexusPremiumActivityReceiptsPanel()",
  "renderNexusMajorLaunchButtons()",
  "renderNexusRecentWorkflowsPanel()",
  "renderNexusRoleAwareControls()",
  "renderNexusCommandCenterStatusSummary()",
  "renderNexusCoreFeatureCards()",
  "renderNexusModeLauncher()",
  "renderNexusSuggestedActions()",
  "renderNexusVoiceInteractionBar()",
  "renderNexusAgenticBrainPanel()",
  "renderNexusKnowledgeRailPanel()",
  "renderNexusOperationsShelf()",
  "renderNexusRightUtilityColumn()"
];

visibleStartupProhibited.forEach((call) => {
  assert(!renderBlock.includes(call) || renderBlock.indexOf(call) > renderBlock.indexOf("renderNexusOsDeferredLegacySurfaces"), `${call} is not directly visible in Standard User startup`);
});

assert(app.includes("data-nexus-os-deferred-legacy-surfaces=\"true\""), "deferred legacy host is explicitly marked");
assert(app.includes("data-standard-user-startup-visible=\"false\" hidden aria-hidden=\"true\""), "deferred legacy host is hidden and aria-hidden");
assert(app.includes("Start with a goal. Nexus will open only what is needed."), "Standard User receives simple Nexus OS guidance");
assert(app.includes("No provider handoff") || app.includes("noProviderHandoff"), "no-provider-handoff safety remains represented");
assert(!/sent successfully|payment completed|provider contacted|appointment booked/i.test(renderBlock), "startup copy does not claim fake execution");
assert(packageJson.scripts["qa:nexus-os-visual-overload-boundary"] === "node scripts/nexus-os-visual-overload-boundary-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-os-visual-overload-boundary-qa.js"), "safe QA suite includes Rail 2 QA");

console.log("Nexus OS visual overload boundary QA passed.");
