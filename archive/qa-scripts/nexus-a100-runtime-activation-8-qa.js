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

const learningSource = sourceBetween(app, "function a100TrainingLearningCard", "function a100WorkforceJobsCard");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(intentSource.includes("capability.id === \"learning\" ? a100TrainingLearningCard()"), "Learning prompts should attach learning guidance.");

[
  "Agriculture training",
  "irrigation lessons",
  "available courses",
  "beginner paths",
  "certificate-readiness review",
  "Find agriculture training",
  "Teach me irrigation basics",
  "Show available courses",
  "What should I learn next?",
  "Open the internal learning section"
].forEach(copy => assert(learningSource.includes(copy), `Learning card should include: ${copy}`));

[
  "Internal learning guidance only",
  "does not enroll the user",
  "issue certificates",
  "take payment",
  "mutate learning records",
  "hand off to a provider"
].forEach(copy => assert(learningSource.includes(copy), `Learning boundary should include: ${copy}`));

[
  "training",
  "course",
  "learning",
  "lesson",
  "certificate",
  "agriculture training"
].forEach(prompt => assert(intentSource.includes(prompt), `Learning prompt should be recognized: ${prompt}`));

[
  learningSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 8 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 8 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 8 source ${index} must not request geolocation.`);
  assert(!source.includes("window.open"), `Sprint 8 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 8 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 8 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 8 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 8 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 8 source ${index} must not add external/backend calls.`);
});

assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-8"], "node scripts/nexus-a100-runtime-activation-8-qa.js", "Sprint 8 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-8-qa.js"), "Sprint 8 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-8-qa] passed");
