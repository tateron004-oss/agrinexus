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
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const missionWorkspace = sectionBetween(app, "function renderNexusAgenticMissionWorkspace()", "function renderNexusPremiumActivityReceiptsPanel");
const missionLifecycle = sectionBetween(app, "function renderNexusOsMissionLifecycleStatus()", "async function handleNexusOsMissionLifecycleAction");
const rail3Styles = sectionBetween(styles, "Genesis Experience Rail 3", "body.user-mode .nexus-workflow-landing-window");

assert(missionWorkspace.includes('data-nexus-home-to-mission-transition="true"'), "mission workspace has home-to-mission transition marker");
assert(missionWorkspace.includes('data-nexus-focused-mission-window="true"'), "mission workspace is marked as focused window");
assert(missionWorkspace.includes('tabindex="-1"'), "mission workspace can receive focus after transition");
assert(missionWorkspace.includes("Nexus focused mission workspace"), "mission workspace has focused accessible label");
assert(missionWorkspace.includes('data-nexus-home-to-mission-banner="true"'), "focused transition banner renders");
assert(missionWorkspace.includes("Focused mission open"), "transition banner has clear user-facing state");
assert(missionWorkspace.includes("Nexus is showing one mission workspace"), "transition banner explains focused mode");
assert((missionWorkspace.match(/data-nexus-return-home-from-mission="true"/g) || []).length >= 2, "return-home path is visible in banner and actions");
assert(missionWorkspace.includes('data-nexus-os-mission-action="return-home"'), "return-home path uses existing mission lifecycle action");
assert(missionLifecycle.includes('data-nexus-os-mission-action="return-home"'), "existing mission lifecycle return-home action remains available");
assert(missionWorkspace.includes("Nothing was sent externally") || missionWorkspace.includes("No external action is authorized"), "mission workspace preserves no-execution safety language");
assert(rail3Styles.includes('[data-nexus-focused-mission-window="true"]'), "focused mission window receives CSS treatment");
assert(rail3Styles.includes(".nexus-home-to-mission-banner"), "transition banner receives CSS treatment");
assert(rail3Styles.includes("scroll-margin-top: 18px !important"), "focused mission window supports clean scroll landing");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(missionWorkspace), "mission transition does not claim external execution");

assert(packageJson.scripts["qa:nexus-home-to-mission-transition"] === "node scripts/nexus-home-to-mission-transition-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-home-to-mission-transition-qa.js"), "safe QA suite includes home-to-mission transition QA");

console.log("Nexus home-to-mission transition QA passed.");
