const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `Missing source marker: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `Missing end marker after ${start}`);
  return source.slice(startIndex, endIndex);
}

const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const workforceSource = sourceBetween(app, "function a100WorkforceJobsCard", "function a100MarketplaceBrowsingCard");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(intentSource.includes("capability.id === \"workforce\" ? a100WorkforceJobsCard()"), "Workforce prompts should attach workforce guidance.");

[
  "Farm jobs",
  "work preparation",
  "job search plans",
  "skills review",
  "interview readiness",
  "Show me farm jobs",
  "Help me prepare for work",
  "Create a job search plan",
  "What skills do I need?",
  "Open the internal workforce section",
  "Draft an application checklist for human review"
].forEach(copy => assert(workforceSource.includes(copy), `Workforce card should include: ${copy}`));

[
  "Review-only workforce guidance",
  "does not submit applications",
  "message employers",
  "schedule shifts",
  "mutate records",
  "hand off to a provider"
].forEach(copy => assert(workforceSource.includes(copy), `Workforce boundary should include: ${copy}`));

[
  "job",
  "jobs",
  "workforce",
  "work",
  "role",
  "interview",
  "farm jobs"
].forEach(prompt => assert(intentSource.includes(prompt), `Workforce prompt should be recognized: ${prompt}`));

[
  workforceSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 9 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 9 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 9 source ${index} must not request geolocation.`);
  assert(!source.includes("window.open"), `Sprint 9 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 9 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 9 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 9 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 9 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 9 source ${index} must not add external/backend calls.`);
});

assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-9"], "node scripts/nexus-a100-runtime-activation-9-qa.js", "Sprint 9 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-9-qa.js"), "Sprint 9 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-9-qa] passed");
