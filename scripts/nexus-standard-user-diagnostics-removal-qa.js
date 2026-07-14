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

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const renderUserWorkspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");
const deferredLegacyHost = sectionBetween(app, "function renderNexusOsDeferredLegacySurfaces()", "function renderNexusUserWorkspaceSegment");
const shellPanel = sectionBetween(app, "function renderNexusOsApplicationShellPanel()", "function renderNexusOsCalmHelper()");

assert(renderUserWorkspace.includes('data-nexus-genesis-experience-root="true"'), "Standard User render root remains the Genesis experience root");
assert(renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Genesis orb home", renderNexusTrueHome)'), "audio-first Genesis home is visible first");
assert(renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Audio companion", renderNexusAudioCompanionExperience)'), "audio companion is available after voice/session activation");
assert(renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Workflow workspace", renderNexusCommandCenterHero)'), "Ask Nexus command center remains available as workflow workspace");
assert(!renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Application shell", renderNexusOsApplicationShellPanel)'), "diagnostic application shell is removed from the visible startup stack");
assert(!renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Genesis release", renderNexusOsGenesisReleasePanel)'), "Genesis release diagnostics are removed from the visible startup stack");
assert(deferredLegacyHost.includes("renderNexusOsApplicationShellPanel()"), "diagnostic application shell is preserved only in the deferred host");
assert(deferredLegacyHost.includes("renderNexusOsGenesisReleasePanel()"), "Genesis release diagnostics are preserved only in the deferred host");
assert(deferredLegacyHost.includes('data-standard-user-startup-visible="false"'), "deferred host is explicitly not startup-visible");
assert(deferredLegacyHost.includes("hidden aria-hidden=\"true\""), "deferred host is hidden from Standard User first impression");

[
  "profile loaded",
  "domain packs active",
  "Keyboard focus starts at Ask Nexus",
  "assembled from Nexus OS core",
  "Enabled packs:",
  "Health/workforce safety:"
].forEach((diagnosticText) => {
  assert(shellPanel.includes(diagnosticText) || app.includes(diagnosticText), `diagnostic text still exists for internal/deferred review: ${diagnosticText}`);
  assert(!renderUserWorkspace.includes(diagnosticText), `visible startup template does not directly render diagnostic text: ${diagnosticText}`);
});

assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(renderUserWorkspace), "startup copy still avoids fake execution claims");
assert(packageJson.scripts["qa:nexus-standard-user-diagnostics-removal"] === "node scripts/nexus-standard-user-diagnostics-removal-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-standard-user-diagnostics-removal-qa.js"), "safe QA suite includes diagnostics removal QA");

console.log("Nexus Standard User diagnostics removal QA passed.");
