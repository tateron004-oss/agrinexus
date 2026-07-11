const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  console.log(`PASS ${label}`);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const renderUserWorkspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");
const shellPanel = sectionBetween(app, "function renderNexusOsApplicationShellPanel()", "function renderNexusOsCalmHelper()");
const shellState = sectionBetween(app, "function nexusOsShellState()", "function renderNexusOsApplicationShellPanel()");
const deferredLegacyHost = sectionBetween(app, "function renderNexusOsDeferredLegacySurfaces()", "function renderNexusUserWorkspaceSegment");

assert(renderUserWorkspace.includes("data-nexus-os-standard-startup=\"true-conversation\""), "Standard User defaults to true conversational Nexus startup");
assert(renderUserWorkspace.includes('data-nexus-true-conversational-root="true"'), "true conversational root is mounted");
assert(!renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Application shell", renderNexusOsApplicationShellPanel)'), "Nexus OS diagnostic shell is not visible before mission content");
assert(deferredLegacyHost.includes("renderNexusOsApplicationShellPanel()"), "Nexus OS diagnostic shell remains available in the deferred host");
assert(deferredLegacyHost.includes("renderNexusOsGenesisReleasePanel()"), "Genesis release diagnostics remain available in the deferred host");
assert(app.includes("data-nexus-os-core-orb=\"true\""), "Nexus Core orb is present in the primary shell");
assert(app.includes("current: \"idle\""), "Nexus Core runtime has an honest initial idle state");
assert(app.includes("data-nexus-os-orb-state=\"${escapeHtml(coreState)}\""), "Nexus Core orb is driven by runtime state");
assert(app.includes("nexus-os-core-orb"), "Nexus Core orb has a dedicated shell class");

[
  "Returning user",
  "Anonymous user",
  "Existing mission available",
  "First visit ready",
  "Voice available",
  "Voice unavailable",
  "Offline",
  "Online / local fallback",
  "Low-bandwidth mode",
  "Standard bandwidth",
  "Keyboard focus starts at Ask Nexus"
].forEach((stateText) => assert(shellState.includes(stateText), `shell state supports ${stateText}`));

[
  "Language",
  "Mission history",
  "Privacy",
  "Accessibility",
  "Settings",
  "Connectivity"
].forEach((control) => assert(shellPanel.includes(control), `shell control exists: ${control}`));

[
  "Nexus, change language.",
  "Nexus, show receipts.",
  "Nexus, show privacy controls.",
  "Nexus, open accessibility help.",
  "Nexus, show language and safety settings.",
  "Nexus, show provider readiness."
].forEach((command) => assert(shellPanel.includes(command), `shell control command exists: ${command}`));
assert(shellPanel.includes("data-simple-command=\"${escapeHtml(command)}\""), "shell controls render through existing simple-command router");

assert(app.includes("Speak or type naturally. Nexus opens only the workflow needed for your mission."), "shell explains conversation-first operation");
assert(app.includes("body.user-mode.nexus-os-visual-boundary .sidebar"), "shell still hides the old persistent sidebar");
assert(app.includes("body.user-mode.nexus-os-visual-boundary #workspaceBar"), "shell still hides the old workspace bar");
assert(app.includes("body.user-mode.nexus-os-visual-boundary #userVoiceDock"), "shell still hides duplicate voice dock");
assert(!renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Review workspace details", renderNexusOsDeferredLegacySurfaces)'), "legacy functionality is not mounted on the true home startup");
assert(deferredLegacyHost.includes("data-nexus-os-deferred-legacy-surfaces=\"true\""), "legacy functionality remains defined behind deferred surfaces");
assert(!renderUserWorkspace.includes("renderNexusPlatformDashboard()"), "old dashboard is not rendered under Nexus OS shell");
assert(!/sent successfully|payment completed|provider contacted|appointment booked/i.test(shellPanel), "shell copy does not claim external execution");

assert(packageJson.scripts["qa:nexus-os-shell"] === "node scripts/nexus-os-shell-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-os-shell-qa.js"), "safe QA suite includes Nexus OS shell QA");

console.log("Nexus OS shell QA passed.");
