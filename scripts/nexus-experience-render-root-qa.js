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

function count(source, needle) {
  return source.split(needle).length - 1;
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const renderUserWorkspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");

assert(count(renderUserWorkspace, 'data-nexus-genesis-experience-root="true"') === 1, "Standard User has exactly one Genesis experience root");
assert(count(renderUserWorkspace, 'data-nexus-standard-user-render-root="genesis-experience"') === 1, "Genesis root owns the Standard User render root");
assert(renderUserWorkspace.includes('data-nexus-os-standard-startup="calm"'), "Standard User still starts in calm Nexus OS mode");
assert(renderUserWorkspace.includes('data-nexus-genesis-first-viewport="true"'), "first viewport has an explicit Genesis target");
assert(renderUserWorkspace.indexOf('data-nexus-genesis-experience-root="true"') < renderUserWorkspace.indexOf('renderNexusCommandCenterHero'), "Genesis root wraps the primary command center");
assert(renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Command center", renderNexusCommandCenterHero)'), "primary command center remains rendered");
assert(app.includes('data-nexus-os-core-orb="true"'), "Nexus Core orb remains in the runtime surface");
assert(app.includes('data-nexus-os-voice-control="toggle-listening"'), "primary voice control remains available");
assert(app.includes('id="nexusCommandCenterInput"'), "primary typed command input remains available");
assert(renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Review workspace details", renderNexusOsDeferredLegacySurfaces)'), "legacy tools remain deferred instead of competing with startup");
assert(app.includes('data-nexus-os-deferred-legacy-surfaces="true"'), "deferred legacy host remains marked");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(renderUserWorkspace), "render root does not claim live execution");

assert(packageJson.scripts["qa:nexus-experience-render-root"] === "node scripts/nexus-experience-render-root-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-experience-render-root-qa.js"), "safe QA suite includes render root QA");

console.log("Nexus Genesis experience render root QA passed.");
