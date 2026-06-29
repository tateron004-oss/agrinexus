const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const app = read("public", "app.js");
const closeout = read("docs", "a100-runtime-activation-closeout.md");
const validation = read("docs", "a100-standard-user-runtime-validation.md");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

for (let sprint = 1; sprint <= 15; sprint += 1) {
  assert(pkg.scripts[`qa:nexus-a100-runtime-activation-${sprint}`], `Activation QA alias ${sprint} should be present.`);
  assert(qaSuite.includes(`scripts/nexus-a100-runtime-activation-${sprint}-qa.js`), `Activation QA ${sprint} should be wired into qa-suite.`);
}

[
  "Sprint 1 through Sprint 15 are complete",
  "lane is closed",
  "no additional runtime activation sprint train is being added",
  "Standard User testing, bug fixes, QA fixes, browser validation fixes, and small usability fixes only"
].forEach(copy => assert(closeout.includes(copy), `Closeout should include: ${copy}`));

[
  "safe-autonomy surface",
  "Safe task card controls",
  "Review-only preparation cards",
  "Provider readiness cards",
  "Route planning previews",
  "Agriculture, training, workforce/jobs, and marketplace cards",
  "High-risk actions are gated",
  "Voice-style and typed commands",
  "Session context is expanded in memory only"
].forEach(copy => assert(closeout.includes(copy), `Closeout should summarize completed runtime scope: ${copy}`));

[
  "does not automatically call",
  "message",
  "purchase",
  "pay",
  "dispatch",
  "request location",
  "start tracking",
  "open camera",
  "start microphone",
  "launch external navigation",
  "mutate inventory",
  "submit applications",
  "enroll users",
  "issue certificates",
  "hand off to providers",
  "expose secrets",
  "external-system mutation"
].forEach(copy => assert(closeout.includes(copy), `Closeout should preserve boundary: ${copy}`));

[
  "a100CapabilitySurfaceHtml",
  "a100SafeTaskControlsHtml",
  "a100ReviewOnlyPreparation",
  "a100ProviderReadinessCards",
  "a100RoutePlanningPreview",
  "a100AgricultureHelpCard",
  "a100TrainingLearningCard",
  "a100WorkforceJobsCard",
  "a100MarketplaceBrowsingCard",
  "a100HighRiskActionGates",
  "normalizeA100RuntimeCommand",
  "a100SafeFollowUpBackStack"
].forEach(symbol => assert(app.includes(symbol), `Runtime symbol should remain present: ${symbol}`));

assert(validation.includes("Manual Smoke Path"), "Sprint 14 validation doc should remain available.");
assert(!closeout.includes("Sprint 16"), "Closeout must not create a Sprint 16.");

console.log("[nexus-a100-runtime-activation-15-qa] passed");
